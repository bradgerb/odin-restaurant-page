const homepage = ()=> {
    const contentContainer = document.getElementById("content");

    const titleContent = document.createElement("div");
    titleContent.classList.add("title", "bubble");
    titleContent.textContent = "Forbidden Snacks";
    contentContainer.appendChild(titleContent);

    const greetingContent = document.createElement("div");
    greetingContent.classList.add("bubble");
    greetingContent.textContent = "Welcome to Forbidden Snacks! This is the one stop shop restaurant for all your non-food that looks like food needs. We stand behind every dish our chefs produce from only the finest ingredients. Your satisfaction is guaranteed!";
    contentContainer.appendChild(greetingContent);

    const hoursContent = document.createElement("div");
    hoursContent.classList.add("bubble");
        const hoursTitle = document.createElement("div");
        hoursTitle.classList.add("larger");
        hoursTitle.textContent = "Hours";
        hoursContent.appendChild(hoursTitle);

        const hoursTimes = document.createElement("div");
        hoursTimes.innerText = 
            `\nSunday: Noon - 8pm
            Monday: 10am - 9pm
            Tuesday: 10am - 9pm
            Wednesday: 10am - 9pm
            Thursday: 10am - 9pm
            Friday: 10am - 9pm
            Saturday: 10am - Midnight`
        hoursContent.appendChild(hoursTimes);
    contentContainer.appendChild(hoursContent);

    const locationContent = document.createElement("div");
    locationContent.classList.add("bubble");
        const locationTitle = document.createElement("div");
        locationTitle.classList.add("larger");
        locationTitle.textContent = "Location";
        locationContent.appendChild(locationTitle);

        const locationPlace = document.createElement("div");
        locationPlace.innerText = `\nYou can find us at 123 Imagination Street`;
        locationContent.appendChild(locationPlace);
    contentContainer.appendChild(locationContent);

    const testimonialContent = document.createElement("div");
    testimonialContent.classList.add("bubble");
        const testimonialTitle = document.createElement("div");
        testimonialTitle.classList.add("larger");
        testimonialTitle.textContent = "Testimonial";
        testimonialContent.appendChild(testimonialTitle);

        const testimonialWords = document.createElement("div");
        testimonialWords.innerText = `\nThe finest ale this side of the bifrost! I would visit here every time I came to Earth if I had the time.\n`;
        testimonialContent.appendChild(testimonialWords);

        const testimonialSig = document.createElement("div");
        testimonialSig.classList.add("sig");
        testimonialSig.textContent = "-Thor, Son of Odin";
        testimonialContent.appendChild(testimonialSig);
    contentContainer.appendChild(testimonialContent);
};

export {homepage};
