// ///1. Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. Əgər number cütdürsə,
// / həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)


// function myFunction(number) {
//     let bosluq = [];

//     for (let i = number; i !== 1;) {
//         bosluq.push(i); 
//         if (i % 2 === 0) {  
//             i /= 2;
//         } else {
//             i = 3 * i + 1;
//         }
//     }
//     bosluq.push(1);
//     return bosluq;
// }
// const bosluq = myFunction(9);
// console.log(bosluq); 




// ///2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.
// function myFunction(array) {
//     if (array.length === 0) {
//         console.log("error");
//         return;
//     }
//     let min = array[0];
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     const new1array = max - min;
//     console.log(`en kicik eded: ${min}`);
//     console.log(`en boyuk eded: ${max}`);
//     console.log(`en boyuk ve en kicik ededin ferqi: ${new1array}`);
// }
// const newarray = [5,10,3,5,6,7,8,,9,,3,3,5,6,89];
// myFunction(newarray);




//////3. Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.
// function Myfunction(array, number) {
//     let yoxlama = false;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             yoxlama = true;
//             break;
//         }
//     }

//     if (yoxlama) {
//         console.log(`${number} arraydadir`);
//     } else {
//         console.log(`${number} arrayda deyil`);
//     }
// }
// const arrayim = [0,0,0,0,0,0,0,1];
// console.log(arrayim);
// const numberim = 0;
// Myfunction(arrayim, numberim);





//////////findle

    function Myfunction(array, number) {
        return array.find(element => element === number);
    }
    const array2 = [0,0,0,0,0,0,0,1];
    const number2 = 6;

    const yoxlama = Myfunction(array2, number2);

    if (yoxlama) {
        console.log(array2);
        console.log(`${number2} arraydadir`);
    } else {
        console.log(array2);
        console.log(`${number2} arrayda deyil`);
    }
