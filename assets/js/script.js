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
$('.main-demo-content [href="#"]').click(function (e) {
  e.preventDefault()
})
 
$('[href=""]').click(function (e) {
  e.preventDefault()
})
 

/************************************************
* Docs Highlight
*************************************************/  
$('html').on('click.ui.btn', '#highlight-toggle', function(e) {
  e.preventDefault();
  $(this).find(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  $(this).prev().toggleClass("show-me");
});


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
    $('.c-sidenav-body').slideToggle(200);
  });

}(jQuery));



// Add prism highlighting to code
  $( window ).bind( "create.example", function( e ) {

    $( ".highlight" ).find( "code" ).addClass( "language-markup" );
    Prism.highlightAll();


      var $target = $( e.target );
      
			var $snippet = $target.find( ".docs-snippet" );
			var html = $snippet.html();
			var $link = $( "<button href='#' class='c-btn c-btn-xs c-btn-primary doc-btn' data-tooltip='Copy To Clipboard' data-tooltip-conf='right square'>Copy</button>" );
			// place the link after the snippet but before the code
			$( "pre.language-markup" ).after( $link );
			// set of up the clipboard to use the html
			new Clipboard($link[0], {
				text: function(){
					return html;
				}
      });
    
			// disable the normal link click behavior
			$link.bind( "click", function(event ){ event.preventDefault() });

  });


