(function(){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('GalleryController', function(){
  	this.current = 0;
    this.setCurrent = function(newGallery){
    	this.current = newGallery || 0;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
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
