(self.webpackChunk=self.webpackChunk||[]).push([[9373,549],{2361:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(3645),o=s.n(a)()((function(t){return t[1]}));o.push([t.id,".btn-loading-effect[data-v-512b9a39]{padding-left:30px}",""]);const i=o},789:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(3645),o=s.n(a)()((function(t){return t[1]}));o.push([t.id,".dropdown-menu-end[data-v-63e01808]{right:100%}.user-card[data-v-63e01808]{position:relative}.dots[data-v-63e01808]{position:absolute;top:5px;right:10px}",""]);const i=o},2936:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(3645),o=s.n(a)()((function(t){return t[1]}));o.push([t.id,".fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}",""]);const i=o},5880:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(3645),o=s.n(a)()((function(t){return t[1]}));o.push([t.id,".fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.user-card{position:relative}.dots{position:absolute;top:5px;right:10px}",""]);const i=o},3854:t=>{function e(t){return void 0===t}function s(t){return t===Object(t)}function a(t){return Array.isArray(t)}function o(t,a){return a?s(t)&&!e(t.uri):s(t)&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice}function i(t){return!e(t)&&t}t.exports={serialize:function t(n,r,l,c){r=r||{},l=l||new FormData,r.indices=i(r.indices),r.nullsAsUndefineds=i(r.nullsAsUndefineds),r.booleansAsIntegers=i(r.booleansAsIntegers),r.allowEmptyArrays=i(r.allowEmptyArrays),r.noFilesWithArrayNotation=i(r.noFilesWithArrayNotation),r.dotsForObjectNotation=i(r.dotsForObjectNotation);const d="function"==typeof l.getParts;return e(n)||(null===n?r.nullsAsUndefineds||l.append(c,""):!function(t){return"boolean"==typeof t}(n)?a(n)?n.length?n.forEach(((e,a)=>{let i=c+"["+(r.indices?a:"")+"]";r.noFilesWithArrayNotation&&function(t,e){return o(t,e)&&"string"==typeof t.name&&(s(t.lastModifiedDate)||"number"==typeof t.lastModified)}(e,d)&&(i=c),t(e,r,l,i)})):r.allowEmptyArrays&&l.append(c+"[]",""):!function(t){return t instanceof Date}(n)?s(n)&&!o(n,d)?Object.keys(n).forEach((e=>{const s=n[e];if(a(s))for(;e.length>2&&e.lastIndexOf("[]")===e.length-2;)e=e.substring(0,e.length-2);const o=c?r.dotsForObjectNotation?c+"."+e:c+"["+e+"]":e;t(s,r,l,o)})):l.append(c,n):l.append(c,n.toISOString()):r.booleansAsIntegers?l.append(c,n?1:0):l.append(c,n)),l}}},5463:(t,e,s)=>{"use strict";var a=s(538);a="default"in a?a.default:a;var o="2.2.2";/^2\./.test(a.version)||a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+a.version);var i="_vue_clickaway_handler";function n(t,e,s){r(t);var a=s.context,o=e.value;if("function"==typeof o){var n=!1;setTimeout((function(){n=!0}),0),t[i]=function(e){var s=e.path||(e.composedPath?e.composedPath():void 0);if(n&&(s?s.indexOf(t)<0:!t.contains(e.target)))return o.call(a,e)},document.documentElement.addEventListener("click",t[i],!1)}}function r(t){document.documentElement.removeEventListener("click",t[i],!1),delete t[i]}var l={bind:n,update:function(t,e){e.value!==e.oldValue&&n(t,e)},unbind:r},c={directives:{onClickaway:l}};e.jB=c},6805:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(3379),o=s.n(a),i=s(2361),n={insert:"head",singleton:!1};o()(i.Z,n);i.Z.locals;const r=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-icon d-inline-block"},[s("span",{staticClass:"input-icon-addon"},[s("div",{staticClass:"spinner-border spinner-border-sm text-light mr-3",attrs:{role:"status"}})]),t._v(" "),s("input",{staticClass:"btn btn-primary btn-loading-effect",attrs:{type:"button",value:"Processing..."}})])}],!1,null,"512b9a39",null).exports},549:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});const a={data:function(){return{notFound:"/images/not-found.svg"}},props:{word:{type:String,default:"user",required:!1},route:{type:String,required:!1},btnShow:{type:Boolean,required:!1,default:!0}}};const o=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty"},[s("div",{staticClass:"empty-img"},[s("img",{attrs:{src:t.notFound,height:"128",alt:"not found"}})]),t._v(" "),s("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("no_results_found")))]),t._v(" "),s("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n        "+t._s(t.$t("there_is_no"))+" "+t._s(t.word)+" "+t._s(t.$t("found_in_this_page"))+".\n    ")]),t._v(" "),t.route&&t.btnShow?s("div",{staticClass:"empty-action"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.route}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v("\n            "+t._s(t.$t("add_your_first"))+" "+t._s(t.word)+"\n        ")])],1):t._e()])}),[],!1,null,null,null).exports},9566:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});const a={mixins:[s(5463).jB],props:{data:{type:Object,required:!0},canEdit:{type:Boolean,default:!1},canDelete:{type:Boolean,default:!1}},data:function(){return{showDots:!1}},methods:{toggleDots:function(){this.showDots=!this.showDots},closeDropdown:function(){this.showDots=!1},editData:function(){this.$emit("edit-data",this.data)},deleteData:function(){this.$emit("delete-data",this.data.id)}}};var o=s(3379),i=s.n(o),n=s(789),r={insert:"head",singleton:!1};i()(n.Z,r);n.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dots dropdown"},[s("a",{staticClass:"link-secondary",attrs:{href:"javascript:void(0)","data-bs-toggle":"dropdown","aria-expanded":"false"},on:{click:t.toggleDots}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("circle",{attrs:{cx:"5",cy:"12",r:"1"}}),t._v(" "),s("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),s("circle",{attrs:{cx:"19",cy:"12",r:"1"}})])]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-end right-100",class:{show:t.showDots}},[t.canEdit?s("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.editData}},[t._v("\n            "+t._s(t.$t("edit"))+"\n        ")]):t._e(),t._v(" "),t.canDelete?s("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.deleteData}},[t._v("\n            "+t._s(t.$t("delete"))+"\n        ")]):t._e()])])}),[],!1,null,"63e01808",null).exports},9194:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});const a={mixins:[s(5463).jB],props:{isShow:{type:Boolean,default:!1,required:!1}},methods:{closeModal:function(){this.$emit("close-modal")},deleteData:function(){this.$emit("delete-data")}}};var o=s(3379),i=s.n(o),n=s(2936),r={insert:"head",singleton:!1};i()(n.Z,r);n.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.isShow?s("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-content"},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}}),t._v(" "),s("div",{staticClass:"modal-status bg-danger"}),t._v(" "),s("div",{staticClass:"modal-body text-center py-4"},[s("svg",{staticClass:"icon mb-2 text-danger icon-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M12 9v2m0 4v.01"}}),t._v(" "),s("path",{attrs:{d:"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"}})]),t._v(" "),s("h3",[t._v(t._s(t.$t("are_you_sure")))]),t._v(" "),s("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("delete_message")))])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"w-100"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-white w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.closeModal}},[t._v("\n                                    "+t._s(t.$t("cancel"))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-danger w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.deleteData}},[t._v("\n                                    "+t._s(t.$t("delete"))+"\n                                ")])])])])])])])]):t._e()])}),[],!1,null,null,null).exports},9373:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>b});var a=s(7757),o=s.n(a),i=s(5463),n=s(6805),r=s(9566),l=s(9194),c=s(549),d=s(3854);function u(t,e,s,a,o,i,n){try{var r=t[i](n),l=r.value}catch(t){return void s(t)}r.done?e(l):Promise.resolve(l).then(a,o)}function m(t){return function(){var e=this,s=arguments;return new Promise((function(a,o){var i=t.apply(e,s);function n(t){u(i,a,o,n,r,"next",t)}function r(t){u(i,a,o,n,r,"throw",t)}n(void 0)}))}}const v={mixins:[i.jB],components:{ButtonLoading:n.Z,CardDropdown:r.Z,DeleteModal:l.Z,NotFound:c.default},data:function(){return{isModalShow:!1,isDeleteModalShow:!1,selectedId:"",isEditMode:!1,form:new Form({name:"",image:"",class_id:"",code:"",is_optional:0,type:"theory",pass_marks:"40",total_marks:"100"}),subjects:[],classes:[],search_class_id:""}},methods:{onImageChange:function(t){this.form.image=t.target.files[0]},toggleModalShow:function(){this.isModalShow=!this.isModalShow,this.form.clear()},save:function(){var t=this;return m(o().mark((function e(){var s,a,i,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isEditMode){e.next=16;break}return e.prev=1,e.next=4,t.form.post("/api/subjects",{transformRequest:[function(t,e){return(0,d.serialize)(t)}]});case 4:s=e.sent,a=s.data,t.subjects.push(a.subject),t.reset(),t.toastSuccess(a.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.toastError();case 14:e.next=32;break;case 16:return e.prev=16,e.next=19,t.form.post("/api/subjects/".concat(t.selectedId,"/update"),{transformRequest:[function(t,e){return(0,d.serialize)(t)}]});case 19:i=e.sent,n=i.data,console.log(n),t.subjects.splice(t.subjects.indexOf(t.form.id),1,n.subject),r=t.subjects.map((function(t){return t.id})).indexOf(n.subject.id),t.subjects.splice(r,1,n.subject),t.reset(),t.toastSuccess(n.message),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(16),t.toastError();case 32:case"end":return e.stop()}}),e,null,[[1,11],[16,29]])})))()},editData:function(t){this.isEditMode=!0,this.toggleModalShow(),this.selectedId=t.id,this.form.fill(t);var e=this.classes.filter((function(e){return e.id==t.class_id}));this.form.class_id=e[0]},deleteConfirmation:function(t){this.selectedId=t,this.isDeleteModalShow=!0},deleteData:function(){var t=this;return m(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.delete("/api/subjects/".concat(t.selectedId));case 3:e.sent,t.subjects.splice(t.subjects.indexOf(t.selectedId),1),t.reset(),t.toggleDeleteModal(),t.toastSuccess(data.message),e.next=18;break;case 10:if(e.prev=10,e.t0=e.catch(0),409!=e.t0.status&&403!=e.t0.status){e.next=17;break}return t.toastError("Delete failed, please delete all related items first."),t.reset(),t.toggleDeleteModal(),e.abrupt("return");case 17:t.toastError();case 18:case"end":return e.stop()}}),e,null,[[0,10]])})))()},toggleDeleteModal:function(){this.isDeleteModalShow=!this.isDeleteModalShow,this.selectedId=""},getClassSubjects:function(){var t=this;return m(o().mark((function e(){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/classes/".concat(t.search_class_id,"/subjects"));case 2:s=e.sent,t.subjects=s.data.subjects;case 4:case"end":return e.stop()}}),e)})))()},reset:function(){this.isEditMode=!1,this.isModalShow=!1,this.selectedId="",this.form.reset(),this.form.clear()},loadClasses:function(){var t=this;return m(o().mark((function e(){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/subjects/allclasses");case 2:s=e.sent,t.classes=s.data.classes;case 4:case"end":return e.stop()}}),e)})))()},dataExistsChecking:function(){var t=this;return m(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.classes.length||(t.toastWarning("Please create class first"),t.redirect("academic-class"));case 1:case"end":return e.stop()}}),e)})))()}},computed:{sections:function(){return this.$store.getters["section/sections"]},emptyData:function(){return!(this.subjects&&this.subjects.length)}},created:function(){var t=this;return m(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.hasPermisssion("subject-list");case 2:return e.next=4,t.loadClasses();case 4:return e.next=6,t.dataExistsChecking();case 6:t.search_class_id=t.classes[0].id,t.getClassSubjects();case 8:case"end":return e.stop()}}),e)})))()}};var p=s(3379),f=s.n(p),_=s(5880),h={insert:"head",singleton:!1};f()(_.Z,h);_.Z.locals;const b=(0,s(1900).Z)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("academic")))])]),t._v(" "),t.checkPermission("subject-create")?s("div",{staticClass:"col-auto ms-auto d-print-none"},[s("div",{staticClass:"d-flex"},[s("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#"},on:{click:t.toggleModalShow}},[s("icon-plus"),t._v("\n                        "+t._s(t.$t("create"))+"\n                    ")],1)])]):t._e()])]),t._v(" "),s("div",{staticClass:"row row-cards"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-2"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.search_class_id,expression:"search_class_id"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.search_class_id=e.target.multiple?s:s[0]}}},[s("option",{staticClass:"d-none",attrs:{value:""}},[t._v("\n                            "+t._s(t.$t("select_class"))+"\n                        ")]),t._v(" "),t._l(t.classes,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))],2)]),t._v(" "),t.search_class_id?s("div",{staticClass:"col-md-2"},[s("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#"},on:{click:t.getClassSubjects}},[t._v("\n                        "+t._s(t.$t("get_subjects"))+"\n                    ")])]):t._e()])]),t._v(" "),t.subjects&&t.subjects.length?t._l(t.subjects,(function(e){return s("div",{key:e.id,staticClass:"col-xl-3 col-lg-6 col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-img-top img-responsive img-responsive-16by9",style:{backgroundImage:"url("+e.image_url+")"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h2",{staticClass:"font-weight-bold mb-0 pb-0"},[t._v("\n                                "+t._s(e.name)+"\n                                "),s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Subject Code",expression:"'Subject Code'"}]},[t._v("("+t._s(e.code)+")")])]),t._v(" "),t.checkPermission("subject-delete")||t.checkPermission("subject-edit")?s("div",[t.checkPermission("subject-edit")?s("span",{staticClass:"cursor-pointer",on:{click:function(s){return t.editData(e)}}},[s("icon-edit")],1):t._e(),t._v(" "),t.checkPermission("subject-delete")?s("span",{staticClass:"cursor-pointer",on:{click:function(s){return t.deleteConfirmation(e.id)}}},[s("icon-trash")],1):t._e()]):t._e()]),t._v(" "),s("dl",{staticClass:"row"},[s("dt",{staticClass:"col-5"},[t._v("Type:")]),t._v(" "),s("dd",{staticClass:"col-7"},[t._v(t._s(t._f("capitalize")(e.type)))]),t._v(" "),s("dt",{staticClass:"col-5"},[t._v("Pass Marks:")]),t._v(" "),s("dd",{staticClass:"col-7"},[t._v("\n                                "+t._s(e.pass_marks)+" Out of "+t._s(e.total_marks)+"\n                            ")])])])])])})):s("div",{staticClass:"d-flex justify-content-center py-3"},[s("NotFound",{attrs:{word:"fee type"}})],1)],2),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.isModalShow?s("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered",attrs:{role:"document"}},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.reset,expression:"reset"}],staticClass:"modal-content"},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.reset}}),t._v(" "),s("div",{staticClass:"modal-header"},[t.isEditMode?s("h5",{staticClass:"modal-title"},[t._v("\n                            "+t._s(t.$t("update_subject"))+"\n                        ")]):s("h5",{staticClass:"modal-title"},[t._v("\n                            "+t._s(t.$t("create_subject"))+"\n                        ")]),t._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.toggleModalShow}})]),t._v(" "),s("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[s("div",{staticClass:"modal-body py-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("class")))]),t._v(" "),s("v-select",{class:{"is-invalid":t.form.errors.has("class_id")},attrs:{value:"id",label:"name",placeholder:t.$t("select_class"),options:t.classes.map((function(t){return{id:t.id,name:t.name}}))},model:{value:t.form.class_id,callback:function(e){t.$set(t.form,"class_id",e)},expression:"form.class_id"}}),t._v(" "),s("has-error",{staticClass:"d-block",attrs:{form:t.form,field:"class_id"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:t.$t("enter_name")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("base-label",{attrs:{title:t.isEditMode?t.$t("change_image"):t.$t("image")}}),t._v(" "),s("input",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("image")},attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg"},on:{change:t.onImageChange}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("code")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("code")},attrs:{type:"text",placeholder:t.$t("enter_code")},domProps:{value:t.form.code},on:{input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"code"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("type")))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("type")},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"type",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"theory"}},[t._v("\n                                                "+t._s(t.$t("theory"))+"\n                                            ")]),t._v(" "),s("option",{attrs:{value:"practical"}},[t._v("\n                                                "+t._s(t.$t("practical"))+"\n                                            ")])]),t._v(" "),s("has-error",{attrs:{form:t.form,field:"type"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"mb-3"},[s("div",{staticClass:"form-label"},[t._v(t._s(t.$t("optional")))]),t._v(" "),s("div",[s("label",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_optional,expression:"form.is_optional"}],staticClass:"form-check-input",attrs:{value:"1",type:"radio"},domProps:{checked:t.form.is_optional,checked:t._q(t.form.is_optional,"1")},on:{change:function(e){return t.$set(t.form,"is_optional","1")}}}),t._v(" "),s("span",{staticClass:"form-check-label"},[t._v(t._s(t.$t("yes")))])]),t._v(" "),s("label",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_optional,expression:"form.is_optional"}],staticClass:"form-check-input",attrs:{value:"0",type:"radio"},domProps:{checked:!t.form.is_optional,checked:t._q(t.form.is_optional,"0")},on:{change:function(e){return t.$set(t.form,"is_optional","0")}}}),t._v(" "),s("span",{staticClass:"form-check-label"},[t._v(t._s(t.$t("no")))])])]),t._v(" "),s("has-error",{staticClass:"d-block",attrs:{form:t.form,field:"is_optional"}})],1)]),t._v(" "),s("div",{staticClass:"mb-3 row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("pass_marks")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pass_marks,expression:"form.pass_marks"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("pass_marks")},attrs:{type:"text",placeholder:t.$t("enter_pass_marks")},domProps:{value:t.form.pass_marks},on:{input:function(e){e.target.composing||t.$set(t.form,"pass_marks",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"pass_marks"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("total_marks")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.total_marks,expression:"form.total_marks"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("total_marks")},attrs:{type:"text",placeholder:t.$t("enter_total_marks")},domProps:{value:t.form.total_marks},on:{input:function(e){e.target.composing||t.$set(t.form,"total_marks",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"total_marks"}})],1)])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn me-auto",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.reset}},[t._v("\n                                "+t._s(t.$t("cancel"))+"\n                            ")]),t._v(" "),t.form.busy?s("button-loading"):s("button",{staticClass:"btn btn-primary",attrs:{type:"submit","data-bs-dismiss":"modal"}},[t._v("\n                                "+t._s(t.$t("save"))+"\n                            ")])],1)])])])]):t._e()]),t._v(" "),s("DeleteModal",{attrs:{isShow:t.isDeleteModalShow},on:{"close-modal":t.toggleDeleteModal,"delete-data":t.deleteData}})],1)}),[],!1,null,null,null).exports}}]);