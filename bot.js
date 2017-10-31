console.log('Estoy listo para servir al clan :D!');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola'){
		message.channel.sendMessage('Hola! :D');
	}
});
bot.login('Mzc0NjAxNTQ3MzQ4MTgwOTky.DNm_cg.UwrimGeUzAT4ip9T7Lh1vChFC5s');
