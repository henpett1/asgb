const Discord = require('discord.js')
const config = require('../../config.json')
const prefix = config.prefix;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const color = config.color
const fs = require('fs')
module.exports = {
	name: 'sites',
	description: 'shows the sites the bot is looking for',
	execute(msg, args) {
                try {
                        const data = fs.readFileSync('./links.txt', 'utf8')
                        let codeblock = "```"
                        const help1 = new Discord.MessageEmbed()
                        .setThumbnail(thumbnailurl)
                        .setColor(color)
                        .setTitle('Sites:')
                        .setDescription(`Use ${prefix}report to report a site, this might not be updated 100% of the time, if you wonder if your link is added just type it in chat and see if it gets deleted.`)
                        .addField("The current sites im looking for!",`${codeblock}${data}${codeblock}`)
                        .setFooter("Anti Steam Grabber", thumbnailurl)
                        .setTimestamp()
                        .setAuthor('Anti Steam Grabber.', icon_url=thumbnailurl)
                        msg.channel.send(help1)	
                      } catch (err) {
                        console.error(err)
                      }

},

};




