var myApp = angular.module("myApp", []);

myApp.controller('myController', ['$scope', '$http', function($scope, $http, Scope) {
    $scope.gmail = {
        username: "",
        email: ""
    };
    $scope.aluno = {}

    $scope.verifyEmailCCC = function(email) {
        const regExp = /@ccc.ufcg.edu.br/;
        return regExp.test(email);
    };

    $scope.verifyFirstAcess = function(email) {
        var bool = false;
        var getPath = "http://localhost:8080/prematricula/alunos"
        $http.get(getPath)
            .then(function (response) {
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    if (element.email === email) {
                        bool = true;
                    }
                    
                }
                if (bool) {
                    window.location.assign("aluno.html");
                }
                else{
                    window.location.assign("firstaccess.html");
                }
            });
    };

    $scope.onGoogleLogin = function() {
        console.log('inicio do google api');
        var params = {
            'clientid': '969164513108-di18quvdevj9da2na1cdaodomhre0c2a.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': function(result) {
                if(result['status']['signed_in']) {
                    var request = gapi.client.plus.people.get(
                        {
                            'userId': 'me'
                        }
                    );
                    request.execute(function(resp) {
                        $scope.$apply(function() {
                            $scope.gmail.username = resp.displayName;
                            $scope.gmail.email = resp.emails[0].value;
                            if (resp.emails[0].value === "joao.arthur@computacao.ufcg.edu.br") {
                                window.location.assign("cadastroDisciplina.html");
                            }else{
                                $scope.verifyFirstAcess(resp.emails[0].value);
                            }
                            
                        });
                    });
                }
            },
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };

        gapi.auth.signIn(params);


    };
   
}]);