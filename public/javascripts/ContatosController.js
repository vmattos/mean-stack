function ContatosController($scope, $http) {

	function Contato() {
		this.nome = '';
		this.telefone = '';
	}

	$scope.contato = new Contato();

	$scope.contatos = [];

	$http.get('/contatos').success(function(retorno) {
		$scope.contatos = retorno.contatos;
	});

	$scope.adicionaContato = function() {
		$http.post('/contato', $scope.contato).success(function() {
			$scope.contatos.push($scope.contato);
			$scope.contato = new Contato();
		});
	}
	
}