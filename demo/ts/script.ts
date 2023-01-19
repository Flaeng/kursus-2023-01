const b = document.body;

b.getElementsByClassName('test');

setTimeout(function () {
    b.style.backgroundColor = 'green';
}, 1000);


type Dog = { name: string | null, ageInDogYears: number }
type Cat = { name: string, kitten: boolean }
type Horse = { name: string, price: number }
type AgedAnimal = { age: number}

type Animal = Dog | Cat | Horse;

class House {

    public OpenDoor(dog: Dog): void;
    public OpenDoor(cat: Cat, breed: string): void;
    public OpenDoor(animal?: Animal, breed?: string): void {

    }

    public static isDog(ani: unknown): ani is Dog {
        return (ani as Dog).ageInDogYears !== undefined;
    }
}

// const variable: any = {};
// variable.bark();

enum Animals { Dog, Cat, Horse }
class Helper  {

    public static test(variable2: Animals): string {
        switch (variable2) 
        {
            case Animals.Dog: return 'hund';
            case Animals.Cat: return 'kat';
            case Animals.Horse: return 'hest';
        }
        return never;
    }
    
}


class Ansoegning {
    ansoegerId: number;
    udbud: number;
    createdDate: Date;

    constructor(ans: Partial<Ansoegning>) {
        
    }
}

new Ansoegning({ ansoegerId: 2 });