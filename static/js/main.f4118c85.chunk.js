(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),i=a(3),o=a(4),b=a(6),s=a(5),u=a(7),m=(a(14),function(e){var t=e.handleChangeTab,a=e.setActiveTab,n=e.tab,l=e.index,r="tab_title\n    ".concat(a===l?"tab__title--active":"");return c.a.createElement("li",{className:r},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return t(l)}},n.title))}),h=function(e){var t=e.tabs,a=e.setActiveTab,n=e.handleChangeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h1",null,"".concat(t.length," tabs"))),c.a.createElement("ul",{className:"tab"},t.map(function(e,t){return c.a.createElement(m,{key:e.content,name:t,handleChangeTab:n,setActiveTab:a,tab:e,index:t})})))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],setActiveTab:0},a.handleChangeTab=function(e){a.setState({setActiveTab:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,a=e.setActiveTab;return c.a.createElement("div",{className:"App"},c.a.createElement(h,{tabs:t,setActiveTab:a,handleChangeTab:this.handleChangeTab}),c.a.createElement("section",null,t[a].content))}}]),t}(c.a.Component);r.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f4118c85.chunk.js.map