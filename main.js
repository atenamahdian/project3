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
