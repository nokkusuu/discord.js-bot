const Discord = require('discord.js');
const gco = new Discord.Client();
const fs = require("fs");
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

gco.on('ready', () => {
  console.log('gco is ready!');
  let guilds = gco.guilds.array()
gco.user.setPresence({game:{name:`type gcohelp | ${guilds.length}`, type:0}})
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
  if (message.content === 'gco how are you') {
    message.channel.send('im fine');
  }
});
gco.on('message', message => {
  if (message.content === 'gco server') {
    message.channel.send('https://discord.gg/errvBk2 join gco and enjoy');
  }
});
gco.on('message', message => {
  if (message.content === 'gco owner') {
    message.channel.send('my owner is master ```reuben``` `https://discord.gg/errvBk2 join here.`');
   }
});
gco.on("guildCreate", guild => {
console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
const channel = guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`i have joined the server${guild.name} owned by,${guild.owner.username}  this guild has ${guild.memberCount} members! `);
});
gco.on("message", (message) => {
  if (message.content.startsWith("gcohelp")) {
    message.channel.send('oh i just dm you');
    message.author.send({embed: {
    color: 3447003,
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
        name: "`gcopurge` or `gcorolecreate` and `gcohello` and `ping` and `gcoavatar` or `gcowner`",
        value: "use this commands."

      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: gco.user.avatarURL,
      text: "made by reuben"
    }
  }
});
  }
});
gco.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

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
  } else

  if (message.content.startsWith(prefix + 'purge')) {
    let messagecount = parseInt(result);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  } else

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else
  if (message.content.startsWith(prefix + 'hello')) {
    message.channel.send(':slight_smile:  hey man dont disturb use gcohelp');
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
gco.login('process.env.BOT_TOKEN');
