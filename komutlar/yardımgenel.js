const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('»LORDOZİBOT YARDIM MENÜSÜ')
.setTimestamp()
.addField('» +yardım-eğlence', 'eğlence komutlarını gösterir')
.addField('» +sunucubilgi', 'Sunucu hakkında bilgi verir.')
.addField('» +davet', 'botun daet linkini alırsınız')
.addField('» +oylama', 'oylama başlatırsınız.')
.addField('» +sil', 'yazdığınız sayıda mesaj silersiniz')
.setFooter('LORDOZİBOT', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};