import './styles.css';

function Lesson07() {
    //generic
    type CustomArrayType<T = string> = T[];
    const numberArray: CustomArrayType<number> = [2, 3];
    const stringArray: CustomArrayType<string> = ["2", "3"];

    type CustomArrayTupelType<T = string> = [string, T];
    const arrayMix: CustomArrayTupelType = ["apple", "2"]
    const arrayMix2: CustomArrayTupelType<number> = ["apple", 2]

    interface Fruits {
        name: string,
        weight: number
    }

    const fruits1: Fruits = {
        name: "Apple",
        weight: 4
    }

    interface FruitsGeneric<Type> {
        name: string,
        weight: Type
    }
    const fruits2: FruitsGeneric<string> = {
        name: "Apple",
        weight: "4"
    }

    //enum
    enum Colors{Red=3,Black, Green};
    console.log(Colors);
    let color: Colors.Red
    


    return <div>Lesson07</div>
}

export default Lesson07;