const axios = require("axios");

module.exports.config = {
  name: "zom",
  commandCategory: "image",
  hasPermssion: 0,
  prefix: true,
  credits: "nazrul",
  author: "nazrul"
};

module.exports.run = async ({ api, event, args }) => {
  try {

    if (!event.messageReply || !event.messageReply.attachments || !event.messageReply.attachments[0]) {
      return api.sendMessage("𝐏𝐥𝐞𝐚𝐬𝐞 𝐑𝐞𝐩𝐥𝐚𝐲 𝐓𝐡𝐞 𝐈𝐦𝐚𝐠𝐞", event.threadID, event.messageID);
    }
api.sendMessage("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐁𝐚𝐛𝐲...😘", event.threadID, event.messageID);

    const nazrul = event.messageReply?.attachments[0]?.url;


    const nazrula = (`https://kaiz-apis.gleeze.com/api/zombie?url=${encodeURIComponent(nazrul)}`);


    const imageStream = await axios.get(nazrula,{
      responseType: 'stream'
    });


    api.sendMessage({
      body: "",
      attachment: imageStream.data
    }, event.threadID, event.messageID);

  } catch (nazrulb) {
    api.sendMessage(`Error: ${nazrulb.message}`, event.threadID, event.messageID);
  }
};
