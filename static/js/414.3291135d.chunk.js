"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[414],{4414:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(2791),a=n(6842),i=n(184),s=function(e){var t=e.data;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]}),(0,i.jsxs)("p",{className:"grade",children:[" ",t.grade]})]})})},c=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,i.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var o=c,l=function(e){var t=e.data;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,i.jsx)(l,{data:e},e.company)}))]})};u.defaultProps={data:[]};var d=u,m=n(5671),h=n(3144),p=n(136),f=n(7277),y=n(4942),g=n(1413),v=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},b=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,s=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,g.Z)((0,g.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/100*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:c,children:(0,i.jsx)("span",{children:s})}),(0,i.jsx)("div",{className:"skillbar-bar",style:o}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[a," / 100"]})]})};b.defaultProps={categories:[]};var j=b,x=function(e){(0,p.Z)(n,e);var t=(0,f.Z)(n);function n(e){var r;return(0,m.Z)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,g.Z)((0,g.Z)({},n),{},(0,y.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},r.state=function(e){var t=e.categories,n=e.grades;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,g.Z)((0,g.Z)({},e),{},(0,y.Z)({},t,!1))}),{All:!0}),grades:n}}({categories:e.categories,grades:e.grades}),r}return(0,h.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.grades.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,i.jsx)(j,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,i.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,i.jsxs)("div",{className:"grades",children:[(0,i.jsx)("div",{className:"link-to",id:"grades"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"University Grades"})}),(0,i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(r.Component);x.defaultProps={grades:[],categories:[]};var k=x,w=function(e){var t=e.data,n=e.last;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};w.defaultProps={last:!1};var S=w,E=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,i.jsx)(S,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"University Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:E(t)})]})};C.defaultProps={data:[]};var N=C,P=function(e){var t=e.data,n=e.last;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsx)("a",{href:t.link,children:(0,i.jsx)("p",{className:"course-name",children:t.title})}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var M=P,L=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university&&(n=1),n})).map((function(t,n){return(0,i.jsx)(M,{data:t,last:n===e.length-1},t.title)}))},A=function(e){var t=e.data;return(0,i.jsxs)("div",{className:"certs",children:[(0,i.jsx)("div",{className:"link-to",id:"certs"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Certifications"})}),(0,i.jsx)("ul",{className:"course-list",children:L(t)})]})};A.defaultProps={data:[]};var O=A,D=[{title:"Problems of Applied Econometrics",number:"EC 333",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/EC/2020_EC333.htm",university:"LSE"},{title:"Quantitative Thesis",number:"EC 331",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/EC/2020_EC331.htm",university:"LSE"},{title:"Machine Learning",number:"ST 310",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/ST/2020_ST310.htm",university:"LSE"},{title:"Operations Research",number:"MA231",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/MA/2020_MA231.htm",university:"LSE"},{title:"Principles of Econometrics",number:"EC221",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/EC/2020_EC221.htm",university:"LSE"},{title:"Bayesian Inference",number:"ST 308",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/ST/2020_ST308.htm",university:"LSE"},{title:"Probability, Distribution Theory and Inference",number:"ST 202",link:"https://www.lse.ac.uk/resources/calendar2020-2021/courseGuides/ST/2020_ST202.htm",university:"LSE"}],R=[{title:"Deep Learning Specialisation",number:"",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/REVNZDEBYFYM",university:"Coursera"},{title:"Introduction to Tensorflow for Artificial Intelligence, Machine Learning, and Deep Learning",number:"",link:"https://www.coursera.org/account/accomplishments/certificate/QQJCH3QEVEWR",university:"Coursera"},{title:"Databases: Relational Databases and SQL",number:"",link:"https://courses.edx.org/certificates/dd26f6b857264782b0d398cacdc80272",university:"edX"},{title:"Databases: Modeling and Theory",number:"",link:"https://courses.edx.org/certificates/95ca14e3751e4d9ea4012d43ea2538af",university:"edX"}],B=[{school:"Imperial University",degree:"MSc Artificial Intelligence",grade:"Distinction(76% average)",link:"https://www.imperial.ac.uk/study/pg/computing/artificial-intelligence/",year:"2022-2023"},{school:"London School of Economics and Political Science(LSE)",degree:"BSc in Econometrics and Mathematical Economics",grade:"First Class Honours(79% average)",link:"https://www.lse.ac.uk/study-at-lse/Undergraduate/Degree-programmes-2022/BSc-Econometrics-and-Mathematical-Economics",year:"2018-2021"}],T=[{company:"London School of Economics and Political Science(LSE)",position:"Research Assistant",daterange:"January 2021 - September 2021",points:["RA to Ethan Ilzetzki, Associate Professor at LSE and Centre of Macroeconomics","Assisted with data analysis","Ran and wrote code for value iteration functions in Matlab and Python","Created data engineering pipeline to clean and extract historical data using Selenium and regex."]},{company:"London School of Economics and Political Science(LSE)",position:"Coach, Python for Economics Week",daterange:"Feb 2021 - Feb 2021; Feb 2022 - Feb 2022",points:["Provided guidance to LSE economics undergraduates in writing code for the Schelling model"]},{company:"LSE Student Union(LSESU) Data Science Soceity",position:"Head of Projects",daterange:"July 2020 - Apr 2021",points:["Lead teams in completing end-to-end data science projects","Responsible for recruitment and monitoring of developers","Sought partnerships with external companies"]},{company:"Singapore Department of Statistics",link:"https://github.com/ChanMunFai/cmf",position:"Intern",daterange:"July 2020 - Sep 2020",points:["Contributed to literature on synthetic data by introducing a comparative metrics framework that comprehensively and systematically evaluates the quality of synthetic data; uploaded code into R package","Addressed gap in literature on the practical and systematic implementation of metrics","Coded mathematical algorithms (e.g. Ratio of Counts, Differential Correct Attribution Probability) into functions in R","Authored findings and recommendations into a presentation and 18 page report -- drastically reduced synthesis time from hours to seconds"]},{company:"Quicket, Cape Town, South Africa",position:"Data Science Intern",daterange:"July 2019 - Aug 2019",points:["Pioneered the first data analytics team in one of the fastest growing ticketing companies in South Africa & Africa","Used R to analyse growth patterns of the company and identify aspects and regions to focus in - visualisations and insights used by the CEO for investor presentations"]},{company:"Singapore Armed Forces",position:"Logistics Officer(2nd Lieutenant)",daterange:"July 2019 - Aug 2019",points:["Oversee welfare and day-to-day operations of a platoon of 50 men - won the Best Node Award","Proficient with logistical operations of the army through training as a Logistics Officer","Represented the transport formation (2000 men) in holding the Regimental Colours","Organised a battalion-wide event for 300 men"]}],Z=n(3433),I=[{title:"ST310 Machine Learning",competency:90,category:["Bachelors"]},{title:"ST308 Bayesian Inference",competency:79,category:["Bachelors"]},{title:"MA231 Operations Research",competency:93,category:["Bachelors"]},{title:"EC331 Quantitative Thesis",competency:76,category:["Bachelors"]},{title:"EC333 Problems of Applied Econometrics",competency:66,category:["Bachelors"]},{title:"EC221 Principles of Econometrics",competency:80,category:["Bachelors"]},{title:"EC201 Microeconomics",competency:76,category:["Bachelors"]},{title:"EC210 Macroeconomics",competency:77,category:["Bachelors"]},{title:"ST202 Probability, Distribution Theory and Inference",competency:79,category:["Bachelors"]},{title:"MA100 Mathematical Methods",competency:75,category:["Bachelors"]},{title:"EC102 Economics B",competency:70,category:["Bachelors"]},{title:"ST102 Elementary Statistical Theory",competency:90,category:["Bachelors"]},{title:"Machine Learning",competency:89.23,category:["Masters"]},{title:"Reinforcement Learning",competency:73.42,category:["Masters"]},{title:"Symbolic Artificial Intelligence",competency:81.59,category:["Masters"]},{title:"Computer Vision",competency:75.4,category:["Masters"]},{title:"Deep Learning",competency:74.56,category:["Masters"]},{title:"Natural Language Processing",competency:70,category:["Masters"]},{title:"Robot Learning and Control",competency:67.88,category:["Masters"]},{title:"Software Engineering Practice and Group Project",competency:76.78,category:["Masters"]},{title:"Ethics, Privacy, AI in Society",competency:81.81,category:["Masters"]},{title:"Python Programming",competency:80.25,category:["Masters"]},{title:"Masters Dissertation",competency:76,category:["Masters"]}].map((function(e){return(0,g.Z)((0,g.Z)({},e),{},{category:e.category.sort()})})),F=["#F88379","#bf40bf","#30D5C8","#64cb7b","#37b1f5","#3896e2","#515dd4","#c3423f","#d75858","#e47272","#40494e","#6968b3","#cc7b94","#747fff"],G=(0,Z.Z)(new Set(I.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:F[t]}})),_=["Education","Experience","Grades","Courses","Certs"],J=function(){return(0,i.jsx)(a.Z,{title:"Resume",description:"Mun Fai's Resume.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsxs)("h2",{"data-testid":"heading",children:["Resume",(0,i.jsx)("a",{href:"https://drive.google.com/file/d/1Ruut8YVB5e6vK1MIEtktbfJnfDO2VHND/view?usp=sharing",children:" (PDF)"})]}),(0,i.jsx)("div",{className:"link-container",children:_.map((function(e){return(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,i.jsx)(o,{data:B}),(0,i.jsx)(d,{data:T}),(0,i.jsx)(k,{grades:I,categories:G}),(0,i.jsx)(N,{data:D}),(0,i.jsx)(O,{data:R})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=414.3291135d.chunk.js.map