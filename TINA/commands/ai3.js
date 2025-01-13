const axios = require('axios');

module.exports.config = {

name: "ai3",

version: 1.0,

credits: "nazrul",

description: "AI-powered chatbot using GPT-4o",

hasPermssion: 0,

usages: "{pn} [prompt]",

commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",

cooldown: 0,

};

module.exports.run = async function ({ api, event, args }) {

try {

const prompt = args.join(" ");

if (!prompt) {

await api.sendMessage("🤖 Hey, I'm your virtual assistant, How can I assist you today?", event.threadID);

return;

}

const initialMessage = await new Promise(resolve => {

api.sendMessage("Thinking, please wait...", event.threadID, (err, info) => {

resolve(info);

}, event.messageID);

});

const response = await axios.get(`https://heru-apis.gleeze.com/api/gpt-4o?prompt=${encodeURIComponent(prompt)}`);

const answer = response.data.content;

await api.editMessage("🌟 𝖠𝗂 𝖺𝗌𝗌𝗂𝗌𝗍𝖺𝗇𝗍\n━━━━━━━━━━━━━━━━━━\n" + answer, initialMessage.messageID);

} catch (error) {

console.error("⚠️", error.message);

await api.editMessage("An error occurred while processing your request. Please try again later.", initialMessage.messageID);

}

};

