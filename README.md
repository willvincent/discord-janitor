# Discord Janitor

The Discord Janitor is a small bot that will remove messages older than a configured date from any channel it's added to.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Setup & basic usage

1. Copy the provided `.env.dist` file to `.env`
1. Populate your bot key, and desired message expiration age
1. Copy the provided `servers.json.dist` file to `servers.json`
1. Populate the servers.json with an object for each server, and an array of channels on each server to monitor
1. Install node packages, and run the script:

   ```
   yarn install
   yarn start
   ```

## Notes

Ultimately you probably want to run this on a remote server somewhere, and keep it alive with pm2 or similar.
