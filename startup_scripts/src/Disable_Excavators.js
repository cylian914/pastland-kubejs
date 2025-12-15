const EventPriority = Java.loadClass("net.minecraftforge.eventbus.api.EventPriority")
const Villages = Java.loadClass("blusunrize.immersiveengineering.common.world.Villages")

ForgeEvents.onEvent("blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent", (e) => {
    if (e.getMultiblock().getUniqueName() == "immersiveengineering:multiblocks/excavator" || e.getMultiblock().getUniqueName() == "immersiveengineering:multiblocks/bucket_wheel")
	e.setCanceled(true);
});

//remove ore vein map
ForgeEvents.eventBus().addListener(EventPriority.LOW, false, Java.loadClass("net.minecraftforge.event.village.VillagerTradesEvent"), (e) => {
    if (Villages.ENGINEER.toString() == e.getType().name()) {
	e.getTrades()[5].clear();
	e.getTrades()[4].remove(3);
    }
});
