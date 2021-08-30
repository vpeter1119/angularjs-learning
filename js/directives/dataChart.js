app.directive('floodchart', function () {
    return {
        restrict: 'E',
        scope: {
            floods: '='
        },
        templateUrl: 'js/directives/dataChart.html',
        link: function (scope, element, attrs) {
			const labels = floods.map(flood => parseInt(flood.Year));
			const data = {
				labels: labels,
				datasets: [{
					label: 'Maximum Height',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: floods.map(flood => parseInt(flood.Flood)),
				}]
			};
			const config = {
				type: 'bar',
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