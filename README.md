# Tabletop Slay the Spire Tierlist

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Feedback](#feedback)
- [Build Process](#build-process)
- [Committing](#committing)
- [Acknowledgments](#acknowledgments)

## Introduction

[![Build Status](https://github.com/brentspector/tt-slay-tiers/actions/workflows/webApp.yml/badge.svg)](https://github.com/brentspector/tt-slay-tiers/actions/workflows/webApp.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## Features

Coming soon!

## Feedback

Coming soon!

## Build Process

- Follow the [Ionic Guide](https://ionicframework.com/docs/intro/environment) for getting started building the project. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `npm install` to install dependencies
- `ionic serve --external` to spin up the web-app
- `ionic capacitor open ios` requires appropriate setup in a [Mac Environment](https://ionicframework.com/docs/developing/ios)
- `ionic capacitor open andriod` requires appropriate setup with [Android Studio](https://ionicframework.com/docs/developing/android)

### Production Build

Any commit to the `main` branch triggers a Github Action that rebuilds the project and updates https://brentspector.github.io/tt-slay-tiers/.

However, if you wish to preview the production build locally, a Dockerfile has been created to do just that!

From the project room, run the following commands. NOTE: You may need to elevate permissions by using `sudo`.

```bash
scripts/docker_build.sh
scripts/docker_run.sh
```

Then navigate to `localhost:8080` to see the product.

## Single File Component

Vue.js recommends combining HTML, CSS, and Javascript into one file, represented with the `.vue` file extension. More details on the rationale behind this can be found at https://v3.vuejs.org/guide/single-file-component.html#how-it-works

## Committing

Run `npm run commit` to automatically use `Commitizen`.

This repo requires every commit to be signed. To configure this locally, follow the instructions at https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits

If you're using SSH, follow the steps at [Github SSH Signing Keys](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification)
1. Make sure you have the SSH keys available on your local machine and not just in the devcontainer (/workspaces/tt-slay-tiers). The keys can be lost if the environment is destroyed.
2. Place the SSH Public Key into the devcontainer
3. Configure git to point to the SSH keys
```bash
git config --global gpg.format ssh
git config --global user.signingkey PATH/TO/YOUR/KEY
```