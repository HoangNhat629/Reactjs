//find
let product = [
  { name: "áo", id: 55, size: "xxl", color: "black" },
  { name: "quần", id: 54, size: "l", color: "yellow" },
  { name: "váy", id: 10, size: "s", color: "blue" },
];
let ID = product.find((a) => a.id === 10);
console.log(ID);

//sort
let score = [40, 100, 1, 6, 35, 10].sort(function (a, b) {
  return a - b;
});
console.log(score);

//sum
let number = [22, 22, 56, 46, 10, 1000, 55].reduce((a, b) => a + b, 0);
console.log(sum);

//filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

//paging
$("#a").paging({
  dataSource: [1, 2, 3, 4, 5, 6, 7, ...100],
  callback: function (data, paging) {
    let html = template(data);
    dataContainer.html(html);
  },
});
