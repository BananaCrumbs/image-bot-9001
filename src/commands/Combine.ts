import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import ImageFetcher from "../util/ImageFetcher";
import isContextInteraction from "../util/isContextInteraction";

const command: CommandOptions = {
    command: "combine",
    interaction: {
        name: "combine",
        description: "Polymorphism",
        options: [
            {
                name: "user1",
                type: ApplicationCommandOptionType.User,
                description: "The first user to squish together",
                required: true,
            },
            {
                name: "user2",
                type: ApplicationCommandOptionType.User,
                description: "The second user to squish together",
                required: true,
            },
        ],
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        //user a and b
        const user_a = await ctx.worker.api.users.get(ctx.options["user1"]);
        const user_b = await ctx.worker.api.users.get(ctx.options["user2"]);
        
        //get the users avatar
        const user_a_avatar = `https://cdn.discordapp.com/avatars/${user_a.id}/${user_a.avatar}.png`  || `https://cdn.discordapp.com/embed/avatar/${Number(user_a.discriminator) % 5}.png`;
        const user_b_avatar = `https://cdn.discordapp.com/avatars/${user_b.id}/${user_b.avatar}.png`  || `https://cdn.discordapp.com/embed/avatar/${Number(user_b.discriminator) % 5}.png`;
        
        //upload
        await ImageFetcher.getImage("/images/combine?url1=" + encodeURIComponent(user_a_avatar) + "&url2=" + encodeURIComponent(user_b_avatar), ctx);
    }
};

export default command;
