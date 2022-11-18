(self.webpackChunk=self.webpackChunk||[]).push([[7591],{3448:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(3645),r=s.n(a)()((function(t){return t[1]}));r.push([t.id,".style-chooser .vs__search[data-v-55e24d5b]::-moz-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-55e24d5b]:-ms-input-placeholder{color:#9a9b9a}.style-chooser .vs__search[data-v-55e24d5b]::placeholder{color:#9a9b9a}",""]);const n=r},7591:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var a=s(7757),r=s.n(a);function n(t,e,s,a,r,n,o){try{var i=t[n](o),c=i.value}catch(t){return void s(t)}i.done?e(c):Promise.resolve(c).then(a,r)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(a,r){var o=t.apply(e,s);function i(t){n(o,a,r,i,c,"next",t)}function c(t){n(o,a,r,i,c,"throw",t)}i(void 0)}))}}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const l={data:function(){return{studentForm:new Form({name:"",email:"",password:"",parent_id:"",class_id:"",section_id:"",roll_no:"",admission_date:"",gender:"male"}),student:null,sections:[],keyword:null,defaultGuardian:{}}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,s(629).Se)({classes:"classs/classes"})),methods:{getSections:function(){var t=this;return o(r().mark((function e(){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.sections=[],e.next=3,axios.get("/api/classes/".concat(t.studentForm.class_id,"/sections"));case 3:s=e.sent,t.sections=s.data.sections;case 5:case"end":return e.stop()}}),e)})))()},searchGuardian:function(t,e){axios.get("/api/student/guardians?keyword=".concat(escape(t))).then((function(t){console.log(t),e(t.data)})).catch((function(t){console.log(t)}))},updateStudent:function(){var t=this;return o(r().mark((function e(){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.studentForm.put("/api/students/".concat(t.student.id));case 3:s=e.sent,t.$store.commit("student/UPDATE_STUDENT",s.data.student),t.toastSuccess(s.data.message),t.redirect("user-student"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getStudent:function(){var t=this;return o(r().mark((function e(){var s,a,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=t.$route.params.id,e.next=4,axios.get("/api/students/".concat(s));case 4:a=e.sent,t.student=a.data.data,Object.keys(t.studentForm).forEach((function(e){t.student.hasOwnProperty(e)&&(t.studentForm[e]=t.student[e]),t.student.user.hasOwnProperty(e)&&(t.studentForm[e]=t.student.user[e])})),n={id:t.student.guardian.id,name:t.student.guardian.user.name},t.defaultGuardian=n,t.studentForm.parent_id=n,t.getSections(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},classChanged:function(){var t=this;return o(r().mark((function e(){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.sections=[],e.next=4,axios.get("/api/classes/".concat(t.studentForm.class_id,"/sections"));case 4:s=e.sent,t.sections=s.data.sections,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){var t=this;return o(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$route.params.id||t.redirect("404"),e.next=3,t.hasPermisssion("student-edit");case 3:0==t.classes.length&&(t.redirect("academic-class"),t.toastWarning("Please create class first")),t.getStudent(),t.$store.dispatch("classs/fetchClasses");case 6:case"end":return e.stop()}}),e)})))()}};var d=s(3379),u=s.n(d),m=s(3448),v={insert:"head",singleton:!1};u()(m.Z,v);m.Z.locals;const p=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("edit_student")))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("admin_setting")))])])])]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("edit_student")))]),t._v(" "),s("Back",{attrs:{routeName:"user-student"}})],1),t._v(" "),s("div",{staticClass:"card-body border-bottom py-3"},[s("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.updateStudent(e)}}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("name"))+"\n                                        "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.name,expression:"studentForm.name"}],staticClass:"form-control",class:{"is-invalid":t.studentForm.errors.has("name")},attrs:{type:"text",placeholder:t.$t("name")},domProps:{value:t.studentForm.name},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"name",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("email"))+"\n                                        "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.email,expression:"studentForm.email"}],staticClass:"form-control",class:{"is-invalid":t.studentForm.errors.has("email")},attrs:{type:"text",placeholder:t.$t("email")},domProps:{value:t.studentForm.email},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"email",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"name"}})],1)])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("change_password"))+"\n                                        "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.password,expression:"studentForm.password"}],staticClass:"form-control",class:{"is-invalid":t.studentForm.errors.has("password")},attrs:{type:"password",placeholder:t.$t("enter_password")},domProps:{value:t.studentForm.password},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"password",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"password"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("parent"))+" "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("input",{staticClass:"form-control",class:{"is-invalid":t.studentForm.errors.has("parent_id")},attrs:{id:"guardian_id",type:"text",placeholder:t.$t("choose_a_parent"),autocomplete:"off"},domProps:{value:t.defaultGuardian.name}}),t._v(" "),s("typeahead",{attrs:{"match-start":"","append-to-body":!0,target:"#guardian_id","item-key":"name","async-function":t.searchGuardian},scopedSlots:t._u([{key:"item",fn:function(e){return t._l(e.items,(function(a,r){return s("li",{key:r,staticClass:"typehead-list",class:{active:e.activeIndex===r}},[s("a",{attrs:{role:"button"},on:{click:function(t){return e.select(a)}}},[s("img",{attrs:{width:"30px",height:"30px",src:a.image_url+"&s=40"}}),t._v(" "),s("span",{domProps:{innerHTML:t._s(e.highlight(a))}})])])}))}}]),model:{value:t.studentForm.parent_id,callback:function(e){t.$set(t.studentForm,"parent_id",e)},expression:"studentForm.parent_id"}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"parent_id"}})],1)])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("class"))+" "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.class_id,expression:"studentForm.class_id"}],staticClass:"form-control mb-0",class:{"is-invalid":t.studentForm.errors.has("class_id")},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.studentForm,"class_id",e.target.multiple?s:s[0])},t.getSections]}},[s("option",{staticClass:"d-none",attrs:{value:""}},[t._v(t._s(t.$t("select_class")))]),t._v(" "),t._l(t.classes,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])}))],2),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"class_id"}})],1),t._v(" "),s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("section"))+" "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.section_id,expression:"studentForm.section_id"}],staticClass:"form-control mb-0",class:{"is-invalid":t.studentForm.errors.has("section_id")},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.studentForm,"section_id",e.target.multiple?s:s[0])}}},[s("option",{staticClass:"d-none",attrs:{value:""}},[t._v(t._s(t.$t("select_section")))]),t._v(" "),t._l(t.sections,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])}))],2),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"section_id"}})],1)]),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("roll_no"))+" "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.roll_no,expression:"studentForm.roll_no"}],staticClass:"form-control",class:{"is-invalid":t.studentForm.errors.has("roll_no")},attrs:{type:"number",placeholder:t.$t("roll_no")},domProps:{value:t.studentForm.roll_no},on:{input:function(e){e.target.composing||t.$set(t.studentForm,"roll_no",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"roll_no"}})],1)]),t._v(" "),s("div",{staticClass:"col-md-6 mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("admission_date"))+" "),s("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),s("div",[s("date-picker",{attrs:{format:"dd MMMM, yyyy","input-class":"form-control",placeholder:t.$t("select_date"),value:t.studentForm.admission_date},on:{input:function(e){return t.setDate(e)}}}),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"admission_date"}})],1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("gender")))]),t._v(" "),s("div",[s("label",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.gender,expression:"studentForm.gender"}],staticClass:"form-check-input",attrs:{type:"radio",value:"male"},domProps:{checked:t._q(t.studentForm.gender,"male")},on:{change:function(e){return t.$set(t.studentForm,"gender","male")}}}),t._v(" "),s("span",{staticClass:"form-check-label"},[t._v(t._s(t.$t("male")))])]),t._v(" "),s("label",{staticClass:"form-check form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.studentForm.gender,expression:"studentForm.gender"}],staticClass:"form-check-input",attrs:{type:"radio",value:"female"},domProps:{checked:t._q(t.studentForm.gender,"female")},on:{change:function(e){return t.$set(t.studentForm,"gender","female")}}}),t._v(" "),s("span",{staticClass:"form-check-label"},[t._v(t._s(t.$t("female")))])])]),t._v(" "),s("has-error",{attrs:{form:t.studentForm,field:"name"}})],1),t._v(" "),s("div",{staticClass:"form-footer text-center"},[s("base-button",{attrs:{loading:t.studentForm.busy}},[t._v("\n                                    "+t._s(t.$t("save"))+"\n                                ")])],1)])])])])])])])}),[],!1,null,"55e24d5b",null).exports}}]);