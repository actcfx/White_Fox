const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client()

// �s�W�u�ɪ��ƥ�
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// �� Bot ������T���ɪ��ƥ�
client.on('message', msg => {
    // �p�G�T�������e�O 'ping'
    if (msg.content === 'ping') {
        // �h Bot �^�� 'Pong'
        msg.reply('pong');
    }
});

client.login(token);