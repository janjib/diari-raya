(this["webpackJsonpreact-raya"]=this["webpackJsonpreact-raya"]||[]).push([[0],{55:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(31),r=a.n(n),l=(a(54),a(55),a(75)),i=a(76),o=a(22),j=a(17),u=a(3),m=Object(c.createContext)(),d=function(e){var t=Object(c.useState)(null),a=Object(j.a)(t,2),s=a[0],n=a[1],r={currentUser:s,setCurrentUser:n};return Object(c.useEffect)((function(){console.log("User Changed",s)}),[s]),Object(u.jsx)(m.Provider,{value:r,children:e.children})},b=function(){var e=Object(c.useContext)(m).currentUser;return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"transparent",variant:"light",children:[Object(u.jsx)(l.a.Brand,{className:"ml-3",href:"#home",children:"DiariRaya"}),Object(u.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsx)(i.a,{className:"mr-auto"}),Object(u.jsxs)(i.a,{className:"pt-1",children:[Object(u.jsxs)(o.b,{to:"/view-album-page",className:"d-flex",children:[Object(u.jsx)("i",{className:"fas fa-plus-circle mt-2 mx-1"}),Object(u.jsx)("span",{className:"mt-2 nav-info-text mx-2",children:"Post"})]}),Object(u.jsxs)(o.b,{to:"/post-quote",className:"d-flex",children:[Object(u.jsx)("i",{className:"fas fa-comment-dots mt-2 mx-1"}),Object(u.jsx)("span",{className:"mt-2 nav-info-text mx-2",children:"Hari Raya Speech"})]}),Object(u.jsx)(i.a.Link,{children:Object(u.jsx)("i",{className:"fas fa-user-circle",children:e&&Object(u.jsx)("span",{className:"current-user-name my-auto ml-1",children:e.displayName})})})]})]})]})})},x=a(11),p=a(73),h=a(77),O=function(e){var t=e.item;return Object(u.jsx)(h.a,{className:"quotes-card my-2 ",children:Object(u.jsxs)(h.a.Body,{children:[Object(u.jsxs)(h.a.Title,{className:"",children:[Object(u.jsx)("i",{className:"fas fa-user-circle mx-2 pb-3"}),Object(u.jsx)("span",{className:"post-owner-name",children:t.quotesOwner})]}),Object(u.jsx)(h.a.Text,{className:"quote-text",children:t.quotesText})]})})},f=a(29),g=a(27);a(69);g.a.initializeApp({apiKey:"AIzaSyBvFuqL9ABCduMlK9a-8l3darGiVaTyj7Q",authDomain:"react-raya.firebaseapp.com",projectId:"react-raya",storageBucket:"react-raya.appspot.com",messagingSenderId:"295877626780",appId:"1:295877626780:web:0ab067d17a0696c9e81659",measurementId:"G-CYGHHB33GQ"}),g.a.analytics();var v=g.a.firestore(),y=g.a.firestore.FieldValue.serverTimestamp,N=new g.a.auth.GoogleAuthProvider,k=g.a.auth(),w=g.a.storage(),C=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){var t=v.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id}))})),n(t)}));return function(){return t()}}),[e]),{docs:s}},q=function(){var e=Object(x.g)(),t=C("quotes").docs;return console.log(t),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p.a,{className:"post_section_container d-flex align-items-center my-5 flex-column",children:[t.map((function(e,t){return Object(u.jsx)(O,{item:e},t)})),Object(u.jsx)("button",{className:"create-quote-button m-3 p-1",onClick:function(){return e.push("/write-quote")},children:Object(u.jsx)("i",{className:"fas fa-plus"})})]})})},S=function(e){v.collection("quotes").add(e)},P=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(j.a)(n,2),l=r[0],i=r[1],o=Object(c.useRef)(),m=Object(x.g)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p.a,{className:"write-quote-container d-flex align-items-center my-5 flex-column",children:[Object(u.jsx)("button",{className:"write-quote-go-back-button p-3 mb-5",onClick:function(){return m.push("/post-quote")},children:"Go Back"}),Object(u.jsxs)(h.a,{className:"write-quote-card my-2",children:[Object(u.jsxs)(h.a.Body,{children:[Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("input",{type:"text",className:"write-quote-input-user p-2",placeholder:"Post as Rujhan Najib",value:a,onChange:function(e){s(e.target.value)}})}),Object(u.jsx)("div",{className:"d-flex justify-content-center input-text-div mx-auto my-3",children:Object(u.jsx)("textarea",{as:"textarea",className:"write-quote-input-text my-2 p-1",placeholder:"Write your Ucapan Hari Raya here",value:l,onChange:function(e){i(e.target.value)}})})]}),Object(u.jsxs)("button",{className:"post-quote-button d-block mr-2 ml-auto text-center my-3",onClick:function(e){if(e.preventDefault(),a||l){var t={quotesOwner:a,quotesText:l,createdAt:y()};S(t),s(""),i(""),o.current.style.display="flex",m.push("/post-quote")}else alert("Please fill the form !")},children:[Object(u.jsx)("i",{style:{display:"none"},ref:o,className:"fas fa-check-circle mx-2"}),"Post"]})]})]})})},U=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"text-center last-paragraph",children:"Anything about your Raya ..."}),Object(u.jsx)("h1",{className:"text-center last-headline",children:"Post it here ..."}),Object(u.jsxs)("ul",{className:"d-flex justify-content-center list-unstyled my-5",children:[Object(u.jsx)("a",{href:"https://www.instagram.com/harjan_04/",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("li",{className:"m-2 socmed-icon ",children:Object(u.jsx)("img",{src:"/images/github.svg",className:"socmed-icon",alt:""})})}),Object(u.jsx)("a",{href:"https://t.me/RujhanNajib",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("li",{className:"m-2 socmed-icon",children:Object(u.jsx)("img",{src:"/images/instagram.svg",className:"socmed-icon",alt:""})})}),Object(u.jsx)("a",{href:"https://github.com/janjib",rel:"noreferrer",target:"_blank",children:Object(u.jsx)("li",{className:"m-2 socmed-icon",children:Object(u.jsx)("img",{src:"/images/telegram.svg",className:"socmed-icon",alt:""})})})]})]})},I=function(){var e=Object(x.g)(),t=Object(c.useContext)(m),a=(t.currentUser,t.setCurrentUser);return Object(u.jsxs)(p.a,{className:"",children:[Object(u.jsxs)("div",{className:"d-flex hero-div flex-column justify-content-center align-items-center",children:[Object(u.jsxs)("h1",{className:"homepage-title",children:["DiariRaya",Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:"./images/ketupat.svg",className:"ketupat-svg mx-2 img-fluid",alt:""})})]}),Object(u.jsxs)("button",{className:"sign-in-button my-5 text-center p-3 ",onClick:function(){N.addScope("profile"),N.addScope("email"),k.signInWithPopup(N).then((function(t){var c=t.credential.accessToken;console.log("Token : ",c);var s=t.user;a({displayName:s.displayName,email:s.email,token:c}),console.log("user :",s),e.push("/view-album-page")})).catch((function(e){alert("Error occured : ",e)}))},children:["Sign In With Google",Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:"./images/google.svg",className:"google-svg mx-2",alt:""})})]})]}),Object(u.jsx)("div",{className:"appreciate-div my-5",children:Object(u.jsx)(U,{})})]})},B=a(48),T=function(e){var t=e.component,a=Object(B.a)(e,["component"]),s=Object(c.useContext)(m).currentUser;return Object(u.jsx)(x.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return s?Object(u.jsx)(t,Object(f.a)({},e)):Object(u.jsx)(x.a,{to:"/"})}}))},A=function(){var e=Object(x.g)(),t=Object(c.useState)(null),a=Object(j.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)("Please select a photo"),l=Object(j.a)(r,2),i=l[0],o=l[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),O=b[0],f=b[1],g=Object(c.useContext)(m).currentUser,N=["image/jpeg","image/png"];return Object(u.jsxs)(p.a,{className:"write-post-container d-flex align-items-center my-5 flex-column",children:[Object(u.jsx)("button",{onClick:function(){return e.push("/view-album-page")},className:"my-5 albumpage-goback-button",children:"Go back"}),Object(u.jsxs)(h.a,{className:"write-post-card my-2",children:[Object(u.jsxs)(h.a.Body,{children:[Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsxs)("div",{className:"h-100 w-100 d-flex justify-content-center",children:[Object(u.jsx)("input",{type:"file",id:"actual-btn",onChange:function(e){var t=e.target.files[0];t&&N.includes(t.type)?(n(t),o(t.name)):(n(null),alert("Only png and jpeg are accepted !"),o("Please select a picture"))},hidden:!0}),Object(u.jsx)("label",{htmlFor:"actual-btn",className:"form-file-label mx-2  text-center",children:"+"}),Object(u.jsx)("span",{className:"span-file-selected",children:i})]})}),Object(u.jsx)("div",{className:"d-flex  justify-content-center input-text-div mx-auto my-3",children:Object(u.jsx)("textarea",{as:"textarea",className:"write-quote-input-text my-2 p-1 h-70",onChange:function(e){f(e.target.value)},placeholder:"Please insert a caption",value:O})})]}),Object(u.jsx)("button",{className:"post-album-button d-block mr-2 ml-auto text-center  mb-1 mx-2  ",onClick:function(t){s||O?(w.ref("/images/".concat(s.name)).put(s).on("state_changed",console.log,console.error,(function(){w.ref("images").child(s.name).getDownloadURL().then((function(e){v.collection("posts").add({pictureUrl:e,username:g.displayName,createdAt:y(),caption:O,dateCreated:(new Date).toLocaleDateString()})}))})),console.log("clicked"),n(null),o("Please select a photo"),f(""),e.push("/view-album-page")):alert("Please fill the form")},children:"Post"})]})]})},R=a(74),G=function(e){var t=e.selectedImage,a=e.setSelectedImage;return console.log(t.createdAt),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(R.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1},children:Object(u.jsx)(h.a,{className:"modal-card",children:Object(u.jsxs)(h.a.Body,{children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)(h.a.Title,{children:t.username}),Object(u.jsx)("span",{children:t.dateCreated})]}),Object(u.jsx)(h.a.Img,{variant:"top",src:t.pictureUrl,className:"backdrop-img img-fluid"}),Object(u.jsx)(h.a.Text,{className:"caption-card-part p-1 m-1",children:t.caption})]})})})})},D=function(){var e=Object(x.g)(),t=Object(c.useState)(null),a=Object(j.a)(t,2),s=a[0],n=a[1],r=C("posts").docs,l=function(e){n({pictureUrl:e.target.src,caption:e.target.dataset.caption,username:e.target.dataset.username,dateCreated:e.target.dataset.datecreated})};return Object(u.jsxs)(p.a,{className:"view-albumpage-container h-100 d-flex justify-content-center flex-wrap my-5 mx-auto",children:[r&&r.map((function(e){var t=e.pictureUrl,a=e.id,c=e.username,s=e.caption,n=e.dateCreated;return Object(u.jsx)(R.a.img,{src:t,alt:"",className:"post-preview img-fluid my-4 mx-2","data-username":c,"data-caption":s,"data-datecreated":n,onClick:l,initial:{opacity:0},animate:{opacity:1},transition:{delay:1},layout:!0},a)})),s&&Object(u.jsx)(G,{selectedImage:s,setSelectedImage:n}),Object(u.jsx)("button",{className:"create-post-button m-3 p-1",onClick:function(){return e.push("/album-page")},children:Object(u.jsx)("i",{class:"fas fa-plus"})})]})};var _=function(){return Object(u.jsx)(d,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(x.d,{children:[Object(u.jsx)(x.b,{path:"/diari-raya",exact:!0,component:I}),Object(u.jsx)(T,{exact:!0,path:"/post-quote",component:q}),Object(u.jsx)(T,{exact:!0,path:"/write-quote",component:P}),Object(u.jsx)(T,{exact:!0,path:"/album-page",component:A}),Object(u.jsx)(T,{exact:!0,path:"/view-album-page",component:D})]})]})})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e87835ea.chunk.js.map