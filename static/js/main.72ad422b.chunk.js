(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),o=a(11),n=a.n(o);a(23);var s=()=>{const[e,t]=Object(l.useState)(!1),[a,o]=Object(l.useState)(!1);return r.a.createElement("nav",{className:"bg-black text-white py-3 fixed w-full z-10 top-0 left-0"},r.a.createElement("div",{className:"container-fluid mx-auto flex justify-between items-center px-6"},r.a.createElement("h1",{className:"text-2xl font-bold"},r.a.createElement("a",{href:"#Hero",className:"hover:text-yellow-400 px-4 "},"Digidit")),r.a.createElement("ul",{className:"hidden md:flex space-x-6"},r.a.createElement("li",{className:"relative",onClick:()=>t(!e)},r.a.createElement("a",{href:"#services",className:"hover:text-yellow-400 cursor-pointer"},"Services"),e&&r.a.createElement("ul",{className:"absolute bg-black text-white shadow-lg rounded-md mt-2 z-50"},r.a.createElement("li",{className:"px-4 py-2"},r.a.createElement("a",{href:"#video-editing",className:"hover:text-yellow-400"},"Video Editing")),r.a.createElement("li",{className:"px-4 py-2"},r.a.createElement("a",{href:"#digital-marketing",className:"hover:text-yellow-400"},"Digital Marketing")),r.a.createElement("li",{className:"px-4 py-2"},r.a.createElement("a",{href:"#graphic-design",className:"hover:text-yellow-400"},"Graphic Design")),r.a.createElement("li",{className:"px-4 py-2"},r.a.createElement("a",{href:"#web-development",className:"hover:text-yellow-400"},"Web Development")))),r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio",className:"hover:text-yellow-400"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about",className:"hover:text-yellow-400"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact",className:"hover:text-yellow-400"},"Contact"))),r.a.createElement("div",{className:"md:hidden flex items-center"},r.a.createElement("button",{onClick:()=>o(!a),className:"text-white focus:outline-none"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}))))),a&&r.a.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-70 z-40"},r.a.createElement("div",{className:"flex justify-end p-4"},r.a.createElement("button",{onClick:()=>o(!1),className:"text-white"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))),r.a.createElement("div",{className:"flex flex-col items-center text-white space-y-4 py-6"},r.a.createElement("a",{href:"#video-editing",className:"hover:text-yellow-400"},"Video Editing"),r.a.createElement("a",{href:"#digital-marketing",className:"hover:text-yellow-400"},"Digital Marketing"),r.a.createElement("a",{href:"#graphic-design",className:"hover:text-yellow-400"},"Graphic Design"),r.a.createElement("a",{href:"#web-development",className:"hover:text-yellow-400"},"Web Development"),r.a.createElement("a",{href:"#portfolio",className:"hover:text-yellow-400"},"Portfolio"),r.a.createElement("a",{href:"#about",className:"hover:text-yellow-400"},"About"),r.a.createElement("a",{href:"#contact",className:"hover:text-yellow-400"},"Contact"))))},c=a(7),i=a.n(c);a(8);var m=()=>(Object(l.useEffect)(()=>{i.a.init({duration:800,easing:"ease-in-out",once:!0,offset:100}),window.scrollTo(0,0)},[]),r.a.createElement("section",{id:"Hero",className:"h-screen flex items-center justify-center bg-cover bg-center relative pt-28",style:{backgroundImage:"url('/path-to-hero-image.jpg')",backgroundAttachment:"fixed"},"data-aos":"zoom-in"},r.a.createElement("div",{className:"absolute inset-0 opacity-50"}),r.a.createElement("div",{className:"text-center text-black relative z-8"},r.a.createElement("div",{className:"flex items-center justify-center"},r.a.createElement("img",{src:"/logo_dark.png",alt:"Logo",className:"h-40 w-auto",style:{willChange:"transform"},"data-aos":"zoom-in"})),r.a.createElement("h1",{className:"text-5xl font-bold mb-4","data-aos":"zoom-in"},"Welcome to Digidit"),r.a.createElement("p",{className:"text-xl mb-6 py-6 px-10","data-aos":"zoom-in"},"Professional video editing for creators and brands. ",r.a.createElement("br",null),"Whether it\u2019s reels, YouTube videos, or business promos, we ensure quality, care, and timely delivery."),r.a.createElement("button",{className:"px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-transform transform",onClick:()=>document.getElementById("portfolio").scrollIntoView({behavior:"smooth"})},"Explore My Work"))));var d=()=>{const[e,t]=Object(l.useState)(null),a=Object(l.useRef)([]);Object(l.useEffect)(()=>{const t=new IntersectionObserver(t=>{t.forEach((t,l)=>{const r=a.current[l];r&&(t.isIntersecting?l===e&&r.play():r.pause())})},{threshold:.5});return a.current.forEach(e=>{e&&t.observe(e)}),()=>{t.disconnect()}},[e]);return r.a.createElement("section",{id:"about",className:"py-32"},r.a.createElement("div",{className:"container mx-auto text-center px-20"},r.a.createElement("h2",{className:"text-4xl font-bold mb-6"},"About Me"),r.a.createElement("div",{className:"bg-white p-7 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"},r.a.createElement("div",{className:"flex flex-col lg:flex-row items-center"},r.a.createElement("div",{className:"text-center lg:text-left"},r.a.createElement("img",{src:"/suraj.jpg",alt:"Your image",className:"w-48 h-48 rounded-full border-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 mb-4"}),r.a.createElement("h3",{className:"text-2xl font-semibold text-gray-800"},"Suraj Badgujar")," "),r.a.createElement("p",{className:"text-lg max-w-2xl mx-auto mt-6 lg:mt-0"},"I began this journey as a freelance video editor that I constantly refine through self-learning. I have edited 500+ videos working with content creators such as AI Ankit, Gen She Pod, Sushasan, Tigp, and many more in the last 2 years. Apart from editing videos for others, I also create my own content on social media to learn new things. Currently, I am working on establishing my own creative agency named Digidit.in. We specialize in digital marketing and video editing for creators and brands. Whether it\u2019s reels, YouTube videos, or business promos, we ensure quality, care, and timely delivery."))),r.a.createElement("div",{className:" px-4 md:px-10 lg:px-20 py-32"},r.a.createElement("h2",{className:"text-2xl md:text-3xl font-bold mb-6 mt-20"},"My Content"),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"},[{title:"Project 1",video:"/video7.mp4"},{title:"Project 2",video:"/video2.mp4"},{title:"Project 3",video:"/video3.mp4"}].map((e,l)=>r.a.createElement("div",{key:l,className:"shadow-lg rounded-lg overflow-hidden"},r.a.createElement("div",{className:"relative"},r.a.createElement("video",{ref:e=>a.current[l]=e,loop:!0,controls:!0,onPlay:()=>(e=>{a.current.forEach((t,a)=>{t&&a!==e&&t.pause()}),t(e)})(l),className:"w-full h-auto object-cover"},r.a.createElement("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."))))))))};var u=()=>{const[e,t]=Object(l.useState)(null),a=Object(l.useRef)([]);Object(l.useEffect)(()=>{const t=new IntersectionObserver(t=>{t.forEach((t,l)=>{const r=a.current[l];r&&(t.isIntersecting?l===e&&r.play():r.pause())})},{threshold:.5});return a.current.forEach(e=>{e&&t.observe(e)}),()=>{t.disconnect()}},[e]);const o="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105";return r.a.createElement("section",{id:"portfolio",className:"px-4 md:px-10 lg:px-20 py-20"},r.a.createElement("div",{className:"container mx-auto text-center"},r.a.createElement("h1",{className:"text-3xl md:text-4xl font-bold mb-8"},"Portfolio"),r.a.createElement("h2",{className:"text-2xl md:text-3xl font-bold mb-6"},"Shorts"),r.a.createElement("div",{className:"flex justify-center space-x-6 mb-8"},r.a.createElement("a",{href:"#Portfolio",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-tiktok text-3xl text-black hover:text-purple-600"})),r.a.createElement("a",{href:"#Portfolio",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram text-3xl text-black hover:text-pink-600"})),r.a.createElement("a",{href:"#Portfolio",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-youtube text-3xl text-black hover:text-red-600"}))),r.a.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"},[{title:"Project 1",video:"/video1.mp4"},{title:"Project 2",video:"/video6.mp4"},{title:"Project 3",video:"/video4.mp4"},{title:"Project 4",video:"/video12.mp4"}].map((e,l)=>r.a.createElement("div",{key:l,className:"shadow-lg rounded-lg overflow-hidden bg-gray-900 transform transition duration-300 ease-in-out"},r.a.createElement("div",{className:"relative"},r.a.createElement("video",{ref:e=>a.current[l]=e,loop:!0,controls:!0,muted:!0,onPlay:()=>(e=>{a.current.forEach((t,a)=>{a!==e&&t&&t.pause()}),t(e),a.current[e]&&(a.current[e].muted=!1)})(l),className:"w-full h-auto object-cover"},r.a.createElement("source",{src:e.video,type:"video/mp4"}),"Your browser does not support the video tag."))))),r.a.createElement("div",{className:"mt-16 py-16"},r.a.createElement("h2",{className:"text-2xl md:text-3xl font-bold mb-6 py-2"},r.a.createElement("a",{href:"#ViralVideos",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-chart-line text-3xl text-black hover:text-green-600"}))," Videos That Go Viral!"),r.a.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},r.a.createElement("div",{className:o},r.a.createElement("a",{href:"https://youtube.com/shorts/L_4a8CcQHo0?si=1DTMHzKVOZtUAbW4",target:"_blank",rel:"noopener noreferrer",className:"block"},r.a.createElement("img",{src:"/5.5M.png",alt:"Video 1",className:"w-full h-full object-cover"}))),r.a.createElement("div",{className:o},r.a.createElement("a",{href:"https://www.instagram.com/reel/CvaKtRQARr0/",target:"_blank",rel:"noopener noreferrer",className:"block"},r.a.createElement("img",{src:"/3.6.png",alt:"Video 2",className:"w-full h-full object-cover"}))),r.a.createElement("div",{className:o},r.a.createElement("a",{href:"https://youtube.com/shorts/ZcboBHn-lNk?si=f3zthBR6R_TVTbWg",target:"_blank",rel:"noopener noreferrer",className:"block"},r.a.createElement("img",{src:"/10M.png",alt:"Video 3",className:"w-full h-full object-cover"}))),r.a.createElement("div",{className:o},r.a.createElement("a",{href:"https://www.instagram.com/reel/CukHO7tAfTK/",target:"_blank",rel:"noopener noreferrer",className:"block"},r.a.createElement("img",{src:"/4.6.png",alt:"Video 4",className:"w-full h-full object-cover"}))))),r.a.createElement("div",{className:"mt-16 text-center"},r.a.createElement("h2",{className:"text-2xl md:text-3xl font-bold mb-6 py-10"},r.a.createElement("a",{href:"#Music",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-music text-3xl text-black hover:text-blue-600"}))," Music Video"),r.a.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8"},r.a.createElement("iframe",{className:"w-full rounded-lg shadow-lg",height:"315",src:"https://www.youtube.com/embed/1FJat0b9qp8?si=vg-_qaWH2Tc7t8sF",title:"Podcast 1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))),r.a.createElement("div",{className:"mt-16"},r.a.createElement("h2",{className:"text-2xl md:text-3xl font-bold mb-6"},r.a.createElement("a",{href:"#Microphone",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-microphone text-3xl text-black hover:text-purple-600"}))," Podcast"),r.a.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8"},r.a.createElement("iframe",{className:"w-full rounded-lg shadow-lg",height:"315",src:"https://www.youtube.com/embed/DJN53lqaLQk",title:"Podcast 1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),r.a.createElement("iframe",{className:"w-full rounded-lg shadow-lg",height:"315",src:"https://www.youtube.com/embed/YHU7NVFrpI4",title:"Podcast 2",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))))},g=a(13),h=a(6),p=a(5);var x=()=>{const e=Object(l.useRef)(),[t,a]=Object(l.useState)(!1);return r.a.createElement("section",{id:"contact",className:"py-20"},r.a.createElement("div",{className:"container mx-auto text-center"},r.a.createElement("h2",{className:"text-4xl font-bold mb-6"},"Contact"),r.a.createElement("p",{className:"text-lg mb-6"},"If you'd like to work together, get in touch!"),r.a.createElement("button",{onClick:()=>a(!t),className:"px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500"},"Contact Us"),t&&r.a.createElement("form",{ref:e,onSubmit:t=>{t.preventDefault(),g.a.sendForm("service_ueb1nax","template_4umkrfi",e.current,"gib4OSHfktoi6GosP").then(t=>{console.log("Message Sent:",t.text),alert("Your message has been sent successfully!"),e.current.reset()},e=>{console.log("Error:",e.text),alert("Oops! Something went wrong. Please try again.")})},className:"mt-6 max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-left mb-2 font-bold"},"Name"),r.a.createElement("input",{type:"text",name:"name",className:"w-full px-4 py-2 border rounded-md",placeholder:"Your Name",required:!0})),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-left mb-2 font-bold"},"Email"),r.a.createElement("input",{type:"email",name:"email",className:"w-full px-4 py-2 border rounded-md",placeholder:"Your Email",required:!0})),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-left mb-2 font-bold"},"Message"),r.a.createElement("textarea",{name:"message",className:"w-full px-4 py-2 border rounded-md",placeholder:"Your Message",rows:"5",required:!0})),r.a.createElement("button",{type:"submit",className:"px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500"},"Send")),r.a.createElement("div",{className:"mt-6"},r.a.createElement("p",{className:"text-lg mb-4"},"Connect with me:"),r.a.createElement("div",{className:"flex justify-center space-x-6"},r.a.createElement("a",{href:"https://www.instagram.com/suraj.mov ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:p.a,className:"text-3xl hover:text-yellow-500"})),r.a.createElement("a",{href:"https://in.linkedin.com/company/digidit-in",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:p.b,className:"text-3xl hover:text-blue-600"})),r.a.createElement("a",{href:"https://wa.me/918080604008?text=Hi%20i%20got%20your%20number%20from%20digidit.in",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:p.c,className:"text-3xl hover:text-green-500"}))))))};var f=()=>r.a.createElement("footer",{className:"bg-gray-900 text-white py-6"},r.a.createElement("div",{className:"container mx-auto text-center"},r.a.createElement("p",null,"\xa9 2024 Digidit.in All Rights Reserved.")));var b=()=>r.a.createElement("section",{className:"py-20 text-center"},r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("h2",{className:"text-3xl font-semibold text-black-700 mb-8"},"WHY CHOOSE DIGIDIT?"),r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8"},r.a.createElement("div",{className:"bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"},r.a.createElement("h3",{className:"text-2xl font-bold text-black-600 mb-4"},"Quality Assurance"),r.a.createElement("p",{className:"text-gray-600"},"Without compromising on quality, we use high-quality licensed assets to ensure there are no copyright issues.")),r.a.createElement("div",{className:"bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"},r.a.createElement("h3",{className:"text-2xl font-bold text-black-600 mb-4"},"24/7 Support"),r.a.createElement("p",{className:"text-gray-600"},"We are available at all times to answer your inquiries, provide project updates, and offer the highest level of client support."))))),v=a(12),E=a.n(v);var w=()=>{return r.a.createElement("section",{id:"testimonials",className:"py-10 w-full "},r.a.createElement("div",{className:"container mx-auto text-center px-4 max-w-4xl"},r.a.createElement("h2",{className:"text-3xl font-bold mb-6"},"Clients Feedback"),r.a.createElement(E.a,{dots:!0,infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3},[{quote:"Suraj is an exceptional video editor, always incredibly responsive and accommodating even with last-minute requests, consistently delivering high-quality work exactly as envisioned. I am so grateful to have him producing our Gen She Podcast.",name:"Avni Barman",position:"Founder of Gen She",image:"/Avni_Barman.jpeg"},{quote:"Suraj is an exceptional video editor, always incredibly responsive and accommodating even with last-minute requests, consistently delivering high-quality work exactly as envisioned. I am so grateful to have him producing our Gen She Podcast.",name:"Avni Barman",position:"Founder of Gen She",image:"/Avni_Barman.jpeg"},{quote:"Suraj is an exceptional video editor, always incredibly responsive and accommodating even with last-minute requests, consistently delivering high-quality work exactly as envisioned. I am so grateful to have him producing our Gen She Podcast.",name:"Avni Barman",position:"Founder of Gen She",image:"/Avni_Barman.jpeg"}].map((e,t)=>r.a.createElement("div",{key:t,className:"p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between",style:{minHeight:"300px"}},r.a.createElement("p",{className:"text-lg italic mb-6"},'"',e.quote,'"'),r.a.createElement("div",{className:"flex items-center space-x-4"},r.a.createElement("img",{src:e.image,alt:e.name,className:"w-16 h-16 rounded-full object-cover",onError:e=>e.target.style.display="none"}),r.a.createElement("div",{class:"mx-auto text-center"},r.a.createElement("h4",{className:"font-bold"},e.name),r.a.createElement("p",{className:"text-sm text-gray-900"},e.position))))))))};var y=()=>r.a.createElement("div",{className:"min-h-screen bg-gradient-to-b from-yellow-50  to-pink-50"},"#",r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(u,null),r.a.createElement(b,null),r.a.createElement(d,null),r.a.createElement(w,null),r.a.createElement(x,null),r.a.createElement(f,null));var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then(t=>{let{getCLS:a,getFID:l,getFCP:r,getLCP:o,getTTFB:n}=t;a(e),l(e),r(e),o(e),n(e)})};const k=Object(l.createContext)(),j=e=>{let{children:t}=e;const[a,o]=Object(l.useState)(null);return r.a.createElement(k.Provider,{value:{playVideo:e=>{a&&a!==e&&a.pause(),o(e)}}},t)};a(40),a(41);n.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null,r.a.createElement(y,null)))),N()}},[[14,1,2]]]);
//# sourceMappingURL=main.72ad422b.chunk.js.map