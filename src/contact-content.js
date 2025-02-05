const contactPage = ()=> {
    const contentContainer = document.getElementById("content");

    const titleContent = document.createElement("div");
    titleContent.classList.add("title", "bubble");
    titleContent.textContent = "Contact Us";
    contentContainer.appendChild(titleContent);

    const contactOne = document.createElement("div");
    contactOne.classList.add("bubble");
        const contactOneName = document.createElement("div");
        contactOneName.classList.add("underline");
        contactOneName.textContent = "Head Chef";
        contactOne.appendChild(contactOneName);

        const contactOneInfo = document.createElement("div");
        contactOneInfo.innerText = "Bob Smith\ntotallyreal@notfake.com\n867-5309";
        contactOne.appendChild(contactOneInfo);
    contentContainer.appendChild(contactOne);
}

export {contactPage};
