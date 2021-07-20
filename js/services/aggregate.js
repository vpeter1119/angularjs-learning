app.factory('aggregate', [function (data) {
    var aggregateService = {};
    aggregateService.length = function (data) {
        console.log(data);
        return data.length;
    };
    return aggregateService;
}]);