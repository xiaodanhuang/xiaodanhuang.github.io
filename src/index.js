import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// 引入redux
import { createStore} from 'redux'
import { Provider} from 'react-redux'
// 引入reducer
import reducer from './redux/reducers'
import './index.css';
import App from './App';
import Blog from './container/resume/resume'
// 创建一个初始化的state
const initState = {
    info:{
        name: '李佳',
        school: '杭州电子科技大学',
        age: '18届毕业生',
        status: '前端开发工程师养成中...',
        tel: '+86 15958031927',
        position: '乐其 · 杭州',
        mail: 'danhuangjia@163.com',
        skill: '技能',
        life:[
            "2017.4.12-2017.8.31 海康威视 前端实习",
            "2017.4.12-至今 杭州乐其 前端实习"
        ]
    },
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
// 创建store
const store = createStore(reducer, initState);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="root">
                <Route exact path="/" component={App} />
                <Route exact path="/blog"component={Blog} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
