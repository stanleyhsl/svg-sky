   const base = '/test/';
   const cfg = [
       { name: '灯塔动画背景', url: 'sky', desc: ['clipPath，mask渐变及基本属性','名类标签用法'],icon:'https://cdn.weipaitang.com/static/2020032608197c5f-4111-7c5f4111-a356-89db98138756-W432H408' },
       { name: '弹性球位移动画', url: 'forceBall', desc: ['clipPath，mask渐变及基本属性','名类标签用法'],icon:'https://cdn.weipaitang.com/static/202003261d27af5e-815c-af5e815c-a5fa-75fc95a8b658-W864H864' },
       { name: 'svg的引入方式', url: 'svgLink', desc: ['三种方式：正常，雪碧图，外部链接'], icon:'https://cdn.weipaitang.com/static/202003262223ce7e-8b58-ce7e8b58-19e2-eabc030d35ff-W1232H1116'},
       { name: '分数动画', url: 'loading/index', desc: ['线型变更，css动画'], icon:'https://cdn.weipaitang.com/static/2020032675b4d34a-b402-d34ab402-9d85-55ad4dda7630-W582H608'},
       { name: '酷炫按钮', url: 'loading/button', desc: ['hover设置svg的Animation keyframes动画','设置stroke-dasharray;stroke-dashoffset;'], icon:'https://cdn.weipaitang.com/static/20200326f240889d-1879-889d1879-4b3c-45525d646777-W756H598'},
       { name: '路径延展动画', url: 'path/index', desc: ['原生path伸长动画'], icon:'https://cdn.weipaitang.com/static/202003268b040cd3-98d3-0cd398d3-b4a9-f950d06d0613-W896H1000'},
       { name: '路径动画1', url: 'path/ball', desc: ['dom+svg:小方块沿svg路径的css原生动画'], icon:'https://cdn.weipaitang.com/static/202003260c863d2c-a7bd-3d2ca7bd-0015-0aa3a5bf0e3e-W622H584'},
       { name: '路径动画2', url: 'path/cpath', desc: ['svg小方块运动，原来生动画','animateMotion、path、rect'],icon:'https://cdn.weipaitang.com/static/202003267a8e5cad-2922-5cad2922-35a8-508f31966394-W780H914'},
       { name: '路径mask动画', url: 'path/tick', desc: ['路径做为mask，给mask做动画，从而使用位置有动画效果'],icon:'https://cdn.weipaitang.com/static/2020032680319d42-e7d7-9d42e7d7-2647-7b3934193ab1-W520H562' },
       { name: '文字路径动画', url: 'path/text', desc: ['文字延路径运动','文字的特性'],icon:'https://cdn.weipaitang.com/static/20200326cd8b978a-c45c-978ac45c-f636-a2702dd75e40-W1374H954' },
       { name: '菜单图标', url: 'menuCss', desc: ['css，css图标变形动画'],icon:'https://cdn.weipaitang.com/static/20200326d4cd0a70-9804-0a709804-21ce-718049fbf4f7-W768H674' },
   ];
   const cfgLib = [
       { name: '菜单图标', url: 'menuGs', desc: ['GreenSock，一个不错的图标变形时序动画'],icon:'https://cdn.weipaitang.com/static/2020032681a5770e-6de4-770e6de4-f6c9-c1571700a9ba-W684H518' },
       { name: '变形动画', url: 'animal', desc: ['GreenSock，第三方库+插件'], icon:'https://cdn.weipaitang.com/static/202003265e60c3ea-cce0-c3eacce0-6588-d19e27cfe990-W734H654'},
       { name: '非线性转动动画', url: 'ease', desc: ['GreenSock，第三方库，TweenMax'], icon:'https://cdn.weipaitang.com/static/202003267166897e-455c-897e455c-3809-afa86f00b95c-W732H782'},
       { name: '绿人变形动画', url: 'man', desc: ['GreenSock，第三方库，TweenMax'], icon:'https://cdn.weipaitang.com/static/202003264922292a-b41e-292ab41e-4b9b-7b3b993455ca-W422H482'},
       { name: '宇航员运行路径', url: 'motionPath', desc: ['GreenSock，第三方库MotionPath插件'], icon:'https://cdn.weipaitang.com/static/202003264b6733e7-6060-33e76060-96ab-dc0afe037687-W650H670'},
       { name: 'ease运行特效', url: 'easeVisualizer', desc: ['GreenSock，第三方库'], icon:'https://cdn.weipaitang.com/static/202003267a999e41-31f5-9e4131f5-31ab-a10d565fb649-W652H620'},
       { name: 'anime动物变形', url: 'animeTansfer', desc: ['anime库'], icon:'https://cdn.weipaitang.com/static/2020032694f5d105-e5e9-d105e5e9-281d-c7d773838f6e-W1198H1126'},
       { name: '图形转换', url: 'animeTansferCircle', desc: ['anime库，图形转换,很好用','免费'], icon:'https://cdn.weipaitang.com/static/20200326daa8e4f3-53d8-e4f353d8-fa5d-d2e23409fdf6-W216H240'},
   ];



    const Tabs=[{
        route:'raw',
        name:'原生',
        cfg
    },{
        route:'extand',
        name:'使用库',
        cfg:cfgLib
    }];

    // 找到默认tab
    var searchParams = new URLSearchParams(window.location.search);
    const tab =searchParams.get("tab");
    const tabObj = Tabs.find(it=>it.route===tab)||Tabs[0]

    function Home() {
        const [data,setData]=React.useState(tabObj)

        const tabClick =it=>()=>{
            history.replaceState(0, 0, `?tab=${it.route}`);
            setData(it);
        }

        return (
           <div className="wrapper">
                <div className="header">
                    {
                        Tabs.map(it=><button  key={it.route} className={`${it===data?'active':''}`} onClick={tabClick(it)}>{it.name}</button>)
                    }
                    <button onClick={()=>window.location.href="https://t.weipaitang.com/my/index/seller/shophealth"}>webApp实例</button>
                </div>
                {
                    data.cfg.map(it => ( 
                        <a 
                            href={`${base}${it.url}.html`}
                            className = "item"
                            key = { it.url } 
                        >
                            <img src={it.icon}/>
                            <div className = "right"> 
                                <div className = "title" > {it.name} </div>   
                                {it.desc.map(desc=><div className = "desc" key={desc} > {desc} < /div>) } 
                            </div>  
                        </a>
                    ))
                }
           </div>

        )
   };

ReactDOM.render( <Home / > , document.getElementById('example'));

