
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([10],{1023:function(e,t,a){e.exports=a(1024)},1024:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){return e&&e.__esModule?e:{default:e}}var i=a(9),s=l(i),o=a(0),r=l(o);Object.defineProperty(t,"__esModule",{value:!0});var d=a(19),u=n(d),c=a(12),f=n(c),m=a(13),p=n(m),g=a(20),h=n(g),y=a(21),x=n(y),b=a(170),k=n(b),w=a(1),E=n(w),v=a(49),j=n(v),M=a(169),T=(n(M),a(18)),C={now:[{title:"Track Usage",tags:["Resources"]}],next:[{title:"Icon Packs Discovery",tags:["Resources"]},{title:"Sketch Libraries",tags:["Resources"]},{title:"Link",tags:["Component"]},{title:"Feed",tags:["Site"]},{title:"Prop Type Table",tags:["Site"]},{title:"Navigation Updates",tags:["Site"]},{title:"Motion",tags:["Core"]},{title:"Tag",tags:["Component"]},{title:"View Toggle",tags:["Component"]},{title:"Theming",tags:["Component"]}],future:[{title:"Tooltip / Popover",tags:["Component"]},{title:"Progress Loader",tags:["Component"]},{title:"Writing Style",tags:["Guidelines"]},{title:"Layout",tags:["Core"]},{title:"Text (vNext)",tags:["Component"]},{title:"Tab (vNext)",tags:["Component"]},{title:"Banner",tags:["Component"]},{title:"Text Input",tags:["Component"]},{title:"Breadcrumb",tags:["Component"]},{title:"Switch",tags:["Component"]},{title:"Modal",tags:["Component"]},{title:"Dialog",tags:["Pattern"]},{title:"Blank State",tags:["Pattern"]},{title:"Error Pages",tags:["Pattern"]},{title:"Data Table",tags:["Pattern"]}]},S=function(e){return r.default.createElement("div",{className:"purpose","data-jsx":2469333919},e.children,r.default.createElement(s.default,{styleId:2469333919,css:'.purpose[data-jsx="2469333919"]{font-size:'+E.default.type.fontSizeMedium+";line-height:"+E.default.type.lineHeightExtra+";font-weight:"+E.default.type.fontWeightXLight+"}"}))},N=function(e){return r.default.createElement("div",{"aria-hidden":"true",className:"bar","data-jsx":693756736},r.default.createElement(s.default,{styleId:693756736,css:'.bar[data-jsx="693756736"]{height:0;overflow:hidden;padding-bottom:'+E.default.layout.spacingXLarge+";border-bottom:1px solid "+E.default.colors.gray01+";margin-bottom:"+E.default.layout.spacingSmall+"}"}))},O=function(e){return r.default.createElement("div",{className:"tasks",style:{borderLeftColor:e.color},"data-jsx":2597502096},e.tasks.map(function(e){return r.default.createElement(I,{key:e.title,item:e})}),r.default.createElement(s.default,{styleId:2597502096,css:'.tasks[data-jsx="2597502096"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 calc('+E.default.layout.spacingMedium+" / -2) 0 0;border-left-style:solid;border-left-width:5px;padding-left:"+E.default.layout.spacingXSmall+"}"}))},P=function(e){return r.default.createElement("div",{className:"cat "+(e.isVisible?"cat--is-visible":""),"aria-hidden":!0,"data-jsx":885262860},r.default.createElement(T.GithubIcon,{color:j.default.colors.gray01}),r.default.createElement(s.default,{styleId:885262860,css:'.cat[data-jsx="885262860"]{margin-left:auto;height:24px;width:24px;opacity:0;-webkit-transition:opacity '+E.default.motion.speedNormal+";transition:opacity "+E.default.motion.speedNormal+'}.cat--is-visible[data-jsx="885262860"]{opacity:1}'}))},I=function(e){function t(e){(0,f.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleMouseOver=a.handleMouseOver.bind(a),a.handleMouseOut=a.handleMouseOut.bind(a),a.state={isOver:!1},a}return(0,x.default)(t,e),(0,p.default)(t,[{key:"handleMouseOver",value:function(){this.setState({isOver:!0})}},{key:"handleMouseOut",value:function(){this.setState({isOver:!1})}},{key:"render",value:function(){var e=this.props.item,a=e.tags.indexOf("Site")>-1?"site: "+e.title+" Roadmap Discussion":e.title.toLowerCase().replace(/ /g,"-").replace(/[\(\)]/g,"")+": Roadmap Discussion",l=e.href?e.href:"https://github.com/pluralsight/design-system/issues/new?title="+a;return r.default.createElement("a",{href:l,target:"_blank",className:"task",onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,"data-jsx":2784244981},r.default.createElement(t.Title,null,e.title),r.default.createElement(t.Tags,{tags:e.tags,icon:r.default.createElement(P,{isVisible:this.state.isOver})}),r.default.createElement(s.default,{styleId:2784244981,css:'.task[data-jsx="2784244981"]{text-decoration:none;color:inherit;display:block;width:100%;margin:calc('+E.default.layout.spacingMedium+" / 2);background:"+E.default.colors.bone+";padding:"+E.default.layout.spacingMedium+";border-radius:12px;border:2px solid transparent;-webkit-transition:all "+E.default.motion.speedNormal+";transition:all "+E.default.motion.speedNormal+'}.task[data-jsx="2784244981"]:focus,.task[data-jsx="2784244981"]:hover{border:2px solid '+E.default.colors.gray01+";outline:none;background:"+E.default.colors.white+'}@media screen and (min-width:1000px){.task[data-jsx="2784244981"]{width:calc(33.333% - '+E.default.layout.spacingMedium+")}}"}))}}]),t}(r.default.Component);I.Title=function(e){return r.default.createElement("div",{className:"title","data-jsx":125360031},e.children,r.default.createElement(s.default,{styleId:125360031,css:'.title[data-jsx="125360031"]{margin:0 0 '+E.default.layout.spacingSmall+" 0;font-size:"+E.default.type.fontSizeMedium+";font-weight:"+E.default.type.fontWeightMedium+"}"}))},I.Tags=function(e){return r.default.createElement("div",{className:"tags","data-jsx":4048218912},e.tags.map(function(e){return r.default.createElement(I.Tag,{key:e},e)}),e.icon,r.default.createElement(s.default,{styleId:4048218912,css:'.tags[data-jsx="4048218912"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}'}))},I.Tag=function(e){return r.default.createElement("div",{className:"tag","data-jsx":2468004776},r.default.createElement(k.default,{appearance:k.default.appearances.stroke},e.children),r.default.createElement(s.default,{styleId:2468004776,css:'.tag[data-jsx="2468004776"]{overflow:hidden}'}))},t.default=(0,T.withServerProps)(function(e){return r.default.createElement(T.Chrome,null,r.default.createElement(T.Content,{title:"Install"},r.default.createElement(T.PageHeading,null,"Roadmap"),r.default.createElement(S,null,"The Roadmap aims to expose what current is and what future work will be tackled in the Design System. Explore the items below and follow them on to Github for more details and to join the conversation to promote or explore these or other items."),r.default.createElement(N,null),r.default.createElement(T.SectionHeading,null,"Now"),r.default.createElement(T.P,null,"What the team is working on currently. These issues are started and we anticipate completing them."),r.default.createElement(O,{color:E.default.colors.green,tasks:C.now}),r.default.createElement(N,null),r.default.createElement(T.SectionHeading,null,"Next"),r.default.createElement(T.P,null,"Here is what we think is coming up quickly (roughly this quarter). Priorities often change. Voice your thoughts on any of these issues, including priority, on"," ",r.default.createElement(T.TextLink,{href:"https://github.com/pluralsight/design-system/issues"},"Github"),", or take a look at how you can"," ",r.default.createElement(T.TextLink,{href:"/contribute"},"contribute"),"."),r.default.createElement(O,{color:E.default.colors.yellow,tasks:C.next}),r.default.createElement(N,null),r.default.createElement(T.SectionHeading,null,"Future"),r.default.createElement(T.P,null,"Longer-term ideas. These are deemed to add value but are in need of more concrete discovery and prioritization."),r.default.createElement(O,{color:E.default.colors.pink,tasks:C.future})))})}},[1023]);
            return { page: comp.default }
          })
        