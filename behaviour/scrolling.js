function Scrolling() {

  function findDestinationByEvent(hash) {

    var anchor = event.srcElement;

    var nextSectionId = anchor.hash.replace(/[#]/, '');
    var nextSection = document.getElementById(nextSectionId);

    return nextSection;
  }

  Scrolling.prototype.smoothBackToTop = function _smoothBackToTop(event) {

  };

  Scrolling.prototype.singleAnchorScroll = function _singleAnchorScroll(event) {

    smoothOnclickScroll(event, function _onScroll() {

    });

  };

  Scrolling.prototype.smoothOnclickScroll = function _smoothOnclickScroll(event) {
    event.preventDefault();

    var nextSection = findDestinationByEvent(event);

    var current = self.pageYOffset;
    var destination = nextSection.offsetTop;

    var scrollInterval = setInterval(function _onScrollInterval() {

      if (current >= destination) {
        clearInterval(scrollInterval);
      }

      window.scrollBy(0, 3);
      current += 3;

    }, 1);

  };
};
