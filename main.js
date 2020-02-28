const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
var prefix = "r-";
client.on('message', msg => {
    var args = msg.content.split(' ');
    
    if(msg.author.bot) return;
    if (msg.content.toLowerCase() === prefix+'ping') {     
        msg.channel.send(`Pong! API latency is ${Math.round(client.ping)} ms`);
    }
    if (msg.mentions.users.first() !== undefined && msg.mentions.users.first().id == client.user.id) {     
        msg.channel.send('What do you want *human*?');
    }
    if (msg.content.toLowerCase() === prefix) {     
        msg.channel.send('Specify Command or r-help for command list');
    }
    if (msg.content.toLowerCase() === prefix+'help') {     
        msg.channel.send('\nCommandlist:\n```r-help : This List!\nr-ping : Pong! \nr-kill (mention user) : kills the mentiond user \nr-joke : jokes \nr-v : version```');
    }
    if (msg.content.toLowerCase().startsWith(prefix+'kill')) {
        if (msg.mentions.users.first() !== undefined ) {
            msg.channel.send(msg.mentions.users.first().username+' was killed mercilessly');
        } else {
            msg.channel.send(msg.content.substring(args[0].length+1, msg.content.length)+' was killed mercilessly');   
        }   
   }
   var array = ['Your Life','Not right now','Вы шутка, лол','***BEAN***'];
    function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
    }
    if (msg.content.toLowerCase() === prefix+'joke') {     
        msg.channel.send(choose(array));
    }
    if (msg.content.toLowerCase() === prefix+'v') {     
        msg.channel.send('V:Alpha 0.0.2 Last Update 12:55 PM Friday, February 28, 2020');
    }
    if (msg.content.toLowerCase() === 'cringe') {     
        msg.channel.send('***WARNING CRINGE NORMIE DETECTED*** \n ***DESTROY CRINGE NORMIE? Y N?***');
    }
    if (msg.content.toLowerCase() === prefix+'y') {
        msg.channel.send('***DESTROYING CRINGE NORMIE***');
    }
    if (msg.content.toLowerCase() === prefix+'n') {     
        msg.channel.send('***CRINGE NORMIE DESTRUCTION CANCELED***');
    }const Discord = require('discord.js'); 
const client = new Discord.Client();  
client.on('ready', () => {   
    console.log(`Logged in as ${client.user.tag}!`); 
});
var prefix = "r-";
client.on('message', msg => {
    var args = msg.content.split(' ');
    
    if(msg.author.bot) return;
    if (msg.content.toLowerCase() === prefix+'ping') {     
        msg.channel.send(`Pong! API latency is ${Math.round(client.ping)} ms`);
    }
    if (msg.mentions.users.first() !== undefined && msg.mentions.users.first().id == client.user.id) {     
        msg.channel.send('What do you want *human*?');
    }
    if (msg.content.toLowerCase() === prefix) {     
        msg.channel.send('Specify Command or r-help for command list');
    }
    if (msg.content.toLowerCase() === prefix+'help') {     
        msg.channel.send('\nCommandlist:\n```r-help : This List!\nr-ping : Pong! \nr-kill (mention user) : kills the mentiond user \nr-joke : jokes \nr-v : version```');
    }
    if (msg.content.toLowerCase().startsWith(prefix+'kill')) {
        if (msg.mentions.users.first() !== undefined ) {
            msg.channel.send(msg.mentions.users.first().username+' was killed mercilessly');
        } else {
            msg.channel.send(msg.content.substring(args[0].length+1, msg.content.length)+' was killed mercilessly');   
        }   
   }
   var array = ['Your Life','Not right now','Вы шутка, лол','***BEAN***'];
    function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
    }
    if (msg.content.toLowerCase() === prefix+'joke') {     
        msg.channel.send(choose(array));
    }
    if (msg.content.toLowerCase() === prefix+'v') {     
        msg.channel.send('V:Alpha 0.0.2 Last Update 12:55 PM Friday, February 28, 2020');
    }
    if (msg.content.toLowerCase() === 'cringe') {     
        msg.channel.send('***WARNING CRINGE NORMIE DETECTED*** \n ***DESTROY CRINGE NORMIE? YES, NO?***');{
    }
      if (msg.content.toLowerCase() === (prefix+'yes')) {
        msg.channel.send('***DESTROYING CRINGE NORMIE***');
      } else {
      msg.channel.send('***CRINGE NORMIE DESTRUCTION CANCELED***');
      }
    
    }
});

