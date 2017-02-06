# `forkable-js-base`

This is the CoLab's base repository to be used for all new projects using JavaScript that will be maintained by the CoLab, or people working with the CoLab.

This repo contains a custom `eslint` config file and the necessary `npm` packages to ensure code linting according to the CoLab javascript styleguide. We piggyback off the [Airbnb styleguide](https://github.com/airbnb/javascript), and the automated linter ensures strict adherence to the docs.

This repo's `package.json` file includes *only the minimum* necessary `devDependencies` and a `lint` script which you can run within your project. This way you're completely free to use this as the base for any new project, and still `npm init` without running into issues or odd configurations.

## Purpose

The purpose of this repo is to ensure javascript code consistency across all CoLab projects that use javascript.

For it to accomplish this purpose, it should serve as the project base for all new, long-term CoLab projects that use javascript. 

We are not automating the running of the `lint` command which comes bundled with the repo (which you'll see below). You have the flexibility to you to run it as you like during your development workflow.

**Be ye warned: Lint your code before committing!**

## Setup

Here is an example for how you might use this repo as the base for a new CoLab project that will use javascript. Your new project's name is, of all things, `my_new_project`.

1. Create a new GitHub repo. We'll assume that it, too, is named `my_new_project` (you'll use this repo as your new project's `origin` repo).

2. Clone this repo to use as `my_new_project`'s base. 

3. Set `my_new_project`'s origin to point at your new GitHub project (see step 1) repo for `my_new_project`.

4. Install the dependencies.

At this point, you're all set! 

Browse the code below to see what this looks like in practice.

```shell
# Make sure you've already created a new GitHub project called my_new_project

# Clone this base repo to use as my_new_project's foundation
> git clone -b master --single-branch https://github.com/IDEO-coLAB/forkable-js-base.git my_new_project

# Enter your my_new_project's directory
> cd my_new_project

# Set my_new_project's remote origin to be the GitHub repo you created for it
> git remote set-url origin git@github.com:<YOUR_GITHUB_USERNAME>/my_new_project.git

# Install project dependencies listed in package.json
> npm install
```

## Usage

After you setup your repo with `npm init` and `npm install`, then you can run the `npm lint` command that automatically came bundled in your project's `package.json` file at any time.

**Note: Whether manually run, or run via a custom build script, the `lint` command must be run before commiting your code.**

### Example

Here's how you can manually run the linter.

```shell
# First, add some crappy js to your project...
> touch foo.js
> echo 'var foo = 2' > foo.js

# Then watch the linter complain!
> npm run lint
```

## Additional References

- [Setting git remote urls](https://help.github.com/articles/changing-a-remote-s-url/) (referenced above in [Setup](#setup))
- [Adding a remote](https://help.github.com/articles/adding-a-remote/) (additional reference)

## License

MIT © IDEO CoLab
