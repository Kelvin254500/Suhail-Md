const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254797668938";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_38_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc0LFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWU5eWdYVmRFTmR2VjBsblp4Zk9nSnpFaUxORmswSXo5N0dPTkRCT0RwWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0J0eDhjNjJSU1drUlhHSjFZa2ZDQVwiLFxuICBcInBob25lSWRcIjogXCI1OWQzZjE3ZC03YWQ0LTRlZTMtYTZjNy0xZGYyMWVkZGMxYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICA3NSxcbiAgICAgIDI2LFxuICAgICAgOTIsXG4gICAgICA5LFxuICAgICAgMTQsXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAzNCxcbiAgICAgIDYxLFxuICAgICAgNjksXG4gICAgICAyNTQsXG4gICAgICAxOTMsXG4gICAgICA3MixcbiAgICAgIDE1LFxuICAgICAgMTMxLFxuICAgICAgNjEsXG4gICAgICA1NyxcbiAgICAgIDE3LFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDkwLFxuICAgICAgMjAwLFxuICAgICAgMTM1LFxuICAgICAgMjA3LFxuICAgICAgNCxcbiAgICAgIDU5LFxuICAgICAgMjIxLFxuICAgICAgNTUsXG4gICAgICAxMTMsXG4gICAgICAxODQsXG4gICAgICAxNDYsXG4gICAgICAyMTcsXG4gICAgICAxOTIsXG4gICAgICAxNTksXG4gICAgICA2LFxuICAgICAgMTQ1LFxuICAgICAgMTM3LFxuICAgICAgNjAsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0ZWVkdWNlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NzY2ODkzODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT25saW5lIEJvb3N0XCIsXG4gICAgXCJsaWRcIjogXCIxNjk5MTc5OTk1MjE5MDY6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOS0pnS0lCRVBEOXNiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlYSUFJbzJIeGJXblRYMmFySzk3OGNqZFBOY0t1dFQ3clJsWmlHd0VQWGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVFWdncyTldRbFF6RlhCdXhhYzE0azJtSWMxZ1lNeEMwZi81a1VDNDVYWElOcXgxclBFVjNteVo1ZnIxSExOZXRIa0JhSEhma2VLTUFUUVdiVGpOQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHE2UXRZVHUxalVoU1JjSzgrd3ljVUhhQ1I5d0xMNHhxWGZaRWlxNGhLV1ZiKzd1bkpGVW9CMDFSOFl1cHFwVVdYOVNFN3RTYU5pZVNRNEtsL2Mzamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk3NjY4OTM4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTgwNzIzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "snowp",
  botname : process.env.BOT_NAME  || "snowp",
  ownername:process.env.OWNER_NAME|| "snowp",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
