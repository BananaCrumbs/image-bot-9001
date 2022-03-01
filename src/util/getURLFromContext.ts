import {CommandContext} from "discord-rose";

/**
 * Get the user's avatar URL from the context.
 * @param ctx {CommandContext} The context to get the user's avatar URL from.
 * @param user_id {string} The user's ID (optional).
 * @returns {string | undefined} The user's avatar URL.  This should not return `undefined` under any circumstances (but it could).
 */
export default async function(ctx: CommandContext, user_id: string = ctx.options["user"]): Promise<string | undefined> {
    
    const user = await ctx.worker.api.users.get(user_id);
    
    if(!user) return;
    
    const avatar_hash = user.avatar;
    
    let url;
    
    //default avatar checking
    if(!avatar_hash) {
        url = `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`;
    } else {
        url = `https://cdn.discordapp.com/avatars/${user_id}/${avatar_hash}.png`;
    }
    
    return url;
}
