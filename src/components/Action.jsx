import React from 'react'

const Action = ({ handlePrev, handleNext, currentPage }) => {
    return (
        <div className='questionContainer3'>
            <div className='buttons'>
                <button className='prevNextButtons' onClick={handlePrev} disabled={currentPage === 0}>Prev</button>
                <button className='prevNextButtons' onClick={handleNext} disabled={currentPage === 2}>Next</button>
            </div>
            <div style={{ marginBottom: '25px' }}>
                Page - {currentPage + 1}
            </div>
        </div>
    )
}

export default Action