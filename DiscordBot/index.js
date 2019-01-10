const token = 'zzzTMyMzMxNjI5NjU0NDQyMDE0.Dxa8ng.vvjq9rPo_wS3-EvIjZfoeTJArXdfdfdfdfdf'
const Discord = require('discord.js')
const MediaBall = require('./novamedia.js')

const client = new Discord.Client()
const nomePoke = pokesarray.map(a => a.nome)

client.on('message',(msg) => {
    if(msg.content === '!comandos'){
        msg.channel.send('!quest - quests pxg \n!task - task pxg\n!clã - clãs pxg\n!<pokemon> - média de balls')
    }
   
    if(msg.content === '!media'){
        msg.channel.send('http://pokexgames-tutoriais.blogspot.com/p/media-de-balls.html#axzz4Wtnv6FSo')
    }
   
   
    if (msg.content === '!quest'){
        msg.channel.send('http://wiki.pokexgames.com/index.php/Quests')
    }

    if (msg.content === '!task'){
        msg.channel.send('http://wiki.pokexgames.com/index.php/Tasks')
    }

    if(msg.content === '!clã'){
        msg.channel.send('http://wiki.pokexgames.com/index.php/Cl%C3%A3s')
    }

    if(msg.content === '!spoilerpxg'){
        msg.channel.send('http://spoilerspxg.blogspot.com/p/clas.html')
    }

    if(nomePoke.includes(msg.content)){
       let pokeNome = msg.content
       let pokeReq = pokesarray.filter(a => a.nome === pokeNome)
       let mediaResult = MediaBall.calcMedia(pokeReq[0])
      
       if(pokeReq[0].dificuldade === "Sem sistema" || pokeReq[0].dificuldade === "Dimensional Zone"){
        const embed2 = new Discord.RichEmbed()
         .setTitle(`Nome: ${mediaResult.Nome}`)
         .setColor('#ABA8AE')
         .setDescription(`Ultra Balls: Sem sistema\n XP: ${mediaResult.XP}\n PreçoNPC: ${mediaResult.PriceNpc}`)
        msg.channel.send(embed2)
       }else {
        
        const embed = new Discord.RichEmbed()
        .setTitle(`Nome: ${mediaResult.Nome}`) 
        .setColor('#ABA8AE')
        .setDescription(`Ultra Balls: ${mediaResult.MediaUB}\n XP: ${mediaResult.XP}\n PreçoNPC: ${mediaResult.PriceNpc}`)
        
        msg.channel.send(embed)
        }
       
    }
})

client.on('ready', () => {
    console.log('Bot is now connected')

    //client.channels.find( x => x.name === 'maquina-de-sesgo').send('Fallen lixo')
})

client.login(token)


