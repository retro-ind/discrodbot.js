const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
var prefix = "r-";
client.on('message', msg => {  
    if(msg.author.bot) return;
    if (msg.content === prefix+'ping') {     
        msg.reply('Pong!');   
    } 
});
client.login('token');
