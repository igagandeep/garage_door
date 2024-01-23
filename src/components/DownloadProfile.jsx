/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from 'react';

// eslint-disable-next-line react/display-name, react/prop-types
const DownloadProfile = forwardRef(({ profile }, ref) => {
    const { name, about, educations, experiences, skills } = profile;

    return (
        <div ref={ref} style={{ fontSize: "26px" }} >
            <div>
                <h1>{name}</h1>
                <p>{about}</p>
            </div>
            <div>
                <h1>Skills</h1>
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {skills?.map((skill, i) => (
                        <p key={i} style={{ margin: "5px", flexBasis: "calc(20% - 10px)" }}>{skill.title}</p>
                    ))}
                </div>
            </div>
            <div>
                <h1>Experience</h1>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                    {experiences.map((d, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{ width: "20%" }}>{d.company}</h2>
                            <div style={{ width: "80%" }}>
                                <h3>{d.position}</h3>
                                <p>{d.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1>Education</h1>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                    {educations.map((d, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{ width: "20%" }}>{d.university}</h2>
                            <div style={{ width: "80%" }}>
                                <h3>{d.degree}</h3>
                                <p>{d.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
});

export default DownloadProfile