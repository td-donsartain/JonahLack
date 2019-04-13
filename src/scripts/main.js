let currentVeribiageType = "";
let currentVeribiageTypeId = "";
let interval = null;
let totalSeconds = 0;
let testId = 0;

// Code that loads as soon as the page is ready
$(document).ready(function () {

    // Generate random integer (whole number)
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // Next button click
    $("#btnNext").on("click", function () {

        if (currentVeribiageType === "story") {
            $(".story").closest("div").hide();
            $(`#${currentVeribiageTypeId}`).next("div.reaction").show();
            currentVeribiageType = "reaction";
            currentVeribiageTypeId = $(`#${currentVeribiageTypeId}`).next("div.reaction").attr("id");

            // TODO: START Recording time here because this is when we are showing the next reactionSentence
            interval = setInterval(setTime, 1000);
            $("#btnNext").attr("disabled", true);
        }
        else if (currentVeribiageType === "reaction") {
            $(".reaction").closest("div").hide();
            if ($(`#${currentVeribiageTypeId}`).next("div.story").length !== 0) {
                $(`#${currentVeribiageTypeId}`).next("div.story").show();
                currentVeribiageType = "story";
                currentVeribiageTypeId = $(`#${currentVeribiageTypeId}`).next("div.story").attr("id");
            }
            else {
                // No more stories to process
                $("#btnNext").hide();
                $("#thankyou").show();
            }
        }
        else {
            console.error("INVALID VERBIAGE TYPE")
        }
    });

    // Begin Button Click
    $("#btnBegin").on("click", function () {
        let testerName = $("#testerName").val();
        let groupId = $("#groupAssignment").val();
        testId = getRandomInt(1000);

        $("#btnBegin").hide();
        $(".testInfo").hide();
        $("#btnNext").show();

        switch (groupId) {
            case "1":
                loadGroup(groupId);
                break;
            case "2":
                loadGroup(groupId);
                break;
            case "3":
                loadGroup(groupId);
                break;
            case "4":
                loadGroup(groupId);
                break;
            default:
                break;
        }


        $("#stories").find(".story").first().show();
        currentVeribiageTypeId = $("#stories").find(".story").first().attr("id");
        currentVeribiageType = "story";
    })

    // TODO: Use this as a starting point to handle the keypress where keypress is NOT bound to a text box
    $(document).keypress(function (event) {
        if (event.keyCode === 32) {
            // TODO: STOP TIMER HERE
            // TODO: MAKE SURE TIMER EXISTS BEFORE TRYING TO STOP
            if (interval) {
                //console.log(totalSeconds);
                clearInterval(interval);

                let elemGroupId = $(`#${currentVeribiageTypeId}`).data("groupId");
                let elemExperimentId = $(`#${currentVeribiageTypeId}`).data("experimentId");
                let elemStoryId = $(`#${currentVeribiageTypeId}`).data("storyId");
                let elemStoryType = $(`#${currentVeribiageTypeId}`).data("storyType");

                let testResult = {
                    "testId": testId,
                    "groupId": elemGroupId,
                    "experimentId": elemExperimentId,
                    "storyId": elemStoryId,
                    "storyType": elemStoryType,
                    "time": totalSeconds
                }

                $.ajax({
                    type: "POST",
                    url: "https://jonahlack.azurewebsites.net/api/HttpTrigger1?code=TfNmCSQFR0Hzxj1ETRVpFEOOIlup8hKD5fl7mUebgflZZg6cncxTEQ==",
                    data: testResult,
                    success: function () {
                        console.log("Success!");
                    },
                    error: function (result) {
                        console.log(result);
                    },
                    dataType: "json"
                });


                console.log(elemGroupId);

                $("#btnNext").attr("disabled", false);
            }
        }
    });
});

function setTime() {
    ++totalSeconds;
}

// Load a stimuliGroup by groupId
function loadGroup(groupId) {
    var stimuliGroup = findGroup(groupId);
    let isControlGroup = false;

    if (groupId === "3" || groupId === "4") {
        isControlGroup = true;

    }

    // Loops through the experiment stories in the order specified by the stimuliGroup and inserts HTML with the appropriate verbiage
    $.each(stimuliGroup.experimentStories, function (id, experimentStory) {
        $.each(experimentStory.stories, function (id, stimuliExperimentStory) {
            storyCount = experimentStory.stories
            let story = findStimuliStory(experimentStory.experimentId, stimuliExperimentStory.type, stimuliExperimentStory.storyId)
            let storyHTML =
                `<div class="col-6 story" data-experiment-id="${experimentStory.experimentId}" data-story-id="${story.storyId}" data-story-type="${story.type}" data-group-id="${groupId}" style="display:none;" id="story${story.type}${experimentStory.experimentId}${story.storyId}">
                    ${story.storyVerbiage}
                    </div>
                        <div class="col-5 reaction" style="display:none;" data-experiment-id="${experimentStory.experimentId}" data-story-id="${story.storyId}" data-story-type="${story.type}" data-group-id="${groupId}" id="reaction${story.type}${experimentStory.experimentId}${story.storyId}">
                    ${isControlGroup = false ? story.reactionSentence : story.controlSentence !== "" ? story.controlSentence : story.reactionSentence}
                    </div>`;

            $("#stories").append(storyHTML);
        })
    });
}

// Finds a stimuliGroup by groupId
function findGroup(groupId) {
    var stimuliGroup = stimuliGroups.find(function (element) {
        return element.id === groupId;
    })

    return stimuliGroup;
}

// Finds a story in the stimuli JSON Data
function findStimuliStory(experimentId, type, storyId) {
    var experiment = findStimuliExperiment(experimentId);

    var story = experiment.experimentStories.find(function (element) {
        return element.type == type && element.storyId == storyId;
    })

    return story;
}

// Finds an experiment in the stimuli JSON Data
function findStimuliExperiment(experimentId) {
    var experiment = stimuli.experiments.find(function (element) {
        return element.experimentId == experimentId;
    })

    return experiment;
}
