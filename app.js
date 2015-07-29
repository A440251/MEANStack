var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',

function($scope){
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === "") { 
			return; 
		};
		
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			downvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
	$scope.incrementDownvotes = function(post) {
		post.downvotes += 1;
	};
	$scope.posts = [
		{title: 'post 1', upvotes: 5, downvotes: 0},
		{title: 'post 2', upvotes: 2, downvotes: 0},
		{title: 'post 3', upvotes: 15, downvotes: 0},
		{title: 'post 4', upvotes: 9, downvotes: 0},
		{title: 'post 5', upvotes: 4, downvotes: 0}
	];
	
}

]);

app.factory('posts', [
	function(){
	//service body
	}]);