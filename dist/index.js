"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=f(function(G,d){
var E=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function O(r,e,n,o,u,c,_){var v,t,s,i,a;if(r<=0)return NaN;for(t=o,s=_,a=0;a<r&&(i=e[t],!(i===i&&u[s]===0));a++)t+=n,s+=c;if(a===r)return NaN;for(v=b(i),a+=1,a;a<r;a++)t+=n,s+=c,!u[s]&&(i=e[t],!E(i)&&(i=b(i),i<v&&(v=i)));return v}d.exports=O
});var x=f(function(H,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,e,n,o,u){return g(r,e,n,p(r,n),o,u,p(r,u))}y.exports=h
});var l=f(function(I,k){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),z=m();w(j,"ndarray",z);k.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=l(),q,R=B(A(__dirname,"./native.js"));C(R)?q=D:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
