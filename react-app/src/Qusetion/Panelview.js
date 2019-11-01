import React, {useState} from'react';
import { Card, Button } from 'react-bootstrap';
import  TabsView  from './TabView';
import { CSSTransition } from 'react-transition-group';
const panel = (props) => {
    // console.log('this ',this);
    this.changeInput = (event) => {
        props.answerSelectedPanel([props, event]);
    }
    this.pushBackQuestion =()=>{
        props.pushBackQuestion(props.qIndex);
    }
    return (
        // <CSSTransition
        //     className="container"
        //     component="div"
        //     transitionName="fade"
        //     transitionEnterTimeout={800}
        //     transitionLeaveTimeout={500}
        //     transitionAppear
        //     transitionAppearTimeout={500}
        // >
        <div>
           
        <Card key={props.questionId} style={{ width: '45rem', minHeight: 'auto' }} className="keep-center text-left">
            
            <Card.Body>
            <TabsView /> 
            {(props.qIndex+1 > 1) ? <div><button className="backBtn" onClick={this.pushBackQuestion}>back</button></div> : null }
                <Card.Title>Question No. {props.qIndex+1}</Card.Title>
                <Card.Text>
                    {props.questionDescription} ?
                </Card.Text>
                    {props.answers.map((op,index)=>{
                    return <div> 
                            <input 
                            className="radioCustomButton"
                            type={props.answerType === 'one' ? 'radio' : 'checkbox'}
                            name ={props.questionId} 
                            value={op._id}
                            onChange={this.changeInput}
                            data-option-index={index}
                            data-question-weightage={props.weightage}
                            data-answer-weightage={op.weightage}
                            data-answer-id={op._id}
                            />{op.option}
                        </div>
                    })}
                   {props.answerType === 'many' ? <NextButtons /> : null}
            </Card.Body>
        </Card>
        </div>
        // </CSSTransition> 
    )
};

const NextButtons = (props) =>{
    return (
        <div>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success" onClick={this.changeInput}>Success</Button>
        </div>
    )
}

export default panel;