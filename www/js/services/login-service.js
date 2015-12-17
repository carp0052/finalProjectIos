angular.module('final-project')

.factory('FacebookService', function ($auth, $http, $ionicPopup) {
    //Might use a resource here that returns a JSON array

    //Some fake testing data
    //where do I want to connect
    var facebookApiURL = 'https://graph.facebook.com/v2.5';

    return {
        me: function () {
            //if I'm allowed to do the request
            if ($auth.isAuthenticated()) {
                return $http.get(facebookApiURL + '/me', {
                    params: {
                        access_token: $auth.getToken(),
                        fields: 'id, name, link, gender, birthday, bio, location, website, picture, relationship_status',
                        format: 'json'
                    }
                });
            } else {
                //if I am not allowed to do the request
                $ionicPopup.alert({
                    title: 'Error',
                    content: 'User Not Authorized'
                });
            }
        }
    }; //end of return
})//end FacebookService;
