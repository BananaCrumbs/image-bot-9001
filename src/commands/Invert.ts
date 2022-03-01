import {CommandOptions} from "discord-rose";
import isContextInteraction from "../util/isContextInteraction";
import dfImageAndUserGenerator from "../util/dfImageAndUserGenerator";
import getURLFromInteractionCompImage from "../util/getURLFromInteractionCompImage";

const command: CommandOptions = {
    command: "invert",
    interaction: {
        name: "invert",
        description: "Inverts the colors of someone's avatar (what else would it do???)",
        options: dfImageAndUserGenerator("Invert an image", "The image to invert", "Invert a user's avatar", "The user whose avatar to invert"),
    },
    exec: async (ctx) => {
        if(!isContextInteraction(ctx)) return;
        
        return getURLFromInteractionCompImage(ctx, "/images/invert");
    }
}


export default command;
