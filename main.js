let swiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: true },
});

let showmenu=async()=>{
    let data =await fetch("http://localhost:3000/menu")
    let res =await data.json()
    res.forEach((elem) => {
        document.querySelector(".navbar").innerHTML+=`
                <div class="navbar text-white shadow-sm bg-[#1A191E] justify-center">
            <div class="flex justify-between items-center">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>${elem.title}</summary>
                            <ul class="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

        `
    });
}


showmenu()
let showproducts3=async()=>{
    let data =await fetch("http://localhost:3000/products3")
    let res =await data.json()
    res.forEach((elem) => {
        document.querySelector(".cardcontainer2").innerHTML+=`
<div class="card w-96 h-125 shadow-sm" style="background:${elem.bg}">
  <figure class="px-10 pt-10">
    <img
      src="${elem.img}"
      alt="Shoes"
      class="rounded-xl h-75" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${elem.title}</h2>
    <p class="text-stone-600">${elem.discription}</p>
    <div class="card-actions">
      <button class="btn border-none shadow-none text-black" style="background:${elem.btn}">همین حالا خرید کنید</button>
    </div>
  </div>
</div>

        `
    });
}
 showproducts3()
