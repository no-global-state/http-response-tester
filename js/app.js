
var app = angular.module('tester', []);

app.controller('bootstrapCtrl', function($scope, $http){
    $scope.parameters = [];

    $scope.addParameter = function(){
        // Append empty object
        $scope.parameters.push({
            name: null,
            value: null
        });
    }
    
    $scope.removeParameter = function(index){
        $scope.parameters.splice(index, 1);
    }

    $scope.sendRequest = function(){
        var data = $.param($scope.parameters);

        // Sending a request here
        $http({
            method : $scope.method,
            url : $scope.url,
            data : data,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded' 
            }
            
        }).success(function(data){
            console.log(data);
        });
    }
    
});