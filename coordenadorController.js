var myApp = angular.module("myApp", []);

myApp.controller('cooController', ['$scope', '$http', function($scope, $http) {
    

    $scope.cadastrarDisciplina = function(){
        var nome = document.getElementById("nome").value;
        var codigo = document.getElementById("codigo").value;
        var creditos = document.getElementById("creditos").value;
        var carga = document.getElementById("carga").value;
        var obj = {};
        obj.semestre = null;
        obj.pos_requisitos = [];
        obj.nome = nome;
        obj.creditos = creditos;
        obj.tipo = "";
        obj.pre_requisitos = [];
        obj.codigo_departamento = null;
        obj.codigo = codigo;
        obj.carga = carga;
        $scope.enviarMsg([obj]);
      }
      $scope.enviarMsg = function(info){
        $http({
            url: 'http://localhost:8080/prematricula/disciplinas',
            method: "POST",
            data: {semestre:info.semestre , pos_requisitos: info.pos_requisitos,
                 disciplina: info.nome, 
            creditos: info.creditos, tipo: info.tipo, pre_requisitos: info.pre_requisitos,
             codigo_departamento: info.codigo_departamento,
              codigo_disciplina: info.codigo,
               horas: info.carga}
           
        })
        .then(function(response) {
                window.alert('Disciplina Cadastrada');
        }, 
        function(response) { // optional
                window.alert('Deu ruim');
        });
      
      }
  
        
}]);