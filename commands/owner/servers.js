const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color

module.exports = {
	name: 'servers',
	description: 'shows the owner the servers',
	execute(msg, args, client) {
        if (msg.author.id === "419947305102475264") {
            console.log(`bot is in ${client.guilds.cache.size} servers`)
            client.guilds.cache.forEach(guild => {
                console.log(`${guild.name} | ${guild.id}`);
              })
        const help1 = new Discord.MessageEmbed()
        .setThumbnail(thumbnailurl)
        .setColor(color)
        .setTitle('servers:')
        .setDescription(`the bot is in ${client.guilds.cache.size} servers`)
        .setFooter("anti steam grabber", thumbnailurl)
        .setTimestamp()
        .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
        msg.channel.send(help1)
        } else {
            msg.reply("this is a owner only command since it does not have any general purpouse other than showing the servers the bot is in")
        }
	},
};


