const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Estoy listo!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.Mzc0NjAxNTQ3MzQ4MTgwOTky.DNm_cg.UwrimGeUzAT4ip9T7Lh1vChFC5s);
