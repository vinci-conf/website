!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var a=Object.prototype.hasOwnProperty;function i(e,t){return Array.isArray(e)?function(e,t){for(var n,a="",l="",s=Array.isArray(t),o=0;o<e.length;o++)(n=i(e[o]))&&(s&&t[o]&&(n=r(n)),a=a+l+n,l=" ");return a}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var i in e)i&&e[i]&&a.call(e,i)&&(t=t+n+i,n=" ");return t}(e):e||""}function l(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)a.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function s(e,t,n,a){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(a?e:e+'="'+e+'"');var i=typeof t;return"object"!==i&&"function"!==i||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=r(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var a=t[0],i=1;i<t.length;i++)a=e(a,t[i]);return a}for(var s in n)if("class"===s){var o=t[s]||[];t[s]=(Array.isArray(o)?o:[o]).concat(n[s]||[])}else if("style"===s){o=(o=l(t[s]))&&";"!==o[o.length-1]?o+";":o;var r=l(n[s]);r=r&&";"!==r[r.length-1]?r+";":r,t[s]=o+r}else t[s]=n[s];return t},t.classes=i,t.style=l,t.attr=s,t.attrs=function(e,t){var n="";for(var o in e)if(a.call(e,o)){var r=e[o];if("class"===o){r=i(r),n=s(o,r,!1,t)+n;continue}"style"===o&&(r=l(r)),n+=s(o,r,!1,t)}return n};var o=/["&<>]/;function r(e){var t=""+e,n=o.exec(t);if(!n)return e;var a,i,l,s="";for(a=n.index,i=0;a<t.length;a++){switch(t.charCodeAt(a)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}i!==a&&(s+=t.substring(i,a)),i=a+1,s+=l}return i!==a?s+t.substring(i,a):s}t.escape=r,t.rethrow=function e(t,a,i,l){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&a||l))throw t.message+=" on line "+i,t;try{l=l||n(3).readFileSync(a,"utf8")}catch(n){e(t,null,i)}var s=3,o=l.split("\n"),r=Math.max(i-s,0),c=Math.min(o.length,i+s);s=o.slice(r,c).map((function(e,t){var n=t+r+1;return(n==i?"  > ":"    ")+n+"| "+e})).join("\n");throw t.path=a,t.message=(a||"Pug")+":"+i+"\n"+s+"\n\n"+t.message,t}},function(e,t,n){var a=n(0);e.exports=function(e){var t,i="",l={},s=e||{};return function(s){i=i+'<!DOCTYPE html><html lang="en">'+(null==(t=n(4).call(this,e))?"":t)+"<body>"+(null==(t=n(6).call(this,e))?"":t),l.h2=t=function(e){this&&this.block,this&&this.attributes;i=i+'<h2 class="w-auto clearfix"><img class="img-responsive me-2 float-start"'+a.attr("src",n(14),!0,!0)+' alt="h2-logo"><span class="me-4 float-start">'+a.escape(null==(t=e)?"":t)+'</span><hr class="w-auto"></h2>'},i+='<section class="container"><div class="row justify-content-center"><div class="col-custom col-padding">',l.h2("News"),i+='<dl class="row"><dt class="col-sm-2 text-sm-end">02/12/2020</dt><dd class="col-sm-10">Keynote speaker confirmed. We are pleased to announce that Prof. Tamara Munzner (University of British Columbia, Canada) has accepted our invitation to give a keynote. <a href="https://www.cs.ubc.ca/~tmm/">Find out more about Tamara.</a></dd><dt class="col-sm-2 text-sm-end">02/04/2020</dt><dd class="col-sm-10">Website for this year\'s VINCI is up and open-sourced (and hosted) on <a href="https://github.com/vinci-conf/website">GitHub</a>.</dd><dt class="col-sm-2 text-sm-end">01/18/2020</dt><dd class="col-sm-10">Keynote speaker confirmed. We are pleased to announce that Prof. Alexandru C. Telea (Utrecht University, Netherlands) has accepted our invitation to give a keynote. <a href="https://webspace.science.uu.nl/~telea001/Main/HomePage">Find out more about Alexandru.</a></dd></dl></div></div><div class="row justify-content-center"><div class="col-custom col-padding">',l.h2("About the Symposium"),i=i+"<p>Visual communication through graphical or sign languages has long been conducted among human beings of different backgrounds or cultures, and in recent decades between human and machine.\nIn today's digital world, visual information is typically encoded with various metaphors commonly used in daily life to facilitate rapid comprehension and easy analysis during the communication process.\nVisual information communication generally encompasses information visualization, graphical user-interfaces, visual analytics, and visual languages.\nVisual information is increasingly being used to facilitate human-human communication through the Internet and mobile devices.</p><p>The "+a.escape(null==(t=s.title)?"":t)+" ("+a.escape(null==(t=s.short)?"":t)+")\nis the premier international forum for researchers and industrial practitioners to discuss the state of the art in visual communication theories, designs, and applications.\nThe "+a.escape(null==(t=s.number)?"":t)+a.escape(null==(t=s.ordinal)?"":t)+" "+a.escape(null==(t=s.title)?"":t)+" ("+a.escape(null==(t=s.short)?"":t)+" "+a.escape(null==(t=s.shortYear)?"":t)+") will be held during "+a.escape(null==(t=s.date)?"":t)+" "+a.escape(null==(t=s.year)?"":t)+", in "+a.escape(null==(t=s.location)?"":t)+'.</p><p>Selected papers will be published in a special issue of the Journal of Visualization (JoV).</p></div></div><div class="row justify-content-center"><div class="col-custom col-padding">',l.h2("Previous Events"),i=i+'<ul class="list-inline"><li class="list-inline-item">Shanghai (2008),</li><li class="list-inline-item">Sydney (2009),</li><li class="list-inline-item">Beijing (2010),</li><li class="list-inline-item"><a href="http://www.cse.ust.hk/vinci2011/">Hong Kong (2011)</a>, </li><li class="list-inline-item"><a href="http://www.cad.zju.edu.cn/home/chenwei/VINCI2012/">Hangzhou (2012)</a>,</li><li class="list-inline-item">Tianjin (2013),</li><li class="list-inline-item"><a href="http://vinci-conf.org/2014">Sydney (2014)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2015">Tokyo (2015)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2016">Dallas (2016)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2017">Bangkok (2017)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2018">Växjö (2018)</a>,</li><li class="list-inline-item"><a href="http://vinci-conf.org/2019">Shanghai (2019)</a>,</li><li class="list-inline-item">and <a href="http://vinci-conf.org/2020">Eindhoven (2020)</a>.</li></ul></div></div></section></body></html>'+(null==(t=n(15).call(this,e))?"":t)}.call(this,"conference"in s?s.conference:"undefined"!=typeof conference?conference:void 0),i}},,function(e,t){},function(e,t,n){var a=n(0);e.exports=function(e){var t,i="",l=e||{};return function(e,l){i=i+'<head><meta http-equiv="x-ua-compatible" content="ie=edge"><meta charset="utf-8"><meta name="viewport" content="width=device-width initial-scale=1"><title>'+a.escape(null==(t=e.title)?"":t)+" - The "+a.escape(null==(t=l.number)?"":t)+a.escape(null==(t=l.ordinal)?"":t)+" "+a.escape(null==(t=l.title)?"":t)+" ("+a.escape(null==(t=l.short)?"":t)+" "+a.escape(null==(t=l.year)?"":t)+')</title><meta name="keywords"'+a.attr("content",`${l.title}, ${l.short} ${l.year}`,!0,!0)+'><meta name="description"'+a.attr("content",`${l.short} ${l.year}`,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet"'+a.attr("href",n(5),!0,!0)+"></head>"}.call(this,"active"in l?l.active:"undefined"!=typeof active?active:void 0,"conference"in l?l.conference:"undefined"!=typeof conference?conference:void 0),i}},function(e,t,n){e.exports=n.p+"styles.css"},function(e,t,n){var a=n(0);e.exports=function(e){var t,i="",l=e||{};return function(l){i=i+'<section class="container" id="header"><div class="row justify-content-center mt-4"><div class="col-custom"><img class="brand-logo"'+a.attr("src",n(7),!0,!0)+'><div class="carousel slide carousel-fade" id="carousel" data-bs-ride="carousel"><div class="carousel-inner" data-bs-interval="8000"><div class="carousel-item active"><img class="d-block w-100"'+a.attr("src",n(8),!0,!0)+' alt="potsdam-nikolaikirche"></div><div class="carousel-item"><img class="d-block w-100"'+a.attr("src",n(9),!0,!0)+' alt="hpi-hauptgebaeude"></div><div class="carousel-item"><img class="d-block w-100"'+a.attr("src",n(10),!0,!0)+' alt="potsdam-sans-souci"></div><div class="carousel-item"><img class="d-block w-100"'+a.attr("src",n(11),!0,!0)+' alt="hpi-foyer"></div><div class="carousel-item"><img class="d-block w-100"'+a.attr("src",n(12),!0,!0)+' alt="potsdam-glienicke"></div></div></div><p class="title"><a href="index.html"> The '+a.escape(null==(t=l.number)?"":t)+"<sup>"+a.escape(null==(t=l.ordinal)?"":t)+"</sup> "+a.escape(null==(t=l.title)?"":t)+" ("+a.escape(null==(t=l.short)?"":t)+" "+a.escape(null==(t=l.year)?"":t)+')</a></p><p class="sub-title">'+a.escape(null==(t=l.location)?"":t)+", "+a.escape(null==(t=l.date)?"":t)+" "+a.escape(null==(t=l.year)?"":t)+"</p></div></div></section>"+(null==(t=n(13).call(this,e))?"":t)+'<section class="container d-block d-sm-none" id="header"><div class="row justify-content-center"><div class="col-lg-8 col-sm mt-3"><p><strong><a class="text-body" href="index.html">The '+a.escape(null==(t=l.number)?"":t)+"<sup>"+a.escape(null==(t=l.ordinal)?"":t)+"</sup> "+a.escape(null==(t=l.title)?"":t)+" ("+a.escape(null==(t=l.short)?"":t)+" "+a.escape(null==(t=l.year)?"":t)+')</a></strong></p><p class="text-end">'+a.escape(null==(t=l.location)?"":t)+", "+a.escape(null==(t=l.date)?"":t)+" "+a.escape(null==(t=l.year)?"":t)+"</p></div></div></section>"}.call(this,"conference"in l?l.conference:"undefined"!=typeof conference?conference:void 0),i}},function(e,t,n){e.exports=n.p+"vinci-logo_d571.svg"},function(e,t,n){e.exports=n.p+"header-nikolaikirche_196a.jpg"},function(e,t,n){e.exports=n.p+"header-hpi-hauptgebaeude_45fb.jpg"},function(e,t,n){e.exports=n.p+"header-sans-souci_6176.jpg"},function(e,t,n){e.exports=n.p+"header-hpi-foyer_4ae7.jpg"},function(e,t,n){e.exports=n.p+"header-glienicke_ef2f.jpg"},function(e,t,n){var a=n(0);e.exports=function(e){var t,n="",i=e||{};return function(e,i){n+='<section class="container"><div class="row justify-content-center"><div class="col-custom"><ul class="nav navbar">\x3c!-- li.nav-item.navbar-brand.mx-0--\x3e\x3c!--  a(href = \'/\').nav-link #[img(src = require(\'img/vinci-logo-sm.svg\') alt = \'vinci-logo\')]--\x3e',function(){var l=i;if("number"==typeof l.length)for(var s=0,o=l.length;s<o;s++){var r=l[s];n+='<li class="nav-item d-none d-xl-block">',n=r.url===e.url?n+'<div class="active"></div><a class="nav-link disabled"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>":n+'<a class="nav-link"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>",n+="</li>"}else{o=0;for(var s in l){o++;r=l[s];n+='<li class="nav-item d-none d-xl-block">',n=r.url===e.url?n+'<div class="active"></div><a class="nav-link disabled"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>":n+'<a class="nav-link"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>",n+="</li>"}}}.call(this),n+='<li class="nav-item dropdown d-xl-none navbar-light"><a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><span class="navbar-toggler-icon me-2"></span> Navigation </a><ul class="dropdown-menu">',function(){var l=i;if("number"==typeof l.length)for(var s=0,o=l.length;s<o;s++){var r=l[s];n+="<li>",n=r.url===e.url?n+'<div class="active"></div><a class="dropdown-item disabled"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>":n+'<a class="dropdown-item"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>",n+="</li>"}else{o=0;for(var s in l){o++;r=l[s];n+="<li>",n=r.url===e.url?n+'<div class="active"></div><a class="dropdown-item disabled"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>":n+'<a class="dropdown-item"'+a.attr("href",r.url+".html",!0,!0)+">"+a.escape(null==(t=r.title)?"":t)+"</a>",n+="</li>"}}}.call(this),n+="</ul></li></ul></div></div></section>"}.call(this,"active"in i?i.active:"undefined"!=typeof active?active:void 0,"pages"in i?i.pages:"undefined"!=typeof pages?pages:void 0),n}},function(e,t,n){e.exports=n.p+"vinci-logo-sm_f5df.svg"},function(e,t,n){var a=n(0);e.exports=function(e){var t,i="",l=e||{};return function(e){i=i+'<section class="container" id="footer"><div class="row justify-content-center"><div class="col-6 col-md-5 col-lg-2"><p class="mb-3 clearfix"><a href="https://www.acm.org/publications/icps-series"><img class="logo"'+a.attr("src",n(16),!0,!0)+'></a></p><p class="mb-5"><small>Published by ACM International Conference Proceedings Series</small></p></div><div class="col-6 col-md-5 col-lg-2"><p class="mb-3 clearfix"><a href="https://www.vsj.jp/"><img class="logo"'+a.attr("src",n(17),!0,!0)+'></a></p><p class="mb-5"><small>In cooperation with the Visualization Society of Japan.</small></p></div><div class="col-12 col-md-10 col-lg-4"><p class="mb-3 clearfix"><a href="https://hpi.de/"><img class="logo"'+a.attr("src",n(18),!0,!0)+'></a><small> Hasso Plattner Institute<br>University of Potsdam<br>Prof.-Dr.-Helmert-Straße 2-3<br>14482 Potsdam, Germany</small></p><p><small>HPI is responsible for website, organization, and venue. Contact us via email <a href="mailto:info@vinci-conf.org">info@vinci-conf.org</a> or\nphone <a href="tel:+4933155093907">+49 331 5509-3907</a>.</small></p></div></div></section><footer class="text-center"><small>Copyright &copy; '+a.escape(null==(t=e.year)?"":t)+" "+a.escape(null==(t=e.short)?"":t)+'</small></footer><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"><\/script>'}.call(this,"conference"in l?l.conference:"undefined"!=typeof conference?conference:void 0),i}},function(e,t,n){e.exports=n.p+"icps-logo_76c5.svg"},function(e,t,n){e.exports=n.p+"vsj-logo-unofficial_bc0b.svg"},function(e,t,n){e.exports=n.p+"hpi-logo_fe56.svg"}]);