import React from 'react'
import '/Users/alvinng/DigitalCrafts/class-exercise/112319_react_job_api/react-jobs/src/styles/JobsListItem.css'

class JobsListItem extends React.Component {
    render() {
        return (
            <div className="JobsListItem">
                <div className="left">
                    <b>Job Title</b>
                    <div>Company</div>
                </div>
                <div className="right">
                    <b>Type</b>
                    <div>Timestamp</div>
                </div>
            </div>
        )
    }
}

export default JobsListItem