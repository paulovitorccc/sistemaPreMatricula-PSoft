var myApp = angular.module("myApp", []);

myApp.controller('accessController', ['$scope', '$http', function($scope, $http) {
    $scope.cadastrar = function(obj){
        var obj = {};
        obj.matricula = $scope.matricula;
        obj.email = $scope.email;
        obj.periodo = $scope.period;

        $http({
            url: 'http://192.168.1.190:8080/prematricula/alunos',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: { "matricula": obj.matricula,
            "email": obj.email,
            "anoIngressado": obj.periodo,
            "disciplinasMatriculadas": []
                }
               
           
        })
        .then(function(response) {
                window.alert('Cadastro Realizado');
                window.location.assign('login.html');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }
   
   
}]);