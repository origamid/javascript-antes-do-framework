// const menu = {
//   class: ".principal",
//   ativar() {
//     const menuElement = document.querySelector(this.class);
//     menuElement.classList.add("ativo");
//   }
// };

// const body = document.querySelector("body");
// body.classList.add("js");

const menu = {
  class: ".principal",
  ativar() {
    const menuElement = document.querySelector(this.class);
    console.log(menuElement);
  }
};

menu.ativar();
