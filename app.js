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
        name: "`gcopurge` or `gcorolecreate` and `gcohello` and `ping` and `gcoavatar` or `gcowner`",
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
