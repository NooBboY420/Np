const { get } = require('axios');

const fs = require('fs');

const path = require('path');

async function getUserName(api, senderID) {

try {

const userInfo = await api.getUserInfo(senderID);

return userInfo[senderID]?.name || "User";

} catch (error) {

console.log(error);

return "User";

}

}

module.exports.config = {

name: "art12",

version: "1.0.0",

hasPermssion: 0,

hasPrefix: false,

credits: "nazrul",

description: "",

usages: "{p}{n} mention",

cooldown: 5,

commandCategory: "no prefix",

};

module.exports.run = async function ({ api, event, args }) {

const mentionID = Object.keys(event.mentions)[0];

if (!mentionID) {

return api.sendMessage('Please mention a user', event.threadID, event.messageID);

}

const userInfo = await api.getUserInfo(mentionID);

const realName = userInfo[mentionID].name;

const senderID = event.senderID;

const url = `https://api-canvass.vercel.app/deepfry?userid=${mentionID}`;

const filePath = path.join(__dirname, 'cache', 'j.png');

try {

let response = await get(url, { responseType: 'arraybuffer' });

fs.writeFileSync(filePath, Buffer.from(response.data, "utf8"));

let name = await getUserName(api, event.senderID);

let mentions = [];

mentions.push({

tag: name,

id: event.senderID

});

api.sendMessage({ attachment: fs.createReadStream(filePath) }, event.threadID, () => {

fs.unlinkSync(filePath);

});

} catch (error) {

api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);

}

};
