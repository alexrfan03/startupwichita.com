(function(angular) {
    'use strict';

    //Setting up route
    var RouteProvider = [
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider
                .state('all articles', {
                    url: '/events',
                    templateUrl: 'views/events/list.html'
                })
                .state('create article', {
                    url: '/events/create',
                    templateUrl: 'views/events/create.html'
                })
                .state('edit article', {
                    url: '/events/:eventId/edit',
                    templateUrl: 'views/events/edit.html'
                })
                .state('article by id', {
                    url: '/events/:eventId',
                    templateUrl: 'views/events/view.html'
                })
                .state('home', {
                    url: '/',
                    templateUrl: 'views/index.html'
                });
        }
    ];

    //Setting HTML5 Location Mode
    var LocationProvider = [
        '$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ];

    angular.module('startupwichita')
        .config(RouteProvider)
        .config(LocationProvider);
})(window.angular);
