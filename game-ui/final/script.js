
const atkMoves = ["Use Dagger" + '<img class="small-icon" src="images/dagger-icon.png" alt="dagger"></img>', "Use Sword" + '<img class="small-icon" src="images/sword-icon.png" alt="dagger"></img>'];
const skillMoves = ["Lion Dance SP: 4", "Moonlight Waltz SP: 7" + '<img class="small-icon" src="images/dark-icon.png" alt=""></img>', "Peacock Strut SP: 4", "Mole Dance SP: 4", "Night Ode SP: 10" + '<img class="small-icon" src="images/dark-icon.png" alt=""></img>', "Panther Dance SP: 4", "Bewildering Grace SP: 25", "Sealticge's Seduction SP: 30"];
const skillDescription = [
    "Augment a single ally's physical attacks for 2 turns.",
    "Deal heavy dark damage to a single foe.",
    "Augment a single ally's elemental attacks for 2 turns.",
    "Augment a single ally's physical defense for 2 turns.",
    "Deal dark damage to all foes.",
    "Augment a single ally's speed for 2 turns.",
    "Cause a curious effect to occur one time.",
    "[Divine Skill] For 3 turns, skills performed by a single ally that usually target one foe* will affect all foes instead (this will not affect divine skills)."

]



function skillDetail(e) {

    var parentDiv = document.getElementById("player-info-detail")
    var parentWrapper = parentDiv.parentNode;
    e = e || window.event;

    if (parentDiv.style.display === "none") {
        parentDiv.style.display = "block";
        // parentWrapper.insertBefore(parentDiv, parentWrapper.firstChild);
        //check which option was clicked
        let moveArr = [];
        if (e.id == "atk-option") {
            moveArr = atkMoves;
            parentDiv.innerHTML = "";
            //parentDiv.style.display = block;

            for (i = 0; i < moveArr.length; i++) {
                $('#player-info-detail').append('<div class="player-options" data-hover="Does not cost SP">' + moveArr[i] + '</div>');
                //console.log(option)
            }
        }
        else if (e.id == "skill-option") {
            moveArr = skillMoves;
            parentDiv.innerHTML = "";
            //parentDiv.style.display = block;

            for (i = 0; i < moveArr.length; i++) {
                $('#player-info-detail').append('<div class="player-options" data-hover="' + skillDescription[i] + '">' + moveArr[i] + '</div>');
                //console.log(option)
            }
        }
        else {
            moveArr = [];
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

function opheliaPress(e) {

    document
        .getElementById('ophelia-bar')
        .classList
        .toggle('character-bg')

    document
        .getElementById('primrose-bar')
        .classList
        .toggle('character-bg')



    document.getElementById("player-img").src = "images/ophelia.png"

    document.getElementById("background").src = "images/bg-with-people-2.png"



}

var shield = document.getElementById("shield-img");
setInterval(updatePoints, 4000);

let points = 5;

function updatePoints() {

    points--;

    if (points == 0) {
        $('#shield-img h3').css('visibility', 'hidden');
        $('#shield-img').css('visibility', 'hidden');
    }


    $("#shield-img h3").text(points);
}

function nextTurn() {
    var turnGroup = document.getElementById("turn-wrapper")
    var turns = turnGroup.getElementsByClassName("turn-icon")
    turnGroup.removeChild(turns[0])

}