//----------------WEEK 3 - LAB: 1 (Grade: 100%)------------

// Task 1: Build a function-based console log message generator
function consoleStyler (color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    let fontStyle = 'color: tomato; font-size: 50px';
    if (reason == 'birthday') {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == 'champions') {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    else {
        console.log(message, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');


//------------------Animal class exercise------------

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }

    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0) {
            this.sleep();
        }
    }
    
    sleep() {
        this.energy += 20;
        console.log("Energy is increasing, currently at:", this.energy)
    }

    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = 'meow', color, canJumpHigh, canClimbTrees, sound, energy) {
            super(sound, canJumpHigh, canClimbTrees, color, energy);
            this.houseCatSound = houseCatSound;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }

    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
        console.log("I'm a talking parrot!");
        }
    }
}


var polly = new Parrot(true); // true  = can talk
polly.color;
polly.energy;
polly.isActive();

polly.makeSound(true);


//--------Penguin--------

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180


//------House cat----------

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

//------------Tiger------------
var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!




//-----------Programming Assignment: Building an object-oriented program---------------
// Task 1: Code a Person class

class Person {

    // intialization in the constructor 

    constructor(name = "Tom", age = 20, energy = 100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
    }

    // sleep() method
    sleep() {
      this.energy = this.energy + 10;
    }

    // doSomethingFun() method
    doSomethingFun() {
      this.energy = this.energy - 10;
    }
  }
  
  // Task 2: Code a Worker class
  
  class Worker extends Person {

      // intialization in the constructor 
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
      super(name, age, energy);
      this.xp = xp;
      this.hourlyWage = hourlyWage;
    }
  
    // as we extends the Person class so we already got those sleep() and doSomethingFun() methods
    
    // goToWork() method 

    goToWork() {
      this.xp = this.xp + 10;
    }
  }
  
  // Task 3: Code an intern object, run methods
  
  function intern() {

      // as documentation said

    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
  }
  
  // Task 4: Code a manager object, methods
  function manager() {

      // as documentation said
      
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
  }
  

  // ==== Capture Date Exercise

// Task 2 - create h1 element
var h1 = document.querySelector('h1')

// Task 3 - Code an array
var arr = ['Example Domain','First Click','Second Click','Third Click']

// Task 4 - Code click-handleing function
function handleClick() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

// Task 5 add event listener
<h1 onclick="handleClick()">Example Domain</h1>

h1.addEventListener('click', handleClick)

//=============