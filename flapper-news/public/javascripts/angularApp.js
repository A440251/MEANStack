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
	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
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
				totalvotes: 0,
				comments: [
					{author: 'Joe', body: 'Cool post from Joe!', upvotes: 0},
					(author: 'Tom Yorke', body: 'Everything in its right place', upvotes: 0}
				]
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
	}
]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){	
	$scope.addComment = function(){
		if($scope.body === '') { return; }
		$scope.posts.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	
	$scope.post = posts.posts[$stateParams.id];
	
	
}]);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	