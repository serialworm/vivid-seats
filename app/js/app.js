'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'eventsControllers']);

eventsApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/app', {
      templateUrl: 'index.html',
      controller: 'EventsListCtrl',
      resolve: {
        eventsApp: function ($q) {
          var defer = $q.defer;
          defer.resolve();
          return defer.promise;
        }
      }
    }
  )
}]);