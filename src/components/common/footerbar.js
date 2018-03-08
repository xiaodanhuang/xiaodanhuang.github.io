import React,{Component} from 'react'
import {Icon,Modal, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import '../../css/footerbar.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            language:"EN",
            visible:false
        }
    }
    handleClick=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        this.setState(preStates=>({
            language:preStates.language=="中文"?"EN":"中文"
        }));
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleClose = (e) => {
        this.setState({
            visible: false,
        });
    }
//<span onClick={this.handleClick}>{this.state.language}</span>

    render(){
        return(
            <div className="footer-bar">
                <div className="footer-left">
                    <a href="https://github.com/xiaodanhuang/xiaodanhuang.github.io" target="view_window"><span>源码</span></a>
                    <a href="https://xiaodanhuang.gitbooks.io/danhuangnotes/content/" target="view_window"><span>博客</span></a>
                    <Link to="/blog">简历</Link>
                </div>
                <div className="footer-right">
                    <a href="mailto:danhuangjia@163.com">
                        <span>
                            <Icon type="mail" style={{ fontSize: 22 }}/>
                        </span>
                    </a>
                    <a href="https://github.com/xiaodanhuang" target="view_window">
                        <span>
                            <Icon type="github"style={{ fontSize: 22 }} />
                        </span>
                    </a>
                    <span onClick={this.showModal}>
                        <Icon type="wechat" style={{ fontSize: 22 }}/>
                    </span>
                    <a href="https://weibo.com/5539256454" target="view_window">
                        <span>
                            <Icon type="weibo-circle"style={{ fontSize: 22 }} />
                        </span>
                    </a>
                    <a href="https://space.bilibili.com/29711537/#/" target="view_window">
                        <span>
                            <Icon type="youtube" style={{ fontSize: 22 }}/>
                        </span>
                    </a>
                </div>
                <Modal className="dialog-wechat" title="蛋黄的微信" footer={null} visible={this.state.visible} onCancel={this.handleClose}>
                  <img  className="pic-wechat"src="http://osz5qtl3g.bkt.clouddn.com/WechatIMG9.jpeg"/>
                </Modal>
            </div>
        )
    }

}

export default  Footer