angular.module('final-project')

.controller('SearchCtrl', function($scope, $log, BestBuyService, LocalStorageService, $rootScope) {
    $scope.data = {
        search: ''
    }
    
    //collection - starts empty
    $scope.products = [];
    
    //action called by search button
    $scope.search = function(term){
      if(term){
          BestBuyService.search(term)
          .success(function(data){
              
              $scope.products = data.products;
              
              $log.info(data);
          })
          .error(function(error){
              $log.error('Best Buy API Search Error!');
              //store in local storage
          })
      }else{
          $log.error('Search term was empty');
          //need to save in local storage
      }
        
    };
    
    $scope.logout = function () {

        LocalStorageService.setStorageList('isAuthenticated', false);
        $rootScope.modal.show();

    };
});