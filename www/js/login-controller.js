angular.module('final-project')

.controller('LoginCtlr', function($scope, $rootScope, LocalStorageService, LogsService, $auth, $ionicPopup) {
  

        $scope.loginData = {
            username: '',
            password: ''
        };

        $scope.checkForFailure = false;

        $scope.doLogin = function () {
            if (validateUserName($scope.loginData.username) && validatePassword($scope.loginData.password)) {
                $rootScope.$broadcast('authentication-succeeded');
                $scope.loginData.username = "";
                $scope.loginData.password = "";
            } else {
                $scope.checkForFailure = true;
                LogsService.add({
                    date: new Date(),
                    name: 'Authentication Failed',
                    reason: 'Validation Fail'
                });
            }
        };

        function validateUserName(userName) {
            return (userName && userName.toLowerCase() !== 'guest')
        };

        function validatePassword(password) {
            return (password && password.length > 4);
        };
    
    $scope.authenticate = function (provider) {
                //$auth comes from Satellizer, need to inject into controller
                $auth.authenticate(provider)
                    .then(function () {
                    
                        $ionicPopup.alert({
                            title: 'Success',
                            content: 'You have successfully logged in!'
                        })
                        $rootScope.modal.hide();
                    })
                    .catch(function (response) {
                        $ionicPopup.alert({
                            title: 'Error',
                            content: response.data ? response.data || response.data.message : response
                        })
                    });
            };
        
            $scope.isAuthenticated = function () {
                return $auth.isAuthenticated();
            };
        
            $scope.logout = function () {
                return $auth.logout();
            };
    
    

});