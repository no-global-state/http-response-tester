
var app = angular.module('tester', []);

app.constant('maxAllowedParamCount', 5);

app.controller('bootstrapCtrl', function($scope, $http, maxAllowedParamCount){
    $scope.response = null;
    $scope.parameters = [];
    
    $scope.isLimitExceeded = function(){
        return $scope.parameters.length >= maxAllowedParamCount;
    }

    $scope.addParameter = function(){
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

        // Send a request
        $http({
            method : $scope.method,
            url : $scope.url,
            data : data,
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            
        }).then(function successCallback(response){
            $scope.response = response.data;
            
        }, function errorCallback(response){
            var message = response.status + ' : ' + response.statusText;
            
            // Temporary
            console.log(message);
        });
    }
    
});