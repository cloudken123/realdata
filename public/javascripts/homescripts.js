const toggleButton =document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})

    const slides=document.querySelector(".slide-items").children;
    // const slidesItems=document.querySelector(".slide-items")
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    const totalSlides=slides.length;
        let index = 0;
    const duration = 8000;
    
    prev.onclick= function(){
        slide("prev")
    }

    next.onclick= function(){
        slide("next")
    }

    function slide(direction){
         progress();
        if(direction=='next'){
            if(index == totalSlides - 1){
                index=0;
            }
            else{
                index++
            }
        }
        if (direction=='prev'){
            if(index==0){
                index = totalSlides -1;
            }
            else {
                index--;
            }
        }

        // Stop auto slide when user click
        clearInterval(timer);

        // auto slide starts
        timer = setInterval(autoSlide,  duration);

        for(let i=0; i<slides.length; i++){
            slides[i].classList.remove("active")
        }
        slides[index].classList.add("active");
        slideInfo();
    }
    let width = 100/totalSlides;
    function slideInfo(){
        document.querySelector(".number").innerHTML=(index  + 1) + "/" + totalSlides;
        document.querySelector(".inner").style.width= (index +1)*width + "%";
     }

     function progress(){
        document.querySelector(".progress").innerHTML ='';
         const div = document.createElement ("div");
                div.style.height = "5px";
                div.style.width = "0px";
                div.style.position = "absolute";
                div.style.left = "0";
                div.style.top = "0";
                div.style.backgroundColor = "greenyellow";
                div.id = "progress";
                div.style.animation = "progress " + duration/1000 + "s linear";
                document.querySelector(".progress").appendChild(div);
     }

     function autoSlide(){
        slide ("next");
    }

        let timer = setInterval (autoSlide, duration);
     slideInfo();
     progress();

    // window.addEventListener("scroll", function(){
    //     var navbar = document.querySelector("navbar");
    //     navbar.classList.toggle("sticky", window.scrollY > 0);
    // })


        const tslides = document.querySelector(".tslider").children;
        const indicatorImages=document.querySelector(".slider-indicator").children;
      
        for (let i = 0; i<indicatorImages.length; i++){
           indicatorImages[i].addEventListener("click", function(){
            for (let j = 0; j<indicatorImages.length; j++){
                indicatorImages[j].classList.remove("active");
        }
           
           
            this.classList.add("active");
            const id= this.getAttribute("data-id");
            for (let j=0; j<tslides.length; j++){
                tslides[j].classList.remove("active");
            }
            tslides[id].classList.add("active");
           })
        }


