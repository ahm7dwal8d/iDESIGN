$(".header .burger-icon").click(function () {

    $(".header ul").slideToggle()

})

$(".header ul li a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

})

$(".header ul li a").on("click" , function (el) {

    el.preventDefault()

    var SectionScroll =  $(this).data("scroll")

    $("html , body").animate({

        scrollTop: $("." +SectionScroll).offset().top

    })

})

// landing Section 

let landingSection = document.querySelector(".landing")

let landingArrey = ["carousel-1.jpg" , "carousel-2.jpg"]

let RandomNumber = Math.floor(Math.random() * landingArrey.length)

setInterval(function () {
    
    let RandomNumber = Math.floor(Math.random() * landingArrey.length)

    landingSection.style.backgroundImage = "url(../images/"+ landingArrey[RandomNumber] +")"

} , 10000)


// Project Section 

$(".project ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Fillter = "." + $(this).data("class")

    $(".project .row > div").fadeOut()
    $(".project .row "+ Fillter +"").fadeIn()

    console.log(Fillter)

})

let projectImg = document.querySelectorAll(".project img")


projectImg.forEach((img)=> {

    img.addEventListener("click" , function() {

        let OverlyBox = document.createElement("div")

        OverlyBox.className = "overly"

        document.body.appendChild(OverlyBox)

        let BoxImg = document.createElement("div")

        BoxImg.className = "box-img"

        OverlyBox.appendChild(BoxImg)

        let ImgBox = document.createElement("img")

        ImgBox.src = img.src 

        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "Close-Button"

        BoxImg.appendChild(CloseButton)

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "Close-Button") {

                BoxImg.remove()

                OverlyBox.remove()

            }

        })

    } )

})

// Button To Top 

$("span.up").on("click" , function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {

        $("span.up").addClass("active")

    } else {

        $("span.up").removeClass("active")

    }

})