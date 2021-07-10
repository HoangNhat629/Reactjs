// require('dotenv').config()
// const security = require('./utils/security')
// console.log(process.env.SALT_ROUND);

// const token = security.generateToken({
//   username: 'blablablab',
//   role: -1
// })
// console.log(token);

// const data = security.verifyToken(token)
// console.log(data);

// const testFun = async () => {
//   await security.generatePassword('123456')
//   await security.verifyPassword('x','123456')
// }

// (() => {
//   testFun()
// })()

// // Buoi 9

const ham_nay_phai_co_await = async () => {
  // get data from database
};

try {
  await ham_nay_phai_co_await();
} catch (e) {
  console.log("mat ket noi");
}

ham_nay_phai_co_await()
  .then((data) => {})
  .catch((err) => {
    console.log("mat ket noi");
  });
