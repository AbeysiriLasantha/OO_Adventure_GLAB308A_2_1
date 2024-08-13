
//=========================
//Part 1: Humble Beginnings
//=========================

// a) Creating adventurer “Robin.”

    // const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"]
    //     }

// c) Adding a companion to “Robin” called "Leo".
   
    // const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"],
    //     companion: {
    //         name: "Leo",
    //         type: "Cat"
    //     }
    // }


// d) Adding a companion to “Robin” called "Leo".
   
    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat",
            companion: {
                name: "Frank",
                type: "Flea",
                belongings: ["Hat","Sunglasses"]
            }
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
        }
    }

// b) Loop through adventurer Robin's inventory.

    // const invLength = adventurer.inventory.length;

    //     for (let i=0; i<invLength; i++) {
    //         console.log(adventurer.inventory[i]);
    //     }


// e) Testing adventurer.roll() function of adventurer.
    adventurer.roll();


//=====================
//Part 2: Class Fantasy
//=====================