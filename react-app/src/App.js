import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Person from './Person/Person';
import Question from './Qusetion/Question';
import QuestionSet from './api/questionSet';
import Survey from './Survey/Survey';



class App extends Component {
  state = {
    questions : QuestionSet
  };

  nameChangeHandler = (changedName) => {
    this.setState({
      person: [ {name:'Prakhar kumar Rastogi', age:25},
      {name:changedName, age:35},
      {name:'DEF', age:45}]
    });
  };

  answerSelected(obj){
    const [quesData, event] = [...obj];
    const updatedQuestions = [...this.state.questions];
    if(event.currentTarget.type === 'radio'){
      const questionId = event.currentTarget.name,
      answerIndex = event.currentTarget.getAttribute('data-option-index'),
      qWeightage = event.currentTarget.getAttribute('data-question-weightage'),
      ansWeightage = event.currentTarget.getAttribute('data-answer-weightage');
      updatedQuestions[quesData.qIndex].selectedAnswers = []; 
      updatedQuestions[quesData.qIndex].selectedAnswers.push(answerIndex);
    }
    console.log(event);
    
    this.setState({
      questions : updatedQuestions
    });

    console.log('updated states ',this.state.questions);
  }


  render() {
    let questionList = null;
    // if(QuestionSet.length > 0){
    if(this.state.questions.length > 0){
      questionList = (
        <div>
      
           {this.state.questions.map((ques,index) => {
          //  return <Question 
          //   qIndex={index}
          //   qLabel={ques.questionDescription} 
          //   qId={ques.questionId} 
          //   qWeightage={ques.weightage}
          //   qOps={ques.answers} 
          //   qType={ques.answerType} 
          //   answerSelected = {(event)=>this.answerSelected(event)}/>
          // })}
          return <Question {...ques} qIndex={index} answerSelected = {(obj)=>this.answerSelected(obj)} />
        })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1 className="surveyHead">React App</h1>
        {questionList}
      </div>
    );
  }

}

export default App;
