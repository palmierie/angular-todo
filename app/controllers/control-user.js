"use strict";
app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
  console.log('Yo userCtrl is live');
  
  $scope.loginGoogle = () => {
    console.log('you clicked google login');
    
    userFactory.authWithProvider()
    .then((result)=>{
      let user = result.user.uid;
      $location.path("/task-list");
      $scope.apply();
    })
    .catch((error)=>{
      console.log('error with google login');
      let errorCode = error.code;
      let errorMessage = errorMessage;
      console.log('errors', errorCode, errorMessage);
    });
  };


});