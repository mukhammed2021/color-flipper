const colors = ["red", "purple", "green", "blue", "#ffc300"];
const colorText = document.querySelector(".color-flip__main span");

document.addEventListener("click", function (e) {
   if (e.target.closest(".color-flip__button")) {
      const colorRandom = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = `${colorRandom}`;
      colorText.textContent = `${colorRandom}`;
   }

   if (e.target.closest(".header__button")) {
      document.body.style.backgroundColor = "#fff";
      colorText.textContent = `#fff`;
   }
});
