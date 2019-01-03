var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// // Configure logger settings
// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
//     colorize: true
// });
// logger.level = 'debug';
// // Initialize Discord Bot
// var bot = new Discord.Client({
//    token: auth.token,
//    autorun: true
// });
// bot.on('ready', function (evt) {
//     const generalChannel = bot.guild.channels.find(channel => channel.name === "general");
//     client.user.setActivity("Grinding", { type: "PLAYING"})
//     logger.info('Connected');
//     logger.info('Logged in as: ');
//     logger.info(bot.username + ' - (' + bot.id + ')');
    // setTimeout(function(){ // in leftToEight() milliseconds run this:
    //     sendMessage(); // send the message once
    //     var dayMillseconds = 1000 * 60 * 60 * 24;
    //     setInterval(function(){ // repeat this every 24 hours
    //         sendMessage();
    //     }, dayMillseconds)
    // }, leftToEight())
// });

// function leftToEight(){
//     var d = new Date();
//     return (-d + d.setHours(8,0,0,0));
// }

// function sendMessage(){
//         generalChannel.send('Rise and grind gamers', {
//             files: [
//                 "./riseandgrind.gif"
//                 ]})
// }
var bot = new Discord.Client({
          token: auth.token,
          autorun: true,
        });

bot.on('ready', function() {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    setTimeout(function(){ // in leftToEight() milliseconds run this:
    var dayMillseconds = 1000 * 60 * 60 * 24;
    setInterval(function(){ // repeat this every 24 hours
        sendMessage();
    }, dayMillseconds)
}, leftToEight())
});

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
};

function sendMessage(){
        bot.uploadFile({
            to: "530159873720057857",
            file: "./riseandgrind.gif",
            message: "Rise and grind gamers"
        });
};
