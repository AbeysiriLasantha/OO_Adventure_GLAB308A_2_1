
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

    // const robin = new Character("Robin");
    // robin.inventory = ["sword", "potion", "artifact"];
    // robin.companion = new Character("Leo");
    // robin.companion.type = "Cat";
    // robin.companion.companion = new Character("Frank");
    // robin.companion.companion.type = "Flea";
    // robin.companion.companion.inventory = ["small hat", "sunglasses"];

    // robin.companion.roll();

    
//=======================
//Part 03: Class Features
//=======================


// g) Making the class Character and adding data to that.

    class Adventurer extends Character {
        constructor (name, role) {
        super(name);

        // Adventurers have specialized roles.
        this.role = role;

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
        }

        // Adventurers have the ability to scout ahead of them.
        scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
        }
    }


// f) Creating class Companion.

    class Companion extends Character {
        constructor (name, type, belongings) {
            super(name);
            this.type = type;
            this.belongings = belongings;
        }
    }

// g) Change the declaration of Robin.
    console.log ("Creating Robin");
    console.log ("==============");
    
    const robin = new Adventurer ("Robin", "Leader");
    console.log (robin);


// h) Change the declaration of Leo.
    console.log ("Creating Leo");
    console.log ("============");

    const leo = new Companion ("Leo", "Cat");
    console.log (leo);

// i) Change the declaration of Frank.
    console.log ("Creating Frank");
    console.log ("==============");

    const frank = new Companion ("Frank", "Flea", ["small hat", "sunglasses"]);
    console.log (frank);

 



