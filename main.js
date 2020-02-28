const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
var prefix = "r-";
client.on('message', msg => {  
    
    if(msg.author.bot) return;
    if (msg.content.toLowerCase() === prefix+'ping') {     
        msg.reply('Pong!');
    }
    if (msg.content.toLowerCase() === prefix) {     
        msg.reply('Specify Command or r-help for command list');
    }
    if (msg.content.toLowerCase() === prefix+'help') {     
        msg.reply(
                  \n'Command list:' 
                  \n'r-help : This List!'
                  \n'r-ping : Pong!'
                  );
    
    }
    } 
});

