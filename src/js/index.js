$(function () {
  var portfolioSource = document.getElementById("portfolio-entry-template").innerHTML;
  var portfolioTemplate = Handlebars.compile(portfolioSource);

  var selectionSource = document.getElementById("selection-entry-template").innerHTML;
  var selectionTemplate = Handlebars.compile(selectionSource);
  
  var PortfolioContext = [
    {
        PortfolioList: [
            {
              PortfolioTitle: "Feature One",
              PortfolioText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum itaque molestiae a impedit deserunt praesentium reprehenderit, eaque ipsa fuga quas dicta illo vel, porro ullam tempore dolores iste? Dicta, provident ab rem repudiandae quis maxime voluptatibus culpa assumenda neque commodi!",
              PortfolioImg: "img/feature-1.jpg",
              PortfolioStyle: "portfolioLeft"
            },
            {
              PortfolioTitle: "Feature Two",
              PortfolioText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum itaque molestiae a impedit deserunt praesentium reprehenderit, eaque ipsa fuga quas dicta illo vel, porro ullam tempore dolores iste? Dicta, provident ab rem repudiandae quis maxime voluptatibus culpa assumenda neque commodi!",
              PortfolioImg: "img/feature-2.jpg",
              PortfolioStyle: "portfolioRight"
            },
            {
              PortfolioTitle: "Feature Three",
              PortfolioText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum itaque molestiae a impedit deserunt praesentium reprehenderit, eaque ipsa fuga quas dicta illo vel, porro ullam tempore dolores iste? Dicta, provident ab rem repudiandae quis maxime voluptatibus culpa assumenda neque commodi!",
              PortfolioImg: "img/feature-3.jpg",
              PortfolioStyle: "portfolioLeft"
            }
        ]
    }
  ];

  var selectionContext = [
    {
      selectionList: [
            {
              selectionTitle: "Tea sort 1",
              selectionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              selectionImg: "img/tea-2.png",
            },
            {
              selectionTitle: "Tea sort 2",
              selectionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              selectionImg: "img/tea-2.png",
            },
            {
              selectionTitle: "Tea sort 3",
              selectionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              selectionImg: "img/tea-2.png",
            },
            {
              selectionTitle: "Tea sort 4",
              selectionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              selectionImg: "img/tea-2.png",
            },
            {
              selectionTitle: "Tea sort 5",
              selectionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              selectionImg: "img/tea-2.png",
            },            
        ]
    }
  ];
  var PortfolioHtml = portfolioTemplate(PortfolioContext);
  $('.portfolio-placeholder').html(PortfolioHtml);

  var selectionHtml = selectionTemplate(selectionContext);
  $('.selection-placeholder').html(selectionHtml);
});











// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})