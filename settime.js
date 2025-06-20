console.log("first");
setTimeout(() => {
    console.log("second");
}, 5000);
console.log("end");
setInterval(() => {
    console.log("third");
}, 2000);
console.log("end"); 
