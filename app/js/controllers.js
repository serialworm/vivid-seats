'use strict';

var eventsControllers = angular.module('eventsControllers', []);

eventsControllers.controller('EventsListCtrl', ['$scope', function ($scope) {
  VividSeats.eventService.all(function(res){
    $scope.events = res;
    $scope.$apply();
  }, function(res) {
    console.log(res);
  });
}]);
