angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    })
    .when('/templates/:templateName', {
      templateUrl: 'templates/template-details.html',
      controller: 'TemplateDetailsCtrl'
    });
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/kittenIdentity.json').success(function(data) {
    $scope.templates = data;
  });

}])

.controller('TemplateDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter', function($scope, $routeParams, $http, $filter) {
  var templateName = $routeParams.templateName;
  $http.get('json/kittenIdentity.json').success(function(data) {
    $scope.template = $filter('filter')(data, function(d) {
      return d.name == templateName;
    })[0];
    $scope.mainImage = $scope.template.picture;

    $scope.setImage = function(image){
      $scope.mainImage = image.name;
    }
  });

}]);
