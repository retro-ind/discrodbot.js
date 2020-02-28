const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
var prefix = "r-";
client.on('message', msg => {  
    
    if(msg.author.bot) return;
    if (msg.content.toLowerCase() === prefix+'ping') {     
        msg.channel.send('Pong!');
    }
    if (msg.mentions.users.first() !== undefined && msg.mentions.users.first().id == client.user.id) {     
        msg.channel.send('What do you want *human*?');
    }
    if (msg.content.toLowerCase() === prefix) {     
        msg.channel.send('Specify Command or r-help for command list');
    }
    if (msg.content.toLowerCase() === prefix+'help') {     
        msg.channel.send('\nCommand list:\nr-help : This List!\nr-ping : Pong!');
    }
    if (msg.content.toLowerCase() === .startsWith(prefix+'kill') && msg.mentions.users.first() !== undefined ) {     
        msg.channel.send(msg.mentions.users.first().username+' was killed mercilessly');
    }
});

