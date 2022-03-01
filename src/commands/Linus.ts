import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import isContextInteraction from "../util/isContextInteraction";
import ImageFetcher from "../util/ImageFetcher";

const command: CommandOptions = {
    command: "linus",
    interaction: {
        name: "linus",
        description: "Like Drake but with Linus for some reason",
        options: [
            {
                name: "text_top",
                description: "Text to put on top",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
            {
                name: "text_bottom",
                description: "Text to put on bottom",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const text_top = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_top"] || ""));
        const text_bottom = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_bottom"] || ""));
        
        await ImageFetcher.getImage("/images/linus?text1=" + text_top + "&text2=" + text_bottom, ctx);
    },
};

export default command;
