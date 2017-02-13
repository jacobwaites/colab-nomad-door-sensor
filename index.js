const Nomad = require('nomad-stream')
const Particle = require('particle-api-js')
const credentials = require('./particle-login')
const _ = require('lodash')

const deviceID = '190029000447353138383138'
const events = ['beamStatus']

const particle = new Particle()
const nomad = new Nomad()

let instance = null
let token = null
let stream = null
let publish = null

particle.login(credentials).then(response => {
  token = response.body.access_token
  console.log(`Got token: ${token}`)

  return nomad.prepareToPublish()
}).then((n) => {
  instance = n
  instance.publish = _.throttle(instance.publish, 20000)
  return instance.publishRoot('Particle adaptor running')
}).then(() => {
  console.log("say something")
    return particle.getEventStream({ deviceId: deviceID, name: events[0], auth: token })
}).then(s => {
  stream = s
  stream.on('event', data => {
    const message = {
      data: data.data, 
      publishedAt: data.published_at, 
      event: data.name
    }
    console.log(message)
    console.log(`publishing: ${message.publishedAt}`)
    instance.publish(message)
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  })
  return Promise.resolve()
}).catch(err => {
    console.log(`Error: ${err}`)
})