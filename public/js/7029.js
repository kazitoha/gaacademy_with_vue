(self.webpackChunk=self.webpackChunk||[]).push([[7029],{5842:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var r=s(3645),a=s.n(r)()((function(t){return t[1]}));a.push([t.id,"table tbody tr td[data-v-794fffb8]{white-space:nowrap}",""]);const n=a},3673:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var r=s(7757),a=s.n(r);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e,s,r,a,n,o){try{var c=t[n](o),i=c.value}catch(t){return void s(t)}c.done?e(i):Promise.resolve(i).then(r,a)}function l(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var n=t.apply(e,s);function o(t){i(n,r,a,o,c,"next",t)}function c(t){i(n,r,a,o,c,"throw",t)}o(void 0)}))}}const d={components:{DeleteButton:function(){return s.e(2815).then(s.bind(s,2815))}},data:function(){return{searchForm:{class_id:"",section_id:""},sections:[],homeworks:[]}},methods:{loadSections:function(){var t=this;return l(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/classes/".concat(t.searchForm.class_id,"/sections"));case 3:s=e.sent,t.sections=s.data.sections,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t.toastError(e.t0.response.data.message),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},loadHomeworks:function(){var t=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("homework/fetchHomeworks");case 2:case"end":return e.stop()}}),e)})))()},getHomework:function(){var t=this;return l(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/homeworks",{params:{class_id:t.searchForm.class_id,section_id:t.searchForm.section_id}});case 3:s=e.sent,t.homeworks=s.data,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t.toastError(e.t0.response.data.message),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteHomework:function(t){var e=this;return l(a().mark((function s(){var r;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,axios.delete("/api/homeworks/".concat(t));case 3:r=s.sent,e.toastSuccess(r.data.message),e.homeworks=e.homeworks.filter((function(e){return e.id!=t})),s.next=12;break;case 8:s.prev=8,s.t0=s.catch(0),e.toastError(s.t0.response.data.message),console.log(s.t0);case 12:case"end":return s.stop()}}),s,null,[[0,8]])})))()}},computed:o(o({},(0,s(629).Se)({classes:"classs/classes"})),{},{homeworks:function(){return this.$store.state.homework.homeworks},searchButtonDisabled:function(){return""==this.searchForm.class_id||""==this.searchForm.section_id}}),created:function(){this.hasPermisssion("homework-list"),this.loadHomeworks(),this.$store.dispatch("classs/fetchClasses")}};var u=s(3379),v=s.n(u),m=s(5842),h={insert:"head",singleton:!1};v()(m.Z,h);m.Z.locals;const p=(0,s(1900).Z)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("homework")))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("academic")))])]),t._v(" "),t.checkPermission("homework-create")?s("div",{staticClass:"col-auto ms-auto d-print-none"},[s("div",{staticClass:"d-flex"},[s("router-link",{staticClass:"btn btn-primary btn-outline",attrs:{to:{name:"academic-homework-create"}}},[s("icon-plus"),t._v("\n                        "+t._s(t.$t("create"))+"\n                    ")],1)],1)]):t._e()])]),t._v(" "),s("div",{staticClass:"row row-cards mt-2"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.class_id,expression:"searchForm.class_id"}],staticClass:"form-control",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchForm,"class_id",e.target.multiple?s:s[0])},t.loadSections]}},[s("option",{staticClass:"d-none",attrs:{value:""}},[t._v(t._s(t.$t("select_class")))]),t._v(" "),t._l(t.classes,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))],2)]),t._v(" "),t.searchForm.class_id?s("div",{staticClass:"col-md-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.searchForm.section_id,expression:"searchForm.section_id"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchForm,"section_id",e.target.multiple?s:s[0])}}},[s("option",{staticClass:"d-none",attrs:{value:""}},[t._v("\n                            "+t._s(t.$t("select_section"))+"\n                        ")]),t._v(" "),t._l(t.sections,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))],2)]):t._e(),t._v(" "),t.searchForm.class_id&&t.searchForm.section_id?s("div",{staticClass:"col-md-3"},[s("button",{staticClass:"btn btn-primary btn-outline",attrs:{disabled:t.searchButtonDisabled},on:{click:t.getHomework}},[t._v("\n                        "+t._s(t.$t("get_homework"))+"\n                    ")])]):t._e()])]),t._v(" "),s("div",{staticClass:"col-md-12 col-xl-12"},[t.homeworks&&t.homeworks.length?s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("homework")))])]),t._v(" "),s("div",{staticClass:"card-body table-responsive"},[s("table",{staticClass:"table table-vcenter"},[s("thead",[s("tr",[s("th",{attrs:{colspan:"3"}},[t._v(t._s(t.$t("teacher")))]),t._v(" "),s("th",{attrs:{colspan:"2"}},[t._v(t._s(t.$t("subject")))]),t._v(" "),s("th",{attrs:{colspan:"4"}},[t._v(t._s(t.$t("date")))]),t._v(" "),s("th",{attrs:{colspan:"3"}},[t._v(t._s(t.$t("action")))])])]),t._v(" "),s("tbody",t._l(t.homeworks,(function(e){return s("tr",{key:e.id},[e.teacher?s("td",{attrs:{colspan:"3"}},[t._v("\n                                    "+t._s(e.teacher.user.name)+"\n                                ")]):t._e(),t._v(" "),s("td",{attrs:{colspan:"2"}},[t._v("\n                                    "+t._s(e.subject.name)+"\n                                    ")]),t._v(" "),s("td",{attrs:{colspan:"4"}},[t._v("\n                                    "+t._s(t.formateDate(e.start_date))+" -\n                                    "+t._s(t.formateDate(e.end_date))+"\n                                ")]),t._v(" "),s("td",{attrs:{colspan:"3"}},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"academic-homework-edit",params:{id:e.id}}}},[t._v("\n                                        "+t._s(t.$t("edit"))+"\n                                    ")]),t._v(" "),s("DeleteButton",{attrs:{id:e.id},on:{"delete-data":t.deleteHomework}})],1)])})),0)])])]):s("div",{staticClass:"d-flex justify-content-center py-3"},[s("NotFound",{attrs:{word:"homework"}})],1)])])])}),[],!1,null,"794fffb8",null).exports}}]);