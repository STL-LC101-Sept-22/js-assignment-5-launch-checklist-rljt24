// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotName = document.querySelector('[name="pilotName"]').value;
        let copilotName = document.querySelector('[name="copilotName"]').value;
        let fuelLevel = document.querySelector('[name="fuelLevel"]').value;
        let cargoMass = document.querySelector('[name="cargoMass"]').value;
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
});

