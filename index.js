const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'BittuSmp.play.hosting', // SMP IP
    port: 25565,
    username: 'BittuAFK'           // cracked hai, kuch bhi naam rakh sakte ho
  })

  bot.on('spawn', () => {
    console.log('✅ AFK Bot joined the server')

    // simple anti-AFK (thoda jump)
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, 60000)
  })

  bot.on('end', () => {
    console.log('❌ Disconnected, reconnecting in 5s...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', err => console.log('Error:', err))
}

startBot()
