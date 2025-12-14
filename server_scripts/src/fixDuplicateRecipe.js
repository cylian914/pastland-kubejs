//this doesn't remove item tag so it could still be used for craft, some of the item can still be optained with ImersiveE arcfurance
function fixMetal(e) {
    //coper: nugget tag
    e.replaceInput({input: "create:copper_nugget"}, "create:copper_nugget", "#forge:nuggets/copper")
    e.replaceInput({input: "immersiveengineering:nugget_copper"}, "immersiveengineering:nugget_copper", "#forge:nuggets/copper")
    e.replaceInput({input: "malum:copper_nugget"}, "malum:copper_nugget", "#forge:nuggets/copper")
    //coper: mainly use malum's nugget
    e.replaceOutput({output: "create:copper_nugget"}, "create:copper_nugget", "malum:copper_nugget")
    e.replaceOutput({output: "immersiveengineering:nugget_copper"}, "immersiveengineering:nugget_copper", "malum:copper_nugget")
    //coper: dust tag
    e.replaceInput({input: "occultism:copper_dust"}, "occultism:copper_dust", "#forge:dusts/copper")
    e.replaceInput({input: "immersiveengineering:dust_copper"}, "immersiveengineering:dust_copper", "#forge:dusts/copper")
    //coper: mainly use occultism's dust
    e.replaceOutput({output: "immersiveengineering:dust_copper"}, "immersiveengineering:dust_copper", "occultism:copper_dust")

    //electrum: ingot tag
    e.replaceInput({input: "createaddition:electrum_ingot"}, "createaddition:electrum_ingot", "#forge:ingots/electrum")
    e.replaceInput({input: "immersiveengineering:ingot_electrum"}, "immersiveengineering:ingot_electrum", "#forge:ingots/electrum")
    //electrum: mainly use addition's ingot
    e.replaceOutput({output: "immersiveengineering:ingot_electrum"}, "immersiveengineering:ingot_electrum", "createaddition:electrum_ingot")
    //electrum: nugget tag 
    e.replaceInput({input: "createaddition:electrum_nugget"}, "createaddition:electrum_nugget", "#forge:nuggets/electrum")
    e.replaceInput({input: "immersiveengineering:nugget_electrum"}, "immersiveengineering:nugget_electrum", "#forge:nuggets/electrum")
    //electrum: mainly use addition's nuggets
    e.replaceOutput({output: "immersiveengineering:nugget_electrum"}, "immersiveengineering:nugget_electrum", "createaddition:electrum_nugget")
    
    //silver: ingot tag
    e.replaceInput({input: "occultism:silver_ingot"}, "occultism:silver_ingot", "#forge:ingots/silver")
    e.replaceInput({input: "immersiveengineering:ingot_silver"}, "immersiveengineering:ingot_silver", "#forge:ingots/silver")  
    //silver: mainly use addition's ingot
    e.replaceOutput({output: "immersiveengineering:ingot_silver"}, "immersiveengineering:ingot_silver", "occultism:silver_ingot")
    //silver: nugget tag 
    e.replaceInput({input: "occultism:silver_nugget"}, "occultism:silver_nugget", "#forge:nuggets/silver")
    e.replaceInput({input: "immersiveengineering:nugget_silver"}, "immersiveengineering:nugget_silver", "#forge:nuggets/silver")
    //silver: mainly use addition's nuggets
    e.replaceOutput({output: "immersiveengineering:nugget_silver"}, "immersiveengineering:nugget_silver", "occultism:silver_nugget")
    //silver: dust tag
    e.replaceInput({input: "occultism:silver_dust"}, "occultism:silver_dust", "#forge:dusts/silver")
    e.replaceInput({input: "immersiveengineering:dust_silver"}, "immersiveengineering:dust_silver", "#forge:dusts/silver")  
    //silver: mainly use occ's dust
    e.replaceOutput({output: "immersiveengineering:dust_silver"}, "immersiveengineering:dust_silver", "occultism:silver_dust")

    //gold: dust tag
    e.replaceInput({input: "occultism:gold_dust"}, "occultism:gold_dust", "#forge:dusts/gold")
    e.replaceInput({input: "immersiveengineering:dust_gold"}, "immersiveengineering:dust_gold", "#forge:dusts/gold")  
    //gold: mainly use occ's dust
    e.replaceOutput({output: "immersiveengineering:dust_gold"}, "immersiveengineering:dust_gold", "occultism:gold_dust")

    //iron: dust tag
    e.replaceInput({input: "occultism:iron_dust"}, "occultism:iron_dust", "#forge:dusts/iron")
    e.replaceInput({input: "immersiveengineering:dust_iron"}, "immersiveengineering:dust_iron", "#forge:dusts/iron")  
    //iron: mainly use occ's dust
    e.replaceOutput({output: "immersiveengineering:dust_iron"}, "immersiveengineering:dust_iron", "occultism:iron_dust")


}

