import React from 'react'
import '/Users/alvinng/DigitalCrafts/class-exercise/112319_react_job_api/react-jobs/src/styles/Job.css'

class Job extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount () {
        let jobId = this.props.match.params.id
    }

    render () {
        return (
            <div className="Job">
                <h1>Job Title</h1>
                <a><img src="logo.jpg" width="100" /></a>
                <div>How to Apply</div>
                <span>Job Description</span>
            </div>
        )
    }
}

export default Job