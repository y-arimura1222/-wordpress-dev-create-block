!function(){"use strict";var e,o={259:function(){var e=window.wp.blocks,o=window.wp.element,l=window.wp.i18n,n=window.wp.components,t=window.wp.blockEditor;const r=e=>{const{color:l}=e,n={width:"100px",height:"100px",border:"1px solid black",backgroundColor:l};return(0,o.createElement)("div",{style:n})},a=e=>{const{options:l,color:t,onChange:r}=e;return(0,o.createElement)(n.SelectControl,{label:"Color",value:t,options:l,onChange:r})};(0,e.registerBlockType)("create-block/slider-block",{apiVersion:2,edit:e=>{let{attributes:c,setAttributes:u}=e;const{content:i,color:s}=c,v=[{label:"None",value:""},{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"}],b=e=>{console.log(e),console.log(void 0)},p=(0,t.useBlockProps)({className:"slider-container"});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(t.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:"color"},(0,o.createElement)(a,{value:s,onChange:e=>u({color:e}),options:[{label:(0,l.__)("Success"),value:"green"},{label:(0,l.__)("Info"),value:"blue"},{label:(0,l.__)("Warning"),value:"orange"},{label:(0,l.__)("Danger"),value:"red"}]}))),(0,o.createElement)("div",p,!!c.content&&c.content.map(((e,l)=>(0,o.createElement)("div",{className:"current"},s&&(0,o.createElement)(r,{key:`square-${l}`,color:e.color}),(0,o.createElement)(a,{options:v.map(((e,o)=>{let{label:l,value:n}=e;return{label:l,value:n}})),color:e.color,onChange:b,key:`select-${l}`})))),(0,o.createElement)(a,{options:v.map(((e,o)=>{let{label:l,value:n}=e;return{label:l,value:n}})),color:s,onChange:e=>{console.log(e),c.content?u({content:[...i,{color:e}]}):u({content:[{color:e}]}),u({color:e})}})))},save:e=>{let{attributes:l}=e;const{content:n,color:a}=l;return(0,o.createElement)("div",t.useBlockProps.save(),(0,o.createElement)(r,{color:a}))}})}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,e=[],n.O=function(o,l,t,r){if(!l){var a=1/0;for(s=0;s<e.length;s++){l=e[s][0],t=e[s][1],r=e[s][2];for(var c=!0,u=0;u<l.length;u++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[u])}))?l.splice(u--,1):(c=!1,r<a&&(a=r));if(c){e.splice(s--,1);var i=t();void 0!==i&&(o=i)}}return o}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[l,t,r]},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={826:0,431:0};n.O.j=function(o){return 0===e[o]};var o=function(o,l){var t,r,a=l[0],c=l[1],u=l[2],i=0;if(a.some((function(o){return 0!==e[o]}))){for(t in c)n.o(c,t)&&(n.m[t]=c[t]);if(u)var s=u(n)}for(o&&o(l);i<a.length;i++)r=a[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},l=self.webpackChunkslider_block=self.webpackChunkslider_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))}();var t=n.O(void 0,[431],(function(){return n(259)}));t=n.O(t)}();