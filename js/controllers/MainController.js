app.controller('MainController',['$scope',function($scope){
  $scope.title='Titulo';
  $scope.promo='promo';
  $scope.products = 
    [ 
      { 
        name: 'The Book of Trees', 
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/the-book-of-trees.jpg' ,
        likes:0
      }, 
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg'  ,
        likes:0
      } ,
    
    	{ 
        name: 'Livro1', 
        price: 55, 
        pubdate: new Date('2014', '08', '09'), 
        cover: 'img/program-or-be-programmed.jpg' ,
        likes:0 
      } ,
    	{ 
        name: 'Livro2', 
        price: 22, 
        pubdate: new Date('2012', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg' ,
        likes:0
      } 
    
	  ]
	$scope.plusOne = function(index){
    $scope.products[index].likes +=1;
  }
  
}]);
