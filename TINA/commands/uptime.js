module.exports.config = {
  name: "uptime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  hide: true,
  description: "Random images by api - uptime",
  commandCategory: "administrators",
  cooldowns: 2,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args , Threads}) => {
  var username = process.env.REPL_OWNER
  if(username !== undefined) {
    var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`
}
  var os = require("os");
  var cpus = os.cpus();
  var chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined);
var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const { commands } = global.client;
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/cache/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/UTM-Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/cache/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/phenomicon.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/cache/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/quyenkaneki/data/blob/main/CaviarDreams.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/cache/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");

  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataanime.json')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://raw.githubusercontent.com/quyenkaneki/data/main/dataimganime.json')).data
    console.log(lengthchar.length)
    const Canvas = require('canvas');
    let pathImg = __dirname + `/cache/${id}.png`;
    let pathAva = __dirname + `/cache/${event.senderID}.png`;
    let background = (await axios.get(encodeURI(`https://imgur.com/x5JpRYu.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1


let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/cache/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillText(global.config.BOTNAME, 1900, 1080);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/cache/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 980, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/cache/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "55px time";
    ctx.fillText("NAZRUL", 930, 540)
    ctx.fillText("nazrul404github.com", 930, 610)
    ctx.fillText("MD NAZRUL ISLAM", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧\n\n𝐂𝐡𝐢𝐩: ${chips}.\n𝐏𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 𝐒𝐩𝐞𝐞𝐝: ${speed}MHz.\n𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐨𝐫𝐲: ${byte2mb(os.totalmem())}.\n𝐔𝐬𝐞𝐝: ${byte2mb(os.freemem())} (${(os.freemem() * 100 / os.totalmem()).toFixed()}%).\n𝐁𝐨𝐭 𝐢𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐔𝐩\n      ${hours}  . ${minutes} . ${seconds}  \n❯ 𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫𝐬: ${global.data.allUserID.length}\n❯ 𝐓𝐨𝐭𝐚𝐥 𝐆𝐫𝐨𝐮𝐩: ${global.data.allThreadID.length}\n❯ 𝐂𝐏𝐔 𝐢𝐧 𝐔𝐬𝐞: ${pidusage.cpu.toFixed(1)}%\n❯ 𝐑𝐚𝐦 𝐢𝐧 𝐔𝐬𝐞: ${byte2mb(pidusage.memory)}\n❯ 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}ms\n❯ 𝐂𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐈𝐃: ${id}\n❯ 𝐀𝐝𝐦𝐢𝐧 𝐋𝐢𝐧𝐤:\nhttps://www.facebook.com/ji.la.pi.6`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
}
