import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import isContextInteraction from "../util/isContextInteraction";
import ImageFetcher from "../util/ImageFetcher";

const command: CommandOptions = {
    command: "drake",
    interaction: {
        name: "drake",
        description: "You know this meme",
        options: [
            {
                name: "text_nah",
                type: ApplicationCommandOptionType.String,
                description: "Nah",
                required: false,
            },
            {
                name: "text_yea",
                type: ApplicationCommandOptionType.String,
                description: "Yea",
                required: false,
            },
        ],
    },
    exec: (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const text_yea = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_yea"] || ""), 300);
        const text_nah = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_nah"] || ""), 300);
        
        ImageFetcher.getImage("/images/drake?text1=" + text_nah + "&text2=" + text_yea, ctx);
    }
};

export default command;
