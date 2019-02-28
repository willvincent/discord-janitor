require('dotenv').config()
const moment = require('moment')
const Discord = require('discord.js')
const client = new Discord.Client()

const older_than = process.env.DELETE_AFTER.split(' ')

const servers = require('./servers.json')

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})

const init = async () => {

  await client.login(process.env.BOT_TOKEN)

  cleanup()
}

init()

const cleanup = async () => {
  const deleted = []

  for (const [serverId, server] of client.guilds) {
    if (servers.map(s => s.server_id).includes(serverId)) {
      for (const [channelId, channel] of server.channels) {
        if (channel.type === 'text') {
          if (servers.find(s => s.server_id == serverId).channels.includes(channelId)) {
            deleteCount = 0
            const messages = await channel.fetchMessages({ limit: 100 })
            for (const [msgId, msg] of messages) {
              if (moment(msg.createdTimestamp).isBefore(moment().subtract(...older_than))) {
                msg.delete()
                deleteCount++
              }
            }

            deleted.push({ server: server.name, channel: channel.name, deleting: deleteCount })
          }
        }
      }
    }
  }

  if (deleted.length)
    console.table(deleted)

  setTimeout(cleanup, (+process.env.FREQUENCY * 1000))
}