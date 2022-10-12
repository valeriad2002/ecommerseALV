const items = [
  {
    id: 1,
    name: "Hoodies",
    price: 14.0,
    image: "assets/images/featured1.png",
    category: "hoodies",
    quantity: 10,
  },
  {
    id: 2,
    name: "Shirts",
    price: 24.0,
    image: "assets/images/featured2.png",
    category: "shirts",
    quantity: 15,
  },
  {
    id: 3,
    name: "Sweatshirts",
    price: 24.0,
    image: "assets/images/featured3.png",
    category: "shirts",
    quantity: 20,
  },
];

/*LODER */
const loadComponent = () => {
  const loader = document.getElementById("loader");
setTimeout(() => {
  loader.classList.add("hide");
}, 3000);
};

document.addEventListener("DOMContentLoaded", () => {
  loadComponent();
});

/*CABEZA */
const themeDark = document.getElementById("id--theme__dark");
console.log(themeDark);

themeDark.addEventListener("click", () => {
  document.body.classList.toggle("theme__dark");
  if (themeDark.classList.contains("bx-moon")) {
    //evaluar si existe la clase bx-moon
    themeDark.classList.replace("bx-moon", "bx-sun");
  } else {
    themeDark.classList.replace("bx-sun", "bx-moon");
  }
});

const closeMain = document.getElementById("navOpen");

console.log(closeMain);

closeMain.addEventListener("click", () => {
  const cerrar = document.getElementById("navClose");
  console.log(cerrar);
  cerrar.classList.add("navCloseActive");
});

/** section products */
const showProducts = () => {
  const productContainer = document.getElementById("products--container");

  let fragment = ``;

  items.forEach((producto) => {
    fragment += `
        <div class="card--product" id="${producto.id}">
        <div class="card--product__img">
        <img src="${producto.image}" alt="">
        </div>
        <button class="btn-add">+</button>
        <div class="details">
        <h2 class="price-card">${new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "USD",
        }).format(producto.price)} </h2>
            <p class="text--stock">stock${producto.quantity}</p>

            <p>${producto.name}</p>
            </div>
        </div>
         `;
  });

  productContainer.innerHTML = fragment;

  // cartfuntion();
};

// const counterProduts = () => {
//   const linkShop = document.querySelectorAll(".container--link--shop");
//   let conterItems = ``;
//   items.forEach((producto) => {
//     conterItems += `
//  <div class="all--shop">
//  <h2>${producto.name}</h2>
//  <p> ${producto.quantity} products</p>
// </div>
//   `;
//   });

//   linkShop.innerHTML = conterItems;
//   console.log(linkShop);
// };

document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});
