import {CommandOptions} from "discord-rose";
import {ApplicationCommandOptionType} from "discord-api-types";
import getURLFromContext from "../util/getURLFromContext";
import ImageFetcher from "../util/ImageFetcher";

const command: CommandOptions = {
    command: "homework",
    interaction: {
        name: "homework",
        description: "Wait, we had homework?",
        options: [
            {
                name: "ill_help_you_with_it",
                description: "I'll help you with it!",
                type: ApplicationCommandOptionType.User,
                required: false
            },
            {
                name: "yeah_sure",
                description: "Yeah, sure",
                type: ApplicationCommandOptionType.User,
                required: false
            },
            {
                name: "bold_of_you_to_assume",
                description: "bold of you to assume i did the homework",
                type: ApplicationCommandOptionType.User,
                required: false
            },
            {
                name: "lol_nope",
                description: "lol nope",
                type: ApplicationCommandOptionType.User,
                required: false
            },
            {
                name: "wait_we_had_homework",
                description: "wait we had homework????",
                type: ApplicationCommandOptionType.User,
                required: false
            },
            {
                name: "read",
                description: "Read 5:55 PM",
                type: ApplicationCommandOptionType.User,
                required: false
            },
        ],
    },
    exec: async (ctx) => {
        const user_a_id = ctx.options["ill_help_you_with_it"];
        const user_b_id = ctx.options["yeah_sure"];
        const user_c_id = ctx.options["bold_of_you_to_assume"];
        const user_d_id = ctx.options["lol_nope"];
        const user_e_id = ctx.options["wait_we_had_homework"];
        const user_f_id = ctx.options["read"];
        
        const user_a = await getURLFromContext(ctx, user_a_id);
        const user_b = await getURLFromContext(ctx, user_b_id);
        const user_c = await getURLFromContext(ctx, user_c_id);
        const user_d = await getURLFromContext(ctx, user_d_id);
        const user_e = await getURLFromContext(ctx, user_e_id);
        const user_f = await getURLFromContext(ctx, user_f_id);
        
        if(!user_a || !user_b || !user_c || !user_d || !user_e || !user_f) {
            return;
        }
        
        await ImageFetcher.getImage(`/images/homework?url1=${encodeURIComponent(user_a)}&url2=${encodeURIComponent(user_b)}&url3=${encodeURIComponent(user_c)}&url4=${encodeURIComponent(user_d)}&url5=${encodeURIComponent(user_e)}&url6=${encodeURIComponent(user_f)}`, ctx);
    }
};

export default command;
