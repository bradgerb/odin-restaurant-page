 import lightJar from "../img/lightJar.jpg";
 import lemonCleaner from "../img/lemonCleaner.jpg";
 
 const menuPage = ()=> {
    const contentContainer = document.getElementById("content");

    const titleContent = document.createElement("div");
    titleContent.classList.add("bubble", "title");
    titleContent.textContent = "Menu";
    contentContainer.appendChild(titleContent);

    const beverageContent = document.createElement("div");
    beverageContent.classList.add("bubble");
        const beverageTitle = document.createElement("div");
        beverageTitle.classList.add("larger");
        beverageTitle.textContent = "Beverages";
        beverageContent.appendChild(beverageTitle);

        const beverageOne = document.createElement("div");
        beverageOne.classList.add("bubble");
            const beverageOneName = document.createElement("div");
            beverageOneName.classList.add("underline");
            beverageOneName.textContent = "Sunlight in a jar";
            beverageOne.appendChild(beverageOneName);

            const beverageOneDescription = document.createElement("div");
            beverageOneDescription.textContent = "Capture the full unrestrained power of the sun! You'll have the energy for any task you set yourself!";
            beverageOne.appendChild(beverageOneDescription);

            const beverageOnePrice = document.createElement("div");
            beverageOnePrice.classList.add("price");
            beverageOnePrice.textContent = "$5";
                const beverageOneImg = document.createElement("img");
                beverageOneImg.src = lightJar;
                beverageOneImg.style.height = "200px";
                beverageOnePrice.appendChild(beverageOneImg);
            beverageOne.appendChild(beverageOnePrice);
        beverageContent.appendChild(beverageOne);

        const beverageTwo = document.createElement("div");
        beverageTwo.classList.add("bubble");
            const beverageTwoName = document.createElement("div");
            beverageTwoName.classList.add("underline");
            beverageTwoName.textContent = "Lemon Cleaner";
            beverageTwo.appendChild(beverageTwoName);

            const beverageTwoDescription = document.createElement("div");
            beverageTwoDescription.textContent = "Made with real lemon!";
            beverageTwo.appendChild(beverageTwoDescription);

            const beverageTwoPrice = document.createElement("div");
            beverageTwoPrice.classList.add("price");
            beverageTwoPrice.textContent = "$2";
                const beverageTwoImg = document.createElement("img");
                beverageTwoImg.src = lemonCleaner;
                beverageTwoImg.style.height = "200px";
                beverageTwoPrice.appendChild(beverageTwoImg);
            beverageTwo.appendChild(beverageTwoPrice);
        beverageContent.appendChild(beverageTwo);
    contentContainer.appendChild(beverageContent);

    const foodContent = document.createElement("div");
    foodContent.classList.add("bubble");
        const foodTitle = document.createElement("div");
        foodTitle.classList.add("larger");
        foodTitle.textContent = "Food";
        foodContent.appendChild(foodTitle);

        const foodOne = document.createElement("div");
        foodOne.classList.add("bubble");
            const foodOneName = document.createElement("div");
            foodOneName.classList.add("underline");
            foodOneName.textContent = "Chef's Special"
            foodOne.appendChild(foodOneName);

            const foodOnePrice = document.createElement("div");
            foodOnePrice.classList.add("price");
            foodOnePrice.textContent = "$10";
            foodOne.appendChild(foodOnePrice);

            const foodOnePriceText = document.createElement("div");
            foodOnePriceText.textContent = "or a really cool* rock";
            foodOne.appendChild(foodOnePriceText);

            const foodOnePriceSmallText = document.createElement("div");
            foodOnePriceSmallText.classList.add("smaller");
            foodOnePriceSmallText.textContent = "*really cool as determined by our chef";
            foodOne.appendChild(foodOnePriceSmallText);
        foodContent.appendChild(foodOne);
    contentContainer.appendChild(foodContent);
};

export {menuPage};
