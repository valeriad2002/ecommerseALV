const items = [
  {
    id: 1,
    name: "Hoodies",
    price: 14.0,
    image: "assets/images/featured1.png",
    category: "hoodies",
    quantity: 1,
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
// console.log(themeDark);

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

// console.log(closeMain);

closeMain.addEventListener("click", () => {
  const cerrar = document.getElementById("navClose");
  // console.log(cerrar);
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

  cartFunctionality();
  // producShowAdd()
};

// funcion add to cartShow
function producShowAdd() {
  const showProductsContainer = document.getElementById(
    "show--products--container"
  );
  const showProductsItems = showProducts;
  let fragment = ``;

  if (showProductsItems.length === 0) {
    items.forEach((producto) => {
      fragment += ` <div class="product--select">
    <div class="img--show">
      <img src="${producto.image}" alt="" />
    </div>
    <div class="product--select__info">
      <h3>${producto.name}</h3>
      <p class="stock--show">Stock:${producto.quantity} | <span>${producto.price}</span></p>
      <p>${producto.price}</p>

      <div class="cart--cont--item">
        <div class="quatity--select">
          <button class="quatity--select__btn"><i class='bx bx-minus'></i></button>
          <p>${producto.id}</p>

          <button class="quatity--select__btn"><i class='bx bx-plus'></i></button>
        </div>

        <i class="bx bx-trash"></i>
      </div>
    </div>
  </div>`;
    });
  } else {
    fragment = ` <div class="empty--show">
    <img src="./assets/images/empty-cart.png" alt="" />
    <h2>your cart is empty</h2>
    <p>
      you can add item to your cart by clicking on the add to cart button
    </p>
  </div>`;
  }
  showProductsContainer.innerHTML = fragment;
}

// funcion de botones
const cart = [];

function cartFunctionality() {
  const btns = document.querySelectorAll(".btn-add ");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.parentElement.id);
      const selectedProduct = items.find((item) => item.id === id);

      let index = cart.indexOf(selectedProduct);
      if (index !== -1) {
        if (cart[index].quantity <= cart[index].cantidad) {
          window.alert("No hay stock");
        } else {
          cart[index].cantidad++;
        }
      } else {
        selectedProduct.cantidad = 1;

        cart.push(selectedProduct);
      }

      showProducts(cart);
      console.log(cart);
      producShowAdd();
    });
  });
}

// show cart open and closed
const showCart = document.getElementById("showCart");
const closedShowCart = document.getElementById("btn-closed-show");
const openShowCart = document.getElementById("btn-open-show");

openShowCart.addEventListener("click", () => {
  showCart.style.right = "0";
});

closedShowCart.addEventListener("click", () => {
  showCart.style.right = "-100%";
});
document.addEventListener("DOMContentLoaded", () => {
  showProducts();
});
