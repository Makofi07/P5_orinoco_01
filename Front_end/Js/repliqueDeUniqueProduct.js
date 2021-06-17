//recuperer la querystring de l'id
const urlId = new URLSearchParams(window.location.search).get("id");
console.log(urlId);

const fetchUniqueProduct = async () => {
  await fetch(`http://localhost:3000/api/teddies/${urlId}`)
    .then((res) => res.json())
    .then((data) => displayUniqueProduct());
};

fetchUniqueProduct();

const displayUniqueProduct = async () => {
  await fetchUniqueProduct();
  structureProduct.innerHTML += `
  <div id="productLink"  class="product">
                <img id="dataImage" src="${
                  data.imageUrl
                }" alt="" class="data_img" />
                <div class="data_sideBySide">
                    <h2 id="dataName" class="data_name">${data.name}</h2>
                    <span id="dataprice" class="data_price">${
                      data.price / 100
                    }.00 €</span>
                    </div>
                    <p id="dataDescription" class="data_description">${
                      data.description
                    }</p>
                    <label for="text">
                      <select name="option" id="colorSelect" value="">
                        <option value="" class="color_option">Option de couleurs</option>  
                      </select>
                    </label>
              </div>
              `;
  console.log(data.colors);
};

displayUniqueProduct(data);
