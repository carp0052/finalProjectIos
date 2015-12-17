
angular.module('final-project', ['ionic', 'satellizer', 'ngStorage', 'ngCordova'])

.run(function ($ionicPlatform, $ionicModal, $rootScope, LocalStorageService) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $rootScope
    }).then(function (modal) {
        $rootScope.modal = modal;
        
        if(!LocalStorageService.getStorageList('isAuthenticated')){
            $rootScope.modal.show();
        }else{
            LocalStorageService.setStorageList('isAuthenticated', true);
        }
    });
   
    $rootScope.$on('authentication-failed', function(){
        $rootScope.modal.show();
    });
    
    $rootScope.$on('authentication-succeeded', function(){
        $rootScope.modal.hide();
        LocalStorageService.setStorageList('isAuthenticated', true);
    });
    
})

.config(function ($authProvider) {
    $authProvider.facebook({
        clientId: '1728472337386104',
        scope: 'email, public_profile, user_photos, user_friends, user_birthday',
        responseType: 'token'
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.search', {
        url: '/search',
        views: {
            'tab-search': {
                templateUrl: 'templates/tab-search.html',
                controller: 'SearchCtrl'
            }
        }
    })

    .state('tab.store', {
            url: '/store',
            views: {
                'tab-store': {
                    templateUrl: 'templates/tab-store.html',
                    controller: 'StoreCtrl'
                }
            }
        })

    .state('tab.logs', {
        url: '/logs',
        views: {
            'tab-logs': {
                templateUrl: 'templates/tab-logs.html',
                controller: 'LogsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/search');

});