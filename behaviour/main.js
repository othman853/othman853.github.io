window.addEventListener('load', function _onBodyLoad() {

  var scrolling = new Scrolling();

  var anchors = document.getElementsByClassName('next');

  for (var i = 0; i < anchors.length; i++) {
    anchors[i].onclick = scrolling.smoothOnclickScroll;
  }

});
