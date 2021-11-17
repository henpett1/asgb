const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix;
const token = config.token;
const color = config.color;
const thumbnailurl = 'https://cdn.discordapp.com/attachments/833788206209957919/855201547579424788/four_a_logo.png';
const webid = "webhook id here"
const webtoken = "webhook token here"


const activities = [
    `over ${client.guilds.cache.size} servers`,
    "for steam grabber links",
    `${prefix}help`,
    `${prefix}report to report link`
  ];



client.on("ready", async () => {
    console.log(`logged in as ${client.user.tag}!`)
    console.log(`bot is in ${client.guilds.cache.size} servers!`)
        // run every 10 seconds
        setInterval(() => {
            // generate random number between 1 and list length.
            const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
            const newActivity = activities[randomIndex];
        
            client.user.setActivity(newActivity, { type: 'WATCHING' });
          }, 10000);
})


//command handler
client.commands = new Discord.Collection();

load_command("./commands/");

function load_command(path) {
	fs.readdir(path, function (err, files) {
		for (const commands of files) {
			if (is_folder(`${path + commands}/`)) {
				load_command(`${path + commands}/`);
			} else if ((path + commands).endsWith(".js")) {
				const command = require(`${path + commands}`);
				client.commands.set(command.name, command);
			}
		}
	});
}

function is_folder(path) {
	try {
		return fs.lstatSync(path).isDirectory();
	} catch {
		return false;
	}
}

client.on("message", (msg) => {
	if (!msg.content.startsWith(prefix)) return;
	const args = msg.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	if (client.commands.get(command)) {
        console.log(`the command ${command} was used in the server ${msg.guild}!`)
        const webhook = new Discord.WebhookClient(webid, webtoken)
        webhook.send(`the command **${command}** was used in the server **${msg.guild}**!`)
		client.commands
			.get(command)
			.execute(msg, args, client, Discord);
	}
});

client.on('message', msg => {
if(msg.mentions.users.first()) {
  if(msg.mentions.users.first().id === '855178958218461195') return msg.channel.send(`Prefix is **${prefix}**`)
}
});

const readline = require('readline')

    client.on('message', async message => {
      const fileStream = fs.createReadStream('./links.txt');
        
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      for await (const line of rl) {
        if(message.content.toLowerCase().includes(line.toLowerCase())) {
            message.delete();
            console.log(`deleted message: ${message}, from ${message.author.tag}`)
            message.channel.send(`deleted the message due to it beeing a malicious link`).then(msg => {
              msg.delete({ timeout: 15000 /*time unitl delete in milliseconds*/});
          })
            message.author.send(`deleted the message you sent due to it beeing a malicious link dont send that message again!`).catch('this user does not have dms open')

            const webhookembed = new Discord.MessageEmbed()
            .setThumbnail(thumbnailurl)
            .setColor(color)
            .setTitle('message deleted')
            .setDescription(`deleted a message!`)
            .addField("form server:", `${message.guild}`)
            .addField("message:", `deleted message: ${message}`)
            .addField("from user:", `${message.author.tag}`)
            .setFooter("anti steam grabber", thumbnailurl)
            .setTimestamp()
            .setAuthor('anti steam grabber.', icon_url=thumbnailurl)
    
    
            const webhook = new Discord.WebhookClient(webid, webtoken)
    
            
            webhook.send(webhookembed)
        };
      };
    });

client.login(token)