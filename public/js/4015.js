(self.webpackChunk=self.webpackChunk||[]).push([[4015,549],{2361:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,".btn-loading-effect[data-v-512b9a39]{padding-left:30px}",""]);const n=o},789:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,".dropdown-menu-end[data-v-63e01808]{right:100%}.user-card[data-v-63e01808]{position:relative}.dots[data-v-63e01808]{position:absolute;top:5px;right:10px}",""]);const n=o},2936:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,".fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}",""]);const n=o},1655:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(3645),o=a.n(s)()((function(t){return t[1]}));o.push([t.id,".fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.user-card{position:relative}.dots{position:absolute;top:5px;right:10px}",""]);const n=o},5463:(t,e,a)=>{"use strict";var s=a(538);s="default"in s?s.default:s;var o="2.2.2";/^2\./.test(s.version)||s.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+s.version);var n="_vue_clickaway_handler";function i(t,e,a){r(t);var s=a.context,o=e.value;if("function"==typeof o){var i=!1;setTimeout((function(){i=!0}),0),t[n]=function(e){var a=e.path||(e.composedPath?e.composedPath():void 0);if(i&&(a?a.indexOf(t)<0:!t.contains(e.target)))return o.call(s,e)},document.documentElement.addEventListener("click",t[n],!1)}}function r(t){document.documentElement.removeEventListener("click",t[n],!1),delete t[n]}var l={bind:i,update:function(t,e){e.value!==e.oldValue&&i(t,e)},unbind:r},c={directives:{onClickaway:l}};e.jB=c},6805:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(3379),o=a.n(s),n=a(2361),i={insert:"head",singleton:!1};o()(n.Z,i);n.Z.locals;const r=(0,a(1900).Z)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-icon d-inline-block"},[a("span",{staticClass:"input-icon-addon"},[a("div",{staticClass:"spinner-border spinner-border-sm text-light mr-3",attrs:{role:"status"}})]),t._v(" "),a("input",{staticClass:"btn btn-primary btn-loading-effect",attrs:{type:"button",value:"Processing..."}})])}],!1,null,"512b9a39",null).exports},549:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});const s={data:function(){return{notFound:"/images/not-found.svg"}},props:{word:{type:String,default:"user",required:!1},route:{type:String,required:!1},btnShow:{type:Boolean,required:!1,default:!0}}};const o=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty"},[a("div",{staticClass:"empty-img"},[a("img",{attrs:{src:t.notFound,height:"128",alt:"not found"}})]),t._v(" "),a("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("no_results_found")))]),t._v(" "),a("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n        "+t._s(t.$t("there_is_no"))+" "+t._s(t.word)+" "+t._s(t.$t("found_in_this_page"))+".\n    ")]),t._v(" "),t.route&&t.btnShow?a("div",{staticClass:"empty-action"},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.route}}},[a("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),a("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v("\n            "+t._s(t.$t("add_your_first"))+" "+t._s(t.word)+"\n        ")])],1):t._e()])}),[],!1,null,null,null).exports},9566:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});const s={mixins:[a(5463).jB],props:{data:{type:Object,required:!0},canEdit:{type:Boolean,default:!1},canDelete:{type:Boolean,default:!1}},data:function(){return{showDots:!1}},methods:{toggleDots:function(){this.showDots=!this.showDots},closeDropdown:function(){this.showDots=!1},editData:function(){this.$emit("edit-data",this.data)},deleteData:function(){this.$emit("delete-data",this.data.id)}}};var o=a(3379),n=a.n(o),i=a(789),r={insert:"head",singleton:!1};n()(i.Z,r);i.Z.locals;const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dots dropdown"},[a("a",{staticClass:"link-secondary",attrs:{href:"javascript:void(0)","data-bs-toggle":"dropdown","aria-expanded":"false"},on:{click:t.toggleDots}},[a("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("circle",{attrs:{cx:"5",cy:"12",r:"1"}}),t._v(" "),a("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),a("circle",{attrs:{cx:"19",cy:"12",r:"1"}})])]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-end right-100",class:{show:t.showDots}},[t.canEdit?a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.editData}},[t._v("\n            "+t._s(t.$t("edit"))+"\n        ")]):t._e(),t._v(" "),t.canDelete?a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.deleteData}},[t._v("\n            "+t._s(t.$t("delete"))+"\n        ")]):t._e()])])}),[],!1,null,"63e01808",null).exports},9194:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});const s={mixins:[a(5463).jB],props:{isShow:{type:Boolean,default:!1,required:!1}},methods:{closeModal:function(){this.$emit("close-modal")},deleteData:function(){this.$emit("delete-data")}}};var o=a(3379),n=a.n(o),i=a(2936),r={insert:"head",singleton:!1};n()(i.Z,r);i.Z.locals;const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.isShow?a("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-content"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}}),t._v(" "),a("div",{staticClass:"modal-status bg-danger"}),t._v(" "),a("div",{staticClass:"modal-body text-center py-4"},[a("svg",{staticClass:"icon mb-2 text-danger icon-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),a("path",{attrs:{d:"M12 9v2m0 4v.01"}}),t._v(" "),a("path",{attrs:{d:"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"}})]),t._v(" "),a("h3",[t._v(t._s(t.$t("are_you_sure")))]),t._v(" "),a("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("delete_message")))])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"w-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-white w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.closeModal}},[t._v("\n                                    "+t._s(t.$t("cancel"))+"\n                                ")])]),t._v(" "),a("div",{staticClass:"col"},[a("button",{staticClass:"btn btn-danger w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.deleteData}},[t._v("\n                                    "+t._s(t.$t("delete"))+"\n                                ")])])])])])])])]):t._e()])}),[],!1,null,null,null).exports},4015:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>y});var s=a(7757),o=a.n(s),n=a(7484),i=a.n(n),r=a(5463),l=a(6805),c=a(9566),d=a(9194),u=a(549),m=a(629);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function h(t,e,a,s,o,n,i){try{var r=t[n](i),l=r.value}catch(t){return void a(t)}r.done?e(l):Promise.resolve(l).then(s,o)}function _(t){return function(){var e=this,a=arguments;return new Promise((function(s,o){var n=t.apply(e,a);function i(t){h(n,s,o,i,r,"next",t)}function r(t){h(n,s,o,i,r,"throw",t)}i(void 0)}))}}const w={mixins:[r.jB],components:{ButtonLoading:l.Z,CardDropdown:c.Z,DeleteModal:d.Z,NotFound:u.default},data:function(){return{isModalShow:!1,isDeleteModalShow:!1,selectedId:"",isEditMode:!1,form:new Form({name:"",note:"",start_date:"",end_date:"",search:""})}},methods:{toggleModalShow:function(){this.isModalShow=!this.isModalShow,this.form.clear()},fetchExam:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("exam/fetchExams",{page:t,search:this.form.search})},searchExam:function(){this.fetchExam()},save:function(){var t=this;return _(o().mark((function e(){var a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isEditMode){e.next=15;break}return e.prev=1,e.next=4,t.form.post("/api/exams");case 4:a=e.sent,t.$store.commit("exam/ADD_EXAM",a.data.exam),t.reset(),t.toastSuccess(a.data.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.toastError();case 13:e.next=27;break;case 15:return e.prev=15,e.next=18,t.form.put("/api/exams/".concat(t.selectedId));case 18:s=e.sent,t.$store.commit("exam/UPDATE_EXAM",s.data.exam),t.reset(),t.toastSuccess(s.data.message),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(15),t.toastError();case 27:case"end":return e.stop()}}),e,null,[[1,10],[15,24]])})))()},editData:function(t){this.isEditMode=!0,this.toggleModalShow(),this.selectedId=t.id,this.form.fill(t)},deleteConfirmation:function(t){this.selectedId=t,this.isDeleteModalShow=!0},deleteData:function(){var t=this;return _(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.delete("/api/exams/".concat(t.selectedId));case 3:e.sent,t.$store.commit("exam/REMOVE_EXAM",t.selectedId),t.reset(),t.toggleDeleteModal(),t.toastSuccess("Exam delete successfully!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.toastError();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleDeleteModal:function(){this.isDeleteModalShow=!this.isDeleteModalShow,this.selectedId=""},reset:function(){this.isEditMode=!1,this.isModalShow=!1,this.selectedId="",this.form.reset(),this.form.clear()},setStartDate:function(t){var e=i()(t).format("YYYY-MM-DD");this.form.start_date=e},setEndDate:function(t){var e=i()(t).format("YYYY-MM-DD");this.form.end_date=e}},computed:f(f({},(0,m.Se)({exams:"exam/exams",pagination:"exam/pagination"})),{},{emptyData:function(){return 0==this.exams.total}}),mounted:function(){var t=this;return _(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.hasPermisssion("exam-list");case 2:t.fetchExam();case 3:case"end":return e.stop()}}),e)})))()}};var b=a(3379),x=a.n(b),g=a(1655),C={insert:"head",singleton:!1};x()(g.Z,C);g.Z.locals;const y=(0,a(1900).Z)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-header d-print-none"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col"},[a("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),a("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("exam")))])]),t._v(" "),a("div",{staticClass:"col-auto ms-auto d-print-none"},[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.search,expression:"form.search"}],staticClass:"form-control d-inline-block w-9 me-3",attrs:{type:"search",placeholder:t.$t("search_here…")},domProps:{value:t.form.search},on:{keyup:t.searchExam,input:function(e){e.target.composing||t.$set(t.form,"search",e.target.value)}}}),t._v(" "),t.checkPermission("exam-list")?a("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#"},on:{click:t.toggleModalShow}},[a("icon-plus"),t._v("\n                        "+t._s(t.$t("create"))+"\n                    ")],1):t._e()])])])]),t._v(" "),a("div",{staticClass:"row row-cards mt-2"},[t.exams&&t.exams.length?[t._l(t.exams,(function(e){return a("div",{key:e.id,staticClass:"col-md-6 col-xl-3"},[a("div",{staticClass:"card user-card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"card-title"},[a("h2",[t._v(t._s(e.name))])]),t._v(" "),a("p",[a("b",[t._v("\n                                "+t._s(t.formateDate(e.start_date,"D MMM, YY"))+" -\n                                "+t._s(t.formateDate(e.end_date,"D MMM, YY"))+"\n                            ")])]),t._v(" "),a("p",[t._v("\n                            "+t._s(e.note)+"\n                        ")])]),t._v(" "),t.checkPermission("exam-delete")||t.checkPermission("exam-edit")?a("CardDropdown",{attrs:{data:e,canEdit:t.checkPermission("exam-edit"),canDelete:t.checkPermission("exam-delete")},on:{"edit-data":t.editData,"delete-data":t.deleteConfirmation}}):t._e()],1)])})),t._v(" "),a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("pagination",{attrs:{data:t.pagination},on:{"pagination-change-page":t.fetchExam}})],1)]:a("div",{staticClass:"d-flex justify-content-center py-3"},[a("NotFound",{attrs:{word:"exam"}})],1)],2),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.isModalShow?a("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-md modal-dialog-centered",attrs:{role:"document"}},[a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.reset,expression:"reset"}],staticClass:"modal-content"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.reset}}),t._v(" "),a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("\n                            "+t._s(t.isEditMode?"Update Exam":"Create Exam")+"\n                        ")]),t._v(" "),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.toggleModalShow}})]),t._v(" "),a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[a("div",{staticClass:"modal-body py-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v(t._s(t.$t("name")))]),t._v(" "),a("base-input",{attrs:{form:t.form,field:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v(t._s(t.$t("start_date")))]),t._v(" "),a("date-picker",{attrs:{value:t.form.start_date,format:"dd MMMM, yyyy","input-class":"form-control",placeholder:t.$t("select_date")},on:{input:function(e){return t.setStartDate(e)}}}),t._v(" "),a("has-error",{staticClass:"d-block",attrs:{form:t.form,field:"start_date"}})],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v(t._s(t.$t("end_date")))]),t._v(" "),a("date-picker",{attrs:{value:t.form.end_date,format:"dd MMMM, yyyy","input-class":"form-control",placeholder:t.$t("select_date")},on:{input:function(e){return t.setEndDate(e)}}}),t._v(" "),a("has-error",{staticClass:"d-block",attrs:{form:t.form,field:"end_date"}})],1)])]),t._v(" "),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"note"}},[t._v(t._s(t.$t("note")))]),t._v(" "),a("base-textarea",{attrs:{form:t.form,field:"note"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1)])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("base-button",{attrs:{loading:t.form.busy}},[t._v(t._s(t.$t("save")))])],1)])])])]):t._e()]),t._v(" "),a("DeleteModal",{attrs:{isShow:t.isDeleteModalShow},on:{"close-modal":t.toggleDeleteModal,"delete-data":t.deleteData}})],1)}),[],!1,null,null,null).exports}}]);