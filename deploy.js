async function deployCommand(){
  require("dotenv").config();
  const { REST, Routes } = require('discord.js');

  const commands = [
    {
      name: 'hi',
      description: '打個招呼',
    },
  ];

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');
      // await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),{body:[]})// 清除所有指令
      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
      // await rest.post(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });//特定頻道新增指令
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
}
module.exports = deployCommand;