import React, { Component } from 'react';
import { Card,Icon,Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import '../../css/resume.css'
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return (
            <div className="home-page">
                <div className="avatar"></div>
                <div>
                    <Link to="/"><Icon type="home" style={{ fontSize: 22, color: 'white' }}/></Link>
                </div>
                <Card title={this.props.info.name} bordered={false}>
                    <Row>
                        <Col span={8}>{this.props.info.school}</Col>
                        <Col span={8}>{this.props.info.age}</Col>
                        <Col span={8}>{this.props.info.status}</Col>
                    </Row>
                    <Row>
                        <Col span={8}><Icon type="mobile" />{this.props.info.tel}</Col>
                        <Col span={8}><Icon type="environment-o" />{this.props.info.position}</Col>
                        <Col span={8}><Icon type="mail" />{this.props.info.mail}</Col>
                    </Row>

                </Card>
            </div>
        )
    }
}
export  default HomePage