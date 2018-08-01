var myApp = angular.module("myApp", []);

myApp.controller('alunoController', ['$scope', '$http', function($scope, $http) {
  
    $scope.disciplinas = []; 
    $scope.sendPreMatricula = [];

    $scope.getRequest = function(){
        $http.get("http://localhost:8080/prematricula/disciplinas")
        .then(function(response){
            $scope.disciplinas = response.data;
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                    $scope.disciplinas[index] = element.semestre + " " + element.disciplina + " " + element.tipo + " " + element.creditos;
                
                
            };
        });
    }
    /*
    $scope.postRequest = function() {
        $http({
            url: '...',
            method: "POST",
            data: { 'user' : $scope.sendPreMatricula }
        })
        .then(function(response) {
                
        });
    }
   */


   
    
   
}]);