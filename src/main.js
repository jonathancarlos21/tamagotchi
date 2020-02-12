import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tamagotchi } from './logic';

$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    const newUser = new Tamagotchi();
    
    let userName = $("#userName").val();
    newUser.addName(userName);
    $("#name").hide();
    $("#introBox").hide();
    $(".actions").fadeIn();
    $(".stats").fadeIn();
    $(".showName").text(userName);
    newUser.getHungry();
    setInterval(() => {
      $(".showHealth").text(newUser.health);
      $(".showFoodLevel").text(newUser.foodLevel);
    }, 1000);
    $("#Feed").on("click", "button", function() {
      newUser.feed();
    });
  });
});