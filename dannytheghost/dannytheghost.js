$(function() {
    question1();
    //FIGURE OUT HOW TO ADD PICTURES!!
    //ASK MADDIE ABOUT PICTURES!!!!!!!
});
var question1 = function() {
    //UPDATING GRAPHICS
    $("div.narrative, span.q1").html("You are a 13 year old boy. Let's call you danny.<br> You are sitting watching tv in your living you when hear a very strange sounds from the basement.<br>Do you wish to  investigate?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-primary q1-yes'>YES</button>");
    $(".buttons").append("<button class='btn btn-primary q1-no'>NO</button>");
    //MAKE IT WORK
    $(".q1-yes").click(function() {
        //Update Sidebar
        $(".q1-choice").html("YES").show();
        //Run Question 2
        question2();
    });
    $(".q1-no").click(function() {
        //Update Sidebar
        $(".q1-choice").html("NO").show();
        //Run Question 2
        $(".narrative").html("You decide to ignore the sounds in the basement and continue watching tv. *Boring END*");
    });
};
var question2 = function() {
    //UPDATING THE GRAPHICS
    $("div.narrative, span.q2").html("You head down into the basement. Walking down the rickety steps you see your parents,they never allow you or your sister down here when they are working. Do you hide or ask about the noises?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-primary q2-ask'>ASK</button>");
    $(".buttons").append("<button class='btn btn-primary q2-hide'>HIDE</button>");
    //MAKE IT WORK
    $(".q2-hide").click(function() {
        $(".q2-choice").html("HIDE").show();
        question3("Hide");
    });
    $(".q2-ask").click(function() {
        $(".q2-choice").html("ASK").show();
        question4("Ask");
    });
};
var question3 = function() {
    $("div.narrative, span.q3").html("You hide behind a crate next to the stairs and watch what your parents are doing. From where you are hiding you can see what looks like a portal.  Watching them you see your father flip a switch and the portal lights up alittle before fading.Agataited your parents groan and storm off up the stairs.Do you wish to stay or leave?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-primary q3-stay'>STAY</button>");
    $(".buttons").append("<button class='btn btn-primary q3-leave'>LEAVE</button>");
    $(".q3-stay").click(function() {
        $(".q3-choice").html("STAY").show();
        question5("Stay");
    });
    $(".q3-leave").click(function() {
        $(".q3-choice").html("LEAVE").show();
        $("div.narrative,span.q3").html("You decide to leave the basement after seeing that whatever they are working on doesn't work which means that your parents are not mad scientist like they always dreamed of being. You hope now they will get actually jobs. *Normal end*");
    });
};
var question4 = function() {
    $("div.narrative,span.q4").html("As you go to ask your father what is  with all the noise he yells at you form even coming down into the basement. He sends you to your room and proceeds to ground you as well.<br> You still want to know what is happening down in the basement;Do you wish to sneak back down there or stay put and mind your business?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-primary q4-sneak'>SNEAK</button>");
    $(".buttons").append("<button class='btn btn-primary q4-stay'>STAY</button>");
    //MAKE IT WORK
    $(".q4-sneak").click(function() {
        $(".q2-choice").html("SNEAK").show();
        $("div.narrative,span.q4").html("Going back to the basement door you  realize you have been holding your breath You shakily grab the doorknob and attempt to turn it. It doesnt turn; your father has locked the door to prevent you from coming back down and ruining the project they are doing. *BAD END*");
        $(".buttons").hide();
    });
    $(".q4-stay").click(function() {
        $(".q2-choice").html("STAY").show();
        $("div.narrative,span.q4").html("You decide to not bother your parents and leave them to play with their strange inventions. *BORNING ENDING* ");
        $(".buttons").hide();
    });
};
var question5 = function(){
     $("div.narrative, span.q5").html("As you slowly stand up and come out of your hiding spot. You begin to walk around the lab and before long you are standing infront of the portal. it has been bothering you the whole time you were down there. Do you wish to check out the inside of the portal by going inside or staying outside? ");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-primary q5-outside'>OUTSIDE</button>");
    $(".buttons").append("<button class='btn btn-primary q5-inside'>INSIDE</button>");
    $(".q5-ouside").click(function(){
         $(".q5-choice").html("OUTSIDE").show();
        $("div.narrative,span.q5").html("Unsure that it might turn on you decide to look at what you can from the outside. You see that there is a button on the inside from where you are standing;but you can't see what it says above the button. Do you wish to climb in and press the button? ");
        // leads to  you reading it.
         question6("outside");
    });
     $(".q5-inside").click(function(){
         $(".q5-choice").html("INSIDE").show();
        $("div.narrative,span.q5").html("You climb into the portal and as you climb into the portal you feel what seems to be a button under your hand. it clicks and you see the world around you become green and you let out a screech in agonizing pain. Before blacking out you see your sister rushing to unplug the portal. Has she been tailing you and waiting to call you out?");
         question7("inside");
    });
};
