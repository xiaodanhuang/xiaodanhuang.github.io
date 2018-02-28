import React, { Component } from 'react';
import '../../css/resume.css'
import { Timeline, Icon } from 'antd';

class Job extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="job">
                <Timeline className="job-life">
                    {
                        this.props.life.map(item =>
                            <Timeline.Item>{item}</Timeline.Item>
                        )
                    }
                </Timeline>
            </div>
        );
    }

}
export  default Job