ServerEvents.recipes((e) => {
    //heat: "heated" or "superheated"
    function mixin(out, ingre) {
	return e.custom({
	    type: "create:mixing",
	    ingredients: ingre,
	    results: out
	})
    }
    
    fixMetal(e)

    //Create encased shaft
    e.remove({id: "createcasing:crafting/shafts/oak_shaft"})
    e.remove({id: "createcasing:crafting/shafts/spruce_shaft"})
    e.remove({id: "createcasing:crafting/shafts/birch_shaft"})
    e.remove({id: "createcasing:crafting/shafts/jungle_shaft"})
    e.remove({id: "createcasing:crafting/shafts/acacia_shaft"})
    e.remove({id: "createcasing:crafting/shafts/dark_oak_shaft"})
    e.remove({id: "createcasing:crafting/shafts/mangrove_shaft"})
    e.remove({id: "createcasing:crafting/shafts/cherry_shaft"})
    e.remove({id: "createcasing:crafting/shafts/bamboo_shaft"})
    e.remove({id: "createcasing:crafting/shafts/crimson_shaft"})
    e.remove({id: "createcasing:crafting/shafts/warpped_shaft"})

    e.stonecutting("4x createcasing:oak_shaft", "minecraft:stripped_oak_log")
    e.stonecutting("4x createcasing:spruce_shaft", "minecraft:stripped_spruce_log")
    e.stonecutting("4x createcasing:birch_shaft", "minecraft:stripped_birch_log")
    e.stonecutting("4x createcasing:jungle_shaft", "minecraft:stripped_jungle_log")
    e.stonecutting("4x createcasing:acacia_shaft", "minecraft:stripped_acacia_log")
    e.stonecutting("4x createcasing:dark_oak_shaft", "minecraft:stripped_dark_oak_log")
    e.stonecutting("4x createcasing:mangrove_shaft", "minecraft:stripped_mangrove_log")
    e.stonecutting("4x createcasing:cherry_shaft", "minecraft:stripped_cherry_log")
    e.stonecutting("4x createcasing:bamboo_shaft", "minecraft:stripped_bamboo_block")
    e.stonecutting("4x createcasing:crimson_shaft", "minecraft:stripped_crimson_stem")
    e.stonecutting("4x createcasing:warped_shaft", "minecraft:stripped_warped_stem")

    //pamhc2
    e.replaceInput({id: "pamhc2foodcore:tool_roller"}, "#minecraft:logs", "#forge:stripped_logs") //item: rolleritem
    e.remove({id: "pamhc2foodcore:cookiesandmilkitem"})
    e.shapeless(Item.of('pamhc2foodcore:cookiesandmilkitem', 1), [{"tag":"forge:milk"},{"tag":"forge:cookies"}])

    //cookingforblockheads
    e.remove({id: "cookingforblockheads:spice_rack"})
    e.stonecutting("cookingforblockheads:spice_rack", "#minecraft:wooden_slabs")

    //add plantoil to butter recipe to remove recipe conflict
    e.remove({output: "pamhc2foodextended:almondbutteritem"})
    e.remove({output: "pamhc2foodextended:cashewbutteritem"})
    e.remove({output: "pamhc2foodextended:chestnutbutteritem"})
    e.remove({output: "pamhc2foodextended:hazelnutbutteritem"})
    e.remove({output: "pamhc2foodextended:peanutbutteritem"})
    e.remove({output: "pamhc2foodextended:pecanbutteritem"})
    e.remove({output: "pamhc2foodextended:pistachiobutteritem"})
    e.remove({output: "pamhc2foodextended:walnutbutteritem"})
    e.remove({output: "pamhc2foodextended:sunflowerseedsbutteritem"})

    e.shapeless(Item.of("pamhc2foodextended:almondbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:almonditem"])
    e.shapeless(Item.of("pamhc2foodextended:cashewbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:cashewitem"])
    e.shapeless(Item.of("pamhc2foodextended:chestnutbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:chestnutitem"])
    e.shapeless(Item.of("pamhc2foodextended:hazelnutbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:hazelnutitem"])
    e.shapeless(Item.of("pamhc2foodextended:peanutbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2crops:peanutitem"])
    e.shapeless(Item.of("pamhc2foodextended:pecanbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:pecanitem"])
    e.shapeless(Item.of("pamhc2foodextended:pistachiobutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:pistachioitem"])
    e.shapeless(Item.of("pamhc2foodextended:walnutbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2trees:walnutitem"])
    e.shapeless(Item.of("pamhc2foodextended:sunflowerseedsbutteritem", 2), ["pamhc2foodcore:grinderitem", "#forge:bucket/plantoil", "pamhc2foodcore:sunflowerseedsitem"])

    mixin([{ item: "pamhc2foodextended:almondbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:almonditem"}])
    mixin([{ item: "pamhc2foodextended:cashewbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:cashewitem"}])
    mixin([{ item: "pamhc2foodextended:chestnutbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:chestnutitem"}])
    mixin([{ item: "pamhc2foodextended:hazelnutbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:hazelnutitem"}])
    mixin([{ item: "pamhc2foodextended:peanutbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2crops:peanutitem"}])
    mixin([{ item: "pamhc2foodextended:pecanbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:pecanitem"}])
    mixin([{ item: "pamhc2foodextended:pistachiobutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:pistachioitem"}])
    mixin([{ item: "pamhc2foodextended:walnutbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2trees:walnutitem"}])
    mixin([{ item: "pamhc2foodextended:sunflowerseedsbutteritem", count: 2}], [{item: "pamhc2foodcore:grinderitem"}, {amount: 500, fluidTag: "forge:plantoil"}, {item: "pamhc2foodcore:sunflowerseedsitem"}])

    //make macow thingy biomeoplenty use shaped recipe
    function macowPlentyShutter(shutter, input) {
	e.remove({output: shutter})
	return e.shaped(Item.of(shutter, 3),
	    [" A ",
	     " A ",
	     " A "],
	    {
		A: input
	    }
	)
    }
    macowPlentyShutter("mcwbiomesoplenty:dead_shutter", "biomesoplenty:dead_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:dead_louvered_shutter", "biomesoplenty:dead_slab")
    macowPlentyShutter("mcwbiomesoplenty:fir_shutter", "biomesoplenty:fir_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:fir_louvered_shutter", "biomesoplenty:fir_slab")
    macowPlentyShutter("mcwbiomesoplenty:hellbark_shutter", "biomesoplenty:hellbark_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:hellbark_louvered_shutter", "biomesoplenty:hellbark_slab")
    macowPlentyShutter("mcwbiomesoplenty:jacaranda_shutter", "biomesoplenty:jacaranda_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:jacaranda_louvered_shutter", "biomesoplenty:jacaranda_slab")
    macowPlentyShutter("mcwbiomesoplenty:magic_shutter", "biomesoplenty:magic_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:magic_louvered_shutter", "biomesoplenty:magic_slab")
    macowPlentyShutter("mcwbiomesoplenty:mahogany_shutter", "biomesoplenty:mahogany_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:mahogany_louvered_shutter", "biomesoplenty:mahogany_slab")
    macowPlentyShutter("mcwbiomesoplenty:palm_shutter", "biomesoplenty:palm_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:palm_louvered_shutter", "biomesoplenty:palm_slab")
    macowPlentyShutter("mcwbiomesoplenty:redwood_shutter", "biomesoplenty:redwood_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:redwood_louvered_shutter", "biomesoplenty:redwood_slab")
    macowPlentyShutter("mcwbiomesoplenty:umbran_shutter", "biomesoplenty:umbran_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:umbran_louvered_shutter", "biomesoplenty:umbran_slab")
    macowPlentyShutter("mcwbiomesoplenty:willow_shutter", "biomesoplenty:willow_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:willow_louvered_shutter", "biomesoplenty:willow_slab")
    macowPlentyShutter("mcwbiomesoplenty:empyreal_shutter", "biomesoplenty:empyreal_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:empyreal_louvered_shutter", "biomesoplenty:empyreal_slab")
    macowPlentyShutter("mcwbiomesoplenty:maple_shutter", "biomesoplenty:maple_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:maple_louvered_shutter", "biomesoplenty:maple_slab")
    macowPlentyShutter("mcwbiomesoplenty:pine_shutter", "biomesoplenty:pine_trapdoor")
    macowPlentyShutter("mcwbiomesoplenty:pine_louvered_shutter", "biomesoplenty:pine_slab")

    //fix suppsquared using the wrong item for craft
    e.shaped(Item.of("suppsquared:domum_ornamentum/item_shelf_cactus", 2), ["   ","AAA","   "], {A: Item.of('domum_ornamentum:vanilla_slab_compat', '{textureData:{"minecraft:block/oak_planks":"domum_ornamentum:green_cactus_extra"}}').strongNBT()})
    e.remove({id: "suppsquared:domum_ornamentum/item_shelf_cactus"})
    e.shaped(Item.of("suppsquared:domum_ornamentum/item_shelf_cactus_extra", 2), ["   ","AAA","   "], {A: Item.of('domum_ornamentum:vanilla_slab_compat', '{textureData:{"minecraft:block/oak_planks":"domum_ornamentum:cactus_extra"}}').strongNBT()})
    e.remove({id: "suppsquared:domum_ornamentum/item_shelf_cactus_extra"})

    //supplementaries
    e.remove({id: "decorative_blocks:lattice"})
    e.shaped(Item.of("decorative_blocks:lattice", 1), ["A A", " A ", "A A"], {A: "minecraft:stick"})
    e.remove({id: "pamhc2crops:string_fiber"})
    e.remove({id: "supplementaries:flute"})
    e.shaped(Item.of('supplementaries:flute', 1), [" S  ", " A ", " A "], {A: "minecraft:bamboo", S: "minecraft:stick"})

   
})

ServerEvents.tags("item", (e) => {
    e.add("forge:bucket/plantoil", "createaddition:seed_oil_bucket")
    e.add("forge:bucket/plantoil", "immersiveengineering:plantoil_bucket")
})
