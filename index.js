const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const PREFIX = '!';

var version = '1.0.3';

var servers = {};

const usedCommandRecently = new Set();

bot.on("ready", async () =>{
    console.log(`Online.`);
    function changing_status() {
        let status = ["Ego Realm", "Ego Test Server", "AtlanticMoynihan"]
        let randomStatus = status[Math.floor(Math.random() * status.length)]
        bot.user.setActivity(randomStatus,{type: 'WATCHING'}); //PLAYING //WATC
    }
    setInterval(changing_status, 10000) //10000 = 10 SECONDS, DO NOT SET THE NUMBER BELOW 10000 OR DISCORD API WILL BAN YOUR BOT!
})


bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}, have a great exploiting time!`)

    var role = member.guild.roles.find ("name", "Member");
    member.addRole (role);
});

bot.on ("guildMemberRemove", member => {

});


bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'OwnerOnlyCommand':
            const Embed = new RichEmbed()
            .setTitle("Ego Download")
            .setColor(0xe933f2)

            message.author.send(Embed);
        
        break;
        
    }
    
   
            
    });

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("678429341956308992").send(x.join(" "));
});


bot.login(process.env.BOT_TOKEN);
