console.log(`
/****************************************/
/*           SINGLETON TEST             */
/****************************************/
`)

let app1 = new App 
console.log(app1)

// LOS PRÓXIMOS SERÁN IGUALES AL PRIMERO
let app2 = new App 
console.log(app2)

let app3 = new App 
console.log(app3)