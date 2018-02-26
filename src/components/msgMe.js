import React,{Component} from 'react'
import'../css/msg.css'
class Bubble extends Component{
    render(){
        return(
            <div className="bubble-group">
                <div className="bubble1"></div>
                <div className="bubble2"></div>
                <div className="bubble3"></div>
            </div>
        )
    }
}
class MsgMe extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:true
        }
    }
    componentDidMount() {
         setTimeout(() => {
                this.setState({
                    msg:false
                });
            }, 1000
        );
    }
    render(){
        return(
        this.props.msg?(
                <div className="msg-left">
                    <span className="msg-me">
                        {this.state.msg?(<Bubble/>):this.props.msg}
                        </span>
                </div>):''
        )
    }
}
export default  MsgMe