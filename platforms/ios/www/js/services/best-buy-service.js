angular.module('final-project')

.factory('BestBuyService', function($http) {
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = '22emzeqv7cnsy9bpyfjkxqnp'; //necessary for all requests
    
    return {
        search: function(term){
           return $http.get(bestBuyAPIendPoint + '/products((search='+ term +'))?show=name,sku,salePrice,image&format=json&apiKey='+key); 
        }
        
//        getStores: function(){
//            return
//        }
    };
});