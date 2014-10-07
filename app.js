(function(){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
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
