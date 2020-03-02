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
        msg.channel.send('\nCommandlist:\n```r-help : This List!\nr-ping : Pong! \nr-kill (mention user) : kills the mentiond user \nr-joke : jokes \nr-v : version \nr-about : info about R.O.B.```');
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
    if (msg.content.toLowerCase() === prefix+'about') {     
        msg.channel.send('R.O.B. (Robotic Operating Buddy) is a toy robot accessory for the Nintendo Entertainment System (NES). It was launched in July 1985 as the Family Computer Robot[a] in Japan, and October 1985 as R.O.B. in North America. Its short lifespan yielded only two games in the Robot Series: Gyromite and Stack-Up. Following the devastating North American video game crash of 1983, Nintendo alleviated the fearful retail market by rebranding its Japanese Famicom video game console as the Nintendo Entertainment System—a new platform focused on R.O.B. to further reclassify the system as a uniquely sophisticated toy experience instead of simply as a video game console.[1][2] Computer Entertainer magazine in June 1985 called R.O.B. "the world's only interactive robot".[3] The extensive marketing plan centered on R.O.B., which began at the October 1985 test market launch of the NES, was ultimately successful. This launch represented Nintendo's debut in the North American video game console market, and yielded the revitalization of the entire video game industry. Although R.O.B. was quietly discontinued a few years later, it is nevertheless remembered as a successful Trojan Horse of marketing, and has even gained renewed attention as a playable character within the Super Smash Bros. series.');
    }
});


