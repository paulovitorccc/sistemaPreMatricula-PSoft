var myApp = angular.module("myApp", []);

myApp.controller('myController', ['$scope', '$http', function($scope, $http) {
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
        var fullUsername = email.split("@");
        var brokenUsername = fullUsername[0].split(".");
        var getPath = "http://localhost:8080/prematricula/alunos/" +
            brokenUsername[0] + "@" + brokenUsername[1];
        $http.get(getPath)
            .then(function (response) {
                return response.data;
            }, function (error) {
                return null;
            });
    };

    $scope.verifyAcess = async function() {
        if($scope.verifyEmailCCC($scope.gmail.email)) {
            var alunoRecovered = $scope.verifyFirstAcess($scope.gmail.email);
            if(alunoRecovered === null) {
                window.location.assign("firstaccess.html");
            } else {
                $scope.aluno = alunoRecovered;
                console.log($scope.aluno);
                window.location.assign("aluno.html");
            }
        } else {
            window.alert("Você deve utilizar uma email do curso de Ciências da Computação para logar!")
        }
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
                            $scope.verifyAcess();
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