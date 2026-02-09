const mineflayer = require('mineflayer')

const botOptions = {
  host: 'BittuSmp.play.hosting',
  port: 25565,
  username: 'arvindKejrival',
  version: '1.21.4',
  auth: 'offline' // IMPORTANT for cracked servers
}

let loggedIn = false

function startBot () {
  const bot = mineflayer.createBot(botOptions)

  bot.once('spawn', () => {
    console.log('✅ Bot joined server')

    // Login only ONCE after joining
    setTimeout(() => {
      if (!loggedIn) {
        bot.chat('/login afk123')
        loggedIn = true
        console.log('🔐 Logged in successfully (one time)')
      }
    }, 3000)
  })

  bot.on('end', () => {
    console.log('❌ Disconnected, reconnecting in 5s...')
    loggedIn = false
    setTimeout(startBot, 5000)
  })

  bot.on('kicked', reason => {
    console.log('🚫 Kicked:', reason)
  })

  bot.on('error', err => {
    console.log('⚠ Error:', err.message)
  })
}

startBot()
