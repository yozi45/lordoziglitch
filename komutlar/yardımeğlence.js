const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('»LORDOZİBOT EĞLENCE YARDIM MENÜSÜ')
.setTimestamp()
.addField('» +ağla', 'Botu ağlatırsın')
.addField('» +atatürk', 'Atatürkün fotorafını atar')
.addField('» +hediye-ver', 'hediye verirsin')
.addField('» +bilgi', 'İlginç bilgi verir')
.addField('» +intihar-et', ' intihar edersin')
.addField('» +kahve', 'kahve içersin')
.addField('» +polisiara', 'polisi ararsın')
.addField('» +şanslısayım', 'şanslı sayını tahmin eder')
.addField('» +sorusor', 'bota istedin soruyu sorarsın')
.addField('» +düello', 'etiketlediğiniz kişiyle vs atarsınız')
.addField('» +taksimdayı', 'taksim dayının fotosunu atar')
.addField('» +tersyaz', 'yazdın yazıyı ters yazar')
.addField('» +yazı-yaz', 'bota yazı yazdırırsın')
.addField('» +zarat', 'zar atarsın')
.addField('» +kralol', 'kral olursun')
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
  name: 'yardım-eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım-eğlence'
};