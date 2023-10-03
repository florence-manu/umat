export const fieldset1 = [
    {
        fieldType: "radio",
        label: "Are you visually impaired",
        id: "01",
        RadioOption: [
            {
                value: "yes",
                id1: "vissuallyImpaired",
                id2: "vissuallyimpaireLabel",
                label: "Yes",
                id: "01",
            },
            {
                value: "No",
                id1: "Not-vissuallyimpaired",
                id2: "Not-vissuallyimpairedLabel",
                label: "No",
                id: "02",
            },
        ]
    },
    {
        fieldType: "radio",
        label: "Are you hearing impaired",
        id: "02",
        RadioOption: [
            {
                value: "yes",
                id1: "hearingImpaired",
                id2: "hearingImpaireLabel",
                label: "Yes",
                id: "01",
            },
            {
                value: "No",
                id1: "Not-hearingImpaired",
                id2: "Not-hearingImpairedLabel",
                label: "No",
                id: "02",
            },
        ]
    },
    {
        fieldType: "radio",
        label: "Are you physically challenged",
        id: "03",
        RadioOption: [
            {
                value: "yes",
                id1: "challenged",
                id2: "challengedLabel",
                label: "Yes",
                id: "01",
            },
            {
                value: "No",
                id1: "Not-challenged",
                id2: "Not-challengedLabel",
                label: "No",
                id: "02",
            },
        ]
    },
     {
        label: "Any other impairement?",
        value: "",
        placeholder: "",
        inputType: "text",
        fieldType: "input",
        id: "04",
        width: "100%",
    },
]