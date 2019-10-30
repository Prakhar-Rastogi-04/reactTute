import React from'react';
import { Card } from 'react-bootstrap';
const result = (props) => {
    return (
        <div>
            <Card style={{ width: '45rem', minHeight: 'auto' }} className="keep-center text-left">
            <Card.Body>
            <h2 className="text-center">
                Thanks for attempting the survey !
            </h2>
            <h4>The results will be sent on your registered email id.</h4>
            {/* {JSON.stringify(props)} */}
            
            </Card.Body>
            </Card>
        </div>
    )
}

export default result;