
let small_img=document.querySelectorAll(".small-img")
let big_img=document.querySelector("#product-img")
 
// product detail image shifting
Array.from(small_img).forEach((images)=>{
    images.addEventListener("click",function(e){
        let img_src=e.target.getAttribute("src")
       document.querySelector("#product-img").setAttribute("src",img_src)
    //    big_img.style.filter="invert(100%)"
        // d.style.filter="grayscale(100%)"
    })
})

// for login page ------------>>>
let login=document.querySelector("#login_form")
let signup=document.querySelector("#signup_form")
let indi=document.querySelector(".indicator")
signup.style.display="none"

document.querySelector("#span_signup").addEventListener("click",function(){
    login.style.transform="translateX(300px)"
    signup.style.transform="translateX(300px)"
    indi.style.transform="translateX(145px)"
    login.style.display="none"
    signup.style.display="block"
})

document.querySelector("#span_login").addEventListener("click",function(){
    login.style.transform="translateX(0px)"
    signup.style.transform="translateX(0px)"
    indi.style.transform="translateX(40px)"
    signup.style.display="none"
    login.style.display="block"
})

