var myApp = angular.module("myApp", []);

myApp.controller('cooController', ['$scope', '$http', function($scope, $http) {
    
/*
    $scope.cadastrarDisciplina = function(){
        var obj = {};
        obj.semestre = "1";
        obj.pos_requisitos = null;
        obj.nome = $scope.nome;
        obj.creditos = $scope.creditos;
        obj.tipo = "Complementar";
        obj.pre_requisitos = null;
        obj.codigo_departamento = '14110000.0';
        obj.codigo = $scope.codigo;
        obj.carga = $scope.carga;
        $scope.enviarMsg([obj]);
    }*/
      $scope.enviarMsg = function(obj){
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
        function(response) { // optional
                window.alert('Deu ruim');
        });
      
      }
      /*
      $scope.register = function (user) {
        var data = {
            "user" : {
                "name": user.name,
                "email": user.email,
                "phone": "+91"+ user.phone,
                "password": user.password,
                "address": user.address
    
            }
    
        };
        $http({
            method: 'POST',
            url: '',
            headers: {'Content-Type': 'application/json'},
            data: data
        }).then(function successCallback(response) {
            if (response.data) {
                sharedServices.set(response.data);
                $location.path('/login');
            }
            console.log(response);
        }, function errorCallback(response) {
            if (response) {
                $scope.message = response.data;
            }
        });
    };
      */
  
        
}]);