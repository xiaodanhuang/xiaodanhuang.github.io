import React,{Component} from 'react'
import { List,Icon } from 'antd';
import '../../../css/iphone.css'
class ToolTip extends Component{
    constructor(props){
        super(props)
    };
    render(){
        return(
            <div className="tooltip">
                <List
                    header={<div className="tool-header">
                        <span className="header-content">发送消息给蛋黄...</span>
                        <Icon onClick={this.props.onToolTip}type="close" style={{ fontSize: 16 }}/>
                    </div>
                    }
                    bordered
                    dataSource={this.props.tooltip}
                    renderItem={item=> (<List.Item  value={item.content}data-key={item.nextLeft}onClick={this.props.nextMsg}>{item.content}</List.Item>)}
                />
            </div>
        )
    }
}
export default   ToolTip