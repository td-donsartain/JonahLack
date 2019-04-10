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
                "short": 1,
                "long": 1,
            },
            {
                "experiment": 2,
                "fast": 1,
                "slow": 1
            },
            {
                "experiment": 3,
                "easy": 1,
                "hard": 1,
            }
        ]
    },
    {
        "id": "2",
        "experimentStories": [
            {
                "experiment": 1,
                "short": 2,
                "long": 2,
            },
            {
                "experiment": 2,
                "fast": 2,
                "slow": 2
            },
            {
                "experiment": 3,
                "easy": 2,
                "hard": 2,
            }
        ]
    },
    {
        "id": "3",
        "experimentStories": [
            {
                "experiment": 1,
                "short": 1,
                "long": 2,
            },
            {
                "experiment": 2,
                "fast": 2,
                "slow": 1
            },
            {
                "experiment": 3,
                "easy": 1,
                "hard": 2
            }
        ]
    },
    {
        "id": "4",
        "experimentStories": {
            "experiment": 1,
            "short": 2,
            "long": 1
        },
        "experimentStories": {
            "experiment": 2,
            "fast": 1,
            "slow": 2,
        },
        "experimentStories": {
            "experiment": 3,
            "easy": 2,
            "hard": 1,
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
