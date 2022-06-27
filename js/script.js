document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar__link");
  for (const link of links) {
    link.addEventListener("click",function () {
      for (const lnk of links) {
        lnk.classList.remove("sidebar__item--active");
      }

      this.classList.add("sidebar__link--active");

      const tabs = document.querySelectorAll(".content");
      for (const tab of tabs) {
        tab.classList.add("content--hidden");
      }

      const id = this.href.split("#")[1];
      document.querySelector("#" + id).classList.remove("content--hidden");
      console.log(typeof id);

            const img1 = document.querySelector(".illustration1");
            const img2 = document.querySelector(".illustration2");
            const img3 = document.querySelector(".illustration3");
            const img4 = document.querySelector(".illustration4");
            const img5 = document.querySelector(".illustration5");
            const img6 = document.querySelector(".illustration6");
      
            if (id == "architect") {
              img1.classList.add("active");
              img1.classList.remove("illustration1");
      
              img2.classList.add("illustration2");
              img2.classList.remove("active");
      
              img3.classList.add("illustration3");
              img3.classList.remove("active");
      
              img4.classList.add("illustration4");
              img4.classList.remove("active");
      
              img5.classList.add("illustration5");
              img5.classList.remove("active");
      
              img6.classList.add("illustration6");
              img6.classList.remove("active");
              console.log(id);
            } else if (id == "beautification") {
              img1.classList.add("illustration1");
              img1.classList.remove("active");
      
              img2.classList.add("active");
              img2.classList.remove("illustration2");
      
              img3.classList.add("illustration3");
              img3.classList.remove("active");
      
              img4.classList.add("illustration4");
              img4.classList.remove("active");
      
              img5.classList.add("illustration5");
              img5.classList.remove("active");
      
              img6.classList.add("illustration6");
              img6.classList.remove("active");
              console.log(id);
            } else if (id == "safety") {
              img1.classList.add("illustration1");
              img1.classList.remove("active");
      
              img2.classList.add("illustration2");
              img2.classList.remove("active");
      
              img3.classList.add("active");
              img3.classList.remove("illustration3");
      
              img4.classList.add("illustration4");
              img4.classList.remove("active");
      
              img5.classList.add("illustration5");
              img5.classList.remove("active");

              img6.classList.remove("active");
              img6.classList.add("illustration6");
              console.log(id);
            } else if (id == "engineering") {

              img1.classList.add("illustration1");
              img1.classList.remove("active");

              img2.classList.add("illustration2");
              img2.classList.remove("active");

              img3.classList.add("illustration3");
              img3.classList.remove("active");

              img4.classList.add("active");
              img4.classList.remove("illustration4");

              img5.classList.add("illustration5");
              img5.classList.remove("active");

              img6.classList.remove("active");
              img6.classList.add("illustration6");
              console.log(id);
            } else if (id == "infrastructure") {

              img1.classList.add("illustration1");
              img1.classList.remove("active");

              img2.classList.add("illustration2");
              img2.classList.remove("active");

              img3.classList.add("illustration3");
              img3.classList.remove("active");

              img4.classList.remove("active");
              img4.classList.add("illustration4");

              img5.classList.add("active");
              img5.classList.remove("illustration5");

              img6.classList.remove("active");
              img6.classList.add("illustration6");
              console.log(id);
            } else if (id == "transport_accessibility") {
              img1.classList.add("illustration1");
              img1.classList.remove("active");

              img2.classList.add("illustration2");
              img2.classList.remove("active");

              img3.classList.add("illustration3");
              img3.classList.remove("active");

              img4.classList.remove("active");
              img4.classList.add("illustration4");

              img5.classList.remove("active");
              img5.classList.add("illustration5");

              img6.classList.add("active");
              img6.classList.remove("illustration6");
              console.log(id);
            }

    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu__link");
  for (const button of buttons) {
    button.addEventListener("click", function () {
      for (const btn of buttons) {
        btn.classList.remove("menu__link--active");
        btn.classList.add("menu__link");
      }

      this.classList.add("menu__link--active");
      this.classList.remove("menu__link");

      const slides = document.querySelectorAll(".slide");
      for (const slide of slides) {
        slide.classList.add("slide--hidden");
      }

      const identificate = this.href.split("#")[1];
      document
        .querySelector("#" + identificate)
        .classList.remove("slide--hidden");
    });
  }
});


