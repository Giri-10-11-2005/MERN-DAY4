let a;
function greet() {
    console.log("Hello, World!");
}
function add(a,callback){
    console.log(a);
    callback();
}
add(5, greet);