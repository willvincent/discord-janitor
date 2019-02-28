# Discord Janitor

The Discord Janitor is a small bot that will remove messages older than a configured date from any channel it's added to.

Created for use with [Shinobi](https://shinobi.video/), to automatically clear motion alert messages from discord after a certain amount of time.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)


## Setup & basic usage

1. Copy the provided `.env.dist` file to `.env`
1. Populate your bot key, and desired message expiration age, change to alternate run frequency as desired
1. Copy the provided `servers.json.dist` file to `servers.json`
1. Populate the servers.json with an object for each server, and an array of channels on each server to monitor
1. Install node packages, and run the script:

   ```
   yarn install
   yarn start
   ```

## Notes

Ultimately you probably want to run this on a remote server somewhere, and keep it alive with pm2 or similar.

Be aware that it may take a while to remove lots of old messages, or if your server is exceptionally busy this may not work at all as it currently exists.