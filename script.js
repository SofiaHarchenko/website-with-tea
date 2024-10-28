var newsWin = document.querySelector(".news")
var itemsWin = document.querySelector(".products")
var newsBtn = document.querySelector(".news-btn")
var itemsBtn = document.querySelector(".items-btn")

var aboutusWin = document.querySelector(".aboutus")
var aboutusBtn = document.querySelector(".aboutus-bth")

function toNews(){
  itemsWin.style.display = "none"
  newsWin.style.display = "flex"
  aboutusWin.style.display = "none"
}

function toItems(){
  itemsWin.style.display = "flex"
  newsWin.style.display = "none"
  aboutusWin.style.display = "none"
}

function toAboutus(){
  aboutusWin.style.display = "flex"
  newsWin.style.display = "none"
  itemsWin.style.display = "none"
}

newsBtn.addEventListener("click", toNews)
itemsBtn.addEventListener("click", toItems)

aboutusBtn.addEventListener("click", toAboutus)
