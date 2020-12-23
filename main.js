const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!!";
const fs = require('fs');
var data = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('DG is online');
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } 
    if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    } 
});

client.login(data.keys);


