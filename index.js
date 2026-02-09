const mineflayer = require('mineflayer')

function startBot () {
  let loginSent = false

  const bot = mineflayer.createBot({
    host: 'BittuSmp.play.hosting',
    port: 25565,
    username: 'arvindKejrival',
    version: false
  })

  bot.once('spawn', () => {
    console.log('[BOT] Joined server')

    // send login ONLY ONCE after joining
    if (!loginSent) {
      loginSent = true
      setTimeout(() => {
        bot.chat('/login afk123')
        console.log('[BOT] Login sent once')
      }, 3000)
    }

    startAfk(bot)
  })

  bot.on('end', () => {
    console.log('[BOT] Disconnected, reconnecting in 5s...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', err => {
    console.log('[ERROR]', err.message)
  })
}

function startAfk (bot) {
  setInterval(() => {
    if (!bot.entity) return

    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)

    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 700)
  }, 30000)
}

startBot()
