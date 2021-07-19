app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Szia Uram!';
    $scope.result = [];
    var scope = this.$scope;
    var papaConfig = {
        delimiter: ',',
        download: true,
        header: true,
        complete: function (results) {
            console.log(results.data);
            //$scope.result = results.data;
            scope.result = ["hello world"];
        } 
    }
    $scope.parse = function() { 
        Papa.parse('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/CAN.csv', papaConfig);
    }
}]);