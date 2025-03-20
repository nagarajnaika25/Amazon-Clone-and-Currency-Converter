//Currency converter //Doller//USD Indian Reupee//INR


//const updateExchangeRate =async() => //Function 2 work
//const updateFlag=(element)=>   //Fuction 1 work // Element accept the currency code




//To get this we can USE API Link  [ 1 ]
const API_KEY = "635eb32a52cdc70fe86179e8";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;


//First Drop Down [2]
const dropdownselect=document.querySelectorAll(".dropdown select");
//[7 ] button
const btn= document.querySelector(".form-button")
//[9] from and Toz
const fromCurrency =document.querySelector(".from select");
const toCurrency=document.querySelector(".to select");

//Message [10]
const msg=document.querySelector(".msg");


//Access Country list using for loop
// for(code in countryList) //Using for Get a object  properties
// {
//     console.log(code +':' +countryList[code]);
// }

//[3]//Access Country list using for  in and of loop
for(let select of dropdownselect) //contains elements (like HTML select elements).  iterable objects, such as arrays, strings, etc.valuse
{
for(let currencyCode in countryList) //Currency code //INR ,USD an object with properties where each property  Key
{
//Create a new option for adding a all the country code and correcncy code
let newOption=document.createElement("option");

//Setting the Text and Value of the Option:

//Text

newOption.innerText=currencyCode; //Entire correcny code adding converting into indivisual option(newoption)

//Value
newOption.value=currencyCode; //New option value and InnerText value will be equal to Currency code
if(select.name ==="from" && currencyCode==="USD")
{
newOption.selected="selected";
}
else if(select.name ==="to" && currencyCode==="INR")
{
    newOption.selected="selected";
}
select.append(newOption); //That NEWoption added into the Select
}


select.addEventListener("change", (evt) =>
{

updateFlag(evt.target);//Get Currency code( Call the below Function 1)
   
//  will be the select element that the user interacted with. (Target)
 
});

}



 //[ 4 ]//Element target to above button
const updateFlag=(element)=> //Fuction 1 work // Element accept the currency code
{
let currencyCode=element.value; //Value assume to be currecny code
console.log(currencyCode); //Get Currency code

//Countrycode [ 5 ] 
let countryCode =countryList[currencyCode]; //AF
//currCode to look up the corresponding country code in the countryList object
//Access Img to CountryCode [6]
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newSrc ;
};


//Access Input  [8]

const updateExchangeRate =async() => //Function 2 work
{
console.log('updateExchangeRate called');
let amount=document.querySelector(".amount input");
let amtVal=amount.value;

if(amtVal===""  || amtVal <1) // -2,-0 etc
{
  amtVal=1;
  amount.value="1"; //Empty also 1

}


//9 From curr, To curr
// console.log(fromCur.value, toCurr.value);

 //Fetch URL  (We are requesting this URL) [9]
try
{
const URL = `${BASE_URL}/${fromCurrency.value}`;

console.log ("Fetching  URL :", URL);

let response =await fetch(URL); //Retuen the promise :  (Fetch URL)

if (!response.ok)   //Try block diduction the Error 
{
   throw new Error(`Error: ${response.status} ${response.statusText}`);
}

// console.log(response.json()); //Converting JSON TO USEABLE DATA

let data=await response.json();  //Response.json returns the promiss (thats why used await)
let rate = data.conversion_rates[toCurrency.value]; //
//This retrieves the conversion rate for the target currency (toCurr.value) from the JSON data.

console.log('Exchange rate', rate);


//Final amount saved in the messager
let finalAmount =  amtVal*rate ;
msg.innerText=`${amtVal} ${fromCurrency.value}= ${ finalAmount.toFixed(2)}${ toCurrency.value}`;
}  
catch(error)  //Try block Handle the Error (If an Error occures this catch block will execute)
{
console.error("  fetch error ",error)
msg.innerText = "Failed to fetch currency data. Please try again.";

}
finally
{ 
console.log("Project success");
}
};
// Try Block: Attempts to fetch and process data, handling normal operations.
// Catch Block: Handles any errors that occur during the try block, ensuring the user is informed and the error is logged.
// Finally Block: Executes code that should run regardless of success or failure, useful for cleanup tasks or final messages.






// Button[7]

btn.addEventListener("click", (evt) =>  //Function 2 ( evt  parameter is event Object 
                                        //Representing  the( "click" event.)
   {
   evt.preventDefault(); //Not change any thing when click
   updateExchangeRate(); 
   });

   window.addEventListener("load", () => {
      console.log('Initial fromCurr value:', fromCurrency.value);
      console.log('Initial toCurr value:', toCurrency.value);
      if (!fromCurrency.value)  // User value <option value="">--Select a currency--</option>
        {
          fromCurrency.value = 'USD';
        }
       if (!toCurrency.value) 
        {
          toCurrency.value = 'INR'; //line sets the value property of toCurr to 'INR'.
        }
      updateExchangeRate();
  });
  


