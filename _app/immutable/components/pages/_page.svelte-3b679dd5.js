import{S as z,i as T,s as j,k as E,a as y,q as C,l as I,m as V,c as $,r as L,h as d,n as h,I as W,b,D as _,u as P,B as M,C as J,J as F,E as A,F as K,G as N,f as w,t as H,K as B,g as X,d as Y,w as R,x as S,y as k,z as q}from"../../chunks/index-827e2481.js";const te=""+new URL("../../assets/luc-1ef0f0b8.jpg",import.meta.url).href;function le(r){let e,i,t,l,a,c,o,v,n,f;return{c(){e=E("div"),i=E("img"),l=y(),a=E("div"),c=C(r[1]),o=y(),v=E("div"),n=C(r[2]),this.h()},l(u){e=I(u,"DIV",{class:!0,style:!0});var s=V(e);i=I(s,"IMG",{alt:!0,src:!0,class:!0}),l=$(s),a=I(s,"DIV",{class:!0});var m=V(a);c=L(m,r[1]),m.forEach(d),o=$(s),v=I(s,"DIV",{class:!0});var g=V(v);n=L(g,r[2]),g.forEach(d),s.forEach(d),this.h()},h(){h(i,"alt",""),W(i.src,t=r[0])||h(i,"src",t),h(i,"class","svelte-ohcm49"),h(a,"class","name svelte-ohcm49"),h(v,"class","description svelte-ohcm49"),h(e,"class","profile-header svelte-ohcm49"),h(e,"style",f=r[3]?"height: 100vh":"")},m(u,s){b(u,e,s),_(e,i),_(e,l),_(e,a),_(a,c),_(e,o),_(e,v),_(v,n)},p(u,[s]){s&1&&!W(i.src,t=u[0])&&h(i,"src",t),s&2&&P(c,u[1]),s&4&&P(n,u[2]),s&8&&f!==(f=u[3]?"height: 100vh":"")&&h(e,"style",f)},i:M,o:M,d(u){u&&d(e)}}}function se(r,e,i){let{image:t}=e,{name:l}=e,{description:a}=e,{fullHeight:c=!1}=e;return r.$$set=o=>{"image"in o&&i(0,t=o.image),"name"in o&&i(1,l=o.name),"description"in o&&i(2,a=o.description),"fullHeight"in o&&i(3,c=o.fullHeight)},[t,l,a,c]}class ie extends z{constructor(e){super(),T(this,e,se,le,j,{image:0,name:1,description:2,fullHeight:3})}}function ae(r){let e,i,t,l,a,c,o,v,n,f,u,s;const m=r[5].default,g=J(m,r,r[4],null);return{c(){e=E("div"),i=E("div"),t=C(r[0]),a=y(),c=E("div"),o=C(r[1]),v=y(),n=E("div"),f=C(r[2]),u=y(),g&&g.c(),this.h()},l(p){e=I(p,"DIV",{class:!0});var D=V(e);i=I(D,"DIV",{class:!0});var U=V(i);t=L(U,r[0]),U.forEach(d),a=$(D),c=I(D,"DIV",{class:!0});var O=V(c);o=L(O,r[1]),O.forEach(d),v=$(D),n=I(D,"DIV",{class:!0});var Q=V(n);f=L(Q,r[2]),Q.forEach(d),u=$(D),g&&g.l(D),D.forEach(d),this.h()},h(){h(i,"class",l=F(r[3]+"-text title")+" svelte-1bi2coi"),h(c,"class","dates svelte-1bi2coi"),h(n,"class","description svelte-1bi2coi"),h(e,"class","resume-element-text svelte-1bi2coi")},m(p,D){b(p,e,D),_(e,i),_(i,t),_(e,a),_(e,c),_(c,o),_(e,v),_(e,n),_(n,f),_(e,u),g&&g.m(e,null),s=!0},p(p,[D]){(!s||D&1)&&P(t,p[0]),(!s||D&8&&l!==(l=F(p[3]+"-text title")+" svelte-1bi2coi"))&&h(i,"class",l),(!s||D&2)&&P(o,p[1]),(!s||D&4)&&P(f,p[2]),g&&g.p&&(!s||D&16)&&A(g,m,p,p[4],s?N(m,p[4],D,null):K(p[4]),null)},i(p){s||(w(g,p),s=!0)},o(p){H(g,p),s=!1},d(p){p&&d(e),g&&g.d(p)}}}function ne(r,e,i){let{$$slots:t={},$$scope:l}=e,{title:a}=e,{dates:c}=e,{description:o}=e,{color:v}=e;return r.$$set=n=>{"title"in n&&i(0,a=n.title),"dates"in n&&i(1,c=n.dates),"description"in n&&i(2,o=n.description),"color"in n&&i(3,v=n.color),"$$scope"in n&&i(4,l=n.$$scope)},[a,c,o,v,l,t]}class ee extends z{constructor(e){super(),T(this,e,ne,ae,j,{title:0,dates:1,description:2,color:3})}}function Z(r){let e,i;return e=new ee({props:{title:r[0],dates:r[1],description:r[2],color:r[3],$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){k(e,t,l),i=!0},p(t,l){const a={};l&1&&(a.title=t[0]),l&2&&(a.dates=t[1]),l&4&&(a.description=t[2]),l&8&&(a.color=t[3]),l&64&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){i||(w(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function re(r){let e;const i=r[5].default,t=J(i,r,r[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&64)&&A(t,i,l,l[6],e?N(i,l[6],a,null):K(l[6]),null)},i(l){e||(w(t,l),e=!0)},o(l){H(t,l),e=!1},d(l){t&&t.d(l)}}}function x(r){let e,i;return e=new ee({props:{title:r[0],dates:r[1],description:r[2],color:r[3],$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){k(e,t,l),i=!0},p(t,l){const a={};l&1&&(a.title=t[0]),l&2&&(a.dates=t[1]),l&4&&(a.description=t[2]),l&8&&(a.color=t[3]),l&64&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){i||(w(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function fe(r){let e;const i=r[5].default,t=J(i,r,r[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&64)&&A(t,i,l,l[6],e?N(i,l[6],a,null):K(l[6]),null)},i(l){e||(w(t,l),e=!0)},o(l){H(t,l),e=!1},d(l){t&&t.d(l)}}}function oe(r){let e,i,t,l,a,c,o,v,n=r[4]&&Z(r),f=!r[4]&&x(r);return{c(){e=E("div"),i=E("div"),n&&n.c(),t=y(),l=E("div"),c=y(),o=E("div"),f&&f.c(),this.h()},l(u){e=I(u,"DIV",{class:!0});var s=V(e);i=I(s,"DIV",{class:!0});var m=V(i);n&&n.l(m),m.forEach(d),t=$(s),l=I(s,"DIV",{class:!0}),V(l).forEach(d),c=$(s),o=I(s,"DIV",{class:!0});var g=V(o);f&&f.l(g),g.forEach(d),s.forEach(d),this.h()},h(){h(i,"class","text align-right svelte-1hx3ovr"),B(i,"empty",!r[4]),h(l,"class",a=F(r[3]+" vertical-color-line")+" svelte-1hx3ovr"),h(o,"class","text svelte-1hx3ovr"),B(o,"empty",r[4]),h(e,"class","resume-element svelte-1hx3ovr")},m(u,s){b(u,e,s),_(e,i),n&&n.m(i,null),_(e,t),_(e,l),_(e,c),_(e,o),f&&f.m(o,null),v=!0},p(u,[s]){u[4]?n?(n.p(u,s),s&16&&w(n,1)):(n=Z(u),n.c(),w(n,1),n.m(i,null)):n&&(X(),H(n,1,1,()=>{n=null}),Y()),(!v||s&16)&&B(i,"empty",!u[4]),(!v||s&8&&a!==(a=F(u[3]+" vertical-color-line")+" svelte-1hx3ovr"))&&h(l,"class",a),u[4]?f&&(X(),H(f,1,1,()=>{f=null}),Y()):f?(f.p(u,s),s&16&&w(f,1)):(f=x(u),f.c(),w(f,1),f.m(o,null)),(!v||s&16)&&B(o,"empty",u[4])},i(u){v||(w(n),w(f),v=!0)},o(u){H(n),H(f),v=!1},d(u){u&&d(e),n&&n.d(),f&&f.d()}}}function ue(r,e,i){let{$$slots:t={},$$scope:l}=e,{title:a}=e,{dates:c}=e,{description:o}=e,{color:v}=e,{onLeft:n=!1}=e;return r.$$set=f=>{"title"in f&&i(0,a=f.title),"dates"in f&&i(1,c=f.dates),"description"in f&&i(2,o=f.description),"color"in f&&i(3,v=f.color),"onLeft"in f&&i(4,n=f.onLeft),"$$scope"in f&&i(6,l=f.$$scope)},[a,c,o,v,n,t,l]}class G extends z{constructor(e){super(),T(this,e,ue,oe,j,{title:0,dates:1,description:2,color:3,onLeft:4})}}function ce(r){let e,i,t,l,a,c,o,v,n,f,u;return{c(){e=E("div"),i=C("Developped features for a data acquisition application."),t=y(),l=E("div"),a=C("Created extensions for a cloud data vizualisation platform"),c=y(),o=E("div"),v=C("Increased test coverage by more than 20 percent"),n=y(),f=E("div"),u=C("Created tools to increase the team's efficiency"),this.h()},l(s){e=I(s,"DIV",{class:!0});var m=V(e);i=L(m,"Developped features for a data acquisition application."),m.forEach(d),t=$(s),l=I(s,"DIV",{class:!0});var g=V(l);a=L(g,"Created extensions for a cloud data vizualisation platform"),g.forEach(d),c=$(s),o=I(s,"DIV",{class:!0});var p=V(o);v=L(p,"Increased test coverage by more than 20 percent"),p.forEach(d),n=$(s),f=I(s,"DIV",{class:!0});var D=V(f);u=L(D,"Created tools to increase the team's efficiency"),D.forEach(d),this.h()},h(){h(e,"class","list-element svelte-ewrr9g"),h(l,"class","list-element svelte-ewrr9g"),h(o,"class","list-element svelte-ewrr9g"),h(f,"class","list-element svelte-ewrr9g")},m(s,m){b(s,e,m),_(e,i),b(s,t,m),b(s,l,m),_(l,a),b(s,c,m),b(s,o,m),_(o,v),b(s,n,m),b(s,f,m),_(f,u)},p:M,d(s){s&&d(e),s&&d(t),s&&d(l),s&&d(c),s&&d(o),s&&d(n),s&&d(f)}}}function me(r){let e,i,t,l,a,c,o,v;return{c(){e=E("div"),i=C("Created a protocol to dynamically stream compressed 3D meshes"),t=y(),l=E("div"),a=C("Implemented different strategies and metrics"),c=y(),o=E("div"),v=C("Performed a statistical analysis to determine the best combination"),this.h()},l(n){e=I(n,"DIV",{class:!0});var f=V(e);i=L(f,"Created a protocol to dynamically stream compressed 3D meshes"),f.forEach(d),t=$(n),l=I(n,"DIV",{class:!0});var u=V(l);a=L(u,"Implemented different strategies and metrics"),u.forEach(d),c=$(n),o=I(n,"DIV",{class:!0});var s=V(o);v=L(s,"Performed a statistical analysis to determine the best combination"),s.forEach(d),this.h()},h(){h(e,"class","list-element svelte-ewrr9g"),h(l,"class","list-element svelte-ewrr9g"),h(o,"class","list-element svelte-ewrr9g")},m(n,f){b(n,e,f),_(e,i),b(n,t,f),b(n,l,f),_(l,a),b(n,c,f),b(n,o,f),_(o,v)},p:M,d(n){n&&d(e),n&&d(t),n&&d(l),n&&d(c),n&&d(o)}}}function de(r){let e,i,t,l,a,c,o,v,n,f,u;return a=new G({props:{title:"Software Engineer at Dative",dates:"2021-2023",description:"Fullstack developper (C# and Vue.JS)",color:"primary",$$slots:{default:[ce]},$$scope:{ctx:r}}}),o=new G({props:{title:"End of studies internship",dates:"2021-2021",description:"VR reseach project in an IT laboratory",color:"secondary",onLeft:!0,$$slots:{default:[me]},$$scope:{ctx:r}}}),n=new G({props:{title:"Master of Science in Computer Science and Engineering",dates:"2016-2021",description:"Institut National des Sciences Appliquées de Lyon",color:"tertiary"}}),{c(){e=E("div"),i=E("div"),t=C("My experiences"),l=y(),R(a.$$.fragment),c=y(),R(o.$$.fragment),v=y(),R(n.$$.fragment),this.h()},l(s){e=I(s,"DIV",{class:!0,style:!0});var m=V(e);i=I(m,"DIV",{class:!0});var g=V(i);t=L(g,"My experiences"),g.forEach(d),l=$(m),S(a.$$.fragment,m),c=$(m),S(o.$$.fragment,m),v=$(m),S(n.$$.fragment,m),m.forEach(d),this.h()},h(){h(i,"class","resume-title tertiary-text svelte-ewrr9g"),h(e,"class","resume"),h(e,"style",f=r[0]?"height: 100vh":"")},m(s,m){b(s,e,m),_(e,i),_(i,t),_(e,l),k(a,e,null),_(e,c),k(o,e,null),_(e,v),k(n,e,null),u=!0},p(s,[m]){const g={};m&2&&(g.$$scope={dirty:m,ctx:s}),a.$set(g);const p={};m&2&&(p.$$scope={dirty:m,ctx:s}),o.$set(p),(!u||m&1&&f!==(f=s[0]?"height: 100vh":""))&&h(e,"style",f)},i(s){u||(w(a.$$.fragment,s),w(o.$$.fragment,s),w(n.$$.fragment,s),u=!0)},o(s){H(a.$$.fragment,s),H(o.$$.fragment,s),H(n.$$.fragment,s),u=!1},d(s){s&&d(e),q(a),q(o),q(n)}}}function ve(r,e,i){let{fullHeight:t=!1}=e;return r.$$set=l=>{"fullHeight"in l&&i(0,t=l.fullHeight)},[t]}class _e extends z{constructor(e){super(),T(this,e,ve,de,j,{fullHeight:0})}}function he(r){let e,i,t,l;return e=new ie({props:{image:te,name:"Luc Billaud",description:"Software Engineer at Dative",fullHeight:!0}}),t=new _e({props:{fullHeight:!0}}),{c(){R(e.$$.fragment),i=y(),R(t.$$.fragment)},l(a){S(e.$$.fragment,a),i=$(a),S(t.$$.fragment,a)},m(a,c){k(e,a,c),b(a,i,c),k(t,a,c),l=!0},p:M,i(a){l||(w(e.$$.fragment,a),w(t.$$.fragment,a),l=!0)},o(a){H(e.$$.fragment,a),H(t.$$.fragment,a),l=!1},d(a){q(e,a),a&&d(i),q(t,a)}}}class pe extends z{constructor(e){super(),T(this,e,null,he,j,{})}}export{pe as default};
