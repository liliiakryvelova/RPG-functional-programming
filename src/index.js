import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  hitPlayer1,
  hitPlayer2,
  hit2Player2,
  hit3Player2,
  getHealthPlayer1,
  getHealthPlayer2,
  stateControl,
} from "./character.js";

$(document).ready(function () {
  

  $("#character-1-hit").click(function () {
      const val =$("#weapons1").val();

      switch (val) {
        case 'hitPlayer2':
          $("#rock-character1").trigger("click");
            break;
        case 'hit2Player2':
          $("#bow-character1").trigger("click");
            break;
        case 'hit3Player2':
          $("#sword-character1").trigger("click");
            break;
      }  

  });

  $("#sword-character1").click(function(){
    const state = stateControl(hit3Player2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);    
  });

  $("#bow-character1").click(function(){
    const state = stateControl(hit2Player2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);    
  });

  $("#rock-character1").click(function(){
    const state = stateControl(hitPlayer2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);  
  }); 

  $("#character-1-getHealth").click(function () {
    const state = stateControl(getHealthPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-2-hit").click(function () {
    const state = stateControl(hitPlayer1);
    $("#character-1-characterPoints").text(`${state.rock_player1}`);
  });

  $("#character-2-getHealth").click(function () {
    const state = stateControl(getHealthPlayer2);
    $("#character-2-characterPoints").text(`${state.rock_player2}`);
  });
});

