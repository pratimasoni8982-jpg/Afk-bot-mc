const mineflayer = require('mineflayer')

let loggedIn = false

function startBot() {
  const bot = mineflayer.createBot({
    host: 'BittuSmp.play.hosting',
    port: 25565,
    username: 'arvindKejrival',
    auth: 'offline',          // IMPORTANT for cracked
    version: '1.21.4',        // FORCE VERSION
    keepAlive: true
  })

  bot.once('spawn', () => {
    console.log('[BOT] Joined server successfully')

    if (!loggedIn) {
      setTimeout(() => {
        bot.chat('/login afk123')
        loggedIn = true
        console.log('[BOT] Logged in once')
      }, 3000)
    }
  })

  bot.on('end', () => {
    console.log('[BOT] Disconnected, reconnecting in 10s...')
    loggedIn = false
    setTimeout(startBot, 10000)
  })

  bot.on('error', err => {
    console.log('[BOT ERROR]', err.message)
  })

  bot.on('kicked', reason => {
    console.log('[BOT KICKED]', reason)
  })
}

startBot()
