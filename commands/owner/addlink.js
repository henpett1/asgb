const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color
const fs = require('fs')

module.exports = {
	name: 'addlink',
	description: 'shows the owner the servers',
	execute(msg, args, client) {
        if (msg.author.id === "419947305102475264") {
            const newlink = `\n${args[0]}`;
            fs.appendFile('./links.txt', newlink, 'utf-8', function (err) {
              console.log(err);
            });
        const help1 = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('addlink:')
        .setDescription(`added the link: ${args[0]}`)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(help1)
        } else {
            msg.reply("this is a owner only command since it does not have any general purpouse other than showing the servers the bot is in")
        }
        const link = args[0]

        const webhookembed = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('Added a new link!')
        .addField("Link:", `${link}`)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)


        const token = "webhook id here"
        const id = "webhook id here"
        const webhook = new Discord.WebhookClient(id, token)
        webhook.send('<@&role id for it to ping>')
        webhook.send(webhookembed)        
        //https://discord.com/api/webhooks/861350262413328385/NYUawouPwI-vItSrJcZU1mWkeDZ6i0ZnT0J-l9A98D_aXSqOrkDf0uITImnwDitxkMoU

	},
};
