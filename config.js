const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="evansgyermehadu@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "Phemous";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_45_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlSnpFY056L0xVd3RORmJPWlZZZ3Npd3dNY2JDeUppS0dNblN6NDhHUGJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1MjgtSzhPeVFQcXpsWnZTN3lzN2lnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE5MTRjYjg5LWY5YzMtNDg4Zi04YzcwLTUzNjRjODBkNzdhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxNDksXG4gICAgICAyNDgsXG4gICAgICAzOCxcbiAgICAgIDk0LFxuICAgICAgMjEwLFxuICAgICAgMjUsXG4gICAgICAyOSxcbiAgICAgIDExMyxcbiAgICAgIDIzMyxcbiAgICAgIDM1LFxuICAgICAgNzcsXG4gICAgICAyNDAsXG4gICAgICA0OCxcbiAgICAgIDI5LFxuICAgICAgMTY4LFxuICAgICAgMjI3LFxuICAgICAgMyxcbiAgICAgIDEwNCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAyNDgsXG4gICAgICAxOTUsXG4gICAgICA2OCxcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgNjksXG4gICAgICAxLFxuICAgICAgNTAsXG4gICAgICAyMTQsXG4gICAgICAyMDAsXG4gICAgICAyMjMsXG4gICAgICAyMjUsXG4gICAgICAyMTcsXG4gICAgICAzMixcbiAgICAgIDE3MSxcbiAgICAgIDExLFxuICAgICAgNSxcbiAgICAgIDM2LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUCtnbTdFTUVLdTZvTDRHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc1AxK3NJUUxtQlB6Yy9pNFZlRlB0eTNRZWtETVQ2dlh6em9VT1BqV2xJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxoY0trS0Z2REpBcEdtdm1Uc2RFWUtSMmVLNzRMY1VHTEd4cXFSSC9MeHg1ODE3VHoxWVBXUllVMXh3ak5VazAzeGd0VHM4Y2doOHJKcWtqeVZLV2hRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJoYkQwRThrSlZzZEFZVE9pM0JnZjZDYTlFWWkxcUtlVFBFUFNNWG5CTkhmWEZVTy9FaTVrbSswa053LzFxZEYzTGp5ODBaYzZFelZIOTV5WnB2YkRRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM3Mjk5MTgwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTY3NTcyMTY1NjMzMzQ6MTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzcyOTkxODA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxMTY3OTE5XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
