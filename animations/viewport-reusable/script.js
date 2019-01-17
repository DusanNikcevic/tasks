var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('[data-animated="true"]');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      var animatedClass = elems[i].getAttribute("data-animation");
      if (positionFromTop - windowHeight <= 0) {
        elems[i].classList.add(animatedClass);
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();
