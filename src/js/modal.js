!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlays = document.querySelectorAll('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    modals = document.querySelectorAll('.modal'),
    body = document.querySelector('body');

  // Open modal - click on button with attribute
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      // Find related modal window
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      // Set the modal and related overlay active
      modalElem.classList.add('active');
      var parentOverlay = modalElem.closest('.js-overlay-modal');
      parentOverlay.classList.add('active');

      // Prevent body scroll when modal is open
      body.classList.add('no-scroll');
    }); // end click
  }); // end foreach

  // Close modal - Close button
  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');
      parentModal.classList.remove('active');

      var parentOverlay = this.closest('.js-overlay-modal');
      parentOverlay.classList.remove('active');
      // Prevent body scroll when modal is open
      body.classList.remove('no-scroll');
    });
  }); // end foreach

  // Fix the situation when modal is inside the overlay
  modals.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }); // end foreach

  // Close modal - press <Esc> key
  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document
          .querySelector('.js-overlay-modal.active')
          .classList.remove('active');
        // Prevent body scroll when modal is open
        body.classList.remove('no-scroll');
      }
    },
    false
  );

  // Close modal - click on overlay
  overlays.forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelector('.modal.active').classList.remove('active');
      this.classList.remove('active');
      // Prevent body scroll when modal is open
      body.classList.remove('no-scroll');
    });
  });
}); // end ready
