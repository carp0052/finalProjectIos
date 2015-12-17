angular.module('final-project')

//
//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//  $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('LogsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});