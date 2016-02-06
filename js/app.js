
var app = angular.module('tester', []);

app.controller('bootstrapCtrl', function($scope, $http){
    $scope.parameters = [];
    
    $scope.addParameter = function(){
        // Append empty object
        $scope.parameters.push({});
    }
    
    $scope.sendRequest = function(){
        // Sending a request here
        $http({
            
            method : $scope.method,
            url : $scope.url,
            data : $("form").serialize(),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded' 
            }
            
        }).success(function(data){
            
            console.log(data);
        });
    }
    
});