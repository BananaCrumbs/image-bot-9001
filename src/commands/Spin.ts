import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import isContextInteraction from "../util/isContextInteraction";
import getURLFromContext from "../util/getURLFromContext";
import ImageFetcher from "../util/ImageFetcher";
import BenchmarkingUtils from "../util/BenchmarkingUtils";

const command: CommandOptions = {
    command: "spin",
    interaction: {
        name: "spin",
        description: "Like rotate, but cooler and takes 3x as long",
        options: [{
            name: "user",
            description: "You're going to give this user motion sickness",
            type: ApplicationCommandOptionType.User,
            required: true,
        }],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        BenchmarkingUtils.start();
        
        const url = await getURLFromContext(ctx);
        
        if(!url) return;
        
        await ImageFetcher.getImage("/images/spin?url=" + encodeURIComponent(url), ctx, "gif");
    }
}

export default command;
