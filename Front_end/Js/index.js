main();

async function main() {
  const products = await getArticles();

  for (product of products) {
    displayProducts(product);
  }
}

function getArticles() {
  return fetch("http://localhost:3000/api/teddies")
    .then(function (httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .then(function (products) {
      return products;
    })
    .catch(function (error) {
      console.log("Une erreur est survenue");
    });
}

function displayProducts(product) {
  const templateElt = document.getElementById("productTemplate");
  const clone = document.importNode(templateElt.content, true);
  console.log(clone);
  clone.getElementById("productImage").src = product.imageUrl;
  clone.getElementById("productName").textContent = product.name;
  clone.getElementById("productPrice").textContent = `${
    product.price / 100
  }.00€`;

  clone.getElementById("productDescription").textContent = product.description;
  clone.getElementById("productLink").href = `products.html?id=${product._id}`;

  document.getElementById("boxContainer").appendChild(clone);
}
