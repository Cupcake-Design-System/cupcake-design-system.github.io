// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
/* Global Scroll, Sidebar, Flavor, Clipboard, Anchors */
$(document).ready(function($) {
  $('.docs-tabs-content').hide();
  $('.docs-tabs-content:first').show();
  $('.docs-tabs li:first').addClass('active');
  $('.docs-tabs li').click(function() {
    $('.docs-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.docs-tabs-content').hide();

    var selectTab = $(this).find('a').attr("data-tab");

    $(selectTab).fadeIn();
  });


/************************************************
* Modal Demo stuff
*************************************************/
  $(document).ready(function() {
    $("#defaultBtn").click(function() {
        $("#newDark").toggleClass("c-modal-visible")
    });
    $("#close, #cancel").click(function() {
        $("#newDark").removeClass("c-modal-visible")
    });
    $("#largeBtn").click(function() {
        $("#largeModal").toggleClass("c-modal-visible")
    });
    $("#close, #cancel").click(function() {
        $("#largeModal").removeClass("c-modal-visible")
    });
    $("#smallBtn").click(function() {
        $("#smallModal").toggleClass("c-modal-visible")
    });
    $("#close, #cancel").click(function() {
        $("#smallModal").removeClass("c-modal-visible")
    });
    $("#centerBtn").click(function() {
        $("#centerModal").toggleClass("c-modal-visible")
    });
    $("#close, #cancel").click(function() {
        $("#centerModal").removeClass("c-modal-visible")
    });
    $("#fullscreenBtn").click(function() {
        $("#fullscreenModal").toggleClass("c-modal-visible")
    });
    $("#close, #cancel").click(function() {
        $("#fullscreenModal").removeClass("c-modal-visible")
    })
});

/************************************************
* Disable empty links in docs examples
*************************************************/
$('.main-demo-content [href="#"]').click(function (e) {
  e.preventDefault()
})
 
$('[href=""]').click(function (e) {
  e.preventDefault()
})
 
$('a[href="#"]').click(function(e) {
  e.preventDefault ? e.preventDefault() : e.returnValue = false
});

/************************************************
* Docs Highlight
*************************************************/  
$('html').on('click.ui.btn', '#highlight-toggle', function(e) {
  e.preventDefault();
  $(this).find(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  $(this).prev().toggleClass("show-me");
});


/************************************************
* Clipboard
*************************************************/
$('div.highlight pre').each(function () {
  var btnHtml = '<div class="docs-clipboard"><button class="docs-btn c-btn c-btn-xs c-btn-primary" data-tooltip="Copy To Clipboard" data-tooltip-conf="right square">Copy</button></div>'
  $(this).after(btnHtml)
})

var clipboard = new Clipboard('.docs-btn', {
  target: function (trigger) {
    return trigger.parentNode.previousElementSibling
  }
})

clipboard.on('success', function (e) {
  $(e.trigger)
    .attr('data-tooltip', 'Copied!')
    .attr('data-tooltip-conf', 'success right square')

  e.clearSelection()
})

clipboard.on('error', function (e) {
  var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
  var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

  $(e.trigger)
    .attr('title', fallbackMsg)
})


/************************************************
* Add deep anchors
*************************************************/  
anchors.options = {
  icon: '#'
}
anchors.add('.main-demo-content > h2, .main-demo-content > h3, .main-demo-content > h4, .main-demo-content > h5')
$('.main-demo-content > h2, .main-demo-content > h3, .main-demo-content > h4, .main-demo-content > h5').wrapInner('<div></div>')


/************************************************
* Clipboard for colors
*************************************************/  
var clipboard = new Clipboard('#clipboardItem');

clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('tooltip', 'Copied!')
    e.clearSelection()
  })

  $('#docs-menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('.doc-sidenav-body').slideToggle(200);
  });

}(jQuery));

