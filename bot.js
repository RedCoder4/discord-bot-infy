console.log('El bot esta funcionando');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) => {
	if (message.content == '!scrim') {
			message.channel.send("Horarios Scrim: De Viernes a Domingos (De 4 a 8)", {
			tts:false
			})
	}
	if (message.content == '!mikel') {
			message.channel.send("TheMaik96, mid laner del equipo: Este chico es pura skill con una goodpull bien grande. Solo el lag le para!", {
			tts:false
			})
	}
	if (message.content == '!rivas') {
			message.channel.send("Rivasito, solo laner del equipo: Mejor jugador, streamer y de todo lo que puedas imaginar de EU y pronto mundial!", {
			tts:false
			})
	}
	if (message.content == '!adnayerc') {
			message.channel.send("Adnayerc, support del equipo: Amante del bodyblock, gran defensor de este rol hasta la muerte!!", {
			tts:false
			})
	}
	if (message.content == '!roster') {
			message.channel.send("Roster actual(IDs):\n-MID: TheMaik96\n-ADC: LF\n-Jungle: LF\n-Support: Adnáyerc\n-Solo: Rivasito\n-Suplentes: LF", {
			tts: false
			})
	}
});
bot.login('Mzc0NjAxNTQ3MzQ4MTgwOTky.DNjqZg.azMs_Syyoq4tf0mz40maSHK87fU');
