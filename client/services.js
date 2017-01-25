//angular.module('puppyFactoryModule', [])
//   app.factory('puppyFactory',function($http) {
//     return {
//         get: function ($scope) {
//           return $http({
//             method: 'GET',
//             url: '/adopt'
//           })
//           .then(function (res){
//             $scope.puppy = res.data;
//             console.log('res.data from get request is ', res.data);
//             return res;
//           });
//         },
//         post: function (userName, email, image, description) {
//           return $http ({
//             method: 'POST',
//             url: '/exchange',
//             data: {
//               userName: userName,
//               email: email,
//               image: image,
//               description: description
//             }
//           });
//         }
//     };
// });