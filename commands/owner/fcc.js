const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color

module.exports = {
	name: 'fcc',
	description: 'clears the console',
	execute(msg, args, client) {
        if (msg.author.id === "419947305102475264") {
            console.clear()
            console.log(`logged in as ${client.user.tag}!`)
            console.log(`bot is in ${client.guilds.cache.size} servers!`)
        const help1 = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('fcc:')
        .setDescription(`cleared the console.`)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(help1)
        } else {
            msg.reply("this is a owner only command since it does not have any general purpouse other than clearing the console")
        }
	},
};
