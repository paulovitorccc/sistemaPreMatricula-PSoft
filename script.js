var sysLogin = angular.module("sysLogin",[]);

sysLogin.controller('loginController', ['$scope', function($scope) {
    $scope.gmail = {
        username: "",
        email: ""
    };

    $scope.onGoogleLogin = function() {
        var params = {
            'clientid': '560484290696-j89t9e5apdb9ef2tcu2l7knoj0hhhbn5.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': function(result) {
                if(result['status']['signed_in']) {
                    var request = gapi.client.plus.people.get(
                        {
                            'userId': ''
                        }
                    );
                    request.execute(function(resp){
                        $scope.$apply(function(){
                            $scope.gmail.username = resp.displayName;
                             $scope.gmail.email = resp.emails[0].value;
                        });
                    });
                }

            },
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
         };

         gapi.auth.signIn(params);
         
    }
    
}])