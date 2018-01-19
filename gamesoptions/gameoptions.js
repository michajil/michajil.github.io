//Executeable Block- Continouosly running

$(function() {

    //display 1st narrative
    $(".q1").show();

    //button listeners
    $(".q1-choices-yes").click(function() {

        $(".q1").hide();
        $(".q2").show();
        $(".q1-progress").show();
        $(".q1-choice").html("YES");
        $(".q2-progress").show();
    });

    $(".q1-choices-no").click(function() {
        $(".q1-narrative").html("Goodbye,this page is not for you.Hit refresh to start over");
        $(".q1-choices").hide();
        $(".q1-progress").show();
        $(".q1-choice").html("NO");
    });

    $(".q2-choices-rpg").click(function() {
        $(".q2").hide();
        $(".q3").show();
        $(".q3-choices-FPS").hide();
        $(".q3-choices-SPORTS").hide();
        $(".q3-choices-ADVENTURE").hide();
        $(".q3-choices-MMO").hide();
        $(".game-type").html("RPG");
        $(".q2-choice").html("RPG");
    });

    $(".q2-choices-fps").click(function() {
        $(".q2").hide();
        $(".q3").show();
        $(".q3-choices-RPG").hide();
        $(".q3-choices-SPORTS").hide();
        $(".q3-choices-ADVENTURE").hide();
        $(".q3-choices-MMO").hide();
        $(".game-type").html("FPS");
        $(".q2-choice").html("FPS");
    });

    $(".q2-choices-sports").click(function() {
        $(".q2").hide();
        $(".q3").show();
        $(".q3-choices-RPG").hide();
        $(".q3-choices-FPS").hide();
        $(".q3-choices-ADVENTURE").hide();
        $(".q3-choices-MMO").hide();
        $(".game-type").html("SPORTS");
        $(".q2-choice").html("SPORTS");
    });

    $(".q2-choices-adventure").click(function() {
        $(".q2").hide();
        $(".q3").show();
        $(".q3-choices-RPG").hide();
        $(".q3-choices-SPORTS").hide();
        $(".q3-choices-FPS").hide();
        $(".q3-choices-MMO").hide();
        $(".game-type").html("ADVENTURE");
        $(".q2-choice").html("ADVENTURE");
    });

    $(".q2-choices-mmo").click(function() {
        $(".q2").hide();
        $(".q3").show();
        $(".q3-choices-RPG").hide();
        $(".q3-choices-SPORTS").hide();
        $(".q3-choices-ADVENTURE").hide();
        $(".q3-choices-FPS").hide();
        $(".game-type").html("MMO");
        $(".q2-choice").html("MMO");
    });

    $(".q3-choices-sfic").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of RPG do you like?");
        $(".q3-choice").html("Science Fiction");
        $(".games").html("Star Wars");
        $(".q3").hide();
    });

    $(".q3-choices-sfan").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of RPG do you like?");
        $(".q3-choice").html("Science Fantasy");
        $(".games").html("Final Fantasy");
        $(".q3").hide();
    });

    $(".q3-choices-real").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of FPS do you like?");
        $(".q3-choice").html("Realistic");
        $(".games").html("Medal of honor");
        $(".q3").hide();
    });

    $(".q3-choices-future").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of FPS do you like?");
        $(".q3-choice").html("Futuristic");
        $(".games").html("Destiny");
        $(".q3").hide();
    });

    $(".q3-choices-basketball").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of SPORT do you like?");
        $(".q3-choice").html("Basketball");
        $(".games").html("2k18");
        $(".q3").hide();
    });

    $(".q3-choices-football").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of SPORT do you like?");
        $(".q3-choice").html("Football");
        $(".games").html("Madden 18");
        $(".q3").hide();
    });

    $(".q3-choices-sim").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of ADVENTURE do you like?");
        $(".q3-choice").html("Simulation");
        $(".games").html("Sims 5.1");
        $(".q3").hide();
    });

    $(".q3-choices-hack").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of ADVENTURE do you like?");
        $(".q3-choice").html("Hack N Slash");
        $(".games").html("Dynasty Warriors");
        $(".q3").hide();
    });

    $(".q3-choices-arena").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of MMO do you like?");
        $(".q3-choice").html("Arena");
        $(".games").html("League of Legends");
        $(".q3").hide();
    });

    $(".q3-choices-rpg").click(function() {
        $(".q3-progress").show();
        $(".q3-progress").html("What type of MMO do you like?");
        $(".q3-choice").html("RPG");
        $(".games").html("Wizard 101");
        $(".q3").hide();
    });


});