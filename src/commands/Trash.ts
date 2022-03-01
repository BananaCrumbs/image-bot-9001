import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import getURLFromContext from "../util/getURLFromContext";
import isContextInteraction from "../util/isContextInteraction";
import ImageFetcher from "../util/ImageFetcher";

const command: CommandOptions = {
    command: "trash",
    interaction: {
        name: "trash",
        description: "Throw a user in the trash!",
        options: [
            {
                name: "trashed",
                description: "The user who will smell like garbage soon",
                type: ApplicationCommandOptionType.User,
                required: true,
            },
            {
                name: "trasher",
                description: "The user who is doing the trashing",
                type: ApplicationCommandOptionType.User,
                required: true,
            },
        ],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        const url_trashed = await getURLFromContext(ctx, ctx.options["trashed"]);
        const url_trasher = await getURLFromContext(ctx, ctx.options["trasher"]);
        
        if(!url_trashed || !url_trasher) return;
        
        await ImageFetcher.getImage("/images/trash?url1=" + encodeURIComponent(url_trashed) + "&url2=" + encodeURIComponent(url_trasher), ctx);
        
    }
};

export default command;
