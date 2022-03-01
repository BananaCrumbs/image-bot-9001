import FormData from "form-data";
import {readFileSync} from "fs";
import {CommandContext} from "discord-rose";

export default class ImageUploadUtils {
    
    private constructor() {}
    
    /**
     * Get the name of the file from the path.
     * @param path {string} The path to the file.
     * @private
     */
    private static getFileNameFromPath(path: string | Buffer): string {
        if(typeof path === "string") {
            return path.split("/").pop() || "";
        } else {
            return "file.png";
        }
    }
    
    /**
     * Upload an image to the Discord API.
     * @param ctx {CommandContext} The command context.
     * @param path {string | Buffer} The path to the image or the image buffer.
     * @param content {string} The content of the image.
     * @param file_name {string} The name of the file.  Default is the file name of the path.
     */
    public static async uploadImage(ctx: CommandContext, path: string | Buffer, content: any, file_name: string = this.getFileNameFromPath(path)): Promise<void> {
        
        //change path to buffer
        //name is a bit confusing, but it's the buffer after this point.
        if(typeof path === "string") {
            path = readFileSync(path);
        }
        
        const formData = new FormData();
        
        formData.append("file", path, file_name);
        formData.append("payload_json", JSON.stringify(content));
        
        await ctx.worker.api.request("PATCH", `/webhooks/${ctx.worker.user.id}/${ctx.interaction.token}/messages/@original`, {
            body: formData,
            headers: formData.getHeaders(),
            parser: (_) => _,
        })
    }
    
}
