import ImageFetcher from "./ImageFetcher";
import getURLFromContext from "./getURLFromContext";
import {CommandContext} from "discord-rose";

/**
 * For commands that accept an image or a user parameter.
 * 
 * @param ctx {CommandContext} the context of the command.
 * @param path {string} the route for the api (e.g. `/images/what`).  This will add the `?` and parameters automatically.
 * @param user_name {string} the name of the user object (not the username of the user).
 */
export default async function(ctx: CommandContext, path: string, user_name = "user") {
    const resolved: any = ctx.interaction.data?.resolved;
    
    //if the type is an attachment, use that
    if(resolved.attachments) {
        const content_type = resolved.attachments[Object.keys(resolved.attachments)[0] || 0].content_type;
        
        if(content_type !== "image/png" && content_type !== "image/jpeg" && content_type !== "image/gif") return;
        
        await ImageFetcher.getImage(`${path}?url=${encodeURIComponent(resolved.attachments[Object.keys(resolved.attachments)[0] || 0].url)}`, ctx, content_type.split("/")[1]);
    } else { //otherwise, use the mentioned user's avatar
        const url = await getURLFromContext(ctx, ctx.options[user_name].user);
        
        if(!url) return;
        
        await ImageFetcher.getImage(`${path}?url=${encodeURIComponent(url)}`, ctx, "png");
    }
}
