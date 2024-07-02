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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6282273211143";




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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_10_57_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUF5elhHdXFpS0ttVlZqdGNnTlUzREZPclB0a3ZWc0xKaHAzUklMMFIyUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MjgyMjczMjExMTQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzQ2QTFBNUE4NThCQkQ5REU4OUVCMjUxODI5MkYyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MTc4NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MjgyMjczMjExMTQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMzlBNEMzMjYzRTMwMDVDQjlCRDY4RDBFQzZEMDNBRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MTc4NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFlJdzJIMDlUSHlvOG8yZ1F3Y3oyUVwiLFxuICBcInBob25lSWRcIjogXCI4MjQyMzFmYi1iOThiLTQ3ZDUtOTdmNi02MGNmZTViY2QwMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxMTcsXG4gICAgICAyNDIsXG4gICAgICAzNixcbiAgICAgIDk0LFxuICAgICAgMTY3LFxuICAgICAgMTk2LFxuICAgICAgMTcyLFxuICAgICAgMjE4LFxuICAgICAgOTYsXG4gICAgICAyMDUsXG4gICAgICAyNDAsXG4gICAgICAxOTMsXG4gICAgICAyMDcsXG4gICAgICA0MSxcbiAgICAgIDEzLFxuICAgICAgMjQ5LFxuICAgICAgMTAxLFxuICAgICAgMTIzLFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICA0NSxcbiAgICAgIDE0OCxcbiAgICAgIDE0MixcbiAgICAgIDEzOSxcbiAgICAgIDIwMSxcbiAgICAgIDIwMyxcbiAgICAgIDQ3LFxuICAgICAgMjksXG4gICAgICAyMjcsXG4gICAgICA3MSxcbiAgICAgIDYzLFxuICAgICAgNzgsXG4gICAgICAyMjksXG4gICAgICA1MCxcbiAgICAgIDIzMyxcbiAgICAgIDEyMSxcbiAgICAgIDc1LFxuICAgICAgMjUwLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhFRDdKV0JYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MjgyMjczMjExMTQzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NDE4Njg4Njk5NjA3ODo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImFyZXBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPelpuT1VERUpXNmo3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZOSG5YK0dNUDFKM3NrTk1hVWJwV0JBeE9kbS91N0J3QW5XYTRMVUloMWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXNEQ0dhWnc2b2dJUmpheEIyVUJsRUhKeHpQMXZ2THZDZVV3OTZrSFRDZ2Rhc2h2V2JjWDhLa2JiSllsVlN5dEZEcktRNWthanFLdFhKVkFOdHFpQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNHRjSUlQMG1TV3dYM2R1WC9NVFhKZWJxNm1vMlA3OXk0eTEvam5JcG56NEFRaVNyNm1hT1U0ZWVCOFdpYi9PUGxMRll6R1FtdEsveUVEL2JYQVJSRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4MjI3MzIxMTE0Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTc4NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKWEtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpYSy5qc29uIjogIntcImtleURhdGFcIjpcIjRiU1VQUmNseWpQTFF2ZmZ0T0k4eVlPTHBoVGpWMUJWUXdtS01XRmhrOEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNzU4ODk3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTA0NTE0NTMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
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
