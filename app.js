
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

        // j) Defining a static variable
        static max_health = 100;

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
        // k) Defining a static variable 
        static roles = ["Fighter", "Healer", "Wizard"];
        
        constructor (name,role) {
            // Check if the passed roles are valid
            if (Adventurer.roles.includes(role)) {
                super(name);
                this.role = role;
                // Every adventurer starts with a bed and 50 gold coins.
                this.inventory.push("bedroll", "50 gold coins");
            } else {
                throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.roles.join(", ")}`);
            }      
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

// m) Creating a factory by "AdventurerFactory" class name.

    class AdventurerFactory {
        constructor (role) {
        this.role = role;
        this.adventurers = [];
        }
        generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        //Returning newly created Robin object
        return newAdventurer;
        }
        findByIndex (index) {
        return this.adventurers[index];
        }
        findByName (name) {
        return this.adventurers.find((a) => a.name === name);
        }
    }


// g) Change the declaration of Robin.
    console.log ("Creating Robin");
    console.log ("==============");
    console.log ("Robin is newly created in Part:5 (below) as a Healer");

    // const robin = new Adventurer ("Robin", "Fighter");
    // console.log (robin);

   
//=======================
//Part 04: Class Uniforms
//=======================

// l) Creating static variables called max_health and roles in the Adventurer class.

  
//==========================
//Part 05: Gather your Party
//==========================

// m) Creating a factory by "AdventurerFactory" class name (see above).
    
    const healers = new AdventurerFactory("Healer");
    const robin = healers.generate("Robin");
    
    //console.log(robin);

 // h) Change the declaration of Leo.
    console.log ("Creating Leo");
    console.log ("============");

    const leo = new Companion ("Leo", "Cat");
    //console.log (leo);

 // i) Change the declaration of Frank.
    console.log ("Creating Frank");
    console.log ("==============");

    const frank = new Companion ("Frank", "Flea", ["small hat", "sunglasses"]);
    //console.log (frank);

    // Assigning Leo as a companion to Robin
robin.companion = leo;

// Assigning Frank as a companion to Leo
leo.companion = frank;

console.log(robin);
console.log(robin.companion); // This should show Leo with Frank as a companion
console.log(robin.companion.companion); // This should show Frank

////////////////////////////////////////////////////////////////////////////////