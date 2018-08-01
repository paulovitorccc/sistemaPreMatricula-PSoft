var myApp = angular.module("myApp", []);

myApp.controller('alunoController', ['$scope', '$http', function($scope, $http, Scope) {
  
    $scope.disciplinas = []; 
    $scope.sendPreMatricula = [];

    $scope.getRequest = function(){
        $http.get("http://analytics.ufcg.edu.br/pre/ciencia_da_computacao_i_cg/disciplinas")
        .then(function(response){
            $scope.disciplinas = response.data;
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                    $scope.disciplinas[index] = element;
                
                
            };
            
        });
    }
    $scope.cadastrarDisc = function(array){
        var obj = {};
        obj.matricula = $scope.matricula;
        obj.disciplinas = array;

        $http({
            url: 'http://localhost:8080/prematricula/alunos/' + obj.matricula,
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: { 
            "codigo_disciplina": obj.matricula,
            "disciplina": obj.disciplinas,
                }
               
           
        })
        .then(function(response) {
                window.alert('Pre Matrícula Realizada');
        }, 
        function(response) { // optional
                window.alert('Deu ruim');
        });
      
      }



   
    
   
}]);