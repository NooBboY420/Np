const axios = require('axios');

const fs = require('fs');

const path = require('path');

module.exports.config = {

name: 'spotify',

version: '1.0.0',

hasPermssion: 0,

hasPrefix: false,

commandCategory: "media",

description: 'Get a Spotify song and send as an mp3 voice attachment',

usage: 'spotify [song name]',

credits: 'nazrul',

cooldown: 5,

};

module.exports.run = async function({ api, event, args }) {

const chilli = args.join(' ');

if (!chilli) {

return api.sendMessage('Please provide a song, for example: spotify Selos', event.threadID, event.messageID);

}

const apiUrl = `https://hiroshi-api.onrender.com/tiktok/spotify?search=${encodeURIComponent(chilli)}`;

try {

const response = await axios.get(apiUrl);

const maanghang = response.data[0];

if (!maanghang || !maanghang.download) {

return api.sendMessage('No song found for your search. Please try again with a different query.', event.threadID, event.messageID);

}

const bundat = maanghang.download;

const fileName = `${maanghang.name}.mp3`;

const filePath = path.join(__dirname, fileName);

const downloadResponse = await axios({

method: 'GET',

url: bundat,

responseType: 'stream',

});

const writer = fs.createWriteStream(filePath);

downloadResponse.data.pipe(writer);

writer.on('finish', async () => {

await api.sendMessage(`🎶 Now playing: ${maanghang.name}\n\n🔗 Spotify Link: ${maanghang.track}`, event.threadID);

api.sendMessage({

attachment: fs.createReadStream(filePath)

}, event.threadID, () => {

fs.unlinkSync(filePath);

});

});

writer.on('error', () => {

api.sendMessage('There was an error downloading the file. Please try again later.', event.threadID, event.messageID);

});

} catch (pogi) {

console.error('Error fetching song:', pogi);

api.sendMessage('An error occurred while fetching the song. Please try again later.', event.threadID, event.messageID);

}

};

