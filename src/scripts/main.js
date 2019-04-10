let stimuli = [
    {
        "experiments": [
            {
                "experimentStories": [
                    {
                        "id": "filler",
                        "storyVerbiage": "Think of a Desert",
                        "reactionSentence": "Austin drives from Dune Town to Storm City"
                    },
                    {
                        "id": "short",
                        "storyVerbiage": "Think of a forest",
                        "reactionSentence": "Fallen Leaf Road races through the forest"
                    }
                ]
            },
            {
                "experimentStories": [
                    {
                        "id": "filler",
                        "storyVerbiage": "Think of a Desert",
                        "reactionSentence": "Austin drives from Dune Town to Storm City"
                    },
                    {
                        "id": "short",
                        "storyVerbiage": "Think of a forest",
                        "reactionSentence": "Fallen Leaf Road races through the forest"
                    }
                ]
            }
        ]
    }
];

let stimuliGroups = [
    {
        "id": "1",
        "experimentStories": [
            {
                "experiment": 1,
                "story":
                {
                    "type":"short",
                    "storyId":1
                },
                "story":
                {
                    "type":"long",
                    "storyId":1
                }
            },
            {
                "experiment": 2,
                "story":
                {
                    "type":"fast",
                    "storyId":1
                },
                "story":
                {
                    "type":"slow",
                    "storyId":1
                }
            },
            {
                "experiment": 3,
                "story":
                {
                    "type":"easy",
                    "storyId":1
                },
                "story":
                {
                    "type":"hard",
                    "storyId":1
                }
            }
        ]
    },
    {
        "id": "2",
        "experimentStories": [
            {
                "experiment": 1,
                "story":
                {
                    "type":"short",
                    "storyId":2
                },
                "story":
                {
                    "type":"long",
                    "storyId":2
                }
            },
            {
                "experiment": 2,
                "story":
                {
                    "type":"fast",
                    "storyId":2
                },
                "story":
                {
                    "type":"slow",
                    "storyId":2
                }
            },
            {
                "experiment": 3,
                "story":
                {
                    "type":"easy",
                    "storyId":2
                },
                "story":
                {
                    "type":"hard",
                    "storyId":2
                }
            }
        ]
    },
    {
        "id": "3",
        "experimentStories": [
            {
                "experiment": 1,
                "story":
                {
                    "type":"short",
                    "storyId":1
                },
                "story":
                {
                    "type":"long",
                    "storyId":2
                }
            },
            {
                "experiment": 2,
                "story":
                {
                    "type":"fast",
                    "storyId":2
                },
                "story":
                {
                    "type":"slow",
                    "storyId":1
                }
            },
            {
                "experiment": 3,
                "story":
                {
                    "type":"easy",
                    "storyId":1
                },
                "story":
                {
                    "type":"hard",
                    "storyId":2
                }
            }
        ]
    },
    {
        "id": "4",
        "experimentStories": {
            "experiment": 1,
            "story":
                {
                    "type":"short",
                    "storyId":2
                },
                "story":
                {
                    "type":"long",
                    "storyId":1
                }
        },
        "experimentStories": {
            "experiment": 2,
            "story":
                {
                    "type":"fast",
                    "storyId":1
                },
                "story":
                {
                    "type":"slow",
                    "storyId":2
                }
        },
        "experimentStories": {
            "experiment": 3,
            "story":
                {
                    "type":"easy",
                    "storyId":2
                },
                "story":
                {
                    "type":"hard",
                    "storyId":1
                }
        }
    }
]

function loadGroup(group) {
    let groupId = group - 1;

    let stimuliGroup = stimuliGroups[groupId];

    let experimentId = stimuliGroup.experimentStories[0].experiment;
    let storyId = "short";

    //console.log(experimentId);

    loadStory(groupId, experimentId, storyId);
}

function loadStory(group, experiment, storyId) {
    //console.log(stimuli[group]);
    console.log(stimuli[group].experiments[experiment]);
    console.log(stimuli[group].experiments[experiment].experimentStories[0].id);
}
