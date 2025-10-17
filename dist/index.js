import { series } from './data.js';
const seriesTbody = document.getElementById('series');
const averageRow = document.getElementById('average');
let totalSeasons = 0;
series.forEach((serie) => {
    totalSeasons += serie.seasons;
    let trElement = document.createElement('tr');
    trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="${serie.webpage}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    seriesTbody.appendChild(trElement);
});
const averageSeasons = totalSeasons / series.length;
averageRow.innerHTML = `Seasons average: ${Math.round(averageSeasons)}`;
