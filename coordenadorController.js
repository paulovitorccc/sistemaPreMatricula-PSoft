var myApp = angular.module("myApp", []);

myApp.controller('cooController', ['$scope', '$http', function($scope, $http) {
    

    $scope.cadastrarDisciplina = function(){
        var nome = document.getElementById("nome").value;
        var codigo = document.getElementById("codigo").value;
        var creditos = document.getElementById("creditos").value;
        var carga = document.getElementById("carga").value;
        var obj = {};
        obj.semestre = "1";
        obj.pos_requisitos = null;
        obj.nome = nome;
        obj.creditos = creditos;
        obj.tipo = "Complementar";
        obj.pre_requisitos = null;
        obj.codigo_departamento = '14110000.0';
        obj.codigo = codigo;
        obj.carga = carga;
        $scope.enviarMsg([obj]);
      }
      $scope.enviarMsg = function(info){
        $http({
            url: 'http://localhost:8080/prematricula/disciplinas',
            method: "POST",
            data:JSON.stringify({ "codigo_disciplina": info.codigo,
            "disciplina": info.nome,
            "semestre": info.semestre,
            "pos_Requisitos": info.pos_requisitos,
            "creditos": info.creditos,
            "tipo": info.tipo,
            "pre_Requisitos": info.pre_requisitos,
            "codigo_departamento": info.codigo_departamento,
            "horas": info.carga
                })
               
           
        })
        .then(function(response) {
                window.alert('Disciplina Cadastrada');
        }, 
        function(response) { // optional
                window.alert('Deu ruim');
        });
      
      }
      
  
        
}]);