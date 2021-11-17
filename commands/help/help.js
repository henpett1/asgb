const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color

module.exports = {
	name: 'help',
	description: 'shows the help menu',
	execute(msg, args) {
        const help1 = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('help:')
        .setDescription('`help commands`')
        .addField(`${prefix}help`, '`shows this menu.`')
        .addField(`${prefix}invite`, '`sends you a invite to invite the bot.`')
        .addField(`${prefix}report`, '`sends the link you reported to the owner of the bot.`')
        .addField(`${prefix}sites`, '`shows the sites i look out for!`')
        .addField(`${prefix}discord`, '`gives you a link to our Disocrd where you can find updates etc.`')
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(help1)
	},
};




