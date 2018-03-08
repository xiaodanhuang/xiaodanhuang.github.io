let info={
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
}
let chinese={
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
    }
    let english={
        name:'Jia Li',
        school:'Hangzhou DianZi University',
        age:'18  Recent College Grads',
        status:'front-end developer...',
        tel:'+86 15958031927',
        position:'leqee · Hangzhou',
        mail:'danhuangjia@163.com',
        skill:'Skills',
        life:[
            "2017.4.12-2017.8.31 HIKVISION front-end developer",
            "2017.4.12-till now Hangzhou leqee front-end developer"
            ]
    }
export default function info(state=info, action) {

    switch (action.type) {
        case 'change_language':
            if(action.text){
                return chinese
            }
            else{
                return english
            }
            break;

        default:
            return state
    }
}