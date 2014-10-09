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
      ]
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
      ]
    }
  ];

})();
