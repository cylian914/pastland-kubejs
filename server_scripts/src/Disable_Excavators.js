// Remove all mineral veins (so even if the machine exists, it finds nothing)
ServerEvents.recipes((event) => {
    //removing vein result in a crash due to IE villager trying to find a vein
    //TODO find a solution
    /*event.recipeStream({type: "immersiveengineering:mineral_mix"}).forEach((recipe) => {
	if (recipe.getId() == "immersiveengineering:mineral/igneous_rock")
	    return; //let 1 non harmfull one to avoid villager crash
	recipe.remove();
    });*/
    event.remove({type: "immersiveengineering:mineral_mix"});
    event.remove({id: "immersiveengineering:crafting/survey_tools"});
});
