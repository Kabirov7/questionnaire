(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{297:function(e,t,a){e.exports=a(634)},302:function(e,t,a){},634:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(20),i=a.n(r),o=(a(302),a(64),a(284)),l=a(25),c=a(139),u=a(287),m=a(117),d=a(280),p=a(281),f=a(288),_=a(286),g=a(79),v=a(677),x=a(680),h=a(681),E=a(668);function w(e){var t=n.a.useState(""),a=Object(g.a)(t,2),r=a[0],i=a[1],o=e.index,l=e.ans;return Object(s.useEffect)((function(){l&&i(l)}),{ans:l}),n.a.createElement("div",{id:e.id},n.a.createElement("h4",{className:"question_title"},e.title),n.a.createElement(E.a,{const:"fieldset"},n.a.createElement(x.a,{"aria-label":e.title,name:e.title,value:r,onChange:function(t){i(t.target.value),e.returnAnswer(t.target.value,o)}},e.answers.map((function(e,t){return n.a.createElement(h.a,{className:"question_item",key:t,value:e,control:n.a.createElement(v.a,null),label:e})}))),n.a.createElement("div",{className:"chooseAnswer padding_margin"},n.a.createElement("p",null,e.message))))}var b=a(678),y=a(672);function A(e){var t=n.a.useState(!1),a=Object(g.a)(t,2),s=a[0],r=a[1],i=e.index;return n.a.createElement(y.a,null,n.a.createElement(h.a,{control:n.a.createElement(b.a,{className:"question_item",checked:s,onChange:function(t){r(t.target.checked),e.returnAxisName(t.target.checked,i)},key:e.key,value:e.name}),label:e.title}))}var k=a(673),O=a(682),N=a(683),j=a(674),S=Object(k.a)((function(e){return{formControl:{minWidth:120},li:{fontSize:"15px"}}}));function q(e){var t=S(),a=n.a.useState(""),r=Object(g.a)(a,2),i=r[0],o=r[1],l=n.a.useState(!1),c=Object(g.a)(l,2),u=c[0],m=c[1],d=e.index,p=e.response;Object(s.useEffect)((function(){p&&o(p)}),[p]);return n.a.createElement("div",null,n.a.createElement("h4",{className:"question_title"},e.title),n.a.createElement(E.a,{className:t.formControl,disabled:!!e.locked},n.a.createElement(O.a,{id:"controlled-open-select-label"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"),n.a.createElement(j.a,{labelId:"controlled-open-select-label",id:"select"+d,open:u,onClose:function(e){m(!1)},onOpen:function(e){m(!0)},value:i,onChange:function(t){o(t.target.value);e.answers.indexOf(t.target.value);e.returnAnketsAnswer(t.target.value,d)}},e.answers.map((function(e,a){return n.a.createElement(N.a,{className:t.li,key:a,value:e.value},e.name)})))))}var C=a(144),B=a.n(C),I=(a(276),Object(k.a)((function(e){return{formControl:{paddingBottom:0}}})));function T(e){var t=I(),a=e.partyColor,s=e.axises.map((function(t,s){return{name:e.names[s],symbolSize:12,data:[t],type:"scatter",color:a[s],emphasis:{label:{show:!0,formatter:e.names[s],position:"top"}}}}));s.push({symbolSize:22,data:[e.myAxis],type:"scatter",symbol:"diamond",color:"red",label:{show:!0,position:"top",formatter:"\u042f",fontWeight:"bold"},emphasis:{label:{show:!0,formatter:"\u042f",position:"top"}}});return n.a.createElement("div",{className:t.formControl},n.a.createElement(B.a,{style:{height:"500px"},option:{color:a,legend:{show:!0,data:e.names,orient:"horizontal",height:"auto",top:"3%",left:0},grid:{z:2,top:"30%",height:"50%",bottom:"10%"},xAxis:{name:"x",min:-2,max:2},yAxis:{name:"y",min:-2,max:2},series:s}}))}var D=a(80),z=a.n(D);z.a.initializeApp({apiKey:"AIzaSyCxXwvIJFV9BDZFyQZyBs7k9M0GiI1MRuU",authDomain:"testing-a6f79.firebaseapp.com",databaseURL:"https://testing-a6f79.firebaseio.com",projectId:"testing-a6f79",storageBucket:"testing-a6f79.appspot.com",messagingSenderId:"886214831731",appId:"1:886214831731:web:9d4fee09d2061fead04406",measurementId:"G-DH4LKFT44D"});var P=new z.a.auth.GoogleAuthProvider,W=function(){z.a.auth().signInWithPopup(P)},L=function(){z.a.auth().signInAnonymously()},R=z.a,F=a(676),G=a(679);function M(e){var t=e.indexLegends.map((function(t,a){if("\u041c\u0430\u0442\u0440\u0430\u0438\u043c\u043e\u0432\u044b"==e.legends[a].name||"\u0416\u044d\u044d\u043d\u0431\u0435\u043a\u043e\u0432"==e.legends[a].name)return Object.values(e.legends[a])[t]}));return t=t.filter((function(e){return void 0!=e})),n.a.createElement(F.a,{className:"fb",url:"https://kloop.kg/wp-content/uploads/2020/09/".concat(e.name,".png"),quote:t.join(" ")+"\n\n"+"\u0423\u0437\u043d\u0430\u0439, \u043a\u0430\u043a\u0438\u0435 \u043a\u044b\u0440\u0433\u044b\u0437\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0442\u0438\u0438 \u0441\u043e\u043b\u0438\u0434\u0430\u0440\u043d\u044b \u0441 \u043c\u043e\u0435\u0439 \u0438 \u0441 \u0442\u0432\u043e\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439:".concat(e.compass_url)},n.a.createElement("div",null,n.a.createElement(G.a,{size:"2.1rem"}),n.a.createElement("p",null,"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c")))}var U=Object(k.a)((function(e){return{formControl:{height:60}}}));function K(e){U();var t,s,r=1/0,i=a(278),o=e.partyColor,l=e.partyAxises.map((function(a,n){var l={name:e.names[n],symbolSize:12,data:[[a[e.index],0]],type:"scatter",color:o[n],emphasis:{label:{show:!0,formatter:e.names[n],position:"top"}}};return(t=i([e.axisAverrage,0],[a[e.index],0]))<r&&(s={distance:r=t,title:e.names[n]}),l}));l.push({symbolSize:22,data:[[e.axisAverrage,0]],type:"scatter",color:"red",symbol:"diamond",label:{show:!0,position:"top",formatter:"\u042f",fontWeight:"bold"},emphasis:{label:{show:!0,formatter:"\u042f",position:"top"}}});return n.a.createElement("div",{className:"scatter-line"},n.a.createElement("div",{className:"nameAxis"},n.a.createElement("h5",{style:{textAlign:"center"}},e.axisName,": ",parseFloat(e.axisAverrage).toFixed(2))),n.a.createElement("div",null,n.a.createElement("div",{className:"decision"},n.a.createElement("p",{className:"minus"},e.axisPoints.minus,n.a.createElement("br",null)),n.a.createElement("div",null,n.a.createElement("div",null)),n.a.createElement("p",{className:"plus"},e.axisPoints.plus,n.a.createElement("br",null))),n.a.createElement("div",{className:"arrows"},n.a.createElement("i",{className:"em em-arrow_left","aria-role":"presentation","aria-label":"LEFTWARDS BLACK ARROW"}),n.a.createElement("i",{className:"em em-arrow_right","aria-role":"presentation","aria-label":"LEFTWARDS BLACK ARROW"})),n.a.createElement(B.a,{style:{height:"250px"},className:"scatter",option:{color:o,legend:{data:e.names,orient:"horizontal",bottom:"0%",width:"100%"},xAxis:{min:-2,max:2},yAxis:{show:!1},height:0,series:l}})),n.a.createElement("h4",null,e.axisNearest,' \u2014 "',s.title,'"'))}function J(e){return n.a.createElement("img",{src:"https://kloop.kg/wp-content/uploads/2020/09/".concat(e.partyName,".png"),alt:e.partyName})}var V=a(145),Z=a(278),H=a(620),Q=function(e){Object(f.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],main_title:"",gateway:"",answers:{},notAnswered:[],axises:{},axis_points:[],total_axis:[],axis_title_values:[],axis_values:[],position:{},axis:[],axis_title:[],axises_object:[],axis_names:{},all_axis:{},answer_title_values:[],answer_values:["da"],answer_values_males:[],count_axises:[],compass_compare:{},default_axises:[],all_axis_averrage:[],batch_axises:[],onlyTwoCheckBox:!0,showAnswers:!1,questions_on_page:0,first_questions:0,partyColor:[],anket:!1,anket_all_answers:1,anketa_questions:[],anket_answers:[],axis_legends:[],legendary:[],nearestParty:{},compass_url:"",saveData:!1,uid:!1,user:!1,axisNearest:[]},e.downloadData=function(){var t=H.parse(window.location.search,{decode:!1});console.log(t),fetch("https://raw.githubusercontent.com/Kabirov7/kloop-forms-test/master/config_plus_test_and_anketa.json").then((function(e){return console.log("RESPONSE",e),e.json()})).then((function(t){console.log("DATA",t),e.setState({questions:t.questions,main_title:t.main_title,gateway:t.gateway,compass_compare:t.compass_compare,axis:t.axises,axis_title:t.axis_title,axis_title_values:t.axis_title_values,axis_values:t.axis_values,answer_title_values:t.answer_title_values,answer_values_males:t.answer_values,axises_object:t.axises_object,questions_on_page:t.questions_on_page,axis_points:t.axis_points,partyColor:t.partyColor,anketa_questions:t.anket,axis_legends:t.axis_legends,compass_url:t.compass_url,axisNearest:t.axisNearest})}))},e.uploadData=function(t){fetch(e.state.gateway,{method:"POST",mode:"no-cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(t){console.log("Error",t),e.setState({showAnswers:!0})}))},e.getNotAnswered=function(t,a){function s(e){return e.forEach((function(t,a){e[a]=Number(e[a])})),e}var n;"plus"==a?n=e.state.questions.slice(e.state.first_questions,e.state.first_questions+e.state.questions_on_page):"minus"==a&&(n=e.state.questions.slice(e.state.first_questions,e.state.first_questions-e.state.questions_on_page));var r=s(Object.keys(t.answers));return(n=s(Object.keys(n))).filter((function(t){return-1==r.indexOf(e.state.first_questions+t)}))},e.returnAnswer=function(t,a){var s=Object(m.a)({},e.state.answers);s[a]=t,e.setState({answers:s})},e.returnAnketsAnswer=function(t,a){var s=Object(m.a)({},e.state.anket_answers);s[a]=t,e.setState({anket_answers:s})},e.returnAxisName=function(t,a){var s=Object(m.a)({},e.state.axis_names);s[a]=t,e.setState({axis_names:s})},e.getAxisMainTemplate=function(e){for(var t,a=0;a<e.axises_object.length+1;a++)t=Object.assign({},e.axises_object[a],e.axises_object[a+1],t);return t},e.getAxisTemplate=function(e){var t,a,s,n,r=[],i=Object.entries(e.axis_names).map((function(n){if(t=n[1],a=n[0],s=e.axises_object[a],t)return r.push(s),s}));i=(i=i.filter((function(e){return void 0!==e}))).reverse();for(var o=0;o<i.length+1;o++)o!=i.length&&(n=Object.assign({},i[o],i[o+1],n));return n},e.returnAxis=function(t){var a=Object(m.a)({},e.state.axises);a=t,e.setState({axises:a})},e.getAxis=function(t){var a,s,n=Object.entries(t.answers),r=[],i={},o=n.map((function(e,n,i){s=e[0],a=e[1];var o=t.questions[s].answer,l=t.answer_title_values.indexOf(o),c=t.answer_values_males[l][t.anket_answers[0]].indexOf(a),u=t.questions[s].axis,m=t.axis_title_values.indexOf(u),d=t.axis_values[m][c];return Object.keys(d).forEach((function(e){r.push(e)})),d}));r=r.sort(),Object(u.a)(new Set(r)).forEach((function(e,t){var a=r.lastIndexOf(e)+1-r.indexOf(e);i[e]=a})),e.returnAxis(o),e.getAxisAverage(o,i)},e.getAxisAverage=function(t,a){var s=e.getAxisTemplate(e.state),n=e.getAxisMainTemplate(e.state);Object.values(t).forEach((function(e){Object.keys(e).forEach((function(t){n[t]+=e[t],void 0!=s&&void 0!==s[t]&&(s[t]+=e[t])}))})),Object.keys(a).forEach((function(e){n[e]=n[e]/a[e]})),void 0!=s&&Object.keys(s).forEach((function(e){void 0!==a[e]&&(s[e]=s[e]/a[e])})),e.setState({all_axis_averrage:Object.values(n).reverse()}),void 0!=s&&e.distanceEuclid(s)},e.distanceEuclid=function(t){for(var a,s=1/0,n=[],r={distance:1/0,title:1/0},i=Object.keys(t),o=Object.values(t),l=[],c=[];c.length<e.state.compass_compare.axises.length;)c.push([]);i.forEach((function(t,a){n[a]=o[a],l[a]=e.state.axis.indexOf(t)})),e.state.compass_compare.axises.map((function(e,t){for(var a=[];a.length<l.length;)a.push(0);l.forEach((function(t,s){a[s]=e[t]})),c[t]=a})),e.setState({batch_axises:c}),e.setState({total_axis:n}),n.length!=[0].length&&c.forEach((function(t,i,o){(a=Z(n,t))<s&&(r={distance:s=a,title:e.state.compass_compare.position[i]}),e.setState({position:r})}))},e.legendByAxis=function(){var t=[],a=e.state.axis_legends.map((function(a,s){var r,i=Object.values(a),o=e.state.axis_title.indexOf(a.name),l=e.state.all_axis_averrage[o];return-2<=l&&l<-1.11?r=1:-1.1<l&&l<-.61?r=2:-.6<l&&l<-.21?r=3:-.2<l&&l<.2?r=4:.21<l&&l<.6?r=5:-.61<l&&l<1.1?r=6:-1.11<l&&l<=2&&(r=7),t[s]=r,n.a.createElement("div",{className:"legend"},n.a.createElement("h5",null,a.name,":"),n.a.createElement("p",null,i[r]))}));return e.state.legendary.length==[].length&&e.setState({legendary:t}),a},e.saving_data=function(t){var a,s=t.answer_values_males[0][t.anket_answers[0]],n=Object.values(t.answers).map((function(e,t){var a=s.indexOf(e);return Object(c.a)({},t,a)})),r={male:t.anket_answers[0],old:t.anket_answers[1],distric:t.anket_answers[2],answers:n,axises_averrage:t.all_axis_averrage,axises:t.axises},i=R.firestore().collection("users_answers");R.auth().currentUser;0==e.state.saveData&&(R.auth().onAuthStateChanged((function(e){null!=e?(a=e.uid,i.doc(a).collection("answers").doc().set(r)):null==e&&L()})),e.setState({saveData:!0}))},e.signInWithGoogleUser=function(){console.log("\u0432\u0445\u043e\u0436\u0443 \u0447\u0435\u0440\u0435\u0437 \u0433\u0443\u0433\u043b"),R.auth().onAuthStateChanged((function(e){W()})),e.setState({user:!0})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.downloadData()}},{key:"render",value:function(){var e=this,t=this.state.questions.slice(this.state.first_questions,this.state.first_questions+this.state.questions_on_page).map((function(t,a){var s;if("select"===t.type){s=-1!=e.state.notAnswered.indexOf(a)?"\u0412\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u044d\u0442\u043e\u0442 \u0432\u043e\u043f\u0440\u043e\u0441":"";var r=t.answer,i=e.state.answer_title_values.indexOf(r),o=e.state.answer_values_males[i][e.state.anket_answers[0]];return n.a.createElement(w,{ans:e.state.answers[e.state.first_questions+a],key:e.state.first_questions+a,id:a,index:e.state.first_questions+a,title:t.title,message:s,answers:o,returnAnswer:e.returnAnswer})}})),a=this.state.axis_title.map((function(t,a){return n.a.createElement(K,{index:a,axisName:t,names:e.state.compass_compare.position,partyAxises:e.state.compass_compare.axises,partyColor:e.state.partyColor,axisNearest:e.state.axisNearest[a],axisAverrage:e.state.all_axis_averrage[a],axisPoints:e.state.axis_points[a]})})),s=this.state.axis.map((function(t,a){if("b"!=t)return n.a.createElement(A,{key:a,index:a,name:t,title:e.state.axis_title[a],returnAxisName:e.returnAxisName})})),r=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},i=function(){var t=e.getNotAnswered(e.state,"plus");(console.log(t),0==t.length)?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions+e.state.questions_on_page}),e.setState({notAnswered:[]}),r()):(e.setState({notAnswered:t}),document.getElementById("".concat(t[0])).scrollIntoView({behavior:"smooth",block:"start"}));Object.values(e.state.answers).length==Object.values(e.state.questions).length&&Object.values(e.state.answers).length!=Object.values({}).length&&e.saving_data(e.state)},o=function(){var t=e.getNotAnswered(e.state,"minus");0==t.length?(e.getAxis(e.state),e.setState({first_questions:e.state.first_questions-e.state.questions_on_page}),e.setState({notAnswered:[]}),r()):e.setState({notAnswered:t})},l=this.state.anketa_questions.map((function(t,a){return n.a.createElement(q,{key:a,index:a,title:t.title,answers:t.answer,returnAnketsAnswer:e.returnAnketsAnswer})}));return n.a.createElement("div",{className:"App"},function(){if(0==e.state.anket){var r=0==e.state.anket_all_answers?"\u0412\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b":"",c=1==e.state.user?n.a.createElement("div",{className:"enterByEmail"},n.a.createElement("p",null,"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 google"),n.a.createElement("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0436\u043c\u0438\u0442\u0435 \u0441\u044e\u0434\u0430:")):n.a.createElement("div",{className:"notEnterByEmail"},n.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043d\u0430\u0439\u0442\u0438 \u0435\u0434\u0438\u043d\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a\u043e\u0432 \u0441\u0440\u0435\u0434\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0438 \u0443 \u043d\u0430\u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u0430\u0448\u0435 \u0438\u043c\u044f \u0438 email:"),n.a.createElement("button",{className:"signinGoogle",onClick:function(){return e.signInWithGoogleUser()}},"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 google"),n.a.createElement("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438 \u043d\u0435 \u0432\u0445\u043e\u0434\u0438\u0442\u044c \u0432 Google \u0442\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0440\u0430\u0437\u0443 \u0436\u043c\u0438\u0442\u0435 \u0441\u044e\u0434\u0430:"));return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("p",{className:"chooseAnswer padding_margin"},r),l,n.a.createElement("div",{className:"enter"},c),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{onClick:function(){Object.keys(e.state.anket_answers).length==e.state.anketa_questions.length?e.setState({anket_all_answers:!0,anket:!0}):e.setState({anket_all_answers:!1})}},"\u041d\u0430\u0447\u0430\u0442\u044c")))}if(e.state.questions.length<=e.state.first_questions&&1==e.state.anket){var u=e.state.onlyTwoCheckBox?"":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0435 \u0442\u0435\u043c\u044b",m=void 0!=e.state.compass_compare.axises?function(){var t,a=e.state.compass_compare.position,s={idx:"",name:"",distance:1/0};return e.state.compass_compare.axises.map((function(n,r){(t=Z(e.state.all_axis_averrage,n))<s.distance&&(s.idx=r,s.name=a[r],s.distance=t)})),Object.values(e.state.nearestParty).length==Object.values({}).length&&e.setState({nearestParty:s}),n.a.createElement("div",null,n.a.createElement("div",{className:"resultParty"},n.a.createElement("h3",null,"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0430\u044f \u0432\u0430\u043c \u043f\u0430\u0440\u0442\u0438\u044f:"),n.a.createElement("h3",null,"\xab",s.name,"\xbb")),n.a.createElement("div",{className:"partyImage"},n.a.createElement(J,{partyLink:s.idx,partyName:e.state.compass_compare.parties_image_name[s.idx]}),n.a.createElement("a",{href:e.state.compass_compare.about_parties[s.idx]},"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0431 \u044d\u0442\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0438")),n.a.createElement("div",{className:"resultParty"},n.a.createElement("h3",null,"\u0412\u0430\u0448 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043f\u043e\u0440\u0442\u0440\u0435\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"),n.a.createElement("div",{className:"myLegends"},e.legendByAxis())),n.a.createElement("div",{className:"facebookBtn"},n.a.createElement(M,{className:"fb",name:e.state.compass_compare.parties_image_name[s.idx],legends:e.state.axis_legends,indexLegends:e.state.legendary,compass_url:e.state.compass_url})))}():"";return n.a.createElement("div",null,m,n.a.createElement("h2",{className:"content-center full-result"},"\u0420\u0430\u0437\u0432\u0451\u0440\u043d\u0443\u0442\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b:"),a,n.a.createElement("h1",{className:"content-center moreResult"},"\u041f\u043e\u0438\u0433\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c\u0438! \u0412\u044b\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0445 \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a!"),n.a.createElement("h2",{className:"content-center choose3axis"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0430 \u044f\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c:"),n.a.createElement("p",{className:"chooseAnswer padding_margin"},u),n.a.createElement("div",{className:"choose_axises"},s),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("button",{onClick:function(){2==Object.values(e.state.axis_names).filter((function(e){return 1==e})).length?(e.setState({onlyTwoCheckBox:!0}),e.getAxis(e.state)):e.setState({onlyTwoCheckBox:!1})}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b")),function(){if(e.state.axises!={})return n.a.createElement("div",null,n.a.createElement(T,{partyColor:e.state.partyColor,myAxis:e.state.total_axis,names:e.state.compass_compare.position,axises:e.state.batch_axises}))}(),n.a.createElement("div",{className:"result-position"},n.a.createElement("h3",null,"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0430\u044f \u0432\u0430\u043c \u043f\u0430\u0440\u0442\u0438\u044f \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u043e\u0441\u044f\u043c:"),n.a.createElement("h2",null,e.state.position.title)))}return n.a.createElement("div",null,t,n.a.createElement("div",{className:"pagination"},n.a.createElement("button",{onClick:o},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),n.a.createElement("button",{onClick:i},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430")))}())}}]),a}(s.Component);var X=function(){return Object(s.useEffect)((function(){V.a.initialize("UA-179274271-1"),V.a.pageview(window.location.pathname+window.location.search)}),[]),n.a.createElement("div",null,n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(l.a,{exact:!0,path:"/questionnaire/",component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){}},[[297,1,2]]]);
//# sourceMappingURL=main.74eb32bf.chunk.js.map