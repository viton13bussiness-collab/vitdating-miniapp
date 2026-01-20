import { Telegraf, Markup } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!BOT_TOKEN) throw new Error("BOT_TOKEN is required");
if (!WEBAPP_URL) throw new Error("WEBAPP_URL is required");

const bot = new Telegraf(BOT_TOKEN);

const webAppKeyboard = Markup.inlineKeyboard([
  Markup.button.webApp("Открыть VITDATING", WEBAPP_URL),
]);

bot.start(async (ctx) => {
  await ctx.reply(
    "VITDATING готов. Нажми кнопку ниже, чтобы открыть мини-приложение.",
    webAppKeyboard
  );
});

bot.command("app", async (ctx) => {
  await ctx.reply("Открываю VITDATING:", webAppKeyboard);
});

bot.on("message", async (ctx) => {
  await ctx.reply("Нажми кнопку, чтобы открыть Mini App:", webAppKeyboard);
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
