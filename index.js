register("tick", () => {
  ChatLib.chat("§6§l[ToggleChest] §r§aModule loaded successfully!");
  unregister(this);
});

let togglechest = false;

register("command", () => {
  togglechest = !togglechest;

  if (togglechest) {
    ChatLib.chat("§6§l[ToggleChest] §r§aAuto-chest opening is now ON");
  } else {
    ChatLib.chat("§6§l[ToggleChest] §r§cAuto-chest opening is now OFF");
  }
}).setName("togglechest");

