(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"73cf":function(r,t,e){"use strict";e.r(t);var s=e("7a23"),o=function(r){return Object(s["v"])("data-v-11ed74ac"),r=r(),Object(s["t"])(),r},n={class:"register-form"},a=o((function(){return Object(s["g"])("h2",null,"Create Your Account",-1)})),u={class:"input-wrapper"},c={class:"input-error-msg"},i={class:"input-error-msg"},d=Object(s["h"])("Already have an account? "),p=Object(s["h"])("Sign in");function l(r,t,e,o,l,g){var f=Object(s["z"])("router-link");return Object(s["s"])(),Object(s["f"])("div",n,[a,Object(s["g"])("form",null,[Object(s["g"])("div",u,[Object(s["g"])("div",c,Object(s["B"])(l.userErrorMsg),1),Object(s["G"])(Object(s["g"])("input",{class:Object(s["o"])(["form-input",{"input-error":"userName"===l.inputError}]),type:"text",placeholder:"Username",onClick:t[0]||(t[0]=function(){return g.clearErrorMessages&&g.clearErrorMessages.apply(g,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(r){return g.user=r})},null,2),[[s["D"],g.user]]),Object(s["g"])("div",i,Object(s["B"])(l.passwordErrorMsg),1),Object(s["G"])(Object(s["g"])("input",{class:Object(s["o"])(["form-input",{"input-error":"password"===l.inputError}]),type:"password",placeholder:"Password",onClick:t[2]||(t[2]=function(){return g.clearErrorMessages&&g.clearErrorMessages.apply(g,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(r){return g.password=r})},null,2),[[s["D"],g.password]]),Object(s["g"])("button",{class:"form-button",onClick:t[4]||(t[4]=Object(s["H"])((function(){return g.createNewUser&&g.createNewUser.apply(g,arguments)}),["prevent"]))},"Create Account")])]),Object(s["g"])("p",null,[d,Object(s["i"])(f,{to:"/Login"},{default:Object(s["F"])((function(){return[p]})),_:1})])])}e("d3b7"),e("e9c4"),e("99af");var g={name:"Register",data:function(){return{focused:!1,userErrorMsg:"",passwordErrorMsg:"",inputError:""}},computed:{user:{get:function(){return this.$store.state.user},set:function(r){this.$store.commit("setUser",r)}},password:{get:function(){return this.$store.state.password},set:function(r){this.$store.commit("setPassword",r)}}},methods:{createNewUser:function(){var r=this,t=JSON.parse(localStorage.getItem("userList")||"[]");if(""===this.$store.state.user)return this.inputError="userName",this.userErrorMsg="Please enter a username",this.$store.commit("setUser",""),void this.$store.commit("setPassword","");if(t.some((function(t){return t.userName===r.user})))return this.inputError="userName",void(this.userErrorMsg="User name ".concat(this.user," already exists, sorry."));if(this.$store.state.password.length<6)return this.inputError="password",this.passwordErrorMsg="Password must contain at least 6 characters",void this.$store.commit("setPassword","");var e={userName:this.$store.state.user,password:this.$store.state.password};t.push(e),localStorage.setItem("userList",JSON.stringify(t)),this.$store.commit("setLoggedIn",!0),console.log("New user created: ".concat(this.$store.state.user,", password is ").concat(this.$store.state.password,".")),console.log("Welcome, you're logged in."),this.$store.commit("setUser",""),this.$store.commit("setPassword",""),this.$router.push({path:"/starships"})},clearErrorMessages:function(){this.inputError="",this.userErrorMsg="",this.passwordErrorMsg=""}}},f=(e("9dc3"),e("6b0d")),h=e.n(f);const m=h()(g,[["render",l],["__scopeId","data-v-11ed74ac"]]);t["default"]=m},7995:function(r,t,e){},"9dc3":function(r,t,e){"use strict";e("7995")},e9c4:function(r,t,e){var s=e("23e7"),o=e("da84"),n=e("d066"),a=e("2ba4"),u=e("e330"),c=e("d039"),i=o.Array,d=n("JSON","stringify"),p=u(/./.exec),l=u("".charAt),g=u("".charCodeAt),f=u("".replace),h=u(1..toString),m=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,O=function(r,t,e){var s=l(e,t-1),o=l(e,t+1);return p(w,r)&&!p(b,o)||p(b,r)&&!p(w,s)?"\\u"+h(g(r,0),16):r},j=c((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&s({target:"JSON",stat:!0,forced:j},{stringify:function(r,t,e){for(var s=0,o=arguments.length,n=i(o);s<o;s++)n[s]=arguments[s];var u=a(d,null,n);return"string"==typeof u?f(u,m,O):u}})}}]);
//# sourceMappingURL=register.10afb14a.js.map