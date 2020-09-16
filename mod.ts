import createClient from "./src/module/client.ts";

export * from "./src/controllers/mod.ts";
export * from "./src/controllers/bans.ts";
export * from "./src/controllers/cache.ts";
export * from "./src/controllers/channels.ts";
export * from "./src/controllers/guilds.ts";
export * from "./src/controllers/members.ts";
export * from "./src/controllers/messages.ts";
export * from "./src/controllers/misc.ts";
export * from "./src/controllers/reactions.ts";
export * from "./src/controllers/roles.ts";

export * from "./src/module/client.ts";
export * from "./src/module/requestManager.ts";
export * from "./src/module/shardingManager.ts";

export * from "./src/structures/mod.ts";
export * from "./src/structures/channel.ts";
export * from "./src/structures/guild.ts";
export * from "./src/structures/member.ts";
export * from "./src/structures/message.ts";
export * from "./src/structures/role.ts";

export * from "./src/handlers/channel.ts";
export * from "./src/handlers/guild.ts";
export * from "./src/handlers/member.ts";
export * from "./src/handlers/message.ts";
export * from "./src/handlers/webhook.ts";

export * from "./src/types/activity.ts";
export * from "./src/types/cdn.ts";
export * from "./src/types/channel.ts";
export * from "./src/types/discord.ts";
export * from "./src/types/errors.ts";
export * from "./src/types/fetch.ts";
export * from "./src/types/guild.ts";
export * from "./src/types/member.ts";
export * from "./src/types/message.ts";
export * from "./src/types/options.ts";
export * from "./src/types/permission.ts";
export * from "./src/types/presence.ts";
export * from "./src/types/role.ts";

export * from "./src/utils/cache.ts";
export * from "./src/utils/cdn.ts";
export * from "./src/utils/collection.ts";
export * from "./src/utils/logger.ts";
export * from "./src/utils/permissions.ts";
export * from "./src/utils/utils.ts";

export default createClient;
