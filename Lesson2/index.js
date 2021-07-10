console.log("hello word"); //in ra
var number1 = 1;
let number2 = 2;
const number3 = 3;
console.log(number1); //sẽ hiện undefined, null nếu chưa gán gtri
console.log(number2);
console.log(number3);
//in ra chuỗi
let chuoi = "so thu nhat la" + number1;
let chuoi = `so thu nhat la` + number1;
let chuoi = "so thu nhat la" + number1;

if (number3 % 2 === 1) {
  console.log("la so le");
} else {
  console.log(" la so chan");
}
// hoặc
const chuoi3 = `so thu 3 la ${number3 % 2 === 1 ? "sole" : "sochan"}`;
console.log(chuoi3);
const a = `la so ${number3}`;
console.log(a);

//phân biệt let và var
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
// function
// function tong(a, b) {
//   return a + b
// }

// console.log(tong(2, 3));

// const tong2 = function (a, b) {
//   return a + b
// }

// console.log(tong2(2, 3));

// let sothunhat = {
//   id: 10,
//   name: 'thien'
// }
// let sothuhai = sothunhat
// let sothuba = { ...sothunhat }// copy lại toàn bộ thuộc tính của sothunhat

// console.log(sothuhai);
// console.log(sothuba);

// sothunhat.id = 100
// sothunhat.name = 'thang'

// console.log(sothuhai);
// console.log(sothuba);

// const tong4 = (a, b) => {
//   return a + b
// }

// const tong4 = (a, b) => a + b

const taorahamtinhtong = (coso) => {
  return;
};

let taorahamtinhtong2 = (coso) => (coso2) => coso + coso2;

const hamtrave = taorahamtinhtong2(3);

const hamxx = (thamso1, thamso2) => {
  // callback
  console.log(thamso2(thamso1));
};

hamxx(10, hamtrave);
