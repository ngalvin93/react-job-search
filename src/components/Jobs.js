import React from 'react'
import '/Users/alvinng/DigitalCrafts/class-exercise/112319_react_job_api/react-jobs/src/styles/Jobs.css'
import JobsListItem from './JobsListItem'
import axios from 'axios'

class Jobs extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            jobs: []
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3001/api/jobs')
            .then(({data})=>{this.setState({ jobs: data })})
            .catch((error)=>{console.log('axios error!!!', error)})
    }

    render () {
    let jobsJSX = this.state.jobs.map((job, index)=>{
        return <JobsListItem key={index} {...job}/>
    })

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Jobs in Atlanta</h1>
                    <p className="App-subtitle">Click to explore jobs</p>
                </header>
            </div>
            <div className="Jobs">{ jobsJSX }</div>
        </div>
    )}
}

export default Jobs