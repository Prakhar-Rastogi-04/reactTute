import React from'react';
import { Card, Button } from 'react-bootstrap';
const question = (props) => {
    // console.log('this ',this);
    this.changeInput = (event) => {
        props.answerSelected([props, event]);
    }
    return (
        <div>
        <Card style={{ width: '45rem', minHeight: 'auto' }} className="keep-center text-left">
            <Card.Body>
                <Card.Title>Question No. {props.qIndex+1}</Card.Title>
                <Card.Text>
                    {props.questionDescription} ?
                </Card.Text>
                    {props.answers.map((op,index)=>{
                    return <div> 
                            <input 
                            type={props.answerType === 'one' ? 'radio' : 'checkbox'}
                            name ={props.questionId} 
                            value={op._id}
                            onChange={this.changeInput}
                            data-option-index={index}
                            data-question-weightage={props.weightage}
                            data-answer-weightage={op.weightage}
                            />{op.option}
                        </div>
                    })}
                   {props.answerType === 'many' ? <NextButtons /> : null}
            </Card.Body>
        </Card>
            
        </div>
    )
};

const NextButtons = (props) =>{
    return (
        <div>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
        </div>
    )
}

export default question;