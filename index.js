const {Client, Intents} = require('discord.js');
//const dotenv = require('dotenv').config


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
let orders = ["เล่นอาวุธอะไรดี", "ดาบใหญ่เล่นยังไง", "ธนูเล่นยังไง", "ดาบยาวเล่นยังไง", "พลองแมลงเล่นยังไง", "ค้อนเล่นยังไง", "ดาบคู่เล่นยังไง", "อาวุธอะไรเล่นยังไงบ้าง"];
client.on('ready', ()=>{
    console.log('Mr.Daruma is ready')
})

client.on('messageCreate', msg=>{
    if (msg.content == "เล่นอาวุธอะไรดี"){
        msg.reply("https://www.youtube.com/watch?v=JycMIKonIZ4")
    }
    if (msg.content == "ดาบใหญ่เล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=DSRaZhJI-2Q")
    }
    if (msg.content == "ธนูเล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=-8HCUQawmZw&t=737s")
    }
    if (msg.content == "ดาบยาวเล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=jnPccEU8zUk")
    }
    if (msg.content == "พลองแมลงเล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=rae685ERrcQ")
    }
    if (msg.content == "พลองแมลงเล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=9HJWlXSAz2w")
    }
    if (msg.content == "ค้อนเล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=XP4H-t8gYbg")
    }
    if (msg.content == "ดาบคู่เล่นยังไง"){
        msg.reply("https://www.youtube.com/watch?v=0Zb1bIwgjD0&list=PL4UU_NkIw783odRzKymfmsids4VMCzKCI&index=5")
    }
    if (msg.conten == "อาวุธอะไรเล่นยังไงบ้าง"){
        msg.reply("https://www.youtube.com/playlist?list=PL4UU_NkIw783odRzKymfmsids4VMCzKCI")
    }

    
    
})
client.login('OTAyNTk3ODE2NjY3NTA0NjQw.YXgvuA.vPaLqbEy94TmVdeQxtHLtlzMc08')