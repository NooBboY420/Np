module.exports = {
  config:{
    name: "auto",
    version: "0.0.2",
    hasPermssion: 0,
    commandCategory: "Nayan",
    description: "auto video download",
    category: "user",
    usages: "",
    cooldowns: 5,
},
run: async function({ api, events, args }) {},
handleEvent: async function ({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const {alldown} = require("nayan-videos-downloader")
  if (body.startsWith("https://")) {
  api.setMessageReaction("💔", event.messageID, (err) => {}, true);
const data = await alldown(content);
  console.log(data)
  const {low, high, title} = data.data;
    api.setMessageReaction("💙", event.messageID, (err) => {}, true);
  const video = (await axios.get(high, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(__dirname + "/system/auto.mp4", Buffer.from(video, "utf-8"))

        return api.sendMessage({
            body: `[🤍] 𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵 🥀`,
            attachment: fs.createReadStream(__dirname + "/system/auto.mp4")

        }, event.threadID, event.messageID);
    }
}
}
