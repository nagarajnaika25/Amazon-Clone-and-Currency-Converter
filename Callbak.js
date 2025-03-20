// //Syncrones Function call (Practice)
function sender(a,b)
{
let result;

    result=a*b;
    console.log(result);
   // console.log(p+q);
}

function  receiver(a,b)
{
   sender(a,b)
  // sender(p,q)
}

setTimeout(() =>
{

receiver (2,2,sender);//Sum function as a argument(a,b,sumCallback) like this
//receiver(99,88,sender);
},4000);