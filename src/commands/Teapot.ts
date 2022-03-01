import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "teapot",
    interaction: {
        name: "teapot",
        description: "418 I'm a teapot",
        options: dfImageAndUserGenerator()
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/teapot");
    }
}

export default command;
