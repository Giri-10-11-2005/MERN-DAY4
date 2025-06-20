//inner outer function
function outer() {
    let name = "GIRIDHARAN";
    function inner(){
        console.log("Hello " + name);
    }
    return inner;
}
let abc=outer();
abc(); // Output: Hello GIRIDHARAN