//   This piece of code ensures that if no currency is selected or inputted by the user in the toCurr element, a default value of 'INR' (Indian Rupee) is assigned. 




// The evt (event) parameter object provides detailed information and control over the event that triggered the execution of the event handler function



// const API_KEY = "635eb32a52cdc70fe86179e8";
// const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

// const dropdownselect = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector(".form-button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Add console logs to check if elements are being selected properly
// // console.log('fromCurr:', fromCurr);
// // console.log('toCurr:', toCurr);
// // console.log('btn:', btn);
// // console.log('msg:', msg);

// // Populate select elements with currency codes
// for (let select of dropdownselect) {
//     for (let currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         if (select.name === "from" && currCode === "USD") {
//             newOption.selected = "selected";
//         } else if (select.name === "to" && currCode === "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }

//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     console.log(currCode); // Get currency code
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// const updateExchangeRate = async () => {
//     console.log('updateExchangeRate called');
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;

//     if (amtVal === "" || amtVal < 1) {
//         amtVal = 1;
//         amount.value = "1";
//     }

//     try {
//         const URL = `${BASE_URL}/${fromCurr.value}`;
//         console.log('Fetching URL:', URL);
//         let response = await fetch(URL);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         let data = await response.json();
//         let rate = data.conversion_rates[toCurr.value];
//         console.log('Exchange rate:', rate);

//         let finalAmount = amtVal * rate;
//         msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//     } catch (error) {
//         console.error("Fetch error: ", error);
//         msg.innerText = "Failed to fetch currency data. Please try again.";
//     }
// };

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });

// window.addEventListener("load", () => {
//     console.log('Initial fromCurr value:', fromCurr.value);
//     console.log('Initial toCurr value:', toCurr.value);
//     if (!fromCurr.value) {
//         fromCurr.value = 'USD';
//     }
//     if (!toCurr.value) {
//         toCurr.value = 'INR';
//     }
//     updateExchangeRate();
// });


const obj = { a: 1, b: 2, c: 3 }; 
for (let [key, value] of Object.entries(obj))
     { 
        
        console.log(`Key: ${key}, Value: ${value}`); 
    
     }


    //We cant use forEach loop for  Object


//Array
  const arr=[1,2,3,4,5]
    //  arr.forEach(function(number,index)
    //  {
      
    //     console.log (`Array number : ${index } is : ${number}`);
      

    //  });
  arr.forEach((value) =>
    {

 console.log(value);

    });

  

    //For in loop  (Iterates the Object key )

    const objj= {a:1 ,b:2,c:3};
    for(let key in objj )
    if (objj.hasOwnProperty(key))//This means  Defince objj of an key -Values is 1;2;3)

    {

     console.log(objj[key]);//value  will print//Key means only key
     console.log(`key :${key}, value: ${objj[key]}`);


    } //Get key and valuse




    // For of returns (Iterates object Valuese) Using for (Arrays , strings ,maps )

     const n= {a:1 ,b:2,c:3};
     for(const [key,value] of Object.entries(n)) //n of key -valuess
     {
      console.log(`value ${value},key  ${key}`);
     };
    


  //  const ar= [1,2,3,8,656];

  //  for(const val of ar)
  //  {
  //   console.log(val.index);
  //  };//Only value in Arry

   
   const ar= [1,2,3,8,656];

   for(const [index, value] of ar.entries())
   {
    console.log(`Index : ${index}, value : ${value}`);
   };//Array value and Index


   
   //We can do this in For Each loop also

   
 ar.forEach((index , value)=>
 {
  console.log(`Index: ${index}, Value: ${value}`);

 });


//Returns
 function describePerson(name, age, job) 
 {
  return `${name} is ${age} years old and works as a ${job}.`;
}

const description = describePerson('Alice', 30, 'engineer');
console.log(description); // Output: Alice is 30 years old and works as an engineer.






//      Key Differences
// Iteration Target:

// for...in iterates over the keys of an object.
// for...of iterates over the values of an iterable object.
// Usage:

// for...in is typically used for objects.
// for...of is typically used for arrays, strings, maps, sets, and other iterable objects.
// Output:

// for...in outputs the keys.
// for...of outputs the values.
// Prototype Chain:

// for...in iterates over all enumerable properties, including those in the prototype chain.
// for...of does not iterate over the prototype chain; it only iterates over the values in the iterable object.