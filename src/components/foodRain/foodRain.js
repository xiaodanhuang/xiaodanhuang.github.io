import React,{Component} from 'react'
import '../../css/foodRain.css'
class FoodRain extends Component{
    constructor(props){
        super(props);
        this.state={
            style:[]
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.rainProduce(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    rainProduce=()=>{
        let arr=[]
        for(let i=0;i<100;i++){
            let width=Math.floor(Math.random()*5+3)*10;
            let left=Math.floor(Math.random()*9+1)*10+'%';
            arr.push(
                {   width:width,
                    height:width,
                    backgroundImage:`url(${require("../../images/icon_food_6.png")})`,
                    backgroundSize:'cover',
                    marginLeft:left,
                    animationDelay:Math.random().toFixed(2)+'s'
                }
            )
        }
        this.setState({
            style:arr
        })
    }
    render(){
        return (
            <div className="foodRain">
                {
                    this.state.style.map((item,index) =>
                        <div  date-key={index}className="rain-drop" style={item}></div>
                    )
                }
            </div>
        )
    }

}
export  default  FoodRain