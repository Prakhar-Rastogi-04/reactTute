import React from 'react';

import { Card } from 'react-bootstrap';
// import { Tabs } from 'react-bootstrap'
// import TabBlock from './TabBlock';

const survey = (props) => {
    return (
        <div>
            {/* <TabBlock /> */}
        
        <Card style={{ width: '45rem', minHeight: '70vh' }} className="keep-center">
            <Card.Body>
            
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    )
};

export default survey;