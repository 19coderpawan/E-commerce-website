// for the add to cart page.
window.onload = function () {
    let pd = document.getElementsByClassName("table")
    let cart_btn = document.querySelectorAll(".btn")
    let pr = document.querySelector('.price_value')
    
    let items = []
    // to remove the item details from the cart.
   
    
    // adding data in the local storage 
    cart_btn.forEach((bt) => {
        bt.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(e.target.parentElement.children[2].innerHTML)
            console.log(pd.innerHTML)
            if (typeof (Storage) !== "undefined") {
                let item = {
                    name: e.target.parentElement.children[1].innerHTML,
                    price: e.target.parentElement.children[2].innerHTML,
                    src:e.target.parentElement.children[7].innerHTML,
                };

                // if(JSON.parse(localStorage.getItem('items'))===null){
                items.push(item)
                localStorage.setItem('items', JSON.stringify(item))

                // }
                // else{
                //     const localitem= JSON.parse(localStorage.getItem('items')) 
                //     console.log(localitem)
                //     console.log(items)
                //     localitem.map((data)=>{
                //         if(data.name!==item.name){
                //             localStorage.setItem("items",JSON.stringify(item))
                //             items.push(item)
                //         }
                //         window.location.reload()
                //     });  
                // }
                // localStorage.setItem("items",JSON.stringify(item))
            }
            window.location.href="cart.html"

        })
    })

}



