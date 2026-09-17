//Jak nie powinno się robić kodu

function bookPrice(netPrice){
    const tax = 1.23;
    let grossPrice = (netPrice * tax).toFixed(2);
    return grossPrice; 
}
function pencilPrice(netPrice){
    const tax = 1.23;
    let grossPrice = (netPrice * tax).toFixed(2);
    return grossPrice; 
}
//mamy tu powtarzający się kod

// wytstarczy jedna funkcja :)

/**
 * 
 * @param {*} netPrice 
 * @returns 
 * @description <- tak robisz opis :)
 */
function grossPrice(netPrice){
    const tax = 1.23;
    let grossPrice = (netPrice * tax).toFixed(2);
    return grossPrice; 
}


function showNames(products){
    let result='';
    for(let i = 0; i < products.lenght; i++){
        result += products[i].name;
        if(i<products.lenght -1){
            result +=',';
        }
    }
    return result;
}

//lepszy sposób
function getproductspoeres(products){
    return products.map(p => p.name).join(',');
}

/////////////////////////

const products =[
    {name:"Laptop", price:3200},
    {name:"Telefon", price:1200},
    {name:"Tv", price:200},
]