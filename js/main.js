/*!
 * Copyright (c) 2019 Eclipse Foundation, Inc.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 * 
 * SPDX-License-Identifier: EPL-2.0
*/

(function($, document) {
  
  $('.matchheight-item').matchHeight();
  feather.replace();
  
  $(".solstice-slider").each(function() {
    var $t = $(this);
    $t.owlCarousel({
      responsive: {
        0: {
          items: $t.data('slider-xs-count') || 1
        },
        768: {
          items: $t.data('slider-sm-count') || 1
        },
        992: {
          items: $t.data('slider-md-count') || 1
        },
        1170: {
          items: $t.data('slider-lg-count') || 1
        }
      },
      pagination: true,
      responsiveRefreshRate: 100
    });
  });

  $.ajax({
    type: "GET",
    url: "/js/testimonials.json",
    dataType: "json",
    cache: false,
    success: function(data) {
      var items = data.items;
      var randomItem = items[Math.floor(Math.random()*items.length)];
      var name = randomItem.name;
      var image = randomItem.image;
      var text = randomItem.text;
      var title = randomItem.title;
      var company = randomItem.company;
      
      console.log(randomItem);
      
      $('.featured-section-testimonials-single-image').html('<img class="img-responsive" src="'+ image +'" alt="'+ name +'">');
      $('.featured-section-testimonials-single-text').html('<p><em>'+ text +'</em></p><p><em>- '+ name +', '+ title +' of '+ company +'</em></p>');
    }
  });
   
})(jQuery, document); 

