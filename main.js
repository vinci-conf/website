!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var s=Object.prototype.hasOwnProperty;function a(e,t){return Array.isArray(e)?function(e,t){for(var n,s="",i="",l=Array.isArray(t),r=0;r<e.length;r++)(n=a(e[r]))&&(l&&t[r]&&(n=o(n)),s=s+i+n,i=" ");return s}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var a in e)a&&e[a]&&s.call(e,a)&&(t=t+n+a,n=" ");return t}(e):e||""}function i(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)s.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function l(e,t,n,s){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(s?e:e+'="'+e+'"');var a=typeof t;return"object"!==a&&"function"!==a||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=o(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var s=t[0],a=1;a<t.length;a++)s=e(s,t[a]);return s}for(var l in n)if("class"===l){var r=t[l]||[];t[l]=(Array.isArray(r)?r:[r]).concat(n[l]||[])}else if("style"===l){r=(r=i(t[l]))&&";"!==r[r.length-1]?r+";":r;var o=i(n[l]);o=o&&";"!==o[o.length-1]?o+";":o,t[l]=r+o}else t[l]=n[l];return t},t.classes=a,t.style=i,t.attr=l,t.attrs=function(e,t){var n="";for(var r in e)if(s.call(e,r)){var o=e[r];if("class"===r){o=a(o),n=l(r,o,!1,t)+n;continue}"style"===r&&(o=i(o)),n+=l(r,o,!1,t)}return n};var r=/["&<>]/;function o(e){var t=""+e,n=r.exec(t);if(!n)return e;var s,a,i,l="";for(s=n.index,a=0;s<t.length;s++){switch(t.charCodeAt(s)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}a!==s&&(l+=t.substring(a,s)),a=s+1,l+=i}return a!==s?l+t.substring(a,s):l}t.escape=o,t.rethrow=function e(t,s,a,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&s||i))throw t.message+=" on line "+a,t;try{i=i||n(3).readFileSync(s,"utf8")}catch(n){e(t,null,a)}var l=3,r=i.split("\n"),o=Math.max(a-l,0),c=Math.min(r.length,a+l);l=r.slice(o,c).map((function(e,t){var n=t+o+1;return(n==a?"  > ":"    ")+n+"| "+e})).join("\n");throw t.path=s,t.message=(s||"Pug")+":"+a+"\n"+l+"\n\n"+t.message,t}},function(e,t,n){var s=n(0);e.exports=function(e){var t,a="",i={},l=e||{};return function(l){a=a+'<!DOCTYPE html><html lang="en">'+(null==(t=n(4).call(this,e))?"":t)+"<body>"+(null==(t=n(6).call(this,e))?"":t),i.h2=t=function(e){this&&this.block,this&&this.attributes;a=a+'<h2 class="w-auto clearfix"><img class="img-responsive me-2 float-start"'+s.attr("src",n(14),!0,!0)+' alt="h2-logo"><span class="me-4 float-start">'+s.escape(null==(t=e)?"":t)+'</span><hr class="w-auto"></h2>'},a+='<section class="container"><div class="row justify-content-center"><div class="col-custom col-padding">',i.h2("News"),a=a+'<dl class="row"><dt class="col-sm-2 text-sm-end">07/06/2021</dt><dd class="col-sm-10">Poster submission <strong>deadlines extended</strong> to <a href="/submissions.html">'+s.escape(null==(t=l.dates.poster_submission)?"":t)+'</a>.</dd><dt class="col-sm-2 text-sm-end">06/29/2021</dt><dd class="col-sm-10"><a href="/registration.html">Registration for the event</a> is open. Early birds register by '+s.escape(null==(t=l.dates.registration)?"":t)+'.</dd><dt class="col-sm-2 text-sm-end">06/28/2021</dt><dd class="col-sm-10"><strong>Workshops</strong> confirmed. Paper submissions are due by <a href="/workshops.html">'+s.escape(null==(t=l.dates.workshop_paper)?"":t)+'</a>.</dd><dt class="col-sm-2 text-sm-end">04/22/2021</dt><dd class="col-sm-10">Paper submission <strong>deadlines extended</strong> to <a href="/submissions.html">'+s.escape(null==(t=l.dates.full_submission)?"":t)+'</a>.</dd><dt class="col-sm-2 text-sm-end">03/05/2021</dt><dd class="col-sm-10">We are currently preparing for a <strong>hybrid event</strong>.</dd><dt class="col-sm-2 text-sm-end">02/12/2021</dt><dd class="col-sm-10"><strong>Keynote</strong> speaker confirmed. We are pleased to announce that <strong>Prof. Tamara Munzner</strong> (University of British Columbia, Canada) has accepted our invitation to give a keynote. <a href="https://www.cs.ubc.ca/~tmm/">Find out more about Tamara Munzner.</a></dd><dt class="col-sm-2 text-sm-end">02/04/2021</dt><dd class="col-sm-10"><strong>Website</strong> for this year\'s VINCI is up and <strong>open-sourced</strong> (hosted on <a href="https://github.com/vinci-conf/website">GitHub</a>).</dd><dt class="col-sm-2 text-sm-end">01/18/2021</dt><dd class="col-sm-10"><strong>Keynote</strong> speaker confirmed. We are pleased to announce that <strong>Prof. Alexandru Telea</strong> (Utrecht University, Netherlands) has accepted our invitation to give a keynote. <a href="https://webspace.science.uu.nl/~telea001/Main/HomePage">Find out more about Alexandru Telea.</a></dd></dl></div></div><div class="row justify-content-center"><div class="col-custom col-padding">',i.h2("About the Symposium"),a=a+"<p>Visual communication through graphical or sign languages has long been conducted among human beings of different backgrounds or cultures, and in recent decades between human and machine.\nIn today's digital world, visual information is typically encoded with various metaphors commonly used in daily life to facilitate rapid comprehension and easy analysis during the communication process.\nVisual information communication generally encompasses information visualization, graphical user-interfaces, visual analytics, and visual languages.\nVisual information is increasingly being used to facilitate human-human communication through the Internet and mobile devices.</p><p>The "+s.escape(null==(t=l.title)?"":t)+" ("+s.escape(null==(t=l.short)?"":t)+")\nis the premier international forum for researchers and industrial practitioners to discuss the state of the art in visual communication theories, designs, and applications.\nThe "+s.escape(null==(t=l.number)?"":t)+s.escape(null==(t=l.ordinal)?"":t)+" "+s.escape(null==(t=l.title)?"":t)+" ("+s.escape(null==(t=l.short)?"":t)+" "+s.escape(null==(t=l.shortYear)?"":t)+") will be held during "+s.escape(null==(t=l.date)?"":t)+" "+s.escape(null==(t=l.year)?"":t)+", in "+s.escape(null==(t=l.location)?"":t)+'.</p><p>Selected papers will be published in a special issue of the <strong>Journal of Visualization (JOVI)</strong>.</p></div></div><div class="row justify-content-center"><div class="col-custom col-padding">',i.h2("Previous Events"),a=a+'<ul class="list-inline"><li class="list-inline-item"><a href="http://vinci-conf.org/2020">Eindhoven (2020)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2019">Shanghai (2019)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2018">Växjö (2018)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2017">Bangkok (2017)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2016">Dallas (2016)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2015">Tokyo (2015)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2014">Sydney (2014)</a>,</li><li class="list-inline-item">Tianjin (2013),</li><li class="list-inline-item"><a href="http://www.cad.zju.edu.cn/home/chenwei/VINCI2012/">Hangzhou (2012)</a>,</li><li class="list-inline-item"><a href="http://www.cse.ust.hk/vinci2011/">Hong Kong (2011)</a>, </li><li class="list-inline-item">Beijing (2010),</li><li class="list-inline-item">Sydney (2009),</li><li class="list-inline-item">and Shanghai (2008).</li></ul></div></div></section></body></html>'+(null==(t=n(15).call(this,e))?"":t)}.call(this,"conference"in l?l.conference:"undefined"!=typeof conference?conference:void 0),a}},,function(e,t){},function(e,t,n){var s=n(0);e.exports=function(e){var t,a="",i=e||{};return function(e,i){a=a+'<head><meta http-equiv="x-ua-compatible" content="ie=edge"><meta charset="utf-8"><meta name="viewport" content="width=device-width initial-scale=1"><title>'+s.escape(null==(t=e.title)?"":t)+" - "+s.escape(null==(t=i.short)?"":t)+" "+s.escape(null==(t=i.year)?"":t)+'</title><meta name="keywords"'+s.attr("content",`${i.title}, ${i.short} ${i.year}`,!0,!0)+'><meta name="description"'+s.attr("content",`${i.short} ${i.year}`,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet"'+s.attr("href",n(5),!0,!0)+"></head>"}.call(this,"active"in i?i.active:"undefined"!=typeof active?active:void 0,"conference"in i?i.conference:"undefined"!=typeof conference?conference:void 0),a}},function(e,t,n){e.exports=n.p+"styles.css"},function(e,t,n){var s=n(0);e.exports=function(e){var t,a="",i=e||{};return function(i){a=a+'<section class="container" id="header"><div class="row justify-content-center mt-4"><div class="col-custom"><img class="brand-logo"'+s.attr("src",n(7),!0,!0)+'><div class="carousel slide carousel-fade" id="carousel" data-bs-ride="carousel"><div class="carousel-inner" data-bs-interval="8000"><div class="carousel-item active"><img class="d-block w-100"'+s.attr("src",n(8),!0,!0)+' alt="potsdam-nikolaikirche"></div><div class="carousel-item"><img class="d-block w-100"'+s.attr("src",n(9),!0,!0)+' alt="hpi-hauptgebaeude"></div><div class="carousel-item"><img class="d-block w-100"'+s.attr("src",n(10),!0,!0)+' alt="potsdam-sans-souci"></div><div class="carousel-item"><img class="d-block w-100"'+s.attr("src",n(11),!0,!0)+' alt="hpi-foyer"></div><div class="carousel-item"><img class="d-block w-100"'+s.attr("src",n(12),!0,!0)+' alt="potsdam-glienicke"></div></div></div><p class="title"><a href="index.html"> The '+s.escape(null==(t=i.number)?"":t)+"<sup>"+s.escape(null==(t=i.ordinal)?"":t)+"</sup> "+s.escape(null==(t=i.title)?"":t)+" ("+s.escape(null==(t=i.short)?"":t)+" "+s.escape(null==(t=i.year)?"":t)+')</a></p><p class="sub-title">'+s.escape(null==(t=i.location)?"":t)+", "+s.escape(null==(t=i.date)?"":t)+" "+s.escape(null==(t=i.year)?"":t)+"</p></div></div></section>"+(null==(t=n(13).call(this,e))?"":t)+'<section class="container d-block d-sm-none" id="header"><div class="row justify-content-center"><div class="col-lg-8 col-sm mt-3"><p><strong><a class="text-body" href="index.html">The '+s.escape(null==(t=i.number)?"":t)+"<sup>"+s.escape(null==(t=i.ordinal)?"":t)+"</sup> "+s.escape(null==(t=i.title)?"":t)+" ("+s.escape(null==(t=i.short)?"":t)+" "+s.escape(null==(t=i.year)?"":t)+')</a></strong></p><p class="text-end">'+s.escape(null==(t=i.location)?"":t)+", "+s.escape(null==(t=i.date)?"":t)+" "+s.escape(null==(t=i.year)?"":t)+"</p></div></div></section>"}.call(this,"conference"in i?i.conference:"undefined"!=typeof conference?conference:void 0),a}},function(e,t,n){e.exports=n.p+"vinci-logo_d571.svg"},function(e,t,n){e.exports=n.p+"header-nikolaikirche_c873.jpg"},function(e,t,n){e.exports=n.p+"header-hpi-hauptgebaeude_c3e7.jpg"},function(e,t,n){e.exports=n.p+"header-sans-souci_d3fb.jpg"},function(e,t,n){e.exports=n.p+"header-hpi-foyer_5899.jpg"},function(e,t,n){e.exports=n.p+"header-glienicke_2c50.jpg"},function(e,t,n){var s=n(0);e.exports=function(e){var t,n="",a=e||{};return function(e,a){n+='<section class="container"><div class="row justify-content-center"><div class="col-custom"><ul class="nav navbar">\x3c!-- li.nav-item.navbar-brand.mx-0--\x3e\x3c!--  a(href = \'/\').nav-link #[img(src = require(\'img/vinci-logo-sm.svg\') alt = \'vinci-logo\')]--\x3e',function(){var i=a;if("number"==typeof i.length)for(var l=0,r=i.length;l<r;l++){var o=i[l];n+='<li class="nav-item d-none d-xl-block">',n=o.url===e.url?n+'<div class="active"></div><a class="nav-link disabled"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>":n+'<a class="nav-link"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>",n+="</li>"}else{r=0;for(var l in i){r++;o=i[l];n+='<li class="nav-item d-none d-xl-block">',n=o.url===e.url?n+'<div class="active"></div><a class="nav-link disabled"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>":n+'<a class="nav-link"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>",n+="</li>"}}}.call(this),n+='<li class="nav-item dropdown d-xl-none navbar-light"><a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span class="navbar-toggler-icon me-2"></span> Navigation </a><ul class="dropdown-menu">',function(){var i=a;if("number"==typeof i.length)for(var l=0,r=i.length;l<r;l++){var o=i[l];n+="<li>",n=o.url===e.url?n+'<div class="active"></div><a class="dropdown-item disabled"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>":n+'<a class="dropdown-item"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>",n+="</li>"}else{r=0;for(var l in i){r++;o=i[l];n+="<li>",n=o.url===e.url?n+'<div class="active"></div><a class="dropdown-item disabled"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>":n+'<a class="dropdown-item"'+s.attr("href",o.url+".html",!0,!0)+">"+s.escape(null==(t=o.title)?"":t)+"</a>",n+="</li>"}}}.call(this),n+="</ul></li></ul></div></div></section>"}.call(this,"active"in a?a.active:"undefined"!=typeof active?active:void 0,"pages"in a?a.pages:"undefined"!=typeof pages?pages:void 0),n}},function(e,t,n){e.exports=n.p+"vinci-logo-sm_f5df.svg"},function(e,t,n){var s=n(0);e.exports=function(e){var t,a="",i=e||{};return function(e){a=a+'<section class="container" id="footer"><div class="row justify-content-center"><div class="col-6 col-md-5 col-lg-2"><p class="mb-3 clearfix">\x3c!--a(href = \'https://www.acm.org/publications/icps-series\') #[img(src = require(\'img/icps-logo.svg\')).logo]--\x3e</p><p class="mb-5">\x3c!--small Published by ACM International Conference Proceedings Series--\x3e</p></div><div class="col-6 col-md-5 col-lg-2"><p class="mb-3 clearfix"><a href="https://hpi.de/en/index.html"><img class="logo"'+s.attr("src",n(16),!0,!0)+'></a></p><p class="mb-5"><small>In cooperation with the Hasso Plattner Institute.</small></p></div><div class="col-6 col-md-5 col-lg-4"><p class="mb-3 clearfix"><a href="https://hpi3d.de/"><img class="logo"'+s.attr("src",n(17),!0,!0)+'></a><small> Hasso Plattner Institute<br>University of Potsdam<br>Prof.-Dr.-Helmert-Straße 2-3<br>14482 Potsdam, Germany</small></p><p class="mb-5"><small>Organized by the Computer Graphics Systems Group. Contact us via email <a href="mailto:vinci2021@hpi.de">vinci2021@hpi.de</a> or\nphone <a href="tel:+4933155093907">+49 331 5509-3907</a>.</small></p></div></div></section><footer class="text-center"><small>Copyright &copy; '+s.escape(null==(t=e.year)?"":t)+" "+s.escape(null==(t=e.short)?"":t)+'</small></footer><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"><\/script>'}.call(this,"conference"in i?i.conference:"undefined"!=typeof conference?conference:void 0),a}},function(e,t,n){e.exports=n.p+"hpi-logo_fe56.svg"},function(e,t,n){e.exports=n.p+"hpicgs-logo_c067.png"}]);