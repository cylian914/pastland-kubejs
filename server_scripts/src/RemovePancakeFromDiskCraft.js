ServerEvents.tags("item", (e) => {
    const disks = e.get('minecraft:music_discs').getObjectIds()
    disks.forEach(disk => {
        e.add('pastland:music_disks', disk)
    })
    e.remove("pastland:music_disks", "supplementaries:pancake")
})

ServerEvents.recipes((e) => {
    e.replaceInput({input: "#minecraft:music_discs"}, "#minecraft:music_discs", "#pastland:music_disks")
    e.remove({id: "malum:spirit_infusion/music_disc_arcane_elegy"})
    e.custom({
        type: "malum:spirit_infusion",
        extra_items: [],
        input: {
            count: 1,
            tag: "pastland:music_disks"
        },
        output: {
            item: "malum:music_disc_arcane_elegy"
        },
        spirits: [
            {
                type: "aerial",
                count: 4
            },
            {
                type: "aqueous",
                count: 4
            },
            {
                type: "earthen",
                count: 4
            },
            {
                type: "infernal",
                count: 4
            }
        ]
    })
})
