import { series } from './data.js';
import Serie from './serie.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const averageRow: HTMLElement = document.getElementById('average')!;

let totalSeasons: number = 0;


series.forEach((serie: Serie) => {
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

const averageSeasons: number = totalSeasons / series.length;
averageRow.innerHTML = `Seasons average: ${Math.round(averageSeasons)}`;