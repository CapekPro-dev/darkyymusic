module.exports = {
  Admins: [process.env.CapekPro, process.env.NexusSK], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix, //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: process.env.Support, //Support Server Link
  Token: process.env.Token, //Discord Bot Token
  ClientID: process.env.Discord_ClientID, //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret, //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: process.env.CBU, //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: process.env.CookieSecret, //A Secret like a password
  IconURL:
    process.env.Icon, //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: process.env.Permissions, //Bot Inviting Permissions
  Website: process.env.Web, //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID, //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret, //Spotify Client Secret
  },
};
