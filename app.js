var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});
	
	$urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === "") { 
			return; 
		};
		
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0,
			downvotes: 0,
			totalvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
		post.totalvotes += 1;
	};
	$scope.incrementDownvotes = function(post) {
		post.downvotes += 1;
		post.totalvotes -= 1;
	};
	$scope.posts = posts.posts;
	
	app.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}]);
	
	
	/*[
		{title: 'The first post', upvotes: 5, downvotes: 0, totalvotes: 5},
		{title: 'Another post', upvotes: 2, downvotes: 0, totalvotes: 2},
		{title: 'The third popular one', upvotes: 15, downvotes: 0, totalvotes: 15},
		{title: 'Post four', upvotes: 9, downvotes: 0, totalvotes: 9},
		{title: 'Post 5', upvotes: 4, downvotes: 0, totalvotes: 4}
	];*/
	
}

]);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	