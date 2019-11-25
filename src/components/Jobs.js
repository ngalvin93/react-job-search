import React from 'react'
import '/Users/alvinng/DigitalCrafts/class-exercise/112319_react_job_api/react-jobs/src/styles/Jobs.css'
import JobsListItem from './JobsListItem'

const Jobs = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Jobs in Atlanta</h1>
                    <p className="App-subtitle">Click to explore jobs</p>
                </header>
            </div>
            <div className="Jobs"><JobsListItem /><JobsListItem /><JobsListItem /></div>
        </div>
    )
}

export default Jobs