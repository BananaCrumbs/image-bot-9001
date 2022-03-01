import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import isContextInteraction from "../util/isContextInteraction";
import ImageFetcher from "../util/ImageFetcher";

const command: CommandOptions = {
    command: "tomscott",
    interaction: {
        name: "tomscott",
        description: "Like drake, but better.",
        options: [
            {
                name: "text_top",
                type: ApplicationCommandOptionType.String,
                description: "The top text.",
                required: false,
            },
            {
                name: "text_bottom",
                type: ApplicationCommandOptionType.String,
                description: "The bottom text.",
                required: false,
            },
        ],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const text_top = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_top"] || ""), 300);
        const text_bottom = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_bottom"] || ""), 300);
    
        await ImageFetcher.getImage("/images/tomscott?text1=" + text_top + "&text2=" + text_bottom, ctx);
    }
}

export default command;
