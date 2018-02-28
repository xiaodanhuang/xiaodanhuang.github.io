import React, { Component } from 'react';
import { Tooltip, Row,Col} from 'antd';
import '../../css/resume.css'
class Skill extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:[
                {
                    text:'HTML',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-html.png',
                    style:{
                        background:'white'
                    }
                },
                {
                    text:'CSS',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-css.png',
                    style:{
                        background:'white'
                    }
                },
                {
                    text:'Node',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-nodejs.png',
                    style:{
                        background: 'linear-gradient(rgb(140, 207, 0), rgb(128, 189, 1))'

                    }
                },
                {
                    text:'JavaScript',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-javascript.png',
                    style:{

                        background: 'linear-gradient(rgb(255, 235, 14), rgb(239, 221, 27))',
                        borderColor: 'rgb(255, 235, 14)'
                    }
                },
                {
                    text:'React',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-react.png',
                    style:{
                        background: 'linear-gradient(rgb(128, 147, 209), rgb(123, 142, 201))',
                        borderColor: 'rgb(128, 147, 209)'
                    }
                },
                {
                    text:'Vue',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-vue.png',
                    style:{
                        background:'white'
                    }

                },
                {
                    text:'Ps',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-photoshop.png',
                    style:{
                        background: 'rgb(0, 29, 38)',
                        border:' 5px solid rgb(0, 200, 255)'
                    }
                },
                {
                    text:'Final Cut Pro X ',
                    src:'http://osz5qtl3g.bkt.clouddn.com/icon-finalcutpro.png',
                    style:{
                        background: 'linear-gradient(rgb(29, 15, 79), rgb(19, 10, 51))',
                        borderColor: 'rgb(29, 15, 79)'
                    }
                }
            ]
        }
    }
    render(){
        return(
            <div className="skill">
                <header className="skill-header">{this.props.skill}</header>
                <Row className="row">
                {
                    this.state.msg.map(item =>
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
export  default Skill
