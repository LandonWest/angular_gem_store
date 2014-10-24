(function(){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;

        this.setCurrent = function(newGallery){
        this.current = newGallery || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'A very special gem for your viewing pleasure!',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "img/dodecahedron-01-full.jpg",
          thumb: "img/dodecahedron-01-thumb.jpg"
        }
      ],
      reviews: [{
        stars: 5,
        body: "This gem is amazing!",
        author: "fred@example.com",
        createdOn: 1397490980837
      }, {
        stars: 3,
        body: "It really wansn't as shiny as I would have expected for the price.",
        author: "biannca@example.com",
        createdOn: 1397490980837
      }]
    },

    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'So very nice, you\'ll stare at it all day!',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "img/dodecahedron-02-full.jpg",
          thumb: "img/dodecahedron-02-thumb.jpg"
        }
      ],
      reviews: [{
        stars: 4,
        body: "I am really happy with this purchase, thak you!",
        author: "anniew@example.com",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "How can you guys sleep at night, peddling this crap?",
        author: "hater_j@example.com",
        createdOn: 1397490980837
      }]
    }
  ];

})();
