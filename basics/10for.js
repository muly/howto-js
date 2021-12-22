// # for loop

// ## for loop syntax
for (let i=0; i<10; i++){
    console.log(i)
}

// ## all the expressions in for loop are optional
let p=0
for (; p<10; p++){
    console.log(p)
}

let q=0
for (; q<10; ){
    console.log(q)
    q++
}

let r=0
for (;;){
    console.log(r)
    r++
    if (r>=10){
        break
    }
}
