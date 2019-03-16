// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
/* Global Scroll, Sidebar, Flavor, Clipboard, Anchors */


$(function () {

/************************************************
* SmoothScroll
*************************************************/

var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)
  // Speed & Easing
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  easing: 'easeInOutCubic' // Easing pattern to use
});



/************************************************
* Disable empty links in docs examples
*************************************************/    

$('.docs-content [href="#"]').click(function (e) {
  e.preventDefault()
})
 

$('[href=""]').click(function (e) {
  e.preventDefault()
})
 


/************************************************
* Flavor Dropdown
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


/************************************************
* Docs Highlight
*************************************************/  


$html.on('click.ui.btn', '#highlight-toggle', function(e) {
  e.preventDefault();
  $(this).find(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  // $(this).parents(".window-bar").nextAll(".highlight:first").toggleClass("show-me");
  // $(this).prev().slideToggle(200);
  $(this).prev().toggleClass("show-me");
});


// $('div.docs-example').each(function () {
//   var bar = '<div class="window-bar"><div class="circles"><span class="circle circle-red"></span><span class="circle circle-yellow"></span><span class="circle circle-green"></span></div><div class="languages"><span class="c-btn c-btn-secondary c-btn-xs" id="highlight-toggle">Show Html</span></div</div>'
//   $(this).before(bar)
// })

// $('div.docs-example').each(function () {
//   var bar = '<div class="window-bar"><div class="languages"><span class="c-btn c-btn-secondary c-btn-xs" id="highlight-toggle">Show Html</span></div></div>'
//   $(this).after(bar)
// })



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
anchors.add('.docs-content > h2, .docs-content > h3, .docs-content > h4, .docs-content > h5')
$('.docs-content > h2, .docs-content > h3, .docs-content > h4, .docs-content > h5').wrapInner('<div></div>')



/************************************************
* Flavor Switch
*************************************************/  
// Local storage settings
var themeSettings = getThemeSettings();

// Elements
var $app = $('#docs-app');
var $styleLink = $('#theme-style');
var $customizeMenu = $('#customize-menu');


// Color switcher
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
    $styleLink.attr('href', '../../../assets/cupcake/' + themeSettings.themeName + '.css');
  } else {
    $styleLink.attr('href', '../../../assets/cupcake/default.css');
  }

  return $app;
}
  


// Update theme controls based on options
function setThemeControlsState() {
  // set color switcher
  $customizeMenuDropdown.each(function () {
    if ($(this).data('theme') === themeSettings.themeName) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
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




/************************************************
* Clipboard for colors
*************************************************/  
var clipboard = new Clipboard('#clipboardItem');

clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('tooltip', 'Copied!')
    e.clearSelection()
  })



$(document).ready(function () {

  // sidebar nav elements
  var $sidebarNavContainer = $("body")
  var $sidebarNavBody = $(".c-sidenav-body");
  var $sidebarNavListToggle = $(".c-sidenav-menu-link");
  var $sidebarNavLinkName = $(".c-sidenav-menu");
  var $sidebarId = $("#js-nav");
  var $sidebarNavChildList = ".c-sidenav-menu-submenu";
  var $sidebarNavToggle = $(".c-sidenav-toggle, .c-sidenav-collapse");

  // sub menu toggle
  $($sidebarId).find($sidebarNavListToggle).on("click", function () {
    $(this).siblings($sidebarNavChildList).slideToggle(200);
    $(this).parent().toggleClass("c-sidenav-menu-item-active");
  })
  

  $('#docs-menu-toggle').on('click', function(e) {
    e.preventDefault();
    $($sidebarNavBody).slideToggle(200);
  });
  
  // point carets right or down when active
  // $sidebarNavListToggle.on("click", function () {
  //   $(this).find(".fa-caret-right, .fa-caret-down").toggleClass("fa-caret-right fa-caret-down");
  // })

  // open/close toggle
  $sidebarNavToggle.on("click", function () {
    $(this).find(".fa").toggleClass("fa-angle-left fa-angle-right");
    $sidebarNavContainer.toggleClass("c-sidenav-folded");
  })
})

