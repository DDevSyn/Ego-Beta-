const {Client, Attachment} = require('discord.js');
const {RichEmbed} = require('discord.js');
const bot = new Client();
const ms = require("ms");

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
        case 'download':
            const Embed = new RichEmbed()
            .setTitle("Ego Download")
            .setColor(0xe933f2)
            .setDescription("Hello!\n\nThank you for using Ego for your OP exploit! If you have any bugs find it in the channel in the bug report and our security team made of 69 officers will resolve it!\n\nDownload: https://cdn.discordapp.com/attachments/623671473369776157/623676382836424726/Ego_0.0.2.rar");

            message.author.send(Embed);
        break;
    }
    
        
    switch (args[0]) {
        case 'info':
            if(!message.member.roles.find(r => r.name === "Ego Owner") && !message.member.roles.find(r => r.name === "High Rank Administrator")) return message.channel.send('You do not have permission to use this command.')
            .then(msg => msg.delete(10000));
            
    }
    switch (args[0]) {
        case 'mute':
            if(!message.member.roles.find(r => r.name === "Ego Owner") && !message.member.roles.find(r => r.name === "High Rank Administrator")) return message.channel.send('You do not have permission to use this command.')
            .then(msg => msg.delete(10000));
            
    }
    switch (args[0]) {
        case 'ban':
            if(!message.member.roles.find(r => r.name === "Ego Owner") && !message.member.roles.find(r => r.name === "High Rank Administrator")) return message.channel.send('You do not have permission to use this command.')
            .then(msg => msg.delete(10000));
            
    }
    switch (args[0]) {
        case 'kick':
            if(!message.member.roles.find(r => r.name === "Ego Owner") && !message.member.roles.find(r => r.name === "High Rank Administrator")) return message.channel.send('You do not have permission to use this command.')
            .then(msg => msg.delete(10000));
            
    }
    switch (args[0]) {
        case 'clear':
            if(!message.member.roles.find(r => r.name === "Ego Owner") && !message.member.roles.find(r => r.name === "High Rank Administrator")) return message.channel.send('You do not have permission to use this command.')
            .then(msg => msg.delete(10000));
    }
    switch (args[0]) {
        case 'mute':
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
        if(!person) return message.reply("Couldn't find that member");

        let mainrole = message.guild.roles.find(role => role.name === "Member");
        let muterole = message.guild.roles.find(role => role.name === "muted");

        if(!muterole) return message.reply("Couldn't find the mute role");

        let time = args[2];

        if(!time){
            return message.reply("You didn't specify a time, dimwit!")
        }

        person.addRole(muterole.id);

        message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`);

        setTimeout(function(){
            person.addRole(mainrole.id);
            person.removeRole(muterole.id);
            message.channel.send(`@${person.user.tag} has been unmuted! How does it feel to be free?`)
        }, ms(time));



        
        break;
    }

    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (user){
                const member = message.guild.member(user);

                if (member){
                    member.ban({reason: 'Banned for being a fucking loser lmao... If you try to bypass this ban there will be consequences so try and atlanticmoynihan will rape your ass.'}).then(() =>{
                        message.reply(`Successfully banned the player! ${user.tag}`)
                    })
                } else {
                    message.reply("That user isn\'t in this list")
                }
            } else {
                message.reply('You need to Specify a person!')
                

            }

                break;
    }

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user){
                const member = member.guild.member(user);

                if (member){                 
                    member.kick('You were kicked for not following the rules!').then(() =>{
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in the list")
                }
            } else {
                message.reply('You need to specify a person!')
            }

            break;
    }

    switch (args[0]) {
        case 'info':
            if (args[1] === 'version') {
                message.channel.sendMessage('@here Version ' + version);
            } else {
                message.channel.sendMessage('Invalid Args')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Error please define second argument idiot or else I\'ll argue with your ass!')
            message.channel.bulkDelete(args[1]);
            break;
    }
   
            
    });

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("655871792858136586").send(x.join(" "));
});


bot.login(process.env.BOT_TOKEN);
