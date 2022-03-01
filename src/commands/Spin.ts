import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "spin",
    interaction: {
        name: "spin",
        description: "Like rotate, but cooler and takes 3x as long",
        options: dfImageAndUserGenerator(),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/spin", undefined, "gif");
    }
};

export default command;
