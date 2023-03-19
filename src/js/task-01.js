const categoryList = document.querySelector("#categories");
const categories = categoryList.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}\n`);
categories.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const numberOfElements = element.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}\nElements: ${numberOfElements}\n`);
});


