(() => {
	const chartDays = document.querySelector('.chart__days');
	const currentDayName = (new Date()).toLocaleString('default', { weekday: 'short' }).toLowerCase();

	fetch('./data.json')
		.then(response => response.json())
		.then(data => {
			data.forEach(item => {
				const barAmount = document.createElement('span'); {
					barAmount.setAttribute('class', 'bar__amount');
					barAmount.innerHTML = `$${item.amount}`;
				}
				const bar = document.createElement('div'); {
					bar.setAttribute('class', `bar bar--${item.day}`);
					bar.style.height = `calc(${item.amount}px / 0.349)`;
					bar.appendChild(barAmount);
				}
				const chartDay = document.createElement('div'); {
					chartDay.setAttribute('class', `chart__day ${item.day == currentDayName ? 'current' : ''}`);
					chartDay.appendChild(bar);
					chartDay.innerHTML += `${item.day}`;
				}
				chartDays.appendChild(chartDay);
			});
		});
})();