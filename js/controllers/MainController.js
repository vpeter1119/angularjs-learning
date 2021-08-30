app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Floods of the River Nile';
    $scope.parsed = false;
    $scope.floods = [];
    $scope.parse = function() {
        Papa.parse('data/nile.csv', {
            delimiter: ', ',
            escapeChar: '  ',
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: function (results) {
                floods = results.data;
                console.log(floods);
                $scope.floods = floods;
                $scope.parsed = true;
                $scope.$apply();
            }
        });
    }
}]);