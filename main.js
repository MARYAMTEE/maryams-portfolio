const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

closeMenuBtn.addEventListener("click", () => 
    openMenuBtn.click()
);

const openOwnersInfo = document.querySelector("#open-btn");
const closeOwnersInfo = document.querySelector("#close-btn");

openOwnersInfo.addEventListener("click", () => {
    document.body.classList.toggle("show-menu");
});

closeOwnersInfo.addEventListener("click", () =>openOwnersInfo.click()
)

