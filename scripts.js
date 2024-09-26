// for loop
// let fruits = ["mango", "banana", "orange", "apple"];
// console.log(fruits[0]);

// for (let fruit = 0; fruit < fruits.length; fruit++) {
//   console.log(fruits[fruit]);
// }

//map

// let acts = ["read", "walk", "move", "intreract"];

// let newAct = acts.map(function (act) {
//   console.log(act.toUpperCase());
// });

// for in

// let foods = ["banku", "rice", "beans", "fufu"];

// for (let food in foods) {
//   console.log(food);
// }

// for each

// let names = ["Joel", "Benedict", "Benedicta", "Adwoa"];

// names.forEach((name) => console.log(name));

//for of
// let items = ["books", "pencils", "pens", "eraser"];

// for (let item of items) {
//   console.log(item);
// }

// let n = 0;
// while (n > 0) {
//   console.log("Benedict");
// }

let search = document.querySelector("#search")
//button

search.addEventListener('click', (e) => {
    e.preventDefault();
    const serchNews = search.value;

})

fetch(
  "https://newsapi.org/v2/everything?q=food&apiKey=8b7d356714c7490e86541c70ec97e6f9&pageSize=15"
)
  .then(function (response) {
    // console.log(response.body)
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
      // console.log(article)
      const articleDiv = document.createElement("div");
      const articleH1 = document.createElement("h1");

      articleH1.textContent = article.title;
      articleDiv.appendChild(articleH1);

      const articleP = document.createElement("p");
      articleP.textContent = article.content;
      articleDiv.appendChild(articleP);

      const articleImg = document.createElement("img");
      articleImg.setAttribute("src", article.urlToImage);
      articleImg.setAttribute("alt", article.title);
      articleImg.classList.add("articles-img");
      articleDiv.appendChild(articleImg);

      document.querySelector("#articles").appendChild(articleDiv);
    }
  });
