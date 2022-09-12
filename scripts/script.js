let boxes = document.querySelectorAll(".main_product_box");

function deleteActive(){
    boxes.forEach(item => {
        item.classList.remove("main");
    })
}

function addActive(i = 2){
    boxes[i].classList.add("main");
}

deleteActive();
addActive();
boxes.forEach(item => {
    item.addEventListener('click',(e) => {
        const target = e.target.closest(".main_product_box")
        if(target && target.matches(".main_product_box")){
            boxes.forEach((item,i) => {
                if(target == item){
                    deleteActive();
                    addActive(i)
                }
            })
        }
    })
})
// SLIDER

// IF SCREEN SIZE changed dynamically then it would'nt work,if you want to see result first set google chrome to responsive mode,then choose the resolution you want and update the page
// else it works perfectlly,if you open it straight up with mobile device or etc
   if(window.screen.availWidth <= 1000 && window.screen.availHeight<= 1400){
    let sliderElems = document.querySelectorAll(".main_review"),
    sliderBtns = document.querySelectorAll(".slider_btn");


    function hideElem(){
        sliderElems.forEach(item => {
            item.classList.add("hide")
            item.classList.remove("show");
        })
        sliderBtns.forEach(item => {
            item.classList.remove("active");
        })
    }

    function showElem(i = 0){
        sliderElems[i].classList.remove("hide");
        sliderElems[i].classList.add("show")

        sliderBtns[i].classList.add("active");
    }
    hideElem()
    showElem();


   sliderBtns.forEach(item => {
    item.addEventListener("click", (e) => {
        if(e.target && e.target.matches(".slider_btn")){
            sliderBtns.forEach((item,i) => {
                if(e.target == item){
                    hideElem();
                    showElem(i)
                }
            })
        }
    })
   })
   }