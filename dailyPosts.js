// const btnel = document.getElementById("btn");
// const dailypost = document.getElementById("quote");
// const apiKey = "LTn5vNHSA0riVDyddRz5uA==jIbmWG57OnnvDyk4";
// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// };
// var category = "fitness";
// const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
// async function getCalorie() {
//   const response = await fetch(apiUrl, options);
//   const data = await response.json();
//   dailypost.innerText = data[0].quote;
//   console.log(data[0].quote);
// }
// btnel.addEventListener("click", getCalorie);

//const btnel = document.getElementById("btn");
const dailypost = document.getElementById("quote");

const apiKey = "LTn5vNHSA0riVDyddRz5uA==jIbmWG57OnnvDyk4";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
var category = "fitness";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=" + category;
async function getPost() {
  const response = await fetch(apiUrl, options);
  var data = await response.json();
  dailypost.innerText = data[0].quote;

  // console.log(data[0].quote);
}
dailypost.innerText = getPost();
