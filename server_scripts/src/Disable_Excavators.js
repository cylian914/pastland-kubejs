// Disable Immersive Engineering Excavator

// Remove excavator multiblock formation
// This prevents players from building it at all
ServerEvents.tags('immersiveengineering:multiblock/invalid', event => {
    event.add('immersiveengineering:excavator');
});

// Remove all mineral veins (so even if the machine exists, it finds nothing)
ServerEvents.highPriorityData((event) => {
    event.addJson('immersiveengineering:worldgen/mineral/empty', {
        "type": "immersiveengineering:mineral",
        "ores": [],
        "spoils": [],
        "weight": 0,
        "fail_chance": 1.0
    });
});
