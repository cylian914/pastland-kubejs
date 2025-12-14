JEIEvents.hideItems(e => {
	global.get("OBWGwood").forEach((w) => {
		global.get("drawerType").forEach((d) => {
			e.hide("storagedrawersextra:biomeswevegone_" + w + "_" + d)
		})
	})

})
