const url = `http://localhost:3000/api/teddies`;
const boxContainer = document.querySelector(".box-container");
let products;

//API request

const fetchProducts = async () => {
  products = await fetch(url).then((res) => res.json());
};

const showProducts = async () => {
  await fetchProducts();
  boxContainer.innerHTML += products
    .map(
      (product) =>
        `
        <a id="productLink" href="products.html?id=${
          product._id
        }" class="product">
            <img id="productImage" src="${
              product.imageUrl
            }" alt="" class="product_img" />
            <div class="product_sideBySide">
              <h2 id="productName" class="product_name">${product.name}</h2>
              <span id="productprice" class="product_price">${
                product.price / 100
              }.00 €</span>
            </div>
            <p id="productDescription" class="product_description">${
              product.description
            }</p>
        </a>
        `
    )
    .join("");
};

showProducts();
//alert("stop");

// async function getProducts() {
//   const url = `http://localhost:3000/api/teddies`;
//   const response = await fetch(url);
//   console.log(response);
//   const products = await response.json();
//   console.log(products);
//   return products;
// }

// getProducts()
//   .then((products) => {
//     products;
//     console.log(products);
//   })
//   .catch((error) => {
//     console.log("Une erreur est survenue");
//   });

// function renderProducts() {
//   const template = document.querySelector("#product");
//   let clone = document.importNode(template.content, true);
//   console.log(clone);
//   products.forEach((product) => {
//     clone.getElementById("productImage").src = product.imageUrl;
//   });
//   template.appendChild(clone);
// }

// renderProducts(product);
