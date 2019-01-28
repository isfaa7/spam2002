const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531421992268726272")
setInterval(function() {
channel.send(`isfaa7`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
