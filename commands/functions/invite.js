const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color

module.exports = {
	name: 'invite',
	description: 'creates a invite link for the bot',
	execute(msg, args) {
        const invite = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('invite link')
        .setDescription('here is a invite to invite the bot to your own server')
        .setFooter("anti steam grabber", thumbnailurl)
        .setURL("botinvite here")
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(invite)
        msg.channel.send("bot invite here")
	},
};
