import {ApplicationCommandOptionType} from "discord-api-types";

/**
 * Generates the options needed for a command which uses image/user data.
 * 
 * This does not do any validation.
 * 
 * @param image_description {string} The description of the image command.
 * @param image_sub_description {string} The sub-description of the image command.
 * @param user_description {string} The description of the user command.
 * @param user_sub_description {string} The sub-description of the user command.
 */
export default function(
    image_description = "Image to use",
    image_sub_description = "The image to use",
    user_description = "Get the avatar from a user",
    user_sub_description = "The user to get teh avatar from"): any {
    return [
        {
            name: "image",
            description: image_description,
            type: ApplicationCommandOptionType.Subcommand,
            options: [{
                name: "image",
                description: image_sub_description,
                type: 11,
                required: true,
            }],
        },
        {
            name: "user",
            description: user_description,
            type: ApplicationCommandOptionType.Subcommand,
            options: [{
                name: "user",
                description: user_sub_description,
                type: ApplicationCommandOptionType.User,
                required: true,
            }]
        }
    ];
}
