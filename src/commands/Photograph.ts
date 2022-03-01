import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "photograph",
    interaction: {
        name: "photograph",
        description: "Look at this giraffe",
        options: dfImageAndUserGenerator("We'll frame this image", "The image to frame", "We'll frame this user", "The user to frame"),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/photograph");
    },
};

export default command;
