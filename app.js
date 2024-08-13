
//Part 1: Humble Beginnings
// a) Creating adventurer “Robin.”

    // const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"]
    //     }

// c) Adding a companion to “Robin” called "Leo".
   
    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat"
        }
    }

// b) Loop through adventurer Robin's inventory.

    const invLength = adventurer.inventory.length;

        for (let i=0; i<invLength; i++) {
            console.log(adventurer.inventory[i]);
        }


// b) Loop through adventurer Robin's inventory.


