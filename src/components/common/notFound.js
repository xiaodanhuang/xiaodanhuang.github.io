import React,{Component} from 'react'
import '../../css/notFound.css'
class NotFound extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <div className="not-found">
                <div className="danhuang"></div>
                <div>404 NOT FOUND</div>
            </div>
        )
    }
}
export  default NotFound