(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{277:function(e,t,a){e.exports=a(616)},282:function(e,t,a){},616:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(75),r=a.n(i),o=(a(282),a(122)),c=a(123),l=a(132),u=a(131),m=(a(81),a(267)),f=a(21),_=a(269),d=a(133),x=a(76);function p(e){var t=n.a.useState(!1),a=Object(x.a)(t,2);a[0],a[1],e.index;return n.a.createElement("div",{className:"axisItem"},n.a.createElement("p",null,n.a.createElement("b",null,parseFloat(e.axisAverrage).toFixed(2))),n.a.createElement("p",null,e.axisName))}var v=a(639),g=a(644),h=a(645),b=a(642);function w(e){var t=n.a.useState(""),a=Object(x.a)(t,2),i=a[0],r=a[1],o=e.index,c=e.ans;return Object(s.useEffect)((function(){c&&r(c)}),{ans:c}),n.a.createElement("div",null,n.a.createElement("h4",{className:"question_title"},e.title),n.a.createElement(b.a,{const:"fieldset"},n.a.createElement(g.a,{"aria-label":e.title,name:e.title,value:i,onChange:function(t){r(t.target.value),e.returnAnswer(t.target.value,o)}},e.answers.map((function(e,t){return n.a.createElement(h.a,{className:"question_item",key:t,value:e,control:n.a.createElement(v.a,null),label:e})}))),n.a.createElement("div",{className:"chooseAnswer padding_margin"},n.a.createElement("p",null,e.message))))}var E=a(641),A=a(637);function j(e){var t=n.a.useState(!1),a=Object(x.a)(t,2),s=a[0],i=a[1],r=e.index;return n.a.createElement(A.a,null,n.a.createElement(h.a,{control:n.a.createElement(E.a,{className:"question_item",checked:s,onChange:function(t){i(t.target.checked),e.returnAxisName(t.target.checked,r)},key:e.key,value:e.name}),label:e.title}))}var O=a(265),y=a.n(O),q=a(638),k=(a(589),Object(q.a)((function(e){return{formControl:{paddingBottom:120}}})));function S(e){var t=k();return n.a.createElement("div",{className:t.formControl},n.a.createElement(y.a,{option:{xAxis:{},yAxis:{},series:[{symbolSize:15,data:e.axises,type:"scatter",color:"black"},{symbolSize:10,data:[e.myAxis],type:"scatter",color:"red"}]}}))}var N=a(80),C=a.n(N);C.a.initializeApp({apiKey:"AIzaSyCxXwvIJFV9BDZFyQZyBs7k9M0GiI1MRuU",authDomain:"testing-a6f79.firebaseapp.com",databaseURL:"https://testing-a6f79.firebaseio.com",projectId:"testing-a6f79",storageBucket:"testing-a6f79.appspot.com",messagingSenderId:"886214831731",appId:"1:886214831731:web:9d4fee09d2061fead04406",measurementId:"G-DH4LKFT44D"});var I=new C.a.auth.GoogleAuthProvider,T=function(){C.a.auth().signInWithPopup(I)},D=C.a,F=a(640),B=a(643);function M(e){var t=e.axises_title.map((function(t,a){return t+": "+parseFloat(e.axises[a]).toFixed(2)}));return n.a.createElement(F.a,{url:"www.youtube.com",shareImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",quote:t.join("\n")},n.a.createElement(B.a,{size:"2.5rem"}))}var P=a(600),z=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={questions:[],main_title:"",gateway:"",answers:{},notAnswered:[],axises:{},total_axis:[],axis_title_values:[],axis_values:[],position:{},axis:[],axis_title:[],axises_object:[],axis_names:{},all_axis:{},answer_title_values:[],answer_values:[],count_axises:[],compass_compare:{},default_axises:[],all_axis_averrage:[],batch_axises:[],showAnswers:!1,questions_on_page:0,first_questions:0},e.downloadData=function(){var t=P.parse(window.location.search,{decode:!1});console.log(t),fetch("https://raw.githubusercontent.com/Kabirov7/kloop-forms-test/master/config_plus.json").then((function(e){return console.log("RESPONSE",e),e.json()})).then((function(t){console.log("DATA",t),e.setState({questions:t.questions,main_title:t.main_title,gateway:t.gateway,compass_compare:t.compass_compare,axis:t.axises,axis_title:t.axis_title,axis_title_values:t.axis_title_values,axis_values:t.axis_values,answer_title_values:t.answer_title_values,answer_values:t.answer_values,axises_object:t.axises_object,questions_on_page:t.questions_on_page})}))},e.uploadData=function(t){fetch(e.state.gateway,{method:"POST",mode:"no-cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(t){console.log("Error",t),e.setState({showAnswers:!0})}))},e.getNotAnswered=function(t,a){function s(e){return e.forEach((function(t,a){e[a]=Number(e[a])})),e}var n;"plus"==a?n=e.state.questions.slice(e.state.first_questions,e.state.first_questions+e.state.questions_on_page):"minus"==a&&(n=e.state.questions.slice(e.state.first_questions,e.state.first_questions-e.state.questions_on_page));var i=s(Object.keys(t.answers));return(n=s(Object.keys(n))).filter((function(t){return-1==i.indexOf(e.state.first_questions+t)}))},e.returnAnswer=function(t,a){var s=Object(d.a)({},e.state.answers);s[a]=t,e.setState({answers:s})},e.returnAxisName=function(t,a){var s=Object(d.a)({},e.state.axis_names);s[a]=t,e.setState({axis_names:s})},e.getAxisMainTemplate=function(e){for(var t,a=0;a<e.axises_object.length+1;a++)t=Object.assign({},e.axises_object[a],e.axises_object[a+1],t);return t},e.getAxisTemplate=function(e){var t,a,s,n,i=[],r=Object.entries(e.axis_names).map((function(n){if(t=n[1],a=n[0],s=e.axises_object[a],t)return i.push(s),s}));r=(r=r.filter((function(e){return void 0!==e}))).reverse();for(var o=0;o<r.length+1;o++)o!=r.length&&(n=Object.assign({},r[o],r[o+1],n));return n},e.returnAxis=function(t){var a=Object(d.a)({},e.state.axises);a=t,e.setState({axises:a})},e.getAxis=function(t){var a,s,n=Object.entries(t.answers),i=[],r={},o=n.map((function(e,n,r){s=e[0],a=e[1];var o=t.questions[s].answer,c=t.answer_title_values.indexOf(o),l=t.answer_values[c].indexOf(a),u=t.questions[s].axis,m=t.axis_title_values.indexOf(u),f=t.axis_values[m][l];return Object.keys(f).forEach((function(e){i.push(e)})),f}));i=i.sort(),Object(_.a)(new Set(i)).forEach((function(e,t){var a=i.lastIndexOf(e)+1-i.indexOf(e);r[e]=a})),e.returnAxis(o),e.getAxisAverage(o,r)},e.getAxisAverage=function(t,a){var s=e.getAxisTemplate(e.state),n=e.getAxisMainTemplate(e.state);Object.values(t).forEach((function(e){Object.keys(e).forEach((function(t){n[t]+=e[t],void 0!=s&&void 0!==s[t]&&(s[t]+=e[t])}))})),Object.keys(a).forEach((function(e){n[e]=n[e]/a[e]})),void 0!=s&&Object.keys(s).forEach((function(e){void 0!==a[e]&&(s[e]=s[e]/a[e])})),e.setState({all_axis_averrage:Object.values(n).reverse()}),void 0!=s&&e.distanceEuclid(s)},e.distanceEuclid=function(t){for(var s,n=1/0,i=[],r=a(613),o={distance:1/0,title:1/0},c=Object.keys(t),l=Object.values(t),u=[],m=[];m.length<e.state.compass_compare.axises.length;)m.push([]);c.forEach((function(t,a){i[a]=l[a],u[a]=e.state.axis.indexOf(t)})),e.state.compass_compare.axises.map((function(e,t){for(var a=[];a.length<u.length;)a.push(0);u.forEach((function(t,s){a[s]=e[t]})),m[t]=a})),e.setState({batch_axises:m}),e.setState({total_axis:i}),i.length!=[0].length&&m.forEach((function(t,a,c){(s=r(i,t))<n&&(o={distance:n=s,title:e.state.compass_compare.position[a]}),e.setState({position:o})}))},e.saving_data=function(e){var t={answers:e.answers,axises_averrage:e.all_axis_averrage,axises:e.axises};D.database().ref().child("parties").push(t)},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.downloadData()}},{key:"render",value:function(){var e=this,t=this.state.questions.slice(this.state.first_questions,this.state.first_questions+this.state.questions_on_page).map((function(t,a){var s;if("select"===t.type){s=-1!=e.state.notAnswered.indexOf(a)?"\u0412\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u0442 \u0432\u043e\u043f\u0440\u043e\u0441":"";var i=t.answer,r=e.state.answer_title_values.indexOf(i),o=e.state.answer_values[r];return n.a.createElement(w,{ans:e.state.answers[e.state.first_questions+a],key:e.state.first_questions+a,index:e.state.first_questions+a,title:t.title,message:s,answers:o,returnAnswer:e.returnAnswer})}})),a=this.state.axis_title.map((function(t,a){return n.a.createElement(p,{key:a,index:a,axisName:t,axisAverrage:e.state.all_axis_averrage[a]})})),s=this.state.axis.map((function(t,a){return n.a.createElement(j,{key:a,index:a,name:t,title:e.state.axis_title[a],returnAxisName:e.returnAxisName})})),i=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},r=function(){var t=e.getNotAnswered(e.state,"plus");0==t.length?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions+e.state.questions_on_page}),e.setState({notAnswered:[]}),i()):e.setState({notAnswered:t})},o=function(){var t=e.getNotAnswered(e.state,"minus");0==t.length?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions-e.state.questions_on_page}),e.setState({notAnswered:[]}),i()):e.setState({notAnswered:t})};return n.a.createElement("div",{className:"App"},n.a.createElement("button",{onClick:function(){return console.log(e.state)}},"show state"),n.a.createElement("button",{onClick:T},"Sign in with google"),n.a.createElement(M,{axises:this.state.all_axis_averrage,axises_title:this.state.axis_title}),e.state.questions.length<=e.state.first_questions?n.a.createElement("div",null,n.a.createElement("h2",{className:"content-center"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u0435 \u0432\u0435\u0449\u0438 \u0434\u043b\u044f \u0432\u0430\u0441"),n.a.createElement("div",{className:"choose_axises"},s),function(){if(e.state.axises!={})return n.a.createElement(S,{myAxis:e.state.total_axis,axises:e.state.batch_axises})}(),n.a.createElement("div",{className:"allAxis"},a),n.a.createElement("button",{onClick:function(){return e.getAxis(e.state)}},"Show state"),n.a.createElement("br",null),n.a.createElement("button",{onClick:o},"Previous page"),n.a.createElement("button",{onClick:r},"Next page"),n.a.createElement("br",null),n.a.createElement("button",{onClick:function(){return e.saving_data(e.state)}},"Save data")):n.a.createElement("div",null,t,n.a.createElement("button",{onClick:o},"Previous page"),n.a.createElement("button",{onClick:r},"Next page")))}}]),s}(s.Component),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m.a,null,n.a.createElement("div",null,n.a.createElement(f.a,{exact:!0,path:"/questionnaire/",component:z}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){}},[[277,1,2]]]);
//# sourceMappingURL=main.582bf7fb.chunk.js.map