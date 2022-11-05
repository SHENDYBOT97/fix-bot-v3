import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCh9Exbsk9406zuCdCorZwIg*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/SHENDYBOT97/fix-bot-v3

Pengen yang udah di recode oleh owner?
Script bot ini dijual bila kalian mau bisa chat owner

wa.me/6283861760785`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=",
    mediaType: "VIDEO",
    description: "https://instagram.com/shendyeditz?igshid=YmMyMTA2M2Y=", 
    title: 'Shendy-Bot MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
