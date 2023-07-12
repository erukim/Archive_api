import Archive_Client from ".";
import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.GuildMessages] })
client.login(``)

client.on(Events.ClientReady, async () => {
  if (!client.user) return
  console.log(client.user.tag)
  const archive = new Archive_Client('', client.user.id);
  console.log((await archive.Bot_GetLike(``)))
})