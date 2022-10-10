console.log("starting up");  // call stack

setTimeout(()=> {
    console.log("2 second log");  
}, 2000) // node apis -> callback queue -> call stack

setTimeout(()=> {
    console.log("0 second log");  
}, 0) // node apis -> callback queue -> call stack

console.log("finishing up");  // call stack

