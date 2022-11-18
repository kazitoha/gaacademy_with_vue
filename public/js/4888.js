(self.webpackChunk=self.webpackChunk||[]).push([[4888],{5175:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var r=a(3645),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".style-chooser .vs__search[data-v-ca555fba]::-moz-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-ca555fba]:-ms-input-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-ca555fba]::placeholder{color:#9a9b9a}",""]);const c=s},4888:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var r=a(7757),s=a.n(r);function c(t,e,a,r,s,c,n){try{var i=t[c](n),d=i.value}catch(t){return void a(t)}i.done?e(d):Promise.resolve(d).then(r,s)}const n={data:function(){return{teacher:null}},computed:{},methods:{getTeacher:function(){var t,e=this;return(t=s().mark((function t(){var a,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$route.params.id,t.next=4,axios.get("/api/teachers/".concat(a));case 4:r=t.sent,e.teacher=r.data.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),404===t.t0.response.status&&e.redirect("404");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,a=arguments;return new Promise((function(r,s){var n=t.apply(e,a);function i(t){c(n,r,s,i,d,"next",t)}function d(t){c(n,r,s,i,d,"throw",t)}i(void 0)}))})()},goBack:function(){this.$router.back(-1)}},created:function(){this.$route.params.id||this.redirect("404"),this.getTeacher()}};var i=a(3379),d=a.n(i),o=a(5175),_={insert:"head",singleton:!1};d()(o.Z,_);o.Z.locals;const h=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-header d-print-none"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-8"},[a("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),a("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("teacher")))])]),t._v(" "),a("div",{staticClass:"col-auto ms-auto d-print-none"},[a("div",{staticClass:"d-flex"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[t._v("\n                        "+t._s(t.$t("back"))+"\n                    ")])])])])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[t.teacher?a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4 text-center border-bottom py-3"},[a("span",{staticClass:"avatar avatar-xl mb-3 avatar-rounded",style:{backgroundImage:"url("+t.teacher.user.image_url+")"}}),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("name")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t.teacher.user.name))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("email")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t.teacher.user.email))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("phone")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t.teacher.phone))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("gender")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t._f("capitalize")(t.teacher.gender)))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("religion")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t._f("capitalize")(t.teacher.religion)))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("present_address")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t.teacher.present_address?t.teacher.present_address:"-"))])]),t._v(" "),a("tr",[a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("permanent_address")))]),t._v(" "),a("td",{attrs:{width:"80%"}},[t._v(t._s(t.teacher.permanent_address?t.teacher.permanent_address:"-")+"\n                                ")])]),t._v(" "),a("tr",[a("th",{attrs:{width:"40%"}},[t._v(t._s(t.$t("joined_date")))]),t._v(" "),a("td",{attrs:{width:"60%"}},[t._v(t._s(t.formateDate(t.teacher.created_at)))])])])])])]):t._e()])])])}),[],!1,null,"ca555fba",null).exports}}]);