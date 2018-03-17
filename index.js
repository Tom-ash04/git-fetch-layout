(function(){
  const content = document.querySelector(".main-window__content");
  content.addEventListener('click', function(e) {
    if(e.target.classList.contains("main-window__star")){
      e.target.classList.toggle("main-window__star--selected");
    } else {
      return;
    };
  });
})();