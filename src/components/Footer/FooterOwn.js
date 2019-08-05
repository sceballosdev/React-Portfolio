import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

function FooterOwn(props) {
    return (
        <Footer size="mini" style={{ backgroundColor: '#223234' }}>
            <p>
                &copy; 2019 Copyright - Steven Ceballos León, Sergio Ramírez Zuluaga.
            </p>
        </Footer>
    );
}

export default FooterOwn;
