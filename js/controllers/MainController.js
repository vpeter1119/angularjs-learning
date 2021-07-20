app.controller('MainController', ['$scope', 'aggregate', function ($scope, aggregate) {
    $scope.title = 'Robert de Niro Movie Ratings';
    $scope.parsed = false;
    $scope.films = [];
    $scope.msg = 0;
    $scope.parse = function() {
        Papa.parse('data/deniro.csv', {
            delimiter: ', ',
            download: true,
            header: true,
            complete: function (results) {  
                films = results.data;
                $scope.films = films;
                $scope.msg = aggregate.length(films);
                $scope.parsed = true;
                $scope.$apply();
            }
        });
    }
}]);