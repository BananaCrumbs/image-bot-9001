import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import ImageFetcher from "../util/ImageFetcher";
import isContextInteraction from "../util/isContextInteraction";

const command: CommandOptions = {
    command: "buttons",
    interaction: {
        name: "buttons",
        description: "The one with the guy sweating over two buttons.",
        options: [
            {
                name: "text_left",
                description: "The text on the left button.",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
            {
                name: "text_right",
                description: "The text on the right button.",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
    },
    exec: (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const left_text = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_left"] ?? ""));
        const right_text = ImageFetcher.enforceStringLength(encodeURIComponent(ctx.options["text_right"] ?? ""));
        
        return ImageFetcher.getImage("/images/buttons?text1=" + left_text + "&text2=" + right_text, ctx);
    }
}

export default command;
