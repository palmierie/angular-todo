"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

app.controller("listCtrl", function($scope, todoFactory, userFactory){
    
    $scope.tasks =[];
    
    const showAllTasks = function(){
        todoFactory.getAllTasks()
        .then((tasks)=>{
            console.log('showAllTasks from promise',tasks);
            $scope.tasks = tasks;        
        });
    };

    
    $scope.deleteTask = function(id){
        todoFactory.deleteTask(id)
        .then( ()=>{
            showAllTasks();
        });
    };

    // ng-model flips the isCompleted key value and updates DOM before receiving data from database.  Hence why obj.isCompleted is "obj.isCompleted ? true: false" instead of "obj.isCompleted ? false: true"
    $scope.toggleDoneTask = function(obj){
        let status = obj.isCompleted ? true: false;
        let tmpObj = {isCompleted: status};
        todoFactory.editTask(obj.id, tmpObj)
        .then( ()=>{
            console.log('then is updated');
            showAllTasks();
        });
    };

    showAllTasks();

});