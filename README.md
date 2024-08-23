# minecraft-format-codes
Typescript Enums for minecraft's color codes and format codes.
Includes color codes from both minecraft java and bedrock, but is mainly intended to work with the minecraft bedrock scripting api.

```ts
import { BedrockColorCodes } from "minecraft-format-codes";
import { world } from "@minecraft/server";

world.afterEvents.playerEmoting.subscribe(arg => {
    world.sendMessage(`${BedrockColorCodes.Green} ${arg.player.name} is emoting!`);
})

```