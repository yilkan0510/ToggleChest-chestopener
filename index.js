register("tick", () => {
  ChatLib.chat("§6§l[ToggleChest] §r§aModule loaded successfully!");
  unregister(this);
});


let togglechest = false;

register("command", () => {
  togglechest = !togglechest;

  if (togglechest) {
    ChatLib.chat("togglechest is now ON");
  } else {
    ChatLib.chat("togglechest is now OFF");
  }
}).setName("togglechest");