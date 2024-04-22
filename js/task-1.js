const categoriesList = document.getElementById("categories");
      const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);
      
      categoryItems.forEach((category) => {
        const categoryName = category.querySelector("h2").textContent;
        const itemsCount = category.querySelectorAll("li").length;
        console.log(`${categoryName} - ${itemsCount}`);
      });


