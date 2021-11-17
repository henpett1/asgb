const Discord = require('discord.js')
const config = require('../../config.json')
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const prefix = config.prefix;
const color = config.color
module.exports = {
	name: 'report',
	description: 'reports a link',
	execute(msg, args) {
        const report = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('link reported!')
        .setDescription('`your report has been sent to the owner of this bot.`')
        .addField(`link reported:`, `${args[0]}`)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(report)

                const guilde = msg.guild || "-"
                const link = args[0] || "-"
        const webhookembed = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('reported link!')
        .setDescription(`from the server ${guilde}`)
        .addField("member:", `${msg.author.tag}`)
        .addField("link:", `${link}`)
        .addField("additional info:", msg)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)


        const token = "webhook token here"
        const id = "webhook id here"
        const webhook = new Discord.WebhookClient(id, token)
        
        
        webhook.send(webhookembed)
        webhook.send(link)
	},
};
