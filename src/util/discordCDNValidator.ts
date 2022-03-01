
export default function(uri: string): boolean {
    return !!(uri.startsWith("https://cdn.discordapp.com/")
        || uri.startsWith("https://media.discordapp.net/")
        || uri.match(/https:\/\/images-ext-[0-9]{1,5}.discordapp.net\/.*/)
    );
    
    
}
