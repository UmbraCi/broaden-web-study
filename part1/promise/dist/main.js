(()=>{var s={179:s=>{const t="pending",e="fulfilled",o="rejected";s.exports=class{constructor(s){s(this.resolve,this.reject)}status=t;value=void 0;reason=void 0;resolve=s=>{this.status==t&&(this.status=e,this.value=s)};reject=s=>{this.status==t&&(this.status=o,this.reason=s)};then(s,t){this.status==e?s(this.value):this.status==o&&t(this.reason)}}}},t={};new(function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return s[o](i,i.exports,e),i.exports}(179))(((s,t)=>{setTimeout((()=>{s("success")}),2e3)})).then((s=>{console.log("成功"+s)}),(s=>{console.log(`失败${s}`)}))})();