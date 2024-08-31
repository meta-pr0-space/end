(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1213],{74548:function(e){var t,r,i,o,n,a,s,l,c,u,d,h,p,g,f,w,m,v,b,y,x,C;e.exports=(t="millisecond",r="second",i="minute",o="hour",n="week",a="month",s="quarter",l="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},(f={})[g="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},w="$isDayjsObject",m=function(e){return e instanceof x||!(!e||!e[w])},v=function e(t,r,i){var o;if(!t)return g;if("string"==typeof t){var n=t.toLowerCase();f[n]&&(o=n),r&&(f[n]=r,o=n);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;f[s]=t,o=s}return!i&&o&&(g=o),o||!i&&g},b=function(e,t){if(m(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new x(r)},(y={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(i,a),n=r-o<0,s=t.clone().add(i+(n?-1:1),a);return+(-(i+(r-o)/(n?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:l,w:n,d:"day",D:c,h:o,m:i,s:r,ms:t,Q:s})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,y.i=m,y.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},C=(x=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=e.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(d);if(i){var o=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return this.$d.toString()!==u},p.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},p.isAfter=function(e,t){return b(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<b(e)},p.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var s=this,u=!!y.u(t)||t,d=y.p(e),h=function(e,t){var r=y.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return u?r:r.endOf("day")},p=function(e,t){return y.w(s.toDate()[e].apply(s.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},g=this.$W,f=this.$M,w=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case a:return u?h(1,f):h(0,f+1);case n:var v=this.$locale().weekStart||0,b=(g<v?g+7:g)-v;return h(u?w-b:w+(6-b),f);case"day":case c:return p(m+"Hours",0);case o:return p(m+"Minutes",1);case i:return p(m+"Seconds",2);case r:return p(m+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,n){var s,u=y.p(e),d="set"+(this.$u?"UTC":""),h=((s={}).day=d+"Date",s[c]=d+"Date",s[a]=d+"Month",s[l]=d+"FullYear",s[o]=d+"Hours",s[i]=d+"Minutes",s[r]=d+"Seconds",s[t]=d+"Milliseconds",s)[u],p="day"===u?this.$D+(n-this.$W):n;if(u===a||u===l){var g=this.clone().set(c,1);g.$d[h](p),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[y.p(e)]()},p.add=function(e,t){var s,c=this;e=Number(e);var u=y.p(t),d=function(t){var r=b(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===l)return this.set(l,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((s={})[i]=6e4,s[o]=36e5,s[r]=1e3,s)[u]||1,p=this.$d.getTime()+e*h;return y.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",o=y.z(this),n=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,p=function(e,r,o,n){return e&&(e[r]||e(t,i))||o[r].slice(0,n)},g=function(e){return y.s(n%12||12,e,"0")},f=d||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(h,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return p(r.monthsShort,s,c,3);case"MMMM":return p(c,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(r.weekdaysMin,t.$W,l,2);case"ddd":return p(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(n);case"HH":return y.s(n,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return f(n,a,!0);case"A":return f(n,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(e,t,c){var u,d=this,h=y.p(t),p=b(e),g=(p.utcOffset()-this.utcOffset())*6e4,f=this-p,w=function(){return y.m(d,p)};switch(h){case l:u=w()/12;break;case a:u=w();break;case s:u=w()/3;break;case n:u=(f-g)/6048e5;break;case"day":u=(f-g)/864e5;break;case o:u=f/36e5;break;case i:u=f/6e4;break;case r:u=f/1e3;break;default:u=f}return c?u:y.a(u)},p.daysInMonth=function(){return this.endOf(a).$D},p.$locale=function(){return f[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=v(e,t,!0);return i&&(r.$L=i),r},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},e}()).prototype,b.prototype=C,[["$ms",t],["$s",r],["$m",i],["$H",o],["$W","day"],["$M",a],["$y",l],["$D",c]].forEach(function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,x,b),e.$i=!0),b},b.locale=v,b.isDayjs=m,b.unix=function(e){return b(1e3*e)},b.en=f[g],b.Ls=f,b.p={},b)},93330:function(e){e.exports={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}}},6537:function(e){e.exports=function(e,t,r){e=e||{};var i=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function n(e,t,r,o){return i.fromToBase(e,t,r,o)}r.en.relativeTime=o,i.fromToBase=function(t,i,n,a,s){for(var l,c,u,d=n.$locale().relativeTime||o,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=h.length,g=0;g<p;g+=1){var f=h[g];f.d&&(l=a?r(t).diff(n,f.d,!0):n.diff(t,f.d,!0));var w=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,w<=f.r||!f.r){w<=1&&g>0&&(f=h[g-1]);var m=d[f.l];s&&(w=s(""+w)),c="string"==typeof m?m.replace("%d",w):m(w,i,f.l,u);break}}if(i)return c;var v=u?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},i.to=function(e,t){return n(e,t,this,!0)},i.from=function(e,t){return n(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},20239:function(e){e.exports=function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},78343:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var o,n,a,s,l,c,u,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(a in n=(o=p.pop()).value,s=o.cost,l=e[n]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,p.push(a,c),d[a]=n));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var o=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,o={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=e.sorter||i.default_sorter,o},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},53216:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var n=e.charCodeAt(i+1);n>=56320&&n<=57343&&(o=(o-55296)*1024+n-56320+65536,i+=1)}if(o<128){t.push(o);continue}if(o<2048){t.push(o>>6|192),t.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){t.push(o>>12|224),t.push(o>>6&63|128),t.push(63&o|128);continue}if(o>=65536&&o<=1114111){t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(63&o|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},28729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function o(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function n(e,t,i,n,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new o(i,n||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,o=[];if(0===this._eventsCount)return o;for(i in e=this._events)t.call(e,i)&&o.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var o=0,n=i.length,a=Array(n);o<n;o++)a[o]=i[o].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,o,n,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,o),!0;case 5:return u.fn.call(u.context,t,i,o,n),!0;case 6:return u.fn.call(u.context,t,i,o,n,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,o);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return n(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return n(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,o){var n=r?r+e:e;if(!this._events[n])return this;if(!t)return a(this,n),this;var s=this._events[n];if(s.fn)s.fn!==t||o&&!s.once||i&&s.context!==i||a(this,n);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||o&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[n]=1===c.length?c[0]:c:a(this,n)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},93396:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]])},54824:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]])},81098:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]])},15234:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]])},67405:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]])},56643:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]])},77480:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},4689:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},11392:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]])},65462:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]])},12741:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},32765:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(62898);let o=(0,i.Z)("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]])},62601:function(e,t,r){"use strict";var i,o;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(58960)},58960:function(e){!function(){var t={229:function(e){var t,r,i,o=e.exports={};function n(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}},a=!0;try{t[e](n,n.exports,i),a=!1}finally{a&&delete r[e]}return n.exports}i.ab="//";var o=i(229);e.exports=o}()},75298:function(e,t,r){let i=r(47363),o=r(37621),n=r(46028),a=r(12330);function s(e,t,r,n,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=n=void 0):3===l&&(t.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=n=void 0):2!==l||t.getContext||(n=r,r=t,t=void 0),new Promise(function(i,a){try{let a=o.create(r,n);i(e(a,t,n))}catch(e){a(e)}})}try{let i=o.create(r,n);a(null,e(i,t,n))}catch(e){a(e)}}t.create=o.create,t.toCanvas=s.bind(null,n.render),t.toDataURL=s.bind(null,n.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},47363:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},8177:function(e,t,r){let i=r(13400).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),o=145===r?26:2*Math.ceil((r-13)/(2*t-2)),n=[r-7];for(let e=1;e<t-1;e++)n[e]=n[e-1]-o;return n.push(6),n.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),o=i.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)(0!==e||0!==t)&&(0!==e||t!==o-1)&&(e!==o-1||0!==t)&&r.push([i[e],i[t]]);return r}},77654:function(e,t,r){let i=r(37662),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(e){this.mode=i.ALPHANUMERIC,this.data=e}n.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*o.indexOf(this.data[t]);r+=o.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(o.indexOf(this.data[t]),6)},e.exports=n},41904:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},21091:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let o=e*this.size+t;this.data[o]=r,i&&(this.reservedBit[o]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},90690:function(e,t,r){let i=r(53216),o=r(37662);function n(e){this.mode=o.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=n},37039:function(e,t,r){let i=r(9406),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}}},9406:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},78241:function(e,t,r){let i=r(13400).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},50237:function(e,t,r){let i=r(13400),o=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,n=r<<10;for(;i.getBCHDigit(n)-o>=0;)n^=1335<<i.getBCHDigit(n)-o;return(r<<10|n)^21522}},51309:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},69592:function(e,t,r){let i=r(37662),o=r(13400);function n(e){this.mode=i.KANJI,this.data=e}n.getBitsLength=function(e){return 13*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=o.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=n},68334:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,o=0,n=0,a=null,s=null;for(let l=0;l<t;l++){o=n=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?o++:(o>=5&&(i+=r.N1+(o-5)),a=t,o=1),(t=e.get(c,l))===s?n++:(n>=5&&(i+=r.N1+(n-5)),s=t,n=1)}o>=5&&(i+=r.N1+(o-5)),n>=5&&(i+=r.N1+(n-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let o=0;o<t-1;o++){let t=e.get(r,o)+e.get(r,o+1)+e.get(r+1,o)+e.get(r+1,o+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,o=0,n=0;for(let r=0;r<t;r++){o=n=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(r,a),a>=10&&(1488===o||93===o)&&i++,n=n<<1&2047|e.get(a,r),a>=10&&(1488===n||93===n)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];let o=Math.abs(Math.ceil(100*t/i/5)-10);return o*r.N4},t.applyMask=function(e,r){let i=r.size;for(let o=0;o<i;o++)for(let n=0;n<i;n++)r.isReserved(n,o)||r.xor(n,o,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,n,o))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,o=0,n=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<n&&(n=i,o=a)}return o}},37662:function(e,t,r){let i=r(64956),o=r(66579);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return o.testNumeric(e)?t.NUMERIC:o.testAlphanumeric(e)?t.ALPHANUMERIC:o.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},10894:function(e,t,r){let i=r(37662);function o(e){this.mode=i.NUMERIC,this.data=e.toString()}o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=o},25153:function(e,t,r){let i=r(51309);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let o=0;o<e.length;o++)for(let n=0;n<t.length;n++)r[o+n]^=i.mul(e[o],t[n]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let o=0;o<t.length;o++)r[o]^=i.mul(t[o],e);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let o=0;o<e;o++)r=t.mul(r,new Uint8Array([1,i.exp(o)]));return r}},37621:function(e,t,r){let i=r(13400),o=r(9406),n=r(41904),a=r(21091),s=r(8177),l=r(78241),c=r(68334),u=r(37039),d=r(9936),h=r(48670),p=r(50237),g=r(37662),f=r(25082);function w(e,t,r){let i,o;let n=e.size,a=p.getEncodedBits(t,r);for(i=0;i<15;i++)o=(a>>i&1)==1,i<6?e.set(i,8,o,!0):i<8?e.set(i+1,8,o,!0):e.set(n-15+i,8,o,!0),i<8?e.set(8,n-i-1,o,!0):i<9?e.set(8,15-i-1+1,o,!0):e.set(8,15-i-1,o,!0);e.set(n-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let m=o.M;return void 0!==t&&(m=o.from(t.errorCorrectionLevel,o.M),r=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,o){let p;if(Array.isArray(e))p=f.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=f.rawSplit(e);i=h.getBestVersionForData(t,r)}p=f.fromString(e,i||40)}else throw Error("Invalid data");let m=h.getBestVersionForData(p,r);if(!m)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<m)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+m+".\n")}else t=m;let v=function(e,t,r){let o=new n;r.forEach(function(t){o.put(t.mode.bit,4),o.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(o)});let a=i.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(a-s)*8;for(o.getLengthInBits()+4<=l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let c=(l-o.getLengthInBits())/8;for(let e=0;e<c;e++)o.put(e%2?17:236,8);return function(e,t,r){let o,n;let a=i.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=a-s,c=u.getBlocksCount(t,r),h=a%c,p=c-h,g=Math.floor(a/c),f=Math.floor(l/c),w=f+1,m=g-f,v=new d(m),b=0,y=Array(c),x=Array(c),C=0,k=new Uint8Array(e.buffer);for(let e=0;e<c;e++){let t=e<p?f:w;y[e]=k.slice(b,b+t),x[e]=v.encode(y[e]),b+=t,C=Math.max(C,t)}let E=new Uint8Array(a),S=0;for(o=0;o<C;o++)for(n=0;n<c;n++)o<y[n].length&&(E[S++]=y[n][o]);for(o=0;o<m;o++)for(n=0;n<c;n++)E[S++]=x[n][o];return E}(o,e,t)}(t,r,p),b=i.getSymbolSize(t),y=new a(b);return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let o=i[t][0],n=i[t][1];for(let t=-1;t<=7;t++)if(!(o+t<=-1)&&!(r<=o+t))for(let i=-1;i<=7;i++)n+i<=-1||r<=n+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(o+t,n+i,!0,!0):e.set(o+t,n+i,!1,!0))}}(y,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(y),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],o=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,o+r,!0,!0):e.set(i+t,o+r,!1,!0)}}(y,t),w(y,r,0),t>=7&&function(e,t){let r,i,o;let n=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+n-8-3,o=(a>>t&1)==1,e.set(r,i,o,!0),e.set(i,r,o,!0)}(y,t),function(e,t){let r=e.size,i=-1,o=r-1,n=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(o,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>n&1)==1),e.set(o,s-r,i),-1==--n&&(a++,n=7)}if((o+=i)<0||r<=o){o-=i,i=-i;break}}}(y,v),isNaN(o)&&(o=c.getBestMask(y,w.bind(null,y,r))),c.applyMask(o,y),w(y,r,o),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:o,segments:p}}(e,r,m,p)}},9936:function(e,t,r){let i=r(25153);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),o=this.degree-r.length;if(o>0){let e=new Uint8Array(this.degree);return e.set(r,o),e}return r},e.exports=o},66579:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");let o="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(o,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let n=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return n.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},25082:function(e,t,r){let i=r(37662),o=r(10894),n=r(77654),a=r(90690),s=r(69592),l=r(66579),c=r(13400),u=r(78343);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let o=[];for(;null!==(i=e.exec(r));)o.push({data:i[0],index:i.index,mode:t,length:i[0].length});return o}function p(e){let t,r;let o=h(l.NUMERIC,i.NUMERIC,e),n=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]);let a=o.concat(n,t,r);return a.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case i.NUMERIC:return o.getBitsLength(e);case i.ALPHANUMERIC:return n.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function f(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new o(e);case i.ALPHANUMERIC:return new n(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(f(t,null)):t.data&&e.push(f(t.data,t.mode)),e},[])},t.fromString=function(e,r){let o=p(e,c.isKanjiModeEnabled()),n=function(e){let t=[];for(let r=0;r<e.length;r++){let o=e[r];switch(o.mode){case i.NUMERIC:t.push([o,{data:o.data,mode:i.ALPHANUMERIC,length:o.length},{data:o.data,mode:i.BYTE,length:o.length}]);break;case i.ALPHANUMERIC:t.push([o,{data:o.data,mode:i.BYTE,length:o.length}]);break;case i.KANJI:t.push([o,{data:o.data,mode:i.BYTE,length:d(o.data)}]);break;case i.BYTE:t.push([{data:o.data,mode:i.BYTE,length:d(o.data)}])}}return t}(o),a=function(e,t){let r={},o={start:{}},n=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},o[u]={};for(let e=0;e<n.length;e++){let a=n[e];r[a]&&r[a].node.mode===c.mode?(o[a][u]=g(r[a].lastCount+c.length,c.mode)-g(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),o[a][u]=g(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}n=l}for(let e=0;e<n.length;e++)o[n[e]].end=0;return{map:o,table:r}}(n,r),s=u.find_path(a.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(a.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},13400:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},64956:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},48670:function(e,t,r){let i=r(13400),o=r(37039),n=r(9406),a=r(37662),s=r(64956),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let n=i.getSymbolTotalCodewords(e),l=o.getTotalCodewordsCount(e,t),u=(n-l)*8;if(r===a.MIXED)return u;let d=u-c(r,e);switch(r){case a.NUMERIC:return Math.floor(d/10*3);case a.ALPHANUMERIC:return Math.floor(d/11*2);case a.KANJI:return Math.floor(d/13);case a.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(e,r){let i;let o=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++){let o=function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i);if(o<=t.getCapacity(i,r,a.MIXED))return i}}(e,o);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let o=1;o<=40;o++)if(r<=t.getCapacity(o,i,e))return o}(i.mode,i.getLength(),o)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},46028:function(e,t,r){let i=r(10544);t.render=function(e,t,r){var o;let n=r,a=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),n=i.getOptions(n);let s=i.getImageWidth(e.modules.size,n),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,n),o=a,l.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let o=i;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});let n=t.render(e,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(a,s.quality)}},12330:function(e,t,r){let i=r(10544);function o(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function n(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+o(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",o=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?n("M",c+r,.5+u+r):n("m",o,0),o=0,a=!1),c+1<t&&e[l+1]||(i+=n("h",s),s=0)):o++}return i}(l,s,a.margin)+'"/>',h=a.width?'width="'+a.width+'" height="'+a.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+h+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,p),p}},10544:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:i,scale:i?4:o,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let o=r.modules.size,n=r.modules.data,a=t.getScale(o,i),s=Math.floor((o+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/a),i=Math.floor((r-l)/a);d=c[n[e*o+i]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},15493:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`positive integer expected, not ${e}`)}function o(e,...t){if(!(e instanceof Uint8Array||null!=e&&"object"==typeof e&&"Uint8Array"===e.constructor.name))throw Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)}function n(e){if("function"!=typeof e||"function"!=typeof e.create)throw Error("Hash should be wrapped by utils.wrapConstructor");i(e.outputLen),i(e.blockLen)}function a(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}function s(e,t){o(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}r.d(t,{Gg:function(){return a},J8:function(){return s},Rx:function(){return i},aI:function(){return o},vp:function(){return n}})},32305:function(e,t,r){"use strict";r.d(t,{kb:function(){return p},l1:function(){return u},eV:function(){return h},GL:function(){return a},iA:function(){return l},O6:function(){return f},np:function(){return s},O0:function(){return d},Jq:function(){return n},hE:function(){return g}});let i="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;var o=r(15493);let n=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),a=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),s=(e,t)=>e<<32-t|e>>>t,l=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],c=e=>e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255;function u(e){for(let t=0;t<e.length;t++)e[t]=c(e[t])}function d(e){return"string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),(0,o.aI)(e),e}function h(...e){let t=0;for(let r=0;r<e.length;r++){let i=e[r];(0,o.aI)(i),t+=i.length}let r=new Uint8Array(t);for(let t=0,i=0;t<e.length;t++){let o=e[t];r.set(o,i),i+=o.length}return r}class p{clone(){return this._cloneInto()}}function g(e){let t=t=>e().update(d(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function f(e=32){if(i&&"function"==typeof i.getRandomValues)return i.getRandomValues(new Uint8Array(e));throw Error("crypto.getRandomValues must be defined")}},26266:function(e,t,r){"use strict";r.d(t,{eG:function(){return i}});var i={id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}},71660:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var i=r(45583),o=r(51980),n=r(4832),a=r(39803),s=r(76026);async function l(e,t={}){let r;if(t.connector){let{connector:e}=t,[i,o]=await Promise.all([e.getAccounts(),e.getChainId()]);r={accounts:i,chainId:o,connector:e}}else r=e.state.connections.get(e.state.current);if(!r)throw new s.aH;let l=t.chainId??r.chainId,c=await r.connector.getChainId();if(c!==r.chainId)throw new s.XZ({connectionChainId:r.chainId,connectorChainId:c});let u=r.connector;if(u.getClient)return u.getClient({chainId:l});let d=(0,n.T)(t.account??r.accounts[0]);d.address=(0,a.K)(d.address);let h=e.chains.find(e=>e.id===l),p=await r.connector.getProvider({chainId:l});if(t.account&&!r.accounts.some(e=>e.toLowerCase()===d.address.toLowerCase()))throw new s.JK({address:d.address,connector:u});return(0,i.e)({account:d,chain:h,name:"Connector Client",transport:e=>(function(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:n}=t;return({retryCount:a})=>(0,o.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:n,type:"custom"})})(p)({...e,retryCount:0})})}},65534:function(e,t,r){"use strict";function i(e,t){return JSON.parse(e,(e,r)=>{let i=r;return i?.__type==="bigint"&&(i=BigInt(i.value)),i?.__type==="Map"&&(i=new Map(i.value)),t?.(e,i)??i})}function o(e,t){return e.slice(0,t).join(".")||"."}function n(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function a(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,a=[],s=[];return function(l,c){if("object"==typeof c){if(a.length){let e=n(a,this);0===e?a[a.length]=this:(a.splice(e),s.splice(e)),s[s.length]=l;let r=n(a,c);if(0!==r)return i?t.call(this,l,c,o(s,r)):`[ref=${o(s,r)}]`}else a[0]=c,s[0]=l}return r?e.call(this,l,c):c}}((e,r)=>{let i=r;return"bigint"==typeof i&&(i={__type:"bigint",value:r.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(r.entries())}),t?.(e,i)??i},i),r??void 0)}function s(e){let{deserialize:t=i,key:r="wagmi",serialize:o=a,storage:n=l}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...n,key:r,async getItem(e,i){let o=n.getItem(`${r}.${e}`),a=await s(o);return a?t(a)??null:i??null},async setItem(e,t){let i=`${r}.${e}`;null===t?await s(n.removeItem(i)):await s(n.setItem(i,o(t)))},async removeItem(e){await s(n.removeItem(`${r}.${e}`))}}}r.d(t,{o:function(){return s},w:function(){return l}});let l={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},78306:function(e,t,r){"use strict";r.d(t,{G:function(){return l}});var i,o,n=r(81784);let a=()=>`@wagmi/core@${n.i}`;var s=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class l extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return a()}constructor(e,t={}){super(),i.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});let r=t.cause instanceof l?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof l&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return s(this,i,"m",o).call(this,this,e)}}i=new WeakSet,o=function e(t,r){return r?.(t)?t:t.cause?s(this,i,"m",e).call(this,t.cause,r):t}},76026:function(e,t,r){"use strict";r.d(t,{JK:function(){return s},X4:function(){return o},XZ:function(){return l},aH:function(){return a},wi:function(){return n}});var i=r(78306);class o extends i.G{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class n extends i.G{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class a extends i.G{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class s extends i.G{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class l extends i.G{constructor({connectionChainId:e,connectorChainId:t}){super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorChainMismatchError"})}}},29358:function(e,t,r){"use strict";r.d(t,{M:function(){return o},O:function(){return n}});var i=r(78306);class o extends i.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class n extends i.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},48799:function(e,t,r){"use strict";r.d(t,{Dr:function(){return i}});let i={getItem(e){if("undefined"==typeof window)return null;let t=function(e,t){let r=e.split("; ").find(e=>e.startsWith(`${t}=`));if(r)return r.substring(t.length+1)}(document.cookie,e);return t??null},setItem(e,t){"undefined"!=typeof window&&(document.cookie=`${e}=${t};Path=/;SameSite=Lax`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1`)}}},46981:function(e,t,r){"use strict";function i(e,t,r){let i=e[t.name];if("function"==typeof i)return i;let o=e[r];return"function"==typeof o?o:r=>t(e,r)}r.d(t,{s:function(){return i}})},81784:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});let i="2.11.6"},58376:function(e,t,r){"use strict";r.d(t,{bq:function(){return T},Em:function(){return l},kg:function(){return S},UE:function(){return A},p1:function(){return c},C6:function(){return E},em:function(){return _},tU:function(){return R}});var i=r(74548),o=r(93330),n=r(6537),a=r(20239);i.extend(n),i.extend(a);let s={...o,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};i.locale("en-web3-modal",s);let l={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).locale("en-web3-modal").fromNow(!0),formatDate:(e,t="DD MMM")=>i(e).format(t)},c={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0};var u=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,d=Math.ceil,h=Math.floor,p="[BigNumber Error] ",g=p+"Number primitive has more than 15 significant digits: ",f=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function w(e){var t=0|e;return e>0||e===t?t:t-1}function m(e){for(var t,r,i=1,o=e.length,n=e[0]+"";i<o;){for(r=14-(t=e[i++]+"").length;r--;t="0"+t);n+=t}for(o=n.length;48===n.charCodeAt(--o););return n.slice(0,o+1||1)}function v(e,t){var r,i,o=e.c,n=t.c,a=e.s,s=t.s,l=e.e,c=t.e;if(!a||!s)return null;if(r=o&&!o[0],i=n&&!n[0],r||i)return r?i?0:-s:a;if(a!=s)return a;if(r=a<0,i=l==c,!o||!n)return i?0:!o^r?1:-1;if(!i)return l>c^r?1:-1;for(a=0,s=(l=o.length)<(c=n.length)?l:c;a<s;a++)if(o[a]!=n[a])return o[a]>n[a]^r?1:-1;return l==c?0:l>c^r?1:-1}function b(e,t,r,i){if(e<t||e>r||e!==h(e))throw Error(p+(i||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function y(e){var t=e.c.length-1;return w(e.e/14)==t&&e.c[t]%2!=0}function x(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function C(e,t,r){var i,o;if(t<0){for(o=r+".";++t;o+=r);e=o+e}else if(i=e.length,++t>i){for(o=r,t-=i;--t;o+=r);e+=o}else t<i&&(e=e.slice(0,t)+"."+e.slice(t));return e}var k=function e(t){var r,i,o,n,a,s,l,c,k,E=U.prototype={constructor:U,toString:null,valueOf:null},S=new U(1),_=20,A=4,T=-7,R=21,$=-1e7,I=1e7,P=!1,O=1,N=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},M="0123456789abcdefghijklmnopqrstuvwxyz",D=!0;function U(e,t){var r,i,o,n,a,s,l,d,p=this;if(!(p instanceof U))return new U(e,t);if(null==t){if(e&&!0===e._isBigNumber){p.s=e.s,!e.c||e.e>I?p.c=p.e=null:e.e<$?p.c=[p.e=0]:(p.e=e.e,p.c=e.c.slice());return}if((s="number"==typeof e)&&0*e==0){if(p.s=1/e<0?(e=-e,-1):1,e===~~e){for(n=0,a=e;a>=10;a/=10,n++);n>I?p.c=p.e=null:(p.e=n,p.c=[e]);return}d=String(e)}else{if(!u.test(d=String(e)))return k(p,d,s);p.s=45==d.charCodeAt(0)?(d=d.slice(1),-1):1}(n=d.indexOf("."))>-1&&(d=d.replace(".","")),(a=d.search(/e/i))>0?(n<0&&(n=a),n+=+d.slice(a+1),d=d.substring(0,a)):n<0&&(n=d.length)}else{if(b(t,2,M.length,"Base"),10==t&&D)return W(p=new U(e),_+p.e+1,A);if(d=String(e),s="number"==typeof e){if(0*e!=0)return k(p,d,s,t);if(p.s=1/e<0?(d=d.slice(1),-1):1,U.DEBUG&&d.replace(/^0\.0*|\./,"").length>15)throw Error(g+e)}else p.s=45===d.charCodeAt(0)?(d=d.slice(1),-1):1;for(r=M.slice(0,t),n=a=0,l=d.length;a<l;a++)if(0>r.indexOf(i=d.charAt(a))){if("."==i){if(a>n){n=l;continue}}else if(!o&&(d==d.toUpperCase()&&(d=d.toLowerCase())||d==d.toLowerCase()&&(d=d.toUpperCase()))){o=!0,a=-1,n=0;continue}return k(p,String(e),s,t)}s=!1,(n=(d=c(d,t,10,p.s)).indexOf("."))>-1?d=d.replace(".",""):n=d.length}for(a=0;48===d.charCodeAt(a);a++);for(l=d.length;48===d.charCodeAt(--l););if(d=d.slice(a,++l)){if(l-=a,s&&U.DEBUG&&l>15&&(e>9007199254740991||e!==h(e)))throw Error(g+p.s*e);if((n=n-a-1)>I)p.c=p.e=null;else if(n<$)p.c=[p.e=0];else{if(p.e=n,p.c=[],a=(n+1)%14,n<0&&(a+=14),a<l){for(a&&p.c.push(+d.slice(0,a)),l-=14;a<l;)p.c.push(+d.slice(a,a+=14));a=14-(d=d.slice(a)).length}else a-=l;for(;a--;d+="0");p.c.push(+d)}}else p.c=[p.e=0]}function L(e,t,r,i){var o,n,a,s,l;if(null==r?r=A:b(r,0,8),!e.c)return e.toString();if(o=e.c[0],a=e.e,null==t)l=m(e.c),l=1==i||2==i&&(a<=T||a>=R)?x(l,a):C(l,a,"0");else if(n=(e=W(new U(e),t,r)).e,s=(l=m(e.c)).length,1==i||2==i&&(t<=n||n<=T)){for(;s<t;l+="0",s++);l=x(l,n)}else if(t-=a,l=C(l,n,"0"),n+1>s){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=n-s)>0)for(n+1==s&&(l+=".");t--;l+="0");return e.s<0&&o?"-"+l:l}function B(e,t){for(var r,i,o=1,n=new U(e[0]);o<e.length;o++)(i=new U(e[o])).s&&(r=v(n,i))!==t&&(0!==r||n.s!==t)||(n=i);return n}function z(e,t,r){for(var i=1,o=t.length;!t[--o];t.pop());for(o=t[0];o>=10;o/=10,i++);return(r=i+14*r-1)>I?e.c=e.e=null:r<$?e.c=[e.e=0]:(e.e=r,e.c=t),e}function W(e,t,r,i){var o,n,a,s,l,c,u,p=e.c;if(p){e:{for(o=1,s=p[0];s>=10;s/=10,o++);if((n=t-o)<0)n+=14,a=t,u=h((l=p[c=0])/f[o-a-1]%10);else if((c=d((n+1)/14))>=p.length){if(i){for(;p.length<=c;p.push(0));l=u=0,o=1,n%=14,a=n-14+1}else break e}else{for(o=1,l=s=p[c];s>=10;s/=10,o++);n%=14,u=(a=n-14+o)<0?0:h(l/f[o-a-1]%10)}if(i=i||t<0||null!=p[c+1]||(a<0?l:l%f[o-a-1]),i=r<4?(u||i)&&(0==r||r==(e.s<0?3:2)):u>5||5==u&&(4==r||i||6==r&&(n>0?a>0?l/f[o-a]:0:p[c-1])%10&1||r==(e.s<0?8:7)),t<1||!p[0])return p.length=0,i?(t-=e.e+1,p[0]=f[(14-t%14)%14],e.e=-t||0):p[0]=e.e=0,e;if(0==n?(p.length=c,s=1,c--):(p.length=c+1,s=f[14-n],p[c]=a>0?h(l/f[o-a]%f[a])*s:0),i)for(;;){if(0==c){for(n=1,a=p[0];a>=10;a/=10,n++);for(a=p[0]+=s,s=1;a>=10;a/=10,s++);n!=s&&(e.e++,1e14==p[0]&&(p[0]=1));break}if(p[c]+=s,1e14!=p[c])break;p[c--]=0,s=1}for(n=p.length;0===p[--n];p.pop());}e.e>I?e.c=e.e=null:e.e<$&&(e.c=[e.e=0])}return e}function H(e){var t,r=e.e;return null===r?e.toString():(t=m(e.c),t=r<=T||r>=R?x(t,r):C(t,r,"0"),e.s<0?"-"+t:t)}return U.clone=e,U.ROUND_UP=0,U.ROUND_DOWN=1,U.ROUND_CEIL=2,U.ROUND_FLOOR=3,U.ROUND_HALF_UP=4,U.ROUND_HALF_DOWN=5,U.ROUND_HALF_EVEN=6,U.ROUND_HALF_CEIL=7,U.ROUND_HALF_FLOOR=8,U.EUCLID=9,U.config=U.set=function(e){var t,r;if(null!=e){if("object"==typeof e){if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(b(r=e[t],0,1e9,t),_=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(b(r=e[t],0,8,t),A=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(b(r[0],-1e9,0,t),b(r[1],0,1e9,t),T=r[0],R=r[1]):(b(r,-1e9,1e9,t),T=-(R=r<0?-r:r))),e.hasOwnProperty(t="RANGE")){if((r=e[t])&&r.pop)b(r[0],-1e9,-1,t),b(r[1],1,1e9,t),$=r[0],I=r[1];else if(b(r,-1e9,1e9,t),r)$=-(I=r<0?-r:r);else throw Error(p+t+" cannot be zero: "+r)}if(e.hasOwnProperty(t="CRYPTO")){if(!!(r=e[t])===r){if(r){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))P=r;else throw P=!r,Error(p+"crypto unavailable")}else P=r}else throw Error(p+t+" not true or false: "+r)}if(e.hasOwnProperty(t="MODULO_MODE")&&(b(r=e[t],0,9,t),O=r),e.hasOwnProperty(t="POW_PRECISION")&&(b(r=e[t],0,1e9,t),N=r),e.hasOwnProperty(t="FORMAT")){if("object"==typeof(r=e[t]))j=r;else throw Error(p+t+" not an object: "+r)}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(p+t+" invalid: "+r);D="0123456789"==r.slice(0,10),M=r}}else throw Error(p+"Object expected: "+e)}return{DECIMAL_PLACES:_,ROUNDING_MODE:A,EXPONENTIAL_AT:[T,R],RANGE:[$,I],CRYPTO:P,MODULO_MODE:O,POW_PRECISION:N,FORMAT:j,ALPHABET:M}},U.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!U.DEBUG)return!0;var t,r,i=e.c,o=e.e,n=e.s;e:if("[object Array]"==({}).toString.call(i)){if((1===n||-1===n)&&o>=-1e9&&o<=1e9&&o===h(o)){if(0===i[0]){if(0===o&&1===i.length)return!0;break e}if((t=(o+1)%14)<1&&(t+=14),String(i[0]).length==t){for(t=0;t<i.length;t++)if((r=i[t])<0||r>=1e14||r!==h(r))break e;if(0!==r)return!0}}}else if(null===i&&null===o&&(null===n||1===n||-1===n))return!0;throw Error(p+"Invalid BigNumber: "+e)},U.maximum=U.max=function(){return B(arguments,-1)},U.minimum=U.min=function(){return B(arguments,1)},U.random=(r=9007199254740992*Math.random()&2097151?function(){return h(9007199254740992*Math.random())}:function(){return(1073741824*Math.random()|0)*8388608+(8388608*Math.random()|0)},function(e){var t,i,o,n,a,s=0,l=[],c=new U(S);if(null==e?e=_:b(e,0,1e9),n=d(e/14),P){if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(n*=2));s<n;)(a=131072*t[s]+(t[s+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),t[s]=i[0],t[s+1]=i[1]):(l.push(a%1e14),s+=2);s=n/2}else if(crypto.randomBytes){for(t=crypto.randomBytes(n*=7);s<n;)(a=(31&t[s])*281474976710656+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(l.push(a%1e14),s+=7);s=n/7}else throw P=!1,Error(p+"crypto unavailable")}if(!P)for(;s<n;)(a=r())<9e15&&(l[s++]=a%1e14);for(n=l[--s],e%=14,n&&e&&(a=f[14-e],l[s]=h(n/a)*a);0===l[s];l.pop(),s--);if(s<0)l=[o=0];else{for(o=-1;0===l[0];l.splice(0,1),o-=14);for(s=1,a=l[0];a>=10;a/=10,s++);s<14&&(o-=14-s)}return c.e=o,c.c=l,c}),U.sum=function(){for(var e=1,t=arguments,r=new U(t[0]);e<t.length;)r=r.plus(t[e++]);return r},c=function(){var e="0123456789";function t(e,t,r,i){for(var o,n,a=[0],s=0,l=e.length;s<l;){for(n=a.length;n--;a[n]*=t);for(a[0]+=i.indexOf(e.charAt(s++)),o=0;o<a.length;o++)a[o]>r-1&&(null==a[o+1]&&(a[o+1]=0),a[o+1]+=a[o]/r|0,a[o]%=r)}return a.reverse()}return function(r,i,o,n,a){var s,c,u,d,h,p,g,f,w=r.indexOf("."),v=_,b=A;for(w>=0&&(d=N,N=0,r=r.replace(".",""),p=(f=new U(i)).pow(r.length-w),N=d,f.c=t(C(m(p.c),p.e,"0"),10,o,e),f.e=f.c.length),u=d=(g=t(r,i,o,a?(s=M,e):(s=e,M))).length;0==g[--d];g.pop());if(!g[0])return s.charAt(0);if(w<0?--u:(p.c=g,p.e=u,p.s=n,g=(p=l(p,f,v,b,o)).c,h=p.r,u=p.e),w=g[c=u+v+1],d=o/2,h=h||c<0||null!=g[c+1],h=b<4?(null!=w||h)&&(0==b||b==(p.s<0?3:2)):w>d||w==d&&(4==b||h||6==b&&1&g[c-1]||b==(p.s<0?8:7)),c<1||!g[0])r=h?C(s.charAt(1),-v,s.charAt(0)):s.charAt(0);else{if(g.length=c,h)for(--o;++g[--c]>o;)g[c]=0,c||(++u,g=[1].concat(g));for(d=g.length;!g[--d];);for(w=0,r="";w<=d;r+=s.charAt(g[w++]));r=C(r,u,s.charAt(0))}return r}}(),l=function(){function e(e,t,r){var i,o,n,a,s=0,l=e.length,c=t%1e7,u=t/1e7|0;for(e=e.slice();l--;)i=u*(n=e[l]%1e7)+(a=e[l]/1e7|0)*c,s=((o=c*n+i%1e7*1e7+s)/r|0)+(i/1e7|0)+u*a,e[l]=o%r;return s&&(e=[s].concat(e)),e}function t(e,t,r,i){var o,n;if(r!=i)n=r>i?1:-1;else for(o=n=0;o<r;o++)if(e[o]!=t[o]){n=e[o]>t[o]?1:-1;break}return n}function r(e,t,r,i){for(var o=0;r--;)e[r]-=o,o=e[r]<t[r]?1:0,e[r]=o*i+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,o,n,a,s){var l,c,u,d,p,g,f,m,v,b,y,x,C,k,E,S,_,A=i.s==o.s?1:-1,T=i.c,R=o.c;if(!T||!T[0]||!R||!R[0])return new U(i.s&&o.s&&(T?!R||T[0]!=R[0]:R)?T&&0==T[0]||!R?0*A:A/0:NaN);for(v=(m=new U(A)).c=[],A=n+(c=i.e-o.e)+1,s||(s=1e14,c=w(i.e/14)-w(o.e/14),A=A/14|0),u=0;R[u]==(T[u]||0);u++);if(R[u]>(T[u]||0)&&c--,A<0)v.push(1),d=!0;else{for(k=T.length,S=R.length,u=0,A+=2,(p=h(s/(R[0]+1)))>1&&(R=e(R,p,s),T=e(T,p,s),S=R.length,k=T.length),C=S,y=(b=T.slice(0,S)).length;y<S;b[y++]=0);_=[0].concat(_=R.slice()),E=R[0],R[1]>=s/2&&E++;do{if(p=0,(l=t(R,b,S,y))<0){if(x=b[0],S!=y&&(x=x*s+(b[1]||0)),(p=h(x/E))>1)for(p>=s&&(p=s-1),f=(g=e(R,p,s)).length,y=b.length;1==t(g,b,f,y);)p--,r(g,S<f?_:R,f,s),f=g.length,l=1;else 0==p&&(l=p=1),f=(g=R.slice()).length;if(f<y&&(g=[0].concat(g)),r(b,g,y,s),y=b.length,-1==l)for(;1>t(R,b,S,y);)p++,r(b,S<y?_:R,y,s),y=b.length}else 0===l&&(p++,b=[0]);v[u++]=p,b[0]?b[y++]=T[C]||0:(b=[T[C]],y=1)}while((C++<k||null!=b[0])&&A--);d=null!=b[0],v[0]||v.splice(0,1)}if(1e14==s){for(u=1,A=v[0];A>=10;A/=10,u++);W(m,n+(m.e=u+14*c-1)+1,a,d)}else m.e=c,m.r=+d;return m}}(),i=/^(-?)0([xbo])(?=\w[\w.]*$)/i,o=/^([^.]+)\.$/,n=/^\.([^.]+)$/,a=/^-?(Infinity|NaN)$/,s=/^\s*\+(?=[\w.])|^\s+|\s+$/g,k=function(e,t,r,l){var c,u=r?t:t.replace(s,"");if(a.test(u))e.s=isNaN(u)?null:u<0?-1:1;else{if(!r&&(u=u.replace(i,function(e,t,r){return c="x"==(r=r.toLowerCase())?16:"b"==r?2:8,l&&l!=c?e:t}),l&&(c=l,u=u.replace(o,"$1").replace(n,"0.$1")),t!=u))return new U(u,c);if(U.DEBUG)throw Error(p+"Not a"+(l?" base "+l:"")+" number: "+t);e.s=null}e.c=e.e=null},E.absoluteValue=E.abs=function(){var e=new U(this);return e.s<0&&(e.s=1),e},E.comparedTo=function(e,t){return v(this,new U(e,t))},E.decimalPlaces=E.dp=function(e,t){var r,i,o;if(null!=e)return b(e,0,1e9),null==t?t=A:b(t,0,8),W(new U(this),e+this.e+1,t);if(!(r=this.c))return null;if(i=((o=r.length-1)-w(this.e/14))*14,o=r[o])for(;o%10==0;o/=10,i--);return i<0&&(i=0),i},E.dividedBy=E.div=function(e,t){return l(this,new U(e,t),_,A)},E.dividedToIntegerBy=E.idiv=function(e,t){return l(this,new U(e,t),0,1)},E.exponentiatedBy=E.pow=function(e,t){var r,i,o,n,a,s,l,c,u,g=this;if((e=new U(e)).c&&!e.isInteger())throw Error(p+"Exponent not an integer: "+H(e));if(null!=t&&(t=new U(t)),s=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return u=new U(Math.pow(+H(g),s?e.s*(2-y(e)):+H(e))),t?u.mod(t):u;if(l=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new U(NaN);(i=!l&&g.isInteger()&&t.isInteger())&&(g=g.mod(t))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||s&&g.c[1]>=24e7:g.c[0]<8e13||s&&g.c[0]<=9999975e7)))return n=g.s<0&&y(e)?-0:0,g.e>-1&&(n=1/n),new U(l?1/n:n);N&&(n=d(N/14+2))}for(s?(r=new U(.5),l&&(e.s=1),c=y(e)):c=(o=Math.abs(+H(e)))%2,u=new U(S);;){if(c){if(!(u=u.times(g)).c)break;n?u.c.length>n&&(u.c.length=n):i&&(u=u.mod(t))}if(o){if(0===(o=h(o/2)))break;c=o%2}else if(W(e=e.times(r),e.e+1,1),e.e>14)c=y(e);else{if(0==(o=+H(e)))break;c=o%2}g=g.times(g),n?g.c&&g.c.length>n&&(g.c.length=n):i&&(g=g.mod(t))}return i?u:(l&&(u=S.div(u)),t?u.mod(t):n?W(u,N,A,a):u)},E.integerValue=function(e){var t=new U(this);return null==e?e=A:b(e,0,8),W(t,t.e+1,e)},E.isEqualTo=E.eq=function(e,t){return 0===v(this,new U(e,t))},E.isFinite=function(){return!!this.c},E.isGreaterThan=E.gt=function(e,t){return v(this,new U(e,t))>0},E.isGreaterThanOrEqualTo=E.gte=function(e,t){return 1===(t=v(this,new U(e,t)))||0===t},E.isInteger=function(){return!!this.c&&w(this.e/14)>this.c.length-2},E.isLessThan=E.lt=function(e,t){return 0>v(this,new U(e,t))},E.isLessThanOrEqualTo=E.lte=function(e,t){return -1===(t=v(this,new U(e,t)))||0===t},E.isNaN=function(){return!this.s},E.isNegative=function(){return this.s<0},E.isPositive=function(){return this.s>0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.minus=function(e,t){var r,i,o,n,a=this.s;if(t=(e=new U(e,t)).s,!a||!t)return new U(NaN);if(a!=t)return e.s=-t,this.plus(e);var s=this.e/14,l=e.e/14,c=this.c,u=e.c;if(!s||!l){if(!c||!u)return c?(e.s=-t,e):new U(u?this:NaN);if(!c[0]||!u[0])return u[0]?(e.s=-t,e):new U(c[0]?this:3==A?-0:0)}if(s=w(s),l=w(l),c=c.slice(),a=s-l){for((n=a<0)?(a=-a,o=c):(l=s,o=u),o.reverse(),t=a;t--;o.push(0));o.reverse()}else for(i=(n=(a=c.length)<(t=u.length))?a:t,a=t=0;t<i;t++)if(c[t]!=u[t]){n=c[t]<u[t];break}if(n&&(o=c,c=u,u=o,e.s=-e.s),(t=(i=u.length)-(r=c.length))>0)for(;t--;c[r++]=0);for(t=1e14-1;i>a;){if(c[--i]<u[i]){for(r=i;r&&!c[--r];c[r]=t);--c[r],c[i]+=1e14}c[i]-=u[i]}for(;0==c[0];c.splice(0,1),--l);return c[0]?z(e,c,l):(e.s=3==A?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,t){var r,i;return(e=new U(e,t),this.c&&e.s&&(!e.c||e.c[0]))?e.c&&(!this.c||this.c[0])?(9==O?(i=e.s,e.s=1,r=l(this,e,0,3),e.s=i,r.s*=i):r=l(this,e,0,O),(e=this.minus(r.times(e))).c[0]||1!=O||(e.s=this.s),e):new U(this):new U(NaN)},E.multipliedBy=E.times=function(e,t){var r,i,o,n,a,s,l,c,u,d,h,p,g,f=this.c,m=(e=new U(e,t)).c;if(!f||!m||!f[0]||!m[0])return this.s&&e.s&&(!f||f[0]||m)&&(!m||m[0]||f)?(e.s*=this.s,f&&m?(e.c=[0],e.e=0):e.c=e.e=null):e.c=e.e=e.s=null,e;for(i=w(this.e/14)+w(e.e/14),e.s*=this.s,(l=f.length)<(d=m.length)&&(g=f,f=m,m=g,o=l,l=d,d=o),o=l+d,g=[];o--;g.push(0));for(o=d;--o>=0;){for(r=0,h=m[o]%1e7,p=m[o]/1e7|0,n=o+(a=l);n>o;)s=p*(c=f[--a]%1e7)+(u=f[a]/1e7|0)*h,r=((c=h*c+s%1e7*1e7+g[n]+r)/1e14|0)+(s/1e7|0)+p*u,g[n--]=c%1e14;g[n]=r}return r?++i:g.splice(0,1),z(e,g,i)},E.negated=function(){var e=new U(this);return e.s=-e.s||null,e},E.plus=function(e,t){var r,i=this.s;if(t=(e=new U(e,t)).s,!i||!t)return new U(NaN);if(i!=t)return e.s=-t,this.minus(e);var o=this.e/14,n=e.e/14,a=this.c,s=e.c;if(!o||!n){if(!a||!s)return new U(i/0);if(!a[0]||!s[0])return s[0]?e:new U(a[0]?this:0*i)}if(o=w(o),n=w(n),a=a.slice(),i=o-n){for(i>0?(n=o,r=s):(i=-i,r=a),r.reverse();i--;r.push(0));r.reverse()}for((i=a.length)-(t=s.length)<0&&(r=s,s=a,a=r,t=i),i=0;t;)i=(a[--t]=a[t]+s[t]+i)/1e14|0,a[t]=1e14===a[t]?0:a[t]%1e14;return i&&(a=[i].concat(a),++n),z(e,a,n)},E.precision=E.sd=function(e,t){var r,i,o;if(null!=e&&!!e!==e)return b(e,1,1e9),null==t?t=A:b(t,0,8),W(new U(this),e,t);if(!(r=this.c))return null;if(i=14*(o=r.length-1)+1,o=r[o]){for(;o%10==0;o/=10,i--);for(o=r[0];o>=10;o/=10,i++);}return e&&this.e+1>i&&(i=this.e+1),i},E.shiftedBy=function(e){return b(e,-9007199254740991,9007199254740991),this.times("1e"+e)},E.squareRoot=E.sqrt=function(){var e,t,r,i,o,n=this.c,a=this.s,s=this.e,c=_+4,u=new U("0.5");if(1!==a||!n||!n[0])return new U(!a||a<0&&(!n||n[0])?NaN:n?this:1/0);if(0==(a=Math.sqrt(+H(this)))||a==1/0?(((t=m(n)).length+s)%2==0&&(t+="0"),a=Math.sqrt(+t),s=w((s+1)/2)-(s<0||s%2),r=new U(t=a==1/0?"5e"+s:(t=a.toExponential()).slice(0,t.indexOf("e")+1)+s)):r=new U(a+""),r.c[0]){for((a=(s=r.e)+c)<3&&(a=0);;)if(o=r,r=u.times(o.plus(l(this,o,c,1))),m(o.c).slice(0,a)===(t=m(r.c)).slice(0,a)){if(r.e<s&&--a,"9999"!=(t=t.slice(a-3,a+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(W(r,r.e+_+2,1),e=!r.times(r).eq(this));break}if(!i&&(W(o,o.e+_+2,0),o.times(o).eq(this))){r=o;break}c+=4,a+=4,i=1}}return W(r,r.e+_+1,A,e)},E.toExponential=function(e,t){return null!=e&&(b(e,0,1e9),e++),L(this,e,t,1)},E.toFixed=function(e,t){return null!=e&&(b(e,0,1e9),e=e+this.e+1),L(this,e,t)},E.toFormat=function(e,t,r){var i;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=j;else if("object"!=typeof r)throw Error(p+"Argument not an object: "+r);if(i=this.toFixed(e,t),this.c){var o,n=i.split("."),a=+r.groupSize,s=+r.secondaryGroupSize,l=r.groupSeparator||"",c=n[0],u=n[1],d=this.s<0,h=d?c.slice(1):c,g=h.length;if(s&&(o=a,a=s,s=o,g-=o),a>0&&g>0){for(o=g%a||a,c=h.substr(0,o);o<g;o+=a)c+=l+h.substr(o,a);s>0&&(c+=l+h.slice(o)),d&&(c="-"+c)}i=u?c+(r.decimalSeparator||"")+((s=+r.fractionGroupSize)?u.replace(RegExp("\\d{"+s+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):u):c}return(r.prefix||"")+i+(r.suffix||"")},E.toFraction=function(e){var t,r,i,o,n,a,s,c,u,d,h,g,w=this.c;if(null!=e&&(!(s=new U(e)).isInteger()&&(s.c||1!==s.s)||s.lt(S)))throw Error(p+"Argument "+(s.isInteger()?"out of range: ":"not an integer: ")+H(s));if(!w)return new U(this);for(t=new U(S),u=r=new U(S),i=c=new U(S),g=m(w),n=t.e=g.length-this.e-1,t.c[0]=f[(a=n%14)<0?14+a:a],e=!e||s.comparedTo(t)>0?n>0?t:u:s,a=I,I=1/0,s=new U(g),c.c[0]=0;d=l(s,t,0,1),1!=(o=r.plus(d.times(i))).comparedTo(e);)r=i,i=o,u=c.plus(d.times(o=u)),c=o,t=s.minus(d.times(o=t)),s=o;return o=l(e.minus(r),i,0,1),c=c.plus(o.times(u)),r=r.plus(o.times(i)),c.s=u.s=this.s,n*=2,h=1>l(u,i,n,A).minus(this).abs().comparedTo(l(c,r,n,A).minus(this).abs())?[u,i]:[c,r],I=a,h},E.toNumber=function(){return+H(this)},E.toPrecision=function(e,t){return null!=e&&b(e,1,1e9),L(this,e,t,2)},E.toString=function(e){var t,r=this,i=r.s,o=r.e;return null===o?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=o<=T||o>=R?x(m(r.c),o):C(m(r.c),o,"0"):10===e&&D?t=C(m((r=W(new U(r),_+o+1,A)).c),r.e,"0"):(b(e,2,M.length,"Base"),t=c(C(m(r.c),o,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},E.valueOf=E.toJSON=function(){return H(this)},E._isBigNumber=!0,E[Symbol.toStringTag]="BigNumber",E[Symbol.for("nodejs.util.inspect.custom")]=E.valueOf,null!=t&&U.set(t),U}();let E={bigNumber:e=>new k(e),multiply(e,t){if(void 0===e||void 0===t)return k(0);let r=new k(e),i=new k(t);return r.multipliedBy(i)},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},S={numericInputKeyDown(e,t,r){let i=e.metaKey||e.ctrlKey,o="a"===e.key||"A"===e.key,n="c"===e.key||"C"===e.key,a="v"===e.key||"V"===e.key,s="x"===e.key||"X"===e.key,l=","===e.key,c="."===e.key,u=e.key>="0"&&e.key<="9";!i&&(o||n||a||s)&&e.preventDefault(),"0"!==t||l||c||"0"!==e.key||e.preventDefault(),"0"===t&&u&&(r(e.key),e.preventDefault()),(l||c)&&(t||(r("0."),e.preventDefault()),(t?.includes(".")||t?.includes(","))&&e.preventDefault()),u||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(e.key)||c||l||e.preventDefault()}},_=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],A={URLS:{FAQ:"https://walletconnect.com/faq"}},T={WC_NAME_SUFFIX:".wcn.id",WC_NAMES_ALLOWED_DOMAINS:["walletconnect.com"]};function R(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}},60969:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return q},ApiController:function(){return ei},WM:function(){return G},fz:function(){return em},Lr:function(){return m},ConnectionController:function(){return N},ConnectorController:function(){return Q},bq:function(){return s},j1:function(){return l},a:function(){return ew},Xs:function(){return $},IN:function(){return en},NetworkController:function(){return U},ph:function(){return ec},OptionsController:function(){return p},Ie:function(){return M},RouterController:function(){return z},_4:function(){return ev},Si:function(){return ed},SnackController:function(){return b},MO:function(){return S},nY:function(){return Z},ThemeController:function(){return X},fw:function(){return ep},sl:function(){return P}});var i=r(10913),o=r(53722);let n="https://secure.walletconnect.com",a=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],s={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:n,SECURE_SITE_DASHBOARD:`${n}/dashboard`,SECURE_SITE_FAVICON:`${n}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},l={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),checkCaipNetwork:(e,t="")=>e?.id.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return l.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=s.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=s.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+s.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(l.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!l.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t,r){window.open(e,t,r||"noreferrer noopener")},returnOpenHref:(e,t,r)=>window.open(e,t,r||"noreferrer noopener"),async preloadImage(e){let t=new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,l.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){let r;if("0"===e)r="0";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:"0"===r?"000":"",symbol:t}},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return s.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>l.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>l.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>l.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let i=r[e.id],o=r[t.id];return void 0!==i&&void 0!==o?i-o:void 0!==i?-1:void 0!==o?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let t=e.toFixed(2),[r,i]=t.split(".");return{dollars:r,pennies:i}},isAddress:e=>!!(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))};async function c(...e){let t=await fetch(...e);if(!t.ok){let e=Error(`HTTP status code: ${t.status}`,{cause:t});throw e}return t}class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...r}){let i=this.createUrl(r),o=await c(i,{method:"GET",headers:e,signal:t,cache:"no-cache"});return o.json()}async getBlob({headers:e,signal:t,...r}){let i=this.createUrl(r),o=await c(i,{method:"GET",headers:e,signal:t});return o.blob()}async post({body:e,headers:t,signal:r,...i}){let o=this.createUrl(i),n=await c(o,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:r});return n.json()}async put({body:e,headers:t,signal:r,...i}){let o=this.createUrl(i),n=await c(o,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:r});return n.json()}async delete({body:e,headers:t,signal:r,...i}){let o=this.createUrl(i),n=await c(o,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:r});return n.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}var d=r(58376);let h=(0,o.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),p={state:h,subscribeKey:(e,t)=>(0,i.VW)(h,e,t),setProjectId(e){h.projectId=e},setAllWallets(e){h.allWallets=e},setIncludeWalletIds(e){h.includeWalletIds=e},setExcludeWalletIds(e){h.excludeWalletIds=e},setFeaturedWalletIds(e){h.featuredWalletIds=e},setTokens(e){h.tokens=e},setTermsConditionsUrl(e){h.termsConditionsUrl=e},setPrivacyPolicyUrl(e){h.privacyPolicyUrl=e},setCustomWallets(e){h.customWallets=e},setIsSiweEnabled(e){h.isSiweEnabled=e},setEnableAnalytics(e){h.enableAnalytics=e},setSdkVersion(e){h.sdkVersion=e},setMetadata(e){h.metadata=e},setOnrampEnabled(e){h.enableOnramp=e},setWalletFeaturesEnabled(e){h.enableWalletFeatures=e},getSnapshot:()=>(0,o.CO)(h)},g={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},f=l.getBlockchainApiUrl(),w=new u({baseUrl:f}),m={fetchIdentity:({address:e})=>w.get({path:`/v1/identity/${e}`,params:{projectId:p.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r,onramp:i,signal:o})=>w.get({path:`/v1/account/${e}/history?projectId=${t}${i?`&onramp=${i}`:""}`,params:r?{cursor:r}:{},signal:o}),fetchSwapQuote:({projectId:e,amount:t,userAddress:r,from:i,to:o,gasPrice:n})=>w.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:e,amount:t,userAddress:r,from:i,to:o,gasPrice:n}}),fetchSwapTokens:({projectId:e,chainId:t})=>w.get({path:`/v1/convert/tokens?projectId=${e}&chainId=${t}`}),fetchTokenPrice:({projectId:e,addresses:t})=>w.post({path:"/v1/fungible/price",body:{projectId:e,currency:"usd",addresses:t},headers:{"Content-Type":"application/json"}}),fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:r}){let{sdkType:i,sdkVersion:o}=p.state;return w.get({path:`/v1/convert/allowance?projectId=${e}&tokenAddress=${t}&userAddress=${r}`,headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o}})},fetchGasPrice({projectId:e,chainId:t}){let{sdkType:r,sdkVersion:i}=p.state;return w.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":r,"x-sdk-version":i},params:{projectId:e,chainId:t}})},generateSwapCalldata:({amount:e,from:t,projectId:r,to:i,userAddress:o})=>w.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:s.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:r,to:i,userAddress:o}}),generateApproveCalldata({from:e,projectId:t,to:r,userAddress:i}){let{sdkType:o,sdkVersion:n}=p.state;return w.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":n},params:{projectId:t,userAddress:i,from:e,to:r}})},async getBalance(e,t,r){let{sdkType:i,sdkVersion:o}=p.state;return w.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":i,"x-sdk-version":o},params:{currency:"usd",projectId:p.state.projectId,chainId:t,forceUpdate:r}})},lookupEnsName:async e=>w.get({path:`/v1/profile/account/${e}${d.bq.WC_NAME_SUFFIX}?projectId=${p.state.projectId}`}),reverseLookupEnsName:async({address:e})=>w.get({path:`/v1/profile/reverse/${e}?projectId=${p.state.projectId}`}),getEnsNameSuggestions:async e=>w.get({path:`/v1/profile/suggestions/${e}?projectId=${p.state.projectId}`}),registerEnsName:async({coinType:e,address:t,message:r,signature:i})=>w.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:i},headers:{"Content-Type":"application/json"}}),async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:i,paymentAmount:o}){let n=await w.post({path:`/v1/generators/onrampurl?projectId=${p.state.projectId}`,body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:o}});return n.url},async getOnrampOptions(){try{let e=await w.get({path:`/v1/onramp/options?projectId=${p.state.projectId}`});return e}catch(e){return g}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}){try{let o=await w.post({path:`/v1/onramp/quote?projectId=${p.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:i}});return o}catch(e){return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}}},v=(0,o.sj)({message:"",variant:"success",open:!1}),b={state:v,subscribeKey:(e,t)=>(0,i.VW)(v,e,t),showSuccess(e){v.message=e,v.variant="success",v.open=!0},showError(e){let t=l.parseError(e);v.message=t,v.variant="error",v.open=!0},hide(){v.open=!1}},y="WALLETCONNECT_DEEPLINK_CHOICE",x="@w3m/recent",C="@w3m/connected_wallet_image_url",k="@w3m/connected_connector",E="@w3m/connected_social",S={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(y,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(y);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(y)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=S.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(x,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(x);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(C,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},removeConnectedWalletImageUrl(){try{localStorage.removeItem(C)}catch{console.info("Unable to remove Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(C)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(k,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(k)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(e){try{localStorage.setItem(E,e)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return localStorage.getItem(E)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return localStorage.getItem("@w3m-storage/SOCIAL_USERNAME")}catch{console.info("Unable to get Connected Social Username")}}},_=l.getAnalyticsUrl(),A=new u({baseUrl:_}),T=["MODAL_CREATED"],R=(0,o.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),$={state:R,subscribe:e=>(0,o.Ld)(R,()=>e(R)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=p.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(T.includes(e.data.event)||"undefined"==typeof window)return;await A.post({path:"/e",headers:$._getApiHeaders(),body:{eventId:l.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){R.timestamp=Date.now(),R.data=e,p.state.enableAnalytics&&$._sendAnalyticsEvent(R)}},I=(0,o.sj)({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),P={state:I,subscribe:e=>(0,o.Ld)(I,()=>e(I)),async fetchTransactions(e,t){let{projectId:r}=p.state;if(!r||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");I.loading=!0;try{let i=await m.fetchTransactions({account:e,projectId:r,cursor:I.next,onramp:t}),o=this.filterSpamTransactions(i.data),n=[...I.transactions,...o];I.loading=!1,"coinbase"===t?I.coinbaseTransactions=this.groupTransactionsByYearAndMonth(I.coinbaseTransactions,i.data):(I.transactions=n,I.transactionsByYear=this.groupTransactionsByYearAndMonth(I.transactionsByYear,o)),I.empty=0===n.length,I.next=i.next?i.next:void 0}catch(t){$.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:r,cursor:I.next}}),b.showError("Failed to fetch transactions"),I.loading=!1,I.empty=!0,I.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),i=new Date(t.metadata.minedAt).getMonth(),o=e[r]??{},n=o[i]??[],a=n.filter(e=>e.id!==t.id);e[r]={...o,[i]:[...a,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>{let t=e.transfers.every(e=>e.nft_info?.flags.is_spam===!0);return!t}),clearCursor(){I.next=void 0},resetTransactions(){I.transactions=[],I.transactionsByYear={},I.loading=!1,I.empty=!1,I.next=void 0}},O=(0,o.sj)({wcError:!1,buffering:!1}),N={state:O,subscribeKey:(e,t)=>(0,i.VW)(O,e,t),_getClient(){if(!O._client)throw Error("ConnectionController client not set");return O._client},setClient(e){O._client=(0,o.iH)(e)},connectWalletConnect(){O.wcPromise=this._getClient().connectWalletConnect(e=>{O.wcUri=e,O.wcPairingExpiry=l.getPairingExpiry()}),S.setConnectedConnector("WALLET_CONNECT")},async connectExternal(e){await this._getClient().connectExternal?.(e),S.setConnectedConnector(e.type)},async reconnectExternal(e){await this._getClient().reconnectExternal?.(e),S.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){O.wcUri=void 0,O.wcPairingExpiry=void 0,O.wcPromise=void 0,O.wcLinking=void 0,O.recentWallet=void 0,P.resetTransactions(),S.deleteWalletConnectDeepLink()},setWcLinking(e){O.wcLinking=e},setWcError(e){O.wcError=e,O.buffering=!1},setRecentWallet(e){O.recentWallet=e},setBuffering(e){O.buffering=e},async disconnect(){await this._getClient().disconnect(),S.removeConnectedWalletImageUrl(),this.resetWcConnection()}},j=(0,o.sj)({loading:!1,open:!1,selectedNetworkId:void 0}),M={state:j,subscribe:e=>(0,o.Ld)(j,()=>e(j)),set(e){Object.assign(j,{...j,...e})}},D=(0,o.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),U={state:D,subscribe:e=>(0,o.Ld)(D,()=>e(D)),subscribeKey:(e,t)=>(0,i.VW)(D,e,t),_getClient(){if(!D._client)throw Error("NetworkController client not set");return D._client},setClient(e){D._client=(0,o.iH)(e)},setCaipNetwork(e){D.caipNetwork=e,M.set({selectedNetworkId:e?.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){D.caipNetwork=e,M.set({selectedNetworkId:e?.id}),D.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){D.requestedCaipNetworks=e},setAllowUnsupportedChain(e){D.allowUnsupportedChain=e},setSmartAccountEnabledNetworks(e){D.smartAccountEnabledNetworks=e},getRequestedCaipNetworks(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=D;return l.sortRequestedNetworks(e,t)},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();D.supportsAllNetworks=e.supportsAllNetworks,D.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),D.caipNetwork=e,e&&$.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){D.isUnsupportedChain=!D.requestedCaipNetworks?.some(e=>e.id===D.caipNetwork?.id),D.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){let e=d.p1.caipNetworkIdToNumber(D.caipNetwork?.id);return!!e&&!!D.smartAccountEnabledNetworks?.includes(e)},resetNetwork(){D.isDefaultCaipNetwork||(D.caipNetwork=void 0),D.approvedCaipNetworkIds=void 0,D.supportsAllNetworks=!0,D.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{en.open({view:"UnsupportedChain"})},300)}},L={async getTokenList(){let e=await m.fetchSwapTokens({chainId:U.state.caipNetwork?.id,projectId:p.state.projectId}),t=e?.tokens?.map(e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[];return t},async fetchGasPrice(){let e=p.state.projectId,t=U.state.caipNetwork;return t?await m.fetchGasPrice({projectId:e,chainId:t.id}):null},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:r,sourceTokenDecimals:i}){let o=p.state.projectId,n=await m.fetchSwapAllowance({projectId:o,tokenAddress:e,userAddress:t});if(n?.allowance&&r&&i){let e=N.parseUnits(r,i),t=BigInt(n.allowance)>=e;return t}return!1},async getMyTokensWithBalance(e){let t=q.state.address,r=U.state.caipNetwork;if(!t||!r)return[];let i=await m.getBalance(t,r.id,e),o=i.balances.filter(e=>"0"!==e.quantity.decimals);return q.setTokenBalance(o),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:`${e.chainId}:${s.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},B=(0,o.sj)({view:"Connect",history:["Connect"],transactionStack:[]}),z={state:B,subscribeKey:(e,t)=>(0,i.VW)(B,e,t),pushTransactionStack(e){B.transactionStack.push(e)},popTransactionStack(e){let t=B.transactionStack.pop();t&&(e?(this.goBack(),t?.onCancel?.()):(t.goBack?this.goBack():t.view&&this.reset(t.view),t?.onSuccess?.()))},push(e,t){e!==B.view&&(B.view=e,B.history.push(e),B.data=t)},reset(e){B.view=e,B.history=[e]},replace(e,t){B.history.length>=1&&B.history.at(-1)!==e&&(B.view=e,B.history[B.history.length-1]=e,B.data=t)},goBack(){if(B.history.length>1){B.history.pop();let[e]=B.history.slice(-1);e&&(B.view=e)}},goBackToIndex(e){if(B.history.length>1){B.history=B.history.slice(0,e+1);let[t]=B.history.slice(-1);t&&(B.view=t)}}},W={getGasPriceInEther(e,t){let r=Number(t*e)/1e18;return r},getGasPriceInUSD(e,t,r){let i=W.getGasPriceInEther(t,r),o=d.C6.bigNumber(e),n=o.multipliedBy(i);return n.toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:r,toTokenAmount:i}){let o=d.C6.bigNumber(e).multipliedBy(t),n=d.C6.bigNumber(i).multipliedBy(r),a=o.minus(n).dividedBy(o).multipliedBy(100);return a.toNumber()},getMaxSlippage(e,t){let r=d.C6.bigNumber(e).dividedBy(100),i=d.C6.multiply(t,r);return i.toNumber()},getProviderFee(e,t=.0085){let r=d.C6.bigNumber(e).multipliedBy(t);return r.toString()},isInsufficientNetworkTokenForGas:(e,t)=>!!d.C6.bigNumber(e).isZero()||d.C6.bigNumber(d.C6.bigNumber(t||"0")).isGreaterThan(e),isInsufficientSourceTokenForSwap(e,t,r){let i=r?.find(e=>e.address===t)?.quantity?.numeric,o=d.C6.bigNumber(i||"0").isLessThan(e);return o},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:r,toTokenPrice:i,sourceTokenAmount:o}){if("0"===o||!e||!t)return"0";let n=e.decimals,a=t.decimals;if(i<=0)return"0";let s=d.C6.bigNumber(o).multipliedBy(.0085),l=d.C6.bigNumber(o).minus(s),c=l.multipliedBy(d.C6.bigNumber(10).pow(n)),u=d.C6.bigNumber(r).dividedBy(i),h=n-a,p=c.multipliedBy(u).dividedBy(d.C6.bigNumber(10).pow(h)),g=p.dividedBy(d.C6.bigNumber(10).pow(a)),f=g.toFixed(a).toString();return f}},H={initializing:!1,initialized:!1,loading:!1,loadingPrices:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:s.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},F=(0,o.sj)(H),Z={state:F,subscribe:e=>(0,o.Ld)(F,()=>e(F)),subscribeKey:(e,t)=>(0,i.VW)(F,e,t),getParams(){let{address:e}=q.state,t=`${U.state.caipNetwork?.id}:${s.NATIVE_TOKEN_ADDRESS}`;if(!e)throw Error("No address found to swap the tokens from.");let r=q.state.caipAddress,i=!F.toToken?.address||!F.toToken?.decimals,o=!F.sourceToken?.address||!F.sourceToken?.decimals||!d.C6.bigNumber(F.sourceTokenAmount).isGreaterThan(0),n=!F.sourceTokenAmount;return{networkAddress:t,fromAddress:e,fromCaipAddress:q.state.caipAddress,sourceTokenAddress:F.sourceToken?.address,toTokenAddress:F.toToken?.address,toTokenAmount:F.toTokenAmount,toTokenDecimals:F.toToken?.decimals,sourceTokenAmount:F.sourceTokenAmount,sourceTokenDecimals:F.sourceToken?.decimals,invalidToToken:i,invalidSourceToken:o,invalidSourceTokenAmount:n,availableToSwap:r&&!i&&!o&&!n}},setLoading(e){F.loading=e},setSourceToken(e){if(!e){F.sourceToken=e,F.sourceTokenAmount="",F.sourceTokenPriceInUSD=0;return}F.sourceToken=e,this.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){F.sourceTokenAmount=e},setToToken(e){if(!e){F.toToken=e,F.toTokenAmount="",F.toTokenPriceInUSD=0;return}F.toToken=e,this.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){F.toTokenAmount=e?d.C6.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let{availableToSwap:r}=this.getParams(),i=F.tokensPriceMap[e]||0;i||(F.loadingPrices=!0,i=await this.getAddressPrice(e)),"sourceToken"===t?F.sourceTokenPriceInUSD=i:"toToken"===t&&(F.toTokenPriceInUSD=i),F.loadingPrices&&(F.loadingPrices=!1,r&&this.swapTokens())},switchTokens(){if(F.initializing||!F.initialized)return;let e=F.toToken?{...F.toToken}:void 0,t=F.sourceToken?{...F.sourceToken}:void 0,r=e&&""===F.toTokenAmount?"1":F.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(r),this.setToTokenAmount(""),this.swapTokens()},resetState(){F.myTokensWithBalance=H.myTokensWithBalance,F.tokensPriceMap=H.tokensPriceMap,F.initialized=H.initialized,F.sourceToken=H.sourceToken,F.sourceTokenAmount=H.sourceTokenAmount,F.sourceTokenPriceInUSD=H.sourceTokenPriceInUSD,F.toToken=H.toToken,F.toTokenAmount=H.toTokenAmount,F.toTokenPriceInUSD=H.toTokenPriceInUSD,F.networkPrice=H.networkPrice,F.networkTokenSymbol=H.networkTokenSymbol,F.networkBalanceInUSD=H.networkBalanceInUSD,F.inputError=H.inputError},resetValues(){let{networkAddress:e}=this.getParams(),t=F.tokens?.find(t=>t.address===e);this.setSourceToken(t),this.setToToken(void 0)},clearError(){F.transactionError=void 0},async initializeState(){if(!F.initializing){if(F.initializing=!0,!F.initialized)try{await this.fetchTokens(),F.initialized=!0}catch(e){F.initialized=!1,b.showError("Failed to initialize swap"),z.goBack()}F.initializing=!1}},async fetchTokens(){let{networkAddress:e}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();let t=F.tokens?.find(t=>t.address===e);t&&(F.networkTokenSymbol=t.symbol,this.setSourceToken(t),this.setSourceTokenAmount("1"))},async getTokenList(){let e=await L.getTokenList();F.tokens=e,F.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0).filter(e=>!!s.SWAP_POPULAR_TOKENS.includes(e.symbol),{}),F.suggestedTokens=e.filter(e=>!!s.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){let t=F.tokensPriceMap[e];if(t)return t;let r=await m.fetchTokenPrice({projectId:p.state.projectId,addresses:[e]}),i=r.fungibles||[],o=[...F.tokens||[],...F.myTokensWithBalance||[]],n=o?.find(t=>t.address===e)?.symbol,a=i.find(e=>e.symbol.toLowerCase()===n?.toLowerCase())?.price||0,s=parseFloat(a.toString());return F.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){let{networkAddress:e}=this.getParams(),t=await m.fetchTokenPrice({projectId:p.state.projectId,addresses:[e]}),r=t.fungibles?.[0],i=r?.price.toString()||"0";F.tokensPriceMap[e]=parseFloat(i),F.networkTokenSymbol=r?.symbol||"",F.networkPrice=i},async getMyTokensWithBalance(e){let t=await L.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){let{networkAddress:t}=this.getParams(),r=U.state.caipNetwork;if(!r)return;let i=e.find(e=>e.address===t);e.forEach(e=>{F.tokensPriceMap[e.address]=e.price||0}),F.myTokensWithBalance=e.filter(e=>e.address.startsWith(r.id)),F.networkBalanceInUSD=i?d.C6.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){let e=await L.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUsd:null};let t=e.standard,r=BigInt(t),i=BigInt(15e4),o=W.getGasPriceInUSD(F.networkPrice,i,r);return F.gasFee=t,F.gasPriceInUSD=o,{gasPrice:r,gasPriceInUSD:F.gasPriceInUSD}},async swapTokens(){let e=q.state.address,t=F.sourceToken,r=F.toToken,i=d.C6.bigNumber(F.sourceTokenAmount).isGreaterThan(0);if(!r||!t||F.loadingPrices||!i)return;F.loading=!0;let o=d.C6.bigNumber(F.sourceTokenAmount).multipliedBy(10**t.decimals),n=await m.fetchSwapQuote({userAddress:e,projectId:p.state.projectId,from:t.address,to:r.address,gasPrice:F.gasFee,amount:o.toString()}),a=n?.quotes?.[0]?.toAmount;if(!a)return;let s=d.C6.bigNumber(a).dividedBy(10**r.decimals).toString();this.setToTokenAmount(s);let l=this.hasInsufficientToken(F.sourceTokenAmount,t.address);l?F.inputError="Insufficient balance":(F.inputError=void 0,this.setTransactionDetails()),F.loading=!1},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=this.getParams(),r=F.sourceToken,i=F.toToken;if(e&&t&&r&&i&&!F.loading)try{let t;F.loading=!0;let i=await L.fetchSwapAllowance({userAddress:e,tokenAddress:r.address,sourceTokenAmount:F.sourceTokenAmount,sourceTokenDecimals:r.decimals});return t=i?await this.createSwapTransaction():await this.createAllowanceTransaction(),F.loading=!1,F.fetchError=!1,t}catch(e){z.goBack(),b.showError("Failed to check allowance"),F.approvalTransaction=void 0,F.swapTransaction=void 0,F.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:r,toTokenAddress:i}=this.getParams();if(e&&i){if(!r)throw Error(">>> createAllowanceTransaction - No source token address found.");try{let o=await m.generateApproveCalldata({projectId:p.state.projectId,from:r,to:i,userAddress:e}),n=await N.estimateGas({address:t,to:l.getPlainAddress(o.tx.to),data:o.tx.data}),a={data:o.tx.data,to:l.getPlainAddress(o.tx.from),gas:n,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:F.toTokenAmount};return F.swapTransaction=void 0,F.approvalTransaction=a,a}catch(e){z.goBack(),b.showError("Failed to create approval transaction"),F.approvalTransaction=void 0,F.swapTransaction=void 0,F.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:r}=this.getParams(),i=F.sourceToken,o=F.toToken;if(!t||!r||!i||!o)return;let n=N.parseUnits(r,i.decimals).toString();try{let r=await m.generateSwapCalldata({projectId:p.state.projectId,userAddress:t,from:i.address,to:o.address,amount:n}),a=i.address===e,s=BigInt(r.tx.eip155.gas),c=BigInt(r.tx.eip155.gasPrice),u={data:r.tx.data,to:l.getPlainAddress(r.tx.to),gas:s,gasPrice:c,value:a?BigInt(n):BigInt("0"),toAmount:F.toTokenAmount};return F.gasPriceInUSD=W.getGasPriceInUSD(F.networkPrice,s,c),F.approvalTransaction=void 0,F.swapTransaction=u,u}catch(e){z.goBack(),b.showError("Failed to create transaction"),F.approvalTransaction=void 0,F.swapTransaction=void 0,F.fetchError=!0;return}},async sendTransactionForApproval(e){let{fromAddress:t}=this.getParams();F.transactionLoading=!0,z.pushTransactionStack({view:null,goBack:!0});try{await N.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),F.approvalTransaction=void 0,F.transactionLoading=!1,this.swapTokens()}catch(e){F.transactionError=e?.shortMessage,F.transactionLoading=!1}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:r}=this.getParams();F.transactionLoading=!0,z.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){Z.resetState()}});try{let i=`Swapped ${F.sourceToken?.symbol} to ${d.C6.formatNumberToLocalString(r,3)} ${F.toToken?.symbol}!`,o=[F.sourceToken?.address,F.toToken?.address].join(","),n=await N.sendTransaction({address:t,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return F.transactionLoading=!1,b.showSuccess(i),Z.resetState(),Z.getMyTokensWithBalance(o),n}catch(e){F.transactionError=e?.shortMessage,F.transactionLoading=!1,b.showError(e?.shortMessage||"Transaction error");return}},hasInsufficientToken(e,t){let r=W.isInsufficientSourceTokenForSwap(e,t,F.myTokensWithBalance),i=W.isInsufficientNetworkTokenForGas(F.networkBalanceInUSD,F.gasPriceInUSD);return i||r},setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=this.getParams();e&&t&&(F.gasPriceInUSD=W.getGasPriceInUSD(F.networkPrice,BigInt(F.gasFee),BigInt(15e4)),F.priceImpact=W.getPriceImpact({sourceTokenAmount:F.sourceTokenAmount,sourceTokenPriceInUSD:F.sourceTokenPriceInUSD,toTokenPriceInUSD:F.toTokenPriceInUSD,toTokenAmount:F.toTokenAmount}),F.maxSlippage=W.getMaxSlippage(F.slippage,F.toTokenAmount),F.providerFee=W.getProviderFee(F.sourceTokenAmount))}},V=(0,o.sj)({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),q={state:V,subscribe:e=>(0,o.Ld)(V,()=>e(V)),subscribeKey:(e,t)=>(0,i.VW)(V,e,t),setIsConnected(e){V.isConnected=e},setCaipAddress(e){V.caipAddress=e,V.address=e?l.getPlainAddress(e):void 0},setBalance(e,t){V.balance=e,V.balanceSymbol=t},setProfileName(e){V.profileName=e},setProfileImage(e){V.profileImage=e},setAddressExplorerUrl(e){V.addressExplorerUrl=e},setSmartAccountDeployed(e){V.smartAccountDeployed=e},setCurrentTab(e){V.currentTab=e},setTokenBalance(e){e&&(V.tokenBalance=(0,o.iH)(e))},setConnectedWalletInfo(e){V.connectedWalletInfo=e},setPreferredAccountType(e){V.preferredAccountType=e},setSocialProvider(e){e&&(V.socialProvider=e)},setSocialWindow(e){e&&(V.socialWindow=(0,o.iH)(e))},async fetchTokenBalance(){let e=U.state.caipNetwork?.id;try{if(V.address&&e){let t=await m.getBalance(V.address,e),r=t.balances.filter(e=>"0"!==e.quantity.decimals);this.setTokenBalance(r),Z.setBalances(L.mapBalancesToSwapTokens(t.balances))}}catch(e){b.showError("Failed to fetch token balance")}},resetAccount(){V.isConnected=!1,V.smartAccountDeployed=!1,V.currentTab=0,V.caipAddress=void 0,V.address=void 0,V.balance=void 0,V.balanceSymbol=void 0,V.profileName=void 0,V.profileImage=void 0,V.addressExplorerUrl=void 0,V.tokenBalance=[],V.connectedWalletInfo=void 0,V.preferredAccountType=void 0,V.socialProvider=void 0,V.socialWindow=void 0}},Y=(0,o.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),G={state:Y,subscribeNetworkImages:e=>(0,o.Ld)(Y.networkImages,()=>e(Y.networkImages)),subscribeKey:(e,t)=>(0,i.VW)(Y,e,t),subscribe:e=>(0,o.Ld)(Y,()=>e(Y)),setWalletImage(e,t){Y.walletImages[e]=t},setNetworkImage(e,t){Y.networkImages[e]=t},setConnectorImage(e,t){Y.connectorImages[e]=t},setTokenImage(e,t){Y.tokenImages[e]=t},setCurrencyImage(e,t){Y.currencyImages[e]=t}},K=(0,o.sj)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),X={state:K,subscribe:e=>(0,o.Ld)(K,()=>e(K)),setThemeMode(e){K.themeMode=e;try{let t=Q.getAuthConnector();if(t){let r=X.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:(0,d.tU)(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){K.themeVariables={...K.themeVariables,...e};try{let e=Q.getAuthConnector();if(e){let t=X.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,d.tU)(K.themeVariables,K.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,o.CO)(K)},J=(0,o.sj)({connectors:[]}),Q={state:J,subscribeKey:(e,t)=>(0,i.VW)(J,e,t),setConnectors(e){J.connectors=e.map(e=>(0,o.iH)(e))},addConnector(e){if(J.connectors.push((0,o.iH)(e)),"w3mAuth"===e.id){let t=(0,o.CO)(p.state),r=X.getSnapshot().themeMode,i=X.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId}),e.provider.syncTheme({themeMode:r,themeVariables:i,w3mThemeVariables:(0,d.tU)(i,r)})}},getAuthConnector:()=>J.connectors.find(e=>"AUTH"===e.type),getAnnouncedConnectorRdns:()=>J.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>J.connectors,getConnector:(e,t)=>J.connectors.find(r=>r.explorerId===e||r.info?.rdns===t)},ee=l.getApiUrl(),et=new u({baseUrl:ee}),er=(0,o.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),ei={state:er,subscribeKey:(e,t)=>(0,i.VW)(er,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=p.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${et.baseUrl}/getWalletImage/${e}`,r=await et.getBlob({path:t,headers:ei._getApiHeaders()});G.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${et.baseUrl}/public/getAssetImage/${e}`,r=await et.getBlob({path:t,headers:ei._getApiHeaders()});G.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${et.baseUrl}/public/getAssetImage/${e}`,r=await et.getBlob({path:t,headers:ei._getApiHeaders()});G.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${et.baseUrl}/public/getCurrencyImage/${e}`,r=await et.getBlob({path:t,headers:ei._getApiHeaders()});G.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${et.baseUrl}/public/getTokenImage/${e}`,r=await et.getBlob({path:t,headers:ei._getApiHeaders()});G.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=U.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>ei._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=Q.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>ei._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>ei._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>ei._fetchTokenImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=p.state;if(e?.length){let{data:t}=await et.get({path:"/getWallets",headers:ei._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>ei._fetchWalletImage(e))),er.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=p.state,i=[...t??[],...r??[]].filter(Boolean),{data:o,count:n}=await et.get({path:"/getWallets",headers:ei._getApiHeaders(),params:{page:"1",chains:U.state.caipNetwork?.id,entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=S.getRecentWallets(),s=o.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>ei._fetchWalletImage(e))),er.recommended=o,er.count=n??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=p.state,o=[...er.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:n,count:a}=await et.get({path:"/getWallets",headers:ei._getApiHeaders(),params:{page:String(e),entries:"40",chains:U.state.caipNetwork?.id,include:t?.join(","),exclude:o.join(",")}}),s=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>ei._fetchWalletImage(e)),l.wait(300)]),er.wallets=[...er.wallets,...n],er.count=a>er.count?a:er.count,er.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=p.state;er.search=[];let{data:i}=await et.get({path:"/getWallets",headers:ei._getApiHeaders(),params:{page:"1",entries:"100",search:e?.trim(),chains:U.state.caipNetwork?.id,include:t?.join(","),exclude:r?.join(",")}}),o=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...o.map(e=>ei._fetchWalletImage(e)),l.wait(300)]),er.search=i},async reFetchWallets(){er.page=1,er.wallets=[],await ei.fetchFeaturedWallets(),await ei.fetchRecommendedWallets()},prefetch(){let e=[ei.fetchFeaturedWallets(),ei.fetchRecommendedWallets(),ei.fetchNetworkImages(),ei.fetchConnectorImages()];void 0===p.state.enableAnalytics&&e.push(ei.fetchAnalyticsConfig()),er.prefetchPromise=Promise.race([Promise.allSettled(e),l.wait(3e3)])},async fetchAnalyticsConfig(){let{isAnalyticsEnabled:e}=await et.get({path:"/getAnalyticsConfig",headers:ei._getApiHeaders()});p.setEnableAnalytics(e)}},eo=(0,o.sj)({loading:!1,open:!1}),en={state:eo,subscribe:e=>(0,o.Ld)(eo,()=>e(eo)),subscribeKey:(e,t)=>(0,i.VW)(eo,e,t),async open(e){await ei.state.prefetchPromise;let t=q.state.isConnected;e?.view?z.reset(e.view):t?z.reset("Account"):z.reset("Connect"),eo.open=!0,M.set({open:!0}),$.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){let e=q.state.isConnected;eo.open=!1,M.set({open:!1}),$.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){eo.loading=e,M.set({loading:e})}},ea={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},es={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},el=(0,o.sj)({providers:a,selectedProvider:null,error:null,purchaseCurrency:ea,paymentCurrency:es,purchaseCurrencies:[ea],paymentCurrencies:[],quotesLoading:!1}),ec={state:el,subscribe:e=>(0,o.Ld)(el,()=>e(el)),subscribeKey:(e,t)=>(0,i.VW)(el,e,t),setSelectedProvider(e){el.selectedProvider=e},setPurchaseCurrency(e){el.purchaseCurrency=e},setPaymentCurrency(e){el.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){let e=await m.getOnrampOptions();el.purchaseCurrencies=e.purchaseCurrencies,el.paymentCurrencies=e.paymentCurrencies,el.paymentCurrency=e.paymentCurrencies[0]||es,el.purchaseCurrency=e.purchaseCurrencies[0]||ea,await ei.fetchCurrencyImages(e.paymentCurrencies.map(e=>e.id)),await ei.fetchTokenImages(e.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){el.quotesLoading=!0;try{let e=await m.getOnrampQuote({purchaseCurrency:el.purchaseCurrency,paymentCurrency:el.paymentCurrency,amount:el.paymentAmount?.toString()||"0",network:el.purchaseCurrency?.symbol});return el.quotesLoading=!1,el.purchaseAmount=Number(e.purchaseAmount.amount),e}catch(e){return el.error=e.message,el.quotesLoading=!1,null}finally{el.quotesLoading=!1}},resetState(){el.providers=a,el.selectedProvider=null,el.error=null,el.purchaseCurrency=ea,el.paymentCurrency=es,el.purchaseCurrencies=[ea],el.paymentCurrencies=[],el.paymentAmount=void 0,el.purchaseAmount=void 0,el.quotesLoading=!1}},eu=(0,o.sj)({loading:!1}),ed={state:eu,subscribe:e=>(0,o.Ld)(eu,()=>e(eu)),subscribeKey:(e,t)=>(0,i.VW)(eu,e,t),setToken(e){e&&(eu.token=(0,o.iH)(e))},setTokenAmount(e){eu.sendTokenAmount=e},setReceiverAddress(e){eu.receiverAddress=e},setReceiverProfileImageUrl(e){eu.receiverProfileImageUrl=e},setReceiverProfileName(e){eu.receiverProfileName=e},setGasPrice(e){eu.gasPrice=e},setGasPriceInUsd(e){eu.gasPriceInUSD=e},setLoading(e){eu.loading=e},sendToken(){this.state.token?.address&&this.state.sendTokenAmount&&this.state.receiverAddress?this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals}):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&this.state.token?.quantity.decimals&&this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals})},async sendNativeToken(e){z.pushTransactionStack({view:"Account",goBack:!1});let t=e.receiverAddress,r=q.state.address,i=N.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{await N.sendTransaction({to:t,address:r,data:"0x",value:i,gasPrice:e.gasPrice}),b.showSuccess("Transaction started"),this.resetSend()}catch(e){b.showError("Something went wrong")}},async sendERC20Token(e){z.pushTransactionStack({view:"Account",goBack:!1});let t=N.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{q.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress&&(await N.writeContract({fromAddress:q.state.address,tokenAddress:l.getPlainAddress(e.tokenAddress),receiverAddress:e.receiverAddress,tokenAmount:t,method:"transfer",abi:d.em}),b.showSuccess("Transaction started"),this.resetSend())}catch(e){b.showError("Something went wrong")}},resetSend(){eu.token=void 0,eu.sendTokenAmount=void 0,eu.receiverAddress=void 0,eu.receiverProfileImageUrl=void 0,eu.receiverProfileName=void 0,eu.loading=!1}},eh=(0,o.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ep={state:eh,subscribe:e=>(0,o.Ld)(eh,()=>e(eh)),subscribeKey:(e,t)=>(0,i.VW)(eh,e,t),showTooltip({message:e,triggerRect:t,variant:r}){eh.open=!0,eh.message=e,eh.triggerRect=t,eh.variant=r},hide(){eh.open=!1,eh.message="",eh.triggerRect={width:0,height:0,top:0,left:0}}},eg={convertEVMChainIdToCoinType(e){if(e>=2147483648)throw Error("Invalid chainId");return(2147483648|e)>>>0}},ef=(0,o.sj)({suggestions:[],loading:!1}),ew={state:ef,subscribe:e=>(0,o.Ld)(ef,()=>e(ef)),subscribeKey:(e,t)=>(0,i.VW)(ef,e,t),async resolveName(e){try{return await m.lookupEnsName(e)}catch(e){throw Error(e?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await m.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{ef.loading=!0,ef.suggestions=[];let t=await m.getEnsNameSuggestions(e);return ef.suggestions=t.suggestions.map(e=>({...e,name:e.name.replace(d.bq.WC_NAME_SUFFIX,"")}))||[],ef.suggestions}catch(t){let e=this.parseEnsApiError(t,"Error fetching name suggestions");throw Error(e)}finally{ef.loading=!1}},async getNamesForAddress(e){try{let t=U.state.caipNetwork;if(!t)return[];let r=await m.reverseLookupEnsName({address:e});return r}catch(t){let e=this.parseEnsApiError(t,"Error fetching names for address");throw Error(e)}},async registerName(e){let t=U.state.caipNetwork;if(!t)throw Error("Network not found");let r=q.state.address,i=Q.getAuthConnector();if(!r||!i)throw Error("Address or auth connector not found");if(!this.isAllowedToRegisterName())throw Error("Not allowed to register name");ef.loading=!0;try{let i=JSON.stringify({name:`${e}${d.bq.WC_NAME_SUFFIX}`,attributes:{},timestamp:Math.floor(Date.now()/1e3)});z.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){ef.loading=!1}});let o=await N.signMessage(i),n=d.p1.caipNetworkIdToNumber(t.id);if(!n)throw Error("Network not found");let a=eg.convertEVMChainIdToCoinType(n);await m.registerEnsName({coinType:a,address:r,signature:o,message:i}),q.setProfileName(`${e}${d.bq.WC_NAME_SUFFIX}`),z.replace("RegisterAccountNameSuccess")}catch(r){let t=this.parseEnsApiError(r,`Error registering name ${e}`);throw z.replace("RegisterAccountName"),Error(t)}finally{ef.loading=!1}},validateName:e=>/^[a-zA-Z0-9-]{4,}$/u.test(e),parseEnsApiError:(e,t)=>e?.reasons?.[0]?.description||t,isAllowedToRegisterName(){let e=Q.getAuthConnector(),t=e?.provider.getEmail()||"",r=t.split("@")?.[1];return r&&d.bq.WC_NAMES_ALLOWED_DOMAINS.includes(r)}},em={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?G.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?G.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?G.state.connectorImages[e.imageId]:void 0},ev={goBackOrCloseModal(){z.state.history.length>1?z.goBack():en.close()},navigateAfterNetworkSwitch(){let{history:e}=z.state,t=e.findIndex(e=>"Networks"===e);t>=1?z.goBackToIndex(t-1):en.close()},navigateAfterPreferredAccountTypeSelect(){let{isSiweEnabled:e}=p.state,{profileName:t}=q.state;e?z.push("ConnectingSiwe"):t?z.push("Account"):z.push("ChooseAccountName")}}},15456:function(e,t,r){"use strict";var i=r(67133);"undefined"==typeof window||(window.Buffer||(window.Buffer=i.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}))},2098:function(e,t,r){"use strict";r.d(t,{bq:function(){return i},gk:function(){return n},CK:function(){return o}});let i={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.2.3"},o={ConnectorExplorerIds:{[i.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[i.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[i.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[i.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[i.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[i.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[i.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[i.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[i.INJECTED_CONNECTOR_ID]:"Browser Wallet",[i.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[i.COINBASE_CONNECTOR_ID]:"Coinbase",[i.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[i.LEDGER_CONNECTOR_ID]:"Ledger",[i.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[i.INJECTED_CONNECTOR_ID]:"INJECTED",[i.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[i.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[i.AUTH_CONNECTOR_ID]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},n={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${i.EIP155}:${e}`]=r}),t}}},54972:function(e,t,r){"use strict";r.d(t,{j1:function(){return o.j1},D4:function(){return iy}});var i,o=r(60969),n=r(94344),a=r(69307),s=r(88558),l=r(57173);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let c=e=>e??l.Ld;var u=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let d=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=o.AccountController.state.address,this.balanceVal=o.AccountController.state.balance,this.balanceSymbol=o.AccountController.state.balanceSymbol,this.profileName=o.AccountController.state.profileName,this.profileImage=o.AccountController.state.profileImage,this.network=o.NetworkController.state.caipNetwork,this.isUnsupportedChain=o.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),o.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),o.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=o.fz.getNetworkImage(this.network),t="show"===this.balance;return a.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${c(this.address)}
        profileName=${c(this.profileName)}
        networkSrc=${c(e)}
        avatarSrc=${c(this.profileImage)}
        balance=${t?o.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?o.IN.open({view:"UnsupportedChain"}):o.IN.open()}};u([(0,s.Cb)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,s.Cb)()],d.prototype,"balance",void 0),u([(0,s.Cb)()],d.prototype,"charsStart",void 0),u([(0,s.Cb)()],d.prototype,"charsEnd",void 0),u([(0,s.SB)()],d.prototype,"address",void 0),u([(0,s.SB)()],d.prototype,"balanceVal",void 0),u([(0,s.SB)()],d.prototype,"balanceSymbol",void 0),u([(0,s.SB)()],d.prototype,"profileName",void 0),u([(0,s.SB)()],d.prototype,"profileImage",void 0),u([(0,s.SB)()],d.prototype,"network",void 0),u([(0,s.SB)()],d.prototype,"isUnsupportedChain",void 0),d=u([(0,n.customElement)("w3m-account-button")],d);var h=a.iv`
  :host {
    display: block;
    width: max-content;
  }
`,p=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let g=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=o.AccountController.state.isConnected,this.isLoading=o.IN.state.loading,this.unsubscribe.push(o.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}),o.IN.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?a.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${c(this.balance)}
            .charsStart=${c(this.charsStart)}
            .charsEnd=${c(this.charsEnd)}
          >
          </w3m-account-button>
        `:a.dy`
          <w3m-connect-button
            size=${c(this.size)}
            label=${c(this.label)}
            loadingLabel=${c(this.loadingLabel)}
          ></w3m-connect-button>
        `}};g.styles=h,p([(0,s.Cb)({type:Boolean})],g.prototype,"disabled",void 0),p([(0,s.Cb)()],g.prototype,"balance",void 0),p([(0,s.Cb)()],g.prototype,"size",void 0),p([(0,s.Cb)()],g.prototype,"label",void 0),p([(0,s.Cb)()],g.prototype,"loadingLabel",void 0),p([(0,s.Cb)()],g.prototype,"charsStart",void 0),p([(0,s.Cb)()],g.prototype,"charsEnd",void 0),p([(0,s.SB)()],g.prototype,"isAccount",void 0),p([(0,s.SB)()],g.prototype,"isLoading",void 0),g=p([(0,n.customElement)("w3m-button")],g);var f=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let w=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=o.IN.state.open,this.loading=o.IN.state.loading,this.unsubscribe.push(o.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return a.dy`
      <wui-connect-button
        size=${c(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?o.IN.close():this.loading||o.IN.open()}};f([(0,s.Cb)()],w.prototype,"size",void 0),f([(0,s.Cb)()],w.prototype,"label",void 0),f([(0,s.Cb)()],w.prototype,"loadingLabel",void 0),f([(0,s.SB)()],w.prototype,"open",void 0),f([(0,s.SB)()],w.prototype,"loading",void 0),w=f([(0,n.customElement)("w3m-connect-button")],w),r(9448);var m=a.iv`
  :host {
    display: block;
    width: max-content;
  }
`,v=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let b=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=o.NetworkController.state.caipNetwork,this.connected=o.AccountController.state.isConnected,this.loading=o.IN.state.loading,this.isUnsupportedChain=o.NetworkController.state.isUnsupportedChain,this.unsubscribe.push(...[o.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),o.AccountController.subscribeKey("isConnected",e=>this.connected=e),o.IN.subscribeKey("loading",e=>this.loading=e),o.NetworkController.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${c(o.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(o.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),o.IN.open({view:"Networks"}))}};b.styles=m,v([(0,s.Cb)({type:Boolean})],b.prototype,"disabled",void 0),v([(0,s.SB)()],b.prototype,"network",void 0),v([(0,s.SB)()],b.prototype,"connected",void 0),v([(0,s.SB)()],b.prototype,"loading",void 0),v([(0,s.SB)()],b.prototype,"isUnsupportedChain",void 0),b=v([(0,n.customElement)("w3m-network-button")],b);var y=a.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,x=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let C=class extends a.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=o.RouterController.state.view,this.unsubscribe.push(o.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return a.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Account":return a.dy`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return a.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"AllWallets":return a.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return a.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return a.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return a.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return a.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return a.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return a.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return a.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return a.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return a.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return a.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return a.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return a.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"Networks":return a.dy`<w3m-networks-view></w3m-networks-view>`;case"RegisterAccountName":return a.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return a.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SwitchNetwork":return a.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"GetWallet":return a.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Transactions":return a.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return a.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return a.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return a.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return a.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return a.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return a.dy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return a.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return a.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return a.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return a.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"WalletReceive":return a.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return a.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"Swap":return a.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return a.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return a.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return a.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return a.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return a.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return a.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WhatIsANetwork":return a.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"WhatIsAWallet":return a.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`}}async onViewChange(e){o.fw.hide();let{history:t}=o.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};C.styles=y,x([(0,s.SB)()],C.prototype,"view",void 0),C=x([(0,n.customElement)("w3m-router")],C);var k=a.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,E=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let S={USD:"$",EUR:"€",GBP:"\xa3"},_=[100,250,500,1e3],A=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=o.AccountController.state.isConnected,this.loading=o.IN.state.loading,this.paymentCurrency=o.ph.state.paymentCurrency,this.paymentAmount=o.ph.state.paymentAmount,this.purchaseAmount=o.ph.state.purchaseAmount,this.quoteLoading=o.ph.state.quotesLoading,this.unsubscribe.push(...[o.AccountController.subscribeKey("isConnected",e=>{this.connected=e}),o.IN.subscribeKey("loading",e=>{this.loading=e}),o.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${_.map(e=>a.dy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${S[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?a.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:a.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||o.IN.open({view:"OnRampProviders"})}openModal(){o.IN.open({view:"Connect"})}async onPaymentAmountChange(e){o.ph.setPaymentAmount(Number(e.detail)),await o.ph.getQuote()}async selectPresetAmount(e){o.ph.setPaymentAmount(e),await o.ph.getQuote()}};A.styles=k,E([(0,s.Cb)({type:Boolean})],A.prototype,"disabled",void 0),E([(0,s.SB)()],A.prototype,"connected",void 0),E([(0,s.SB)()],A.prototype,"loading",void 0),E([(0,s.SB)()],A.prototype,"paymentCurrency",void 0),E([(0,s.SB)()],A.prototype,"paymentAmount",void 0),E([(0,s.SB)()],A.prototype,"purchaseAmount",void 0),E([(0,s.SB)()],A.prototype,"quoteLoading",void 0),A=E([(0,n.customElement)("w3m-onramp-widget")],A);var T=a.iv`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`,R=r(10108),$=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let I=class extends a.oi{constructor(){super(),this.usubscribe=[],this.networkImages=o.WM.state.networkImages,this.address=o.AccountController.state.address,this.profileImage=o.AccountController.state.profileImage,this.profileName=o.AccountController.state.profileName,this.network=o.NetworkController.state.caipNetwork,this.preferredAccountType=o.AccountController.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(...[o.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):o.IN.close()}),o.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)})])}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          .imageSrc=${this.profileImage||""}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${n.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${c(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=o.MO.getConnectedConnector(),t=o.ConnectorController.getAuthConnector(),r=o.a.isAllowedToRegisterName();return t&&"AUTH"===e&&!this.profileName&&r?a.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=o.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(o.j1.copyToClopboard(this.address),o.SnackController.showSuccess("Address copied"))}catch{o.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=o.NetworkController.checkIfSmartAccountEnabled(),t=o.MO.getConnectedConnector(),r=o.ConnectorController.getAuthConnector();return r&&"AUTH"===t&&e?(this.switched||(this.text=this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),a.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){o.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){let e=o.NetworkController.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==R.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&e?R.y_.ACCOUNT_TYPES.SMART_ACCOUNT:R.y_.ACCOUNT_TYPES.EOA,r=o.ConnectorController.getAuthConnector();r&&(this.loading=!0,o.IN.setLoading(!0),await r?.provider.setPreferredAccount(t),await o.ConnectionController.reconnectExternal(r),o.IN.setLoading(!1),this.text=t===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,o.Si.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&o.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await o.ConnectionController.disconnect(),o.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),o.IN.close()}catch{o.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),o.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};I.styles=T,$([(0,s.SB)()],I.prototype,"address",void 0),$([(0,s.SB)()],I.prototype,"profileImage",void 0),$([(0,s.SB)()],I.prototype,"profileName",void 0),$([(0,s.SB)()],I.prototype,"network",void 0),$([(0,s.SB)()],I.prototype,"preferredAccountType",void 0),$([(0,s.SB)()],I.prototype,"disconnecting",void 0),$([(0,s.SB)()],I.prototype,"loading",void 0),$([(0,s.SB)()],I.prototype,"switched",void 0),$([(0,s.SB)()],I.prototype,"text",void 0),I=$([(0,n.customElement)("w3m-account-settings-view")],I);let P=class extends a.oi{render(){let e=o.MO.getConnectedConnector();return a.dy`
      ${o.OptionsController.state.enableWalletFeatures&&"AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return a.dy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return a.dy`<w3m-account-default-widget></w3m-account-default-widget>`}};P=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-view")],P);var O=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let N=class extends a.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=o.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return a.dy`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?a.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:a.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return o.j1.isMobile()?a.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){o.RouterController.push("ConnectingWalletConnect")}};O([(0,s.SB)()],N.prototype,"search",void 0),N=O([(0,n.customElement)("w3m-all-wallets-view")],N);var j=a.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,M=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let D=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=o.ph.state.selectedProvider,this.uri=o.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[o.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})]),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return a.dy`
      <wui-flex
        data-error=${c(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${c(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=o.AccountController.state.address,t=o.OptionsController.state.projectId;if(!e)throw Error("No address found");let r=await o.Lr.fetchTransactions({account:e,onramp:"coinbase",projectId:t}),i=r.data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status);i.length?(clearInterval(this.intervalId),o.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){o.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,o.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?a.dy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=o.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return a.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){o.SnackController.showError("No link found"),o.RouterController.goBack();return}try{o.j1.copyToClopboard(this.selectedOnRampProvider.url),o.SnackController.showSuccess("Link copied")}catch{o.SnackController.showError("Failed to copy")}}};D.styles=j,M([(0,s.SB)()],D.prototype,"intervalId",void 0),M([(0,s.SB)()],D.prototype,"selectedOnRampProvider",void 0),M([(0,s.SB)()],D.prototype,"uri",void 0),M([(0,s.SB)()],D.prototype,"ready",void 0),M([(0,s.SB)()],D.prototype,"showRetry",void 0),M([(0,s.SB)()],D.prototype,"buffering",void 0),M([(0,s.SB)()],D.prototype,"error",void 0),M([(0,s.SB)()],D.prototype,"startTime",void 0),M([(0,s.Cb)({type:Boolean})],D.prototype,"isMobile",void 0),M([(0,s.Cb)()],D.prototype,"onRetry",void 0),D=M([(0,n.customElement)("w3m-buy-in-progress-view")],D);var U=a.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`,L=r(50808),B=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let z=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){let e=this.connectors.find(e=>"AUTH"===e.type);return e?.socials?e?.showWallets?a.dy`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
            <w3m-connect-recent-widget></w3m-connect-recent-widget>
            <w3m-connect-announced-widget></w3m-connect-announced-widget>
            <w3m-connect-injected-widget></w3m-connect-injected-widget>
            <w3m-connect-coinbase-widget></w3m-connect-coinbase-widget>
            <w3m-connect-custom-widget></w3m-connect-custom-widget>
            <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
            <wui-flex class="all-wallets" .margin=${["xs","0","0","0"]}>
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:a.dy` <wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:a.dy`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){o.RouterController.push("ConnectWallets")}};z.styles=U,B([(0,L.S)()],z.prototype,"connectors",void 0),z=B([(0,n.customElement)("w3m-connect-view")],z);var W=a.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,H=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};class F extends a.oi{constructor(){super(),this.wallet=o.RouterController.state.data?.wallet,this.connector=o.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=o.fz.getWalletImage(this.wallet)??o.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=o.ConnectionController.state.wcUri,this.error=o.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[o.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),o.ConnectionController.subscribeKey("wcError",e=>this.error=e),o.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),a.dy`
      <wui-flex
        data-error=${c(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${c(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?a.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(o.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=o.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return a.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(o.j1.copyToClopboard(this.uri),o.SnackController.showSuccess("Link copied"))}catch{o.SnackController.showError("Failed to copy")}}}F.styles=W,H([(0,s.SB)()],F.prototype,"uri",void 0),H([(0,s.SB)()],F.prototype,"error",void 0),H([(0,s.SB)()],F.prototype,"ready",void 0),H([(0,s.SB)()],F.prototype,"showRetry",void 0),H([(0,s.SB)()],F.prototype,"buffering",void 0),H([(0,s.Cb)({type:Boolean})],F.prototype,"isMobile",void 0),H([(0,s.Cb)()],F.prototype,"onRetry",void 0);let Z=class extends F{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&o.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await o.ConnectionController.connectExternal(this.connector),o.OptionsController.state.isSiweEnabled?o.RouterController.push("ConnectingSiwe"):o.IN.close(),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Z=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-external-view")],Z);var V=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let q=class extends a.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=o.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),o.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),a.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):a.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=o.ConnectionController.state;if(e||o.j1.isPairingExpired(t)){if(o.ConnectionController.connectWalletConnect(),this.wallet){let e=o.fz.getWalletImage(this.wallet);e&&o.MO.setConnectedWalletImageUrl(e)}else{let e=o.ConnectorController.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),r=o.fz.getConnectorImage(t);r&&o.MO.setConnectedWalletImageUrl(r)}if(await o.ConnectionController.state.wcPromise,this.finalizeConnection(),o.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await Promise.all([r.e(3138),r.e(3379),r.e(4840)]).then(r.bind(r,50160));"success"===e.state.status?o.IN.close():o.RouterController.push("ConnectingSiwe")}else o.IN.close()}}catch(e){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),o.ConnectionController.setWcError(!0),o.j1.isAllowedRetry(this.lastRetry)&&(o.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=o.ConnectionController.state;e&&o.MO.setWalletConnectDeepLink(e),t&&o.MO.setWeb3ModalRecent(t),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,a=i?.map(({injected_id:e})=>e).filter(Boolean),s=n?[n]:a??[],l=s.length,c=o.ConnectionController.checkInstalled(s),u=l&&c,d=t&&!o.j1.isMobile();u&&this.platforms.push("browser"),e&&this.platforms.push(o.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!u&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return a.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return a.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return a.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return a.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return a.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return a.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?a.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};V([(0,s.SB)()],q.prototype,"platform",void 0),V([(0,s.SB)()],q.prototype,"platforms",void 0),q=V([(0,n.customElement)("w3m-connecting-wc-view")],q);var Y=a.iv`
  .continue-button-container {
    width: 100%;
  }
`,G=r(58376),K=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends a.oi{constructor(){super(...arguments),this.loading=!1}render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{o.j1.openHref(G.UE.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a.dy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${()=>o.RouterController.push("RegisterAccountName")}
        >Choose name
      </wui-button>
    </wui-flex>`}};X.styles=Y,K([(0,s.SB)()],X.prototype,"loading",void 0),X=K([(0,n.customElement)("w3m-choose-account-name-view")],X);let J=class extends a.oi{constructor(){super(...arguments),this.wallet=o.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return a.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?a.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?a.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?a.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?a.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&o.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&o.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.j1.openHref(this.wallet.homepage,"_blank")}};J=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-downloads-view")],J);let Q=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{o.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=o.ApiController.state,{customWallets:r}=o.OptionsController.state,i=[...t,...r??[],...e].slice(0,4);return i.map(e=>a.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${c(o.fz.getWalletImage(e))}
          @click=${()=>{o.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};Q=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-get-wallet-view")],Q);var ee=a.iv`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:et}=l._$LH,er=e=>void 0===e.strings;class ei{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eo=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),eo(e,t);return!0},en=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},ea=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),ec(t)}};function es(e){void 0!==this._$AN?(en(this),this._$AM=e,ea(this)):this._$AM=e}function el(e,t=!1,r=0){let i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)eo(i[e],!1),en(i[e]);else null!=i&&(eo(i,!1),en(i))}else eo(this,e)}}let ec=e=>{2==e.type&&(e._$AP??=el,e._$AQ??=es)};class eu extends ei{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ea(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(eo(this,e),en(this))}setValue(e){if(er(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ed=()=>new eh;class eh{}let ep=new WeakMap,eg=(i=class extends eu{render(e){return l.Ld}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),l.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,r=ep.get(t);void 0===r&&(r=new WeakMap,ep.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?ep.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...e)=>({_$litDirective$:i,values:e}));var ef=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ew=class extends a.oi{constructor(){super(),this.formRef=ed(),this.usubscribe=[],this.name="",this.error="",this.loading=o.a.state.loading,this.suggestions=o.a.state.suggestions,this.registered=!1,this.onDebouncedNameInputChange=o.j1.debounce(e=>{o.a.validateName(e)?(this.error="",this.name=e,o.a.getSuggestions(e),o.a.isNameRegistered(e).then(e=>{this.registered=e})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(...[o.a.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading})])}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${eg(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.isAllowedToSubmit();return e?a.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?a.dy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?a.dy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:a.dy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(e=>e.name!==this.name):[];return a.dy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(e=>this.availableNameTemplate(e.name))}
    </wui-flex>`}availableNameTemplate(e){return a.dy` <wui-flex
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&o.a.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;await o.a.registerName(this.name)}catch(e){o.SnackController.showError(e.message)}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};ew.styles=ee,ef([(0,s.Cb)()],ew.prototype,"errorMessage",void 0),ef([(0,s.SB)()],ew.prototype,"name",void 0),ef([(0,s.SB)()],ew.prototype,"error",void 0),ef([(0,s.SB)()],ew.prototype,"loading",void 0),ef([(0,s.SB)()],ew.prototype,"suggestions",void 0),ef([(0,s.SB)()],ew.prototype,"registered",void 0),ew=ef([(0,n.customElement)("w3m-register-account-name-view")],ew);var em=a.iv`
  .continue-button-container {
    width: 100%;
  }
`;let ev=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{o.j1.openHref(G.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a.dy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){o.RouterController.replace("Account")}};ev.styles=em,ev=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-register-account-name-success-view")],ev);var eb=a.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,ey=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ex=class extends a.oi{constructor(){super(),this.network=o.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return a.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${c(o.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:a.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=o.MO.getConnectedConnector(),t=o.ConnectorController.getAuthConnector();return t&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=o.MO.getConnectedConnector(),t=o.ConnectorController.getAuthConnector();return t&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await o.NetworkController.switchActiveNetwork(this.network),o.OptionsController.state.isSiweEnabled||o._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ex.styles=eb,ey([(0,s.SB)()],ex.prototype,"showRetry",void 0),ey([(0,s.SB)()],ex.prototype,"error",void 0),ex=ey([(0,n.customElement)("w3m-network-switch-view")],ex);var eC=a.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,ek=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let eE=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=o.NetworkController.state.caipNetwork,this.unsubscribe.push(o.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){o.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),o.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=o.NetworkController.state,i=o.j1.sortRequestedNetworks(e,t);return i?.map(t=>a.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${c(o.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=o.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=o.NetworkController.state,{data:a}=o.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await o.NetworkController.switchActiveNetwork(e),o._4.navigateAfterNetworkSwitch()):i&&o.RouterController.push("SwitchNetwork",{...a,network:e}):t||(o.NetworkController.setCaipNetwork(e),o.RouterController.push("Connect"))}};eE.styles=eC,ek([(0,s.SB)()],eE.prototype,"caipNetwork",void 0),eE=ek([(0,n.customElement)("w3m-networks-view")],eE);var eS=a.iv`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,e_=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let eA=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=o.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=o.sl.state.coinbaseTransactions,this.tokenImages=o.WM.state.tokenImages,this.unsubscribe.push(...[o.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),o.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},o.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})]),o.sl.clearCursor(),this.fetchTransactions()}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=G.Em.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;let o=i?.icon?.url||this.tokenImages?.[i.symbol||""];return a.dy`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${c(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${c(o)}
          symbol=${c(i.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){let e=Object.keys(this.coinbaseTransactions).sort().reverse();return e.map(e=>{let t=parseInt(e,10),r=Array(12).fill(null).map((e,t)=>t).reverse();return r.map(e=>{let r=n.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?a.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=o.AccountController.state.address,t=o.OptionsController.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await o.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date,t=this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[],r=t.filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status);if(0===r.length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=o.AccountController.state.address;await o.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill(a.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};eA.styles=eS,e_([(0,s.SB)()],eA.prototype,"selectedOnRampProvider",void 0),e_([(0,s.SB)()],eA.prototype,"loading",void 0),e_([(0,s.SB)()],eA.prototype,"coinbaseTransactions",void 0),e_([(0,s.SB)()],eA.prototype,"tokenImages",void 0),eA=e_([(0,n.customElement)("w3m-onramp-activity-view")],eA);var eT=a.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eR=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let e$=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=o.ph.state.paymentCurrency,this.currencies=o.ph.state.paymentCurrencies,this.currencyImages=o.WM.state.currencyImages,this.unsubscribe.push(...[o.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),o.WM.subscribeKey("currencyImages",e=>this.currencyImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>a.dy`
        <wui-list-item
          imageSrc=${c(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(o.ph.setPaymentCurrency(e),o.IN.close())}};e$.styles=eT,eR([(0,s.SB)()],e$.prototype,"selectedCurrency",void 0),eR([(0,s.SB)()],e$.prototype,"currencies",void 0),eR([(0,s.SB)()],e$.prototype,"currencyImages",void 0),e$=eR([(0,n.customElement)("w3m-onramp-fiat-select-view")],e$);var eI=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let eP=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.providers=o.ph.state.providers,this.unsubscribe.push(...[o.ph.subscribeKey("providers",e=>{this.providers=e})])}firstUpdated(){let e=this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url));Promise.all(e).then(e=>{this.providers=this.providers.map((t,r)=>({...t,url:e[r]||""}))})}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>a.dy`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){o.ph.setSelectedProvider(e),o.RouterController.push("BuyInProgress"),o.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){let e=o.AccountController.state.address,t=o.NetworkController.state.caipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let r=o.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??o.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=o.ph.state.purchaseCurrency,n=i?[i.symbol]:o.ph.state.purchaseCurrencies.map(e=>e.symbol);return await o.Lr.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:o.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:n}],partnerUserId:e,purchaseAmount:o.ph.state.purchaseAmount})}};eI([(0,s.SB)()],eP.prototype,"providers",void 0),eP=eI([(0,n.customElement)("w3m-onramp-providers-view")],eP);var eO=a.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eN=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ej=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=o.ph.state.purchaseCurrencies,this.tokens=o.ph.state.purchaseCurrencies,this.tokenImages=o.WM.state.tokenImages,this.unsubscribe.push(...[o.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),o.WM.subscribeKey("tokenImages",e=>this.tokenImages=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>a.dy`
        <wui-list-item
          imageSrc=${c(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(o.ph.setPurchaseCurrency(e),o.IN.close())}};ej.styles=eO,eN([(0,s.SB)()],ej.prototype,"selectedCurrency",void 0),eN([(0,s.SB)()],ej.prototype,"tokens",void 0),eN([(0,s.SB)()],ej.prototype,"tokenImages",void 0),ej=eN([(0,n.customElement)("w3m-onramp-token-select-view")],ej);var eM=a.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,eD=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let eU=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=o.NetworkController.state.caipNetwork?.id,this.initialized=o.nY.state.initialized,this.loading=o.nY.state.loading,this.loadingPrices=o.nY.state.loadingPrices,this.sourceToken=o.nY.state.sourceToken,this.sourceTokenAmount=o.nY.state.sourceTokenAmount,this.sourceTokenPriceInUSD=o.nY.state.sourceTokenPriceInUSD,this.toToken=o.nY.state.toToken,this.toTokenAmount=o.nY.state.toTokenAmount,this.toTokenPriceInUSD=o.nY.state.toTokenPriceInUSD,this.inputError=o.nY.state.inputError,this.gasPriceInUSD=o.nY.state.gasPriceInUSD,this.transactionLoading=o.nY.state.transactionLoading,this.fetchError=o.nY.state.fetchError,this.onDebouncedGetSwapCalldata=o.j1.debounce(async()=>{await o.nY.swapTokens()},200),o.NetworkController.subscribeKey("caipNetwork",e=>{this.caipNetworkId!==e?.id&&(this.caipNetworkId=e?.id,o.nY.resetState(),o.nY.initializeState())}),this.unsubscribe.push(...[o.IN.subscribeKey("open",e=>{e||o.nY.resetState()}),o.RouterController.subscribeKey("view",e=>{e.includes("Swap")||o.nY.resetValues()}),o.nY.subscribe(e=>{this.initialized=e.initialized,this.loading=e.loading,this.loadingPrices=e.loadingPrices,this.transactionLoading=e.transactionLoading,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})])}firstUpdated(){o.nY.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{o.nY.getNetworkTokenPrice(),o.nY.getMyTokensWithBalance(),o.nY.swapTokens()},1e4)}templateSwap(){return a.dy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.initialized?this.inputError?this.inputError:"Review swap":"Swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return a.dy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return a.dy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){let r=o.nY.state.myTokensWithBalance?.find(e=>e?.address===t?.address),i="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,n="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,s=parseFloat(i)*n;return"toToken"===e&&(s-=this.gasPriceInUSD||0),a.dy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loading&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${r?.quantity?.numeric}
      .price=${r?.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){let r="sourceToken"===e?this.sourceToken:this.toToken,i=r?.address===o.bq.NATIVE_TOKEN_ADDRESS,n="0";if(!t){n="0",this.handleChangeAmount(e,n);return}if(!this.gasPriceInUSD){n=t,this.handleChangeAmount(e,n);return}let a=G.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),s=i?G.C6.bigNumber(t).minus(a):G.C6.bigNumber(t);this.handleChangeAmount(e,s.isGreaterThan(0)?s.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?a.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){o.nY.clearError(),"sourceToken"===e?o.nY.setSourceTokenAmount(t):o.nY.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){let e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loading||this.loadingPrices||this.transactionLoading,i=r||e||t||this.inputError;return a.dy` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${i}
        @click=${this.onSwapPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){o.nY.switchTokens()}onSwapPreview(){if(this.fetchError){o.nY.swapTokens();return}o.RouterController.push("SwapPreview")}};eU.styles=eM,eD([(0,s.SB)()],eU.prototype,"interval",void 0),eD([(0,s.SB)()],eU.prototype,"detailsOpen",void 0),eD([(0,s.SB)()],eU.prototype,"caipNetworkId",void 0),eD([(0,s.SB)()],eU.prototype,"initialized",void 0),eD([(0,s.SB)()],eU.prototype,"loading",void 0),eD([(0,s.SB)()],eU.prototype,"loadingPrices",void 0),eD([(0,s.SB)()],eU.prototype,"sourceToken",void 0),eD([(0,s.SB)()],eU.prototype,"sourceTokenAmount",void 0),eD([(0,s.SB)()],eU.prototype,"sourceTokenPriceInUSD",void 0),eD([(0,s.SB)()],eU.prototype,"toToken",void 0),eD([(0,s.SB)()],eU.prototype,"toTokenAmount",void 0),eD([(0,s.SB)()],eU.prototype,"toTokenPriceInUSD",void 0),eD([(0,s.SB)()],eU.prototype,"inputError",void 0),eD([(0,s.SB)()],eU.prototype,"gasPriceInUSD",void 0),eD([(0,s.SB)()],eU.prototype,"transactionLoading",void 0),eD([(0,s.SB)()],eU.prototype,"fetchError",void 0),eU=eD([(0,n.customElement)("w3m-swap-view")],eU);var eL=a.iv`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,eB=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ez=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=o.nY.state.approvalTransaction,this.swapTransaction=o.nY.state.swapTransaction,this.sourceToken=o.nY.state.sourceToken,this.sourceTokenAmount=o.nY.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=o.nY.state.sourceTokenPriceInUSD,this.toToken=o.nY.state.toToken,this.toTokenAmount=o.nY.state.toTokenAmount??"",this.toTokenPriceInUSD=o.nY.state.toTokenPriceInUSD,this.caipNetwork=o.NetworkController.state.caipNetwork,this.transactionLoading=o.nY.state.transactionLoading,this.balanceSymbol=o.AccountController.state.balanceSymbol,this.gasPriceInUSD=o.nY.state.gasPriceInUSD,this.inputError=o.nY.state.inputError,this.loading=o.nY.state.loading,this.unsubscribe.push(...[o.AccountController.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&o.RouterController.goBack()}),o.NetworkController.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),o.nY.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.transactionLoading=e.transactionLoading,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,this.loading=e.loading})])}firstUpdated(){o.nY.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{o.nY.getTransaction()},1e4)}templateSwap(){let e=`${n.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${n.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,r=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,i=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),o=n.UiHelperUtil.formatNumberToLocalString(r),s=n.UiHelperUtil.formatNumberToLocalString(i);return a.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${this.loading}
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading?a.dy`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>`:a.dy`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?a.dy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){o.RouterController.goBack()}onSendTransaction(){this.approvalTransaction?o.nY.sendTransactionForApproval(this.approvalTransaction):o.nY.sendTransactionForSwap(this.swapTransaction)}};ez.styles=eL,eB([(0,s.SB)()],ez.prototype,"interval",void 0),eB([(0,s.SB)()],ez.prototype,"detailsOpen",void 0),eB([(0,s.SB)()],ez.prototype,"approvalTransaction",void 0),eB([(0,s.SB)()],ez.prototype,"swapTransaction",void 0),eB([(0,s.SB)()],ez.prototype,"sourceToken",void 0),eB([(0,s.SB)()],ez.prototype,"sourceTokenAmount",void 0),eB([(0,s.SB)()],ez.prototype,"sourceTokenPriceInUSD",void 0),eB([(0,s.SB)()],ez.prototype,"toToken",void 0),eB([(0,s.SB)()],ez.prototype,"toTokenAmount",void 0),eB([(0,s.SB)()],ez.prototype,"toTokenPriceInUSD",void 0),eB([(0,s.SB)()],ez.prototype,"caipNetwork",void 0),eB([(0,s.SB)()],ez.prototype,"transactionLoading",void 0),eB([(0,s.SB)()],ez.prototype,"balanceSymbol",void 0),eB([(0,s.SB)()],ez.prototype,"gasPriceInUSD",void 0),eB([(0,s.SB)()],ez.prototype,"inputError",void 0),eB([(0,s.SB)()],ez.prototype,"loading",void 0),ez=eB([(0,n.customElement)("w3m-swap-preview-view")],ez);var eW=a.iv`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,eH=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let eF=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.targetToken=o.RouterController.state.data?.target,this.sourceToken=o.nY.state.sourceToken,this.sourceTokenAmount=o.nY.state.sourceTokenAmount,this.toToken=o.nY.state.toToken,this.myTokensWithBalance=o.nY.state.myTokensWithBalance,this.popularTokens=o.nY.state.popularTokens,this.searchValue="",this.unsubscribe.push(...[o.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})])}updated(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return a.dy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?o.nY.setSourceToken(e):(o.nY.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&o.nY.swapTokens()),o.RouterController.goBack()}templateSearchInput(){return a.dy`
      <wui-flex .padding=${["0","s","0","s"]} gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],r=this.filterTokensWithText(e,this.searchValue),i=this.filterTokensWithText(t,this.searchValue);return a.dy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${r?.length>0?a.dy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${r.map(e=>{let t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return a.dy`
                    <wui-token-list-item
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>
          ${i?.length>0?i.map(e=>a.dy`
                  <wui-token-list-item
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let e=o.nY.state.suggestedTokens?o.nY.state.suggestedTokens.slice(0,8):null;return e?a.dy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(e=>a.dy`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){let e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",n.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase()))}};eF.styles=eW,eH([(0,s.SB)()],eF.prototype,"interval",void 0),eH([(0,s.SB)()],eF.prototype,"targetToken",void 0),eH([(0,s.SB)()],eF.prototype,"sourceToken",void 0),eH([(0,s.SB)()],eF.prototype,"sourceTokenAmount",void 0),eH([(0,s.SB)()],eF.prototype,"toToken",void 0),eH([(0,s.SB)()],eF.prototype,"myTokensWithBalance",void 0),eH([(0,s.SB)()],eF.prototype,"popularTokens",void 0),eH([(0,s.SB)()],eF.prototype,"searchValue",void 0),eF=eH([(0,n.customElement)("w3m-swap-select-token-view")],eF);var eZ=a.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let eV=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};eV.styles=eZ,eV=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-transactions-view")],eV);let eq=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eY=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eq}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{o.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eY=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-network-view")],eY);let eG=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eK=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eG}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){o.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),o.RouterController.push("GetWallet")}};eK=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-wallet-view")],eK);let eX=class extends a.oi{render(){return a.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${o.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};eX=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-what-is-a-buy-view")],eX);var eJ=a.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,eQ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let e0=class extends a.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=o.RouterController.state.data?.email,this.authConnector=o.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?a.dy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:a.dy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?a.dy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=R.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=o.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";let e=o.ConnectorController.getAuthConnector();if(!e||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),o.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){o.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};e0.styles=eJ,eQ([(0,s.SB)()],e0.prototype,"loading",void 0),eQ([(0,s.SB)()],e0.prototype,"timeoutTimeLeft",void 0),eQ([(0,s.SB)()],e0.prototype,"error",void 0),e0=eQ([(0,n.customElement)("w3m-email-otp-widget")],e0);var e1=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let e2=class extends e0{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=o.AccountController.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=o.NetworkController.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await o.ConnectionController.connectExternal(this.authConnector),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),t&&!this.smartAccountDeployed?o.RouterController.push("UpgradeToSmartAccount"):o.IN.close()}}catch(e){throw o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(o.AccountController.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};e1([(0,s.SB)()],e2.prototype,"smartAccountDeployed",void 0),e2=e1([(0,n.customElement)("w3m-email-verify-otp-view")],e2);var e3=a.iv`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,e5=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let e4=class extends a.oi{constructor(){super(),this.email=o.RouterController.state.data?.email,this.authConnector=o.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),o.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){o.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),o.SnackController.showSuccess("Code email resent")}}catch(e){o.SnackController.showError(e)}finally{this.loading=!1}}};e4.styles=e3,e5([(0,s.SB)()],e4.prototype,"loading",void 0),e4=e5([(0,n.customElement)("w3m-email-verify-device-view")],e4);var e6=a.iv`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,e8=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let e9=class extends a.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(...[o.IN.subscribeKey("open",e=>{e||(this.onHideIframe(),o.RouterController.popTransactionStack())})])}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{let t=e?.[0]?.contentBoxSize,r=t?.[0]?.inlineSize;this.iframe.style.height="400px",r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 200px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),a.dy`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){let e=o.ConnectorController.getAuthConnector();if(e){let t=o.ThemeController.getSnapshot().themeMode,r=o.ThemeController.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:(0,G.tU)(r,t)})}}};e9.styles=e6,e8([(0,s.SB)()],e9.prototype,"ready",void 0),e9=e8([(0,n.customElement)("w3m-approve-transaction-view")],e9);let e7=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${o.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${o.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};e7=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-upgrade-wallet-view")],e7);var te=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tt=class extends a.oi{constructor(){super(...arguments),this.authConnector=o.ConnectorController.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,o.IN.setLoading(!0),await this.authConnector.provider.setPreferredAccount(R.y_.ACCOUNT_TYPES.SMART_ACCOUNT),await o.ConnectionController.reconnectExternal(this.authConnector),o.IN.setLoading(!1),this.loading=!1,o._4.navigateAfterPreferredAccountTypeSelect()}catch(e){o.SnackController.showError("Error upgrading to smart account")}}}render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{o.j1.openHref(G.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a.dy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a.dy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){o.RouterController.push("Account")}};te([(0,s.SB)()],tt.prototype,"authConnector",void 0),te([(0,s.SB)()],tt.prototype,"loading",void 0),tt=te([(0,n.customElement)("w3m-upgrade-to-smart-account-view")],tt);var tr=a.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,ti=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let to=class extends a.oi{constructor(){super(...arguments),this.formRef=ed(),this.initialEmail=o.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return a.dy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${eg(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${o.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=o.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let r=await t.provider.updateEmail({email:this.email});o.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===r.action?o.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):o.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){o.SnackController.showError(e),this.loading=!1}}};to.styles=tr,ti([(0,s.SB)()],to.prototype,"email",void 0),ti([(0,s.SB)()],to.prototype,"loading",void 0),to=ti([(0,n.customElement)("w3m-update-email-wallet-view")],to);let tn=class extends e0{constructor(){super(),this.email=o.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),o.RouterController.replace("UpdateEmailSecondaryOtp",o.RouterController.state.data))}catch(e){throw o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{o.RouterController.replace("UpdateEmailWallet",o.RouterController.state.data)}}};tn=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-update-email-primary-otp-view")],tn);let ta=class extends e0{constructor(){super(),this.email=o.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),o.RouterController.reset("Account"))}catch(e){throw o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{o.RouterController.replace("UpdateEmailWallet",o.RouterController.state.data)}}};ta=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-update-email-secondary-otp-view")],ta);var ts=a.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,tl=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tc=class extends a.oi{constructor(){super(...arguments),this.swapUnsupportedChain=o.RouterController.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return a.dy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?a.dy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:a.dy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=o.NetworkController.state,r=o.j1.sortRequestedNetworks(e,t),i=this.swapUnsupportedChain?r.filter(e=>o.bq.SWAP_SUPPORTED_NETWORKS.includes(e.id)):r;return i.map(e=>a.dy`
        <wui-list-network
          imageSrc=${c(o.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await o.ConnectionController.disconnect(),o.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),o.IN.close()}catch{o.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),o.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let{isConnected:t}=o.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=o.NetworkController.state,{data:a}=o.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await o.NetworkController.switchActiveNetwork(e),o._4.navigateAfterNetworkSwitch()):i&&o.RouterController.push("SwitchNetwork",{...a,network:e}):t||(o.NetworkController.setCaipNetwork(e),o.RouterController.push("Connect"))}};tc.styles=ts,tl([(0,s.SB)()],tc.prototype,"disconecting",void 0),tc=tl([(0,n.customElement)("w3m-unsupported-chain-view")],tc);var tu=a.iv`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,td=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let th=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.address=o.AccountController.state.address,this.profileName=o.AccountController.state.profileName,this.network=o.NetworkController.state.caipNetwork,this.preferredAccountType=o.AccountController.state.preferredAccountType,this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):o.SnackController.showError("Account not found")})],o.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=o.fz.getNetworkImage(this.network);return a.dy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${n.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${o.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=o.NetworkController.getRequestedCaipNetworks(),t=o.NetworkController.checkIfSmartAccountEnabled(),r=o.NetworkController.state.caipNetwork;if(this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?a.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[o.fz.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let i=e?.filter(e=>e?.imageId)?.slice(0,5),n=i.map(o.fz.getNetworkImage).filter(Boolean);return a.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){o.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(o.j1.copyToClopboard(this.address),o.SnackController.showSuccess("Address copied"))}catch{o.SnackController.showError("Failed to copy")}}};th.styles=tu,td([(0,s.SB)()],th.prototype,"address",void 0),td([(0,s.SB)()],th.prototype,"profileName",void 0),td([(0,s.SB)()],th.prototype,"network",void 0),td([(0,s.SB)()],th.prototype,"preferredAccountType",void 0),th=td([(0,n.customElement)("w3m-wallet-receive-view")],th);var tp=a.iv`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,tg=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tf=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=o.AccountController.state.preferredAccountType,this.unsubscribe.push(o.AccountController.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,caipNetwork:r}=o.NetworkController.state,i=o.NetworkController.checkIfSmartAccountEnabled(),n=o.j1.sortRequestedNetworks(e,t);if(i&&this.preferredAccountType===R.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;n=[r]}return n.map(e=>a.dy`
        <wui-list-network
          imageSrc=${c(o.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};tf.styles=tp,tg([(0,s.SB)()],tf.prototype,"preferredAccountType",void 0),tf=tg([(0,n.customElement)("w3m-wallet-compatible-networks-view")],tf);var tw=a.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,tm=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tv=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.token=o.Si.state.token,this.sendTokenAmount=o.Si.state.sendTokenAmount,this.receiverAddress=o.Si.state.receiverAddress,this.receiverProfileName=o.Si.state.receiverProfileName,this.loading=o.Si.state.loading,this.gasPriceInUSD=o.Si.state.gasPriceInUSD,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(...[o.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),a.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await o.nY.getNetworkTokenPrice();let e=await o.nY.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(o.Si.setGasPrice(e.gasPrice),o.Si.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){o.RouterController.push("WalletSendPreview")}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!o.j1.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){let e=this.sendTokenAmount*this.token.price;e||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}};tv.styles=tw,tm([(0,s.SB)()],tv.prototype,"token",void 0),tm([(0,s.SB)()],tv.prototype,"sendTokenAmount",void 0),tm([(0,s.SB)()],tv.prototype,"receiverAddress",void 0),tm([(0,s.SB)()],tv.prototype,"receiverProfileName",void 0),tm([(0,s.SB)()],tv.prototype,"loading",void 0),tm([(0,s.SB)()],tv.prototype,"gasPriceInUSD",void 0),tm([(0,s.SB)()],tv.prototype,"message",void 0),tv=tm([(0,n.customElement)("w3m-wallet-send-view")],tv);var tb=a.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,ty=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tx=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=o.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=o.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(...[o.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return a.dy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter(e=>e.chainId===o.NetworkController.state.caipNetwork?.id),this.search?this.filteredTokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,a.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>a.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):a.dy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){o.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){o.Si.setToken(e),o.Si.setTokenAmount(void 0),o.RouterController.goBack()}};tx.styles=tb,ty([(0,s.SB)()],tx.prototype,"tokenBalance",void 0),ty([(0,s.SB)()],tx.prototype,"tokens",void 0),ty([(0,s.SB)()],tx.prototype,"filteredTokens",void 0),ty([(0,s.SB)()],tx.prototype,"search",void 0),tx=ty([(0,n.customElement)("w3m-wallet-send-select-token-view")],tx);var tC=a.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,tk=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tE=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.token=o.Si.state.token,this.sendTokenAmount=o.Si.state.sendTokenAmount,this.receiverAddress=o.Si.state.receiverAddress,this.receiverProfileName=o.Si.state.receiverProfileName,this.receiverProfileImageUrl=o.Si.state.receiverProfileImageUrl,this.gasPriceInUSD=o.Si.state.gasPriceInUSD,this.caipNetwork=o.NetworkController.state.caipNetwork,this.unsubscribe.push(...[o.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),o.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?n.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?n.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):n.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price,t=e*this.sendTokenAmount;return a.dy`<wui-text variant="paragraph-400" color="fg-100"
        >$${t.toFixed(2)}</wui-text
      >`}return null}onSendClick(){o.Si.sendToken()}onCancelClick(){o.RouterController.goBack()}};tE.styles=tC,tk([(0,s.SB)()],tE.prototype,"token",void 0),tk([(0,s.SB)()],tE.prototype,"sendTokenAmount",void 0),tk([(0,s.SB)()],tE.prototype,"receiverAddress",void 0),tk([(0,s.SB)()],tE.prototype,"receiverProfileName",void 0),tk([(0,s.SB)()],tE.prototype,"receiverProfileImageUrl",void 0),tk([(0,s.SB)()],tE.prototype,"gasPriceInUSD",void 0),tk([(0,s.SB)()],tE.prototype,"caipNetwork",void 0),tE=tk([(0,n.customElement)("w3m-wallet-send-preview-view")],tE);var tS=a.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let t_=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};t_.styles=tS,t_=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connect-wallets-view")],t_);var tA=a.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let tT=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tT.styles=tA,tT=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connect-socials-view")],tT);var tR=a.iv`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,t$=r(62601);let tI={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:t$.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.com"};var tP=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tO=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=o.AccountController.state.socialProvider,this.socialWindow=o.AccountController.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=o.ConnectorController.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===tI.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),o.AccountController.setSocialWindow(void 0)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&o.MO.setConnectedSocialProvider(this.socialProvider),await o.ConnectionController.connectExternal(this.authConnector)}}catch(e){this.error=!0,this.updateMessage()}}else o.RouterController.goBack(),o.SnackController.showError("Untrusted Origin")}},this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&o.IN.state.open&&o.IN.close()})]),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return a.dy`
      <wui-flex
        data-error=${c(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${c(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=o.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return a.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};tO.styles=tR,tP([(0,s.SB)()],tO.prototype,"socialProvider",void 0),tP([(0,s.SB)()],tO.prototype,"socialWindow",void 0),tP([(0,s.SB)()],tO.prototype,"error",void 0),tP([(0,s.SB)()],tO.prototype,"connecting",void 0),tP([(0,s.SB)()],tO.prototype,"message",void 0),tO=tP([(0,n.customElement)("w3m-connecting-social-view")],tO);var tN=a.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function tj(e){let{connectors:t}=o.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{}),i=e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})),n=i.sort((e,t)=>Number(t.installed)-Number(e.installed));return n}var tM=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tD="local-paginator",tU=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!o.ApiController.state.wallets.length,this.wallets=o.ApiController.state.wallets,this.recommended=o.ApiController.state.recommended,this.featured=o.ApiController.state.featured,this.unsubscribe.push(...[o.ApiController.subscribeKey("wallets",e=>this.wallets=e),o.ApiController.subscribeKey("recommended",e=>this.recommended=e),o.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return a.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await o.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>a.dy`
        <wui-card-select-loader type="wallet" id=${c(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets],t=tj(e);return t.map(e=>a.dy`
        <wui-card-select
          imageSrc=${c(o.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=o.ApiController.state,n=window.innerWidth<352?3:4,a=e.length+t.length,s=Math.ceil(a/n)*n-a+n;return(s-=e.length?r.length%n:0,0===i&&r.length>0)?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(s,tD):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tD}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=o.ApiController.state;r.length<t&&o.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};tU.styles=tN,tM([(0,s.SB)()],tU.prototype,"initial",void 0),tM([(0,s.SB)()],tU.prototype,"wallets",void 0),tM([(0,s.SB)()],tU.prototype,"recommended",void 0),tM([(0,s.SB)()],tU.prototype,"featured",void 0),tU=tM([(0,n.customElement)("w3m-all-wallets-list")],tU);var tL=a.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,tB=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tz=class extends a.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?a.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await o.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=o.ApiController.state,t=tj(e);return e.length?a.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>a.dy`
            <wui-card-select
              imageSrc=${c(o.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:a.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=o.ConnectorController.getConnector(e.id,e.rdns);t?o.RouterController.push("ConnectingExternal",{connector:t}):o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};tz.styles=tL,tB([(0,s.SB)()],tz.prototype,"loading",void 0),tB([(0,s.Cb)()],tz.prototype,"query",void 0),tz=tB([(0,n.customElement)("w3m-all-wallets-search")],tz);var tW=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tH=class extends a.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(o.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return a.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};tW([(0,s.Cb)({type:Array})],tH.prototype,"platforms",void 0),tW([(0,s.Cb)()],tH.prototype,"onSelectPlatfrom",void 0),tW([(0,s.SB)()],tH.prototype,"buffering",void 0),tH=tW([(0,n.customElement)("w3m-connecting-header")],tH);let tF=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=o.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await o.ConnectionController.connectExternal(t):r&&await o.ConnectionController.connectExternal(r),o.IN.close(),o.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){o.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};tF=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-browser")],tF);let tZ=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=o.j1.formatNativeUrl(e,this.uri);o.ConnectionController.setWcLinking({name:t,href:i}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_blank")}catch{this.error=!0}}};tZ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-desktop")],tZ);let tV=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=o.j1.formatNativeUrl(e,this.uri);o.ConnectionController.setWcLinking({name:t,href:i}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=o.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(o.ConnectionController.setBuffering(!0),setTimeout(()=>{o.ConnectionController.setBuffering(!1)},5e3))}};tV=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-mobile")],tV);var tq=a.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let tY=class extends F{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return o.ConnectionController.setWcLinking(void 0),o.ConnectionController.setRecentWallet(this.wallet),a.dy` <wui-qr-code
      size=${e}
      theme=${o.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${c(o.fz.getWalletImage(this.wallet))}
      alt=${c(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return a.dy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};tY.styles=tq,tY=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-qrcode")],tY);let tG=class extends a.oi{constructor(){if(super(),this.wallet=o.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return a.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${c(o.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};tG=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-unsupported")],tG);let tK=class extends F{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",o.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=o.j1.formatUniversalUrl(e,this.uri);o.ConnectionController.setWcLinking({name:t,href:i}),o.ConnectionController.setRecentWallet(this.wallet),o.j1.openHref(r,"_blank")}catch{this.error=!0}}};tK=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connecting-wc-web")],tK);var tX=a.iv`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,tJ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tQ=o.bq.CONVERT_SLIPPAGE_TOLERANCE,t0=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.networkName=o.NetworkController.state.caipNetwork?.name,this.detailsOpen=!1,this.sourceToken=o.nY.state.sourceToken,this.toToken=o.nY.state.toToken,this.toTokenAmount=o.nY.state.toTokenAmount,this.sourceTokenPriceInUSD=o.nY.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=o.nY.state.toTokenPriceInUSD,this.gasPriceInUSD=o.nY.state.gasPriceInUSD,this.priceImpact=o.nY.state.priceImpact,this.maxSlippage=o.nY.state.maxSlippage,this.networkTokenSymbol=o.nY.state.networkTokenSymbol,this.inputError=o.nY.state.inputError,this.unsubscribe.push(...[o.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError})])}render(){let e=this.toTokenAmount&&this.maxSlippage?G.C6.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return a.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${n.UiHelperUtil.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${n.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?a.dy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${n.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?a.dy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${n.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?a.dy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${n.UiHelperUtil.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${n.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${tQ}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};t0.styles=[tX],tJ([(0,s.SB)()],t0.prototype,"networkName",void 0),tJ([(0,s.Cb)()],t0.prototype,"detailsOpen",void 0),tJ([(0,s.SB)()],t0.prototype,"sourceToken",void 0),tJ([(0,s.SB)()],t0.prototype,"toToken",void 0),tJ([(0,s.SB)()],t0.prototype,"toTokenAmount",void 0),tJ([(0,s.SB)()],t0.prototype,"sourceTokenPriceInUSD",void 0),tJ([(0,s.SB)()],t0.prototype,"toTokenPriceInUSD",void 0),tJ([(0,s.SB)()],t0.prototype,"gasPriceInUSD",void 0),tJ([(0,s.SB)()],t0.prototype,"priceImpact",void 0),tJ([(0,s.SB)()],t0.prototype,"maxSlippage",void 0),tJ([(0,s.SB)()],t0.prototype,"networkTokenSymbol",void 0),tJ([(0,s.SB)()],t0.prototype,"inputError",void 0),t0=tJ([(0,n.customElement)("w3m-swap-details")],t0);var t1=a.iv`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,t2=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t3=class extends a.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let e=this.marketValue||"0",t=G.C6.bigNumber(e).isGreaterThan("0");return a.dy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${n.UiHelperUtil.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return G.kg.numericInputKeyDown(e,this.value,e=>this.onSetAmount?.(this.target,e))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;let t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?a.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:a.dy` <wui-button
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let e=G.C6.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return a.dy`
      ${t?a.dy`<wui-text variant="small-400" color="fg-200">
            ${n.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?a.dy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:a.dy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){o.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),o.RouterController.push("SwapSelectToken",{target:this.target})}onBuyToken(){o.RouterController.push("OnRampProviders")}};t3.styles=[t1],t2([(0,s.Cb)()],t3.prototype,"focused",void 0),t2([(0,s.Cb)()],t3.prototype,"balance",void 0),t2([(0,s.Cb)()],t3.prototype,"value",void 0),t2([(0,s.Cb)()],t3.prototype,"price",void 0),t2([(0,s.Cb)()],t3.prototype,"marketValue",void 0),t2([(0,s.Cb)()],t3.prototype,"disabled",void 0),t2([(0,s.Cb)()],t3.prototype,"target",void 0),t2([(0,s.Cb)()],t3.prototype,"token",void 0),t2([(0,s.Cb)()],t3.prototype,"onSetAmount",void 0),t2([(0,s.Cb)()],t3.prototype,"onSetMaxValue",void 0),t3=t2([(0,n.customElement)("w3m-swap-input")],t3);var t5=a.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,t4=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t6=class extends a.oi{constructor(){super(...arguments),this.target="sourceToken"}render(){return a.dy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return a.dy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};t6.styles=[t5],t4([(0,s.Cb)()],t6.prototype,"target",void 0),t6=t4([(0,n.customElement)("w3m-swap-input-skeleton")],t6);var t8=a.iv`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,t9=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t7=["Swap","SwapSelectToken","SwapPreview"];function re(){let e=o.RouterController.state.data?.connector?.name,t=o.RouterController.state.data?.wallet?.name,r=o.RouterController.state.data?.network?.name,i=t??e,n=o.ConnectorController.getConnectors(),a=1===n.length&&n[0]?.id==="w3m-email";return{Connect:`Connect ${a?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:o.AccountController.state.socialProvider?o.AccountController.state.socialProvider:"Connect Social"}}let rt=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.heading=re()[o.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(o.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),o.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
    `}onWalletHelp(){o.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),o.RouterController.push("WhatIsAWallet")}async onClose(){if(o.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await Promise.all([r.e(3138),r.e(3379),r.e(4840)]).then(r.bind(r,50160));"success"!==e.state.status&&await o.ConnectionController.disconnect()}o.IN.close()}titleTemplate(){let e=t7.includes(o.RouterController.state.view);return a.dy`
      <wui-flex class="w3m-header-title" alignItems="center" gap="xs">
        <wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>
        ${e?a.dy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){let{view:e}=o.RouterController.state;return this.showBack&&!("ApproveTransaction"===e||"UpgradeToSmartAccount"===e||"ConnectingSiwe"===e)?a.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:a.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-flex.w3m-header-title");if(t){let r=re()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=o.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){o.RouterController.goBack()}};rt.styles=[t8],t9([(0,s.SB)()],rt.prototype,"heading",void 0),t9([(0,s.SB)()],rt.prototype,"buffering",void 0),t9([(0,s.SB)()],rt.prototype,"showBack",void 0),rt=t9([(0,n.customElement)("w3m-header")],rt);var rr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ri=class extends a.oi{constructor(){super(...arguments),this.data=[]}render(){return a.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>a.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>a.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};rr([(0,s.Cb)({type:Array})],ri.prototype,"data",void 0),ri=rr([(0,n.customElement)("w3m-help-widget")],ri);var ro=a.iv`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,rn=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ra=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=o.WM.state.currencyImages,this.tokenImages=o.WM.state.tokenImages,this.unsubscribe.push(o.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),o.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),o.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),o.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){o.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return a.dy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?a.dy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>o.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${c(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:a.dy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};ra.styles=ro,rn([(0,s.Cb)({type:String})],ra.prototype,"type",void 0),rn([(0,s.Cb)({type:Number})],ra.prototype,"value",void 0),rn([(0,s.SB)()],ra.prototype,"currencies",void 0),rn([(0,s.SB)()],ra.prototype,"selectedCurrency",void 0),rn([(0,s.SB)()],ra.prototype,"currencyImages",void 0),rn([(0,s.SB)()],ra.prototype,"tokenImages",void 0),ra=rn([(0,n.customElement)("w3m-onramp-input")],ra);var rs=a.iv`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let rl=class extends a.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state;return e||t?a.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=o.OptionsController.state;return e?a.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=o.OptionsController.state;return e?a.dy`<a href=${e}>Privacy Policy</a>`:null}};rl.styles=[rs],rl=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-legal-footer")],rl);var rc=a.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,ru=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rd=class extends a.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:s}=this.wallet,l=o.j1.isMobile(),c=o.j1.isIos(),u=o.j1.isAndroid(),d=[t,r,s,i].filter(Boolean).length>1,h=n.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!l?a.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>o.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&s?a.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&c?a.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?a.dy`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&o.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&o.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&o.j1.openHref(this.wallet.homepage,"_blank")}};rd.styles=[rc],ru([(0,s.Cb)({type:Object})],rd.prototype,"wallet",void 0),rd=ru([(0,n.customElement)("w3m-mobile-download-links")],rd);var rh=a.iv`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let rp=class extends a.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.OptionsController.state;return e||t?a.dy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return a.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){o.RouterController.push("WhatIsABuy")}};rp.styles=[rh],rp=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-onramp-providers-footer")],rp);var rg=a.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,rf=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rw={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},rm=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=o.SnackController.state.open,this.unsubscribe.push(o.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=o.SnackController.state,r=rw[t];return a.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>o.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};rm.styles=rg,rf([(0,s.SB)()],rm.prototype,"open",void 0),rm=rf([(0,n.customElement)("w3m-snackbar")],rm);var rv=a.iv`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,rb=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ry=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.formRef=ed(),this.connectors=o.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.find(e=>"AUTH"===e.type),t=this.connectors.length>1;return e?.email?a.dy`
      <form ${eg(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:a.dy`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){let e=!this.loading&&this.email.length>3;return e?a.dy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?a.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=o.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});o.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(o.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),o.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&o.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=o.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":o.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){o.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ry.styles=rv,rb([(0,s.SB)()],ry.prototype,"connectors",void 0),rb([(0,s.SB)()],ry.prototype,"email",void 0),rb([(0,s.SB)()],ry.prototype,"loading",void 0),rb([(0,s.SB)()],ry.prototype,"error",void 0),ry=rb([(0,n.customElement)("w3m-email-login-widget")],ry);var rx=a.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,rC=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rk=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.address=o.AccountController.state.address,this.profileImage=o.AccountController.state.profileImage,this.profileName=o.AccountController.state.profileName,this.network=o.NetworkController.state.caipNetwork,this.disconnecting=!1,this.balance=o.AccountController.state.balance,this.balanceSymbol=o.AccountController.state.balanceSymbol,this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||o.SnackController.showError("Account not found")})],o.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=o.fz.getNetworkImage(this.network);return a.dy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${c(this.address)}
          address=${c(this.address)}
          imageSrc=${c(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?n.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):n.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${o.j1.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${c(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=o.OptionsController.state;return e?a.dy`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){let e=o.MO.getConnectedConnector(),t=o.ConnectorController.getAuthConnector(),{origin:r}=location;return!t||"AUTH"!==e||r.includes(o.bq.SECURE_SITE)?null:a.dy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){o.RouterController.push("OnRampProviders")}explorerBtnTemplate(){let{addressExplorerUrl:e}=o.AccountController.state;return e?a.dy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=o.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(o.j1.copyToClopboard(this.address),o.SnackController.showSuccess("Address copied"))}catch{o.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(o.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),o.RouterController.push("Networks"))}onTransactions(){o.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),o.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await o.ConnectionController.disconnect(),o.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),o.IN.close()}catch{o.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),o.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let{addressExplorerUrl:e}=o.AccountController.state;e&&o.j1.openHref(e,"_blank")}onGoToUpgradeView(){o.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),o.RouterController.push("UpgradeEmailWallet")}};rk.styles=rx,rC([(0,s.SB)()],rk.prototype,"address",void 0),rC([(0,s.SB)()],rk.prototype,"profileImage",void 0),rC([(0,s.SB)()],rk.prototype,"profileName",void 0),rC([(0,s.SB)()],rk.prototype,"network",void 0),rC([(0,s.SB)()],rk.prototype,"disconnecting",void 0),rC([(0,s.SB)()],rk.prototype,"balance",void 0),rC([(0,s.SB)()],rk.prototype,"balanceSymbol",void 0),rk=rC([(0,n.customElement)("w3m-account-default-widget")],rk);var rE=a.iv`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,rS=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r_=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.address=o.AccountController.state.address,this.profileImage=o.AccountController.state.profileImage,this.profileName=o.AccountController.state.profileName,this.smartAccountDeployed=o.AccountController.state.smartAccountDeployed,this.network=o.NetworkController.state.caipNetwork,this.currentTab=o.AccountController.state.currentTab,this.tokenBalance=o.AccountController.state.tokenBalance,this.preferredAccountType=o.AccountController.state.preferredAccountType,this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):o.IN.close()})],o.NetworkController.subscribe(e=>{this.network=e.caipNetwork})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){o.AccountController.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=o.fz.getNetworkImage(this.network);return a.dy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${c(this.address)}
        networkSrc=${c(e)}
        icon="chevronBottom"
        avatarSrc=${c(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button @click=${this.onBuyClick.bind(this)} icon="card"></wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Swap">
          <wui-icon-button @click=${this.onSwapClick.bind(this)} icon="recycleHorizontal">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button @click=${this.onReceiveClick.bind(this)} icon="arrowBottomCircle">
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button @click=${this.onSendClick.bind(this)} icon="send"></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${o.j1.isMobile()&&window.innerWidth<430?`${(window.innerWidth-48)/3}px`:"104px"}
        .tabs=${tI.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchSwapValues(){this.watchTokenBalance=setInterval(()=>o.AccountController.fetchTokenBalance(),1e4)}listContentTemplate(){return 0===this.currentTab?a.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?a.dy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?a.dy`<w3m-account-activity-widget></w3m-account-activity-widget>`:a.dy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=o.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=o.j1.formatTokenBalance(e);return a.dy`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return a.dy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){let e=o.NetworkController.checkIfSmartAccountEnabled();return!e||this.preferredAccountType!==R.y_.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:a.dy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){o.AccountController.setCurrentTab(e)}onProfileButtonClick(){o.RouterController.push("AccountSettings")}onBuyClick(){o.RouterController.push("OnRampProviders")}onSwapClick(){this.network?.id&&!o.bq.SWAP_SUPPORTED_NETWORKS.includes(this.network?.id)?o.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):o.RouterController.push("Swap")}onReceiveClick(){o.RouterController.push("WalletReceive")}onSendClick(){o.RouterController.push("WalletSend")}onUpdateToSmartAccount(){o.RouterController.push("UpgradeToSmartAccount")}};r_.styles=rE,rS([(0,s.SB)()],r_.prototype,"watchTokenBalance",void 0),rS([(0,s.SB)()],r_.prototype,"address",void 0),rS([(0,s.SB)()],r_.prototype,"profileImage",void 0),rS([(0,s.SB)()],r_.prototype,"profileName",void 0),rS([(0,s.SB)()],r_.prototype,"smartAccountDeployed",void 0),rS([(0,s.SB)()],r_.prototype,"network",void 0),rS([(0,s.SB)()],r_.prototype,"currentTab",void 0),rS([(0,s.SB)()],r_.prototype,"tokenBalance",void 0),rS([(0,s.SB)()],r_.prototype,"preferredAccountType",void 0),r_=rS([(0,n.customElement)("w3m-account-wallet-features-widget")],r_);var rA=a.iv`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let rT=class extends a.oi{render(){return a.dy`<w3m-activity-list page="account"></w3m-activity-list>`}};rT.styles=rA,rT=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-activity-widget")],rT);var rR=a.iv`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let r$=class extends a.oi{render(){return a.dy`${this.nftTemplate()}`}nftTemplate(){return a.dy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){o.RouterController.push("WalletReceive")}};r$.styles=rR,r$=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-nfts-widget")],r$);var rI=a.iv`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,rP=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rO=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=o.AccountController.state.tokenBalance,this.unsubscribe.push(...[o.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?a.dy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:a.dy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>a.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){o.RouterController.push("WalletReceive")}onBuyClick(){o.RouterController.push("OnRampProviders")}};rO.styles=rI,rP([(0,s.SB)()],rO.prototype,"tokenBalance",void 0),rO=rP([(0,n.customElement)("w3m-account-tokens-widget")],rO);var rN=a.iv`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,rj=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rM="last-transaction",rD=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=o.AccountController.state.address,this.transactionsByYear=o.sl.state.transactionsByYear,this.loading=o.sl.state.loading,this.empty=o.sl.state.empty,this.next=o.sl.state.next,o.sl.clearCursor(),this.unsubscribe.push(...[o.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,o.sl.resetTransactions(),o.sl.fetchTransactions(e.address))}),o.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})])}firstUpdated(){o.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.dy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,o=parseInt(t,10),s=Array(12).fill(null).map((e,t)=>t).reverse();return s.map(e=>{let t=n.TransactionUtil.getTransactionGroupTitle(o,e),r=this.transactionsByYear[o]?.[e];return r?a.dy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r,i)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:o,isAllNFT:s,images:l,status:c,transfers:u,type:d}=this.getTransactionListItemProps(e),h=u?.length>1,p=u?.length===2;return p&&!s?a.dy`
        <wui-transaction-list-item
          date=${r}
          .direction=${o}
          id=${t&&this.next?rM:""}
          status=${c}
          type=${d}
          .images=${l}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:h?u.map((e,i)=>{let o=n.TransactionUtil.getTransferDescription(e),s=t&&i===u.length-1;return a.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${s&&this.next?rM:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[l[i]]}
          .descriptions=${[o]}
        ></wui-transaction-list-item>`}):a.dy`
      <wui-transaction-list-item
        date=${r}
        .direction=${o}
        id=${t&&this.next?rM:""}
        status=${c}
        type=${d}
        .images=${l}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((r,i)=>{let o=t&&i===e.length-1;return a.dy`${this.templateRenderTransaction(r,o)}`})}emptyStateActivity(){return a.dy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a.dy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?a.dy`${this.emptyStateAccount()}`:a.dy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(a.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){o.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=o.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(o.sl.fetchTransactions(this.address),o.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${rM}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=G.Em.formatDate(e?.metadata?.minedAt),r=n.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,o=e?.transfers?.[0],a=!!o&&e?.transfers?.every(e=>!!e.nft_info),s=n.TransactionUtil.getTransactionImages(i);return{date:t,direction:o?.direction,descriptions:r,isAllNFT:a,images:s,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};rD.styles=rN,rj([(0,s.Cb)()],rD.prototype,"page",void 0),rj([(0,s.SB)()],rD.prototype,"address",void 0),rj([(0,s.SB)()],rD.prototype,"transactionsByYear",void 0),rj([(0,s.SB)()],rD.prototype,"loading",void 0),rj([(0,s.SB)()],rD.prototype,"empty",void 0),rj([(0,s.SB)()],rD.prototype,"next",void 0),rD=rj([(0,n.customElement)("w3m-activity-list")],rD);var rU=a.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,rL=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rB=class extends a.oi{render(){return a.dy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?a.dy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:a.dy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){o.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price,t=e*this.sendTokenAmount;return a.dy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${t?`$${n.UiHelperUtil.formatNumberToLocalString(t,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?a.dy` <wui-text variant="small-400" color="error-100">
          ${n.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:a.dy` <wui-text variant="small-400" color="fg-200">
        ${n.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?a.dy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:a.dy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){o.Si.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&this.gasPriceInUSD){let e=G.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.token.price),t=void 0===this.token.address,r=t?G.C6.bigNumber(this.token.quantity.numeric).minus(e):G.C6.bigNumber(this.token.quantity.numeric);o.Si.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){o.RouterController.push("OnRampProviders")}};rB.styles=rU,rL([(0,s.Cb)({type:Object})],rB.prototype,"token",void 0),rL([(0,s.Cb)({type:Number})],rB.prototype,"sendTokenAmount",void 0),rL([(0,s.Cb)({type:Number})],rB.prototype,"gasPriceInUSD",void 0),rB=rL([(0,n.customElement)("w3m-input-token")],rB);var rz=a.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,rW=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rH=class extends a.oi{constructor(){super(...arguments),this.inputElementRef=ed(),this.instructionElementRef=ed(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=o.j1.debounce(async e=>{let t=await o.ConnectionController.getEnsAddress(e);if(o.Si.setLoading(!1),t){o.Si.setReceiverProfileName(e),o.Si.setReceiverAddress(t);let r=await o.ConnectionController.getEnsAvatar(e);r&&o.Si.setReceiverProfileImageUrl(r)}else o.Si.setReceiverAddress(e),o.Si.setReceiverProfileName(void 0),o.Si.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return a.dy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${eg(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${eg(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();o.Si.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),o.Si.setLoading(!0),this.onDebouncedSearch(t.value)}};rH.styles=rz,rW([(0,s.Cb)()],rH.prototype,"value",void 0),rW([(0,s.SB)()],rH.prototype,"instructionHidden",void 0),rW([(0,s.SB)()],rH.prototype,"pasting",void 0),rH=rW([(0,n.customElement)("w3m-input-address")],rH);var rF=a.iv`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,rZ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rV=class extends a.oi{render(){return a.dy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${c(n.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${n.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?a.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${c(o.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&o.RouterController.push("Networks",{network:e})}};rV.styles=rF,rZ([(0,s.Cb)()],rV.prototype,"receiverAddress",void 0),rZ([(0,s.Cb)({type:Object})],rV.prototype,"caipNetwork",void 0),rZ([(0,s.Cb)({type:Number})],rV.prototype,"networkFee",void 0),rV=rZ([(0,n.customElement)("w3m-wallet-send-details")],rV);var rq=a.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,rY=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rG=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.open=o.fw.state.open,this.message=o.fw.state.message,this.triggerRect=o.fw.state.triggerRect,this.variant=o.fw.state.variant,this.unsubscribe.push(...[o.fw.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,a.dy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};rG.styles=[rq],rY([(0,s.SB)()],rG.prototype,"open",void 0),rY([(0,s.SB)()],rG.prototype,"message",void 0),rY([(0,s.SB)()],rG.prototype,"triggerRect",void 0),rY([(0,s.SB)()],rG.prototype,"variant",void 0),rG=rY([(0,n.customElement)("w3m-tooltip")],rG);var rK=a.iv`
  :host {
    width: 100%;
    display: block;
  }
`,rX=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rJ=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=o.fw.state.open,this.unsubscribe.push(o.RouterController.subscribeKey("view",()=>{o.fw.hide()}),o.IN.subscribeKey("open",e=>{e||o.fw.hide()}),o.fw.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),o.fw.hide()}render(){return a.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return a.dy`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||o.fw.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||o.fw.hide()}};rJ.styles=[rK],rX([(0,s.Cb)()],rJ.prototype,"text",void 0),rX([(0,s.SB)()],rJ.prototype,"open",void 0),rJ=rX([(0,n.customElement)("w3m-tooltip-trigger")],rJ);var rQ=a.iv`
  wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,r0=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r1=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?a.dy`
      <wui-flex flexDirection="column" gap="xs" .padding=${["0","0","xs","0"]}>
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){return this.connector?.socials?2===this.connector.socials.length?a.dy` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,2).map(e=>a.dy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
      </wui-flex>`:a.dy` <wui-list-social
      data-testid=${`social-selector-${this.connector?.socials?.[0]}`}
      @click=${()=>{this.onSocialClick(this.connector?.socials?.[0])}}
      logo=${c(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){return!this.connector?.socials||this.connector?.socials.length<=2?null:this.connector?.socials.length>6?a.dy`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,5).map(e=>a.dy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:a.dy`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(e=>a.dy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?a.dy`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){o.RouterController.push("ConnectSocials")}async onSocialClick(e){let t=o.ConnectorController.getAuthConnector();try{if(t&&e){let{uri:r}=await t.provider.getSocialRedirectUri({provider:e});o.AccountController.setSocialProvider(e),setTimeout(()=>{let e=o.j1.returnOpenHref(r,"popupWindow","width=600,height=800,scrollbars=yes");e&&o.AccountController.setSocialWindow(e)}),o.RouterController.push("ConnectingSocial")}}catch(e){o.SnackController.showError("Something went wrong")}}};r1.styles=rQ,r0([(0,s.SB)()],r1.prototype,"connectors",void 0),r1=r0([(0,n.customElement)("w3m-social-login-widget")],r1);var r2=a.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;let r3=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        <w3m-connect-recent-widget></w3m-connect-recent-widget>
        <w3m-connect-announced-widget></w3m-connect-announced-widget>
        <w3m-connect-injected-widget></w3m-connect-injected-widget>
        <w3m-connect-custom-widget></w3m-connect-custom-widget>
        <w3m-connect-recommended-widget></w3m-connect-recommended-widget>
        <w3m-connect-external-widget></w3m-connect-external-widget>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};r3.styles=r2,r3=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-wallet-login-list")],r3);var r5=a.iv`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,r4=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r6=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?a.dy` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(e=>a.dy`<wui-list-social name=${e} logo=${e}></wui-list-social>`)}
    </wui-flex>`:null}};r6.styles=r5,r4([(0,s.SB)()],r6.prototype,"connectors",void 0),r6=r4([(0,n.customElement)("w3m-social-login-list")],r6);var r8=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?o.j1.isMobile()?o.RouterController.push("AllWallets"):o.RouterController.push("ConnectingWalletConnect"):o.RouterController.push("ConnectingExternal",{connector:e})}};r8([(0,s.SB)()],r9.prototype,"connectors",void 0),r9=r8([(0,n.customElement)("w3m-connect-announced-widget")],r9);var r7=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ie=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=o.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e);return a.dy`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>a.dy`
          <wui-list-wallet
            imageSrc=${c(o.fz.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=o.MO.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),i=t.map(e=>e.rdns).filter(Boolean),n=r.concat(i);if(n.includes("io.metamask.mobile")&&o.j1.isMobile()){let e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}let a=e.filter(e=>!n.includes(String(e?.rdns)));return a}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};r7([(0,s.SB)()],ie.prototype,"connectors",void 0),ie=r7([(0,n.customElement)("w3m-connect-custom-widget")],ie);var it=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ir=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>!["WALLET_CONNECT","INJECTED","ANNOUNCED","AUTH"].includes(e.type));return e?.length?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){o.RouterController.push("ConnectingExternal",{connector:e})}};it([(0,s.SB)()],ir.prototype,"connectors",void 0),ir=it([(0,n.customElement)("w3m-connect-external-widget")],ir);var ii=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let io=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{featured:e}=o.ApiController.state;if(!e.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e);return a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}filterOutDuplicateWallets(e){let t=o.MO.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),i=t.map(e=>e.rdns).filter(Boolean),n=r.concat(i);if(n.includes("io.metamask.mobile")&&o.j1.isMobile()){let e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}let a=e.filter(e=>!n.includes(String(e?.rdns)));return a}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};ii([(0,s.SB)()],io.prototype,"connectors",void 0),io=ii([(0,n.customElement)("w3m-connect-featured-widget")],io);var ia=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let is=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"INJECTED"===e.type);return e?.length&&(1!==e.length||e[0]?.name!=="Browser Wallet"||o.j1.isMobile())?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(o.j1.isMobile()||"Browser Wallet"!==e.name)&&o.ConnectionController.checkInstalled()?a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `:null)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){o.RouterController.push("ConnectingExternal",{connector:e})}};ia([(0,s.SB)()],is.prototype,"connectors",void 0),is=ia([(0,n.customElement)("w3m-connect-injected-widget")],is);var il=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ic=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"coinbaseWalletSDK"===e.id);return e?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        <wui-list-wallet
          imageSrc=${c(o.fz.getConnectorImage(e))}
          .installed=${!0}
          name=${c(e.name)}
          data-testid=${`wallet-selector-${e.id}`}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){o.RouterController.push("ConnectingExternal",{connector:e})}};il([(0,s.SB)()],ic.prototype,"connectors",void 0),ic=il([(0,n.customElement)("w3m-connect-coinbase-widget")],ic);let iu=class extends a.oi{render(){let e=o.MO.getRecentWallets();return e?.length?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iu=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-connect-recent-widget")],iu);var id=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ih=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);if(!e)return null;let{recommended:t}=o.ApiController.state,{customWallets:r,featuredWalletIds:i}=o.OptionsController.state,{connectors:n}=o.ConnectorController.state,s=o.MO.getRecentWallets(),l=n.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type),u=l.filter(e=>"Browser Wallet"!==e.name);if(i||r||!t.length)return this.style.cssText="display: none",null;let d=u.length+s.length,h=this.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-d));return h.length?a.dy`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map(e=>a.dy`
            <wui-list-wallet
              imageSrc=${c(o.fz.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}filterOutDuplicateWallets(e){let t=o.MO.getRecentWallets(),r=this.connectors.map(e=>e.info?.rdns).filter(Boolean),i=t.map(e=>e.rdns).filter(Boolean),n=r.concat(i);if(n.includes("io.metamask.mobile")&&o.j1.isMobile()){let e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}let a=e.filter(e=>!n.includes(String(e?.rdns)));return a}onConnectWallet(e){o.RouterController.push("ConnectingWalletConnect",{wallet:e})}};id([(0,s.SB)()],ih.prototype,"connectors",void 0),ih=id([(0,n.customElement)("w3m-connect-recommended-widget")],ih);var ip=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ig=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(o.j1.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?a.dy`
      <wui-list-wallet
        imageSrc=${c(o.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?o.j1.isMobile()?o.RouterController.push("AllWallets"):o.RouterController.push("ConnectingWalletConnect"):o.RouterController.push("ConnectingExternal",{connector:e})}};ip([(0,s.SB)()],ig.prototype,"connectors",void 0),ig=ip([(0,n.customElement)("w3m-connect-walletconnect-widget")],ig);var iw=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let im=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.connectors=o.ConnectorController.state.connectors,this.count=o.ApiController.state.count,this.unsubscribe.push(o.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),o.ApiController.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=o.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!o.j1.isMobile())return null;let r=o.ApiController.state.featured.length,i=this.count+r,n=i<10?i:10*Math.floor(i/10),s=n<i?`${n}+`:`${n}`;return a.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){o.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),o.RouterController.push("AllWallets")}};iw([(0,s.SB)()],im.prototype,"connectors",void 0),iw([(0,s.SB)()],im.prototype,"count",void 0),im=iw([(0,n.customElement)("w3m-all-wallets-widget")],im);let iv=class extends a.oi{render(){let e=o.MO.getConnectedConnector(),t=o.ConnectorController.getAuthConnector();if(!t||"AUTH"!==e)return this.style.cssText="display: none",null;let r=t.provider.getEmail()??"",i=o.MO.getConnectedSocialProvider(),n=o.MO.getConnectedSocialUsername();return a.dy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${i??"mail"}
        iconSize=${i?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!i}
        @click=${()=>{this.onGoToUpdateEmail(r,i)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n??r}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||o.RouterController.push("UpdateEmailWallet",{email:e})}};iv=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([(0,n.customElement)("w3m-account-auth-button")],iv);let ib=!1;class iy{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{o.AccountController.setIsConnected(e)},this.getIsConnectedState=()=>o.AccountController.state.isConnected,this.setCaipAddress=e=>{o.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{o.AccountController.setBalance(e,t)},this.setProfileName=e=>{o.AccountController.setProfileName(e)},this.setProfileImage=e=>{o.AccountController.setProfileImage(e)},this.resetAccount=()=>{o.AccountController.resetAccount()},this.setCaipNetwork=e=>{o.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>o.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{o.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>o.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{o.NetworkController.resetNetwork()},this.setConnectors=e=>{o.ConnectorController.setConnectors(e)},this.addConnector=e=>{o.ConnectorController.addConnector(e)},this.getConnectors=()=>o.ConnectorController.getConnectors(),this.resetWcConnection=()=>{o.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>o.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{o.AccountController.setAddressExplorerUrl(e)},this.setSmartAccountDeployed=e=>{o.AccountController.setSmartAccountDeployed(e)},this.setConnectedWalletInfo=e=>{o.AccountController.setConnectedWalletInfo(e)},this.setSmartAccountEnabledNetworks=e=>{o.NetworkController.setSmartAccountEnabledNetworks(e)},this.setPreferredAccountType=e=>{o.AccountController.setPreferredAccountType(e)},this.getWalletConnectName=e=>o.a.getNamesForAddress(e),this.resolveWalletConnectName=async e=>{let t=e.replace(G.bq.WC_NAME_SUFFIX,""),r=await o.a.resolveName(t),i=Object.values(r?.addresses)||[];return i[0]?.address||!1},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),o.IN.open(e)}async close(){await this.initOrContinue(),o.IN.close()}setLoading(e){o.IN.setLoading(e)}getThemeMode(){return o.ThemeController.state.themeMode}getThemeVariables(){return o.ThemeController.state.themeVariables}setThemeMode(e){o.ThemeController.setThemeMode(e),(0,n.setColorTheme)(o.ThemeController.state.themeMode)}setThemeVariables(e){o.ThemeController.setThemeVariables(e),(0,n.setThemeVariables)(o.ThemeController.state.themeVariables)}subscribeTheme(e){return o.ThemeController.subscribe(e)}getWalletInfo(){return o.AccountController.state.connectedWalletInfo}subscribeWalletInfo(e){return o.AccountController.subscribeKey("connectedWalletInfo",e)}getState(){return o.Ie.state}subscribeState(e){return o.Ie.subscribe(e)}showErrorMessage(e){o.SnackController.showError(e)}showSuccessMessage(e){o.SnackController.showSuccess(e)}getEvent(){return{...o.Xs.state}}subscribeEvents(e){return o.Xs.subscribe(e)}replace(e){o.RouterController.replace(e)}redirect(e){o.RouterController.push(e)}popTransactionStack(e){o.RouterController.popTransactionStack(e)}isOpen(){return o.IN.state.open}isTransactionStackEmpty(){return 0===o.RouterController.state.transactionStack.length}isTransactionShouldReplaceView(){return o.RouterController.state.transactionStack[o.RouterController.state.transactionStack.length-1]?.replace}async initControllers(e){if(o.NetworkController.setClient(e.networkControllerClient),o.NetworkController.setDefaultCaipNetwork(e.defaultChain),o.OptionsController.setProjectId(e.projectId),o.OptionsController.setAllWallets(e.allWallets),o.OptionsController.setIncludeWalletIds(e.includeWalletIds),o.OptionsController.setExcludeWalletIds(e.excludeWalletIds),o.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),o.OptionsController.setTokens(e.tokens),o.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),o.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),o.OptionsController.setCustomWallets(e.customWallets),o.OptionsController.setEnableAnalytics(e.enableAnalytics),o.OptionsController.setSdkVersion(e._sdkVersion),e.metadata&&o.OptionsController.setMetadata(e.metadata),e.themeMode&&o.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&o.ThemeController.setThemeVariables(e.themeVariables),e.enableOnramp&&o.OptionsController.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&o.OptionsController.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&o.NetworkController.setAllowUnsupportedChain(e.allowUnsupportedChain),e.siweControllerClient){let{SIWEController:t}=await Promise.all([r.e(3138),r.e(3379),r.e(4840)]).then(r.bind(r,50160));t.setSIWEClient(e.siweControllerClient)}o.ConnectionController.setClient(e.connectionControllerClient)}async initOrContinue(){return!this.initPromise&&!ib&&o.j1.isClient()&&(ib=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,94344)),Promise.resolve().then(r.bind(r,9448))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}},9448:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var i=r(60969),o=r(94344),n=r(69307),a=r(88558),s=n.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.caipAddress,this.isSiweEnabled=i.OptionsController.state.isSiweEnabled,this.connected=i.AccountController.state.isConnected,this.loading=i.IN.state.loading,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.IN.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(i.AccountController.state.caipAddress)}),i.AccountController.subscribeKey("isConnected",e=>this.connected=e),i.AccountController.subscribeKey("caipAddress",e=>this.onNewAddress(e)),i.OptionsController.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?n.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){let{SIWEController:e}=await Promise.all([r.e(3138),r.e(3379),r.e(4840)]).then(r.bind(r,50160));"success"!==e.state.status&&await i.ConnectionController.disconnect()}i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=o.UiHelperUtil.getColorTheme(t);(0,o.initializeTheming)(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),i.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;let t=i.j1.getPlainAddress(this.caipAddress),o=i.j1.getPlainAddress(e),n=i.j1.getNetworkId(this.caipAddress),a=i.j1.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){let{SIWEController:e}=await Promise.all([r.e(3138),r.e(3379),r.e(4840)]).then(r.bind(r,50160)),i=await e.getSession();if(i&&t&&o&&t!==o){e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation());return}if(i&&n&&a&&n!==a){e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),l([(0,a.SB)()],u.prototype,"connected",void 0),l([(0,a.SB)()],u.prototype,"loading",void 0),u=l([(0,o.customElement)("w3m-modal")],u)},1028:function(e,t,r){"use strict";r.d(t,{C:function(){return a}});var i=r(85055);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},n=(e=o,t,r)=>{let{kind:i,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let o=this[i];t.call(this,r),this.requestUpdate(i,o,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?n(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},50808:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});var i=r(1028);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(e){return(0,i.C)({...e,state:!0,attribute:!1})}},85055:function(e,t,r){"use strict";r.d(t,{fl:function(){return _},iv:function(){return c},Ts:function(){return k},Qu:function(){return E}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,n),c=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new s(r,e,n)},u=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=i.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}},d=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:p,getOwnPropertyDescriptor:g,getOwnPropertyNames:f,getOwnPropertySymbols:w,getPrototypeOf:m}=Object,v=globalThis,b=v.trustedTypes,y=b?b.emptyScript:"",x=v.reactiveElementPolyfillSupport,C=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&p(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:o}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let n=i?.call(this);o.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...f(e),...w(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:k).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,x?.({ReactiveElement:_}),(v.reactiveElementVersions??=[]).push("2.0.4")},57173:function(e,t,r){"use strict";r.d(t,{Jb:function(){return S},Ld:function(){return _},_$LH:function(){return B},dy:function(){return E},sY:function(){return W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=globalThis,o=i.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,g=e=>p(e)||"function"==typeof e?.[Symbol.iterator],f="[ 	\n\f\r]",w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,v=/>/g,b=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),y=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,k=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=k(1),S=(k(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),A=new WeakMap,T=u.createTreeWalker(u,129);function R(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(t):t}let $=(e,t)=>{let r=e.length-1,i=[],o,n=2===t?"<svg>":"",l=w;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(d=l.exec(r)));)p=l.lastIndex,l===w?"!--"===d[1]?l=m:void 0!==d[1]?l=v:void 0!==d[2]?(C.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=b):void 0!==d[3]&&(l=b):l===b?">"===d[0]?(l=o??w,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?b:'"'===d[3]?x:y):l===x||l===y?l=b:l===m||l===v?l=w:(l=b,o=void 0);let g=l===b&&e[t+1].startsWith("/>")?" ":"";n+=l===w?r+c:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+g):r+s+(-2===h?t:g)}return[R(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class I{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,c=0,u=e.length-1,h=this.parts,[p,g]=$(e,t);if(this.el=I.createElement(p,r),T.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=T.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=g[c++],r=i.getAttribute(e).split(s),o=/([.?@])?(.*)/.exec(t);h.push({type:1,index:n,name:o[2],strings:r,ctor:"."===o[1]?M:"?"===o[1]?D:"@"===o[1]?U:j}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:n}),i.removeAttribute(e));if(C.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=o?o.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),T.nextNode(),h.push({type:2,index:++n});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===l)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:n}),e+=s.length-1}}n++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function P(e,t,r=e,i){if(t===S)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl,n=h(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=P(e,o._$AS(e,t.values),o,i)),t}class O{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);T.currentNode=i;let o=T.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new N(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new L(o,this,e)),this._$AV.push(t),s=r[++a]}n!==s?.index&&(o=T.nextNode(),n++)}return T.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=P(this,e,t))?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=I.createElement(R(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new O(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new I(e)),t}k(e){p(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let o of e)i===t.length?t.push(r=new N(this.S(d()),this.S(d()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,t=this,r,i){let o=this.strings,n=!1;if(void 0===o)(n=!h(e=P(this,e,t,0))||e!==this._$AH&&e!==S)&&(this._$AH=e);else{let i,a;let s=e;for(e=o[0],i=0;i<o.length-1;i++)(a=P(this,s[r+i],t,i))===S&&(a=this._$AH[i]),n||=!h(a)||a!==this._$AH[i],a===_?e=_:e!==_&&(e+=(a??"")+o[i+1]),this._$AH[i]=a}n&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class D extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class U extends j{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??_)===S)return;let r=this._$AH,i=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==_&&(r===_||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class L{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}let B={P:a,A:s,C:l,M:1,L:$,R:O,D:g,V:P,I:N,H:j,N:D,U:U,B:M,F:L},z=i.litHtmlPolyfillSupport;z?.(I,N),(i.litHtmlVersions??=[]).push("3.1.4");let W=(e,t,r)=>{let i=r?.renderBefore??t,o=i._$litPart$;if(void 0===o){let e=r?.renderBefore??null;i._$litPart$=o=new N(t.insertBefore(d(),e),e,void 0,r??{})}return o._$AI(e),o}},88558:function(e,t,r){"use strict";r.d(t,{Cb:function(){return i.C},SB:function(){return o.S}});var i=r(1028),o=r(50808)},69307:function(e,t,r){"use strict";r.d(t,{oi:function(){return n},iv:function(){return i.iv},dy:function(){return o.dy}});var i=r(85055),o=r(57173);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,o.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return o.Jb}}n._$litElement$=!0,n.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:n});let a=globalThis.litElementPolyfillSupport;a?.({LitElement:n}),(globalThis.litElementVersions??=[]).push("4.0.6")},94344:function(e,t,r){"use strict";let i,o,n;r.r(t),r.d(t,{MathUtil:function(){return nZ},TransactionUtil:function(){return nY},UiHelperUtil:function(){return r_},WuiAccountButton:function(){return rU},WuiAllWalletsImage:function(){return rF},WuiAvatar:function(){return rP},WuiBalance:function(){return ni},WuiBanner:function(){return nf},WuiButton:function(){return rK},WuiCard:function(){return eP},WuiCardSelect:function(){return r9},WuiCardSelectLoader:function(){return r0},WuiChip:function(){return it},WuiChipButton:function(){return nc},WuiCompatibleNetwork:function(){return nh},WuiConnectButton:function(){return io},WuiCtaButton:function(){return il},WuiDetailsGroup:function(){return iu},WuiDetailsGroupItem:function(){return ip},WuiEmailInput:function(){return iO},WuiEnsInput:function(){return iM},WuiFlex:function(){return rR},WuiGrid:function(){return nz},WuiIcon:function(){return tH},WuiIconBox:function(){return rj},WuiIconButton:function(){return nP},WuiIconLink:function(){return iL},WuiImage:function(){return tV},WuiInputAmount:function(){return n_},WuiInputElement:function(){return iW},WuiInputNumeric:function(){return iZ},WuiInputText:function(){return i$},WuiLink:function(){return iY},WuiListAccordion:function(){return oZ},WuiListButton:function(){return nj},WuiListContent:function(){return oY},WuiListDescription:function(){return nx},WuiListItem:function(){return iX},WuiListNetwork:function(){return oX},WuiListSocial:function(){return nU},WuiListToken:function(){return nv},WuiListWallet:function(){return ot},WuiListWalletTransaction:function(){return o0},WuiLoadingHexagon:function(){return tY},WuiLoadingSpinner:function(){return tX},WuiLoadingThumbnail:function(){return t0},WuiLogo:function(){return oo},WuiLogoSelect:function(){return os},WuiNetworkButton:function(){return ou},WuiNetworkImage:function(){return r4},WuiNoticeCard:function(){return oW},WuiOnRampActivityItem:function(){return o5},WuiOnRampProviderItem:function(){return o8},WuiOtp:function(){return op},WuiPreviewItem:function(){return nR},WuiProfileButton:function(){return na},WuiPromo:function(){return ne},WuiQrCode:function(){return ob},WuiSearchBar:function(){return ox},WuiSeparator:function(){return nF},WuiShimmer:function(){return t3},WuiSnackbar:function(){return oE},WuiTabs:function(){return oA},WuiTag:function(){return i9},WuiText:function(){return t7},WuiTokenButton:function(){return o$},WuiTokenListItem:function(){return oM},WuiTooltip:function(){return oO},WuiTransactionListItem:function(){return i3},WuiTransactionListItemLoader:function(){return i4},WuiTransactionVisual:function(){return i0},WuiVisual:function(){return rE},WuiVisualThumbnail:function(){return oL},WuiWalletImage:function(){return rz},customElement:function(){return e$},initializeTheming:function(){return ek},setColorTheme:function(){return eE},setThemeVariables:function(){return eS},swapInputMaskBottomSvg:function(){return ev},swapInputMaskTopSvg:function(){return eb}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(t,e))}return e}toString(){return this.cssText}}let d=e=>new u("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new u(r,e,l)},p=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},g=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return d(t)})(e):e,{is:f,defineProperty:w,getOwnPropertyDescriptor:m,getOwnPropertyNames:v,getOwnPropertySymbols:b,getPrototypeOf:y}=Object,x=globalThis,C=x.trustedTypes,k=C?C.emptyScript:"",E=x.reactiveElementPolyfillSupport,S=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},A=(e,t)=>!f(e,t),T={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class R extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=T){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&w(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:o}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){let n=i?.call(this);o.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??T}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties,t=[...v(e),...b(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let o=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??A)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[S("elementProperties")]=new Map,R[S("finalized")]=new Map,E?.({ReactiveElement:R}),(x.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=globalThis,I=$.trustedTypes,P=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+N,M=`<${j}>`,D=document,U=()=>D.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,z=e=>B(e)||"function"==typeof e?.[Symbol.iterator],W="[ 	\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,Z=/>/g,V=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,Y=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),X=K(1),J=K(2),Q=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),et=new WeakMap,er=D.createTreeWalker(D,129);function ei(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let eo=(e,t)=>{let r=e.length-1,i=[],o,n=2===t?"<svg>":"",a=H;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===H?"!--"===l[1]?a=F:void 0!==l[1]?a=Z:void 0!==l[2]?(G.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=V):void 0!==l[3]&&(a=V):a===V?">"===l[0]?(a=o??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?V:'"'===l[3]?Y:q):a===Y||a===q?a=V:a===F||a===Z?a=H:(a=V,o=void 0);let d=a===V&&e[t+1].startsWith("/>")?" ":"";n+=a===H?r+M:c>=0?(i.push(s),r.slice(0,c)+O+r.slice(c)+N+d):r+N+(-2===c?t:d)}return[ei(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class en{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0,a=e.length-1,s=this.parts,[l,c]=eo(e,t);if(this.el=en.createElement(l,r),er.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=er.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(O)){let t=c[n++],r=i.getAttribute(e).split(N),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?eu:"?"===a[1]?ed:"@"===a[1]?eh:ec}),i.removeAttribute(e)}else e.startsWith(N)&&(s.push({type:6,index:o}),i.removeAttribute(e));if(G.test(i.tagName)){let e=i.textContent.split(N),t=e.length-1;if(t>0){i.textContent=I?I.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],U()),er.nextNode(),s.push({type:2,index:++o});i.append(e[t],U())}}}else if(8===i.nodeType){if(i.data===j)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(N,e+1));)s.push({type:7,index:o}),e+=N.length-1}}o++}}static createElement(e,t){let r=D.createElement("template");return r.innerHTML=e,r}}function ea(e,t,r=e,i){if(t===Q)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl,n=L(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=ea(e,o._$AS(e,t.values),o,i)),t}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);er.currentNode=i;let o=er.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new el(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new ep(o,this,e)),this._$AV.push(t),s=r[++a]}n!==s?.index&&(o=er.nextNode(),n++)}return er.currentNode=D,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class el{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){L(e=ea(this,e,t))?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==Q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):z(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==ee&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=en.createElement(ei(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new es(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new en(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let o of e)i===t.length?t.push(r=new el(this.S(U()),this.S(U()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(e,t=this,r,i){let o=this.strings,n=!1;if(void 0===o)(n=!L(e=ea(this,e,t,0))||e!==this._$AH&&e!==Q)&&(this._$AH=e);else{let i,a;let s=e;for(e=o[0],i=0;i<o.length-1;i++)(a=ea(this,s[r+i],t,i))===Q&&(a=this._$AH[i]),n||=!L(a)||a!==this._$AH[i],a===ee?e=ee:e!==ee&&(e+=(a??"")+o[i+1]),this._$AH[i]=a}n&&!i&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}}class ed extends ec{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class eh extends ec{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??ee)===Q)return;let r=this._$AH,i=e===ee&&r!==ee||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==ee&&(r===ee||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ep{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}}let eg=$.litHtmlPolyfillSupport;eg?.(en,el),($.litHtmlVersions??=[]).push("3.1.4");let ef=(e,t,r)=>{let i=r?.renderBefore??t,o=i._$litPart$;if(void 0===o){let e=r?.renderBefore??null;i._$litPart$=o=new el(t.insertBefore(U(),e),e,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ew extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ef(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}ew._$litElement$=!0,ew.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ew});let em=globalThis.litElementPolyfillSupport;em?.({LitElement:ew}),(globalThis.litElementVersions??=[]).push("4.0.6");let ev=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,eb=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var ey,ex,eC=r(58376);function ek(e,t){i=document.createElement("style"),o=document.createElement("style"),n=document.createElement("style"),i.textContent=e_(e).core.cssText,o.textContent=e_(e).dark.cssText,n.textContent=e_(e).light.cssText,document.head.appendChild(i),document.head.appendChild(o),document.head.appendChild(n),eE(t)}function eE(e){o&&n&&("light"===e?(o.removeAttribute("media"),n.media="enabled"):(n.removeAttribute("media"),o.media="enabled"))}function eS(e){i&&o&&n&&(i.textContent=e_(e).core.cssText,o.textContent=e_(e).dark.cssText,n.textContent=e_(e).light.cssText)}function e_(e){return{core:h`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${d(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${d(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${d(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${d(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${d(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${d((0,eC.tU)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${d((0,eC.tU)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${d((0,eC.tU)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${d((0,eC.tU)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}let eA=h`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,eT=h`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eR=h`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function e$(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var eI=h`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let eP=class extends ew{render(){return X`<slot></slot>`}};eP.styles=[eA,eI],eP=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([e$("wui-card")],eP);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eO={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:A},eN=(e=eO,t,r)=>{let{kind:i,metadata:o}=r,n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){let{name:i}=r;return function(r){let o=this[i];t.call(this,r),this.requestUpdate(i,o,e)}}throw Error("Unsupported decorator location: "+i)};function ej(e){return(t,r)=>"object"==typeof r?eN(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function eM(e){return ej({...e,state:!0,attribute:!1})}var eD=h`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let eU=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,eL=J`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eB=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,ez=J`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eW=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eH=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eF=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eV=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eq=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,eY=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,eG=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,eK=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,eX=J`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,eJ=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,e0=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,e1=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e2=J`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,e3=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,e4=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,e6=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,e8=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,e9=J` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e7=J`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,te=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,tt=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tr=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ti=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,to=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,tn=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ta=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ts=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tl=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tc=J`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,tu=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,td=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,th=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tp=J`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tg=J`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,tf=J`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,tw=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,tm=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,tv=J` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,tb=J`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,ty=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tx=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,tC=J`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,tk=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tE=J`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,tS=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,t_=J`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,tA=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,tT=J`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,tR=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t$=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,tI=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tP=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tO=J`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,tN=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,tj=J`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tM=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tD=J`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tU=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,tL=J`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,tB=J`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var tz=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tW={add:eU,allWallets:eL,arrowBottomCircle:eB,appStore:ez,apple:eW,arrowBottom:eH,arrowLeft:eF,arrowRight:eZ,arrowTop:eV,bank:eq,browser:eY,card:eG,checkmark:eX,checkmarkBold:eK,chevronBottom:eJ,chevronLeft:eQ,chevronRight:e0,chevronTop:e1,chromeStore:e2,clock:e3,close:e5,compass:e6,coinPlaceholder:e4,copy:e8,cursor:e9,cursorTransparent:e7,desktop:te,disconnect:tt,discord:tr,etherscan:ti,extension:to,externalLink:tn,facebook:ta,filters:ts,github:tl,google:tc,helpCircle:tu,id:tL,infoCircle:td,mail:th,mobile:tp,more:tg,networkPlaceholder:tf,nftPlaceholder:tw,off:tm,playStore:tv,plus:tb,qrCode:ty,recycleHorizontal:tx,refresh:tC,search:tk,send:tE,swapHorizontal:tS,swapHorizontalMedium:tA,swapHorizontalBold:t_,swapHorizontalRoundedBold:tT,swapVertical:tR,telegram:t$,twitch:tI,twitter:tB,twitterIcon:tP,verify:tO,verifyFilled:tN,wallet:tM,walletConnect:tD,walletPlaceholder:tj,warningCircle:tU,x:tB},tH=class extends ew{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,X`${tW[this.name]}`}};tH.styles=[eA,eR,eD],tz([ej()],tH.prototype,"size",void 0),tz([ej()],tH.prototype,"name",void 0),tz([ej()],tH.prototype,"color",void 0),tH=tz([e$("wui-icon")],tH);var tF=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,tZ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tV=class extends ew{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,X`<img src=${this.src} alt=${this.alt} />`}};tV.styles=[eA,eR,tF],tZ([ej()],tV.prototype,"src",void 0),tZ([ej()],tV.prototype,"alt",void 0),tZ([ej()],tV.prototype,"size",void 0),tV=tZ([e$("wui-image")],tV);var tq=h`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let tY=class extends ew{render(){return X`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tY.styles=[eA,tq],tY=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([e$("wui-loading-hexagon")],tY);var tG=h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,tK=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let tX=class extends ew{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${"inherit"===this.color?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,X`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tX.styles=[eA,tG],tK([ej()],tX.prototype,"color",void 0),tK([ej()],tX.prototype,"size",void 0),tX=tK([e$("wui-loading-spinner")],tX);var tJ=h`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,tQ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t0=class extends ew{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return X`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};t0.styles=[eA,tJ],tQ([ej({type:Number})],t0.prototype,"radius",void 0),t0=tQ([e$("wui-loading-thumbnail")],t0);var t1=h`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,t2=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t3=class extends ew{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,X`<slot></slot>`}};t3.styles=[t1],t2([ej()],t3.prototype,"width",void 0),t2([ej()],t3.prototype,"height",void 0),t2([ej()],t3.prototype,"borderRadius",void 0),t2([ej()],t3.prototype,"variant",void 0),t3=t2([e$("wui-shimmer")],t3);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t5=e=>(...t)=>({_$litDirective$:e,values:t});class t4{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t6=t5(class extends t4{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return Q}});var t8=h`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,t9=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let t7=class extends ew{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,X`<slot class=${t6(e)}></slot>`}};t7.styles=[eA,t8],t9([ej()],t7.prototype,"variant",void 0),t9([ej()],t7.prototype,"color",void 0),t9([ej()],t7.prototype,"align",void 0),t7=t9([e$("wui-text")],t7);let re=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,rt=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,rr=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,ri=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,ro=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,rn=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ra=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,rs=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,rl=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,rc=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ru=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,rd=J`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,rh=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,rp=J`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,rg=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,rf=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,rw=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,rm=J`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,rv=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,rb=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,ry=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;var rx=h`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,rC=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rk={browser:re,dao:rt,defi:rr,defiAlt:ri,eth:ro,layers:rn,lock:ra,login:rs,network:rl,nft:rc,noun:ru,profile:rd,system:rh,coinbase:rp,onrampCard:rm,moonpay:rg,stripe:rf,paypal:rw,google:rv,pencil:rb,lightbulb:ry},rE=class extends ew{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,X`${rk[this.name]}`}};rE.styles=[eA,rx],rC([ej()],rE.prototype,"name",void 0),rC([ej()],rE.prototype,"size",void 0),rE=rC([e$("wui-visual")],rE);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rS=e=>e??ee,r_={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{let t=new URL(e);return t.hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),i=this.hexToRgb(r),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=Number(o?.replace("px","")),a=100-3*n,s=`${a}% ${a}% at 65% 40%`,l=[];for(let e=0;e<5;e+=1){let t=this.tintColor(i,.15*e);l.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${l[0]};
    --local-color-2: ${l[1]};
    --local-color-3: ${l[2]};
    --local-color-4: ${l[3]};
    --local-color-5: ${l[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,o]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(o+(255-o)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){let i=e.toString().length>=t?Number(e).toFixed(r):e;return i},formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})};var rA=h`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,rT=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rR=class extends ew{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&r_.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&r_.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&r_.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&r_.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&r_.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&r_.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&r_.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&r_.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};rR.styles=[eA,rA],rT([ej()],rR.prototype,"flexDirection",void 0),rT([ej()],rR.prototype,"flexWrap",void 0),rT([ej()],rR.prototype,"flexBasis",void 0),rT([ej()],rR.prototype,"flexGrow",void 0),rT([ej()],rR.prototype,"flexShrink",void 0),rT([ej()],rR.prototype,"alignItems",void 0),rT([ej()],rR.prototype,"justifyContent",void 0),rT([ej()],rR.prototype,"columnGap",void 0),rT([ej()],rR.prototype,"rowGap",void 0),rT([ej()],rR.prototype,"gap",void 0),rT([ej()],rR.prototype,"padding",void 0),rT([ej()],rR.prototype,"margin",void 0),rR=rT([e$("wui-flex")],rR);var r$=h`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,rI=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rP=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return X`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",X`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=r_.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};rP.styles=[eA,r$],rI([ej()],rP.prototype,"imageSrc",void 0),rI([ej()],rP.prototype,"alt",void 0),rI([ej()],rP.prototype,"address",void 0),rP=rI([e$("wui-avatar")],rP);var rO=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,rN=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rj=class extends ew{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,o="opaque"===this.background,n="accent-100"===this.backgroundColor&&o||"success-100"===this.backgroundColor&&o||"error-100"===this.backgroundColor&&o||"inverse-100"===this.backgroundColor&&o,a=`var(--wui-color-${this.backgroundColor})`;return n?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${n||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,X` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};rj.styles=[eA,eT,rO],rN([ej()],rj.prototype,"size",void 0),rN([ej()],rj.prototype,"backgroundColor",void 0),rN([ej()],rj.prototype,"iconColor",void 0),rN([ej()],rj.prototype,"iconSize",void 0),rN([ej()],rj.prototype,"background",void 0),rN([ej({type:Boolean})],rj.prototype,"border",void 0),rN([ej()],rj.prototype,"borderColor",void 0),rN([ej()],rj.prototype,"icon",void 0),rj=rN([e$("wui-icon-box")],rj);var rM=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,rD=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rU=class extends ew{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return X`
      <button
        ?disabled=${this.disabled}
        class=${rS(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?r_.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return X` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return X`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};rU.styles=[eA,eT,rM],rD([ej()],rU.prototype,"networkSrc",void 0),rD([ej()],rU.prototype,"avatarSrc",void 0),rD([ej()],rU.prototype,"balance",void 0),rD([ej({type:Boolean})],rU.prototype,"isUnsupportedChain",void 0),rD([ej({type:Boolean})],rU.prototype,"disabled",void 0),rD([ej()],rU.prototype,"address",void 0),rD([ej()],rU.prototype,"profileName",void 0),rD([ej()],rU.prototype,"charsStart",void 0),rD([ej()],rU.prototype,"charsEnd",void 0),rU=rD([e$("wui-account-button")],rU);var rL=h`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,rB=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rz=class extends ew{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),X`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?X`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:X`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rz.styles=[eA,rL],rB([ej()],rz.prototype,"size",void 0),rB([ej()],rz.prototype,"name",void 0),rB([ej()],rz.prototype,"imageSrc",void 0),rB([ej()],rz.prototype,"walletIcon",void 0),rB([ej({type:Boolean})],rz.prototype,"installed",void 0),rB([ej()],rz.prototype,"badgeSize",void 0),rz=rB([e$("wui-wallet-image")],rz);var rW=h`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,rH=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rF=class extends ew{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return X`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>X`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${rS(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>X` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};rF.styles=[eA,rW],rH([ej({type:Array})],rF.prototype,"walletImages",void 0),rF=rH([e$("wui-all-wallets-image")],rF);var rZ=h`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='main']:hover:enabled {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='main']:active:enabled {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='inverse']:hover:enabled {
    background-color: var(--wui-color-inverse-100);
  }

  button[data-variant='accent']:hover:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  button[data-variant='accent-error']:hover:enabled {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
  }

  button[data-variant='accent-success']:hover:enabled {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
  }

  button[data-variant='neutral']:hover:enabled {
    background: var(--wui-color-gray-glass-005);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,rV=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let rq={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},rY={lg:"paragraph-600",md:"small-600"},rG={lg:"md",md:"md"},rK=class extends ew{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;let e=this.textVariant??rY[this.size];return X`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){let e=rG[this.size],t=this.disabled?rq.disabled:rq[this.variant];return X`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return X``}};rK.styles=[eA,eT,rZ],rV([ej()],rK.prototype,"size",void 0),rV([ej({type:Boolean})],rK.prototype,"disabled",void 0),rV([ej({type:Boolean})],rK.prototype,"fullWidth",void 0),rV([ej({type:Boolean})],rK.prototype,"loading",void 0),rV([ej()],rK.prototype,"variant",void 0),rV([ej({type:Boolean})],rK.prototype,"hasIconLeft",void 0),rV([ej({type:Boolean})],rK.prototype,"hasIconRight",void 0),rV([ej()],rK.prototype,"borderRadius",void 0),rV([ej()],rK.prototype,"textVariant",void 0),rK=rV([e$("wui-button")],rK);let rX=J`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rJ=h`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`,rQ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r0=class extends ew{constructor(){super(...arguments),this.type="wallet"}render(){return X`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?X` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${rX}`:X`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};r0.styles=[eA,eT,rJ],rQ([ej()],r0.prototype,"type",void 0),r0=rQ([e$("wui-card-select-loader")],r0);let r1=J`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,r2=J`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var r3=h`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,r5=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r4=class extends ew{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-color-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,X`${this.templateVisual()} ${({sm:r1,md:rX,lg:r2})[this.size]}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};r4.styles=[eA,r3],r5([ej()],r4.prototype,"size",void 0),r5([ej()],r4.prototype,"name",void 0),r5([ej()],r4.prototype,"imageSrc",void 0),r5([ej({type:Boolean})],r4.prototype,"selected",void 0),r4=r5([e$("wui-network-image")],r4);var r6=h`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,r8=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends ew{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return X`
      <button data-selected=${rS(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?X`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${rS(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:X`
      <wui-wallet-image
        size="md"
        imageSrc=${rS(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};r9.styles=[eA,eT,r6],r8([ej()],r9.prototype,"name",void 0),r8([ej()],r9.prototype,"type",void 0),r8([ej()],r9.prototype,"imageSrc",void 0),r8([ej({type:Boolean})],r9.prototype,"disabled",void 0),r8([ej({type:Boolean})],r9.prototype,"selected",void 0),r8([ej({type:Boolean})],r9.prototype,"installed",void 0),r9=r8([e$("wui-card-select")],r9);var r7=h`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`,ie=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends ew{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return X`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:r_.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}};it.styles=[eA,eT,r7],ie([ej()],it.prototype,"variant",void 0),ie([ej()],it.prototype,"imageSrc",void 0),ie([ej({type:Boolean})],it.prototype,"disabled",void 0),ie([ej()],it.prototype,"icon",void 0),ie([ej()],it.prototype,"href",void 0),ie([ej()],it.prototype,"text",void 0),it=ie([e$("wui-chip")],it);var ir=h`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,ii=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let io=class extends ew{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return X`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?X`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};io.styles=[eA,eT,ir],ii([ej()],io.prototype,"size",void 0),ii([ej({type:Boolean})],io.prototype,"loading",void 0),io=ii([e$("wui-connect-button")],io);var ia=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,is=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let il=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return X`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};il.styles=[eA,eT,ia],is([ej({type:Boolean})],il.prototype,"disabled",void 0),is([ej()],il.prototype,"label",void 0),is([ej()],il.prototype,"buttonLabel",void 0),il=is([e$("wui-cta-button")],il);var ic=h`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;let iu=class extends ew{render(){return X`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};iu.styles=[eA,eT,ic],iu=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([e$("wui-details-group")],iu);var id=h`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`,ih=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ip=class extends ew{constructor(){super(...arguments),this.name=""}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};ip.styles=[eA,eT,id],ih([ej()],ip.prototype,"name",void 0),ip=ih([e$("wui-details-group-item")],ip);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{I:ig}={P:O,A:N,C:j,M:1,L:eo,R:es,D:z,V:ea,I:el,H:ec,N:ed,U:eh,B:eu,F:ep},iw=e=>void 0===e.strings,im=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),im(e,t);return!0},iv=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},ib=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),iC(t)}};function iy(e){void 0!==this._$AN?(iv(this),this._$AM=e,ib(this)):this._$AM=e}function ix(e,t=!1,r=0){let i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)im(i[e],!1),iv(i[e]);else null!=i&&(im(i,!1),iv(i))}else im(this,e)}}let iC=e=>{2==e.type&&(e._$AP??=ix,e._$AQ??=iy)};class ik extends t4{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ib(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(im(this,e),iv(this))}setValue(e){if(iw(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let iE=()=>new iS;class iS{}let i_=new WeakMap,iA=t5(class extends ik{render(e){return ee}update(e,[t]){let r=t!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ee}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){let t=this.ht??globalThis,r=i_.get(t);void 0===r&&(r=new WeakMap,i_.set(t,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?i_.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var iT=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,iR=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let i$=class extends ew{constructor(){super(...arguments),this.inputElementRef=iE(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,r={[t]:!0,[e]:!!this.inputRightPadding};return X`${this.templateIcon()}
      <input
        ${iA(this.inputElementRef)}
        class=${t6(r)}
        type=${this.type}
        enterkeyhint=${rS(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?X`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};i$.styles=[eA,eT,iT],iR([ej()],i$.prototype,"size",void 0),iR([ej()],i$.prototype,"icon",void 0),iR([ej({type:Boolean})],i$.prototype,"disabled",void 0),iR([ej()],i$.prototype,"placeholder",void 0),iR([ej()],i$.prototype,"type",void 0),iR([ej()],i$.prototype,"keyHint",void 0),iR([ej()],i$.prototype,"value",void 0),iR([ej()],i$.prototype,"inputRightPadding",void 0),i$=iR([e$("wui-input-text")],i$);var iI=h`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,iP=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iO=class extends ew{constructor(){super(...arguments),this.disabled=!1}render(){return X`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};iO.styles=[eA,iI],iP([ej()],iO.prototype,"errorMessage",void 0),iP([ej({type:Boolean})],iO.prototype,"disabled",void 0),iP([ej()],iO.prototype,"value",void 0),iO=iP([e$("wui-email-input")],iO);var iN=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`,ij=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iM=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return X`
      <wui-input-text
        value=${rS(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testId="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return X`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${eC.bq.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?X`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?X`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};iM.styles=[eA,iN],ij([ej()],iM.prototype,"errorMessage",void 0),ij([ej({type:Boolean})],iM.prototype,"disabled",void 0),ij([ej()],iM.prototype,"value",void 0),ij([ej({type:Boolean})],iM.prototype,"loading",void 0),iM=ij([e$("wui-ens-input")],iM);var iD=h`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,iU=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iL=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};iL.styles=[eA,eT,eR,iD],iU([ej()],iL.prototype,"size",void 0),iU([ej({type:Boolean})],iL.prototype,"disabled",void 0),iU([ej()],iL.prototype,"icon",void 0),iU([ej()],iL.prototype,"iconColor",void 0),iL=iU([e$("wui-icon-link")],iL);var iB=h`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,iz=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iW=class extends ew{constructor(){super(...arguments),this.icon="copy"}render(){return X`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};iW.styles=[eA,eT,iB],iz([ej()],iW.prototype,"icon",void 0),iW=iz([e$("wui-input-element")],iW);var iH=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`,iF=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iZ=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return X`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};iZ.styles=[eA,eT,iH],iF([ej({type:Boolean})],iZ.prototype,"disabled",void 0),iF([ej({type:String})],iZ.prototype,"value",void 0),iZ=iF([e$("wui-input-numeric")],iZ);var iV=h`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,iq=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iY=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};iY.styles=[eA,eT,iV],iq([ej({type:Boolean})],iY.prototype,"disabled",void 0),iq([ej()],iY.prototype,"color",void 0),iY=iq([e$("wui-link")],iY);var iG=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,iK=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let iX=class extends ew{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return X`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${rS(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return X`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return X`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return X`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?X`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:X``}chevronTemplate(){return this.chevron?X`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};iX.styles=[eA,eT,iG],iK([ej()],iX.prototype,"icon",void 0),iK([ej()],iX.prototype,"iconSize",void 0),iK([ej()],iX.prototype,"variant",void 0),iK([ej()],iX.prototype,"iconVariant",void 0),iK([ej({type:Boolean})],iX.prototype,"disabled",void 0),iK([ej()],iX.prototype,"imageSrc",void 0),iK([ej()],iX.prototype,"alt",void 0),iK([ej({type:Boolean})],iX.prototype,"chevron",void 0),iK([ej({type:Boolean})],iX.prototype,"loading",void 0),iX=iK([e$("wui-list-item")],iX),(ey=ex||(ex={})).approve="approved",ey.bought="bought",ey.borrow="borrowed",ey.burn="burnt",ey.cancel="canceled",ey.claim="claimed",ey.deploy="deployed",ey.deposit="deposited",ey.execute="executed",ey.mint="minted",ey.receive="received",ey.repay="repaid",ey.send="sent",ey.sell="sold",ey.stake="staked",ey.trade="swapped",ey.unstake="unstaked",ey.withdraw="withdrawn";var iJ=h`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,iQ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let i0=class extends ew{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,X`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type,i=2===this.images.length;return i&&(e?.url||t?.url)?X`<div class="swap-images-container">
        ${e?.url?X`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?X`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?X`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?X`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:X`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?X`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};i0.styles=[iJ],iQ([ej()],i0.prototype,"type",void 0),iQ([ej()],i0.prototype,"status",void 0),iQ([ej()],i0.prototype,"direction",void 0),iQ([ej({type:Boolean})],i0.prototype,"onlyDirectionIcon",void 0),iQ([ej({type:Array})],i0.prototype,"images",void 0),iQ([ej({type:Object})],i0.prototype,"secondImage",void 0),i0=iQ([e$("wui-transaction-visual")],i0);var i1=h`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,i2=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let i3=class extends ew{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return X`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${rS(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${rS(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${ex[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?X`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?X`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};i3.styles=[eA,i1],i2([ej()],i3.prototype,"type",void 0),i2([ej({type:Array})],i3.prototype,"descriptions",void 0),i2([ej()],i3.prototype,"date",void 0),i2([ej({type:Boolean})],i3.prototype,"onlyDirectionIcon",void 0),i2([ej()],i3.prototype,"status",void 0),i2([ej()],i3.prototype,"direction",void 0),i2([ej({type:Array})],i3.prototype,"images",void 0),i2([ej({type:Array})],i3.prototype,"price",void 0),i2([ej({type:Array})],i3.prototype,"amount",void 0),i2([ej({type:Array})],i3.prototype,"symbol",void 0),i3=i2([e$("wui-transaction-list-item")],i3);var i5=h`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let i4=class extends ew{render(){return X`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};i4.styles=[eA,i5],i4=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([e$("wui-transaction-list-item-loader")],i4);var i6=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,i8=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let i9=class extends ew{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e="md"===this.size?"mini-700":"micro-700";return X`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};i9.styles=[eA,i6],i8([ej()],i9.prototype,"variant",void 0),i8([ej()],i9.prototype,"size",void 0),i9=i8([e$("wui-tag")],i9);var i7=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,oe=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ot=class extends ew{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?X` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?X` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?X`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:X`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?X`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?X`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};ot.styles=[eA,eT,i7],oe([ej({type:Array})],ot.prototype,"walletImages",void 0),oe([ej()],ot.prototype,"imageSrc",void 0),oe([ej()],ot.prototype,"name",void 0),oe([ej()],ot.prototype,"tagLabel",void 0),oe([ej()],ot.prototype,"tagVariant",void 0),oe([ej()],ot.prototype,"icon",void 0),oe([ej()],ot.prototype,"walletIcon",void 0),oe([ej({type:Boolean})],ot.prototype,"installed",void 0),oe([ej({type:Boolean})],ot.prototype,"disabled",void 0),oe([ej({type:Boolean})],ot.prototype,"showAllWallets",void 0),ot=oe([e$("wui-list-wallet")],ot);var or=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,oi=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oo=class extends ew{constructor(){super(...arguments),this.logo="google"}render(){return X`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};oo.styles=[eA,or],oi([ej()],oo.prototype,"logo",void 0),oo=oi([e$("wui-logo")],oo);var on=h`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,oa=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let os=class extends ew{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};os.styles=[eA,eT,on],oa([ej()],os.prototype,"logo",void 0),oa([ej({type:Boolean})],os.prototype,"disabled",void 0),os=oa([e$("wui-logo-select")],os);var ol=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`,oc=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ou=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?X`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ou.styles=[eA,eT,ol],oc([ej()],ou.prototype,"imageSrc",void 0),oc([ej({type:Boolean})],ou.prototype,"isUnsupportedChain",void 0),oc([ej({type:Boolean})],ou.prototype,"disabled",void 0),ou=oc([e$("wui-network-button")],ou);var od=h`
  :host {
    position: relative;
    display: block;
  }
`,oh=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let op=class extends ew{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>{let t=this.values.slice(0,e);return t.every(e=>""!==e)},this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let o=i.selectionStart;switch(e.key){case"ArrowLeft":o&&i.setSelectionRange(o+1,o+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return X`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>X`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],o=e||(i?this.getInputElement(i):void 0);o&&(o.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;if("insertFromPaste"===e.inputType)this.handlePaste(i,r,t);else{let o=r_.isNumber(r);o&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0],o=i&&r_.isNumber(i);if(o){this.updateInput(e,r,i);let o=t.substring(1);if(r+1<this.length&&o.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,o,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};op.styles=[eA,od],oh([ej({type:Number})],op.prototype,"length",void 0),oh([ej({type:String})],op.prototype,"otp",void 0),oh([eM()],op.prototype,"values",void 0),op=oh([e$("wui-otp")],op);var og=r(75298);function of(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let ow={generate(e,t,r){let i="#141414",o=[],n=function(e,t){let r=Array.prototype.slice.call(og.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/n.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(n.length-7)*a*e,l=(n.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);o.push(J`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let l=Math.floor((r+25)/a),c=n.length/2-l/2,u=n.length/2+l/2-1,d=[];n.forEach((e,t)=>{e.forEach((e,r)=>{!n[t][r]||t<7&&r<7||t>n.length-8&&r<7||t<7&&r>n.length-8||t>c&&t<u&&r>c&&r<u||d.push([t*a+a/2,r*a+a/2])})});let h={};return d.forEach(([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]}),Object.entries(h).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!of(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{o.push(J`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(h).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>of(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>of(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{o.push(J`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),o}};var om=h`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,ov=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ob=class extends ew{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,X`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return J`
      <svg height=${e} width=${e}>
        ${ow.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:X`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ob.styles=[eA,om],ov([ej()],ob.prototype,"uri",void 0),ov([ej({type:Number})],ob.prototype,"size",void 0),ov([ej()],ob.prototype,"theme",void 0),ov([ej()],ob.prototype,"imageSrc",void 0),ov([ej()],ob.prototype,"alt",void 0),ov([ej({type:Boolean})],ob.prototype,"arenaClear",void 0),ob=ov([e$("wui-qr-code")],ob);var oy=h`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let ox=class extends ew{constructor(){super(...arguments),this.inputComponentRef=iE()}render(){return X`
      <wui-input-text
        ${iA(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ox.styles=[eA,oy],ox=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([e$("wui-search-bar")],ox);var oC=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,ok=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oE=class extends ew{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return X`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};oE.styles=[eA,oC],ok([ej()],oE.prototype,"backgroundColor",void 0),ok([ej()],oE.prototype,"iconColor",void 0),ok([ej()],oE.prototype,"icon",void 0),ok([ej()],oE.prototype,"message",void 0),oE=ok([e$("wui-snackbar")],oE);var oS=h`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,o_=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oA=class extends ew{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return X`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?X`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],o=r?.querySelector("wui-text"),n=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=n?.getBoundingClientRect();r&&o&&!t&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&n&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};oA.styles=[eA,eT,oS],o_([ej({type:Array})],oA.prototype,"tabs",void 0),o_([ej()],oA.prototype,"onTabChange",void 0),o_([ej({type:Array})],oA.prototype,"buttons",void 0),o_([ej({type:Boolean})],oA.prototype,"disabled",void 0),o_([ej()],oA.prototype,"localTabWidth",void 0),o_([eM()],oA.prototype,"activeTab",void 0),o_([eM()],oA.prototype,"isDense",void 0),oA=o_([e$("wui-tabs")],oA);var oT=h`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,oR=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let o$=class extends ew{constructor(){super(...arguments),this.text=""}render(){return X`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};o$.styles=[eA,eT,oT],oR([ej()],o$.prototype,"imageSrc",void 0),oR([ej()],o$.prototype,"text",void 0),o$=oR([e$("wui-token-button")],o$);var oI=h`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,oP=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oO=class extends ew{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,X`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};oO.styles=[eA,eT,oI],oP([ej()],oO.prototype,"placement",void 0),oP([ej()],oO.prototype,"variant",void 0),oP([ej()],oO.prototype,"message",void 0),oO=oP([e$("wui-tooltip")],oO);var oN=h`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,oj=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oM=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){let e=this.amount&&this.price?eC.C6.multiply(this.price,this.amount)?.toFixed(3):null;return X`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?X`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${r_.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount?X`<wui-text variant="small-400" color="fg-200">
                  ${r_.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?X`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};oM.styles=[eA,eT,oN],oj([ej()],oM.prototype,"imageSrc",void 0),oj([ej()],oM.prototype,"name",void 0),oj([ej()],oM.prototype,"symbol",void 0),oj([ej()],oM.prototype,"price",void 0),oj([ej()],oM.prototype,"amount",void 0),oM=oj([e$("wui-token-list-item")],oM);var oD=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,oU=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oL=class extends ew{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,X`${this.templateVisual()}`}templateVisual(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:X`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};oL.styles=[eA,oD],oU([ej()],oL.prototype,"imageSrc",void 0),oU([ej()],oL.prototype,"alt",void 0),oU([ej({type:Boolean})],oL.prototype,"borderRadiusFull",void 0),oL=oU([e$("wui-visual-thumbnail")],oL);var oB=h`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`,oz=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oW=class extends ew{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return X`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};oW.styles=[eA,eT,oB],oz([ej()],oW.prototype,"label",void 0),oz([ej()],oW.prototype,"description",void 0),oz([ej()],oW.prototype,"icon",void 0),oW=oz([e$("wui-notice-card")],oW);var oH=h`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,oF=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oZ=class extends ew{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;let r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return X`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?X` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};oZ.styles=[eA,eT,oH],oF([ej()],oZ.prototype,"textTitle",void 0),oF([ej()],oZ.prototype,"overflowedContent",void 0),oZ=oF([e$("wui-list-accordion")],oZ);var oV=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,oq=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oY=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?X`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?X` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};oY.styles=[eA,eT,oV],oq([ej()],oY.prototype,"imageSrc",void 0),oq([ej()],oY.prototype,"textTitle",void 0),oq([ej()],oY.prototype,"textValue",void 0),oY=oq([e$("wui-list-content")],oY);var oG=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,oK=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let oX=class extends ew{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return X`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?X`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:X`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};oX.styles=[eA,eT,oG],oK([ej()],oX.prototype,"imageSrc",void 0),oK([ej()],oX.prototype,"name",void 0),oK([ej({type:Boolean})],oX.prototype,"disabled",void 0),oK([ej({type:Boolean})],oX.prototype,"transparent",void 0),oX=oK([e$("wui-list-network")],oX);var oJ=h`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,oQ=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let o0=class extends ew{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return X`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?X`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};o0.styles=[eA,eT,oJ],oQ([ej()],o0.prototype,"amount",void 0),oQ([ej()],o0.prototype,"networkCurreny",void 0),oQ([ej()],o0.prototype,"networkImageUrl",void 0),oQ([ej()],o0.prototype,"receiverAddress",void 0),oQ([ej()],o0.prototype,"addressExplorerUrl",void 0),o0=oQ([e$("wui-list-wallet-transaction")],o0);var o1=h`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,o2=r(60969),o3=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let o5=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return X`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?X`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:X`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await o2.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return X`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return X`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return X`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};o5.styles=[eA,eT,o1],o3([ej({type:Boolean})],o5.prototype,"disabled",void 0),o3([ej()],o5.prototype,"color",void 0),o3([ej()],o5.prototype,"label",void 0),o3([ej()],o5.prototype,"purchaseValue",void 0),o3([ej()],o5.prototype,"purchaseCurrency",void 0),o3([ej()],o5.prototype,"date",void 0),o3([ej({type:Boolean})],o5.prototype,"completed",void 0),o3([ej({type:Boolean})],o5.prototype,"inProgress",void 0),o3([ej({type:Boolean})],o5.prototype,"failed",void 0),o3([ej()],o5.prototype,"onClick",void 0),o3([ej()],o5.prototype,"symbol",void 0),o3([ej()],o5.prototype,"icon",void 0),o5=o3([e$("wui-onramp-activity-item")],o5);var o4=h`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,o6=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let o8=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${rS(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?X`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:X`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=o2.NetworkController.getRequestedCaipNetworks(),t=e?.filter(e=>e?.imageId)?.slice(0,5);return X`
      <wui-flex class="networks">
        ${t?.map(e=>X`
            <wui-flex class="network-icon">
              <wui-image src=${rS(o2.fz.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};o8.styles=[eA,eT,o4],o6([ej({type:Boolean})],o8.prototype,"disabled",void 0),o6([ej()],o8.prototype,"color",void 0),o6([ej()],o8.prototype,"name",void 0),o6([ej()],o8.prototype,"label",void 0),o6([ej()],o8.prototype,"feeRange",void 0),o6([ej({type:Boolean})],o8.prototype,"loading",void 0),o6([ej()],o8.prototype,"onClick",void 0),o8=o6([e$("wui-onramp-provider-item")],o8);var o9=h`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`,o7=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ne=class extends ew{constructor(){super(...arguments),this.text=""}render(){return X`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};ne.styles=[eA,eT,o9],o7([ej()],ne.prototype,"text",void 0),ne=o7([e$("wui-promo")],ne);var nt=h`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`,nr=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ni=class extends ew{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return X`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ni.styles=[eA,nt],nr([ej()],ni.prototype,"dollars",void 0),nr([ej()],ni.prototype,"pennies",void 0),ni=nr([e$("wui-balance")],ni);var no=h`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`,nn=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let na=class extends ew{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return X`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${r_.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?X`<wui-image src=${this.networkSrc}></wui-image>`:X`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};na.styles=[eA,eT,no],nn([ej()],na.prototype,"networkSrc",void 0),nn([ej()],na.prototype,"avatarSrc",void 0),nn([ej()],na.prototype,"profileName",void 0),nn([ej()],na.prototype,"address",void 0),nn([ej()],na.prototype,"icon",void 0),na=nn([e$("wui-profile-button")],na);var ns=h`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,nl=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nc=class extends ew{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let e="sm"===this.size?"small-600":"paragraph-600";return X`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};nc.styles=[eA,eT,ns],nl([ej()],nc.prototype,"variant",void 0),nl([ej()],nc.prototype,"imageSrc",void 0),nl([ej({type:Boolean})],nc.prototype,"disabled",void 0),nl([ej()],nc.prototype,"icon",void 0),nl([ej()],nc.prototype,"size",void 0),nl([ej()],nc.prototype,"text",void 0),nc=nl([e$("wui-chip-button")],nc);var nu=h`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,nd=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nh=class extends ew{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return X`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return X` <wui-flex class="networks">
      ${e?.map(e=>X` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};nh.styles=[eA,eT,nu],nd([ej({type:Array})],nh.prototype,"networkImages",void 0),nd([ej()],nh.prototype,"text",void 0),nh=nd([e$("wui-compatible-network")],nh);var np=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`,ng=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nf=class extends ew{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return X`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};nf.styles=[eA,eT,np],ng([ej()],nf.prototype,"icon",void 0),ng([ej()],nf.prototype,"text",void 0),nf=ng([e$("wui-banner")],nf);var nw=h`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`,nm=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nv=class extends ew{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return X`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${r_.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?X`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:X`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};nv.styles=[eA,eT,nw],nm([ej()],nv.prototype,"tokenName",void 0),nm([ej()],nv.prototype,"tokenImageUrl",void 0),nm([ej({type:Number})],nv.prototype,"tokenValue",void 0),nm([ej()],nv.prototype,"tokenAmount",void 0),nm([ej()],nv.prototype,"tokenCurrency",void 0),nm([ej({type:Boolean})],nv.prototype,"clickable",void 0),nv=nm([e$("wui-list-token")],nv);var nb=h`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`,ny=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nx=class extends ew{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return X`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?X` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:X`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};nx.styles=[eA,eT,nb],ny([ej()],nx.prototype,"icon",void 0),ny([ej()],nx.prototype,"text",void 0),ny([ej()],nx.prototype,"description",void 0),ny([ej()],nx.prototype,"tag",void 0),ny([ej()],nx.prototype,"iconBackgroundColor",void 0),ny([ej()],nx.prototype,"iconColor",void 0),ny([ej({type:Boolean})],nx.prototype,"disabled",void 0),nx=ny([e$("wui-list-description")],nx);var nC=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;let nk=/[.*+?^${}()|[\]\\]/gu,nE=/[0-9,.]/u;var nS=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let n_=class extends ew{constructor(){super(...arguments),this.inputElementRef=iE(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),X`<input
      ${iA(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let t=e.data;if(t&&this.inputElementRef?.value){if(","===t){let e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else nE.test(t)||(this.inputElementRef.value.value=this.value.replace(RegExp(t.replace(nk,"\\$&"),"gu"),""))}this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};n_.styles=[eA,eT,nC],nS([ej({type:Boolean})],n_.prototype,"disabled",void 0),nS([ej({type:String})],n_.prototype,"value",void 0),nS([ej({type:String})],n_.prototype,"placeholder",void 0),n_=nS([e$("wui-input-amount")],n_);var nA=h`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`,nT=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nR=class extends ew{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return X`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?X`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?X`<wui-image src=${this.imageSrc}></wui-image>`:X`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};nR.styles=[eA,eT,nA],nT([ej()],nR.prototype,"text",void 0),nT([ej()],nR.prototype,"address",void 0),nT([ej()],nR.prototype,"imageSrc",void 0),nT([ej({type:Boolean})],nR.prototype,"isAddress",void 0),nR=nT([e$("wui-preview-item")],nR);var n$=h`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`,nI=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nP=class extends ew{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return X`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};nP.styles=[eA,eT,n$],nI([ej()],nP.prototype,"text",void 0),nI([ej()],nP.prototype,"icon",void 0),nP=nI([e$("wui-icon-button")],nP);var nO=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,nN=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nj=class extends ew{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};nj.styles=[eA,eT,nO],nN([ej()],nj.prototype,"text",void 0),nN([ej({type:Boolean})],nj.prototype,"disabled",void 0),nj=nN([e$("wui-list-button")],nj);var nM=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`,nD=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nU=class extends ew{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return X`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?X` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};nU.styles=[eA,eT,nM],nD([ej()],nU.prototype,"logo",void 0),nD([ej()],nU.prototype,"name",void 0),nD([ej()],nU.prototype,"align",void 0),nD([ej({type:Boolean})],nU.prototype,"disabled",void 0),nU=nD([e$("wui-list-social")],nU);var nL=h`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,nB=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nz=class extends ew{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&r_.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&r_.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&r_.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&r_.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&r_.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&r_.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&r_.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&r_.getSpacingStyles(this.margin,3)};
    `,X`<slot></slot>`}};nz.styles=[eA,nL],nB([ej()],nz.prototype,"gridTemplateRows",void 0),nB([ej()],nz.prototype,"gridTemplateColumns",void 0),nB([ej()],nz.prototype,"justifyItems",void 0),nB([ej()],nz.prototype,"alignItems",void 0),nB([ej()],nz.prototype,"justifyContent",void 0),nB([ej()],nz.prototype,"alignContent",void 0),nB([ej()],nz.prototype,"columnGap",void 0),nB([ej()],nz.prototype,"rowGap",void 0),nB([ej()],nz.prototype,"gap",void 0),nB([ej()],nz.prototype,"padding",void 0),nB([ej()],nz.prototype,"margin",void 0),nz=nB([e$("wui-grid")],nz);var nW=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nH=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let nF=class extends ew{constructor(){super(...arguments),this.text=""}render(){return X`${this.template()}`}template(){return this.text?X`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};nF.styles=[eA,nW],nH([ej()],nF.prototype,"text",void 0),nF=nH([e$("wui-separator")],nF);let nZ={interpolate(e,t,r){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let i=e[0]||0,o=e[1]||0,n=t[0]||0,a=t[1]||0;return r<i?n:r>o?a:(a-n)/(o-i)*(r-i)+n}},nV=["receive","deposit","borrow","claim"],nq=["withdraw","repay","burn"],nY={getMonthName(e){let t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){let r=eC.Em.getYear(),i=this.getMonthName(t),o=e===r?i:`${i} ${e}`;return o},getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),o=e?.length>1,n=e?.length===2;return n&&!i?[this.getTransactionImage(t),this.getTransactionImage(r)]:o?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:nY.getTransactionTransferTokenType(e),url:nY.getTransactionImageURL(e)}),getTransactionImageURL(e){let t;let r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,r=e?.transfers,i=e?.transfers?.length>0,o=e?.transfers?.length>1,n=i&&r?.every(e=>!!e?.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i){let r="send"===t||"receive"===t;return r&&n?[l=r_.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),r_.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status]}if(o)return r.map(e=>this.getTransferDescription(e));let c="";return nV.includes(t)?c="+":nq.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){if(!e)return null;let t=this.getQuantityFixedValue(e?.quantity.numeric),r=[t,e?.fungible_info?.symbol].join(" ").trim();return r},getQuantityFixedValue(e){if(!e)return null;let t=parseFloat(e);return t.toFixed(3)}}},91746:function(e,t,r){"use strict";let i;r.d(t,{o:function(){return O}}),r(15456);var o=r(45583);let n=e=>(t,r,i)=>{let o=i.subscribe;i.subscribe=(e,t,r)=>{let n=e;if(t){let o=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());n=r=>{let i=e(r);if(!o(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return o(n)};let n=e(t,r,i);return n},a=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>a(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>a(t)(e)}}},s=(e,t)=>(r,i,o)=>{let n,s,l={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,u=new Set,d=new Set;try{n=l.getStorage()}catch(e){}if(!n)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),r(...e)},i,o);let h=a(l.serialize),p=()=>{let e;let t=l.partialize({...i()}),r=h({state:t,version:l.version}).then(e=>n.setItem(l.name,e)).catch(t=>{e=t});if(e)throw e;return r},g=o.setState;o.setState=(e,t)=>{g(e,t),p()};let f=e((...e)=>{r(...e),p()},i,o),w=()=>{var e;if(!n)return;c=!1,u.forEach(e=>e(i()));let t=(null==(e=l.onRehydrateStorage)?void 0:e.call(l,i()))||void 0;return a(n.getItem.bind(n))(l.name).then(e=>{if(e)return l.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===l.version)return e.state;if(l.migrate)return l.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(s=l.merge(e,null!=(t=i())?t:f),!0),p()}).then(()=>{null==t||t(s,void 0),c=!0,d.forEach(e=>e(s))}).catch(e=>{null==t||t(void 0,e)})};return o.persist={setOptions:e=>{l={...l,...e},e.getStorage&&(n=e.getStorage())},clearStorage:()=>{null==n||n.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>w(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},w(),s||f},l=(e,t)=>(r,i,o)=>{let n,s={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var i;let o=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),n=null!=(i=r.getItem(e))?i:null;return n instanceof Promise?n.then(o):o(n)},setItem:(e,i)=>r.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set,d=s.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,o);let h=()=>{let e=s.partialize({...i()});return d.setItem(s.name,{state:e,version:s.version})},p=o.setState;o.setState=(e,t)=>{p(e,t),h()};let g=e((...e)=>{r(...e),h()},i,o),f=()=>{var e,t;if(!d)return;l=!1,c.forEach(e=>{var t;return e(null!=(t=i())?t:g)});let o=(null==(t=s.onRehydrateStorage)?void 0:t.call(s,null!=(e=i())?e:g))||void 0;return a(d.getItem.bind(d))(s.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(n=s.merge(e,null!=(t=i())?t:g),!0),h()}).then(()=>{null==o||o(n,void 0),n=i(),l=!0,u.forEach(e=>e(n))}).catch(e=>{null==o||o(void 0,e)})};return o.persist={setOptions:e=>{s={...s,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>f(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},s.skipHydration||f(),n||g},c=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),s(e,t)):l(e,t),u=e=>{let t;let r=new Set,i=(e,i)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=i?i:"object"!=typeof o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,n={setState:i,getState:o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(i,o,n),n},d=e=>e?u(e):u;var h=r(39803),p=r(48519),g=r(33679),f=r(36063),w=r(21693),m=r(76026),v=r(29358);let b=/(rabby|trustwallet)/,y={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:C(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>C(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:C(e,"isPhantom")}};function x(e={}){let t,r,i,o;let{shimDisconnect:n=!0,unstable_shimAsyncInject:a}=e;function s(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...y[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return l=>({get icon(){return s().icon},get id(){return s().id},get name(){return s().name},get supportsSimulation(){return b.test(this.id.toLowerCase())},type:x.type,async setup(){let r=await this.getProvider();r&&e.target&&(i||(i=this.onConnect.bind(this),r.on("connect",i)),t||(t=this.onAccountsChanged.bind(this),r.on("accountsChanged",t)))},async connect({chainId:a,isReconnecting:s}={}){let c=await this.getProvider();if(!c)throw new v.M;let u=[];if(s)u=await this.getAccounts().catch(()=>[]);else if(n)try{let e=await c.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});u=e[0]?.caveats?.[0]?.value?.map(e=>h.K(e))}catch(e){if(e.code===p.ab.code)throw new p.ab(e);if(e.code===p.pT.code)throw e}try{if(!u?.length&&!s){let e=await c.request({method:"eth_requestAccounts"});u=e.map(e=>(0,h.K)(e))}i&&(c.removeListener("connect",i),i=void 0),t||(t=this.onAccountsChanged.bind(this),c.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),c.on("chainChanged",r)),o||(o=this.onDisconnect.bind(this),c.on("disconnect",o));let d=await this.getChainId();if(a&&d!==a){let e=await this.switchChain({chainId:a}).catch(e=>{if(e.code===p.ab.code)throw e;return{id:d}});d=e?.id??d}return n&&await l.storage?.removeItem(`${this.id}.disconnected`),e.target||await l.storage?.setItem("injected.connected",!0),{accounts:u,chainId:d}}catch(e){if(e.code===p.ab.code)throw new p.ab(e);if(e.code===p.pT.code)throw new p.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new v.M;r&&(t.removeListener("chainChanged",r),r=void 0),o&&(t.removeListener("disconnect",o),o=void 0),i||(i=this.onConnect.bind(this),t.on("connect",i));try{await (0,g.F)(()=>t.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}n&&await l.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await l.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new v.M;let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,h.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new v.M;let t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){let e;if("undefined"==typeof window)return;let t=s();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?C(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{let t=n&&await l.storage?.getItem(`${this.id}.disconnected`);if(t)return!1;if(!e.target){let e=await l.storage?.getItem("injected.connected");if(!e)return!1}let r=await this.getProvider();if(!r){if(void 0!==a&&!1!==a){let e=async()=>{"undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e);let t=await this.getProvider();return!!t},t="number"==typeof a?a:1e3,r=await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]);if(r)return!0}throw new v.M}let i=await (0,f.J)(()=>this.getAccounts());return!!i.length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new v.M;let i=l.chains.find(e=>e.id===t);if(!i)throw new p.x3(new m.X4);try{return await Promise.all([r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(t)}]}).then(async()=>{let e=await this.getChainId();e===t&&l.emitter.emit("change",{chainId:t})}),new Promise(e=>l.emitter.once("change",({chainId:r})=>{r===t&&e()}))]),i}catch(o){if(4902===o.code||o?.data?.originalError?.code===4902)try{let o,n;let{default:a,...s}=i.blockExplorers??{};e?.blockExplorerUrls?o=e.blockExplorerUrls:a&&(o=[a.url,...Object.values(s).map(e=>e.url)]),n=e?.rpcUrls?.length?e.rpcUrls:[i.rpcUrls.default?.http[0]??""];let l={blockExplorerUrls:o,chainId:(0,w.eC)(t),chainName:e?.chainName??i.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??i.nativeCurrency,rpcUrls:n};await r.request({method:"wallet_addEthereumChain",params:[l]});let c=await this.getChainId();if(c!==t)throw new p.ab(Error("User rejected switch after adding network."));return i}catch(e){throw new p.ab(e)}if(o.code===p.ab.code)throw new p.ab(o);throw new p.x3(o)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(l.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),n&&await l.storage?.removeItem(`${this.id}.disconnected`)}else l.emitter.emit("change",{accounts:e.map(e=>(0,h.K)(e))})},onChainChanged(e){let t=Number(e);l.emitter.emit("change",{chainId:t})},async onConnect(e){let n=await this.getAccounts();if(0===n.length)return;let a=Number(e.chainId);l.emitter.emit("connect",{accounts:n,chainId:a});let s=await this.getProvider();s&&(i&&(s.removeListener("connect",i),i=void 0),t||(t=this.onAccountsChanged.bind(this),s.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),s.on("chainChanged",r)),o||(o=this.onDisconnect.bind(this),s.on("disconnect",o)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(l.emitter.emit("disconnect"),t&&(r&&(t.removeListener("chainChanged",r),r=void 0),o&&(t.removeListener("disconnect",o),o=void 0),i||(i=this.onConnect.bind(this),t.on("connect",i))))}})}function C(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let i=e.ethereum;return i?.providers?i.providers.find(e=>r(e)):i&&r(i)?i:void 0}x.type="injected";var k=r(28729);class E{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new k})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){let r=t[0];this._emitter.emit(e,{uid:this.uid,...r})}listenerCount(e){return this._emitter.listenerCount(e)}}var S=r(65534);let _=256;var A=r(81784);function T(e){let t,i,o,n,a,s,l,c;let u=e.isNewChainsStale??!0;return d=>({id:"walletConnect",name:"WalletConnect",type:T.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(a||(a=this.onConnect.bind(this),e.on("connect",a)),l||(l=this.onSessionDelete.bind(this),e.on("session_delete",l)))},async connect({chainId:e,...t}={}){try{let r=await this.getProvider();if(!r)throw new v.M;s||(s=this.onDisplayUri,r.on("display_uri",s));let i=e;if(!i){let e=await d.storage?.getItem("state")??{},t=d.chains.some(t=>t.id===e.chainId);i=t?e.chainId:d.chains[0]?.id}if(!i)throw Error("No chains found on connector.");let u=await this.isChainsStale();if(r.session&&u&&await r.disconnect(),!r.session||u){let e=d.chains.filter(e=>e.id!==i).map(e=>e.id);await r.connect({optionalChains:[i,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(d.chains.map(e=>e.id))}let p=(await r.enable()).map(e=>(0,h.K)(e)),g=await this.getChainId();return s&&(r.removeListener("display_uri",s),s=void 0),a&&(r.removeListener("connect",a),a=void 0),o||(o=this.onAccountsChanged.bind(this),r.on("accountsChanged",o)),n||(n=this.onChainChanged.bind(this),r.on("chainChanged",n)),c||(c=this.onDisconnect.bind(this),r.on("disconnect",c)),l||(l=this.onSessionDelete.bind(this),r.on("session_delete",l)),{accounts:p,chainId:g}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new p.ab(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{n&&(e?.removeListener("chainChanged",n),n=void 0),c&&(e?.removeListener("disconnect",c),c=void 0),a||(a=this.onConnect.bind(this),e?.on("connect",a)),o&&(e?.removeListener("accountsChanged",o),o=void 0),l&&(e?.removeListener("session_delete",l),l=void 0),this.setRequestedChainsIds([])}},async getAccounts(){let e=await this.getProvider();return e.accounts.map(e=>(0,h.K)(e))},async getProvider({chainId:o}={}){async function n(){let t=d.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await Promise.all([r.e(6764),r.e(3379),r.e(7295),r.e(5883)]).then(r.bind(r,47667));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(d.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),showQrModal:e.showQrModal??!0})}return t||(i||(i=n()),t=await i,t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),o&&await this.switchChain?.({chainId:o}),t},async getChainId(){let e=await this.getProvider();return e.chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;let r=await this.isChainsStale();if(r&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new v.M;let i=d.chains.find(e=>e.id===t);if(!i)throw new p.x3(new m.X4);try{await Promise.all([new Promise(e=>{let r=({chainId:i})=>{i===t&&(d.emitter.off("change",r),e())};d.emitter.on("change",r)}),r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(t)}]})]);let e=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...e,t]),i}catch(o){if(/(user rejected)/i.test(o.message))throw new p.ab(o);try{let o,n;o=e?.blockExplorerUrls?e.blockExplorerUrls:i.blockExplorers?.default.url?[i.blockExplorers?.default.url]:[],n=e?.rpcUrls?.length?e.rpcUrls:[...i.rpcUrls.default.http];let a={blockExplorerUrls:o,chainId:(0,w.eC)(t),chainName:e?.chainName??i.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??i.nativeCurrency,rpcUrls:n};await r.request({method:"wallet_addEthereumChain",params:[a]});let s=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...s,t]),i}catch(e){throw new p.ab(e)}}},onAccountsChanged(e){0===e.length?this.onDisconnect():d.emitter.emit("change",{accounts:e.map(e=>(0,h.K)(e))})},onChainChanged(e){let t=Number(e);d.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),r=await this.getAccounts();d.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),d.emitter.emit("disconnect");let t=await this.getProvider();o&&(t.removeListener("accountsChanged",o),o=void 0),n&&(t.removeListener("chainChanged",n),n=void 0),c&&(t.removeListener("disconnect",c),c=void 0),l&&(t.removeListener("session_delete",l),l=void 0),a||(a=this.onConnect.bind(this),t.on("connect",a))},onDisplayUri(e){d.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){if(!t)return[];let e=t.session?.namespaces.eip155?.accounts?.map(e=>Number.parseInt(e.split(":")[1]||""));return e??[]},async getRequestedChainsIds(){return await d.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(!u)return!1;let e=d.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await d.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function R(e={}){let t,i,o,n,a,s,l,c,u;return"3"===e.version||e.headlessMode?s=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:R.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,h.K)(e));o||(o=this.onAccountsChanged.bind(this),t.on("accountsChanged",o)),n||(n=this.onChainChanged.bind(this),t.on("chainChanged",n)),a||(a=this.onDisconnect.bind(this),t.on("disconnect",a));let i=await this.getChainId();if(e&&i!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===p.ab.code)throw e;return{id:i}});i=t?.id??i}return{accounts:r,chainId:i}}catch(e){if(/(user closed modal|accounts received is empty|user denied account)/i.test(e.message))throw new p.ab(e);throw e}},async disconnect(){let e=await this.getProvider();o&&(e.removeListener("accountsChanged",o),o=void 0),n&&(e.removeListener("chainChanged",n),n=void 0),a&&(e.removeListener("disconnect",a),a=void 0),e.disconnect(),e.close()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,h.K)(e))},async getChainId(){let e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){if(!i){let o=await (async()=>{let{default:e}=await Promise.all([r.e(1684),r.e(1493),r.e(2753)]).then(r.t.bind(r,51493,19));return"function"!=typeof e&&"function"==typeof e.default?e.default:e})();t=new o({reloadOnDisconnect:!1,...e});let n=t.walletExtension?.getChainId(),a=s.chains.find(t=>e.chainId?t.id===e.chainId:t.id===n)||s.chains[0],l=e.chainId||a?.id,c=e.jsonRpcUrl||a?.rpcUrls.default.http[0];i=t.makeWeb3Provider(c,l)}return i},async isAuthorized(){try{let e=await this.getAccounts();return!!e.length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=s.chains.find(e=>e.id===t);if(!r)throw new p.x3(new m.X4);let i=await this.getProvider();try{return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(r.id)}]}),r}catch(o){if(4902===o.code)try{let o,n;o=e?.blockExplorerUrls?e.blockExplorerUrls:r.blockExplorers?.default.url?[r.blockExplorers?.default.url]:[],n=e?.rpcUrls?.length?e.rpcUrls:[r.rpcUrls.default?.http[0]??""];let a={blockExplorerUrls:o,chainId:(0,w.eC)(t),chainName:e?.chainName??r.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??r.nativeCurrency,rpcUrls:n};return await i.request({method:"wallet_addEthereumChain",params:[a]}),r}catch(e){throw new p.ab(e)}throw new p.x3(o)}},onAccountsChanged(e){0===e.length?this.onDisconnect():s.emitter.emit("change",{accounts:e.map(e=>(0,h.K)(e))})},onChainChanged(e){let t=Number(e);s.emitter.emit("change",{chainId:t})},async onDisconnect(e){s.emitter.emit("disconnect");let t=await this.getProvider();o&&(t.removeListener("accountsChanged",o),o=void 0),n&&(t.removeListener("chainChanged",n),n=void 0),a&&(t.removeListener("disconnect",a),a=void 0)}}):t=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",supportsSimulation:!0,type:R.type,async connect({chainId:e}={}){try{let t=await this.getProvider(),r=(await t.request({method:"eth_requestAccounts"})).map(e=>(0,h.K)(e));l||(l=this.onAccountsChanged.bind(this),t.on("accountsChanged",l)),c||(c=this.onChainChanged.bind(this),t.on("chainChanged",c)),u||(u=this.onDisconnect.bind(this),t.on("disconnect",u));let i=await this.getChainId();if(e&&i!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===p.ab.code)throw e;return{id:i}});i=t?.id??i}return{accounts:r,chainId:i}}catch(e){if(/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message))throw new p.ab(e);throw e}},async disconnect(){let e=await this.getProvider();l&&(e.removeListener("accountsChanged",l),l=void 0),c&&(e.removeListener("chainChanged",c),c=void 0),u&&(e.removeListener("disconnect",u),u=void 0),e.disconnect(),e.close?.()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,h.K)(e))},async getChainId(){let e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return Number(t)},async getProvider(){if(!s){let i=await (async()=>{let{default:e}=await Promise.all([r.e(1684),r.e(4775),r.e(4726)]).then(r.t.bind(r,64775,19));return"function"!=typeof e&&"function"==typeof e.default?e.default:e})();s=new i({...e,appChainIds:t.chains.map(e=>e.id)}).makeWeb3Provider({...e,options:e.preference??"all"})}return s},async isAuthorized(){try{let e=await this.getAccounts();return!!e.length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:r}){let i=t.chains.find(e=>e.id===r);if(!i)throw new p.x3(new m.X4);let o=await this.getProvider();try{return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,w.eC)(i.id)}]}),i}catch(t){if(4902===t.code)try{let t,n;t=e?.blockExplorerUrls?e.blockExplorerUrls:i.blockExplorers?.default.url?[i.blockExplorers?.default.url]:[],n=e?.rpcUrls?.length?e.rpcUrls:[i.rpcUrls.default?.http[0]??""];let a={blockExplorerUrls:t,chainId:(0,w.eC)(r),chainName:e?.chainName??i.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??i.nativeCurrency,rpcUrls:n};return await o.request({method:"wallet_addEthereumChain",params:[a]}),i}catch(e){throw new p.ab(e)}throw new p.x3(t)}},onAccountsChanged(e){0===e.length?this.onDisconnect():t.emitter.emit("change",{accounts:e.map(e=>(0,h.K)(e))})},onChainChanged(e){let r=Number(e);t.emitter.emit("change",{chainId:r})},async onDisconnect(e){t.emitter.emit("disconnect");let r=await this.getProvider();l&&(r.removeListener("accountsChanged",l),l=void 0),c&&(r.removeListener("chainChanged",c),c=void 0),u&&(r.removeListener("disconnect",u),u=void 0)}})}T.type="walletConnect",R.type="coinbaseWallet";var $=r(10108),I=r(2098),P=r(10393);function O({projectId:e,chains:t,metadata:r,enableCoinbase:a,enableEmail:s,enableInjected:l,auth:u={showWallets:!0},enableWalletConnect:g,enableEIP6963:f,...w}){var v;let b=[],y=t.map(t=>[t.id,(0,P.h4)({chainId:t.id,projectId:e})]),C=Object.fromEntries(y);return!1!==g&&b.push(T({projectId:e,metadata:r,showQrModal:!1})),!1!==l&&b.push(x({shimDisconnect:!0})),!1!==a&&b.push(R({version:"4",appName:r?.name??"Unknown",appLogoUrl:r?.icons[0]??"Unknown",preference:w.coinbasePreference||"all"})),(s||u?.socials)&&b.push((v={chains:[...t],options:{projectId:e},socials:u?.socials,email:s,showWallets:u.showWallets},e=>({id:I.bq.AUTH_CONNECTOR_ID,name:"Web3Modal Auth",type:"w3mAuth",socials:v.socials,email:v.email,showWallets:v.showWallets,async connect(e={}){let t=await this.getProvider(),{address:r,chainId:i}=await t.connect({chainId:e.chainId});return await t.getSmartAccountEnabledNetworks(),{accounts:[r],account:r,chainId:i,chain:{id:i,unsuported:!1}}},async disconnect(){let e=await this.getProvider();await e.disconnect()},async getAccounts(){let t=await this.getProvider(),{address:r}=await t.connect();return e.emitter.emit("change",{accounts:[r]}),[r]},async getProvider(){return this.provider||(this.provider=new $.Sd(v.options.projectId)),Promise.resolve(this.provider)},async getChainId(){let e=await this.getProvider(),{chainId:t}=await e.getChainId();return t},async isAuthorized(){let e=await this.getProvider(),{isConnected:t}=await e.isConnected();return t},async switchChain({chainId:t}){try{let r=e.chains.find(e=>e.id===t);if(!r)throw new p.x3(Error("chain not found on connector."));let i=await this.getProvider();return await i.switchNetwork(t),e.emitter.emit("change",{chainId:Number(t)}),r}catch(e){if(e instanceof Error)throw new p.x3(e);throw e}},onAccountsChanged(t){0===t.length?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(h.K)})},onChainChanged(t){let r=Number(t);e.emitter.emit("change",{chainId:r})},async onConnect(t){let r=Number(t.chainId),i=await this.getAccounts();e.emitter.emit("connect",{accounts:i,chainId:r})},async onDisconnect(e){let t=await this.getProvider();await t.disconnect()}}))),function(e){let t;let{multiInjectedProviderDiscovery:r=!0,storage:a=(0,S.o)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:S.w}),syncConnectedChain:s=!0,ssr:l,...u}=e,h="undefined"!=typeof window&&r?function(){let e=new Set,t=[],r=()=>(function(e){let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(r=>{t.some(({info:e})=>e.uuid===r.info.uuid)||(t=[...t,r],e.forEach(e=>e(t,{added:[r]})))}),i=r();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),i()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),i(),i=r()},subscribe:(r,{emitImmediately:i}={})=>(e.add(r),i&&r(t,{added:t}),()=>e.delete(r))}}():void 0,p=d(()=>u.chains),g=d(()=>[...u.connectors??[],...l?[]:h?.getProviders().map(w)??[]].map(f));function f(e){let t=new E(function(e=11){if(!i||_+e>512){i="",_=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(_,_+++e)}()),r={...e({emitter:t,chains:p.getState(),storage:a}),emitter:t,uid:t.uid};return t.on("connect",T),r.setup?.(),r}function w(e){let{info:t}=e,r=e.provider;return x({target:{...t,id:t.rdns,provider:r}})}let v=new Map;function b(){return{chainId:p.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let y="0.0.0-canary-";t=A.i.startsWith(y)?Number.parseInt(A.i.replace(y,"")):Number.parseInt(A.i.split(".")[0]??"0");let C=d(n(a?c(b,{migrate(e,r){if(r===t)return e;let i=b(),o=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId&&p.getState().some(t=>t.id===e.chainId)?e.chainId:i.chainId;return{...i,chainId:o}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:i,type:o,uid:n}=t.connector;return[e,{...t,connector:{id:r,name:i,type:o,uid:n}}]})},chainId:e.chainId,current:e.current}),skipHydration:l,storage:a,version:t}):b));function k(e){C.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function T(e){"connecting"!==C.getState().status&&"reconnecting"!==C.getState().status&&C.setState(t=>{let r=g.getState().find(t=>t.uid===e.uid);return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",k),r.emitter.listenerCount("change")||r.emitter.on("change",k),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",R),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t})}function R(e){C.setState(t=>{let r=t.connections.get(e.uid);if(r){let e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",k),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",R),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",T)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let i=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:i.connector.uid}})}return s&&C.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{let t=p.getState().some(t=>t.id===e);if(t)return C.setState(t=>({...t,chainId:e??t.chainId}))}),h?.subscribe(e=>{let t=new Map;for(let e of g.getState())t.set(e.id,!0);let r=[];for(let i of e){let e=f(w(i));t.has(e.id)||r.push(e)}(!a||C.persist.hasHydrated())&&g.setState(e=>[...e,...r],!0)}),{get chains(){return p.getState()},get connectors(){return g.getState()},storage:a,getClient:function(e={}){let t;let r=e.chainId??C.getState().chainId,i=p.getState().find(e=>e.id===r);if(e.chainId&&!i)throw new m.X4;{let e=v.get(C.getState().chainId);if(e&&!i)return e;if(!i)throw new m.X4}{let e=v.get(r);if(e)return e}if(u.client)t=u.client({chain:i});else{let e=i.id,r=p.getState().map(e=>e.id),n={},a=Object.entries(u);for(let[t,i]of a)if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof i){if(e in i)n[t]=i[e];else{let e=r.some(e=>e in i);if(e)continue;n[t]=i}}else n[t]=i}t=(0,o.e)({...n,chain:i,batch:n.batch??{multicall:!0},transport:t=>u.transports[e]({...t,connectors:g})})}return v.set(r,t),t},get state(){return C.getState()},setState(e){let t;t="function"==typeof e?e(C.getState()):e;let r=b();"object"!=typeof t&&(t=r);let i=Object.keys(r).some(e=>!(e in t));i&&(t=r),C.setState(t,!0)},subscribe:(e,t,r)=>C.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:h,store:C,ssr:!!l,syncConnectedChain:s,transports:u.transports,chains:{setState(e){let t="function"==typeof e?e(p.getState()):e;if(0!==t.length)return p.setState(t,!0)},subscribe:e=>p.subscribe(e)},connectors:{providerDetailToConnector:w,setup:f,setState:e=>g.setState("function"==typeof e?e(g.getState()):e,!0),subscribe:e=>g.subscribe(e)},events:{change:k,connect:T,disconnect:R}}}}({chains:t,multiInjectedProviderDiscovery:!1!==f,transports:C,...w,connectors:b})}},10393:function(e,t,r){"use strict";r.d(t,{I2:function(){return g},xv:function(){return w},h4:function(){return m},Pl:function(){return f}});var i=r(54972),o=r(2098),n=r(20722),a=r(95950);class s extends a.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var l=r(33668),c=r(33679),u=r(71891);let d={current:0,take(){return this.current++},reset(){this.current=0}};var h=r(51980);function p(e,t={}){let{batch:r,fetchOptions:i,key:o="http",name:a="HTTP JSON-RPC",onFetchRequest:p,onFetchResponse:g,retryDelay:f}=t;return({chain:w,retryCount:m,timeout:v})=>{let{batchSize:b=1e3,wait:y=0}="object"==typeof r?r:{},x=t.retryCount??m,C=v??t.timeout??1e4,k=e||w?.rpcUrls.default.http[0];if(!k)throw new s;let E=function(e,t={}){return{async request(r){let{body:i,onRequest:o=t.onRequest,onResponse:a=t.onResponse,timeout:s=t.timeout??1e4}=r,l={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:h,method:p,signal:g}=l;try{let t;let r=await (0,c.F)(async({signal:t})=>{let r={...l,body:Array.isArray(i)?(0,u.P)(i.map(e=>({jsonrpc:"2.0",id:e.id??d.take(),...e}))):(0,u.P)({jsonrpc:"2.0",id:i.id??d.take(),...i}),headers:{...h,"Content-Type":"application/json"},method:p||"POST",signal:g||(s>0?t:null)},n=new Request(e,r);o&&await o(n);let a=await fetch(e,r);return a},{errorInstance:new n.W5({body:i,url:e}),timeout:s,signal:!0});if(a&&await a(r),r.headers.get("Content-Type")?.startsWith("application/json")?t=await r.json():(t=await r.text(),t=JSON.parse(t||"{}")),!r.ok)throw new n.Gg({body:i,details:(0,u.P)(t.error)||r.statusText,headers:r.headers,status:r.status,url:e});return t}catch(t){if(t instanceof n.Gg||t instanceof n.W5)throw t;throw new n.Gg({body:i,cause:t,url:e})}}}}(k,{fetchOptions:i,onRequest:p,onResponse:g,timeout:C});return(0,h.q)({key:o,name:a,async request({method:e,params:t}){let i={method:e,params:t},{schedule:o}=(0,l.S)({id:k,wait:y,shouldSplitBatch:e=>e.length>b,fn:e=>E.request({body:e}),sort:(e,t)=>e.id-t.id}),a=async e=>r?o(e):[await E.request({body:e})],[{error:s,result:c}]=await a(i);if(s)throw new n.bs({body:i,error:s,url:k});return c},retryCount:x,retryDelay:f,timeout:C,type:"http"},{fetchOptions:i,url:k})}}function g(e){if(e)return{id:`${o.bq.EIP155}:${e.id}`,name:e.name,imageId:o.CK.EIP155NetworkImageIds[e.id]}}async function f(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),r=t?.signer?.session?.namespaces,i=r?.[o.bq.EIP155]?.methods,n=r?.[o.bq.EIP155]?.chains;return{supportsAllNetworks:!!i?.includes(o.bq.ADD_CHAIN_METHOD),approvedCaipNetworkIds:n}}function w(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:o.CK.WalletConnectRpcChainIds.map(e=>`${o.bq.EIP155}:${e}`)}}function m({chainId:e,projectId:t}){let r=i.j1.getBlockchainApiUrl();return o.CK.WalletConnectRpcChainIds.includes(e)?p(`${r}/v1/?chainId=${o.bq.EIP155}:${e}&projectId=${t}`):p()}},10108:function(e,t,r){"use strict";let i;r.d(t,{$0:function(){return p},$D:function(){return ra},Sd:function(){return rl},y_:function(){return g}}),r(15456);var o,n,a,s,l,c,u,d=r(62601);let h=d.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.com/sdk",p={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",SOCIAL:"@w3m/connected_social",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},g={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};(o=s||(s={})).assertEqual=e=>e,o.assertIs=function(e){},o.assertNever=function(e){throw Error()},o.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},o.getValidEnumValues=e=>{let t=o.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return o.objectValues(r)},o.objectValues=e=>o.objectKeys(e).map(function(t){return e[t]}),o.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},o.find=(e,t)=>{for(let r of e)if(t(r))return r},o.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,o.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},o.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(l||(l={})).mergeShapes=(e,t)=>({...e,...t});let f=s.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),w=e=>{let t=typeof e;switch(t){case"undefined":return f.undefined;case"string":return f.string;case"number":return isNaN(e)?f.nan:f.number;case"boolean":return f.boolean;case"function":return f.function;case"bigint":return f.bigint;case"symbol":return f.symbol;case"object":if(Array.isArray(e))return f.array;if(null===e)return f.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return f.promise;if("undefined"!=typeof Map&&e instanceof Map)return f.map;if("undefined"!=typeof Set&&e instanceof Set)return f.set;if("undefined"!=typeof Date&&e instanceof Date)return f.date;return f.object;default:return f.unknown}},m=s.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class v extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let o of e.issues)if("invalid_union"===o.code)o.unionErrors.map(i);else if("invalid_return_type"===o.code)i(o.returnTypeError);else if("invalid_arguments"===o.code)i(o.argumentsError);else if(0===o.path.length)r._errors.push(t(o));else{let e=r,i=0;for(;i<o.path.length;){let r=o.path[i],n=i===o.path.length-1;n?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(o))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,s.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}v.create=e=>{let t=new v(e);return t};let b=(e,t)=>{let r;switch(e.code){case m.invalid_type:r=e.received===f.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case m.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,s.jsonStringifyReplacer)}`;break;case m.unrecognized_keys:r=`Unrecognized key(s) in object: ${s.joinValues(e.keys,", ")}`;break;case m.invalid_union:r="Invalid input";break;case m.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${s.joinValues(e.options)}`;break;case m.invalid_enum_value:r=`Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;break;case m.invalid_arguments:r="Invalid function arguments";break;case m.invalid_return_type:r="Invalid function return type";break;case m.invalid_date:r="Invalid date";break;case m.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:s.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case m.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case m.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case m.custom:r="Invalid input";break;case m.invalid_intersection_types:r="Intersection results could not be merged";break;case m.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case m.not_finite:r="Number must be finite";break;default:r=t.defaultError,s.assertNever(e)}return{message:r}},y=b;function x(){return y}let C=e=>{let{data:t,path:r,errorMaps:i,issueData:o}=e,n=[...r,...o.path||[]],a={...o,path:n},s="",l=i.filter(e=>!!e).slice().reverse();for(let e of l)s=e(a,{data:t,defaultError:s}).message;return{...o,path:n,message:o.message||s}};function k(e,t){let r=C({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,x(),b].filter(e=>!!e)});e.common.issues.push(r)}class E{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return S;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return E.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:o}=i;if("aborted"===t.status||"aborted"===o.status)return S;"dirty"===t.status&&e.dirty(),"dirty"===o.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==o.value||i.alwaysSet)&&(r[t.value]=o.value)}return{status:e.value,value:r}}}let S=Object.freeze({status:"aborted"}),_=e=>({status:"dirty",value:e}),A=e=>({status:"valid",value:e}),T=e=>"aborted"===e.status,R=e=>"dirty"===e.status,$=e=>"valid"===e.status,I=e=>"undefined"!=typeof Promise&&e instanceof Promise;(n=c||(c={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},n.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class P{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let O=(e,t)=>{if($(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new v(e.common.issues);return this._error=t,this._error}}};function N(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:o}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:o}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:o}}class j{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return w(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:w(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new E,ctx:{common:e.parent.common,data:e.data,parsedType:w(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(I(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:w(e)},o=this._parseSync({data:e,path:i.path,parent:i});return O(i,o)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:w(e)},i=this._parse({data:e,path:r.path,parent:r}),o=await (I(i)?i:Promise.resolve(i));return O(r,o)}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let o=e(t),n=()=>i.addIssue({code:m.custom,...r(t)});return"undefined"!=typeof Promise&&o instanceof Promise?o.then(e=>!!e||(n(),!1)):!!o||(n(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new eb({schema:this,typeName:u.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ey.create(this,this._def)}nullable(){return ex.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return er.create(this,this._def)}promise(){return ev.create(this,this._def)}or(e){return eo.create([this,e],this._def)}and(e){return es.create(this,e,this._def)}transform(e){return new eb({...N(this._def),schema:this,typeName:u.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new eC({...N(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:u.ZodDefault})}brand(){return new e_({typeName:u.ZodBranded,type:this,...N(this._def)})}catch(e){return new ek({...N(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:u.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return eA.create(this,e)}readonly(){return eT.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let M=/^c[^\s-]{8,}$/i,D=/^[a-z][a-z0-9]*$/,U=/^[0-9A-HJKMNP-TV-Z]{26}$/,L=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,B=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,z=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,W=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,H=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class F extends j{_parse(e){let t;this._def.coerce&&(e.data=String(e.data));let r=this._getType(e);if(r!==f.string){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.string,received:t.parsedType}),S}let o=new E;for(let r of this._def.checks)if("min"===r.kind)e.data.length<r.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),o.dirty());else if("max"===r.kind)e.data.length>r.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),o.dirty());else if("length"===r.kind){let i=e.data.length>r.value,n=e.data.length<r.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?k(t,{code:m.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):n&&k(t,{code:m.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),o.dirty())}else if("email"===r.kind)B.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"email",code:m.invalid_string,message:r.message}),o.dirty());else if("emoji"===r.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:m.invalid_string,message:r.message}),o.dirty());else if("uuid"===r.kind)L.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:m.invalid_string,message:r.message}),o.dirty());else if("cuid"===r.kind)M.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:m.invalid_string,message:r.message}),o.dirty());else if("cuid2"===r.kind)D.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:m.invalid_string,message:r.message}),o.dirty());else if("ulid"===r.kind)U.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:m.invalid_string,message:r.message}),o.dirty());else if("url"===r.kind)try{new URL(e.data)}catch(i){k(t=this._getOrReturnCtx(e,t),{validation:"url",code:m.invalid_string,message:r.message}),o.dirty()}else if("regex"===r.kind){r.regex.lastIndex=0;let i=r.regex.test(e.data);i||(k(t=this._getOrReturnCtx(e,t),{validation:"regex",code:m.invalid_string,message:r.message}),o.dirty())}else if("trim"===r.kind)e.data=e.data.trim();else if("includes"===r.kind)e.data.includes(r.value,r.position)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),o.dirty());else if("toLowerCase"===r.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===r.kind)e.data=e.data.toUpperCase();else if("startsWith"===r.kind)e.data.startsWith(r.value)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{startsWith:r.value},message:r.message}),o.dirty());else if("endsWith"===r.kind)e.data.endsWith(r.value)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:{endsWith:r.value},message:r.message}),o.dirty());else if("datetime"===r.kind){let i=H(r);i.test(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_string,validation:"datetime",message:r.message}),o.dirty())}else if("ip"===r.kind){var n,a;n=e.data,("v4"===(a=r.version)||!a)&&z.test(n)||("v6"===a||!a)&&W.test(n)||(k(t=this._getOrReturnCtx(e,t),{validation:"ip",code:m.invalid_string,message:r.message}),o.dirty())}else s.assertNever(r);return{status:o.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:m.invalid_string,...c.errToObj(r)})}_addCheck(e){return new F({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...c.errToObj(e)})}url(e){return this._addCheck({kind:"url",...c.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...c.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...c.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...c.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...c.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...c.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...c.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...c.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...c.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...c.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...c.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...c.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...c.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...c.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...c.errToObj(t)})}nonempty(e){return this.min(1,c.errToObj(e))}trim(){return new F({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new F({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new F({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}F.create=e=>{var t;return new F({checks:[],typeName:u.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...N(e)})};class Z extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;this._def.coerce&&(e.data=Number(e.data));let r=this._getType(e);if(r!==f.number){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.number,received:t.parsedType}),S}let i=new E;for(let r of this._def.checks)if("int"===r.kind)s.isInteger(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.invalid_type,expected:"integer",received:"float",message:r.message}),i.dirty());else if("min"===r.kind){let o=r.inclusive?e.data<r.value:e.data<=r.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),i.dirty())}else if("max"===r.kind){let o=r.inclusive?e.data>r.value:e.data>=r.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),i.dirty())}else"multipleOf"===r.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=r>i?r:i,n=parseInt(e.toFixed(o).replace(".","")),a=parseInt(t.toFixed(o).replace(".",""));return n%a/Math.pow(10,o)}(e.data,r.value)&&(k(t=this._getOrReturnCtx(e,t),{code:m.not_multiple_of,multipleOf:r.value,message:r.message}),i.dirty()):"finite"===r.kind?Number.isFinite(e.data)||(k(t=this._getOrReturnCtx(e,t),{code:m.not_finite,message:r.message}),i.dirty()):s.assertNever(r);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,c.toString(t))}gt(e,t){return this.setLimit("min",e,!1,c.toString(t))}lte(e,t){return this.setLimit("max",e,!0,c.toString(t))}lt(e,t){return this.setLimit("max",e,!1,c.toString(t))}setLimit(e,t,r,i){return new Z({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:c.toString(i)}]})}_addCheck(e){return new Z({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:c.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:c.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:c.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:c.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:c.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:c.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:c.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:c.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:c.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&s.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Z.create=e=>new Z({checks:[],typeName:u.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...N(e)});class V extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;this._def.coerce&&(e.data=BigInt(e.data));let r=this._getType(e);if(r!==f.bigint){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.bigint,received:t.parsedType}),S}let i=new E;for(let r of this._def.checks)if("min"===r.kind){let o=r.inclusive?e.data<r.value:e.data<=r.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),i.dirty())}else if("max"===r.kind){let o=r.inclusive?e.data>r.value:e.data>=r.value;o&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),i.dirty())}else"multipleOf"===r.kind?e.data%r.value!==BigInt(0)&&(k(t=this._getOrReturnCtx(e,t),{code:m.not_multiple_of,multipleOf:r.value,message:r.message}),i.dirty()):s.assertNever(r);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,c.toString(t))}gt(e,t){return this.setLimit("min",e,!1,c.toString(t))}lte(e,t){return this.setLimit("max",e,!0,c.toString(t))}lt(e,t){return this.setLimit("max",e,!1,c.toString(t))}setLimit(e,t,r,i){return new V({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:c.toString(i)}]})}_addCheck(e){return new V({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:c.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:c.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:c.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:c.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:c.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}V.create=e=>{var t;return new V({checks:[],typeName:u.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...N(e)})};class q extends j{_parse(e){this._def.coerce&&(e.data=!!e.data);let t=this._getType(e);if(t!==f.boolean){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.boolean,received:t.parsedType}),S}return A(e.data)}}q.create=e=>new q({typeName:u.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...N(e)});class Y extends j{_parse(e){let t;this._def.coerce&&(e.data=new Date(e.data));let r=this._getType(e);if(r!==f.date){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.date,received:t.parsedType}),S}if(isNaN(e.data.getTime())){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_date}),S}let i=new E;for(let r of this._def.checks)"min"===r.kind?e.data.getTime()<r.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),i.dirty()):"max"===r.kind?e.data.getTime()>r.value&&(k(t=this._getOrReturnCtx(e,t),{code:m.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),i.dirty()):s.assertNever(r);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Y({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:c.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:c.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}Y.create=e=>new Y({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:u.ZodDate,...N(e)});class G extends j{_parse(e){let t=this._getType(e);if(t!==f.symbol){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.symbol,received:t.parsedType}),S}return A(e.data)}}G.create=e=>new G({typeName:u.ZodSymbol,...N(e)});class K extends j{_parse(e){let t=this._getType(e);if(t!==f.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.undefined,received:t.parsedType}),S}return A(e.data)}}K.create=e=>new K({typeName:u.ZodUndefined,...N(e)});class X extends j{_parse(e){let t=this._getType(e);if(t!==f.null){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.null,received:t.parsedType}),S}return A(e.data)}}X.create=e=>new X({typeName:u.ZodNull,...N(e)});class J extends j{constructor(){super(...arguments),this._any=!0}_parse(e){return A(e.data)}}J.create=e=>new J({typeName:u.ZodAny,...N(e)});class Q extends j{constructor(){super(...arguments),this._unknown=!0}_parse(e){return A(e.data)}}Q.create=e=>new Q({typeName:u.ZodUnknown,...N(e)});class ee extends j{_parse(e){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.never,received:t.parsedType}),S}}ee.create=e=>new ee({typeName:u.ZodNever,...N(e)});class et extends j{_parse(e){let t=this._getType(e);if(t!==f.undefined){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.void,received:t.parsedType}),S}return A(e.data)}}et.create=e=>new et({typeName:u.ZodVoid,...N(e)});class er extends j{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==f.array)return k(t,{code:m.invalid_type,expected:f.array,received:t.parsedType}),S;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,o=t.data.length<i.exactLength.value;(e||o)&&(k(t,{code:e?m.too_big:m.too_small,minimum:o?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(k(t,{code:m.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(k(t,{code:m.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new P(t,e,t.path,r)))).then(e=>E.mergeArray(r,e));let o=[...t.data].map((e,r)=>i.type._parseSync(new P(t,e,t.path,r)));return E.mergeArray(r,o)}get element(){return this._def.type}min(e,t){return new er({...this._def,minLength:{value:e,message:c.toString(t)}})}max(e,t){return new er({...this._def,maxLength:{value:e,message:c.toString(t)}})}length(e,t){return new er({...this._def,exactLength:{value:e,message:c.toString(t)}})}nonempty(e){return this.min(1,e)}}er.create=(e,t)=>new er({type:e,minLength:null,maxLength:null,exactLength:null,typeName:u.ZodArray,...N(t)});class ei extends j{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=s.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){let t=this._getType(e);if(t!==f.object){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.object,received:t.parsedType}),S}let{status:r,ctx:i}=this._processInputParams(e),{shape:o,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof ee&&"strip"===this._def.unknownKeys))for(let e in i.data)n.includes(e)||a.push(e);let s=[];for(let e of n){let t=o[e],r=i.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new P(i,r,i.path,e)),alwaysSet:e in i.data})}if(this._def.catchall instanceof ee){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)s.push({key:{status:"valid",value:e},value:{status:"valid",value:i.data[e]}});else if("strict"===e)a.length>0&&(k(i,{code:m.unrecognized_keys,keys:a}),r.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let r=i.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new P(i,r,i.path,t)),alwaysSet:t in i.data})}}return i.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of s){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>E.mergeObjectSync(r,e)):E.mergeObjectSync(r,s)}get shape(){return this._def.shape()}strict(e){return c.errToObj,new ei({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,o,n,a;let s=null!==(n=null===(o=(i=this._def).errorMap)||void 0===o?void 0:o.call(i,t,r).message)&&void 0!==n?n:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=c.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new ei({...this._def,unknownKeys:"strip"})}passthrough(){return new ei({...this._def,unknownKeys:"passthrough"})}extend(e){return new ei({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){let t=new ei({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:u.ZodObject});return t}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ei({...this._def,catchall:e})}pick(e){let t={};return s.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new ei({...this._def,shape:()=>t})}omit(e){let t={};return s.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new ei({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof ei){let r={};for(let i in t.shape){let o=t.shape[i];r[i]=ey.create(e(o))}return new ei({...t._def,shape:()=>r})}return t instanceof er?new er({...t._def,type:e(t.element)}):t instanceof ey?ey.create(e(t.unwrap())):t instanceof ex?ex.create(e(t.unwrap())):t instanceof el?el.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return s.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new ei({...this._def,shape:()=>t})}required(e){let t={};return s.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r],i=e;for(;i instanceof ey;)i=i._def.innerType;t[r]=i}}),new ei({...this._def,shape:()=>t})}keyof(){return ef(s.objectKeys(this.shape))}}ei.create=(e,t)=>new ei({shape:()=>e,unknownKeys:"strip",catchall:ee.create(),typeName:u.ZodObject,...N(t)}),ei.strictCreate=(e,t)=>new ei({shape:()=>e,unknownKeys:"strict",catchall:ee.create(),typeName:u.ZodObject,...N(t)}),ei.lazycreate=(e,t)=>new ei({shape:e,unknownKeys:"strip",catchall:ee.create(),typeName:u.ZodObject,...N(t)});class eo extends j{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new v(e.ctx.common.issues));return k(t,{code:m.invalid_union,unionErrors:r}),S});{let e;let i=[];for(let o of r){let r={...t,common:{...t.common,issues:[]},parent:null},n=o._parseSync({data:t.data,path:t.path,parent:r});if("valid"===n.status)return n;"dirty"!==n.status||e||(e={result:n,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let o=i.map(e=>new v(e));return k(t,{code:m.invalid_union,unionErrors:o}),S}}get options(){return this._def.options}}eo.create=(e,t)=>new eo({options:e,typeName:u.ZodUnion,...N(t)});let en=e=>{if(e instanceof ep)return en(e.schema);if(e instanceof eb)return en(e.innerType());if(e instanceof eg)return[e.value];if(e instanceof ew)return e.options;if(e instanceof em)return Object.keys(e.enum);if(e instanceof eC)return en(e._def.innerType);if(e instanceof K)return[void 0];else if(e instanceof X)return[null];else return null};class ea extends j{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.object)return k(t,{code:m.invalid_type,expected:f.object,received:t.parsedType}),S;let r=this.discriminator,i=t.data[r],o=this.optionsMap.get(i);return o?t.common.async?o._parseAsync({data:t.data,path:t.path,parent:t}):o._parseSync({data:t.data,path:t.path,parent:t}):(k(t,{code:m.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),S)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=en(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let o of t){if(i.has(o))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);i.set(o,r)}}return new ea({typeName:u.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...N(r)})}}class es extends j{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(T(e)||T(i))return S;let o=function e(t,r){let i=w(t),o=w(r);if(t===r)return{valid:!0,data:t};if(i===f.object&&o===f.object){let i=s.objectKeys(r),o=s.objectKeys(t).filter(e=>-1!==i.indexOf(e)),n={...t,...r};for(let i of o){let o=e(t[i],r[i]);if(!o.valid)return{valid:!1};n[i]=o.data}return{valid:!0,data:n}}if(i===f.array&&o===f.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let o=0;o<t.length;o++){let n=t[o],a=r[o],s=e(n,a);if(!s.valid)return{valid:!1};i.push(s.data)}return{valid:!0,data:i}}return i===f.date&&o===f.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return o.valid?((R(e)||R(i))&&t.dirty(),{status:t.value,value:o.data}):(k(r,{code:m.invalid_intersection_types}),S)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}es.create=(e,t,r)=>new es({left:e,right:t,typeName:u.ZodIntersection,...N(r)});class el extends j{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.array)return k(r,{code:m.invalid_type,expected:f.array,received:r.parsedType}),S;if(r.data.length<this._def.items.length)return k(r,{code:m.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),S;let i=this._def.rest;!i&&r.data.length>this._def.items.length&&(k(r,{code:m.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let o=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new P(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(o).then(e=>E.mergeArray(t,e)):E.mergeArray(t,o)}get items(){return this._def.items}rest(e){return new el({...this._def,rest:e})}}el.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new el({items:e,typeName:u.ZodTuple,rest:null,...N(t)})};class ec extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.object)return k(r,{code:m.invalid_type,expected:f.object,received:r.parsedType}),S;let i=[],o=this._def.keyType,n=this._def.valueType;for(let e in r.data)i.push({key:o._parse(new P(r,e,r.path,e)),value:n._parse(new P(r,r.data[e],r.path,e))});return r.common.async?E.mergeObjectAsync(t,i):E.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new ec(t instanceof j?{keyType:e,valueType:t,typeName:u.ZodRecord,...N(r)}:{keyType:F.create(),valueType:e,typeName:u.ZodRecord,...N(t)})}}class eu extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.map)return k(r,{code:m.invalid_type,expected:f.map,received:r.parsedType}),S;let i=this._def.keyType,o=this._def.valueType,n=[...r.data.entries()].map(([e,t],n)=>({key:i._parse(new P(r,e,r.path,[n,"key"])),value:o._parse(new P(r,t,r.path,[n,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of n){let i=await r.key,o=await r.value;if("aborted"===i.status||"aborted"===o.status)return S;("dirty"===i.status||"dirty"===o.status)&&t.dirty(),e.set(i.value,o.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of n){let i=r.key,o=r.value;if("aborted"===i.status||"aborted"===o.status)return S;("dirty"===i.status||"dirty"===o.status)&&t.dirty(),e.set(i.value,o.value)}return{status:t.value,value:e}}}}eu.create=(e,t,r)=>new eu({valueType:t,keyType:e,typeName:u.ZodMap,...N(r)});class ed extends j{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==f.set)return k(r,{code:m.invalid_type,expected:f.set,received:r.parsedType}),S;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(k(r,{code:m.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(k(r,{code:m.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let o=this._def.valueType;function n(e){let r=new Set;for(let i of e){if("aborted"===i.status)return S;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let a=[...r.data.values()].map((e,t)=>o._parse(new P(r,e,r.path,t)));return r.common.async?Promise.all(a).then(e=>n(e)):n(a)}min(e,t){return new ed({...this._def,minSize:{value:e,message:c.toString(t)}})}max(e,t){return new ed({...this._def,maxSize:{value:e,message:c.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ed.create=(e,t)=>new ed({valueType:e,minSize:null,maxSize:null,typeName:u.ZodSet,...N(t)});class eh extends j{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.function)return k(t,{code:m.invalid_type,expected:f.function,received:t.parsedType}),S;function r(e,r){return C({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,x(),b].filter(e=>!!e),issueData:{code:m.invalid_arguments,argumentsError:r}})}function i(e,r){return C({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,x(),b].filter(e=>!!e),issueData:{code:m.invalid_return_type,returnTypeError:r}})}let o={errorMap:t.common.contextualErrorMap},n=t.data;if(this._def.returns instanceof ev){let e=this;return A(async function(...t){let a=new v([]),s=await e._def.args.parseAsync(t,o).catch(e=>{throw a.addIssue(r(t,e)),a}),l=await Reflect.apply(n,this,s),c=await e._def.returns._def.type.parseAsync(l,o).catch(e=>{throw a.addIssue(i(l,e)),a});return c})}{let e=this;return A(function(...t){let a=e._def.args.safeParse(t,o);if(!a.success)throw new v([r(t,a.error)]);let s=Reflect.apply(n,this,a.data),l=e._def.returns.safeParse(s,o);if(!l.success)throw new v([i(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new eh({...this._def,args:el.create(e).rest(Q.create())})}returns(e){return new eh({...this._def,returns:e})}implement(e){let t=this.parse(e);return t}strictImplement(e){let t=this.parse(e);return t}static create(e,t,r){return new eh({args:e||el.create([]).rest(Q.create()),returns:t||Q.create(),typeName:u.ZodFunction,...N(r)})}}class ep extends j{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.getter();return r._parse({data:t.data,path:t.path,parent:t})}}ep.create=(e,t)=>new ep({getter:e,typeName:u.ZodLazy,...N(t)});class eg extends j{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return k(t,{received:t.data,code:m.invalid_literal,expected:this._def.value}),S}return{status:"valid",value:e.data}}get value(){return this._def.value}}function ef(e,t){return new ew({values:e,typeName:u.ZodEnum,...N(t)})}eg.create=(e,t)=>new eg({value:e,typeName:u.ZodLiteral,...N(t)});class ew extends j{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return k(t,{expected:s.joinValues(r),received:t.parsedType,code:m.invalid_type}),S}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return k(t,{received:t.data,code:m.invalid_enum_value,options:r}),S}return A(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return ew.create(e)}exclude(e){return ew.create(this.options.filter(t=>!e.includes(t)))}}ew.create=ef;class em extends j{_parse(e){let t=s.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==f.string&&r.parsedType!==f.number){let e=s.objectValues(t);return k(r,{expected:s.joinValues(e),received:r.parsedType,code:m.invalid_type}),S}if(-1===t.indexOf(e.data)){let e=s.objectValues(t);return k(r,{received:r.data,code:m.invalid_enum_value,options:e}),S}return A(e.data)}get enum(){return this._def.values}}em.create=(e,t)=>new em({values:e,typeName:u.ZodNativeEnum,...N(t)});class ev extends j{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.promise&&!1===t.common.async)return k(t,{code:m.invalid_type,expected:f.promise,received:t.parsedType}),S;let r=t.parsedType===f.promise?t.data:Promise.resolve(t.data);return A(r.then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}ev.create=(e,t)=>new ev({type:e,typeName:u.ZodPromise,...N(t)});class eb extends j{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===u.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,o={addIssue:e=>{k(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),"preprocess"===i.type){let e=i.transform(r.data,o);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,o);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?S:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?S:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>$(e)?Promise.resolve(i.transform(e.value,o)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!$(e))return e;let n=i.transform(e.value,o);if(n instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:n}}}s.assertNever(i)}}eb.create=(e,t,r)=>new eb({schema:e,typeName:u.ZodEffects,effect:t,...N(r)}),eb.createWithPreprocess=(e,t,r)=>new eb({schema:t,effect:{type:"preprocess",transform:e},typeName:u.ZodEffects,...N(r)});class ey extends j{_parse(e){let t=this._getType(e);return t===f.undefined?A(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ey.create=(e,t)=>new ey({innerType:e,typeName:u.ZodOptional,...N(t)});class ex extends j{_parse(e){let t=this._getType(e);return t===f.null?A(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ex.create=(e,t)=>new ex({innerType:e,typeName:u.ZodNullable,...N(t)});class eC extends j{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===f.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}eC.create=(e,t)=>new eC({innerType:e,typeName:u.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...N(t)});class ek extends j{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return I(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new v(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new v(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}ek.create=(e,t)=>new ek({innerType:e,typeName:u.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...N(t)});class eE extends j{_parse(e){let t=this._getType(e);if(t!==f.nan){let t=this._getOrReturnCtx(e);return k(t,{code:m.invalid_type,expected:f.nan,received:t.parsedType}),S}return{status:"valid",value:e.data}}}eE.create=e=>new eE({typeName:u.ZodNaN,...N(e)});let eS=Symbol("zod_brand");class e_ extends j{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class eA extends j{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async){let e=async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?S:"dirty"===e.status?(t.dirty(),_(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})};return e()}{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?S:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new eA({in:e,out:t,typeName:u.ZodPipeline})}}class eT extends j{_parse(e){let t=this._def.innerType._parse(e);return $(t)&&(t.value=Object.freeze(t.value)),t}}eT.create=(e,t)=>new eT({innerType:e,typeName:u.ZodReadonly,...N(t)});let eR=(e,t={},r)=>e?J.create().superRefine((i,o)=>{var n,a;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(n=e.fatal)&&void 0!==n?n:r)||void 0===a||a;o.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):J.create(),e$={object:ei.lazycreate};(a=u||(u={})).ZodString="ZodString",a.ZodNumber="ZodNumber",a.ZodNaN="ZodNaN",a.ZodBigInt="ZodBigInt",a.ZodBoolean="ZodBoolean",a.ZodDate="ZodDate",a.ZodSymbol="ZodSymbol",a.ZodUndefined="ZodUndefined",a.ZodNull="ZodNull",a.ZodAny="ZodAny",a.ZodUnknown="ZodUnknown",a.ZodNever="ZodNever",a.ZodVoid="ZodVoid",a.ZodArray="ZodArray",a.ZodObject="ZodObject",a.ZodUnion="ZodUnion",a.ZodDiscriminatedUnion="ZodDiscriminatedUnion",a.ZodIntersection="ZodIntersection",a.ZodTuple="ZodTuple",a.ZodRecord="ZodRecord",a.ZodMap="ZodMap",a.ZodSet="ZodSet",a.ZodFunction="ZodFunction",a.ZodLazy="ZodLazy",a.ZodLiteral="ZodLiteral",a.ZodEnum="ZodEnum",a.ZodEffects="ZodEffects",a.ZodNativeEnum="ZodNativeEnum",a.ZodOptional="ZodOptional",a.ZodNullable="ZodNullable",a.ZodDefault="ZodDefault",a.ZodCatch="ZodCatch",a.ZodPromise="ZodPromise",a.ZodBranded="ZodBranded",a.ZodPipeline="ZodPipeline",a.ZodReadonly="ZodReadonly";let eI=F.create,eP=Z.create,eO=eE.create,eN=V.create,ej=q.create,eM=Y.create,eD=G.create,eU=K.create,eL=X.create,eB=J.create,ez=Q.create,eW=ee.create,eH=et.create,eF=er.create,eZ=ei.create,eV=ei.strictCreate,eq=eo.create,eY=ea.create,eG=es.create,eK=el.create,eX=ec.create,eJ=eu.create,eQ=ed.create,e0=eh.create,e1=ep.create,e2=eg.create,e3=ew.create,e5=em.create,e4=ev.create,e6=eb.create,e8=ey.create,e9=ex.create,e7=eb.createWithPreprocess,te=eA.create;var tt=Object.freeze({__proto__:null,defaultErrorMap:b,setErrorMap:function(e){y=e},getErrorMap:x,makeIssue:C,EMPTY_PATH:[],addIssueToContext:k,ParseStatus:E,INVALID:S,DIRTY:_,OK:A,isAborted:T,isDirty:R,isValid:$,isAsync:I,get util(){return s},get objectUtil(){return l},ZodParsedType:f,getParsedType:w,ZodType:j,ZodString:F,ZodNumber:Z,ZodBigInt:V,ZodBoolean:q,ZodDate:Y,ZodSymbol:G,ZodUndefined:K,ZodNull:X,ZodAny:J,ZodUnknown:Q,ZodNever:ee,ZodVoid:et,ZodArray:er,ZodObject:ei,ZodUnion:eo,ZodDiscriminatedUnion:ea,ZodIntersection:es,ZodTuple:el,ZodRecord:ec,ZodMap:eu,ZodSet:ed,ZodFunction:eh,ZodLazy:ep,ZodLiteral:eg,ZodEnum:ew,ZodNativeEnum:em,ZodPromise:ev,ZodEffects:eb,ZodTransformer:eb,ZodOptional:ey,ZodNullable:ex,ZodDefault:eC,ZodCatch:ek,ZodNaN:eE,BRAND:eS,ZodBranded:e_,ZodPipeline:eA,ZodReadonly:eT,custom:eR,Schema:j,ZodSchema:j,late:e$,get ZodFirstPartyTypeKind(){return u},coerce:{string:e=>F.create({...e,coerce:!0}),number:e=>Z.create({...e,coerce:!0}),boolean:e=>q.create({...e,coerce:!0}),bigint:e=>V.create({...e,coerce:!0}),date:e=>Y.create({...e,coerce:!0})},any:eB,array:eF,bigint:eN,boolean:ej,date:eM,discriminatedUnion:eY,effect:e6,enum:e3,function:e0,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>eR(t=>t instanceof e,t),intersection:eG,lazy:e1,literal:e2,map:eJ,nan:eO,nativeEnum:e5,never:eW,null:eL,nullable:e9,number:eP,object:eZ,oboolean:()=>ej().optional(),onumber:()=>eP().optional(),optional:e8,ostring:()=>eI().optional(),pipeline:te,preprocess:e7,promise:e4,record:eX,set:eQ,strictObject:eV,string:eI,symbol:eD,transformer:e6,tuple:eK,undefined:eU,union:eq,unknown:ez,void:eH,NEVER:S,ZodIssueCode:m,quotelessJson:e=>{let t=JSON.stringify(e,null,2);return t.replace(/"([^"]+)":/g,"$1:")},ZodError:v});let tr=tt.object({message:tt.string()});function ti(e){return tt.literal(p[e])}tt.object({accessList:tt.array(tt.string()),blockHash:tt.string().nullable(),blockNumber:tt.string().nullable(),chainId:tt.string(),from:tt.string(),gas:tt.string(),hash:tt.string(),input:tt.string().nullable(),maxFeePerGas:tt.string(),maxPriorityFeePerGas:tt.string(),nonce:tt.string(),r:tt.string(),s:tt.string(),to:tt.string(),transactionIndex:tt.string().nullable(),type:tt.string(),v:tt.string(),value:tt.string()});let to=tt.object({chainId:tt.number()}),tn=tt.object({email:tt.string().email()}),ta=tt.object({otp:tt.string()}),ts=tt.object({uri:tt.string()}),tl=tt.object({chainId:tt.optional(tt.number()),preferredAccountType:tt.optional(tt.string())}),tc=tt.object({provider:tt.enum(["google","github","apple","facebook","x","discord"])}),tu=tt.object({email:tt.string().email()}),td=tt.object({otp:tt.string()}),th=tt.object({otp:tt.string()}),tp=tt.object({themeMode:tt.optional(tt.enum(["light","dark"])),themeVariables:tt.optional(tt.record(tt.string(),tt.string().or(tt.number()))),w3mThemeVariables:tt.optional(tt.record(tt.string(),tt.string()))}),tg=tt.object({metadata:tt.object({name:tt.string(),description:tt.string(),url:tt.string(),icons:tt.array(tt.string())}).optional(),sdkVersion:tt.string(),projectId:tt.string()}),tf=tt.object({type:tt.string()}),tw=tt.object({action:tt.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),tm=tt.object({email:tt.string(),address:tt.string(),chainId:tt.number(),userName:tt.string().optional()}),tv=tt.object({action:tt.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),tb=tt.object({email:tt.string().email(),address:tt.string(),chainId:tt.number(),smartAccountDeployed:tt.optional(tt.boolean()),preferredAccountType:tt.optional(tt.string())}),ty=tt.object({uri:tt.string()}),tx=tt.object({isConnected:tt.boolean()}),tC=tt.object({chainId:tt.number()}),tk=tt.object({chainId:tt.number()}),tE=tt.object({newEmail:tt.string().email()}),tS=tt.object({smartAccountEnabledNetworks:tt.array(tt.number())});tt.object({address:tt.string(),isDeployed:tt.boolean()});let t_=tt.object({type:tt.string(),address:tt.string()}),tA=tt.any(),tT=tt.object({method:tt.literal("eth_accounts")}),tR=tt.object({method:tt.literal("eth_blockNumber")}),t$=tt.object({method:tt.literal("eth_call"),params:tt.array(tt.any())}),tI=tt.object({method:tt.literal("eth_chainId")}),tP=tt.object({method:tt.literal("eth_estimateGas"),params:tt.array(tt.any())}),tO=tt.object({method:tt.literal("eth_feeHistory"),params:tt.array(tt.any())}),tN=tt.object({method:tt.literal("eth_gasPrice")}),tj=tt.object({method:tt.literal("eth_getAccount"),params:tt.array(tt.any())}),tM=tt.object({method:tt.literal("eth_getBalance"),params:tt.array(tt.any())}),tD=tt.object({method:tt.literal("eth_getBlockByHash"),params:tt.array(tt.any())}),tU=tt.object({method:tt.literal("eth_getBlockByNumber"),params:tt.array(tt.any())}),tL=tt.object({method:tt.literal("eth_getBlockReceipts"),params:tt.array(tt.any())}),tB=tt.object({method:tt.literal("eth_getBlockTransactionCountByHash"),params:tt.array(tt.any())}),tz=tt.object({method:tt.literal("eth_getBlockTransactionCountByNumber"),params:tt.array(tt.any())}),tW=tt.object({method:tt.literal("eth_getCode"),params:tt.array(tt.any())}),tH=tt.object({method:tt.literal("eth_getFilterChanges"),params:tt.array(tt.any())}),tF=tt.object({method:tt.literal("eth_getFilterLogs"),params:tt.array(tt.any())}),tZ=tt.object({method:tt.literal("eth_getLogs"),params:tt.array(tt.any())}),tV=tt.object({method:tt.literal("eth_getProof"),params:tt.array(tt.any())}),tq=tt.object({method:tt.literal("eth_getStorageAt"),params:tt.array(tt.any())}),tY=tt.object({method:tt.literal("eth_getTransactionByBlockHashAndIndex"),params:tt.array(tt.any())}),tG=tt.object({method:tt.literal("eth_getTransactionByBlockNumberAndIndex"),params:tt.array(tt.any())}),tK=tt.object({method:tt.literal("eth_getTransactionByHash"),params:tt.array(tt.any())}),tX=tt.object({method:tt.literal("eth_getTransactionCount"),params:tt.array(tt.any())}),tJ=tt.object({method:tt.literal("eth_getTransactionReceipt"),params:tt.array(tt.any())}),tQ=tt.object({method:tt.literal("eth_getUncleCountByBlockHash"),params:tt.array(tt.any())}),t0=tt.object({method:tt.literal("eth_getUncleCountByBlockNumber"),params:tt.array(tt.any())}),t1=tt.object({method:tt.literal("eth_maxPriorityFeePerGas")}),t2=tt.object({method:tt.literal("eth_newBlockFilter")}),t3=tt.object({method:tt.literal("eth_newFilter"),params:tt.array(tt.any())}),t5=tt.object({method:tt.literal("eth_newPendingTransactionFilter")}),t4=tt.object({method:tt.literal("eth_sendRawTransaction"),params:tt.array(tt.any())}),t6=tt.object({method:tt.literal("eth_syncing"),params:tt.array(tt.any())}),t8=tt.object({method:tt.literal("eth_uninstallFilter"),params:tt.array(tt.any())}),t9=tt.object({method:tt.literal("personal_sign"),params:tt.array(tt.any())}),t7=tt.object({method:tt.literal("eth_signTypedData_v4"),params:tt.array(tt.any())}),re=tt.object({method:tt.literal("eth_sendTransaction"),params:tt.array(tt.any())}),rt=tt.object({token:tt.string()}),rr={appEvent:tt.object({type:ti("APP_SWITCH_NETWORK"),payload:to}).or(tt.object({type:ti("APP_CONNECT_EMAIL"),payload:tn})).or(tt.object({type:ti("APP_CONNECT_DEVICE")})).or(tt.object({type:ti("APP_CONNECT_OTP"),payload:ta})).or(tt.object({type:ti("APP_CONNECT_SOCIAL"),payload:ts})).or(tt.object({type:ti("APP_GET_USER"),payload:tt.optional(tl)})).or(tt.object({type:ti("APP_GET_SOCIAL_REDIRECT_URI"),payload:tc})).or(tt.object({type:ti("APP_SIGN_OUT")})).or(tt.object({type:ti("APP_IS_CONNECTED"),payload:tt.optional(rt)})).or(tt.object({type:ti("APP_GET_CHAIN_ID")})).or(tt.object({type:ti("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(tt.object({type:ti("APP_INIT_SMART_ACCOUNT")})).or(tt.object({type:ti("APP_SET_PREFERRED_ACCOUNT"),payload:tf})).or(tt.object({type:ti("APP_RPC_REQUEST"),payload:t9.or(re).or(tT).or(tR).or(t$).or(tI).or(tP).or(tO).or(tN).or(tj).or(tM).or(tD).or(tU).or(tL).or(tB).or(tz).or(tW).or(tH).or(tF).or(tZ).or(tV).or(tq).or(tY).or(tG).or(tK).or(tX).or(tJ).or(tQ).or(t0).or(t1).or(t2).or(t3).or(t5).or(t4).or(t6).or(t8).or(t9).or(t7).or(re)})).or(tt.object({type:ti("APP_UPDATE_EMAIL"),payload:tu})).or(tt.object({type:ti("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:td})).or(tt.object({type:ti("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:th})).or(tt.object({type:ti("APP_SYNC_THEME"),payload:tp})).or(tt.object({type:ti("APP_SYNC_DAPP_DATA"),payload:tg})),frameEvent:tt.object({type:ti("FRAME_SWITCH_NETWORK_ERROR"),payload:tr}).or(tt.object({type:ti("FRAME_SWITCH_NETWORK_SUCCESS"),payload:tk})).or(tt.object({type:ti("FRAME_CONNECT_EMAIL_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_CONNECT_EMAIL_SUCCESS"),payload:tw})).or(tt.object({type:ti("FRAME_CONNECT_OTP_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_CONNECT_OTP_SUCCESS")})).or(tt.object({type:ti("FRAME_CONNECT_DEVICE_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_CONNECT_DEVICE_SUCCESS")})).or(tt.object({type:ti("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:tm})).or(tt.object({type:ti("FRAME_CONNECT_SOCIAL_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_GET_USER_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_GET_USER_SUCCESS"),payload:tb})).or(tt.object({type:ti("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:ty})).or(tt.object({type:ti("FRAME_SIGN_OUT_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_SIGN_OUT_SUCCESS")})).or(tt.object({type:ti("FRAME_IS_CONNECTED_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_IS_CONNECTED_SUCCESS"),payload:tx})).or(tt.object({type:ti("FRAME_GET_CHAIN_ID_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_GET_CHAIN_ID_SUCCESS"),payload:tC})).or(tt.object({type:ti("FRAME_RPC_REQUEST_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_RPC_REQUEST_SUCCESS"),payload:tA})).or(tt.object({type:ti("FRAME_SESSION_UPDATE"),payload:rt})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_SUCCESS"),payload:tv})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:tE})).or(tt.object({type:ti("FRAME_SYNC_THEME_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_SYNC_THEME_SUCCESS")})).or(tt.object({type:ti("FRAME_SYNC_DAPP_DATA_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(tt.object({type:ti("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:tS})).or(tt.object({type:ti("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:tr})).or(tt.object({type:ti("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:t_})).or(tt.object({type:ti("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:tr}))},ri={set(e,t){ra.isClient&&localStorage.setItem(`${p.STORAGE_KEY}${e}`,t)},get:e=>ra.isClient?localStorage.getItem(`${p.STORAGE_KEY}${e}`):null,delete(e,t){ra.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${p.STORAGE_KEY}${e}`))}},ro={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},rn=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ra={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return rn.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=ri.get(p.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=ri.get(p.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0},checkIfRequestExists(e){let t=this.getRequestMethod(e);return g.NOT_SAFE_RPC_METHODS.includes(t)||g.SAFE_RPC_METHODS.includes(t)},getRequestMethod:e=>e?.payload?.method,getResponseType(e){let{type:t,payload:r}=e,i=t===p.FRAME_RPC_REQUEST_ERROR;if(i)return p.RPC_RESPONSE_TYPE_ERROR;let o="string"==typeof r&&(r.match(ro.transactionHash)||r.match(ro.signedMessage));return o?p.RPC_RESPONSE_TYPE_TX:p.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(e){let t=this.getRequestMethod(e);return g.SAFE_RPC_METHODS.includes(t)},isClient:"undefined"!=typeof window};class rs{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=ra.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{ra.isClient&&window.addEventListener("message",({data:t})=>{if(!t.type?.includes(p.FRAME_EVENT_KEY))return;let r=rr.frameEvent.parse(t);e(r)})},onAppEvent:e=>{ra.isClient&&window.addEventListener("message",({data:t})=>{if(!t.type?.includes(p.APP_EVENT_KEY))return;let r=rr.appEvent.parse(t);e(r)})},postAppEvent:e=>{if(ra.isClient){if(!this.iframe?.contentWindow)throw Error("W3mFrame: iframe is not set");rr.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")}},postFrameEvent:e=>{if(ra.isClient){if(!parent)throw Error("W3mFrame: parent is not set");rr.frameEvent.parse(e),parent.postMessage(e,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),t&&(this.frameLoadPromise=new Promise((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}}),ra.isClient)){let t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${h}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",t.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){let e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}}));return Object.assign({},...e)}}class rl{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.connectSocialResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.getSocialRedirectUriResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new rs(e,!0),this.w3mFrame.events.onFrameEvent(e=>{switch(console.log("\uD83D\uDCBB received",e),e.type){case p.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case p.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case p.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case p.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case p.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case p.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case p.FRAME_CONNECT_SOCIAL_SUCCESS:return this.onConnectSocialSuccess(e);case p.FRAME_CONNECT_SOCIAL_ERROR:return this.onConnectSocialError(e);case p.FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:return this.onGetSocialRedirectUriSuccess(e);case p.FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:return this.onGetSocialRedirectUriError(e);case p.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case p.FRAME_GET_USER_ERROR:return this.onConnectError(e);case p.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case p.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case p.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case p.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case p.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case p.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case p.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case p.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case p.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case p.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case p.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case p.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess(e);case p.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case p.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case p.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(e);case p.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(e);case p.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(e);case p.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case p.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case p.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case p.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);case p.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(e);case p.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(e);case p.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onSetPreferredAccountSuccess();case p.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onSetPreferredAccountError();default:return null}})}getLoginEmailUsed(){return!!ri.get(p.EMAIL_LOGIN_USED_KEY)}getEmail(){return ri.get(p.EMAIL)}rejectRpcRequest(){this.rpcRequestResolver?.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,ra.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:p.APP_CONNECT_EMAIL,payload:e}),new Promise((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_CONNECT_DEVICE}),new Promise((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_CONNECT_OTP,payload:e}),new Promise((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_IS_CONNECTED,payload:void 0}),new Promise((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_GET_CHAIN_ID}),new Promise((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}})}async getSocialRedirectUri(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_GET_SOCIAL_REDIRECT_URI,payload:e}),new Promise((e,t)=>{this.getSocialRedirectUriResolver={resolve:e,reject:t}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,ra.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:p.APP_UPDATE_EMAIL,payload:e}),new Promise((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}})}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailPrimaryOtpResolver={resolve:e,reject:t}})}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise((e,t)=>{this.updateEmailSecondaryOtpResolver={resolve:e,reject:t}})}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_SYNC_THEME,payload:e}),new Promise((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}})}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_SYNC_DAPP_DATA,payload:e}),new Promise((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}})}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}})}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise((e,t)=>{this.setPreferredAccountResolver={resolve:e,reject:t}})}async connect(e){let t=e?.chainId??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_GET_USER,payload:{chainId:t}}),new Promise((e,t)=>{this.connectResolver={resolve:e,reject:t}})}async connectSocial(e){return this.w3mFrame.events.postAppEvent({type:p.APP_CONNECT_SOCIAL,payload:{uri:e}}),new Promise((e,t)=>{this.connectSocialResolver={resolve:e,reject:t}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((e,t)=>{this.switchChainResolver={resolve:e,reject:t}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:p.APP_SIGN_OUT}),new Promise((e,t)=>{this.disconnectResolver={resolve:e,reject:t}})}async request(e){return(await this.w3mFrame.frameLoadPromise,g.GET_CHAIN_ID===e.method)?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:p.APP_RPC_REQUEST,payload:e}),new Promise((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}}))}onRpcRequest(e){this.w3mFrame.events.onAppEvent(t=>{t.type.includes(p.RPC_METHOD_KEY)&&e(t)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(t=>{t.type.includes(p.RPC_METHOD_KEY)&&e(t)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===p.FRAME_GET_USER_SUCCESS&&e(t.payload)})}onNotConnected(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===p.FRAME_IS_CONNECTED_ERROR&&e(),t.type!==p.FRAME_IS_CONNECTED_SUCCESS||t.payload.isConnected||e()})}onSetPreferredAccount(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===p.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?e(t.payload):t.type===p.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&e({type:g.ACCOUNT_TYPES.EOA})})}onGetSmartAccountEnabledNetworks(e){this.w3mFrame.events.onFrameEvent(t=>{t.type===p.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS?e(t.payload.smartAccountEnabledNetworks):t.type===p.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR&&e([])})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onConnectSocialSuccess(e){e.payload.userName&&this.setSocialLoginSuccess(e.payload.userName),this.connectSocialResolver?.resolve(e.payload)}onConnectSocialError(e){this.connectSocialResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){e.payload.isConnected||this.deleteAuthLoginCache(),this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onGetSocialRedirectUriSuccess(e){this.getSocialRedirectUriResolver?.resolve(e.payload)}onGetSocialRedirectUriError(e){this.getSocialRedirectUriResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),this.deleteAuthLoginCache()}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(e){this.setLastUsedChainId(e.payload.chainId),this.switchChainResolver?.resolve(e.payload)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){let{payload:t}=e}onUpdateEmailSuccess(e){this.updateEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){this.updateEmailPrimaryOtpResolver?.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){this.updateEmailPrimaryOtpResolver?.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){let{newEmail:t}=e.payload;this.setEmailLoginSuccess(t),this.updateEmailSecondaryOtpResolver?.resolve({newEmail:t})}onUpdateEmailSecondaryOtpError(e){this.updateEmailSecondaryOtpResolver?.reject(e.payload.message)}onSyncThemeSuccess(){this.syncThemeResolver?.resolve(void 0)}onSyncThemeError(e){this.syncThemeResolver?.reject(e.payload.message)}onSyncDappDataSuccess(){this.syncDappDataResolver?.resolve(void 0)}onSyncDappDataError(e){this.syncDappDataResolver?.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){this.persistSmartAccountEnabledNetworks(e.payload.smartAccountEnabledNetworks),this.smartAccountEnabledNetworksResolver?.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){this.persistSmartAccountEnabledNetworks([]),this.smartAccountEnabledNetworksResolver?.reject(e.payload.message)}onSetPreferredAccountSuccess(){this.setPreferredAccountResolver?.resolve(void 0)}onSetPreferredAccountError(){this.setPreferredAccountResolver?.reject()}setNewLastEmailLoginTime(){ri.set(p.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(e){ri.set(p.SOCIAL_USERNAME,e)}setEmailLoginSuccess(e){ri.set(p.EMAIL,e),ri.set(p.EMAIL_LOGIN_USED_KEY,"true"),ri.delete(p.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){ri.delete(p.EMAIL_LOGIN_USED_KEY),ri.delete(p.EMAIL),ri.delete(p.LAST_USED_CHAIN_KEY),ri.delete(p.SOCIAL_USERNAME),ri.delete(p.SOCIAL,!0)}setLastUsedChainId(e){ri.set(p.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(ri.get(p.LAST_USED_CHAIN_KEY))}persistSmartAccountEnabledNetworks(e){ri.set(p.SMART_ACCOUNT_ENABLED_NETWORKS,e.join(","))}}},53722:function(e,t,r){"use strict";r.d(t,{sj:function(){return g},iH:function(){return m},CO:function(){return w},Ld:function(){return f}}),Symbol();let i=Symbol(),o=Object.getPrototypeOf,n=new WeakMap,a=e=>e&&(n.has(e)?n.get(e):o(e)===Object.prototype||o(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{n.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,h=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=new WeakMap,n=(e,t,r=i)=>{let a=o.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),o.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),o={value:i,enumerable:!0,configurable:!0};if(d.has(i))l(i,!1);else if(i instanceof Promise)delete o.value,o.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);o.value=n(e,t(),r)}Object.defineProperty(s,t,o)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],p=i=>{if(!c(i))throw Error("object required");let o=a.get(i);if(o)return o;let l=h[0],g=new Set,f=(e,t=++h[0])=>{l!==t&&(l=t,g.forEach(r=>r(e,t)))},w=h[1],m=(e=++h[1])=>(w===e||g.size||(w=e,b.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),v=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],f(i,r)},b=new Map,y=(e,t)=>{if(b.has(e))throw Error("prop listener already exists");if(g.size){let r=t[3](v(e));b.set(e,[t,r])}else b.set(e,[t])},x=e=>{var t;let r=b.get(e);r&&(b.delete(e),null==(t=r[1])||t.call(r))},C=e=>{g.add(e),1===g.size&&b.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](v(r));b.set(r,[e,i])});let t=()=>{g.delete(e),0===g.size&&b.forEach(([e,t],r)=>{t&&(t(),b.set(r,[e]))})};return t},k=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),E={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&f(["delete",[t],r]),i},set(t,i,o,n){let l=Reflect.has(t,i),h=Reflect.get(t,i,n);if(l&&(e(h,o)||a.has(o)&&e(h,a.get(o))))return!0;x(i),c(o)&&(o=s(o)||o);let g=o;if(o instanceof Promise)o.then(e=>{o.status="fulfilled",o.value=e,f(["resolve",[i],e])}).catch(e=>{o.status="rejected",o.reason=e,f(["reject",[i],e])});else{!u.has(o)&&r(o)&&(g=p(o));let e=!d.has(g)&&u.get(g);e&&y(i,e)}return Reflect.set(t,i,g,n),f(["set",[i],o,h]),!0}},S=t(k,E);a.set(i,S);let _=[k,m,n,C];return u.set(S,_),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(S[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(k,e,t)}),S})=>[p,u,d,e,t,r,i,o,n,a,h],[p]=h();function g(e={}){return p(e)}function f(e,t,r){let i;let o=u.get(e);o||console.warn("Please use proxy object");let n=[],a=o[3],s=!1,l=a(e=>{if(n.push(e),r){t(n.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(n.splice(0))}))});return s=!0,()=>{s=!1,l()}}function w(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,o,n]=r;return n(i,o(),t)}function m(e){return d.add(e),e}},10913:function(e,t,r){"use strict";r.d(t,{VW:function(){return o}});var i=r(53722);function o(e,t,r,o){let n=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(n,i)||r(n=i)},o)}Symbol()},4832:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},45583:function(e,t,r){"use strict";r.d(t,{e:function(){return n}});var i=r(4832),o=r(5006);function n(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,ccipRead:n,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,i.T)(e.account):void 0,{config:h,request:p,value:g}=e.transport({chain:u,pollingInterval:l}),f={...h,...g},w={account:d,batch:t,cacheTime:r,ccipRead:n,chain:u,key:a,name:s,pollingInterval:l,request:p,transport:f,type:c,uid:(0,o.h)()};return Object.assign(w,{extend:function e(t){return r=>{let i=r(t);for(let e in w)delete i[e];let o={...t,...i};return Object.assign(o,{extend:e(o)})}}(w)})}},51980:function(e,t,r){"use strict";r.d(t,{q:function(){return p}});var i=r(95950),o=r(20722),n=r(48519),a=r(21693),s=r(58993),l=r(46108);let c=new l.k(8192);var u=r(36063),d=r(71891),h=r(5006);function p({key:e,name:t,request:r,retryCount:l=3,retryDelay:p=150,timeout:g,type:f},w){let m=(0,h.h)();return{config:{key:e,name:t,request:r,retryCount:l,retryDelay:p,timeout:g,type:f},request:function(e,t={}){return async(r,l={})=>{let{dedupe:h=!1,retryDelay:p=150,retryCount:g=3,uid:f}={...t,...l},w=h?(0,s.w)((0,a.$G)(`${f}.${(0,d.P)(r)}`)):void 0;return function(e,{enabled:t=!0,id:r}){if(!t||!r)return e();if(c.get(r))return c.get(r);let i=e().finally(()=>c.delete(r));return c.set(r,i),i}(()=>(0,u.J)(async()=>{try{return await e(r)}catch(e){switch(e.code){case n.s7.code:throw new n.s7(e);case n.B.code:throw new n.B(e);case n.LX.code:throw new n.LX(e);case n.nY.code:throw new n.nY(e);case n.XS.code:throw new n.XS(e);case n.yR.code:throw new n.yR(e);case n.Og.code:throw new n.Og(e);case n.pT.code:throw new n.pT(e);case n.KB.code:throw new n.KB(e);case n.gS.code:throw new n.gS(e);case n.Pv.code:throw new n.Pv(e);case n.GD.code:throw new n.GD(e);case n.ab.code:throw new n.ab(e);case n.PE.code:throw new n.PE(e);case n.Ts.code:throw new n.Ts(e);case n.u5.code:throw new n.u5(e);case n.I0.code:throw new n.I0(e);case n.x3.code:throw new n.x3(e);case 5e3:throw new n.ab(e);default:if(e instanceof i.G)throw e;throw new n.ir(e)}}},{delay:({count:e,error:t})=>{if(t&&t instanceof o.Gg){let e=t?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*Number.parseInt(e)}return~~(1<<e)*p},retryCount:g,shouldRetry:({error:e})=>"code"in e&&"number"==typeof e.code?-1===e.code||e.code===n.Pv.code||e.code===n.XS.code:!(e instanceof o.Gg)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status}),{enabled:h,id:w})}}(r,{retryCount:l,retryDelay:p,uid:m}),value:w}}},67333:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(95950);class o extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},21485:function(e,t,r){"use strict";r.d(t,{b:function(){return o}});var i=r(95950);class o extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},95950:function(e,t,r){"use strict";r.d(t,{G:function(){return o}});var i=r(66291);class o extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof o?t.cause.details:t.cause?.message?t.cause.message:t.details,n=t.cause instanceof o&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...n?[`Docs: ${t.docsBaseUrl??"https://viem.sh"}${n}${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=n,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},741:function(e,t,r){"use strict";r.d(t,{$s:function(){return n},W_:function(){return a},mV:function(){return o}});var i=r(95950);class o extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class n extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class a extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}},86714:function(e,t,r){"use strict";r.d(t,{J5:function(){return o},M6:function(){return a},yr:function(){return n}});var i=r(95950);class o extends i.G{constructor({max:e,min:t,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class n extends i.G{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},20722:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return l},bs:function(){return s}});var i=r(71891),o=r(95950),n=r(66291);class a extends o.G{constructor({body:e,cause:t,details:r,headers:o,status:a,url:s}){super("HTTP request failed.",{cause:t,details:r,metaMessages:[a&&`Status: ${a}`,`URL: ${(0,n.Gr)(s)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=o,this.status=a,this.url=s}}class s extends o.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,n.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class l extends o.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,n.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},48519:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return v},I0:function(){return k},KB:function(){return f},LX:function(){return c},Og:function(){return p},PE:function(){return y},Pv:function(){return m},Ts:function(){return x},XS:function(){return d},ab:function(){return b},gS:function(){return w},ir:function(){return S},nY:function(){return u},pT:function(){return g},s7:function(){return s},u5:function(){return C},x3:function(){return E},yR:function(){return h}});var i=r(95950),o=r(20722);class n extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:n}){super(n,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof o.bs?e.code:t??-1}}class a extends n{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends n{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends n{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends n{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends n{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends n{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends n{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends n{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class g extends n{constructor(e){super(e,{code:g.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class f extends n{constructor(e){super(e,{code:f.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class w extends n{constructor(e){super(e,{code:w.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class m extends n{constructor(e){super(e,{code:m.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class v extends n{constructor(e){super(e,{code:v.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class b extends a{constructor(e){super(e,{code:b.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class k extends a{constructor(e){super(e,{code:k.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends n{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},66291:function(e,t,r){"use strict";r.d(t,{CR:function(){return i},Gr:function(){return o},bo:function(){return n}});let i=e=>e,o=e=>e,n=()=>"viem@2.16.5"},39803:function(e,t,r){"use strict";r.d(t,{K:function(){return u},x:function(){return c}});var i=r(21485),o=r(56728),n=r(58993),a=r(46108),s=r(87364);let l=new a.k(8192);function c(e,t){if(l.has(`${e}.${t}`))return l.get(`${e}.${t}`);let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,n.w)((0,o.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());let s=`0x${a.join("")}`;return l.set(`${e}.${t}`,s),s}function u(e,t){if(!(0,s.U)(e,{strict:!1}))throw new i.b({address:e});return c(e,t)}},87364:function(e,t,r){"use strict";r.d(t,{U:function(){return s}});var i=r(46108),o=r(39803);let n=/^0x[a-fA-F0-9]{40}$/,a=new i.k(8192);function s(e,t){let{strict:r=!0}=t??{},i=`${e}.${r}`;if(a.has(i))return a.get(i);let s=!!n.test(e)&&(e.toLowerCase()===e||!r||(0,o.x)(e)===e);return a.set(i,s),s}},45008:function(e,t,r){"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return i}})},99725:function(e,t,r){"use strict";r.d(t,{gc:function(){return n},vk:function(){return o}});var i=r(741);function o(e,{dir:t,size:r=32}={}){return"string"==typeof e?n(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$s({size:e.length,targetSize:r,type:"bytes"});let o=new Uint8Array(r);for(let i=0;i<r;i++){let n="right"===t;o[n?i:r-i-1]=e[n?i:e.length-i-1]}return o}(e,{dir:t,size:r})}function n(e,{dir:t,size:r=32}={}){if(null===r)return e;let o=e.replace("0x","");if(o.length>2*r)throw new i.$s({size:Math.ceil(o.length/2),targetSize:r,type:"hex"});return`0x${o["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39868:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(45008);function o(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},94973:function(e,t,r){"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return i}})},30838:function(e,t,r){"use strict";r.d(t,{Yf:function(){return s},ly:function(){return c},rR:function(){return u},y_:function(){return l}});var i=r(86714),o=r(39868),n=r(94973),a=r(56728);function s(e,{size:t}){if((0,o.d)(e)>t)throw new i.M6({givenSize:(0,o.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let o=(e.length-2)/2,n=(1n<<8n*BigInt(o)-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(2*o,"f")}`)-1n}function c(e,t={}){return Number(l(e,t))}function u(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,n.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},56728:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return p}});var i=r(95950),o=r(45008),n=r(99725),a=r(30838),s=r(21693);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return h(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}(e,t):(0,o.v)(e)?h(e,t):p(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,n.vk)(r,{dir:"right",size:t.size}));let o=r.slice(2);o.length%2&&(o=`0${o}`);let s=o.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(o.charCodeAt(t++)),n=d(o.charCodeAt(t++));if(void 0===r||void 0===n)throw new i.G(`Invalid byte sequence ("${o[t-2]}${o[t-1]}" in "${o}").`);l[e]=16*r+n}return l}function p(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,n.vk)(r,{dir:"right",size:t.size})):r}},21693:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var i=r(86714),o=r(99725),n=r(30838);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,n.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,n.Yf)(i,{size:t.size}),(0,o.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:n,size:a}=t,s=BigInt(e);a?r=n?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&n?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:n,size:a,value:`${e}${t}`})}let c=`0x${(n&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,o.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){let r=d.encode(e);return c(r,t)}},58993:function(e,t,r){"use strict";r.d(t,{w:function(){return R}});var i=r(15493);let o=BigInt(4294967296-1),n=BigInt(32),a=(e,t,r)=>e<<r|t>>>32-r,s=(e,t,r)=>t<<r|e>>>32-r,l=(e,t,r)=>t<<r-32|e>>>64-r,c=(e,t,r)=>e<<r-32|t>>>64-r;var u=r(32305);let d=[],h=[],p=[],g=BigInt(0),f=BigInt(1),w=BigInt(2),m=BigInt(7),v=BigInt(256),b=BigInt(113);for(let e=0,t=f,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],d.push(2*(5*i+r)),h.push((e+1)*(e+2)/2%64);let o=g;for(let e=0;e<7;e++)(t=(t<<f^(t>>m)*b)%v)&w&&(o^=f<<(f<<BigInt(e))-f);p.push(o)}let[y,x]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let a=0;a<e.length;a++){let{h:s,l}=function(e,t=!1){return t?{h:Number(e&o),l:Number(e>>n&o)}:{h:0|Number(e>>n&o),l:0|Number(e&o)}}(e[a],t);[r[a],i[a]]=[s,l]}return[r,i]}(p,!0),C=(e,t,r)=>r>32?l(e,t,r):a(e,t,r),k=(e,t,r)=>r>32?c(e,t,r):s(e,t,r);class E extends u.kb{constructor(e,t,r,o=!1,n=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=o,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,i.Rx)(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,u.Jq)(this.state)}keccak(){u.iA||(0,u.l1)(this.state32),function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,o=(t+2)%10,n=r[o],a=r[o+1],s=C(n,a,1)^r[i],l=k(n,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],o=e[3];for(let r=0;r<24;r++){let i=h[r],n=C(t,o,i),a=k(t,o,i),s=d[r];t=e[s],o=e[s+1],e[s]=n,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=y[i],e[1]^=x[i]}r.fill(0)}(this.state32,this.rounds),u.iA||(0,u.l1)(this.state32),this.posOut=0,this.pos=0}update(e){(0,i.Gg)(this);let{blockLen:t,state:r}=this;e=(0,u.O0)(e);let o=e.length;for(let i=0;i<o;){let n=Math.min(t-this.pos,o-i);for(let t=0;t<n;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){(0,i.Gg)(this,!1),(0,i.aI)(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,o=e.length;i<o;){this.posOut>=r&&this.keccak();let n=Math.min(r-this.posOut,o-i);e.set(t.subarray(this.posOut,this.posOut+n),i),this.posOut+=n,i+=n}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return(0,i.Rx)(e),this.xofInto(new Uint8Array(e))}digestInto(e){if((0,i.J8)(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:o,enableXOF:n}=this;return e||(e=new E(t,r,i,n,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=r,e.outputLen=i,e.enableXOF=n,e.destroyed=this.destroyed,e}}let S=(0,u.hE)(()=>new E(136,1,32));var _=r(45008),A=r(56728),T=r(21693);function R(e,t){let r=S((0,_.v)(e,{strict:!1})?(0,A.O0)(e):e);return"bytes"===(t||"hex")?r:(0,T.NC)(r)}},46108:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});class i extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}},33668:function(e,t,r){"use strict";r.d(t,{S:function(){return o}});let i=new Map;function o({fn:e,id:t,shouldSplitBatch:r,wait:o=0,sort:n}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{n&&Array.isArray(e)&&e.sort(n);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r}),n=r?.([...l(),e]);n&&a();let s=c().length>0;return s?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,o)),i}}}},36063:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var i=r(21810);function o(e,{delay:t=100,retryCount:r=2,shouldRetry:o=()=>!0}={}){return new Promise((n,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,i.D)(r),s({count:l+1})};try{let t=await e();n(t)}catch(e){if(l<r&&await o({count:l,error:e}))return c({error:e});a(e)}};s()})}},33679:function(e,t,r){"use strict";function i(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((o,n)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():n(t)},r)),o(await e({signal:s?.signal||null}))}catch(e){e?.name==="AbortError"&&n(t),n(e)}finally{clearTimeout(a)}})()})}r.d(t,{F:function(){return i}})},71891:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},5006:function(e,t,r){"use strict";let i;r.d(t,{h:function(){return n}});let o=256;function n(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}},21810:function(e,t,r){"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return i}})}}]);
