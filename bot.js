console.log('El bot esta listo para INFY');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on(?message', (message) => {
	if (message.content == 'hola'){
		message.channel.sendMessage({message: "Hello World", tts: true});
});
bot.login('Mzc0NjAxNTQ3MzQ4MTgwOTky.DNm_cg.UwrimGeUzAT4ip9T7Lh1vChFC5s');
