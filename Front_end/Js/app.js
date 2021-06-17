const url = `http://localhost:3000/api/teddies`;
const products = getProducts();

function getProducts() {
  fetch(url)
    .then(function (httpBodyResponse) {
      return httpBodyResponse.json();
    })
    .then(function (products) {
      console.log(products);
      products
        .forEach((product) => {
          document.querySelector(".box-container").innerHTML += `
           <article>
                <h2>${product.name}</h2>
                 <p>${products.price}</p>
                  <p>${product.id}</p>
                  <p>${product.description}</p>
                  <img src="${product.imageUrl}">
              </article>`;
        })

        //; {
        //version avec un template et innerHTML
        // document.querySelector(".box-container").innerHTML += `
        //    <article>
        //          <h2>${products[i].name}</h2>
        //         <p>${products[i].price}</p>
        //          <p>${products[i].id}</p>
        //          <p>${products[i].description}</p>
        //          <img src="${products[i].imageUrl}">
        //      </article>
        //   `;
        //let template = document.querySelector("#product");
        //document.querySelector("#productImage").src = products[i].imageUrl;
        //document.querySelector("main").innerHtml = template;
        //je crée une balise template
        // let container = document.querySelector("main");
        // let templateElt = document.querySelector("#product");
        // let clone = document.importNode(templateElt.content, true);
        // console.log(clone);
        // clone.getElementById("productImage").src = products[i].imageUrl;
        // clone.getElementById("productName").textContent = products[i].name;
        // clone.getElementById("productPrice").textContent = `${
        //   products[i].price / 100
        // }.00 €`;
        // clone.getElementById("productDescription").textContent =
        //   products[i].description;
        // clone.getElementById(
        //   "productLink"
        // ).href = `/products.html?id=${products[i]._id}`;

        // container.appendChild(clone);
        //});
        //})
        .catch(function (err) {
          console.log("une erreur est survenue");
        });
    });
}
