let pioneersApp = angular.module("pioneersApp", []);

pioneersApp.controller("PioneersController", [
  "$scope",
  "$timeout",
  function ($scope, $timeout) {
    $scope.majors = [
      {
        num: "01",
        major: "هندسة سيارات الهايبرد وبرمجة سيارات الكهرباء",
        rec1Color: "rgba(154, 187, 46, 0.8)",
        img: "images/Rectangle 3.png",
      },
      {
        num: "02",
        major: "ادارة المستشفيات والمستشفيات الصحية",
        rec1Color: "rgba(118, 251, 246, 0.3)",
        img: "images/glasses.png",
      },
      {
        num: "03",
        major: "هندسة التكييف والتبريد",
        rec1Color: "rgba(180, 155, 20, 0.7)",
        img: "images/hey.png",
      },
      {
        num: "04",
        major: "التصميم الجرافيكي ووسائل التواصل الاجتماعي",
        rec1Color: "rgba(141, 54, 200, 0.7)",
        img: "images/purble.png",
      },
      {
        num: "05",
        major: "هندسة الشبكات والامن السيبراني",
        rec1Color: "rgba(0, 103, 56, 0.7)",
        img: "images/network.png",
      },
      {
        num: "06",
        major: "ادارة المطارات وعلوم السياحة والسفر",
        rec1Color: "rgba(44, 88, 149, 0.3)",
        img: "images/Aiport.png",
      },
    ];
    $scope.swiper = null; // Initialize swiper variable

    $scope.initSwiper = function () {
      console.log("hello world!");

      $scope.swiper = new Swiper(".swiper-container", {
        slidesPerView: "4",
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // Set initial flex property to each slide
      document.querySelectorAll(".swiper-slide").forEach(function (slide) {
        slide.style.flex = "0 0 25%";
      });
    };

    $scope.expandProperty = function (index) {
      var propertyDivs = document.querySelectorAll(".first-property");

      propertyDivs.forEach(function (otherDiv, idx) {
        if (idx !== index) {
          otherDiv.classList.remove("expanded");
          otherDiv.parentElement.style.flex = "0 0 25%";
        }
      });

      var div = propertyDivs[index];
      div.classList.toggle("expanded");

      if (div.classList.contains("expanded")) {
        div.parentElement.style.flex = "0 0 100%";
        document.querySelector(".down").style.height = "900px";
      } else {
        div.parentElement.style.flex = "0 0 25%";
        document.querySelector(".down").style.height = "";
      }

      $scope.swiper.update();
      $scope.swiper.slideTo(index);
    };

    // Initialize Swiper after the properties are set

    $scope.calc = function (data, index) {
      let _length = data.length - 1;
      if (_length == index) $scope.initSwiper();
    };
  },



]);
