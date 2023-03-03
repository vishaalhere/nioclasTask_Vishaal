import { MathJax } from 'better-react-mathjax'
import React from 'react'

const Question = ({currentQuestion}) => {
    return (
        <div className='questionContainer2'>
            <div style={{ margin: '0px 20px' }}>
                <span className='letterQ'>Q.</span>
                &nbsp;<span style={{ marginTop: '10px' }}><MathJax style={{ display: 'inline' }}>{currentQuestion ? currentQuestion : ""}</MathJax></span>
            </div>
            <div>
                <ul style={{ listStyleType: 'none', marginTop: '2rem' }}>
                    <li><input type='radio' name='options' />{`a) 0`}</li>
                    <li><input type='radio' name='options' />{`b) 1`}</li>
                    <li><input type='radio' name='options' />{`c) 2`}</li>
                    <li><input type='radio' name='options' />{`d) 3`}</li>
                </ul>
            </div>
        </div>
    )
}

export default Question