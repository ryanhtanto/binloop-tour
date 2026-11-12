import {
    CheckCircle2,
    AlertTriangle,
    ShieldCheck,
    XCircle
} from "lucide-react";


export default function Rules() {

    const rules = {
            label: "Rules & Regulation",

            qualification: {
                title: "Qualification",

                description:
                    "Race is open to man or woman 18 years of age by January 30, 2027 or older as of race day, who is in good health and can complete the race without getting lost.",

                introduction:
                    "The Qualification for joining this race in general must follow:",

                categories: [
                    {
                        title: "24 Hours Category",
                        requirementType: "one of these following items",
                        items: [
                            "Participants are required to have completed at least 50 km road running race.",
                            "Participants are required to have completed trail running race equivalent to at least 50 km distance."
                        ]
                    },
                    {
                        title: "100K Category",
                        requirementType: "one of these following items",
                        items: [
                            "Participants are required to have completed at least 50 km road running race.",
                            "Participants are required to have completed trail running race equivalent to at least 50 km distance."
                        ]
                    },
                    {
                        title: "50K Category",
                        requirementType: "one of these following items",
                        items: [
                            "Participants are required to have completed at least Full Marathon road running race.",
                            "Participants are required to have completed trail running race equivalent to at least Full Marathon distance."
                        ]
                    },
                    {
                        title: "Relay Category",
                        requirementType: "team requirement",
                        items: [
                            "Minimum 1 female runner each team.",
                            "Each member of a team minimum 18 years of age by January 30, 2027."
                        ]
                    }
                ],

                additionalNote:
                    "Participants aged 12-17 years old are eligible to participate as team members, subject to submission of a parental consent letter at Race Pack Collection."
            },
            

            sections: [
                {
                    title: "General",

                    items: [
                        "The race central, start and finish location is in Icon Bali, Sanur, Denpasar Selatan.",

                        "Participants must stay on the route at all times. There will be sections where racers will not be able to pass each other in order to protect the environment and safety matters.",

                        "Participants must wear their own BIB (race number). BIB or race number must be visible and placed in the front area of the runner's body.",

                        "BIB is not transferable. Participants are not allowed to wear another participant's BIB.",

                        "Absolutely no littering along the course. Participants will be penalized for any littering along the course.",

                        "All participants must follow the rules and maintain sportive behavior.",

                        "Participants must prepare their own mandatory gears.",

                        "Runners must run on the left side of the course lane and follow the counter-clockwise direction. Runners are not allowed to run on the right side of the course lane.",

                        "In the beach section area, runners are advised to use the pedestrian pathway along the beach and not the bicycle lane.",

                        "Drop Bag service is provided in the race central area.",

                        "The Race Director has the authority, at any time, to overrule any rule or create a new rule based on extenuating, unforeseen, and/or unusual circumstances and/or to maintain the integrity and fair play necessary for the successful completion and continuation of the race. The Race Director has ultimate authority regarding all rules, their interpretation, and their enforcement."
                    ]
                }
            ],

            consideration: {
                title: "Consideration for Others",

                items: [
                    "During the race, if a participant encounters another runner or staff member who is injured or sick and unable to move on their own, please prioritize assisting that person by informing race staff for further assistance."
                ]
            },

            equipment: {
                title: "Mandatory / Obligatory and Recommended Gear & Equipment",

                table: [
                    {
                        equipment: "Race Bib",
                        status: "Obligatory"
                    },
                    {
                        equipment: "Mobile / Personal Phone",
                        status: "Obligatory"
                    },
                    {
                        equipment: "IDR Cash (to cover unexpected expenses)",
                        status: "Obligatory"
                    },
                    {
                        equipment: "Personal Medical Insurance",
                        status: "Obligatory"
                    },
                    {
                        equipment: "Personal Cup for hot/cold drinks at aid stations",
                        status: "Recommended"
                    },
                    {
                        equipment: "Water Reservoir / Bottle min 400 ml",
                        status: "Recommended"
                    },
                    {
                        equipment: "Personal Food",
                        status: "Recommended"
                    },
                    {
                        equipment: "Functional Head Light / Torch for runners on track between 17.00 - 06.00",
                        status: "Recommended"
                    },
                    {
                        equipment: "Cap or Bandana",
                        status: "Recommended"
                    },
                    {
                        equipment: "Fleece or Long Sleeve Shirt (Cotton shirts are not allowed)",
                        status: "Recommended"
                    },
                    {
                        equipment: "Waterproof Rain Jacket (Rain Condition)",
                        status: "Recommended"
                    },
                    {
                        equipment: "First Aid Kit (such as band aids, disinfectant, etc.)",
                        status: "Recommended"
                    }
                ]
            },

            emergency: {
                title: "Emergency & Medical Assistance During The Race",

                description:
                    "In order to ensure race safety, the race organizer will prepare and arrange rescue and medical assistance during the race. However, each participant must recognize and understand that there are risks that may result in injuries and/or accidents associated with running. Participants are responsible for themselves and will participate in this race at their own risk.",

                items: [
                    "Emergency and first aid tents staffed by doctors and/or nurses will be located at designated aid stations.",

                    "Emergency rescue procedures will be available for racers and all parties involved in the race, including staff and supporters.",

                    "Depending on the area, it may take a longer period of time for medical assistance to reach participants.",

                    "If a participant receives emergency medical assistance from a rescue crew and/or doctor, the participant must undergo a medical examination by a medical expert at a hospital after the race and inform the race organizer center regarding their condition.",

                    "Doctors and rescue staff have the authority to stop a racer from continuing the race. This will be done by removing the racer's BIB number and IC chip.",

                    "If a participant drops out of the race, they may continue walking using a shorter route to the designated pick-up point that will take them back to the finish line.",

                    "Depending on the participant's condition, emergency evacuation may be required. The evacuation cost will be the responsibility of the person being rescued. All racers must obtain adequate insurance coverage."
                ],

                note:
                    "In case of an emergency, if a participant is unable to reach the nearest medical aid station, pick-up point, or finish line, the committee will provide assistance."
            },

            aidStations: {
                title: "Aid Stations & Outside Support",

                items: [
                    "Food and drinks will be provided at the aid stations.",

                    "Food and drinks provided at the aid stations are only for registered racers.",

                    "Non-registered racers are not allowed to run alongside racers. No pacers are allowed.",

                    "Outside support from family and friends along the course is not allowed."
                ]
            },

            raceCourseMarkers: {
                title: "Race Course Markers",

                items: [
                    "The race course will be marked using signs. Race staff will also be positioned along the course. Dangerous areas on the course will be marked with ropes and patrolled by staff in order to reduce risks.",

                    "Racers will be stopped at road intersections. Please follow the directions given by race staff at these intersections.",

                    "The course signs will be set up shortly before the race and will be immediately removed after the race."
                ]
            },

            droppingOut: {
                title: "Dropping Out Of The Race",

                description:
                    "If a participant decides to drop out of the race, they must notify race staff. Participants must remove their BIB and report to a race staff member so the Race Organizer Center can be notified. Once a participant has dropped out of the race, they will not be able to restart. Participants will need their BIB to retrieve their bags from the bag storage area.",

                items: [
                    {
                        title: "Dropping Out at an Aid Station",

                        description:
                            "Inform aid station staff that you have decided to drop out of the race."
                    },
                    {
                        title: "Dropping Out Along the Course",

                        description:
                            "If you are able to move on your own, please make your way to the closest aid station, either returning to the aid station you just left or continuing to the next aid station. If you are unable to move without assistance, inform staff and follow their instructions. It may take time for help to reach you if you are located on the race course. If you are not feeling well, it is recommended to make your decision to drop out at an aid station."
                    }
                ]
            },

            penalty: {
                title: "Penalty & Disqualification",

                description:
                    "Race officials present on the course, and those in charge of different control and refreshment posts, are authorized to enforce regulations and immediately impose penalties for non-compliance based on the following chart.",

                table: [
                    {
                        breach: "Short-cutting the route",
                        penalty: "At the Race Director's decision"
                    },
                    {
                        breach: "Refusing to have obligatory equipment checked",
                        penalty: "Disqualification"
                    },
                    {
                        breach: "Not respecting people (organization or runners)",
                        penalty: "Time Penalty or Disqualification"
                    },
                    {
                        breach: "Throwing away rubbish or garbage along the route",
                        penalty: "Disqualification"
                    },
                    {
                        breach: "Receiving help outside authorized zones",
                        penalty: "At the Race Director's decision"
                    },
                    {
                        breach: "Cheating (e.g., using transport, sharing race number)",
                        penalty: "Disqualification"
                    },
                    {
                        breach: "Not passing through a control point",
                        penalty: "At the Race Director's decision"
                    },
                    {
                        breach: "Not wearing Race Bib",
                        penalty: "Disqualification"
                    },
                    {
                        breach: "Race number not visible",
                        penalty: "Time Penalty"
                    },
                    {
                        breach: "Refusal to comply with an order from race control, race officials, head of post, doctors, or rescue workers",
                        penalty: "Disqualification"
                    }
                ],

                note:
                    "The Race Director has the authority, at any time, to overrule any rule or invent a new rule based on extenuating, unforeseen, and/or unusual circumstances and/or to maintain the integrity and fair play necessary for the successful completion, and continuation, of the race. The Race Director has ultimate authority in regards to all rules, their interpretation, and their enforcement."
            },

            sanctions: {
                title: "Penalty & Sanctions",
                intro:
                    "Violation of the rules may result in penalty or disqualification.",
                headers: {
                    violation: "Violation",
                    penalty: "Penalty"
                },
                table: [
                    {
                        violation: "Leaving official route",
                        penalty: "Time Penalty"
                    },
                    {
                        violation: "Cheating",
                        penalty: "Disqualification"
                    }
                ],
                note:
                    "Organizer decisions are final and cannot be contested."
            },

            responsibility: {
                title: "Racer & Race Organization Responsibilities",

                racer: {
                    title: "Racer Responsibilities",

                    items: [
                        "Participants understand the unique nature and requirements of competing in an ultra-long distance running race. Participants will be running throughout the day and night and have undertaken the necessary training to compete in such a race.",

                        "Participants are responsible for themselves and must have the ability to deal with any problems that may be encountered during the race.",

                        "Participants are able to deal independently with deteriorating weather conditions, including high or low temperatures, strong winds, rain, and other expected challenges.",

                        "Participants are able to manage extreme fatigue, internal organ and digestive problems, muscle pain, minor physical injuries, and psychological challenges on their own.",

                        "Participants fully understand that when participating in outdoor activities such as this race, their safety depends on their own skills and abilities."
                    ]
                },


                organization: {
                    title: "Race Organization Responsibilities",

                    items: [
                        "Provide assistance and support for participants who decide to drop out of the race.",

                        "Take responsibility for non-deliberate damage to property caused by race participants, including plants, animals, and other objects.",

                        "Provide course marking and placement of signs identifying the race course.",

                        "Manage race safety and ensure proper safety procedures are implemented."
                    ]
                }
            },

            cancellation: {
    title: "Race Cancellation",

    description:
        "The race organization reserves the right to cancel or cut short the race for the following reasons:",

    items: [
        "The inability to ensure runner safety due to risks such as landslides and extreme weather conditions along the course.",

        "Natural disasters or declared warnings issued by government authorities. In such cases, the race course cannot be changed to continue the race, nor will the race be postponed to a later date.",

        "The decision as to whether the race will be cancelled or postponed will be made on the day before the race or on the race day. The announcement will be communicated through the official race website and/or social media.",

        "In the event of hurricanes, typhoons, floods, incidents, accidents, and/or epidemics, the race organization reserves the right to make judgments and decisions regarding postponement or cancellation of the race."
    ]
            },


            runnerCancellation: {
                title: "Racer Cancellation",

                description:
                    "The entry fee is not refundable."
            }
        }
    


    return (

        <main
            className="
                min-h-screen
                bg-[#faf8f5]
                pt-32
                pb-20
                px-6
            "
        >

            <div
                className="
                    max-w-6xl
                    mx-auto
                "
            >

                {/* HEADER */}

                <h1
                    className="
                        text-center
                        text-4xl
                        md:text-5xl
                        font-black
                        uppercase
                        tracking-wide
                        text-[#544741]
                        mb-16
                    "
                >
                    {rules.label}
                </h1>


                {/* QUALIFICATION */}

                <Qualification
                    data={rules.qualification}
                />



                {/* NORMAL SECTIONS */}

                <RuleSection
                    data={rules.general}
                />

                <RuleSection
                    data={rules.consideration}
                />

                <RuleSection
                    data={rules.emergency}
                />

                <RuleSection
                    data={rules.aidStations}
                />

                <RuleSection
                    data={rules.raceCourseMarkers}
                />



                {/* DROPPING OUT */}

                <DroppingOut
                    data={rules.droppingOut}
                />



                {/* EQUIPMENT */}

                <EquipmentTable
                    data={rules.equipment}
                />



                {/* PENALTY */}

                <PenaltyTable
                    data={rules.penalty}
                />



                {/* RESPONSIBILITY */}

                <Responsibility
                    data={rules.responsibility}
                />



                {/* CANCELLATION */}

                <RuleSection
                    data={rules.cancellation}
                />

                <RuleSection
                    data={rules.runnerCancellation}
                />


            </div>

        </main>

    );

}





function Card({
    children
}) {

    return (

        <section
            className="
                bg-white
                rounded-3xl
                border
                border-gray-200
                shadow-lg
                p-8
                md:p-10
                mb-10
            "
        >

            {children}

        </section>

    );

}





function Title({
    children
}) {

    return (

        <h2
            className="
                text-2xl
                md:text-3xl
                font-black
                uppercase
                text-[#F05A27]
                mb-6
            "
        >

            {children}

        </h2>

    );

}





function Qualification({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            <p
                className="
                    text-gray-600
                    leading-8
                    mb-5
                "
            >

                {data.description}

            </p>


            <p
                className="
                    font-semibold
                    text-[#544741]
                    mb-8
                "
            >

                {data.introduction}

            </p>



            <div
                className="
                    grid
                    md:grid-cols-2
                    gap-6
                "
            >

                {
                    data.categories.map(category => (

                        <div
                            key={category.title}
                            className="
                                border
                                border-gray-200
                                rounded-2xl
                                p-6
                            "
                        >

                            <h3
                                className="
                                    font-bold
                                    text-xl
                                    text-[#544741]
                                    mb-4
                                "
                            >

                                {category.title}

                            </h3>


                            <ul
                                className="
                                    space-y-4
                                "
                            >

                                {
                                    category.items.map(item => (

                                        <li
                                            key={item}
                                            className="
                                                flex
                                                gap-3
                                                text-gray-600
                                            "
                                        >

                                            <CheckCircle2
                                                size={18}
                                                className="
                                                    text-[#F05A27]
                                                    mt-1
                                                    shrink-0
                                                "
                                            />


                                            {item}

                                        </li>

                                    ))
                                }

                            </ul>


                        </div>

                    ))
                }

            </div>


        </Card>

    );

}





function RuleSection({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            {
                data.description && (

                    <p
                        className="
                            text-gray-600
                            leading-8
                            mb-6
                        "
                    >

                        {data.description}

                    </p>

                )
            }



            {
                data.items?.length > 0 && (

                    <ul
                        className="
                            space-y-5
                        "
                    >

                        {
                            data.items.map(item => (

                                <li
                                    key={typeof item === "string" ? item : item.title}
                                    className="
                                        flex
                                        gap-3
                                        text-gray-600
                                        leading-7
                                    "
                                >

                                    <span
                                        className="
                                            text-[#F05A27]
                                            font-bold
                                        "
                                    >
                                        •
                                    </span>


                                    {
                                        typeof item === "string"
                                            ? item
                                            : (
                                                <div>

                                                    <strong
                                                        className="
                                                            block
                                                            text-[#544741]
                                                            mb-2
                                                        "
                                                    >
                                                        {item.title}
                                                    </strong>

                                                    {item.description}

                                                </div>
                                            )
                                    }


                                </li>

                            ))
                        }


                    </ul>

                )
            }


        </Card>

    );

}





function DroppingOut({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            <p
                className="
                    text-gray-600
                    leading-8
                    mb-8
                "
            >
                {data.description}
            </p>



            <div
                className="
                    space-y-6
                "
            >

                {
                    data.items.map(item => (

                        <div
                            key={item.title}
                            className="
                                rounded-2xl
                                border
                                border-gray-200
                                p-6
                            "
                        >

                            <h3
                                className="
                                    font-bold
                                    text-[#544741]
                                    mb-3
                                "
                            >

                                {item.title}

                            </h3>


                            <p
                                className="
                                    text-gray-600
                                "
                            >

                                {item.description}

                            </p>


                        </div>

                    ))
                }

            </div>


        </Card>

    );

}





function EquipmentTable({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            <div
                className="
                    overflow-x-auto
                "
            >

                <table
                    className="
                        w-full
                    "
                >

                    <thead>

                        <tr
                            className="
                                bg-[#F05A27]
                                text-white
                            "
                        >

                            <th
                                className="
                                    p-4
                                    text-left
                                "
                            >
                                Equipment
                            </th>

                            <th
                                className="
                                    p-4
                                    text-center
                                "
                            >
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            data.table.map(item => (

                                <tr
                                    key={item.equipment}
                                    className="
                                        border-b
                                        hover:bg-orange-50
                                    "
                                >

                                    <td className="p-4">

                                        {item.equipment}

                                    </td>


                                    <td
                                        className="
                                            p-4
                                            text-center
                                        "
                                    >

                                        <span
                                            className="
                                                px-4
                                                py-2
                                                rounded-full
                                                bg-orange-100
                                                text-[#F05A27]
                                                text-sm
                                                font-semibold
                                            "
                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>


                </table>

            </div>


        </Card>

    );

}





function PenaltyTable({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            <p
                className="
                    text-gray-600
                    mb-6
                "
            >
                {data.description}
            </p>


            <table
                className="
                    w-full
                "
            >

                <thead>

                    <tr
                        className="
                            bg-[#F05A27]
                            text-white
                        "
                    >

                        <th className="p-4 text-left">
                            Breach
                        </th>

                        <th className="p-4 text-center">
                            Penalty
                        </th>

                    </tr>

                </thead>


                <tbody>

                    {
                        data.table.map(item => (

                            <tr
                                key={item.breach}
                                className="
                                    border-b
                                "
                            >

                                <td className="p-4">
                                    {item.breach}
                                </td>

                                <td className="p-4 text-center">
                                    {item.penalty}
                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>


            <p
                className="
                    mt-6
                    text-sm
                    text-gray-500
                "
            >

                {data.note}

            </p>


        </Card>

    );

}





function Responsibility({
    data
}) {

    if (!data)
        return null;


    return (

        <Card>

            <Title>
                {data.title}
            </Title>


            {
                [
                    data.racer,
                    data.organization
                ].map(section => (

                    <div
                        key={section.title}
                        className="mb-8"
                    >

                        <h3
                            className="
                                font-bold
                                text-xl
                                text-[#544741]
                                mb-4
                            "
                        >

                            {section.title}

                        </h3>


                        <ul
                            className="
                                space-y-3
                                text-gray-600
                            "
                        >

                            {
                                section.items.map(item => (

                                    <li
                                        key={item}
                                        className="
                                            flex
                                            gap-3
                                        "
                                    >

                                        <ShieldCheck
                                            size={18}
                                            className="
                                                text-[#F05A27]
                                                mt-1
                                                shrink-0
                                            "
                                        />

                                        {item}

                                    </li>

                                ))
                            }

                        </ul>


                    </div>

                ))
            }


        </Card>

    );

}

