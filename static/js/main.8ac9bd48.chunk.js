(this.webpackJsonpproffy=this.webpackJsonpproffy||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/logo.86fef799.svg"},32:function(e,a,t){e.exports=t.p+"static/media/landing.211f2bb0.svg"},33:function(e,a,t){e.exports=t.p+"static/media/study.e7a7e1b4.svg"},34:function(e,a,t){e.exports=t.p+"static/media/give-classes.156102ee.svg"},35:function(e,a,t){e.exports=t.p+"static/media/purple-heart.bfdb3ebe.svg"},39:function(e,a,t){e.exports=t.p+"static/media/back.dc8c47fa.svg"},40:function(e,a,t){e.exports=t.p+"static/media/whatsapp.45c6e6ec.svg"},41:function(e,a,t){e.exports=t.p+"static/media/warning.6dfaa2f9.svg"},43:function(e,a,t){e.exports=t(80)},65:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(31),r=t.n(c),o=t(8),i=t(1),u=t(3),s=t(14),m=t.n(s),b=t(32),v=t.n(b),f=t(33),d=t.n(f),p=t(34),E=t.n(p),g=t(35),h=t.n(g),j=t(36),O=t.n(j).a.create({baseURL:"http://localhost:3333"});t(65);var y=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){O.get("/connections").then((function(e){var a=e.data.total;c(a)}))}),[]),l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{id:"page-landing-content",className:"container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:m.a,alt:"Proffy logo"}),l.a.createElement("h2",null,"Sua plataforma de estudos online")),l.a.createElement("img",{src:v.a,alt:"Pataforma de estudos",className:"hero-image"}),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(o.b,{to:"/study",className:"study"},l.a.createElement("img",{src:d.a,alt:"Estudar"}),"Estudar"),l.a.createElement(o.b,{to:"/give-classes",className:"give-classes"},l.a.createElement("img",{src:E.a,alt:"Dar aulas"}),"Dar aulas")),l.a.createElement("span",{className:"total-connections"},"Total de ",t," conex\xf5es j\xe1 realizadas",l.a.createElement("img",{src:h.a,alt:"Cora\xe7\xe3o roxo"}))))},S=t(19),k=t.n(S),C=t(38),N=(t(72),t(39)),x=t.n(N),w=(t(73),function(e){return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"top-bar-container"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:x.a,alt:"Voltar"})),l.a.createElement("img",{src:m.a,alt:"Logo"})),l.a.createElement("div",{className:"header-content"},l.a.createElement("strong",null,e.title),e.description&&l.a.createElement("p",null,e.description),e.children))}),F=(t(74),t(40)),D=t.n(F),_=function(e){var a=e.teacher;return l.a.createElement("article",{className:"teacher-item"},l.a.createElement("header",null,l.a.createElement("img",{src:a.avatar,alt:a.name}),l.a.createElement("div",null,l.a.createElement("strong",null,a.name),l.a.createElement("span",null,a.subject))),l.a.createElement("p",null,a.bio),l.a.createElement("footer",null,l.a.createElement("p",null,"Pre\xe7o/hora: ",l.a.createElement("strong",null,"R$",a.cost)),l.a.createElement("a",{target:"_blank",onClick:function(){O.post("connections",{user_id:a.id})},href:"https://wa.me/".concat(a.whatsapp)},l.a.createElement("img",{src:D.a,alt:"Whatsapp"}),"Entrar em contato")))},Q=t(10),A=(t(75),function(e){var a=e.label,t=e.name,n=Object(Q.a)(e,["label","name"]);return l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("input",Object.assign({type:"text",id:t},n)))}),P=(t(76),function(e){var a=e.label,t=e.name,n=e.options,c=Object(Q.a)(e,["label","name","options"]);return l.a.createElement("div",{className:"select-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("select",Object.assign({value:"",id:t},c),l.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Selecione uma op\xe7\xe3o"),n.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)}))))});var B=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)(""),b=Object(u.a)(m,2),v=b[0],f=b[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),E=p[0],g=p[1];function h(){return(h=Object(C.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,O.get("classes",{params:{subject:i,week_day:v,time:E}});case 3:t=e.sent,c(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{id:"page-teacher-list",className:"container"},l.a.createElement(w,{title:"Estes s\xe3o os proffys dispon\xedveis."},l.a.createElement("form",{id:"search-teachers",onSubmit:function(e){return h.apply(this,arguments)}},l.a.createElement(P,{name:"subject",label:"Mat\xe9ria",value:i,onChange:function(e){s(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Qu\xedmica",label:"Qu\xedmica"},{value:"Portugu\xeas",label:"Portugu\xeas"}]}),l.a.createElement(P,{name:"week_day",label:"Dia da semana",value:v,onChange:function(e){f(e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(A,{type:"time",name:"time",label:"Hora",value:E,onChange:function(e){g(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Buscar"))),l.a.createElement("main",null,t.map((function(e){return l.a.createElement(_,{key:e.id,teacher:e})}))))},M=t(15),H=t(20),G=t(42),T=(t(77),function(e){var a=e.label,t=e.name,n=Object(Q.a)(e,["label","name"]);return l.a.createElement("div",{className:"textarea-block"},l.a.createElement("label",{htmlFor:t},a),l.a.createElement("textarea",Object.assign({id:t},n)))}),q=t(41),z=t.n(q);t(78);var I=function(){var e=Object(i.e)(),a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],b=s[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),d=f[0],p=f[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),h=g[0],j=g[1],y=Object(n.useState)(""),S=Object(u.a)(y,2),k=S[0],C=S[1],N=Object(n.useState)(""),x=Object(u.a)(N,2),F=x[0],D=x[1],_=Object(n.useState)([{week_day:0,from:"",to:""}]),Q=Object(u.a)(_,2),B=Q[0],q=Q[1];function I(e,a,t){var n=B.map((function(n,l){return l===e?Object(H.a)(Object(H.a)({},n),{},Object(M.a)({},a,t)):n}));q(n)}return l.a.createElement("div",{id:"page-teacher-form",className:"container"},l.a.createElement(w,{title:"Que incr\xedvel que voc\xea quer dar aulas.",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de inscri\xe7\xe3o."}),l.a.createElement("main",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),O.post("classes",{name:c,avatar:m,whatsapp:d,bio:h,subject:k,cost:Number(F),schedule:B}).then((function(){alert("Cadastro realizado com sucesso!"),e.push("/")})).catch((function(){alert("Erro no cadastro...")}))}},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Seus dados"),l.a.createElement(A,{name:"name",label:"Nome completo",value:c,onChange:function(e){r(e.target.value)}}),l.a.createElement(A,{name:"avatar",label:"Avatar",value:m,onChange:function(e){b(e.target.value)}}),l.a.createElement(A,{name:"whatsapp",label:"WhatsApp",value:d,onChange:function(e){p(e.target.value)}}),l.a.createElement(T,{name:"bio",label:"Biografia",value:h,onChange:function(e){j(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Sobre a aula"),l.a.createElement(P,{name:"subject",label:"Mat\xe9ria",value:k,onChange:function(e){C(e.target.value)},options:[{value:"Artes",label:"Artes"},{value:"Biologia",label:"Biologia"},{value:"Ci\xeancias",label:"Ci\xeancias"},{value:"Educa\xe7\xe3o F\xedsica",label:"Educa\xe7\xe3o F\xedsica"},{value:"F\xedsica",label:"F\xedsica"},{value:"Geografia",label:"Geografia"},{value:"Hist\xf3ria",label:"Hist\xf3ria"},{value:"Matem\xe1tica",label:"Matem\xe1tica"},{value:"Qu\xedmica",label:"Qu\xedmica"},{value:"Portugu\xeas",label:"Portugu\xeas"}]}),l.a.createElement(A,{name:"cost",label:"Custo da sua hora por aula",value:F,onChange:function(e){D(e.target.value)}})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Hor\xe1rios Dispon\xedveis",l.a.createElement("button",{type:"button",onClick:function(){q([].concat(Object(G.a)(B),[{week_day:0,from:"",to:""}]))}},"+ Novo hor\xe1rio")),B.map((function(e,a){return l.a.createElement("div",{key:e.week_day,className:"schedule-item"},l.a.createElement(P,{name:"week_day",label:"Dia da semana",value:e.week_day,onChange:function(e){return I(a,"week_day",e.target.value)},options:[{value:"0",label:"Domingo"},{value:"1",label:"Segunda-feira"},{value:"2",label:"Ter\xe7a-feira"},{value:"3",label:"Quarta-feira"},{value:"4",label:"Quinta-feira"},{value:"5",label:"Sexta-feira"},{value:"6",label:"S\xe1bado"}]}),l.a.createElement(A,{name:"from",label:"Das",type:"time",value:e.from,onChange:function(e){return I(a,"from",e.target.value)}}),l.a.createElement(A,{name:"to",label:"At\xe9",type:"time",value:e.to,onChange:function(e){return I(a,"to",e.target.value)}}))}))),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("img",{src:z.a,alt:"Aviso importante"}),"Importante! ",l.a.createElement("br",null),"Preencha todos os dados"),l.a.createElement("button",{type:"submit"},"Salvar cadastro")))))};var J=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{path:"/",exact:!0,component:y})," ",l.a.createElement(i.a,{path:"/study",component:B})," ",l.a.createElement(i.a,{path:"/give-classes",component:I})," ")};t(79);var L=function(){return l.a.createElement(J,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8ac9bd48.chunk.js.map