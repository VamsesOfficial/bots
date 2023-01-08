import fs from 'fs'
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let img1 = fs.readFileSync('./thumbnail.jpg')
let dns1 = "https://telegra.ph/file/9f981eee6cb6a371d11d4.jpg"
let dns = `𝗗𝗼𝗻𝗮𝘀𝗶

Temen" Bisa Mendukung Bot Ini Agar Terus Berjalan Dan Up To Date Dengan Cara Berdonasi : 
Donasi Bisa Melalui Qr Pada Gambar Di Atas.

Terimakasih!

Kontak Owner :
wa.me/6289508503105`
  await conn.sendButton(m.chat, dns, wm, dns1, [[`Owner`, `.owner`]], m, {
  	contextInfo: { externalAdReply :{
                        mediaUrl: sig,
                        mediaType: 2,
                        description: wm,
                        title: '𝘿𝙤𝙣𝙖𝙨𝙞',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgc
                      }}
})
}
handler.help = ['donasi']
handler.tags = ['main']

handler.command = /^(donasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler