const Discord = require('discord.js');
const gco = new Discord.Client();
const economy = require('discord-eco');
const embed = new Discord.RichEmbed()
const sql = require("sqlite");
sql.open("./score.sqlite");
const http = require('http');
const express = require('express');
const app = express();

const modRole = 'Administrator';

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800);

gco.on('ready', () => {
  console.log('gco is ready!');
  gco.user.setStatus("idle");
  let guilds = gco.guilds.array()
gco.user.setPresence({game:{name:`Pokemon Goa  | just use gcohelp | Running on ${guilds.length} guilds `, type:0}})
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

  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
    });
  }
});
  gco.on('message', message => {
  if (message.content === 'gcoavatar') {
    let user = message.mentions.users.first();
              if (message.mentions.users.size < 1) {
               message.channel.send(`${message.author.tag} ${message.author.displayAvatarURL}`);
                return;
              }
              message.channel.send( `${user.tag} ${user.displayAvatarURL}`);
            }
          });
gco.on('message', message => {
  if (message.content === 'gcoserver') {
    message.channel.send('https://discord.gg/errvBk2 join gco and enjoy');
  }
});
gco.on('message', message => {
  if (message.content === 'gcoowner') {
    message.channel.send('i was made by reuben fernandes if you really want to help us in hosting bot 24/7 you can join our server https://discord.gg/errvBk2 if you pay 2$ you will get extra support and i will enter your name in the bots list');
   }
});
gco.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} and the id is ${guild.id}. This guild has ${guild.memberCount} members!`);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send(`i have joined a server ${guild.name} This guild has ${guild.memberCount} members! if you really want to help us you can join Gco it is a bot made by reuben first goan bot you can join us at https://discord.gg/rtQpjaJ  gco https://cdn.discordapp.com/attachments/306063087641821185/371895552901644289/Gco.png`);
guild.owner.send(`bot made by reuben remember that welcome and goodbye works only if you have a general channel and gives the bot to use it try to keep me online 24/7 suport us at  https://discord.gg/errvBk2 join here.`);
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
description: `olá.. welcome ${member.user.tag} to ${member.guild} this is the best guild`,
timestamp: new Date(),
footer: {
  icon_url: gco.user.avatarURL,
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
gco.on('message', message => {
 if (message.content.startsWith("8ball")) {
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
});
  gco.on("message", message => {
  if (message.content.startsWith("gcohelp")) {
    if (message.channel.type === 'dm') return;
    message.channel.send('oh i just dm you ');
    message.author.send({embed: {
    color: 0xff005d,
    author: {
      name: gco.user.username,
      icon_url: gco.user.avatarURL
    },
    title: "invite bot",
    url: "https://discordapp.com/oauth2/authorize?client_id=309565853307764736&scope=bot&permissions=84997",
    description: "the gco bot is still underdevelopment please use it properly.",
    fields: [{
        name: "gcokick or gcoban",
        value: "bot will kick or ban someone you need to have **Administrator** role."
      },
      {
        name: "GCO SERVER",
        value: "you can join here(https://discord.gg/rtQpjaJ) GCO our server."
      },
      {
        name: "gcopurge ` don't use gcopurge 1  it wont work`",
        value: "deletes mesages"
		  },
      {
        name: "```welcome and goodbye```",
        value: "``` welcome and goodbye work only if you have a general channel. ```"
      },
      {
        name:"8ball",
        value:"ask the bot any question"
      },
      {
        name:"gcoavatar",
        value:"still working on it sends your avatar"
      },
      {
        name:"gcoowner",
        value:"owner"
      },
      {
        name:"gcorolecreate",
        value:"creates role"
      },
      {
        name:"gcolevel  sorry don't use",
        value:"your level **you can also use gcopoints dont use**"
      },
      {
        name:"gcoping",
        value:"your ping"
      },
      {
        name:"** don't forget bot is underdevelopment**",
        value:"**GCO forever and ever still it is Gco**"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: gco.user.avatarURL,
      text: "bot made by reuben"
    }
  }
});
  }
});
gco.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'gcojoin') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        connection.playArbitraryInput('https://www.youtube.com/watch?v=Y1xs_xPb46M.mp3');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
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
    guild.createRole({name:'A Gco\'s role', color:'#00FFFF', mentionable:true}).catch(error => console.log(error));
    message.channel.send('created a role name A Gco\'s role');
   }else
  if (message.content.startsWith(prefix + 'purge')) {
    let messagecount = parseInt(result);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  } else

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else
  if (message.content.startsWith(prefix + 'kick')) {
    if(!message.member.roles.some(r=>["Administrator", "Moderator","Mod","Admin"].includes(r.name)) )
     return message.reply("Sorry, you don't have permissions to use this!");
   let member = message.mentions.members.first();
   if(!member)
     return message.reply("Please mention a valid member of this server");
   if(!member.kickable)
     return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
  } else
  if (message.content.startsWith(prefix + 'ban')) {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
     return message.reply("Sorry, you don't have permissions to use this! you need to have the administarter role");

   let member = message.mentions.members.first();
   if(!member)
     return message.reply("Please mention a valid member of this server");
   if(!member.bannable)
return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
 }else
   if (message.content.startsWith("fuck")) {
     message.delete();
    message.channel.send('no plzz');
}else

   if (message.content.startsWith(prefix + "eval")) {
          if(message.author.id !== '306060056271519745' ) return;
      try {
        const com = eval(message.content.split(" ").slice(1).join(" "));
        message.channel.send('\n' + com + '');
      } catch(e) {
        message.channel.send('```js\n' + e + '```');
      }

  }else
if (message.content.startsWith(prefix + "addmoney")) {

        // Check if they have the modRole
        if(message.author.id !== '306060056271519745' ) return;


        // Check if they defined an amount
        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}addmoney <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}addmoney <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }

        // Check if they defined a user
        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        // Finally, run this.. REMEMBER IF you are doing the guild-unique method, make sure you add the guild ID to the end,
        economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.channel.send(`**User defined had ${args[0]} added/subtraction from their account.**`)
        });

    }else
     if (message.content.startsWith(prefix + "balance")) {

        // Additional Tip: If you want to make the values guild-unique, simply add + message.guild.id whenever you request.
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts the data with it into i.
            // Lets use an embed for This
            const embed = new Discord.RichEmbed()
                .setDescription(`**${message.guild.name} Bank**`)
                .setColor(0xD4AF37) // You can set any HEX color if you put 0x before it.
                .addField('Account Holder',message.author.username,true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
                .addField('Account Balance',i.money,true)


            // Now we need to send the message
            message.channel.send({embed})

        })

    }

});
gco.login('token');
