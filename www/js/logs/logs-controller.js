angular.module('final-project')

.controller('LogsCtrl', function($scope, LocalStorageService, LogsService, $localStorage) {
    
    $scope.items = [LogsService.get({date: '', name: '', reason:''})];
    
});