const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'BittuSmp.play.hosting',
    port: 25565,
    username: 'arvindKejrival', // NEW NAME
    auth: 'offline'
  })

  bot.once('spawn', () => {
    console.log('✅ AFK Bot joined')

    // SimpleLogin auto register + login
    setTimeout(() => {
      bot.chat('/register afk123 afk123')
      bot.chat('/login afk123')
    }, 2000)

    // anti-AFK
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, 60000)
  })

  bot.on('end', () => {
    console.log('❌ Disconnected, reconnecting...')
    setTimeout(startBot, 5000)
  })

  bot.on('kicked', reason => console.log('🚫 Kicked:', reason))
  bot.on('error', err => console.log('⚠️ Error:', err))
}

startBot()
