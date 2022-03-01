import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "amiajoke",
    interaction: {
        name: "amiajoke",
        description: "Am I a joke to you?  Yes, yes you are.",
        options: dfImageAndUserGenerator()
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/amiajoke");
    }
};

export default command;
