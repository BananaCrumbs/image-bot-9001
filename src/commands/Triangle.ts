import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "triangle",
    interaction: {
        name: "triangle",
        description: "Draws a triangle of a user's avatar or an image",
        options: dfImageAndUserGenerator(),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/triangle");
    }
}

export default command;
