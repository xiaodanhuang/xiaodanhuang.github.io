import React, { Component } from 'react';
import { Tooltip, Row,Col} from 'antd';
import '../../css/resume.css'
import {connect} from "react-redux";
class Skill extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="skill">
                <header className="skill-header">{this.props.info.skill}</header>
                <Row className="row">
                {
                    this.props.skill.map(item =>
                            <Col span={6} value={100}  className="col">
                                <Tooltip placement="top" title={item.text}>
                                    <div className="img-box" style={item.style}>
                                        <img src={item.src}/>
                                    </div>
                                </Tooltip>
                            </Col>
                    )
                }
                </Row>
            </div>
        )
    }

}
export default Skill
