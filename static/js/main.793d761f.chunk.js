(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{280:function(e,t,a){e.exports=a(617)},285:function(e,t,a){},617:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(75),o=a.n(i),r=(a(285),a(121)),c=a(122),l=a(133),u=a(131),m=(a(80),a(269)),f=a(21),p=a(271),x=a(134),_=a(132),d=a(639),h=a(644),v=a(645),g=a(642);function b(e){var t=n.a.useState(""),a=Object(_.a)(t,2),i=a[0],o=a[1],r=e.index,c=e.ans;return Object(s.useEffect)((function(){c&&o(c)}),{ans:c}),n.a.createElement("div",null,n.a.createElement("h4",{className:"question_title"},e.title),n.a.createElement(g.a,{const:"fieldset"},n.a.createElement(h.a,{"aria-label":e.title,name:e.title,value:i,onChange:function(t){o(t.target.value),e.returnAnswer(t.target.value,r)}},e.answers.map((function(e,t){return n.a.createElement(v.a,{className:"question_item",key:t,value:e,control:n.a.createElement(d.a,null),label:e})}))),n.a.createElement("div",{className:"chooseAnswer padding_margin"},n.a.createElement("p",null,e.message))))}var w=a(641),E=a(637);function A(e){var t=n.a.useState(!1),a=Object(_.a)(t,2),s=a[0],i=a[1],o=e.index;return n.a.createElement(E.a,null,n.a.createElement(v.a,{control:n.a.createElement(w.a,{className:"question_item",checked:s,onChange:function(t){i(t.target.checked),e.returnAxisName(t.target.checked,o)},key:e.key,value:e.name}),label:e.title}))}var y=a(128),j=a.n(y),O=a(638),k=(a(262),Object(O.a)((function(e){return{formControl:{paddingBottom:0}}})));function q(e){var t=k(),a=["#3B93EA","#F7C906","#00405E","#552E83","#010667","#009749"],s=e.axises.map((function(t,s){return{name:e.names[s],symbolSize:12,data:[t],type:"scatter",color:a[s],emphasis:{label:{show:!0,formatter:e.names[s],position:"top"}}}}));s.push({symbolSize:7,data:[e.myAxis],type:"scatter",color:"black",emphasis:{label:{show:!0,formatter:"\u042f",position:"top"}}});return n.a.createElement("div",{className:t.formControl},n.a.createElement(j.a,{option:{color:a,legend:{data:e.names,orient:"horizontal",bottom:"0%",width:"100%"},xAxis:{name:"x",min:-2,max:2},yAxis:{name:"y",min:-2,max:2},series:s}}))}var S=a(79),N=a.n(S);N.a.initializeApp({apiKey:"AIzaSyCxXwvIJFV9BDZFyQZyBs7k9M0GiI1MRuU",authDomain:"testing-a6f79.firebaseapp.com",databaseURL:"https://testing-a6f79.firebaseio.com",projectId:"testing-a6f79",storageBucket:"testing-a6f79.appspot.com",messagingSenderId:"886214831731",appId:"1:886214831731:web:9d4fee09d2061fead04406",measurementId:"G-DH4LKFT44D"});var C=new N.a.auth.GoogleAuthProvider,T=function(){N.a.auth().signInWithPopup(C)},I=N.a,B=a(640),z=a(643);function D(e){var t=e.axises_title.map((function(t,a){return t+": "+parseFloat(e.axises[a]).toFixed(2)}));return n.a.createElement(B.a,{url:"www.youtube.com",shareImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",quote:t.join("\n")},n.a.createElement(z.a,{size:"2.5rem"}))}var F=Object(O.a)((function(e){return{formControl:{height:60}}}));function P(e){F();var t,s,i=1/0,o=a(264),r=["#3B93EA","#F7C906","#00405E","#552E83","#010667","#009749"],c=e.partyAxises.map((function(a,n){var c={name:e.names[n],symbolSize:12,data:[[a[e.index],0]],type:"scatter",color:r[n],emphasis:{label:{show:!0,formatter:e.names[n],position:"top"}}};return(t=o([e.axisAverrage,0],[a[e.index],0]))<i&&(s={distance:i=t,title:e.names[n]}),c}));c.push({symbolSize:7,data:[[e.axisAverrage,0]],type:"scatter",color:"black",emphasis:{label:{show:!0,formatter:"\u042f",position:"top"}}});return n.a.createElement("div",{className:"scatter-line"},n.a.createElement("h5",null,e.axisName,": ",parseFloat(e.axisAverrage).toFixed(2)),n.a.createElement("div",null,n.a.createElement("div",{className:"decision"},n.a.createElement("p",{className:"minus"},e.axisPoints.minus),n.a.createElement("div",null,n.a.createElement("div",null)),n.a.createElement("p",{className:"plus"},e.axisPoints.plus)),n.a.createElement(j.a,{style:{height:"200px"},className:"scatter",option:{color:r,legend:{data:e.names,orient:"horizontal",bottom:"0%",width:"100%"},xAxis:{min:-2,max:2},yAxis:{show:!1},height:0,series:c}})),n.a.createElement("h4",null,'\u0421\u0430\u043c\u0430\u044f \u0431\u043b\u0438\u0437\u043a\u0430\u044f \u0432\u0430\u043c \u043f\u0430\u0440\u0442\u0438\u044f \u043f\u043e \u0432\u0437\u0433\u043b\u044f\u0434\u0430\u043c \u043d\u0430 \u043e\u0441\u0438 "',e.axisName,'" \u2014 "',s.title,'"'))}var M=a(264),J=a(603),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={questions:[],main_title:"",gateway:"",answers:{},notAnswered:[],axises:{},axis_points:[],total_axis:[],axis_title_values:[],axis_values:[],position:{},axis:[],axis_title:[],axises_object:[],axis_names:{},all_axis:{},answer_title_values:[],answer_values:[],count_axises:[],compass_compare:{},default_axises:[],all_axis_averrage:[],batch_axises:[],onlyTwoCheckBox:!0,showAnswers:!1,questions_on_page:0,first_questions:0},e.downloadData=function(){var t=J.parse(window.location.search,{decode:!1});console.log(t),fetch("https://raw.githubusercontent.com/Kabirov7/kloop-forms-test/master/final_config_test_0.json").then((function(e){return console.log("RESPONSE",e),e.json()})).then((function(t){console.log("DATA",t),e.setState({questions:t.questions,main_title:t.main_title,gateway:t.gateway,compass_compare:t.compass_compare,axis:t.axises,axis_title:t.axis_title,axis_title_values:t.axis_title_values,axis_values:t.axis_values,answer_title_values:t.answer_title_values,answer_values:t.answer_values,axises_object:t.axises_object,questions_on_page:t.questions_on_page,axis_points:t.axis_points})}))},e.uploadData=function(t){fetch(e.state.gateway,{method:"POST",mode:"no-cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(t){console.log("Error",t),e.setState({showAnswers:!0})}))},e.getNotAnswered=function(t,a){function s(e){return e.forEach((function(t,a){e[a]=Number(e[a])})),e}var n;"plus"==a?n=e.state.questions.slice(e.state.first_questions,e.state.first_questions+e.state.questions_on_page):"minus"==a&&(n=e.state.questions.slice(e.state.first_questions,e.state.first_questions-e.state.questions_on_page));var i=s(Object.keys(t.answers));return(n=s(Object.keys(n))).filter((function(t){return-1==i.indexOf(e.state.first_questions+t)}))},e.returnAnswer=function(t,a){var s=Object(x.a)({},e.state.answers);s[a]=t,e.setState({answers:s})},e.returnAxisName=function(t,a){var s=Object(x.a)({},e.state.axis_names);s[a]=t,e.setState({axis_names:s})},e.getAxisMainTemplate=function(e){for(var t,a=0;a<e.axises_object.length+1;a++)t=Object.assign({},e.axises_object[a],e.axises_object[a+1],t);return t},e.getAxisTemplate=function(e){var t,a,s,n,i=[],o=Object.entries(e.axis_names).map((function(n){if(t=n[1],a=n[0],s=e.axises_object[a],t)return i.push(s),s}));o=(o=o.filter((function(e){return void 0!==e}))).reverse();for(var r=0;r<o.length+1;r++)r!=o.length&&(n=Object.assign({},o[r],o[r+1],n));return n},e.returnAxis=function(t){var a=Object(x.a)({},e.state.axises);a=t,e.setState({axises:a})},e.getAxis=function(t){var a,s,n=Object.entries(t.answers),i=[],o={},r=n.map((function(e,n,o){s=e[0],a=e[1];var r=t.questions[s].answer,c=t.answer_title_values.indexOf(r),l=t.answer_values[c].indexOf(a),u=t.questions[s].axis,m=t.axis_title_values.indexOf(u),f=t.axis_values[m][l];return Object.keys(f).forEach((function(e){i.push(e)})),f}));i=i.sort(),Object(p.a)(new Set(i)).forEach((function(e,t){var a=i.lastIndexOf(e)+1-i.indexOf(e);o[e]=a})),e.returnAxis(r),e.getAxisAverage(r,o)},e.getAxisAverage=function(t,a){var s=e.getAxisTemplate(e.state),n=e.getAxisMainTemplate(e.state);Object.values(t).forEach((function(e){Object.keys(e).forEach((function(t){n[t]+=e[t],void 0!=s&&void 0!==s[t]&&(s[t]+=e[t])}))})),Object.keys(a).forEach((function(e){n[e]=n[e]/a[e]})),void 0!=s&&Object.keys(s).forEach((function(e){void 0!==a[e]&&(s[e]=s[e]/a[e])})),e.setState({all_axis_averrage:Object.values(n).reverse()}),void 0!=s&&e.distanceEuclid(s)},e.distanceEuclid=function(t){for(var a,s=1/0,n=[],i={distance:1/0,title:1/0},o=Object.keys(t),r=Object.values(t),c=[],l=[];l.length<e.state.compass_compare.axises.length;)l.push([]);o.forEach((function(t,a){n[a]=r[a],c[a]=e.state.axis.indexOf(t)})),e.state.compass_compare.axises.map((function(e,t){for(var a=[];a.length<c.length;)a.push(0);c.forEach((function(t,s){a[s]=e[t]})),l[t]=a})),e.setState({batch_axises:l}),e.setState({total_axis:n}),n.length!=[0].length&&l.forEach((function(t,o,r){(a=M(n,t))<s&&(i={distance:s=a,title:e.state.compass_compare.position[o]}),e.setState({position:i})}))},e.saving_data=function(e){var t={answers:e.answers,axises_averrage:e.all_axis_averrage,axises:e.axises};I.database().ref().child("parties").push(t)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.downloadData()}},{key:"render",value:function(){var e=this,t=this.state.questions.slice(this.state.first_questions,this.state.first_questions+this.state.questions_on_page).map((function(t,a){var s;if("select"===t.type){s=-1!=e.state.notAnswered.indexOf(a)?"\u0412\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u0442 \u0432\u043e\u043f\u0440\u043e\u0441":"";var i=t.answer,o=e.state.answer_title_values.indexOf(i),r=e.state.answer_values[o];return n.a.createElement(b,{ans:e.state.answers[e.state.first_questions+a],key:e.state.first_questions+a,index:e.state.first_questions+a,title:t.title,message:s,answers:r,returnAnswer:e.returnAnswer})}})),a=this.state.axis_title.map((function(t,a){return n.a.createElement(P,{index:a,axisName:t,names:e.state.compass_compare.position,partyAxises:e.state.compass_compare.axises,axisAverrage:a,axisPoints:e.state.axis_points[a]})})),s=this.state.axis.map((function(t,a){return n.a.createElement(A,{key:a,index:a,name:t,title:e.state.axis_title[a],returnAxisName:e.returnAxisName})})),i=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},o=function(){var t=e.getNotAnswered(e.state,"plus");0==t.length?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions+e.state.questions_on_page}),e.setState({notAnswered:[]}),i()):e.setState({notAnswered:t})},r=function(){var t=e.getNotAnswered(e.state,"minus");0==t.length?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions-e.state.questions_on_page}),e.setState({notAnswered:[]}),i()):e.setState({notAnswered:t})};return n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:function(){return console.log(e.state)}},"show state"),n.a.createElement("button",{onClick:T},"Sign in with google"),n.a.createElement(D,{axises:this.state.all_axis_averrage,axises_title:this.state.axis_title}),function(){if(e.state.questions.length<=e.state.first_questions)return n.a.createElement("div",null,t,n.a.createElement("button",{onClick:r},"Previous page"),n.a.createElement("button",{onClick:o},"Next page"));var i=e.state.onlyTwoCheckBox?"":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0435 \u0442\u0435\u043c\u044b";return n.a.createElement("div",null,n.a.createElement("h2",{className:"content-center choose3axis"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0430 \u044f\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u043b\u043d\u0443\u044e\u0442 \u0432\u0430\u0441 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e"),n.a.createElement("p",{className:"chooseAnswer padding_margin"},i),n.a.createElement("div",{className:"choose_axises"},s),n.a.createElement("button",{onClick:function(){Object.values(e.state.axis_names).filter((function(e){return 1==e})).length<3?(e.setState({onlyTwoCheckBox:!0}),e.getAxis(e.state)):e.setState({onlyTwoCheckBox:!1})}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"),function(){if(e.state.axises!={})return n.a.createElement("div",null,n.a.createElement(q,{myAxis:e.state.total_axis,names:e.state.compass_compare.position,axises:e.state.batch_axises}))}(),n.a.createElement("div",{className:"result-position"},n.a.createElement("h3",null,"\u0421\u0430\u043c\u0430\u044f \u0431\u043b\u0438\u0437\u043a\u0430\u044f \u0434\u043b\u044f \u0432\u0430\u0441 \u043f\u0430\u0440\u0442\u0438\u044f:"),n.a.createElement("h2",null,e.state.position.title)),n.a.createElement("h2",{className:"content-center full-result"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b"),a,n.a.createElement("br",null),n.a.createElement("button",{onClick:r},"Previous page"),n.a.createElement("button",{onClick:o},"Next page"),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return e.saving_data(e.state)}},"Save data"))}())}}]),a}(s.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m.a,null,n.a.createElement("div",null,n.a.createElement(f.a,{exact:!0,path:"/questionnaire/",component:G}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){}},[[280,1,2]]]);
//# sourceMappingURL=main.793d761f.chunk.js.map