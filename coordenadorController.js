var myApp = angular.module("myApp", []);

myApp.controller('cooController', ['$scope', '$http', function($scope, $http) {
    
        $scope.alunos = [];

      $scope.cadastrar = function(obj){
        var obj = {};
        obj.nome = $scope.nome;
        obj.creditos = $scope.creditos;
        obj.codigo = $scope.codigo;
        obj.carga = $scope.carga;

        $http({
            url: 'http://localhost:8080/prematricula/disciplinas',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: [{ "codigo_disciplina": obj.codigo,
            "disciplina": obj.nome,
            "semestre": "",
            "pos_Requisitos": null,
            "creditos": obj.creditos,
            "tipo": "",
            "pre_Requisitos": null,
            "codigo_departamento": 14110000.0,
            "horas": obj.carga
                }]
               
           
        })
        .then(function(response) {
                window.alert('Disciplina Cadastrada');
        }, 
        function(response) { 
                window.alert('Deu ruim');
        });
      
      }

    
     
        
}]);