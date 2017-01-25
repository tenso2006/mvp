/* angular module for the whole app*/
var app = angular.module('puppyApp', [
  'ngRoute'//,
  // 'puppyApp.adopt',
  // 'puppyApp.exchange'
]);


/* configuring angular app to include all routes and its controller*/
app.config(function ($routeProvider, $httpProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
  .when('/adopt', {
    templateUrl: 'adopt/adopt.html',
    controller: 'adoptCtrl'
  })
  .when('/exchange', {
    templateUrl: 'exchange/exchange.html',
    controller: 'exchangeCtrl'
  })
  .otherwise ({
    redirectTo: '/'
  });
  // .otherwise({
  //   templateUrl: 'index.html',
  //   controller: 'mainCtrl'
  // });

});
// app.controller('mainCtrl', function ($scope) {
//     $scope.data = 'main controller hellow ';
// });



// angular.module('puppyApp')
// .controller('mainCtrl', function ($scope) {
//     $scope.data = 'main controller hellow ';
// });

app.factory('puppyFactory',function($http) {
    return {
        get: function ($scope) {
          return $http({
            method: 'GET',
            url: '/adopt'
          })
          .then(function (res){
            //$scope.puppies = res.data;
            console.log('res.data from get request is ', res.data);
            return res.data;
          });
        },
        post: function (userName, email, image, description) {
          return $http ({
            method: 'POST',
            url: '/exchange',
            data: {
              userName: userName,
              email: email,
              image: image,
              description: description
            }
          });
        }
    };
});
//angular.module('puppyApp.adopt', [])
app.controller('adoptCtrl', function ($scope, puppyFactory) {
    $scope.display = function () {
      puppyFactory.get()
      .then(function (data) {
        //console.log(data);
        $scope.puppies = data;
      });
    };
    $scope.display();
});

app.controller('exchangeCtrl', function ($scope, puppyFactory) {
  $scope.exchange = function (name, email, image, description) {
    puppyFactory.post(name, email, image, description);
  };
});
