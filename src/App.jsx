import { useEffect, useState } from 'react'
import './App.css'
import { MathJaxContext } from 'better-react-mathjax'
import Question from './components/Question'
import Action from './components/Action'

function App() {

  const questions = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901']
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [currentPage, setCurrentPage] = useState(0);

  const getData = async (searchString) => {
    const data = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${searchString}`);
    const resolved_data = await data.json();
    setCurrentQuestion(resolved_data[0].Question);
  }
  
  useEffect(() => {
    getData(questions[currentPage]);
  }, [currentPage])

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <MathJaxContext>
      <div className='container'>
        <div className='questionContainerMain'>
          <div className='questionContainer1'>
            <h2>MCQ Quiz</h2>
          </div>
          <Question currentQuestion={currentQuestion} />
          <Action handlePrev={handlePrev} handleNext={handleNext} currentPage={currentPage} />
        </div>
      </div>
    </MathJaxContext>
  )
}

export default App
