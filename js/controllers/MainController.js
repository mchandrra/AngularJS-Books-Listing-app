app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Books list.'; 
  $scope.promo = 'Few books you could consider reading.';
  $scope.products = [
    { 
    	name: 'Eragon', 
    	price: 8.92, 
    	pubdate: new Date('2001', '10', '13'), 
    	cover: 'img/eragon_novel.jpg',
    	likes: 0 ,
      dislikes: 0
  	},
  	{ 
    	name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'img/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0 ,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Fairy Tail', 
    	price: 0, 
    	pubdate: new Date('2008', '02', '25'), 
    	cover: 'img/FairyTail.jpg',
    	likes: 0 ,
      dislikes: 0
  	},
    { 
    	name: 'Hunter  Hunter', 
    	price: 0, 
    	pubdate: new Date('2005', '03', '05'), 
    	cover: 'img/Hunter_x_Hunter_cover_-_vol1.jpg',
    	likes: 0 ,
      dislikes: 0
  	},
  	{ 
    	name: 'One Piece', 
    	price: 0, 
    	pubdate: new Date('1997', '06', '19'), 
    	cover: 'img/one_piece.jpg',
    	likes: 0 ,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1;
  };
}]);

