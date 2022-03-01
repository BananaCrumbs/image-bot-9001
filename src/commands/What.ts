import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "what",
    interaction: {
        name: "what",
        description: "WHAT",
        options: dfImageAndUserGenerator(),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/what");
    }
}

export default command;
