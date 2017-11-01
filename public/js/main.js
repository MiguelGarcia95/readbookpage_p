function slider() {
  var slides = document.querySelectorAll('.book-slide');
  var slideContainer = document.querySelector('.slide-container');
  var slider = document.querySelector('.book-slider');
  var arrowLeft = document.querySelector('.arrow-left');
  var arrowRight = document.querySelector('.arrow-right');
  var slideWidth = slides[0].clientWidth;
  var sliderWidth = slider.clientWidth;
  var center = sliderWidth/2;
  var currentSlide = 3; // center of array

  slider.style.left = centerSlide(currentSlide) + "px";

  window.addEventListener('resize', initialize);
  window.addEventListener('resize', resizeSlider);

  arrowLeft.addEventListener('click', previous, false);
  arrowRight.addEventListener('click', next, false);

  function initialize() {
    slideWidth = slides[0].clientWidth;
    sliderWidth = slider.clientWidth;
    center = sliderWidth/2;
    slider.style.left = centerSlide(currentSlide) + "px";
  }

  function resizeSlider() {
    setTimeout(function() {
      var newSlides = document.querySelectorAll('.book-slide');
      var newSlideWidth = newSlides[0].clientWidth;
      if(newSlideWidth !== slideWidth) {
        initialize();
      }
    }, 801);
  }

  function previous() {
    if(currentSlide <= slides.length && currentSlide > 1) {
      currentSlide--;
    } else {
      currentSlide = slides.length;
    }
    slider.style.left = centerSlide(currentSlide) + 'px';
  }

  function next() {
    if(currentSlide < slides.length) {
      currentSlide++;
    } else {
      currentSlide = 1;
    }
    slider.style.left = centerSlide(currentSlide) + 'px';
  }

  function centerSlide(slide) {
    if(slide === 1) {
      return 0;
    } else if (slide === 5) {
      var totalSliderWidth = slideWidth * 5;
      var position =  -totalSliderWidth + sliderWidth;
      return position;
    } else {
      var offset = slide - 1;
      var position = center - slideWidth/2 - (offset * slideWidth);
      return position;
    }
  }
}

function subMenu() {
  var list = document.querySelector('.menu-list');
  var listItem = document.querySelectorAll('.list-item');
  var itemOn = [];
  var activeItem = 0;

  listItem[0].addEventListener('click', function() {updateMenu(0)});
  listItem[1].addEventListener('click', function() {updateMenu(1)});
  listItem[2].addEventListener('click', function() {updateMenu(2)});
  listItem[3].addEventListener('click', function() {updateMenu(3)});
  listItem[4].addEventListener('click', function() {updateMenu(4)});
  listItem[5].addEventListener('click', function() {updateMenu(5)});

  function updateMenu(itemNumber) {
    // console.log('clicked item' + itemNumber );
    activeItem = itemNumber;

    for(var i = 0; i < listItem.length; i++) {
      if (i !== activeItem) {
        itemOn[i] = false;
      } else {
        itemOn[i] = true;
      }
    }

    for (var i = 0; i < listItem.length; i++) {
      if(itemOn[i] === true) {
        listItem[i].classList.add('active-menu');
      } else {
        listItem[i].classList.remove('active-menu');
      }
    }
  }
}

slider();
subMenu();
