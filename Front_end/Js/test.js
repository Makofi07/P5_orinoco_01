main();

async function main() {
  const products = await getArticles();

  for (product of products) {
    displayProducts(product);
  }
}

async function getArticles() {
  const url = `http://localhost:3000/api/teddies`;
  try {
    const httpBodyResponse = await fetch(url);
    const products = await httpBodyResponse.json();
    console.log(products);
    return products;
  } catch (error) {
    alert("une erreur est survenue");
  }
}

function displayProducts(product) {
  const templateElt = document.getElementById("product");
  let clone = document.importNode(templateElt.content, true);
  console.log(clone);
  clone.getElementById("productImage").src = product.imageUrl;
  clone.getElementById("productName").textContent = product.name;
  clone.getElementById("productPrice").textContent = `${
    product.price / 100
  }.00 €`;

  clone.getElementById("productDescription").textContent = product.description;
  clone.getElementById("productLink").href = `/products.html?id=${product._id}`;

  document.getElementById("main").appendChild(clone);
}
