(function(t){function e(e){for(var r,o,l=e[0],i=e[1],u=e[2],d=0,b=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"28cd":function(t,e,n){"use strict";n("5f81")},"37cd":function(t,e,n){t.exports=n.p+"img/todo.acfdfe27.png"},4588:function(t,e,n){},"46e4":function(t,e,n){t.exports=n.p+"img/monster.5a8f9ce4.png"},"4c85":function(t,e,n){},"4dc7":function(t,e,n){t.exports=n.p+"img/form.2307444d.png"},5050:function(t,e,n){"use strict";n("70c9")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"},c=Object(r["e"])("Home"),o=Object(r["e"])(" | "),l=Object(r["e"])("CounterApp"),i=Object(r["e"])(" | "),u=Object(r["e"])("Form"),s=Object(r["e"])(" | "),d=Object(r["e"])("Simpletodo"),b=Object(r["e"])(" | "),f=Object(r["e"])("MonsterSlayer");function h(t,e){var n=Object(r["v"])("router-link"),h=Object(r["v"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",a,[Object(r["f"])(n,{to:"/"},{default:Object(r["B"])((function(){return[c]})),_:1}),o,Object(r["f"])(n,{to:"/counterapp"},{default:Object(r["B"])((function(){return[l]})),_:1}),i,Object(r["f"])(n,{to:"/form"},{default:Object(r["B"])((function(){return[u]})),_:1}),s,Object(r["f"])(n,{to:"/simpletodo"},{default:Object(r["B"])((function(){return[d]})),_:1}),b,Object(r["f"])(n,{to:"/monster"},{default:Object(r["B"])((function(){return[f]})),_:1})]),Object(r["f"])(h)],64)}n("a55c");const p={};p.render=h;var m=p,O=n("6c02"),j=n("cf05"),v=n.n(j),y=n("ca5e"),g=n.n(y),C=n("4dc7"),k=n.n(C),x=n("37cd"),H=n.n(x),w=n("46e4"),S=n.n(w),_={class:"home"},P=Object(r["f"])("img",{style:{width:"8rem"},alt:"Vue logo",src:v.a},null,-1),M=Object(r["f"])("h1",null,"This is Home page",-1),T=Object(r["f"])("img",{style:{width:"20rem",height:"20rem",border:"solid 1px black",cursor:"pointer"},alt:"counter app",src:g.a},null,-1),A=Object(r["f"])("img",{style:{width:"20rem",height:"20rem",border:"solid 1px black",cursor:"pointer"},alt:"form app",src:k.a},null,-1),F=Object(r["f"])("img",{style:{width:"20rem",height:"20rem",border:"solid 1px black",cursor:"pointer"},alt:"todo app",src:H.a},null,-1),V=Object(r["f"])("img",{style:{width:"20rem",height:"20rem",border:"solid 1px black",cursor:"pointer"},alt:"monster app",src:S.a},null,-1);function B(t,e,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",_,[P,M,T,A,F,V])}var E={name:"Home"};E.render=B;var I=E,L=Object(r["E"])("data-v-45e55014");Object(r["r"])("data-v-45e55014");var D={class:"container"},G=Object(r["f"])("h2",null,"Parent",-1),N=Object(r["f"])("div",{style:{padding:"5px"}},null,-1),U=Object(r["f"])("div",{style:{padding:"10px"}},null,-1),z={class:"container"};Object(r["p"])();var R=L((function(t,e,n,a,c,o){var l=Object(r["v"])("ChildCounter");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("h1",null,"Counter "+Object(r["x"])(n.title),1),Object(r["f"])("div",D,[G,Object(r["f"])("h3",null,"Current Value (Parent)-- "+Object(r["x"])(c.counterValue),1),Object(r["f"])("button",{onClick:e[1]||(e[1]=function(){return o.increment&&o.increment.apply(o,arguments)})},"Increment"),Object(r["f"])("button",{onClick:e[2]||(e[2]=function(){return o.decrement&&o.decrement.apply(o,arguments)}),disabled:c.counterValue<=0},"Decrement",8,["disabled"]),N,Object(r["f"])("button",{onClick:e[3]||(e[3]=function(){return o.childIncrement&&o.childIncrement.apply(o,arguments)})},"Increment Child"),Object(r["f"])("p",null,"pass from child to parent "+Object(r["x"])(c.fromChild),1)]),U,Object(r["f"])("div",z,[Object(r["f"])(l,{counter:c.childValue,onPassParent:o.readChild,ref:"childCom"},null,8,["counter","onPassParent"])])],64)})),$=Object(r["f"])("h2",null,"Child",-1);function J(t,e,n,a,c,o){return Object(r["o"])(),Object(r["d"])(r["a"],null,[$,Object(r["f"])("h3",null,"Current Value (Child)-- "+Object(r["x"])(n.counter+c.childCounter),1),Object(r["f"])("button",{onClick:e[1]||(e[1]=function(){return o.increment&&o.increment.apply(o,arguments)})},"Child increment")],64)}var K={name:"ChildCounter",props:["counter"],emits:["passParent"],data:function(){return{childCounter:0}},methods:{increment:function(){this.childCounter++,this.$emit("passParent",this.childCounter)}},updated:function(){},mounted:function(){}};K.render=J;var Y=K,W={name:"Todolist",props:{title:{type:String,default:"App"}},components:{ChildCounter:Y},data:function(){return{counterValue:0,childValue:0,fromChild:0}},methods:{increment:function(){this.counterValue+=1,this.childValue++},decrement:function(){this.counterValue-=1},readChild:function(t){this.fromChild=t,console.log(t)},childIncrement:function(){this.$refs.childCom.increment()}}};n("b285");W.render=R,W.__scopeId="data-v-45e55014";var q=W,Q=(n("b0c0"),Object(r["E"])("data-v-01b419fe"));Object(r["r"])("data-v-01b419fe");var X=Object(r["f"])("h3",null,"Form submit",-1),Z={class:"container"},tt=Object(r["f"])("h4",null,"Data Parent",-1);Object(r["p"])();var et=Q((function(t,e,n,a,c,o){var l=Object(r["v"])("Form");return Object(r["o"])(),Object(r["d"])(r["a"],null,[X,Object(r["f"])("div",Z,[tt,Object(r["f"])("p",null,"Name : "+Object(r["x"])(c.name),1),Object(r["f"])("p",null,"Email : "+Object(r["x"])(c.email),1),Object(r["f"])(l,{onOnSubmitForm:o.getForm},null,8,["onOnSubmitForm"])])],64)})),nt=Object(r["E"])("data-v-22283109");Object(r["r"])("data-v-22283109");var rt={class:"container"},at=Object(r["f"])("h4",null,"Form Child",-1),ct=Object(r["f"])("label",{for:""},"Name",-1),ot=Object(r["f"])("label",{for:""}," Email",-1),lt=Object(r["f"])("button",null,"Submit",-1);Object(r["p"])();var it=nt((function(t,e,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",rt,[at,Object(r["f"])("form",{action:"",onSubmit:e[3]||(e[3]=Object(r["D"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[ct,Object(r["C"])(Object(r["f"])("input",{type:"text",name:"name","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.name=t})},null,512),[[r["z"],c.name]]),ot,Object(r["C"])(Object(r["f"])("input",{type:"text",name:"email","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.email=t})},null,512),[[r["z"],c.email]]),lt],32)])})),ut={name:"Form",emits:["onSubmitForm"],methods:{onSubmit:function(){this.$emit("onSubmitForm",{name:this.name,email:this.email}),this.name="",this.email=""}},data:function(){return{name:"",email:""}}};n("28cd");ut.render=it,ut.__scopeId="data-v-22283109";var st=ut,dt={name:"FormSubmit",components:{Form:st},methods:{getForm:function(t){this.name=t.name,this.email=t.email}},data:function(){return{name:"",email:""}}};n("5050");dt.render=et,dt.__scopeId="data-v-01b419fe";var bt=dt,ft=Object(r["E"])("data-v-00e687dc");Object(r["r"])("data-v-00e687dc");var ht=Object(r["f"])("h2",null,"Simple todo",-1),pt={class:"container"},mt={class:"header"},Ot=Object(r["f"])("h3",null,"TODO",-1);Object(r["p"])();var jt=ft((function(t,e,n,a,c,o){return Object(r["o"])(),Object(r["d"])(r["a"],null,[ht,Object(r["f"])("div",pt,[Object(r["f"])("div",mt,[Ot,Object(r["C"])(Object(r["f"])("input",{name:"todo",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.inputText=t})},null,512),[[r["z"],c.inputText]]),Object(r["f"])("button",{class:"addBtn",onClick:e[2]||(e[2]=function(){return o.addTodo&&o.addTodo.apply(o,arguments)})},"Add todo")]),Object(r["f"])("ul",null,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(c.todos,(function(t){return Object(r["o"])(),Object(r["d"])("li",{key:t.id},Object(r["x"])(t),1)})),128))])])],64)})),vt={name:"SimpleTodo",data:function(){return{todos:["Add simple to do"],inputText:""}},methods:{addTodo:function(){this.todos.push(this.inputText),this.inputText=""}}};n("61ee");vt.render=jt,vt.__scopeId="data-v-00e687dc";var yt=vt,gt=Object(r["E"])("data-v-21454a30");Object(r["r"])("data-v-21454a30");var Ct=Object(r["f"])("h1",null,"Monster",-1),kt={id:"game"},xt={id:"monster",class:"container"},Ht=Object(r["f"])("h2",null,"Monster Health",-1),wt={class:"healthbar"},St={id:"player",class:"container"},_t=Object(r["f"])("h2",null,"Your Health",-1),Pt={class:"healthbar"},Mt={key:0,id:"controls"},Tt={key:1,class:"container"},At={id:"log",class:"container"},Ft=Object(r["f"])("h2",null,"Battle Log",-1);Object(r["p"])();var Vt=gt((function(t,e,n,a,c,o){return Object(r["o"])(),Object(r["d"])(r["a"],null,[Ct,Object(r["f"])("div",kt,[Object(r["f"])("section",xt,[Ht,Object(r["f"])("div",wt,[Object(r["f"])("div",{class:"healthbar__value",style:o.styleMonsterHealth},null,4)])]),Object(r["f"])("section",St,[_t,Object(r["f"])("div",Pt,[Object(r["f"])("div",{class:"healthbar__value",style:o.stylePlayerHealth},null,4)])]),c.surrender?(Object(r["o"])(),Object(r["d"])("section",Tt,[Object(r["f"])("h3",null,"You "+Object(r["x"])(0===c.monsterHealth?"Win !!":"Lose !!"),1),Object(r["f"])("button",{onClick:e[5]||(e[5]=function(){return o.newGame&&o.newGame.apply(o,arguments)})},"New Game")])):(Object(r["o"])(),Object(r["d"])("section",Mt,[Object(r["f"])("button",{onClick:e[1]||(e[1]=function(){return o.attackMonster&&o.attackMonster.apply(o,arguments)}),disabled:o.disableButton},"ATTACK",8,["disabled"]),Object(r["f"])("button",{onClick:e[2]||(e[2]=function(){return o.specialAttack&&o.specialAttack.apply(o,arguments)}),disabled:o.disableSpecialAttack||o.disableButton}," SPECIAL ATTACK ",8,["disabled"]),Object(r["f"])("button",{onClick:e[3]||(e[3]=function(){return o.heal&&o.heal.apply(o,arguments)}),disabled:o.disableButton},"HEAL",8,["disabled"]),Object(r["f"])("button",{onClick:e[4]||(e[4]=function(t){return c.surrender=!0})},"SURRENDER")])),Object(r["f"])("section",At,[Ft,Object(r["f"])("ul",null,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(c.battles,(function(t,e){return Object(r["o"])(),Object(r["d"])("li",{key:e},[Object(r["f"])("span",{class:{"log--monster":"monster"===t.who,"log--player":"player"===t.who}},Object(r["x"])(t.who),3),Object(r["e"])(" - "+Object(r["x"])(t.what)+" - ",1),Object(r["f"])("span",{class:{"log--damage":"attack"===t.what,"log--heal":"heal"===t.what}},Object(r["x"])(t.value),3)])})),128))])])])],64)})),Bt={name:"MonsterSlayer",data:function(){return{playerHealth:100,monsterHealth:100,round:1,surrender:!1,battles:[]}},watch:{playerHealth:function(){0===this.playerHealth&&(this.surrender=!0)},monsterHealth:function(){0===this.monsterHealth&&(this.surrender=!0)}},computed:{styleMonsterHealth:function(){return{width:this.monsterHealth+"%"}},stylePlayerHealth:function(){return{width:this.playerHealth+"%"}},disableSpecialAttack:function(){return this.round%3!==0},disableButton:function(){return 0===this.playerHealth||0===this.monsterHealth}},methods:{attackMonster:function(){var t=Math.floor(7*Math.random()+5);this.monsterHealth-t<0?this.monsterHealth=0:this.monsterHealth-=t,this.attackPlayer(),this.battleLog("player","attack",t)},attackPlayer:function(){this.round++;var t=Math.floor(7*Math.random()+8);this.playerHealth-t<0?this.playerHealth=0:this.playerHealth-=t,this.battleLog("monster","attack",t)},specialAttack:function(){var t=Math.floor(9*Math.random()+11);this.monsterHealth-t<0?this.monsterHealth=0:this.monsterHealth-=t,this.attackPlayer(),this.battleLog("player","special attack",t)},heal:function(){var t=Math.floor(8*Math.random()+10);this.playerHealth+t>100?this.playerHealth=100:this.playerHealth+=t,this.attackPlayer(),this.battleLog("player","heal",t)},newGame:function(){this.surrender=!1,this.playerHealth=100,this.monsterHealth=100,this.round=1},battleLog:function(t,e,n){this.battles.push({who:t,what:e,value:n})}}};n("7155");Bt.render=Vt,Bt.__scopeId="data-v-21454a30";var Et=Bt,It=[{path:"/",name:"Home",component:I},{path:"/counterapp",name:"CounterApp",component:q},{path:"/form",name:"FormSubmit",component:bt},{path:"/simpletodo",name:"SimpleTodo",component:yt},{path:"/monster",name:"MonsterSlayer",component:Et}],Lt=Object(O["a"])({history:Object(O["b"])("/"),routes:It}),Dt=Lt;Object(r["c"])(m).use(Dt).mount("#app")},"5f81":function(t,e,n){},"61ee":function(t,e,n){"use strict";n("9574")},"70c9":function(t,e,n){},7155:function(t,e,n){"use strict";n("7958")},7958:function(t,e,n){},9574:function(t,e,n){},a55c:function(t,e,n){"use strict";n("4588")},b285:function(t,e,n){"use strict";n("4c85")},ca5e:function(t,e,n){t.exports=n.p+"img/counter.543d6bea.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.fdb205f2.js.map