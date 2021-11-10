ctaForm = document.getElementById("cta-form");
ctaBtn = document.getElementById("cta-btn");

ctaBtn.addEventListener("click", function (e) {
  ctaForm.innerText = `Thank You for filling this form ✌✌!`;
  ctaForm.style.backgroundColor = "#a01877";
  ctaForm.style.paddingTop = "12px";
  ctaForm.style.fontSize = "20px";
  ctaForm.style.color = "#fff";
  ctaForm.style.paddingBottom = "12px";
  ctaForm.style.paddingLeft = "24px";
  ctaForm.style.paddingRight = "24px";
  ctaForm.style.borderRadius = "100px";
  ctaForm.style.textAlign = "center";
  ctaForm.style.width = "100%";
});
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */

//   mobile navWork:

let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling:

$("#main-nav .nav-main-link, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

//Sticky menu background(nav er background er opacity komiye doeaa jokhon ami 150px y-axis borabor niche nambo)
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.9;
  } else if (window.scrollY > 150) {
    document.querySelector(".main-nav").style.opacity = 0.5;
  } else {
    document.querySelector(".navbar", ".main-nav").style.opacity = 1;
  }
});

// for cta:
