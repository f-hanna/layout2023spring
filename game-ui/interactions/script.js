
const atkMoves = ["Use Dagger", "Use Sword"];
const skillMoves = ["Lion Dance", "Moonlight Waltz", "Peacock Strut", "Mole Dance", "Night Ode", "Panther Dance", "Bewildering Grace", "Sealticge's Seduction"];

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