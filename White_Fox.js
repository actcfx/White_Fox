const Discord = require('discord.js');      //#�ޥ�discord.py�A�ᤩ��`��(const)Discord�W
const { token } = require('./token.json');      //#�s�ŧi�@�� Discord(discord.js)�U��Client��k�A�M��NClient��k�����G�ᤩ��client�o�ӱ`�ƤW�A�n�ޥ�discord.js���U��Client�A�i�H�����I�sclient
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// �s�W�u�ɪ��ƥ�
client.on('ready', () => {
    console.log(`->Logged in as ${client.user.tag}!`);
});

// �� Bot ������T���ɪ��ƥ�
client.on('message', msg => {
    // �p�G�T�������e�O 'ping'
    if (msg.content === 'ping') {
        console.log(`->Reply "pong"!`)
        // �h Bot �^�� 'Pong'
        msg.channel.send('ping');       //#���|�^�еo�e��
//*        msg.reply('pong');       //#�|�^�еo�e��
    }
});

client.login(token);