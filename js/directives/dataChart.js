app.directive('charty', function () {
    return {
        restrict: 'E',
        scope: {
            films: '='
        },
        templateUrl: 'js/directives/dataChart.html',
        link: function (scope, element, attrs) {
			const labels = films.map(film => parseInt(film.Year));
			const data = {
				labels: labels,
				datasets: [{
					label: 'RottenTomatoes Rating',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: films.map(film => parseInt(film.Score)),
				}]
			};
			const config = {
				type: 'line',
				data,
				options: {}
			};
			var myChart = new Chart(
				document.getElementById('myChart'),
				config
			);
        }
    };
});