import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Switch,Icon } from 'antd';
import "../../css/blog.css"
import {changeLanguage} from '../../redux/action'
import HomePage from '../../components/resume/homePage'
import Skill from '../../components/resume/skill'
import Job from '../../components/resume/job'
import {store} from'../../index'
import resumeSkill from "../../redux/reducers/resumeSkill";



class Blog extends Component {
    constructor(props){
        super(props);
        this.state={
            isShow:0
        }
    }
    handleChange=(e)=>{
        this.props.dispatch(changeLanguage(e))
    }
    nextPage=()=>{
        let index=this.state.isShow+1;
        if(index>2){
            index=0
        }
        this.setState(preState=>({
            isShow:index

        }))
    }
    render() {
        return (
        <div className="blog">
            <Switch onChange={this.handleChange} info={this.props.info} className="button-language" checkedChildren="EN"
                    unCheckedChildren="中文" defaultChecked/>
            {this.state.isShow==0?(<HomePage info={this.props.info}/>):''}
            {this.state.isShow==1?(<Skill info={this.props.info} skill={this.props.skill}/>):''}
            {this.state.isShow==2?(<Job info={this.props.info}/>):''}

            <Icon onClick={this.nextPage}className="nextPage" type="arrow-down" style={{fontSize: 30, color: 'white'}}/>

        </div>
        );
    }
}
function mapStateToProps(state) {
    var info = state.info;
    var skill=state.resumeSkill
    return {
        info:info,
        skill:skill
    }
}
export default connect(mapStateToProps)(Blog)



