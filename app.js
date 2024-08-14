
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
   
    // const adventurer = {
    //     name: "Robin",
    //     health: 10,
    //     inventory: ["sword", "potion", "artifact"],
    //     companion: {
    //         name: "Leo",
    //         type: "Cat",
    //         companion: {
    //             name: "Frank",
    //             type: "Flea",
    //             belongings: ["Hat","Sunglasses"]
    //         }
    //     },
    //     roll (mod = 0) {
    //         const result = Math.floor(Math.random() * 20) + 1 + mod;
    //         console.log(`${this.name} rolled a ${result}.`)
    //     }
    // }

// b) Loop through adventurer Robin's inventory.

    // const invLength = adventurer.inventory.length;

    //     for (let i=0; i<invLength; i++) {
    //         console.log(adventurer.inventory[i]);
    //     }


// e) Testing adventurer.roll() function of adventurer.
    // adventurer.roll();


//=====================
//Part 2: Class Fantasy
//=====================


// f) Making the class Character and adding data to that.

    class Character {
        constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        }
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
        }
    }

    const robin = new Character("Robin");
    robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Character("Leo");
    robin.companion.type = "Cat";
    robin.companion.companion = new Character("Frank");
    robin.companion.companion.type = "Flea";
    robin.companion.companion.inventory = ["small hat", "sunglasses"];

    robin.companion.roll();