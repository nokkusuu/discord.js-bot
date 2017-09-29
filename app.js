const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('gco is ready!');
  let guilds = bot.guilds.array()
bot.user.setPresence({game:{name:`type gcohelp | ${guilds.length}`, type:0}})
  });
  bot.on("reconnecting", () => {
      console.log("i was wasting time");
  });

  bot.on("resume", () => {
      console.log("im back");
  });
bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  chans[0].send(`Please welcome ${member.user} to the server!`);
});
  bot.on('guildDelete', guild => {
    console.log(`I have left ${guild.name} at ${new Date()}`);
    chans[0].send(`I have left ${guild.name}`);
  });
  bot.on('channelCreate', channel => {
    console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
    if (channel.type === 'text') return channel.send('You were successful in creating this channel.');
  });
bot.on('guildCreate', guild => {
  console.log(`I have joined  ${guild.name}, owned by ${guild.owner.user.username}`);
  const channel = guild.channels.find('name', 'gco-log');
  if (!channel) return;
channel.send(`i have joined  ${guild.name}, owned by ${guild.owner.user.username} `);
});
bot.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
    chans[0].send(`channel deleted`);
});
bot.on('guildMemberRemove', member => {
  let guild = member.guild;
  chans[0].send(`Please say goodbye to ${member.user.username} we will miss you!`);
});
bot.on('guildBanAdd',(guild, user) => {
    chans[0].send(`${user.username} was just banned! `);
});
bot.on('guildBanRemove',(guild, user) => {
    chans[0].send(`${user.username} was just unbanned!`);
});
bot.on('guildCreate', guild => {
  chans[0].send(`I have joined  ${guild.name}, owned by ${guild.owner.user.username} use \`gco help\`,:pray:  Gco is the first indian bot made by reuben to know more join here https://discord.gg/errvBk2  we to make pokemon games and bot :pray: `);
});
  bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'gcoavatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});
bot.on('message', message => {
  // If the message is "ping"
  if (message.content === 'gco how are you') {
    // Send "pong" to the same channel
    message.channel.send('im fine');
  }
});
bot.on('message', message => {
  // If the message is "ping"
  if (message.content === 'gco server') {
    // Send "pong" to the same channel
    message.channel.send('https://discord.gg/errvBk2 join gco and enjoy');
  }
});
bot.on('message', message => {
  if (message.content === 'gco owner') {
    message.channel.send('my owner is master ```reuben``` `https://discord.gg/errvBk2 join here.`');
   }
});
bot.on("message", (message) => {
  if (message.content.startsWith("gcohelp")) {
    message.channel.send('oh i just dm you');
    message.author.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
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
        name: "`gcopurge` or `gcorolecreate` and `gcohello` and `ping`",
        value: "use this commands."
  
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "made by reuben"
    }
  }
});
  }
});
bot.on('roleCreate', role => {
  let guild = role.guild;
  chans[0].send(`A new role has been created :smile: `);
});
bot.on('presenceupdate',(oldMember,newMember)  => {
    let guild = newMember.guild;
    let playrole = guild.roles.find("name","playing Roblox");
    let keys = newMember.roles.keyArray();

    if (!playrole) return;
    if(newMember.user.presence.game && newMember.user.presence.game.name === "Roblox") {
        newMember.addRole(playRole);
    } else if (!newMember.user.presence.game && keys.includes(playRole.id)) {
        newMember.removeRole(playRole);
    }
});
var prefix = 'gco'
bot.on('message', message => {
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
bot.login('process.env.BOT_TOKEN');
