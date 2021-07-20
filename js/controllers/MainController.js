app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Robert de Niro Movie Ratings';
    $scope.parsed = false;
    $scope.films = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.parse = function() {
        Papa.parse('data/deniro.csv', {
            delimiter: ', ',
            download: true,
            header: true,
            complete: function (results) {  
                films = results.data;
                $scope.films = films;
                $scope.labels = films.map(film => parseInt(film.Year));
                $scope.data = films.map(film => parseInt(film.Score));
                $scope.parsed = true;
                $scope.$apply();
                console.log($scope.labels);
                console.log($scope.data);
            }
        });
    }
}]);