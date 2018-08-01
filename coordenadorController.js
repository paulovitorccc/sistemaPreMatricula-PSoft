var myApp = angular.module("myApp", []);

myApp.controller('coordenadorController', ['$scope', '$http', function($scope, $http) {
    

    $scope.cadastrarDisciplina = function(){
        var nome = document.getElementById("nome").value;
        var msg = document.getElementById("codigo").value;
        var author = document.getElementById("creditos").value;
        var id = document.getElementById("carga").value;
        var obj = {};
        obj.nome = nome;
        obj.codigo = codigo;
        obj.creditos = creditos;
        obj.carga = carga;
        enviarMsg([obj]);
      }
      function enviarMsg(mensagem){
        fetch('',{
          method: "post" ,
          body: JSON.stringify()
        })
      
      }
  
        

   
}]);