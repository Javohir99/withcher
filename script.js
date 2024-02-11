const a = [4,4,5,7,2,3];

let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i+1] = "hello";
a[a[i]] = a[0];
a[49] = 0;
console.log(a);

const fruits = [
    "манго",
    "банан",
    "вишня",
    "персик",
];
for(let i=0;i<fruits.length;i++){
    alert(fruits[i]);
}


