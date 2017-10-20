const Discord = require('discord.js');
const gco = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const weather = require("weather-js");
const embed = new Discord.RichEmbed()

gco.on('ready', () => {
  console.log('gco is ready!');
  gco.user.setStatus("idle");
  let guilds = gco.guilds.array()
gco.user.setPresence({game:{name:`${guilds.length} guilds | use gcohelp`, type:0}})
  });
  gco.on("reconnecting", () => {
      console.log("i was wasting time");
  });

  gco.on("resume", () => {
      console.log("im back");
  });

  gco.on('message', message => {
  if (message.content === 'gcoavatar') {
    message.reply(message.author.avatarURL);

  }
});
gco.on('message', message => {
  if (message.content === 'gcoserver') {
    message.channel.send('https://discord.gg/errvBk2 join gco and enjoy');
  }
});
gco.on('message', message => {
  if (message.content === 'gcoowner') {
    message.channel.send('my owner is master ```reuben``` `https://discord.gg/errvBk2 join here.`');
     message.react(':slight_smile' )
   }
});
   gco.on('message', message => {
      if (message.content === 'hello') {
    	var sayings = ["hey",
										"hello dont disturb",
										"master reuben will be angry",
										":slight_smile:  hey man dont disturb use gcohelp",
										"hello",
										"Ah I see it, you look to be enjoying here",
										"Most likely i like you",
										"im busy use gcohelp",
										"hmm... when will pokemon goa release",
										"hey bro/sis im fine",
										"im just working",
										"dont disturb ",
										"things are not the same",
										"Concentrate on your work",
										"Don't count on me for help",
										"hi",
										"My sources say no",
										"you are thinking something bad about me",
										"Very doubtful...."];

			var result = Math.floor((Math.random() * sayings.length) + 0);
			message.reply(sayings[result]);
}
});
gco.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} and the id is ${guild.id}. This guild has ${guild.memberCount} members!`);
const welcomechannel = guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send(`i have joined a server ${guild.name} This guild has ${guild.memberCount} members! if you really want to help us you can join Gco it is a bot made by reuben first goan bot you can join us at https://discord.gg/rtQpjaJ `);
gco.channels.get('370563395784671244').send({embed: {
color: 0xff0202,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "joined server",
description: `New guild joined: ${guild.name} and the id is ${guild.id}. This guild has ${guild.memberCount} members!`,
fields: [{
  name:"** the more i get the more the fun**",
  value:"**GCO is happy **"
}
],
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
console.log(`welcome to ${member.guild} hope he stays there for a long time `);
const welcomechannel = member.guild.channels.find('name', 'general');
if (welcomechannel) {
welcomechannel.send({embed: {
color: 0xd800ff,
author: {
  name: gco.user.username,
  icon_url: gco.user.avatarURL
},
title: "joined server",
description: `olá.. welcome ${member.user.tag} to ${guild.name} this is the best guild`,
fields: [{
  name:"** come and stay  **",
  value:"**GCO is always happy **"
}
],
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
fields: [{
  name:"** nooo why did you leave **",
  value:"**GCO is not happy **"
}
],
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
gco.on("message", (message) => {
  if (message.content.startsWith("gcohelp")) {
    message.channel.send('oh i just dm you');
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
        value: "you can join here(https://discord.gg/jE8JF) GCO our server."
      },
      {
        name: "```gcopurge```",
        value: "deletes mesages"
		  },
      {
        name: "```welcome and goodbye```",
        value: "``` welcome and goodbye work only if you have a general channel. ```"
      },
      {
        name:"```8ball```",
        value:"ask the bot any question"
      },
      {
        name:"```gcoavatar```",
        value:"still working on it sends your avatar"
      },
      {
        name:"```gcoowner```",
        value:"owner"
      },
      {
        name:"```gcorolecreate```",
        value:"creates role"
      },
      {
        name:"```gcolevel [disabled]```",
        value:"your level **disabled for timming**"
      },
      {
        name:"```gcoping```",
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


var prefix = 'gco'
gco.on('message', message => {
  var guild = message.guild;
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'rolecreate')) {
    guild.createRole({name:'A Gco\'s role', color:'#00FFFF', mentionable:true}).catch(error => console.log(error));
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

  }
});
gco.login('PROCESS.ENV.BOT_TOKEN');
