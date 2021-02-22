$('.menu-nav-toggle').click(function(e){
  e.preventDefault();
  $('.menu-right').toggleClass('is-open')
  $('.menu-nav-toggle').toggleClass('is-open')
})
