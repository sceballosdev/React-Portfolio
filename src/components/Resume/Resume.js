import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";


class Resume extends Component {
    render() {

        const {profile, skills, education, experiences} = this.props;

        const data = profile && profile[0];

        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            {profile && profile.map(data => {
                                return (
                                    <img
                                        src={data.image_profile}
                                        key={data.id}
                                        alt="avatar"
                                        style={{height: '300px'}}
                                    />
                                )
                            })}
                        </div>

                        {/* Full Name */}
                        <h2 style={{
                            paddingTop: '0.5em',
                            textAlign: 'center'
                        }}>
                            {data && data.name} {data && data.last_name}
                        </h2>

                        {/* Position profile */}
                        <h4 style={{color: 'grey'}}>
                            {data && data.position}
                        </h4>

                        {/* Separator Line */}
                        <hr style={{borderTop: '3px solid #00A4DF', width: '50%'}}/>

                        {/* About me */}
                        <p>
                            {data && data.aboutme}
                        </p>

                        {/* About me 2*/}
                        <p>
                            {data && data.aboutme2}
                        </p>

                        {/* Separator Line */}
                        <hr style={{borderTop: '3px solid #00A4DF', width: '50%'}}/>

                        {/* Address */}
                        <h5>Address</h5>
                        <p>{data && data.address} - {data && data.city}</p>

                        {/* Phone */}
                        <h5>Phone</h5>
                        <p>
                            ({data && data.prefix}) {data && data.phone}
                        </p>

                        {/* Email */}
                        <h5>Email</h5>
                        <p>{data && data.email}</p>

                        {/* LinkedIn */}
                        <h5>Web</h5>
                        <p>
                            {data && data.website}
                        </p>

                        {/* Separator Line */}
                        <hr style={{borderTop: '3px solid #00A4DF', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Education</h2>

                        {education && education.map(career => {
                            return (
                                <Education
                                    key={career.id}
                                    startYear={career.start_date}
                                    endYear={career.end_date}
                                    schoolName={career.institution}
                                    title={career.title}
                                    schoolDescription={career.description}
                                />
                            )
                        })}

                        <hr style={{borderTop: '3px solid #00A4DF'}}/>

                        <h2>Experience</h2>


                        {experiences && experiences.map(experience => {
                            return (
                                <Experience
                                    key={experience.id}
                                    startYear={experience.start_date}
                                    endYear={experience.end_date}
                                    jobName={experience.company}
                                    jobPosition={experience.job_position}
                                    jobDescription={experience.description}
                                />
                            )
                        })}

                        <hr style={{borderTop: '3px solid #00A4DF'}}/>

                        <h2>Skills</h2>

                        {skills && skills.map(skill => {
                            return (
                                <Skills
                                    key={skill.id}
                                    skill={skill.name}
                                    progress={skill.progress}
                                />
                            )
                        })}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firestore.ordered.profile,
        skills: state.firestore.ordered.skills,
        education: state.firestore.ordered.education,
        experiences: state.firestore.ordered.experiences,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'profile'
        },
        {
            collection: 'skills',
            orderBy: ['progress', 'desc']
        },
        {
            collection: 'education',
            orderBy: ['end_date', 'desc']
        },
        {
            collection: 'experiences',
            orderBy: ['end_date', 'desc']
        }
    ])
)(Resume);
