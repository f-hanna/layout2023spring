
const atkMoves = ["Use Dagger" +  '<img class="small-icon" src="images/dagger-icon.png" alt="dagger"></img>' , "Use Sword" +  '<img class="small-icon" src="images/sword-icon.png" alt="dagger"></img>'];
const skillMoves = ["Lion Dance SP: 4", "Moonlight Waltz SP: 7", "Peacock Strut SP: 4", "Mole Dance SP: 4", "Night Ode SP: 10", "Panther Dance SP: 4", "Bewildering Grace SP: 25", "Sealticge's Seduction SP: 30"];



function skillDetail(e) {

    var parentDiv = document.getElementById("player-info-detail")
    var parentWrapper = parentDiv.parentNode;
    e = e || window.event;
    


    if (parentDiv.style.display === "none") {
        parentDiv.style.display = "block";
        parentWrapper.insertBefore(parentDiv, parentWrapper.firstChild);
        //check which option was clicked
        let moveArr = [];
        if (e.id == "atk-option") {
            moveArr = atkMoves;


        }
        else if (e.id == "skill-option") {
            moveArr = skillMoves;
        }
        else {
            moveArr = [];
        }

        parentDiv.innerHTML = "";
        //parentDiv.style.display = block;

        for (i = 0; i < moveArr.length; i++) {
            $('#player-info-detail').append('<div class="player-options">' + moveArr[i] + '</div>');
            //console.log(option)
        }

    } else {
        parentDiv.style.display = "none";
    }


    //alert("clicked " + e.id);



}

function primroseBar(e) {
   // alert("touched prim")

    document
        .getElementById('primrose-hp')
        .classList
        .toggle('low')
}