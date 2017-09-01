"use strict";
app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
  console.log('Yo userCtrl is live');

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () =>{
    console.log('you cliced on register');
    userFactory.register({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then((userData)=>{
      console.log('User controller newUser', userData);
      $scope.logIn();
    }, (error)=>{
      console.log('error creating new user', error);  
    });
  };

  $scope.logIn = () => { //USE AT LEAST SIX CHARACTERS FOR PASSWORD
    userFactory.logIn($scope.account)
    .then(()=>{
      //Option ONE
      // $location.path("/task-list");
      //need to update the view
      //$scope.$apply();
      //Option TWO
      $window.location.href = "#!/task-list";
    });
  };


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
      let errorMessage = error.message;
      console.log('errors', errorCode, errorMessage);
    });
  };


});