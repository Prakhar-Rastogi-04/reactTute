import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

// import Person from './Person/Person';
import Question from './Qusetion/Question';
import Panelview from './Qusetion/Panelview';
import Result from './Result/Result';
import QuestionSet from './api/questionSet';
import Survey from './Survey/Survey';



class App extends Component {
  state = {
    questions : QuestionSet,
    updatedQuestionList: [],
    panelQuestion : QuestionSet[0],
    panelIndex : 0,
    resultState: false
  };

  componentDidMount() {
    async function makeRequest() {
      const configGet = {
          method: 'get',
          url: 'http://localhost:8080/survey-questions',
          headers: { 'User-Agent': 'Console app',
                      'Access-Control-Allow-Origin': '*',
                      'Content-Type': 'application/json' 
        }
      }
      let res = await axios(configGet).then((response) => {
        console.log('response ',response);
      });
      // console.log(res.data);
    }
    makeRequest();
  }



  answerSelected(obj){
    const [quesData, event] = [...obj];
    const updatedQuestions = [...this.state.questions];
    if(event.currentTarget.type === 'radio'){
      const questionId = event.currentTarget.name,
      answerIndex = event.currentTarget.getAttribute('data-option-index'),
      answerId = event.currentTarget.getAttribute('data-answer-id'),
      qWeightage = event.currentTarget.getAttribute('data-question-weightage'),
      ansWeightage = event.currentTarget.getAttribute('data-answer-weightage');
      updatedQuestions[quesData.qIndex].selectedAnswers = []; 
      // updatedQuestions[quesData.qIndex].selectedAnswers.push(answerId);
      updatedQuestions[quesData.qIndex].selectedAnswers.push(answerIndex);
    }
    console.log(event);
    this.setState({
      questions : updatedQuestions
    });
    console.log('updated states ',this.state.questions);
  }

  pushNextQuestion(indx){
    if(indx !== this.state.questions.length){
      this.setState({
        panelIndex: indx,
        panelQuestion : QuestionSet[indx],
      })
    } else {
      this.postData()
      // this.setState({
      //   resultState : true
      // })
    }
  }

  pushBackQuestion(indx){
      this.setState({
        panelIndex: indx-1,
        panelQuestion : QuestionSet[indx-1],
      })
  }

  answerSelectedPanel(obj){
    let [quesData, event] = [...obj];
    let answerIndex = event.currentTarget.getAttribute('data-option-index');
    let questionIndex = quesData.qIndex;
    this.answerSelected(obj);
    setTimeout(() => this.pushNextQuestion(questionIndex+1), 1000);
    
  }
  postData(){
    
  // let res = axios.post('http://localhost:8080/survey-questions', {data:JSON.stringify( this.state.questions)})
  let res = axios.post('http://localhost:4001/question/submit', {data:JSON.stringify( this.state.questions), userId:Math.random()*1000})
  .then((response) => {
    console.log('posted data successfully')
      // if(response.status === 200){
      //   console.log('response ',response);
      //   // return response
      //   this.setState({
      //     updatedQuestionList: response.data.data,
      //     resultState : true
      //   })
      // }  
      
        
        // return response;
      });
        console.log('post data' ,res);
  }
  // renderResult() {
  //  const response = this.postData();
  //   return <Result {...response.data.data} />;
  // }

  render() {
    let questionList = null;
    let panelView = null;
    let resultView = null;
    if(this.state.questions.length > 0){
      questionList = (
        <div>
        {this.state.questions.map((ques,index) => {
          return <Question {...ques} qIndex={index} answerSelected = {(obj)=>this.answerSelected(obj)} />
        })}
        </div>
      )
      panelView = (
        <div>
          <Panelview {...this.state.panelQuestion} 
          qIndex={this.state.panelIndex} 
          answerSelectedPanel = {(obj)=>this.answerSelectedPanel(obj)} 
          pushBackQuestion={(indx)=>this.pushBackQuestion(indx)}/>
        </div>
      )

      resultView = (
        <div>
          <Result   />
          <div>
            {
                  <table>
                    <thead>
                        <tr>
                            <td>Question No.</td>
                            <td>Question Description</td>
                            <td>Your Answer</td>
                            <td>Score</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.updatedQuestionList.map((ob,indx) => {
                      // let selectedAnswers = ob.selectedAnswers;
                      // let option = ob.answers[ob.selectedAnswers].option;
                      return (
                        <tr>
                          <td>{indx+1}</td>
                          <td>{ob.questionDescription}</td>
                          <td> {ob.answers[ob.selectedAnswers].option}</td>
                          <td>{ob.score}</td>
                        </tr>
                      )
                    })}
                    </tbody>
                </table>
            }
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <h1 className="surveyHead">React App</h1>
        {/* {questionList} */}
        {/* {this.state.resultState ? this.renderResult() : panelView} */}
        {this.state.resultState ? resultView : panelView}
        {/* {panelView} */}
      </div>
    );
  }

}

export default App;
