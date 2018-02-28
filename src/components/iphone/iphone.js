import React,{Component} from 'react'
import { connect } from 'react-redux';
import MsgMe from './children/msgMe'
import MsgToMe from './children/msgToMe'
import ToolTip from './children/toolTip'
import '../../css/iphone.css'
class Iphone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToolShow:true,
            fromDanHuang:[
                {   id:'0000',
                    left:'你好，我是小蛋黄，很高兴遇见你',
                    response:[
                        {
                            content:'我也是呢',
                            nextLeft:'0001'
                        },{
                            content:'啥，蛋黄？',
                            nextLeft:'0002'
                        }
                    ]
                },
                {   id:'0001',
                    left:'我最近在做自己的微信小程序，你想知道吗',
                    response:[
                        {
                            content:'敲想知道的',
                            nextLeft:'0003'
                        },{
                            content:'微信小程序，我才不要捏',
                            nextLeft:'0004'
                        },{
                            content:'我跟你很熟嘛？哼',
                            nextLeft:'0005'
                        }
                    ]
                },
                {   id:'0002',
                    left:'蛋黄，就是我啦，想知道我是干什么的吗？',
                    response:[
                        {
                            content:'快说快说～～',
                            nextLeft:'0006'
                        },{
                            content:'我才不要呢',
                            nextLeft:'0007'
                        }
                    ]
                },
                {   id:'0003',
                    left:'想知道就搜索微信小程序"一个小贼"吧',
                    response:[
                        {
                            content:'为啥叫一个小贼啊',
                            nextLeft:'0008'
                        }
                    ]
                },
                {   id:'0004',
                    left:'嘤嘤嘤，你竟然这样对我，不理你哼',
                    response:[
                        {
                            content:'话说，你平时喜欢干啥啊',
                            nextLeft:'0009'
                        }
                    ]
                },
                {   id:'0005',
                    left:'嘤嘤嘤，别这样啊，我可是可以上可carry你吃鸡，下可王者荣耀的人呢',
                    response:[
                        {
                            content:'真假的？',
                            nextLeft:'0010'
                        }
                    ]
                },
                {   id:'0006',
                    left:'我就是18届毕业生，致力于在前端道路上不断修炼的小菜鸟',
                    response:[
                        {
                            content:'你还有什么其他爱好吗',
                            nextLeft:'0009'
                        }
                    ]
                },
                {   id:'0007',
                    left:'那...那，你想知道什么啊，你再问问我呗',
                    response:[
                        {
                            content:'那你的爱好是什么啊？',
                            nextLeft:'0009'
                        }
                    ]
                },
                {   id:'0008',
                    left:'因为啊，我觉得这个名字比较霸气，剩下的自己看吧',
                    response:[
                        {
                            content:'呵呵呵呵呵',
                            nextLeft:'1000'
                        }
                    ]
                },
                {   id:'0009',
                    left:'嗯...嗯，我这人喜欢追星，日常画画素描，剪剪片子，如果你想看的话可以点击左下角自己选择哟',
                    response:[
                        {
                            content:'且',
                            nextLeft:'1000'
                        }
                    ]
                },
                {   id:'0010',
                    left:'当然了',
                    response:[
                        {
                            content:'且',
                            nextLeft:'1000'
                        }
                    ]
                },
                {   id:'1000',
                    left:'蛋黄突然被主管关掉了Wi-Fi，不能跟你说话辣',
                    response:[
                        {
                            content:'Wi-Fi没有辣',
                            nextLeft:'100',
                        }
                    ]
                },
            ],
            msg:[{left:'你好，我是小蛋黄，很高兴遇见你',right:''}],
            tooltip:'',
            toDanhuang:'发送消息给蛋黄...'

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
        if(next==100){
            this.setState(preState=>({
                isToolShow:!preState.isToolShow
            }));
            return
        }
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
                <footer onClick={this.handleTool}>{this.state.toDanhuang}</footer>
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