import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';

import {connect} from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

class Landing extends Component {

    render() {

        const {profile, skills, social_networks} = this.props;

        const data = profile && profile[0];

        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        {profile && profile.map(data => {
                            return (
                                <img
                                    src={data.image_profile}
                                    key={data.id}
                                    alt="avatar"
                                    className="avatar-img"
                                />
                            )
                        })}

                        <div className="banner-text">

                            {profile && profile.map(data => {
                                return (
                                    <h1 key={data.id}>{data.position}</h1>
                                )
                            })}

                            <hr/>

                            <p>| {skills && skills.map(skill => {
                                    return (
                                        <span key={skill.id}>{skill.name} | </span>
                                    )
                                })}
                            </p>

                            <div className="social-links">

                                {social_networks && social_networks.map(network => {
                                    return (
                                        <a key={network.id} href={network.url} rel="noopener noreferrer"
                                           target="_blank">
                                            <i className={network.icon} aria-hidden="true"/>
                                        </a>
                                    );
                                })}

                            </div>

                            <p>@{data && data.nickname}</p>
                        </div>
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
        social_networks: state.firestore.ordered.social_networks
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
            limit: 9,
            orderBy: ['progress', 'desc']
        },
        {
            collection: 'social_networks',
            limit: 4,
            orderBy: ['priority']
        }
    ])
)(Landing);
