import axios from "axios";
import ImageUploadUtils from "./ImageUploadUtil";
import {CommandContext} from "discord-rose";

/**
 * Class containing utilities for fetching images from the Image API server, then
 * uplaoding them to Discord using the {@code CommandContext}.
 * 
 * @version 1.0.0
 * @author BananaCrumbs {@literal <bananacrumbs.com>}
 */
export default class ImageFetcher {
    
    private constructor() {}
    
    /**
     * Get the image path and upload it to Discord given the context.
     * 
     * Upon error, the error is logged to the console and the context returns "Error: MESSAGE".
     * 
     * @param path {string} The path to the image.
     * @param ctx {CommandContext} The context of the command.
     * @param type {string} The type of image (default=png).
     */
    public static async getImage(path: string, ctx: CommandContext, type: "png" | "gif" | "jpeg" | "jpg" = "png"): Promise<void> {
        await ctx.typing();
        axios.get("http://localhost:6969" + (path.startsWith(`/`) ? path : `/${path}`), {
            responseType: "arraybuffer",
        })
            .then(res => {
                ImageUploadUtils.uploadImage(ctx, Buffer.from(res.data), "", "image-bot-9001.bananacrumbs.com-output." + type);
            })
            .catch((e: any) => {
                ctx.reply(`Error: ${e?.message}`).then(() => {
                    console.error(e);
                });
            });
    }
    
    /**
     * Enforce the string to be a valid length, truncating if necessary.
     * 
     * @param str {string} The string to check.
     * @param maxLength {number} The maximum length of the string.
     * @returns {string} The (possibly truncated) string.
     */
    public static enforceStringLength(str: string, maxLength: number = 64): string {
        if(str.length > maxLength) {
            return str.substring(0, maxLength);
        }
        return str;
    }
    
}
