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
    trElement.id = `serie-row-${serie.id}`;
    seriesTbody.appendChild(trElement);
});
series.forEach((serie) => {
    const rowElement = document.getElementById(`serie-row-${serie.id}`);
    rowElement.addEventListener('click', () => {
        const detailElement = document.getElementById('serie-detail');
        detailElement.innerHTML =
            `
            <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${serie.poster}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${serie.name}</h5>
                        <p class="card-text"><strong>Channel:</strong> ${serie.channel}</p>
                        <p class="card-text"><strong>Seasons:</strong> ${serie.seasons}</p>
                        <p class="card-text">${serie.description}</p>
                        <a href="${serie.webpage}" target="_blank" class="btn btn-primary">Visit webpage</a>
                    </div>
                </div>
        `;
    });
});
const averageSeasons = totalSeasons / series.length;
averageRow.innerHTML = `Seasons average: ${Math.round(averageSeasons)}`;
