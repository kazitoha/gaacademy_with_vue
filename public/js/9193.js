(self.webpackChunk=self.webpackChunk||[]).push([[9193],{181:(t,a,e)=>{"use strict";e.d(a,{Z:()=>n});var s=e(3645),r=e.n(s)()((function(t){return t[1]}));r.push([t.id,".style-chooser .vs__search[data-v-dcae9522]::-moz-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-dcae9522]:-ms-input-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-dcae9522]::placeholder{color:#9a9b9a}",""]);const n=r},9193:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>u});var s=e(7757),r=e.n(s);function n(t,a,e,s,r,n,c){try{var o=t[n](c),i=o.value}catch(t){return void e(t)}o.done?a(i):Promise.resolve(i).then(s,r)}const c={data:function(){return{accountant:null}},computed:{},methods:{getAccountant:function(){var t,a=this;return(t=r().mark((function t(){var e,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=a.$route.params.id,t.next=4,axios.get("/api/accountants/".concat(e));case 4:s=t.sent,a.accountant=s.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a.toastError(t.t0.response.data.message),404===t.t0.response.status&&a.redirect("404");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var a=this,e=arguments;return new Promise((function(s,r){var c=t.apply(a,e);function o(t){n(c,s,r,o,i,"next",t)}function i(t){n(c,s,r,o,i,"throw",t)}o(void 0)}))})()},goBack:function(){this.$router.back(-1)}},created:function(){this.$route.params.id||this.redirect("404"),this.getAccountant()}};var o=e(3379),i=e.n(o),d=e(181),l={insert:"head",singleton:!1};i()(d.Z,l);d.Z.locals;const u=(0,e(1900).Z)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"page-header d-print-none"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),e("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("accountant")))])]),t._v(" "),e("div",{staticClass:"col-auto ms-auto d-print-none"},[e("div",{staticClass:"d-flex"},[e("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goBack(a)}}},[t._v("\n                        "+t._s(t.$t("back"))+"\n                    ")])])])])]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8 col-xl-6"},[t.accountant?e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4 text-center border-bottom py-3 table-responsive"},[e("span",{staticClass:"avatar avatar-xl mb-3 avatar-rounded",style:{backgroundImage:"url("+t.accountant.user.image_url+")"}}),t._v(" "),e("table",{staticClass:"table table-vcenter"},[e("tbody",[e("tr",[e("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("name")))]),t._v(" "),e("td",{attrs:{width:"80%"}},[t._v(t._s(t.accountant.user.name))])]),t._v(" "),e("tr",[e("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("email")))]),t._v(" "),e("td",{attrs:{width:"80%"}},[t._v(t._s(t.accountant.user.email))])]),t._v(" "),e("tr",[e("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("phone")))]),t._v(" "),e("td",{attrs:{width:"80%"}},[t._v(t._s(t.accountant.phone))])]),t._v(" "),e("tr",[e("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("gender")))]),t._v(" "),e("td",{attrs:{width:"80%"}},[t._v(t._s(t._f("capitalize")(t.accountant.gender)))])]),t._v(" "),e("tr",[e("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("religion")))]),t._v(" "),e("td",{attrs:{width:"80%"}},[t._v(t._s(t._f("capitalize")(t.accountant.religion)))])]),t._v(" "),e("tr",[e("th",{attrs:{width:"40%"}},[t._v(t._s(t.$t("joined_date")))]),t._v(" "),e("td",{attrs:{width:"60%"}},[t._v(t._s(t.formateDate(t.accountant.created_at)))])])])])])]):t._e()])])])}),[],!1,null,"dcae9522",null).exports}}]);