import React from 'react';
import { Card, CardTitle, CardActions, Icon, Button } from 'react-mdl'

function Footer(props) {
    return (
        <Card shadow={0} style={{ height: '256px', background: '#3E4EB8' }}>
            <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                <h4 style={{ marginTop: '0' }}>
                    Featured event:<br />
                    May 24, 2016<br />
                    7-11pm
        </h4>
            </CardTitle>
            <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                <div className="mdl-layout-spacer"></div>
                <Icon name="event" />
            </CardActions>
        </Card>
    );
}

export default Footer;