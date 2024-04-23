import { log } from "console";

function Lesson06() {
    let userName: string = "Tom";
    userName = "2";

    const message: string = `Hello ${userName}`

    const luckyNumber: number = 23;

    let isAdmin: boolean = true;

    let emptyVar: undefined = undefined;

    let colors: string[] = ["red", "green", "black"];
    colors.push("blue");
    colors[0] = "yelow";
    console.log(colors);

    const numbersArray = [3, 5, 4];
    console.log(numbersArray);

    const fruits: [string, number, boolean] = ["apple", 3, false];
    fruits[0] = "banana";

    const showMessage = (): void => {
        console.log("Hi");
    }
    showMessage();

    const showMessageWithName = (firstName: string = "Tom", age: number): void => {
        console.log(`Hello ${firstName} ${age}`);
    }
    showMessageWithName("Kate", 24);


    const showMessageWithReturnName = (firstName: string = "Tom", age: number): string => {
        return `Hello ${firstName} ${age}`;
    }
    console.log(showMessageWithReturnName("Bob", 23));

let city:any=23;
city="red";
console.log(city);


    return (
        <div>{emptyVar}</div>
    )
}

export default Lesson06;