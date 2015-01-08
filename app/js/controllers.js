'use strict';

var eventsControllers = angular.module('eventsControllers', []);

eventsControllers.controller('EventsListCtrl', ['$scope', function ($scope) {
    VividSeats.eventService.all(function(res){
      $scope.events = res;
      $scope.$apply();
      $scope.class = "active";
    }, function(res) {
      console.log(res);
    });

    $scope.clearFilter = function() {
      $scope.filters = {};
    }

    $scope.getUpcomingEvents = function() {
      $scope.clearFilter();
      $scope.filters.date > new Date();
    }

    $scope.getLocalEvents = function() {
      $scope.clearFilter();
      $scope.filters.venue = {};
      $scope.filters.venue.state = 'IL';
    }

}]);
