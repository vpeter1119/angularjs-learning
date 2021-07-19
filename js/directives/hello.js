app.directive('hello', function () {
    return {
        restrict: 'E',
        scope: {
            title: '='
        },
        templateUrl: 'js/directives/hello.html'
    };
});