const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color

module.exports = {
	name: 'discord',
	description: 'sends a invite to the server',
	execute(msg, args) {
        const invite = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('invite link')
        .setDescription('here is a invite to invite the server.')
        .setFooter("anti steam grabber", thumbnailurl)
        .setURL("invite here")
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(invite)
        msg.channel.send("invite here")
	},
};
