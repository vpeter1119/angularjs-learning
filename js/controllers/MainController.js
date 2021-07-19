app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Szia Uram!';
    $scope.result = [];
    $scope.parse = function() {
        Papa.parse('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/CAN.csv', {
            delimiter: ',',
            download: true,
            header: true,
            complete: function (results) {
                result = results.data;
                console.log(result);
                $scope.result = result;
                $scope.$apply();
            }
        });
    }
}]);