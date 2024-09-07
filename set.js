 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID |Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0kzRFRWcnRJQ2FwT3NudFBRK0tRVTNBZ1BFc2tTdmlFZEUrUXcyVEEwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2Fsazlyc0lpK0tqaFdxbFpsRDNyTS9TUW5ER2t4YXVLRnJKNnJFMnduYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRDROd3czSmRyelF2Y1ZRQTBUUGNQdEZFQmdnb29NdkFpU2c0QTFPYkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSRjZsRUpnbGF2Zk9adFpDOEczMkpMTUwweTdQTjh4eExxQ3FYalA3d1hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOK1hsNFpwTmc1aWFUeW0xQTZtdVhseTh6SkU2Vll5SWFVY01aSWswMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOOVhyOWRNakpRRXQxTitMRTFWck1wVml1TWxaWjFsRnFRVGpsMzVuaGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BxN1hYRjI5SkxFdSsyMnRxR3BoNUd1aHI5UTNBZ2QxQzBxY2kwejFIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkFGSEg1ZFRnSWtnTXluWlppdGJxRUgvMlJOOTBEZXRrczhKUUF0SzdDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0vK1NKY0NWYUk3SHNmWVhDZ0lkSGl0aWRSSmJtZ3NLOGZjRE51QjFYZmJyZmMxVGVsdWVQK1pYM3gycmt3SUdISUJQVG1xZW5YUHI5VnYybzFjcmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6IjdPV1dPQ21XSDE3VXhBSHgvMklkeGlwVkczMEhlWSthdjhka2pRUW91S2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhhTk15X0tnUy1xMGtfTGFpSVE0cFEiLCJwaG9uZUlkIjoiN2IyOTVmYTgtZDliMy00NGEyLWExYmMtZDAzYmVhYmRkMGJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZmYzBZUHFxdDY5bU5aczltTmZJalJJaXVhND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYVQwQVg2UEJiQ2NHZHczTzZyd1RXdmRRSFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUk1QTFpNMzIiLCJtZSI6eyJpZCI6IjI1ODg2ODc1NDU0NToxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbGV4IFNlcnZpY2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2SHE4RUVFTHlsOGJZR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5PazI0QWlURlBYVnQ3TWRqUTA5UHdtclNOVnZRL3pvNnpDMjVoaTkya3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQ0ajljM2E2d1ErbWZsdDUySklCS3FFRitiazJvcTdiMzVRWmVwQ3VwYTY2b0FkNEZleUYzVHdCampTWE44WWh6OWYyakx6QTJIbjNydURFM3FQYUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxSXJxSFZUa2gzODl5TWVLdi9kenJSWFNaOERNV0lqSUZLS1dmU2JmZWoyWFZESStOazNYWW5MT1ZyeHhHWGw0YlJ6VzAxYmJXV1lJRmpIQXVtQ1Rodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1ODg2ODc1NDU0NToxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVHBOdUFJa3hUMTFiZXpIWTBOUFQ4SnEwalZiMFA4Nk9zd3R1WVl2ZHBNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzE1MTQ1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxmRCJ9| 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "258868754545",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
