console.log('El bot esta funcionando');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) => {
	if (message.content == '!scrim') {
			message.channel.send("Horarios Scrim: De Viernes a Domingos (De 4 a 8)", {
			tts: true
			})
	}
	
});
bot.login('Mzc0NjAxNTQ3MzQ4MTgwOTky.DNjqZg.azMs_Syyoq4tf0mz40maSHK87fU');
