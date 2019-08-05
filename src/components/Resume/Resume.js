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

        const {profile} = this.props;

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

                        {/* Separator Line */}
                        <hr style={{borderTop: '3px solid #00A4DF', width: '50%'}}/>

                        {/* Address */}
                        <h5>Dirección</h5>
                        <p>{data && data.address} - {data && data.city}</p>

                        {/* Phone */}
                        <h5>Celular</h5>
                        <p>
                            ({data && data.prefix}) {data && data.phone}
                        </p>

                        {/* Email */}
                        <h5>Correo electrónico</h5>
                        <p>{data && data.email}</p>

                        {/* LinkedIn */}
                        <h5>LinkedIn</h5>
                        <p>
                            mywebsite.com
                        </p>

                        {/* Separator Line */}
                        <hr style={{borderTop: '3px solid #00A4DF', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Educación</h2>


                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd University"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firestore.ordered.profile,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'profile'
        }
    ])
)(Resume);
