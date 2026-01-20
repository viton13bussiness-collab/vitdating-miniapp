const out = document.getElementById("out");
const btn = document.getElementById("btn");

const tg = window.Telegram?.WebApp;

function show(msg){
  out.textContent = msg;
}

btn.addEventListener("click", () => {
  if (!tg) {
    show("Откройте Mini App внутри Telegram. В обычном браузере initData недоступно.");
    return;
  }

  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;
  const summary = {
    platform: tg.platform,
    version: tg.version,
    user: user ? { id: user.id, username: user.username } : null,
    hasInitData: Boolean(tg.initData && tg.initData.length > 0)
  };

  show("Telegram WebApp OK:\n" + JSON.stringify(summary, null, 2));
});
