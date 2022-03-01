import {CommandOptions} from "discord-rose";

const command: CommandOptions = {
    command: "invite",
    interaction: {
        name: "invite",
        description: "Invite me to your server!",
    },
    exec: (ctx) => {
        ctx.reply(`[Click to invite me (it'll pull up a little box)](https://discordapp.com/oauth2/authorize?client_id=${ctx.worker.user.id}&scope=applications.commands)`);
    }
};

export default command;
