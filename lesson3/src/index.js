//phân biệt dependencidepevà dev-dependencies

const express = require("express");
const dbUtils = require("./utils/db.js");
const app = express();

// localhost:8080/
const hamxuli = (request, response) => {
  dbUtils.query("select * from `user`;", (err, data) => {
    if (err) response.send("error");
    console.log(data);
    response.send(data);
  });
};
app.get("/", hamxuli);

const callback = () => {
  console.log("Running callback");
};
app.listen(8080, callback);

// const object1 = {
//     thuoctinh1: 'thuoc tinh so 1',
//     thuoctinh2:'thuoc tinh so 2',
//     thuoctinh3:'thuoc tinh so 3',
// }
// const tt1 = object.thuoctinh1;
// const { thuoctinh1, thuoctinh2 } = object1;// chỉ sử dụng thuoctinh1 và thuoctinh2 của object
// // // console.log(thuoctinh1);

// // // file db.js
// // // module.exports = pool
// // // module.exports = {
// // //   create,
// // //   read,
// // //   update,
// // //   delete
// // // }

// // // const a = require('./utils/db')
// // // const  a = pool

// // // const b = require('./utils/db')
// // // const b = {
// // //   create, update ....
// // // }

//async await function: k chạy dồng bộ như function mà đợi nhau, dùng để kết nối mạng
// const fun1 = async () => {
//     const congviec1 =await getData();
// }
//or
// const getData2 = (callback) => {
//     //sau khi lấy dữ liệu xog
//     callback()
// }

// // const excutor = (resolve, reject) => {
// //   reject(12)
// // }
// // const prom = new Promise(excutor)

// // prom.then(
// //   data => {
// //     console.log(data);
// //   }
// // ).catch(
// //   err => {
// //     console.log(err);
// //   }
// // )

// const getData = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 0) reject('Khong chia duoc')
//     else
//       resolve(100 / number)
//   })
// }

const array = [1, 2, 3, 4, 5, 6, 1, 23, 1, 1, 3, 2, 2];

console.log("Hello world");

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}

console.log(array[3]);

const object = {
  a: 100000,
  b: "123",
  c: false,
};
console.log(object["a"]);
console.log(object.a);

const ketquamap = array.map((value, index) => {
  console.log(value, " indexing ", index);
  return value * 100;
});
console.log(ketquamap);
// [1, 2, 3] ===== [100, 200, 300]
// [1 2 1 1 1 1 1]
const ketquafilter = array.filter((value) => {
  // return true/false
  if (value < 3) return true;
  else return false;
});
// [1, 2, 3 ,5 ,6 ,9] == []

console.log(ketquafilter);

const user = {
  username: "thien",
  tt1: "asdad",
  tt2: 12,
  // ..... //
  active: true,
  // .... //
};

const user1 = {
  ...user,
  active: "dang hoat dong",
  tt2: 45,
};

console.log(user1);

const fun5 = (a, b, c = 3, d, e = 12) => {};

fun5(1, 2, 3, 4);

const user = {
  tt1: 1,
  tt2: 2,
  tt3: 4,
};

const user2 = { ...user };
const user3 = user;
