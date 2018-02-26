import React,{Component} from 'react'
import'../css/msg.css'


class MsgToMe extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                this.props.msg?(
                    <div className="msg-right">
                        <span className="msg-toMe">{this.props.msg}</span>
                    </div>):''
        )
    }
}
export default   MsgToMe