const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://yt3.ggpht.com/yti/ANoDKi7Is1vF138osqWie1XDu1Yzn3aQVV-m1rsBn0bugQ=s88-c-k-c0x00ffffff-no-rj-mo")   
.addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=789775930537017364&scope=bot&permissions=8)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };