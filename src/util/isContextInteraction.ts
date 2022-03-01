import {CommandContext} from "discord-rose";

/**
 * Checks if the context is an interaction, telling the user to use a slash command instead if it isn't.
 * @param ctx {CommandContext} The context to check.
 * @returns {boolean} Whether or not the context is an interaction.
 */
export default function(ctx: CommandContext): boolean {
    if(!ctx.isInteraction) {
        ctx.reply("This command must be used as a slash command (the slash command menu).");
        return false;
    }
    
    return true;
}
