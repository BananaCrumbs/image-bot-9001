import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "sus",
    interaction: {
        name: "sus",
        description: "Stop posting about among us!",
        options: dfImageAndUserGenerator("The sussy image", "sus", "The sussy baka", "sus"),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/sus");
    }
};

export default command;
