const Discord = require('discord.js');
const gco = new Discord.Client();
const ytdl = require('ytdl-core');
const sql = require("sqlite");
const fs = require("fs");
const weather = require('weather-js');
const db = require('quick.db');
const moment = require('moment');
require('moment-duration-format') 

sql.open("./score.sqlite");
gco.on('ready', () => {
  console.log('gco is ready!'); 
  let guilds = gco.guilds.array()
gco.user.setPresence({game:{name:`Pokemon GOA | just use gcohelp | Running on ${guilds.length} guilds `, type:0}})
});

  gco.on("reconnecting", () => {
      console.log("i was wasting time");
  });

  gco.on("resume", () => {
      console.log("im back");
  
});

gco.on("message", message => { 
  if (message.content.startsWith(prefix + "test")) {
    message.channel.send("im working thanks for checking.");
  }
 if (message.content.startsWith(prefix + "uptime")) {
    if (message.author.bot) return
          message.channel.send(`${gco.user.tag} Uptime: ` + moment.duration(gco.uptime).format(" D [Days], H [Hours], m [Minutes], s [Seconds]"));
  }
  if (message.content.startsWith(prefix + "rservers")) {
    if (message.author.bot) return
    let guilds = gco.guilds.array()
    message.channel.send(`i am running on ${guilds.length} server hope that will make you happy`);
   }
if (message.content.startsWith(prefix + "invite")) {
    if (message.author.bot) return
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=309565853307764736&scope=bot&permissions=2146958591');
   }
if (message.content.startsWith(prefix + "server")) {
    if (message.author.bot) return
    message.channel.send('https://discord.gg/HGfRqg');
   }
  // If the message is "what is my avatar"
 if (message.content.startsWith(prefix + "avatar")) {
    if (message.author.bot) return
     if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar:\n\
             ${user.displayAvatarURL}`;
        });
    
        message.channel.send(avatarList);
  }
});
gco.on("message", message => { //in here it must go the setavatar
  if (message.content.startsWith(prefix + "developers")) {
    if (message.author.bot) return
   const embed = new Discord.RichEmbed()
  .setTitle(" main owner made by reuben fernandes")
  .setAuthor("Author Name")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("special thanks to BlackB1RD#9266   MysticB#9712   3ddelano#6033  Arun Kapil#2297.")
  .setFooter("if you want to join us join gco")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Reuben chagas fernandes", "Gco360full.", true);

  message.channel.send({embed});
  }
  });
gco.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} and the id is ${guild.id}. This guild has ${guild.memberCount} members!`);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send(`i have joined a server ${guild.name} This guild has ${guild.memberCount} members! if you really want to help us you can join Gco it is a bot made by reuben first goan bot you can join us at https://discord.gg/rtQpjaJ  gco https://cdn.discordapp.com/attachments/306063087641821185/371895552901644289/Gco.png`);
guild.owner.send(`bot made by reuben remember that welcome and goodbye works only if you have a general channel support us at  https://discord.gg/errvBk2 join here.`);
  gco.channels.get('370563395784671244').send({embed: {
color: 0xff0202,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "joined server",
description: `New guild joined: ${guild.name} and the id is ${guild.id}. This guild has ${guild.memberCount} members!`,
timestamp: new Date(),
footer: {
  icon_url: gco.user.avatarURL,
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on("guildDelete", guild => {
console.log(`i have left  ${guild.name} and the id is ${guild.id}`);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send(`Thank you for using Gco 360 full`);
gco.channels.get('370563395784671244').send({embed: {
color: 0xff6a00,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "left  server",
description: `New guild left: ${guild.name} and the id is ${guild.id}. `,
timestamp: new Date(),
footer: {
  icon_url: gco.user.avatarURL,
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on("guildMemberAdd", member => {
console.log(`welcome to ${member.guild} hope you stay  here for a long time `);
const welcomechannel = member.guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send({embed: {
color: 0xd800ff,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "joined server",
description: `olá.. welcome ${member.user.tag} to ${member.guild} this is the best guild  `,
timestamp: new Date(),
footer: {
  icon_url: gco.user.avatarURL, //hello is it here hello hello hello hello hello heloo hello
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on("guildMemberRemove", member => {
console.log(`bye bye ${member.user.tag} hope you stay here for a long time `);
const welcomechannel = member.guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send({embed: {
color: 0xffe100,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "left server",
description: `adeus.. bye bye ${member.user.tag} i thought you loved this server`,
timestamp: new Date(),
footer: {
  icon_url: gco.user.avatarURL,
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on("guildBanAdd", guild => {
console.log(`$guild.userr.tag} was banned`);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send({embed: {
color: 0xffe100,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "banned",
description: `${guild.user.tag} was banned`,
timestamp: new Date(),
footer: {
  url: gco.user.avatarURL,
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on("guildBanRemove", guild => {
console.log(`unbanned `);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send({embed: {
color: 0xffe100,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "unban",
description: ` ${guild.user.tag} was unbanned`,
timestamp: new Date(),
footer: {
  url: gco.user.avatarURL,
  text: "bot made by Reuben Fernandes"
}
}
});
}
});
gco.on('message', message => {
 if (message.content.startsWith("8ball")) {
   if (message.author.bot) return
   var sayings = ["It is certain :smile:",
										"It is decidedly so :smile:",
										"Without a doubt :sunglasses:",
										"Yes, definitely :sunglasses:",
										"You may rely on it",
										"As I see it, yes",
										"Most likely :thinking: ",
										"Outlook good :smile: ",
										"Yes :smile: ",
										"Signs point to yes",
										"Reply hazy try again :dizzy_face:",
										"Ask again later :dizzy_face: ",
										"Better not tell you now :dizzy_face:",
										"Cannot predict now :thinking: ",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no :astonished:",
										"My sources say no :astonished: ",
										"Outlook not so good",
                     "Very doubtful :thinking: "];

   var result = Math.floor((Math.random() * sayings.length) + 0);
   message.reply(sayings[result]);
}

 if (message.content.startsWith(prefix + 'pat')) {
   if (message.author.bot) return
    var member = message.mentions.members.first();
if (!member) return message.channel.send("Mention someone to use this command.");
   message.reply(`${message.author.tag} patted ${member.user}`);
   var sayings = ["https://tenor.com/wCHv.gif",
										"https://tenor.com/zS41.gif",
										"https://tenor.com/HXgo.gif",
										"https://tenor.com/HXgo.gif",
										"https://tenor.com/wV2b.gif",
										"https://tenor.com/QvHK.gif",
										"https://tenor.com/FYaT.gif",
										"https://tenor.com/x7lY.gif",
										"https://tenor.com/xUUL.gif",
										"https://tenor.com/PM1V.gif",
										"https://tenor.com/rjm5.gif",
										"https://media.discordapp.net/attachments/342334549646114817/374637434698334208/kanna_pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660803710877696/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660803710877696/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660825039044609/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660514157101056/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664277764800512/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664276045266944/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664272723509248/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664269489700864/pat.gif"];

   var result = Math.floor((Math.random() * sayings.length) + 0);
   message.reply(sayings[result]);
}else // gcofight
 if (message.content.startsWith(prefix + 'fight')) {
   if (message.author.bot) return
     var member = message.mentions.members.first();
if (!member) return message.channel.send("Mention someone to use this command.");
   message.reply(`${message.author.tag} started to fight with ${member.user}`);
   var sayings = ["https://tenor.com/view/boku-hero-academia-heroacademia-anime-gif-5343898",
										"http://78.media.tumblr.com/a87277a125485cfed634e1481d789070/tumblr_nhxzg7dOdU1svfte7o5_500.gif",
										"http://78.media.tumblr.com/b4c5bdbe5594e5212b25e4b9472d75cc/tumblr_nhxzg7dOdU1svfte7o2_540.gif",
										"http://78.media.tumblr.com/8b2f48e067940a0d3c47bba283f84189/tumblr_nhxzg7dOdU1svfte7o1_1280.gif",
										"https://tenor.com/FjHt.gif",
										"https://tenor.com/view/boku-no-hero-academia-gif-9874927",
										"https://tenor.com/view/boku-no-hero-academia-gif-9874931",
										"https://tenor.com/view/boku-no-hero-academia-gif-9874934",
										"https://tenor.com/PA5i.gif",
										"https://tenor.com/view/mob-psycho-100-gif-8349479",
										"https://tenor.com/view/mob-psycho-gif-6179443",
										"https://78.media.tumblr.com/24d4ae9668f7646227c51c101341710d/tumblr_nnzn48yxSh1sg1ksjo1_500.gif",
	                  "https://78.media.tumblr.com/a6122556dacc9951abd8d428b72cd5de/tumblr_oojy0aosVo1tdtip2o1_540.gif",
										"https://tenor.com/view/fairy-tail-gif-7263950",
										"https://cdn.discordapp.com/attachments/331040538486767617/376679271487504395/slap.gif",
										"https://m.popkey.co/1f58b2/DY0G5.gif",
										"https://m.popkey.co/f2b79d/4Q9JZ.gif",
										"https://m.popkey.co/c2a453/xEzk5.gif",
										"https://cdn.discordapp.com/attachments/310023636104773633/376688234891313152/slap.gif",
										"https://cdn.discordapp.com/attachments/310023636104773633/376688236720029717/slap.gif",
                     "https://cdn.discordapp.com/attachments/310023636104773633/376688238087110658/slap.gif"];
   var result = Math.floor((Math.random() * sayings.length) + 0);
   message.reply(sayings[result]);
   }
  if (message.content.startsWith(prefix + 'help')) { 
    if (message.author.bot) return
    message.channel.send('dm :sunglasses:');
    message.author.send({embed: {
    color: 0xff005d,
    author: {
      name: gco.user.username,
      icon_url: gco.user.avatarURL
    },
    title: "Invite Bot",
    url: "https://discordapp.com/oauth2/authorize?client_id=309565853307764736&scope=bot&permissions=84997",
    description: "The gco360full bot is still underdevelopment!! Please use it properly.",
    fields: [{
        name: "GCO SERVER",
        value: "you can join here(https://discord.gg/rtQpjaJ) GCO Official server."
      },
      {
        name: "Moderation",
        value: "`gcopurge` `gcoban` `gcokick` `gcorolecreate`"
		  },
      {
        name: "```Welcome and Goodbye```",
        value: "``` welcome and goodbye work only if you have a general channel. ```"
      },
      {
        name:"Commands",
        value:"`gcopat` `8ball`[just 8ball] `gcofight` `gcoavatar` `gcodice` `gcoping` `gcoweather`",
  
      },
      {
        name:"points sytem",
        value:"`gcolevel` `gcopoints`"
      },
      {
        name:"other stuff",
        value:"`gcoplay` [gcoplay, im still working on it] `gcoinvite` `gcoserver` `gcodevelopers`"
      },
      {
        name:"**if you want to help us in hosting our bot please tell**",
        value:"**`gcohack` [gcohack you should try] `gcoservers` `gcosinfo` `gcoflip`**"
      },
      {
           name:"gcosuggest [ur message]",
        value:"send something u want to tell"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: gco.user.avatarURL,
      text: "Bot made by Reuben"
    }
  }
});
  }
});
gco.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return
  //adding
  if(message.content.startsWith("gcosetavatar")){
   if(message.author.id !== '306060056271519745' ) return
    var url = message.content.substr(13,message.content.lenth) || "https://cdn.discordapp.com/attachments/373766537099870208/374462581982756874/Gco.png";
    console.log(url);
    message.channel.send("Loading image...");
    gco.user.setAvatar(url)
	  .then(user => message.channel.send(`The bots avatar has been updated.`))
	  .catch(console.error);

  }
});
gco.on('message', message => {
  if (message.content.startsWith('gcoplay')) {
    if (message.author.bot) return
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`Please be in a voice channel first!`);
    voiceChannel.join()
      .then(connnection => {
      const stream = ytdl("https://youtu.be/qz6_ETehLpQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      });
  }
});
var prefix = 'gco'
gco.on('message', message => {
  var guild = message.guild;
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

 if (message.content.startsWith(prefix + 'rolecreate')) {
   if (message.author.bot) return
     let reason = args.join(' ');
     if(!message.member.hasPermission('MANAGE_ROLES'))
         return message.channel.send(`**Access Denied! :smile:\nMissing the Permissions \`\manage roles\`\**`);
     if(!reason)
         return message.channel.send(`**Please give a role name**`)
   guild.createRole({name:`${reason}`, color:'#00FFFF', mentionable:true}).catch(error => console.log(error));
   message.channel.send(`created a role name ${reason}`);
   }else
  if (message.content.startsWith(prefix + 'purge')) {
    if (message.author.bot) return
    let messagecount = parseInt(result);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  } else
    
if (message.content.startsWith(prefix + "flip")) {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
        message.reply( "In the air and and and : You got **HEADS**");
    } else if (result == 2) {
        message.reply( "In the air and and and : You got **TAILS**");
    }
}else

  if (message.content.startsWith(prefix + 'ping')) {
    if (message.author.bot) return
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else
   if(message.content.startsWith(prefix + 'kick')) {
     if (message.author.bot) return
        let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
                var member = message.guild.member(user);
    if(!message.member.hasPermission('KICK_MEMBERS'))
        return message.channel.send(`**Access Denied! :no_entry_sign:\nMissing the Permissions \`\Kick Members\`\**`);
    if(!user)
        return message.channel.send(`**Please specify a User!**`);
    if(!reason)
        return message.channel.send(`**Please apply a Reason for the Kick!**`)
        message.channel.send(`**\`\`\`\Kicked User ${user.tag},\nResponsible for the Kick: ${message.author.tag}\nReason: ${reason}\`\`\`\**`)
    member.kick()
   }else
      if (message.content.startsWith(prefix + 'dice')) {
        if (message.author.bot) return
    message.reply(Math.floor(Math.random() * 100 ))
        //message.react('🎲');
    } else   
        if (message.content.startsWith(prefix + 'giverole')) {
          if (message.author.bot) return
    let reason = args.join(' ');
    let user = message.mentions.users.first();
    if(!message.member.hasPermission('MANAGE_ROLES'))
        return message.channel.send(`**Access Denied! :smile:\nMissing the Permissions \`\manage roles\`\**`);
        if(!user)
            return message.channel.send(`**Please specify a User!**`);
    if(!reason)
        return message.channel.send(`**Please give a role name**`)
guild.giveUserRole({name:`${reason}`, mentionable:true}).catch(error => console.log(error));
 }else
   if (message.content.startsWith(prefix + 'sinfo')) {
     if (message.channel.type === "dm") return
      const embed = new Discord.RichEmbed()
         .setAuthor(message.guild.name, message.guild.iconURL)
         .setColor(3447003)
         .setDescription(`:cop: **Owner**: ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
         .addField(':busts_in_silhouette: Member Count', `:couple: ${message.guild.memberCount  - message.guild.members.filter(m=>m.user.bot).size} users\n\:robot: ${message.guild.members.filter(m=>m.user.bot).size} bots`, true)
         .addField(':alarm_clock: AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
         .addField(':zzz: AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : gco.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
         .addField(':map: Location', message.guild.region, true)
         .addField(':calendar_spiral: Created at', message.guild.createdAt.toLocaleString(), true)
         .addBlankField(true)
         .setTimestamp()
         .setFooter(gco.user.username, gco.user.avatarURL);
        
         message.channel.send({embed});
     }else
if (message.content.startsWith(prefix + 'ban')) {
  if (message.author.bot) return
    var member = message.mentions.members.first();
    var reason = args.slice(1).join(' ');
    if (message.mentions.members.size > 1) return message.channel.send(`**Please mention only one user.**`);
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**Access Denied! 🚫\nMissing the Permissions \`Ban Members\`**`);
    if (!member) return message.channel.send(`**Please specify a User!**`);
    if (!reason) return message.channel.send(`**Please apply a Reason for the ban!**`);
    member.ban(reason).then(bannedMember => {
        message.channel.send(`Banned User ${bannedMember.user.tag},\nResponsible for the Ban: ${message.author.tag}\nReason: ${reason}`, {code: true});
     message.bannedMember.send(`im sorry for your ban you were banned from ${guild.name}\nReason: ${reason}`, {code: true});
    }).catch(err => {
        message.channel.send(`An error happened while banning the user:\n${err}`);
    });
}else
if (message.content.startsWith(prefix + "suggest")) {
  if (message.author.bot) return
    let reason = args.join(' ');
    if (!reason) return message.channel.send(`**say something if you want to suggest something**`)
    gco.channels.get('376371712113115156').send(`message from ${guild.name} and the id is ${guild.id}\nsuggestion: ${reason}`, {code: true});
  message.channel.send(`**\`\`\`\suggestion done thank your \sugestion: ${reason}\`\`\`\**`)
  }else
   if (message.content.startsWith(prefix + "eval")) {
          if(message.author.id !== '306060056271519745' ) return
      try {
        const com = eval(message.content.split(" ").slice(1).join(" "));
        message.channel.send('\n' + com + '');
      } catch(e) {
        message.channel.send('```js\n' + e + '```');
      }

  }else
    if (message.content.startsWith(prefix + "online")) {
          message.delete();
             if(message.author.id !== '306060056271519745' ) return
              gco.user.setStatus("online");
            }
           if (message.content.startsWith(prefix + "dnd")) {
             message.delete();
                 if(message.author.id !== '306060056271519745' ) return
                  gco.user.setStatus("dnd");
                  }
                  if (message.content.startsWith(prefix + "idle")) {
                    message.delete();
                        if(message.author.id !== '306060056271519745' ) return
                         gco.user.setStatus("idle");                    
   }
        
      if (message.content.startsWith(prefix + 'weather')) { 
        if (message.author.bot) return
        // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }

});
gco.login(process.env.TOKEN);
