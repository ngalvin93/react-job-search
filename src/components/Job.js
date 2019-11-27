import React from 'react'
import '/Users/alvinng/DigitalCrafts/class-exercise/112319_react_job_api/react-jobs/src/styles/Job.css'
import axios from 'axios'

class Job extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount () {
        let jobId = this.props.match.params.id
        axios.get('/api/jobs/' + jobId)
            .then(({data}) => {
                this.setState(data)
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    render () {
        return (
            <div className="Job">
                <h1>{ this.state.title }</h1>
                <a href={ this.state.company_url }>
                    <img src={ this.state.company_logo } width="100" />
                </a>
                <div dangerouslySetInnerHTML={{__html: this.state.how_to_apply}}></div>
                <span dangerouslySetInnerHTML={{__html: this.state.description}}></span>
            </div>
        )
    }
}

export default Job