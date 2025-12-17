// Remove all mineral veins (so even if the machine exists, it finds nothing)
ServerEvents.recipes((event) => {
    //removing vein result in a crash due to IE villager trying to find a vein
    //TODO find a solution


    event.remove({id: "immersiveengineering:crafting/survey_tools"});
    event.remove({id: "immersiveengineering:crafting/sample_drill"})
});
