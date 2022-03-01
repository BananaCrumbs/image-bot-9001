#!

import {SingleWorker} from "discord-rose";
import * as Path from "path";
import {CacheOptions} from "discord-rose/dist/typings/options";

import cooldownMiddleware from "@discord-rose/cooldown-middleware";

const token = process.env["DISCORD_TOKEN"];
const intents = 513;
const cache: CacheOptions = {
    users: true,
    voiceStates: false,
    self: false,
    roles: false,
    messages: false,
    channels: false,
    members: false,
    guilds: false,
};

if(!token) {
    console.error("No token found!");
    process.exit(1);
}

const worker = new SingleWorker({
    token, intents, cache,
});

worker.commands.prefix("/")
    .middleware(cooldownMiddleware())
    .load(Path.resolve(__dirname, "./commands"));

worker.start().then(() => console.log("Started the bot."));
