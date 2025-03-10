const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "remini",
  version: "1.0.",
  hasPermssion: 0,
  credits: "dev",
  cooldowns: 30,
  usages: "< reply image >",
  commandCategory: "",
};

module.exports.run = async ({ api, event, args }) => {
  let pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;

  var mark = event.messageReply.attachments[0].url || args.join(" ");

  try {
    api.sendMessage("🕚| 𝙴𝚗𝚑𝚊𝚗𝚌𝚑𝚒𝚗𝚐 𝙿𝚑𝚘𝚝𝚘 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", threadID, messageID);
    const response = await axios.get(`https://markdevs-last-api-as2j.onrender.com/api/remini?inputImage=${encodeURIComponent(mark)}`);
    const processedImageURL = response.data.image_data;

    const img = (await axios.get(processedImageURL, { responseType: "arraybuffer"})).data;

    fs.writeFileSync(pathie, Buffer.from(img, 'utf-8'));

    api.sendMessage({
      body: "🪄| 𝙴𝚗𝚑𝚊𝚗𝚌𝚎𝚍 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
      attachment: fs.createReadStream(pathie)
    }, threadID, () => fs.unlinkSync(pathie), messageID);
  } catch (error) {
    api.sendMessage(`Error processing image: ${error}`, threadID, messageID);
  };
};
