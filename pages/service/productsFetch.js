const api = 'https://shoes-app-server.herokuapp.com/products'
async function getProducts(){
    try{
		const response = await fetch(api)
		return await response.json()
	}
	catch(err){}
	finally{}
}
let arrayone=[]

function addToCart(id) {
arrayone.push(id)

}

console.log(arrayone);
function incrementCartItem(){`
  <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <i class="bi-cart-fill me-1" on></i>
    Cart
    <span id="badge1" class="badge bg-dark text-white ms-1 rounded-pill" >${arrayone.length}</span>
    </button>`
}



async function getData(){
    let products = await getProducts()
    console.log(products)
    products.forEach((item) => {
        const {_id,image,name , issubited} = item
        let myProducts = document.getElementById("card_con")
        myProducts.innerHTML+=`
        <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src=${image} alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${name}</h5>
                
                </div>
                <form>
                <label for="cars">Choose a size:</label>
                <select id="size" name="size">
                select size:
                <option value="42">42</option>
                <option value="41">41</option>
                <option value="40"> 40</option>
                <option value="38">38</option>
              </select>
              </form>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto btnname" >Add to cart</a></div>
            </div>
        </div>
    </div> `

    incrementCartItem()
    })
}

// let btnts=document.getElementsByClassName("btnname")

// btnts.forEach((item,i)=>{

//     item.addEventListener("click",()=>{
//         arrayone.push(i)
//     })
// })
// console.log(btnts); 




// const products = document.querySelector(".prodCart");
// function addProduct(){
//     let productsCart = await getProducts(_id).then(  console.log(_id))
  
// }
// addProduct()
getData()

