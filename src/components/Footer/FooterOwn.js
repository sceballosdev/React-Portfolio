import React from 'react';
import {Footer} from 'react-mdl';

import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

class FooterOwn extends React.Component {

    render() {

        const {profile} = this.props;
        const data = profile && profile[0];

        return (
            <Footer size="mini" style={{backgroundColor: '#223234'}}>
                <p>
                    &copy; Steven Ceballos León - Sergio Ramírez Zuluaga 2019 > {data && data.city},{data && data.country} > {data && data.email}
                </p>
            </Footer>
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
)(FooterOwn);
