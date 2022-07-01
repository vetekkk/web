document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar__link");
  for (const link of links) {
    link.addEventListener("click", function () {
      for (const lnk of links) {
        lnk.classList.remove("sidebar__item--active");
      }

      this.classList.add("sidebar__item--active");

      const tabs = document.querySelectorAll(".content");
      for (const tab of tabs) {
        tab.classList.add("hiddenTXT");
      }

      const id = this.href.split("#")[1];
      document.querySelector("#" + id).classList.remove("hiddenTXT");

      console.log(typeof id);

      let underline = document.querySelector(".underline");

      const img1 = document.querySelector(".illustration1");
      const img2 = document.querySelector(".illustration2");
      const img3 = document.querySelector(".illustration3");
      const img4 = document.querySelector(".illustration4");
      const img5 = document.querySelector(".illustration5");
      const img6 = document.querySelector(".illustration6");

      const nav1 = document.querySelector(".nav1");
      const nav2 = document.querySelector(".nav2");
      const nav3 = document.querySelector(".nav3");
      const nav4 = document.querySelector(".nav4");
      const nav5 = document.querySelector(".nav5");
      const nav6 = document.querySelector(".nav6");

      const LnkDtl = document.querySelector(".link__detail1");
      const LnkDt2 = document.querySelector(".link__detail2");
      const LnkDt3 = document.querySelector(".link__detail3");
      const LnkDt4 = document.querySelector(".link__detail4");
      const LnkDt5 = document.querySelector(".link__detail5");
      const LnkDt6 = document.querySelector(".link__detail6");

      if (id == "architect") {
        img1.classList.remove("hiddenIMG");
        nav1.classList.add("Active");
        LnkDtl.classList.remove("hiddenLinkDetail");
        img2.classList.add("hiddenIMG");
        nav2.classList.remove("Active");
        LnkDt2.classList.add("hiddenLinkDetail");
        img3.classList.add("hiddenIMG");
        nav3.classList.remove("Active");
        LnkDt3.classList.add("hiddenLinkDetail");
        img4.classList.add("hiddenIMG");
        nav4.classList.remove("Active");
        LnkDt4.classList.add("hiddenLinkDetail");
        img5.classList.add("hiddenIMG");
        nav5.classList.remove("Active");
        LnkDt5.classList.add("hiddenLinkDetail");
        img6.classList.add("hiddenIMG");
        nav6.classList.remove("Active");
        LnkDt6.classList.add("hiddenLinkDetail");
        console.log(id);
      }
      if (id == "beautification") {
        img1.classList.add("hiddenIMG");
        nav1.classList.remove("Active");
        LnkDtl.classList.add("hiddenLinkDetail");
        img2.classList.remove("hiddenIMG");
        nav2.classList.add("Active");
        LnkDt2.classList.remove("hiddenLinkDetail");
        img3.classList.add("hiddenIMG");
        nav3.classList.remove("Active");
        LnkDt3.classList.add("hiddenLinkDetail");
        img4.classList.add("hiddenIMG");
        nav4.classList.remove("Active");
        LnkDt4.classList.add("hiddenLinkDetail");
        img5.classList.add("hiddenIMG");
        nav5.classList.remove("Active");
        LnkDt5.classList.add("hiddenLinkDetail");
        img6.classList.add("hiddenIMG");
        nav6.classList.remove("Active");
        LnkDt6.classList.add("hiddenLinkDetail");
        console.log(id);
      }
      if (id == "safety") {
        img1.classList.add("hiddenIMG");
        nav1.classList.remove("Active");
        LnkDtl.classList.add("hiddenLinkDetail");
        img2.classList.add("hiddenIMG");
        nav2.classList.remove("Active");
        LnkDt2.classList.add("hiddenLinkDetail");
        img3.classList.remove("hiddenIMG");
        nav3.classList.add("Active");
        LnkDt3.classList.remove("hiddenLinkDetail");
        img4.classList.add("hiddenIMG");
        nav4.classList.remove("Active");
        LnkDt4.classList.add("hiddenLinkDetail");
        img5.classList.add("hiddenIMG");
        nav5.classList.remove("Active");
        LnkDt5.classList.add("hiddenLinkDetail");
        img6.classList.add("hiddenIMG");
        nav6.classList.remove("Active");
        LnkDt6.classList.add("hiddenLinkDetail");
        console.log(id);
      }
      if (id == "engineering") {
        img1.classList.add("hiddenIMG");
        nav1.classList.remove("Active");
        LnkDtl.classList.add("hiddenLinkDetail");
        img2.classList.add("hiddenIMG");
        nav2.classList.remove("Active");
        LnkDt2.classList.add("hiddenLinkDetail");
        img3.classList.add("hiddenIMG");
        nav3.classList.remove("Active");
        LnkDt3.classList.add("hiddenLinkDetail");
        img4.classList.remove("hiddenIMG");
        nav4.classList.add("Active");
        LnkDt4.classList.remove("hiddenLinkDetail");
        img5.classList.add("hiddenIMG");
        nav5.classList.remove("Active");
        LnkDt5.classList.add("hiddenLinkDetail");
        img6.classList.add("hiddenIMG");
        nav6.classList.remove("Active");
        LnkDt6.classList.add("hiddenLinkDetail");
        console.log(id);
      }
      if (id == "infrastructure") {
        img1.classList.add("hiddenIMG");
        nav1.classList.remove("Active");
        LnkDtl.classList.add("hiddenLinkDetail");
        img2.classList.add("hiddenIMG");
        nav2.classList.remove("Active");
        LnkDt2.classList.add("hiddenLinkDetail");
        img3.classList.add("hiddenIMG");
        nav3.classList.remove("Active");
        LnkDt3.classList.add("hiddenLinkDetail");
        img4.classList.add("hiddenIMG");
        nav4.classList.remove("Active");
        LnkDt4.classList.add("hiddenLinkDetail");
        img5.classList.remove("hiddenIMG");
        nav5.classList.add("Active");
        LnkDt5.classList.remove("hiddenLinkDetail");
        img6.classList.add("hiddenIMG");
        nav6.classList.remove("Active");
        LnkDt6.classList.add("hiddenLinkDetail");
        console.log(id);
      }
      if (id == "transport_accessibility") {
        img1.classList.add("hiddenIMG");
        nav1.classList.remove("Active");
        LnkDtl.classList.add("hiddenLinkDetail");
        img2.classList.add("hiddenIMG");
        nav2.classList.remove("Active");
        LnkDt2.classList.add("hiddenLinkDetail");
        img3.classList.add("hiddenIMG");
        nav3.classList.remove("Active");
        LnkDt3.classList.add("hiddenLinkDetail");
        img4.classList.add("hiddenIMG");
        nav4.classList.remove("Active");
        LnkDt4.classList.add("hiddenLinkDetail");
        img5.classList.add("hiddenIMG");
        nav5.classList.remove("Active");
        LnkDt5.classList.add("hiddenLinkDetail");
        img6.classList.remove("hiddenIMG");
        nav6.classList.add("Active");
        LnkDt6.classList.remove("hiddenLinkDetail");
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