const Discord = require('discord.js');      //#�ޥ�discord.py�A�ᤩ��`��(const)Discord�W
const { token } = require('./token.json');      //#�s�ŧi�@�� Discord(discord.js)�U��Client��k�A�M��NClient��k�����G�ᤩ��client�o�ӱ`�ƤW�A�n�ޥ�discord.js���U��Client�A�i�H�����I�sclient
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// �s�W�u�ɪ��ƥ�
client.on('ready', () => {
    console.log(`->Logged in as ${client.user.tag}!`);
});

// �� Bot ������T���ɪ��ƥ�
client.on('messageCreate', msg => {
    if(msg.member.user.bot) return; //#�p�G�Ӧ۩�����H

    if (msg.content === 'ping' && msg.channel.id === '991002552919281736') {   //#�p�G�T�������e�O 'ping'�A�B�Ӧ� 'general' �W�D
        console.log(`->Reply "pong"!`)
        msg.channel.send('ping');       //#���|�^�еo�e��
//*        msg.reply('pong');       //#�|�^�еo�e��
    }
});

client.login(token);