var EasyStar=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="/bin/",b(b.s=0)}([function(a,b,c){var d={},e=c(1),f=c(2),g=c(3);a.exports=d;var h=1;d.js=function(){var a,b,c,i=!1,j={},k={},l={},m={},n=!0,o={},p=[],q=Number.MAX_VALUE,r=!1;this.setAcceptableTiles=function(a){a instanceof Array?c=a:!isNaN(parseFloat(a))&&isFinite(a)&&(c=[a])},this.enableSync=function(){i=!0},this.disableSync=function(){i=!1},this.enableDiagonals=function(){r=!0},this.disableDiagonals=function(){r=!1},this.setGrid=function(b){a=b;for(var c=0;c<a.length;c++)for(var d=0;d<a[0].length;d++)k[a[c][d]]||(k[a[c][d]]=1)},this.setTileCost=function(a,b){k[a]=b},this.setAdditionalPointCost=function(a,b,c){void 0===l[b]&&(l[b]={}),l[b][a]=c},this.removeAdditionalPointCost=function(a,b){void 0!==l[b]&&delete l[b][a]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(a,b,c){void 0===m[b]&&(m[b]={}),m[b][a]=c},this.removeAllDirectionalConditions=function(){m={}},this.setIterationsPerCalculation=function(a){q=a},this.avoidAdditionalPoint=function(a,b){void 0===j[b]&&(j[b]={}),j[b][a]=1},this.stopAvoidingAdditionalPoint=function(a,b){void 0!==j[b]&&delete j[b][a]},this.enableCornerCutting=function(){n=!0},this.disableCornerCutting=function(){n=!1},this.stopAvoidingAllAdditionalPoints=function(){j={}},this.findPath=function(b,d,f,j,k){var l=function(a){i?k(a):setTimeout(function(){k(a)})};if(void 0===c)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(void 0===a)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(b<0||d<0||f<0||j<0||b>a[0].length-1||d>a.length-1||f>a[0].length-1||j>a.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(b!==f||d!==j){for(var m=a[j][f],n=!1,q=0;q<c.length;q++)if(m===c[q]){n=!0;break}if(!1!==n){var r=new e;r.openList=new g(function(a,b){return a.bestGuessDistance()-b.bestGuessDistance()}),r.isDoneCalculating=!1,r.nodeHash={},r.startX=b,r.startY=d,r.endX=f,r.endY=j,r.callback=l,r.openList.push(w(r,r.startX,r.startY,null,1));var s=h++;return o[s]=r,p.push(s),s}l(null)}else l([])},this.cancelPath=function(a){return a in o&&(delete o[a],!0)},this.calculate=function(){if(0!==p.length&&void 0!==a&&void 0!==c)for(b=0;b<q;b++){if(0===p.length)return;i&&(b=0);var d=p[0],e=o[d];if(void 0!==e)if(0!==e.openList.size()){var f=e.openList.pop();if(e.endX!==f.x||e.endY!==f.y)f.list=0,f.y>0&&s(e,f,0,-1,1*v(f.x,f.y-1)),f.x<a[0].length-1&&s(e,f,1,0,1*v(f.x+1,f.y)),f.y<a.length-1&&s(e,f,0,1,1*v(f.x,f.y+1)),f.x>0&&s(e,f,-1,0,1*v(f.x-1,f.y)),r&&(f.x>0&&f.y>0&&(n||t(a,c,f.x,f.y-1,f)&&t(a,c,f.x-1,f.y,f))&&s(e,f,-1,-1,1.4*v(f.x-1,f.y-1)),f.x<a[0].length-1&&f.y<a.length-1&&(n||t(a,c,f.x,f.y+1,f)&&t(a,c,f.x+1,f.y,f))&&s(e,f,1,1,1.4*v(f.x+1,f.y+1)),f.x<a[0].length-1&&f.y>0&&(n||t(a,c,f.x,f.y-1,f)&&t(a,c,f.x+1,f.y,f))&&s(e,f,1,-1,1.4*v(f.x+1,f.y-1)),f.x>0&&f.y<a.length-1&&(n||t(a,c,f.x,f.y+1,f)&&t(a,c,f.x-1,f.y,f))&&s(e,f,-1,1,1.4*v(f.x-1,f.y+1)));else{var g=[];g.push({x:f.x,y:f.y});for(var h=f.parent;null!=h;)g.push({x:h.x,y:h.y}),h=h.parent;g.reverse();var j=g;e.callback(j),delete o[d],p.shift()}}else e.callback(null),delete o[d],p.shift();else p.shift()}};var s=function(b,d,e,f,g){var h=d.x+e,i=d.y+f;if((void 0===j[i]||void 0===j[i][h])&&t(a,c,h,i,d)){var k=w(b,h,i,d,g);void 0===k.list?(k.list=1,b.openList.push(k)):d.costSoFar+g<k.costSoFar&&(k.costSoFar=d.costSoFar+g,k.parent=d,b.openList.updateItem(k))}},t=function(a,b,c,d,e){var f=m[d]&&m[d][c];if(f){var g=u(e.x-c,e.y-d);if(!function(){for(var a=0;a<f.length;a++)if(f[a]===g)return!0;return!1}())return!1}for(var h=0;h<b.length;h++)if(a[d][c]===b[h])return!0;return!1},u=function(a,b){if(0===a&&-1===b)return d.TOP;if(1===a&&-1===b)return d.TOP_RIGHT;if(1===a&&0===b)return d.RIGHT;if(1===a&&1===b)return d.BOTTOM_RIGHT;if(0===a&&1===b)return d.BOTTOM;if(-1===a&&1===b)return d.BOTTOM_LEFT;if(-1===a&&0===b)return d.LEFT;if(-1===a&&-1===b)return d.TOP_LEFT;throw new Error("These differences are not valid: "+a+", "+b)},v=function(b,c){return l[c]&&l[c][b]||k[a[c][b]]},w=function(a,b,c,d,e){if(void 0!==a.nodeHash[c]){if(void 0!==a.nodeHash[c][b])return a.nodeHash[c][b]}else a.nodeHash[c]={};var g=x(b,c,a.endX,a.endY);if(null!==d)var h=d.costSoFar+e;else h=0;var i=new f(d,b,c,h,g);return a.nodeHash[c][b]=i,i},x=function(a,b,c,d){var e,f;return r?(e=Math.abs(a-c))<(f=Math.abs(b-d))?1.4*e+f:1.4*f+e:(e=Math.abs(a-c))+(f=Math.abs(b-d))}},d.TOP="TOP",d.TOP_RIGHT="TOP_RIGHT",d.RIGHT="RIGHT",d.BOTTOM_RIGHT="BOTTOM_RIGHT",d.BOTTOM="BOTTOM",d.BOTTOM_LEFT="BOTTOM_LEFT",d.LEFT="LEFT",d.TOP_LEFT="TOP_LEFT"},function(a,b){a.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(a,b){a.exports=function(a,b,c,d,e){this.parent=a,this.x=b,this.y=c,this.costSoFar=d,this.simpleDistanceToTarget=e,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(a,b,c){a.exports=c(4)},function(a,b,c){var d,e,f;(function(){var c,g,h,i,j,k,l,m,n,o,p,q,r,s,t;h=Math.floor,o=Math.min,g=function(a,b){return a<b?-1:a>b?1:0},n=function(a,b,c,d,e){var f;if(null==c&&(c=0),null==e&&(e=g),c<0)throw new Error("lo must be non-negative");for(null==d&&(d=a.length);c<d;)e(b,a[f=h((c+d)/2)])<0?d=f:c=f+1;return[].splice.apply(a,[c,c-c].concat(b)),b},k=function(a,b,c){return null==c&&(c=g),a.push(b),s(a,0,a.length-1,c)},j=function(a,b){var c,d;return null==b&&(b=g),c=a.pop(),a.length?(d=a[0],a[0]=c,t(a,0,b)):d=c,d},m=function(a,b,c){var d;return null==c&&(c=g),d=a[0],a[0]=b,t(a,0,c),d},l=function(a,b,c){var d;return null==c&&(c=g),a.length&&c(a[0],b)<0&&(b=(d=[a[0],b])[0],a[0]=d[1],t(a,0,c)),b},i=function(a,b){var c,d,e,f,i,j;for(null==b&&(b=g),i=[],d=0,e=(f=function(){j=[];for(var b=0,c=h(a.length/2);0<=c?b<c:b>c;0<=c?b++:b--)j.push(b);return j}.apply(this).reverse()).length;d<e;d++)c=f[d],i.push(t(a,c,b));return i},r=function(a,b,c){var d;if(null==c&&(c=g),-1!==(d=a.indexOf(b)))return s(a,0,d,c),t(a,d,c)},p=function(a,b,c){var d,e,f,h,j;if(null==c&&(c=g),!(e=a.slice(0,b)).length)return e;for(i(e,c),f=0,h=(j=a.slice(b)).length;f<h;f++)d=j[f],l(e,d,c);return e.sort(c).reverse()},q=function(a,b,c){var d,e,f,h,k,l,m,p,q;if(null==c&&(c=g),10*b<=a.length){if(!(f=a.slice(0,b).sort(c)).length)return f;for(e=f[f.length-1],h=0,l=(m=a.slice(b)).length;h<l;h++)c(d=m[h],e)<0&&(n(f,d,0,null,c),f.pop(),e=f[f.length-1]);return f}for(i(a,c),q=[],k=0,p=o(b,a.length);0<=p?k<p:k>p;0<=p?++k:--k)q.push(j(a,c));return q},s=function(a,b,c,d){var e,f,h;for(null==d&&(d=g),e=a[c];c>b&&d(e,f=a[h=c-1>>1])<0;)a[c]=f,c=h;return a[c]=e},t=function(a,b,c){var d,e,f,h,i;for(null==c&&(c=g),e=a.length,i=b,f=a[b],d=2*b+1;d<e;)(h=d+1)<e&&!(c(a[d],a[h])<0)&&(d=h),a[b]=a[d],d=2*(b=d)+1;return a[b]=f,s(a,i,b,c)},c=function(){function a(a){this.cmp=null!=a?a:g,this.nodes=[]}return a.push=k,a.pop=j,a.replace=m,a.pushpop=l,a.heapify=i,a.updateItem=r,a.nlargest=p,a.nsmallest=q,a.prototype.push=function(a){return k(this.nodes,a,this.cmp)},a.prototype.pop=function(){return j(this.nodes,this.cmp)},a.prototype.peek=function(){return this.nodes[0]},a.prototype.contains=function(a){return-1!==this.nodes.indexOf(a)},a.prototype.replace=function(a){return m(this.nodes,a,this.cmp)},a.prototype.pushpop=function(a){return l(this.nodes,a,this.cmp)},a.prototype.heapify=function(){return i(this.nodes,this.cmp)},a.prototype.updateItem=function(a){return r(this.nodes,a,this.cmp)},a.prototype.clear=function(){return this.nodes=[]},a.prototype.empty=function(){return 0===this.nodes.length},a.prototype.size=function(){return this.nodes.length},a.prototype.clone=function(){var b;return(b=new a).nodes=this.nodes.slice(0),b},a.prototype.toArray=function(){return this.nodes.slice(0)},a.prototype.insert=a.prototype.push,a.prototype.top=a.prototype.peek,a.prototype.front=a.prototype.peek,a.prototype.has=a.prototype.contains,a.prototype.copy=a.prototype.clone,a}(),e=[],void 0===(f="function"==typeof(d=function(){return c})?d.apply(b,e):d)||(a.exports=f)}).call(this)}]);