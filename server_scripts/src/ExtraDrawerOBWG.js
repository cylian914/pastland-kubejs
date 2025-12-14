ServerEvents.recipes((e) => {
	//disable Oh The Biomes We've Gone extra drawer compat cause messing with recipe
	global.get("OBWGwood").forEach((w) => {
		global.get("drawerType").forEach((d) => {
			e.remove({output: "storagedrawersextra:biomeswevegone_" + w + "_" + d})
		})
	})
})
