// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ''){
        return "Empty";
    } else if(isNaN(Number(testInput))){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let arr = [pilot, copilot, fuelLevel, cargoLevel];
    let arrResults = [];
    for(let i=0; i<arr.length; i++){
        arrResults.push(validateInput(arr[i]));
    }
    for(let j=0; j<arrResults.length; j++){
        if(arrResults[j] === 'Empty'){
            alert("All entries must be filled out");
        }
        if(j === 0 || j === 1){
            if(arrResults[j] === "Is a Number"){
                alert("Enter valid name for pilot and copilot");
            }
        } else {
            if(arrResults[j] === "Not a Number"){
                alert("Enter valid number for Fuel Level and Cargo Leves");
            }
        }
    }

    let fuelText = '';
    let cargoText = '';

    if(Number(fuelLevel) < 10000) {
        fuelText = 'fuel level too low for launch';
    } else {
        fuelText = 'enough fuel for launch';
    }

    if(Number(cargoLevel) >= 10000) {
        cargoText = 'cargo is too heavy for launch';
    } else {
        cargoText = 'cargo is light enough for launch';
    }

    if(fuelText === 'fuel level too low for launch' || cargoText === 'cargo is too heavy for launch') {
        document.getElementById('launchStatus').style.color = 'red';
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById('faultyItems').style.visibility = 'visible';
    } else {
        document.getElementById('launchStatus').style.color = 'green';
        document.getElementById('launchStatus').innerHTML = 'Shuttle Ready for Launch';
        document.getElementById('faultyItems').style.visibility = 'visible';
    }

    list.innerHTML = `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is Ready for Launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is Ready for Launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">${fuelText}</li>
                <li id="cargoStatus" data-testid="cargoStatus">${cargoText}</li>
            </ol>`;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    }).then(function(json){
        return json;
    });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.round(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
