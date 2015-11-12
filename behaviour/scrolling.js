function Scrolling() {

  Scrolling.prototype.smoothOnclickScroll = function _smoothOnclickScroll(event) {
    event.preventDefault();

    var anchor = event.srcElement;
        
    window.location = anchor.href;
  };

};
