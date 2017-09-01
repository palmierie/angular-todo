"use strict";

app.controller("navCtrl", function ($scope, $window, userFactory) {

  $scope.logout = () => {
        userFactory.logOut();
      };

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in?", user);
      console.log("logged in t-f", $scope.isLoggedIn );
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      console.log("user logged in?", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });
  
    //when first loaded, make sure no one is logged in
  // // console.log("what is this?", userFactory.isAuthenticated());
  // if (userFactory.isAuthenticated()) 
  //   logout();
  
  // console.log("app isAuth", isAuth());
  //   if (isAuth()){
  //     console.log("app isAuth", isAuth());
  //   }

});