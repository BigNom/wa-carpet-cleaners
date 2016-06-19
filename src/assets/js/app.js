$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if(newSize === 'small' && oldSize === "medium") {
    $('#main-menu ul').removeClass('expanded');
  }

  if(newSize === 'medium' && oldSize === 'small') {
      $('#main-menu ul').removeClass('expanded');
  }
});

var size = Foundation.MediaQuery.current;
if(size ==='small') {
  $('#main-menu ul').removeClass('expanded');
}


  $(function() {
    $('.toggleNav').on('click',function() {
      $('.flex-nav ul').slideToggle();
    });
  });
