import {CommandOptions, Embed} from "discord-rose";

const command: CommandOptions = {
    command: "about",
    interaction: {
        name: "about",
        description: "About the bot",
    },
    exec: (ctx): any => {
        
        const embed = new Embed()
            .description("Thanks for using ImageBot9001!\n" +
                "This bot is made by [BananaCrumbs](https://bananacrumbs.com).\n" +
                "I am using [discord-rose](https://npmjs.com/package/discord-rose) for the Discord library, and" +
                " [Image-API](github.com/Million900o/Image-API) by Million900o.\n\n" +
                "For help, use `/help`.  To invite the bot to your server, use `/invite`.")
            .color(0x00ff00)
            .thumbnail("https://media.discordapp.net/attachments/938924318824472646/948085064359616542/image-bot-9001.bananacrumbs.com-output.png");
        
        return ctx.reply(embed);
    }
}

export default command;
