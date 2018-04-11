var myApp = angular.module("myApp",[]);

myApp.controller("cartController", ["$scope", function($scope){

	$scope.cart = [

	{
		id:1000,
		name:'iphone5s',
		quantity:3,
		price:4300
	},

	{
		id:3300,
		name:'iphone5',
		quantity:30,
		price:3300
	},

	{
		id:232,
		name:'imac',
		quantity:4,
		price:23000
	},
	{
		id:1001,
		name:'ipad',
		quantity:5,
		price:6900
	},

	];

	$scope.totalPrice = function(){
		var total = 0; 
		angular.forEach($scope.cart, function(item){
			total += item.quantity * item.price;
		});
		return total;
	}

	$scope.totalQuantity = function(){
		var total = 0; 
		angular.forEach($scope.cart, function(item){
			total += parseInt(item.quantity);
		});
		return total;
	}

	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart, function(item, key){
			if(item.id === id){
				index = key;
				return;
			}

		});

		return index;

	}

	$scope.remove = function(id){
		//alert(id);

		var index = findIndex(id);
		

		if(index !==-1){
			$scope.cart.splice(index,1);
		}
	}


	$scope.add =function(id){

		var index = findIndex(id);

		if(index!=-1){
			$scope.cart[index].quantity++;
		}

	}



	$scope.reduce =function(id){

		var index = findIndex(id);

		if(index!=-1){
			var item = $scope.cart[index];
			if(item.quantity>1){
				item.quantity--;

			}else{
				var returnKey = confirm("shi fou yichu gai shangpin");
				if(returnKey){
					$scope.remove(id);
				}
			}
			
		}

	}

}]);