import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import isContextInteraction from "../util/isContextInteraction";
import ImageFetcher from "../util/ImageFetcher";
import getURLFromContext from "../util/getURLFromContext";

const command: CommandOptions = {
    command: "rotate",
    interaction: {
        name: "rotate",
        description: "Rotates the image continuously (this is a GIF)",
        options: [{
            name: "user",
            description: "The user to rotate",
            type: ApplicationCommandOptionType.User,
            required: true,
        }],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const url = await getURLFromContext(ctx);
        
        if(!url) return;
        
        await ImageFetcher.getImage("/images/rotate?url=" + encodeURIComponent(url), ctx, "gif");
    }
}

export default command;
