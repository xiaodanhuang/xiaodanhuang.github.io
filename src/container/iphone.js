import React,{Component} from 'react'
import { connect } from 'react-redux';
import MsgMe from '../components/msgMe'
import MsgToMe from '../components/msgToMe'
import ToolTip from '../components/toolTip'
import '../css/iphone.css'
class Iphone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToolShow:true,
            fromDanHuang:[
                {   id:'000',
                    left:'你好，我是小蛋黄，很高兴遇见你',
                    response:[
                        {
                            content:'我也是呢',
                            nextLeft:'001'
                        },{
                            content:'啥，蛋黄？',
                            nextLeft:'002'
                        }
                    ]
                },
                {   id:'001',
                    left:'我最近在做自己的微信公众号，你想知道吗',
                    response:[
                        {
                            content:'敲想知道的',
                            nextLeft:'003'
                        },{
                            content:'公众落伍啦，我才不要捏',
                            nextLeft:'004'
                        },{
                            content:'我被你说无语了，真是的',
                            nextLeft:'005'
                        }
                    ]
                },
                {   id:'002',
                    left:'蛋黄，就是我啦，想知道我是干什么的吗？',
                    response:[
                        {
                            content:'快说快说～～',
                            nextLeft:'006'
                        },{
                            content:'我才不要呢',
                            nextLeft:'007'
                        }
                    ]
                },
                {   id:'003',
                    left:'想知道，就关注我的微信公众号"盗贼姑娘"吧',
                    response:[
                        {
                            content:'为啥叫盗贼姑娘啊',
                            nextLeft:'008'
                        }
                    ]
                },
                {   id:'004',
                    left:'嘤嘤嘤，你竟然这样对我，不理你哼',
                    response:[
                        {
                            content:'为啥叫盗贼姑娘啊',
                            nextLeft:'100'
                        }
                    ]
                },
                {   id:'005',
                    left:'嘤嘤嘤，别无语啊，我是大龄化妆追星的前端少女，如果你有什么想跟我分享的你可以跟我说嘛',
                    response:[
                        {
                            content:'为啥叫盗贼姑娘啊',
                            nextLeft:'100'
                        }
                    ]
                },
                {   id:'006',
                    left:'我奏是可爱的可爱的前端猪猪女孩',
                    response:[
                        {
                            content:'为啥叫盗贼姑娘啊',
                            nextLeft:'100'
                        }
                    ]
                },
                {   id:'007',
                    left:'那...那，我给你p图，给你剪片，给你做前端，实在不行后端我也包了，你再问问我呗',
                    response:[
                        {
                            content:'那好吧，你喜欢做啥啊',
                            nextLeft:'009'
                        }
                    ]
                },
                {   id:'008',
                    left:'因为啊，我觉得这个名字比较霸气',
                    response:[
                        {
                            content:'呵呵呵呵呵',
                            nextLeft:'100'
                        }
                    ]
                },
                {   id:'009',
                    left:'大龄追星女孩，穷游女孩，p图女孩，剪片子女孩，画的一手烂画的女孩，在前端道路上不断前进的猪猪女孩',
                    response:[
                        {
                            content:'且',
                            nextLeft:'010'
                        }
                    ]
                },
                {   id:'010',
                    left:'且啥啊，不想和你说话了',
                    response:[
                        {
                            content:'且',
                            nextLeft:''
                        }
                    ]
                },
                {   id:'100',
                    left:'此用户在修炼中，勿扰。。。。',
                    response:[
                        {
                            content:'蛋黄拒绝与你谈话',
                            nextLeft:'100',
                        }
                    ]
                },
            ],
            msg:[{left:'你好，我是小蛋黄，很高兴遇见你',right:''}],
            tooltip:''

        };


    }
    handleTool=()=>{
        this.setState(preState=>({
            isToolShow:!preState.isToolShow
        }));

    }
    handleNext=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        let next=e.currentTarget.getAttribute('data-key');
        let value=e.currentTarget.getAttribute('value');
        let arr=this.state.msg;
        arr[arr.length-1].right=value;
        this.state.fromDanHuang.forEach(item=>{
            if(item.id==next){
                arr.push({left:item.left,right:''});
                this.setState(preState=>({
                    msg:arr,
                    tooltip:item.response,
                    isToolShow:!preState.isToolShow
                }));

            }
        })

    }

    componentDidMount() {
        this.setState(preState=>({
            tooltip:preState.fromDanHuang[0].response,

        }))
    }
    render(){
        return(
            <div className="iphone">
                <header>前端渣渣-小蛋黄</header>
                <div className="content">
                    {
                        this.state.msg.map((item,index) =>
                                <div key={'msgToMe'+index}>
                                    <MsgMe num={this.state.msg.length-1}index={index}msg={item.left}/>
                                    <MsgToMe msg={item.right}/>
                                </div>
                        )
                    }
                </div>
                <footer onClick={this.handleTool}>发送消息给蛋黄...</footer>
                {this.state.isToolShow?'':(
                    <ToolTip nextMsg={this.handleNext}
                             tooltip={this.state.tooltip}
                             onToolTip={this.handleTool}/>
                )}
            </div>
        )
    }
}
export default Iphone