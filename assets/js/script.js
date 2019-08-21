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
* Action Panel Demo stuff
*************************************************/

$(document).ready(function () {
  $(".c-action-panel-close").on("click", function () {
    $(this).closest(".c-action-panel").toggleClass("c-action-panel-visible")
  }), 

  $("#actionPanelDefault-trigger").on("click", function () {
    $("#actionPanelDefault").toggleClass("c-action-panel-visible")
  }), 

  $("#actionPanelHeader-trigger").on("click", function () {
    $("#actionPanelHeader").toggleClass("c-action-panel-visible")
  }), 

  $("#actionPanelHeaderComplex-trigger").on("click", function () {
    $("#actionPanelHeaderComplex").toggleClass("c-action-panel-visible")
  }),

  $("#actionPanelFooter-trigger").on("click", function () {
    $("#actionPanelFooter").toggleClass("c-action-panel-visible")
  }), 

  
  $("#actionPanelLarge-trigger").on("click", function () {
    $("#actionPanelLarge").toggleClass("c-action-panel-visible")
  }), 
  
  $("#actionPanelNotifications-trigger").on("click", function () {
    $("#actionPanelNotifications").toggleClass("c-action-panel-visible")
  }),

  
  $("#qv-backdrop-dark-trigger").on("click", function () {
    $("#qv-backdrop-dark").toggleClass("c-action-panel-visible"), $("#backdrop-dark").toggle()
  }), 
  
  $("#backdrop-dark").on("click", function () {
    $("#backdrop-dark").toggle(), $("#qv-backdrop-dark").toggleClass("c-action-panel-visible")
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
  e.preventDefault ? e.preventDefault() : e.returnValue = !1
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

$(function () {
  /************************************************
  * Flavor Switch
  *************************************************/
  
  var $html = $('html');
  
  $html.on('click.ui.dropdown', '.docs-flavor-switch', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });
  
  $html.on('click.ui.dropdown', '.docs-flavor-switch [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.docs-flavor-switch');
    $dropdown.find('.docs-flavor-switch-input').val($item.data('dropdown-value'));
    $dropdown.find('.docs-flavor-switch-current').text($item.text());
  });
  
  $html.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('docs-flavor-switch')) {
      $('.docs-flavor-switch').removeClass('is-open');
    }
  });
  
  
  // Local storage settings
  var themeSettings = getThemeSettings();
  
  // Elements
  var $app = $('#docs-app');
  var $styleLink = $('#theme-style');
  var $customizeMenu = $('#customize-menu');
  var $customizeMenuDropdown = $customizeMenu.find('.flavor');
  
  
  // Initial State
  setThemeSettings();
  
  
  // Set theme type
  $customizeMenuDropdown.on('click', function () {
    themeSettings.themeName = $(this).data('theme');
    setThemeSettings();
  });
  
  function setThemeSettings() {
    setThemeState()
      .delay(50)
      .queue(function (next) {
  
        setThemeControlsState();
        saveThemeSettings();
  
        $(document).trigger("themechange");
  
      next();
    });
  }
  
  
  
  // Update theme based on options
  function setThemeState() {
    // set theme type
    if (themeSettings.themeName) {
      $styleLink.attr('href', 'https://unpkg.com/@cupcake-ds/cupcake/dist/' + themeSettings.themeName + '.css');
    } else {
      $styleLink.attr('href', 'https://unpkg.com/@cupcake-ds/cupcake/dist/cupcake.css');
    }
  
    return $app;
  }
  
  
  // Update theme controls based on options
  function setThemeControlsState() {
    // set color switcher
    $customizeMenuDropdown.each(function () {
      if ($(this).data('theme') === themeSettings.themeName) {
        $(this).addClass('c-dropdown-item-selected');
      } else {
        $(this).removeClass('c-dropdown-item-selected');
      }
    });
  }

  
  
  // Storage Functions
  function getThemeSettings() {
    var settings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) : {};
  
    return settings;
  }
  
  function saveThemeSettings() {
    localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
  }
  
  }(jQuery));
  
  
  (function () {
    'use strict'
  
    if (!window.docsearch) {
      return
    }
  
    window.docsearch({
      apiKey: '5990ad008512000bba2cf951ccf0332f',
      indexName: 'bootstrap',
      inputSelector: '#search-box',
      // Set debug to `true` if you want to inspect the dropdown
      debug: false
    })
  })()