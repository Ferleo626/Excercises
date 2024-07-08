

const printMessage = (message) => {
    console.log(message);
};

const createMultiplication = (number1, number2) => {
    return number1 * number2;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array.map(num => createMultiplication(num, 2));
console.log(newArray);

const getTop10AlcoholicBeers = (beers) => {
    return beers.sort((a, b) => b.abv - a.abv).slice(0, 10);
};

const getTop10LeastBitterBeers = (beers) => {
    return beers.sort((a, b) => a.ibu - b.ibu).slice(0, 10);
};

const getBeerByName = (beers, name) => {
    return beers.find(beer => beer.name === name);
};

const getBeerByIbu = (beers, ibu) => {
    const beer = beers.find(beer => beer.ibu === ibu);
    if (beer) {
        return beer;
    } else {
        console.log(`There is no beer with an ibu of ${ibu}.`);
    }
};

const getBeerPositionByName = (beers, name) => {
    const index = beers.findIndex(beer => beer.name === name);
    if (index !== -1) {
        return index;
    } else {
        console.log(`${name} does not exist.`);
    }
};

const getBeersBelowAlcoholLevel = (beers, maxAbv) => {
    return beers.filter(beer => beer.abv <= maxAbv).map(beer => ({
        name: beer.name,
        alcohol: beer.abv,
        bitterness: beer.ibu
    }));
};

const sortBeersByProperty = (beers, property, ascending) => {
    return beers.sort((a, b) => {
        if (ascending) {
            return a[property] - b[property];
        } else {
            return b[property] - a[property];
        }
    }).slice(0, 10);
};

const renderBeerTable = (beers, elementId) => {
    const tableElement = document.getElementById(elementId);
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ABV</th>
                    <th>IBU</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    beers.forEach(beer => {
        tableHTML += `
            <tr>
                <td>${beer.name}</td>
                <td>${beer.abv}</td>
                <td>${beer.ibu}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    tableElement.innerHTML = tableHTML;
};


document.addEventListener("DOMContentLoaded", () => {
    renderBeerTable(beers, 'beerTableContainer');
});
