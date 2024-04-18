require("dotenv").config();

const express = require('express')
const app = express()
const morgan =require('morgan')
if (process.env.DEPLOAY_MODE == "false") app.use(morgan('dev')) //顯示請求資訊

const {mongodb}=require('./plugins/mongodb/mongodb')
//更新指令集
const DEPLOY=require("./deploy")
// DEPLOY();


const { Client, GatewayIntentBits } = require('discord.js');
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
	],
});




client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
// console.log(interaction)
  if (!interaction.isChatInputCommand()) return;

  else if (interaction.commandName === "hi") {
    const msg=await interaction.reply({content:`${interaction.user.displayName}好久不見`,fetchReply:false});
    console.log(`${interaction.user.displayName}@ ${interaction.guild.name}${interaction.channel.name}使用${interaction.commandName} 指令 --${new Date()}`)
  }
  else{
    return;
  }

  // if (interaction.commandName === "ping") {
  //   const msg=await interaction.reply({content:"正在計算延遲...",fetchReply:true});
  //   const ping = msg.createdTimestamp-interaction.createdTimestamp;
  //   interaction.editReply(`機器人延遲${ping}ms API延遲：${client.ws.ping} ms`)
  // }
});
client.on('message', async(message) => {
    console.log(message.content);
});

client.login(process.env.TOKEN);
