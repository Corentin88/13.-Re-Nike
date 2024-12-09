// liste de courses : modulo, innerHTML, dataset

const settings = {
    itemsPerPage: 6,
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
window.addEventListener("load", () => {

    
})

 let shoesList = document.getElementById("shoesList");
 

settings.shoes.forEach(shoe=>{
    let shoeItem = document.createElement("div");
    shoeItem.classList.add ("col-lg-4", "col-md-6","col-12", "d-flex", "align-items-center", "justify-content-center", "position-relative", "shoe", "showShoe");
    shoeItem.innerHTML = `
    <img src="./images/${shoe.image}" width="100%" class="gray-scale">
    <div class="position-absolute price d-flex align-items-center justify-content-center fw-bolder h5">
        ${shoe.price} €</div>
    <div class="position-absolute model p-3 fw-bolder h3">${shoe.name}</div>`;

    shoesList.appendChild(shoeItem);
})

let pagination = document.getElementById("pagination");
let totalPages = Math.ceil(settings.shoes.length/settings.itemsPerPage);

for (let i = 0; i < totalPages; i++){
    let pageUl = document.createElement("ul");
    pageUl.classList.add("pagination", "pagination-lg");
    let pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    let pageLink = document.createElement("a");
    pageLink.classList.add("page-link","font-weight-bold","text-dark","selectedPaginator");
    
    pagination.appendChild(pageUl);
    pageUl.appendChild(pageItem);
    pageItem.appendChild(pageLink);

}



/*
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

*/