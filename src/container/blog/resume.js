import React, { Component } from 'react';
import {Switch,Icon } from 'antd';
import "../../css/blog.css"
import HomePage from '../../components/resume/homePage'
import Skill from '../../components/resume/skill'
import Job from '../../components/resume/job'


class Blog extends Component {
    constructor(props){
        super(props);
        this.state={
            isShow:0,
            status: {
                info: {
                    name: '李佳',
                    school: '杭州电子科技大学',
                    age: '18届毕业生',
                    status: '前端开发工程师养成中...',
                    tel: '+86 15958031927',
                    position: '乐其 · 杭州',
                    mail: 'danhuangjia@163.com',
                    skill: '技能',
                    life:[
                        "2017.4.12-2017.8.31 海康威视 前端实习",
                        "2017.4.12-至今 杭州乐其 前端实习"
                    ]
                }
            },
                en:{
                    info:{
                        name:'李佳',
                        school:'杭州电子科技大学',
                        age:'18届毕业生',
                        status:'前端开发工程师养成中...',
                        tel:'+86 15958031927',
                        position:'乐其 · 杭州',
                        mail:'danhuangjia@163.com',
                        skill:'技能',
                        life:[
                            "2017.4.12-2017.8.31 海康威视 前端实习",
                            "2017.4.12-至今 杭州乐其 前端实习"
                        ]
                    }
                },
                chinese:{
                    info:{
                        name:'Jia Li',
                        school:'Hangzhou DianZi University',
                        age:'18  Recent College Grads',
                        status:'front-end developer...',
                        tel:'+86 15958031927',
                        position:'leqee · Hangzhou',
                        mail:'danhuangjia@163.com',
                        skill:'Skills',
                        life:[
                            "2017.4.12-2017.8.31 HIKVISION front-end developer",
                            "2017.4.12-till now Hangzhou leqee front-end developer"
                        ]

                    }
                }

        }
    }
    changeLanguage=(e)=>{
        if(e){
            this.setState(preState=>({
                status:preState.en,

            }))
        }
        else{
            this.setState(preState=>({
                status:preState.chinese,

            }))
        }


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
    componentDidMount() {
    }
    render() {
        return (
        <div className="blog">
            <Switch onChange={this.changeLanguage} className="button-language" checkedChildren="EN"
                    unCheckedChildren="中文" defaultChecked/>
            {this.state.isShow==0?(<HomePage info={this.state.status.info}/>):''}
            {this.state.isShow==1?(<Skill skill={this.state.status.info.skill}/>):''}
            {this.state.isShow==2?(<Job life={this.state.status.info.life}  />):''}

            <Icon onClick={this.nextPage}className="nextPage" type="arrow-down" style={{fontSize: 30, color: 'white'}}/>

        </div>
        );
    }
}

export default Blog;

