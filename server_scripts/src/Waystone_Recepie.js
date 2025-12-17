ServerEvents.recipes(event => {

    event.remove({id: "waystones:warp_dust"})
    event.remove({input: "#waystones:sharestone"})
    event.remove({output: "waystones:sharestone"})
    event.remove({output: "waystones:portstone"})
    event.replaceInput({input: 'waystones:warp_stone'}, 'waystones:warp_stone', 'waystones:warp_dust')
    event.remove({output: "waystones:warp_stone"})
    event.remove({id: "waystones:warp_plate"})
    event.remove({id: "waystones:return_scroll"})
    event.remove({id: "waystones:bound_scroll"})
    event.remove({id: "waystones:warp_scroll"})

    event.shaped('waystones:warp_dust', [
        'MGM',
        'PLP',
        'HSH'
    ], {
        // BOTANIA (hardest tier)
        G: 'botania:life_essence',
        M: 'botania:mana_diamond_block',
        
        // CENTER: Nether Star (vanilla high-tier)
        L: 'minecraft:nether_star',

        // CREATE (late tier)
        P: 'create:precision_mechanism',

        // OCCULTISM
        S: 'occultism:iesnium_block',

        // HEXCASTING
        H: 'hexcasting:quenched_allay_shard'
    });
});
