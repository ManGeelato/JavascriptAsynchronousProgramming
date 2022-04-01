// Asynchronous Programming
let IceCreamStocks = {
    Fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    Liquids: ['water', 'ice'],
    Holders: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
};


let isShopOpen = false; //change this varibale between true and false if you wanna see how the catch block works

// let item = IceCreamStocks.Fruits.indexOf('grapes')


// ASYNCHRONOUS PROGRAMMING USING CALLBACKS***** 
// let orderIceCream = (fruitName, callProduction) => {
//     setTimeout(() =>{
//         console.log(`${IceCreamStocks.Fruits[fruitName]} fruit selected!`);

//         callProduction();

//     },2000)
// };

// let produceIceCream = () => {
//     //we start by initializing production
//     setTimeout(() => {
//         console.log('production started!')
//         //we chop the ingredients
//         setTimeout(() => {
//             console.log('fruit chopped!')
//             //we add other ingredients
//             setTimeout(() => {
//                 console.log(`${IceCreamStocks.Liquids[0]} and ${IceCreamStocks.Liquids[1]} was added!`)
//                 //we start the machine
//                 setTimeout(() => {
//                     console.log('Ice-cream machine started!');
//                     //we pick the cup
//                     setTimeout(() => {
//                         console.log(`Ice-cream placed on ${IceCreamStocks.Holders[0]}!`)
//                         //we select the toppings
//                         setTimeout(() => {
//                             console.log(`${IceCreamStocks.Toppings[0]} topping was added!`)
//                             //serve ice-cream
//                             setTimeout(() => {
//                                 console.log('Ice-cream served!')
//                             },2000)
//                         },3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// };

// orderIceCream(0, produceIceCream);

// ASYNCHRONOUS PROGRAMMING USING PROMISES*****

// let orderIceCream = (time, work) => {
//     return new Promise((resolve, reject) =>{
//         if(isShopOpen){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         }else{
//             reject(console.log('Shop is closed!'));
//         }
//     });
// };

// orderIceCream(2000, ()=>console.log(`${IceCreamStocks.Fruits[0]} ice-cream selected!`))
// .then(() => {
//     return orderIceCream(0000, ()=> console.log('Production has started!'));
// })
// .then(() => {
//     return orderIceCream(2000, ()=> console.log('Strawberry fruit chopped!'));
// })
// .then(() => {
//     return orderIceCream(1000, ()=> console.log(`${IceCreamStocks.Liquids[0]} and ${IceCreamStocks.Liquids[1]} added`));
// })
// .then(() => {
//     return orderIceCream(1000, ()=> console.log('Ice-cream machine has been started!'));
// })
// .then(() => {
//     return orderIceCream(2000, ()=> console.log(`Ice-cream ${IceCreamStocks.Holders[0]} has been selected!`));
// })
// .then(() => {
//     return orderIceCream(3000, ()=> console.log(`${IceCreamStocks.Toppings[0]} topping has been added`));
// })
// .then(() => {
//     return orderIceCream(2000, ()=> console.log('Ice-cream served!'));
// })
// .catch(() => {
//     if(!isShopOpen){
//         console.log('customer left');
//     }
// })
// .finally(() => {
//     console.log('Operations done, shop closed!');
// })

// ASYNCHRONOUS PROGRAMMING USING PROMISES*****
function kitchenTime(milliseconds){
    return new Promise((resolve, reject) => {
        if(isShopOpen){
            setTimeout(resolve, milliseconds);
        }else{
            reject(console.log('shop is closed!'))
        }
    });
}

async function iceCreamKitchen(){
    try{
        await kitchenTime(2000)
        console.log(`${IceCreamStocks.Fruits[0]} ice-cream was selected!`);

        await kitchenTime(0000)
        console.log('starting production!');

        await kitchenTime(2000)
        console.log('chopping strawberry fruit!');

        await kitchenTime(1000)
        console.log(`adding ${IceCreamStocks.Liquids[0]} and ${IceCreamStocks.Liquids[1]}!`);

        await kitchenTime(1000)
        console.log('Ice-cream machine started!');

        await kitchenTime(2000)
        console.log(`ice-cream placed on ${IceCreamStocks.Holders[0]}!`);

        await kitchenTime(3000)
        console.log(`added ${IceCreamStocks.Toppings[0]} on ice-cream!`);

        await kitchenTime(2000)
        console.log('serving ice-cream!');

    }catch(error){
        console.log('Error on one of the operations!')
        if(!isShopOpen){
            console.log('customer left!')
        }
    }finally{
        console.log('operations done, shop closed!');
    }
}

iceCreamKitchen();
