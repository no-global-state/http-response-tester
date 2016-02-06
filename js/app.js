
var app = angular.module('tester', []);

app.controller('bootstrapCtrl', function($scope){
    $scope.parameters = [];
    
    $scope.addParameter = function(){
        // Append empty object
        $scope.parameters.push({});
    }
    
    $scope.sendRequest = function(){
        // Sending a request here
    }
    
});