const settings = {
    itemsPerPage: 10,
    shoes: [
        { name: "Air Jordan 1", price: 26780, image: "jordan-1.webp" },
        { name: "Air Jordan 2", price: 7680, image: "jordan-2.webp" },
        { name: "Air Jordan 3", price: 26543, image: "jordan-3.webp" },
        { name: "Air Jordan 4", price: 14900, image: "jordan-4.webp" },
        { name: "Air Jordan 5", price: 4780, image: "jordan-5.webp" },
        { name: "Air Jordan 6", price: 18980, image: "jordan-6.webp" },
        { name: "Air Jordan 7", price: 26780, image: "jordan-6.webp" },
        { name: "Air Jordan 8", price: 7680, image: "jordan-5.webp" },
        { name: "Air Jordan 9", price: 26543, image: "jordan-4.webp" },
        { name: "Air Jordan 10", price: 14900, image: "jordan-3.webp" },
        { name: "Air Jordan 11", price: 4780, image: "jordan-2.webp" },
        { name: "Air Jordan 12", price: 18980, image: "jordan-1.webp" },
        { name: "Air Jordan 13", price: 26780, image: "jordan-1.webp" },
        { name: "Air Jordan 14", price: 7680, image: "jordan-2.webp" },
        { name: "Air Jordan 15", price: 26543, image: "jordan-3.webp" },
        { name: "Air Jordan 16", price: 14900, image: "jordan-4.webp" },
        { name: "Air Jordan 17", price: 4780, image: "jordan-5.webp" },
        { name: "Air Jordan 18", price: 18980, image: "jordan-6.webp" },
        { name: "Air Jordan 19", price: 26780, image: "jordan-6.webp" },
        { name: "Air Jordan 20", price: 7680, image: "jordan-5.webp" },
        { name: "Air Jordan 21", price: 26543, image: "jordan-4.webp" },
        { name: "Air Jordan 22", price: 14900, image: "jordan-3.webp" },
        { name: "Air Jordan 23", price: 4780, image: "jordan-2.webp" },
        { name: "Air Jordan 24", price: 18980, image: "jordan-1.webp" },
    ]
};

// Calculer le nombre de pages
let totalItems = settings.shoes.length;
let totalPages = Math.ceil(totalItems / settings.itemsPerPage);

// Sélectionner les éléments DOM nécessaires
let shoesList = document.getElementById("shoesList");
let pagination = document.getElementById("pagination");

// Créer la liste de pages pour la pagination
let list = document.createElement("ul");
list.classList.add("pagination", "pagination-lg");
pagination.appendChild(list);

// Créer les éléments de pagination (liens vers chaque page)
for (let i = 0; i < totalPages; i++) {
    let listPage = document.createElement("li");
    listPage.classList.add("page-item");

    let linkPage = document.createElement("a");
    linkPage.classList.add("page-link", "font-weight-bold", "text-dark", "unselectedPaginator");
    linkPage.textContent = i + 1;
    
    list.appendChild(listPage);
    listPage.appendChild(linkPage);
}

// Initialiser les éléments de la page actuelle (afficher la première page)
let currentPage = 1;
let startIndex = (currentPage - 1) * settings.itemsPerPage;
let endIndex = startIndex + settings.itemsPerPage;

for (let i = startIndex; i < endIndex && i < totalItems; i++) {
    let shoe = settings.shoes[i];
    let shoeBox = document.createElement("div");
    shoeBox.classList.add("col-lg-4", "col-md-6", "col-12", "d-flex", "align-items-center", "justify-content-center", "position-relative", "shoe", "showShoe");
    shoeBox.innerHTML = `
        <img src="images/${shoe.image}" width="100%" class="gray-scale">
        <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">${shoe.price} €</div>
        <div class="position-absolute model p-3  fw-bolder h3">${shoe.name}</div>
    `;
    shoesList.appendChild(shoeBox);
}

// Ajouter des événements pour la pagination
let pageLinks = document.querySelectorAll(".page-link");
pageLinks.forEach((link, index) => {
    console.log(pageLinks)
    link.addEventListener("click", () => {
        currentPage = index + 1;
     
        startIndex = (currentPage - 1) * settings.itemsPerPage;
    
        endIndex = startIndex + settings.itemsPerPage;
     
        
        // Effacer les éléments existants
        shoesList.innerHTML = '';

        // Afficher les éléments de la page sélectionnée
        for (let i = startIndex; i < endIndex && i < totalItems; i++) {
            let shoe = settings.shoes[i];
            let shoeBox = document.createElement("div");
            shoeBox.classList.add("col-lg-4", "col-md-6", "col-12", "d-flex", "align-items-center", "justify-content-center", "position-relative", "shoe", "showShoe");
            shoeBox.innerHTML = `
                <img src="images/${shoe.image}" width="100%" class="gray-scale">
                <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">${shoe.price} €</div>
                <div class="position-absolute model p-3  fw-bolder h3">${shoe.name}</div>
            `;
            shoesList.appendChild(shoeBox);
        }

        // Mettre à jour la classe de la page sélectionnée
        pageLinks.forEach(link => {
            link.classList.remove("selectedPaginator");
            link.classList.add("unselectedPaginator");
        });
        link.classList.add("selectedPaginator");
        link.classList.remove("unselectedPaginator");
    });
});




/*


 

 for (let i = startIndex; i < endIndex && i< shoesList; i++){
    let shoe = settings.shoes[i];
 }









<li class="page-item" data-start="0">
    <a class="page-link font-weight-bold text-dark selectedPaginator">1</a>
</li> 

<div class="row m-3">

<div class="col-12" id="pagination">

    <ul class="pagination pagination-lg">

        <li class="page-item" data-start="0">
            <a class="page-link font-weight-bold text-dark selectedPaginator">1</a>
        </li>
<li class="page-item" data-start="6">
<a class="page-link font-weight-bold text-dark unselectedPaginator">2</a></li>
<li class="page-item" data-start="12">
    <a class="page-link font-weight-bold text-dark unselectedPaginator">3</a>
</li>
<li class="page-item" data-start="18">
<a class="page-link font-weight-bold text-dark unselectedPaginator">4</a>
</li>
</ul>
</div>
</div> 
 
<div
class="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center position-relative shoe showShoe">
<img src="images/jordan-1.webp" width="100%" class="gray-scale">
<div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">26780
    €</div>
<div class="position-absolute model p-3 fw-bolder h3">Air Jordan 1</div>
</div>
*/