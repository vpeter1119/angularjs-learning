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
					fill: true,
					backgroundColor: 'rgb(34,87,122)',
					borderColor: 'rgb(34,87,122)',
					color: 'rgb(34,87,122)',
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