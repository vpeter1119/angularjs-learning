app.controller('MainController', ['$scope', function ($scope) {    
    $scope.title = 'Floods of the River Nile';
    $scope.parsed = false;
    $scope.fromInput = 100;
    $scope.from = 0;
    $scope.toInput = 200;
    $scope.to = 0;
    $scope.floods = [];
    $scope.errorMessage = null;
    $scope.parse = function() {
        $scope.parsed = false; 
        $scope.errorMessage = null; 
        Papa.parse('data/nile.csv', {
            delimiter: ', ',
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: function (results) {
                allFloods = results.data;
                //validate iput
                var min = 1;
                var max = allFloods.length-1;
                if ($scope.fromInput >= min && $scope.fromInput <= max) {
                    $scope.from = parseInt($scope.fromInput);
                } else {
                    $scope.from = min;
                    $scope.errorMessage = `ERROR: The "From" value must be between ${min} and ${max}!`;
                }
                if ($scope.toInput >= min && $scope.toInput <= max) {
                    $scope.to = parseInt($scope.toInput);
                } else {
                    $scope.to = max;
                    $scope.errorMessage = `ERROR: The "To" value must be between ${min} and ${max}!`;
                }
                if ($scope.from > $scope.to) {
                    $scope.from = $scope.to;
                    $scope.errorMessage = 'ERROR: The "From" value must not be lower than the "To" value!';
                }
                //apply
                floods = allFloods.slice($scope.from-1,$scope.to);
                $scope.floods = floods;
                $scope.parsed = true;
                $scope.$apply();
                console.log($scope);
            }
        });
    };
    $scope.parse();
}]);