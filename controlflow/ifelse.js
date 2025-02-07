const bal = 30

if(bal > 50) console.log("true") // implicit
else console.log("not so true")

const month = 5

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;

    default:
        break;
}
// if break aint used by default if key matchs everything thing below it is excuted except default, so we use the break to stop
// we can also use it for string too , but just it should be case same

// truthy falsy

const usermail = "g@mail.com"
if(usermail) console.log(" got the mail");  // here no camparsion done it is truthy , i.e if the string is not empty its ture
else console.log('no mail'); // and if the its empty than its false i.e if wont be running

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// anything else than these is truthy values => "0", 'false' as both are string, " "( even signal blank space),[](empty array)
// {}( empty obj), funtion(){} empty func

// nullish coalescing operator (??)
 let val1;
 val1 = 5 ?? 10 // here 5 wil be assinged
 val2 = null ?? 10 // 10 will be assigned
 val3 = undefined ?? 20 // 20 will be assigned
 val4 = undefined ?? null ??  20 ?? 10 // 20 will be assigned
    console.log(val4)


 // terniary operator

//  condtion ? true : false
let price = 100
price <= 80 ? console.log("less than eighty") : console.log("more than 80");
