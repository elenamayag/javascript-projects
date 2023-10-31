// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    //buttons
    const takeoffButton = document.getElementById('takeoff'); 
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    // areas
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    //image
    const rocket = document.getElementById('rocket');


    takeoffButton.addEventListener("click", function() {
        let shouldTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (shouldTakeoff) {
            flightStatus.innerHTML = "Space shuttle ready for takeoff. "
            shuttleBackground.style.backgroundColor = "blue"; 
            altitude = 10000;
            spaceShuttleHeight.innerHTML = "10000";
        }
    });


    landButton.addEventListener("click", function() {
        alert("Landing gear engaged, the shuttle is landing."); 
        flightStatus.innerHTML = "The shuttle has landed. "
        shuttleBackground.style.backgroundColor = "green"; 
        altitude = 0;
        spaceShuttleHeight.innerHTML = "0";
    });


    abortButton.addEventListener("click", function (){
        let shouldAbort = confirm("Confirm that you want to abort the mission.");

        if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted. "
            shuttleBackground.style.backgroundColor = "blue"; 
            altitude = 0;
            spaceShuttleHeight.innerHTML = "0";
        }
    });

    document.addEventListener("click", function(event) {
        if (event.target.id === "left") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up") {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down") {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

});