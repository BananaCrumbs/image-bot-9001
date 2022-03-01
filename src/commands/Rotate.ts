import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "rotate",
    interaction: {
        name: "rotate",
        description: "Rotates the image continuously (this is a GIF)",
        options: dfImageAndUserGenerator(),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/rotate", undefined, "gif");
    }
};

export default command;
