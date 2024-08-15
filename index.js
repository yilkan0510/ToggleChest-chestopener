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

register("tick", () => {
  if (togglechest) {
    let block = Player.lookingAt();

    if (block && block.type) {
      // Get the block ID
      let blockID = block.type.getID();

      // Check if the block ID matches the chest ID
      if (blockID === 54) {  // 54 is the ID for a regular chest
        ChatLib.chat("opening chest");

      }
    }
  }
});
