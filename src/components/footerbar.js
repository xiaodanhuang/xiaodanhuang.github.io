import React,{Component} from 'react'
import '../css/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer-bar">
                <div className="footer-left">
                    <span>EN</span>
                    <span>源码</span>
                    <span>博客</span>
                    <span>花瓣</span>
                    <span>哔哩哔哩</span>
                </div>
                <div className="footer-right"></div>
            </div>
        )
    }

}

export default  Footer