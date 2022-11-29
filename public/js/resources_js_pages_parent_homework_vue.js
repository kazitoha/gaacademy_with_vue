(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_parent_homework_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NotFound: function NotFound() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_NotFound_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/NotFound.vue */ "./resources/js/components/NotFound.vue"));
    }
  },
  computed: {
    searchButtonDisabled: function searchButtonDisabled() {
      return this.searchForm.date == "" || this.searchForm.student_id == "";
    },
    childs: function childs() {
      return this.$store.getters["parent/getChilds"];
    }
  },
  data: function data() {
    return {
      searchForm: {
        date: "",
        student_id: ""
      },
      homeworks: []
    };
  },
  methods: {
    setDate: function setDate(event) {
      var date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(event).format("YYYY-MM-DD");
      this.searchForm.date = date;
    },
    getHomeworks: function getHomeworks() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/parent/students/homeworks", {
                  params: {
                    student_id: _this.searchForm.student_id,
                    date: _this.searchForm.date
                  }
                });

              case 3:
                response = _context.sent;
                _this.homeworks = response.data;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this.toastError(_context.t0.response.data.message);

                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this2.authenticateUser.original_role != "Guardian") {
                _this2.redirect("401");
              }

              _context2.next = 3;
              return _this2.$store.dispatch("parent/fetchChilds");

            case 3:
              _context2.next = 5;
              return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(new Date()).format("YYYY-MM-DD");

            case 5:
              _this2.searchForm.date = _context2.sent;
              _this2.searchForm.student_id = _this2.childs[0].id;

              _this2.getHomeworks();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/pages/parent/homework.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/parent/homework.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework.vue?vue&type=template&id=8d930948& */ "./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948&");
/* harmony import */ var _homework_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homework.vue?vue&type=script&lang=js& */ "./resources/js/pages/parent/homework.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _homework_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__.render,
  _homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parent/homework.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parent/homework.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/parent/homework.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homework_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homework.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homework_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homework_vue_vue_type_template_id_8d930948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homework.vue?vue&type=template&id=8d930948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parent/homework.vue?vue&type=template&id=8d930948& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "page-header d-print-none" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h2", { staticClass: "page-title" }, [
            _vm._v(_vm._s(_vm.$route.meta.title))
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "page-pretitle" }, [
            _vm._v(_vm._s(_vm.$t("homework")))
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-sm-2 col-6" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchForm.student_id,
                    expression: "searchForm.student_id"
                  }
                ],
                staticClass: "form-control text-center",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.searchForm,
                      "student_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c(
                  "option",
                  { staticClass: "d-none", attrs: { value: "", selected: "" } },
                  [_vm._v(_vm._s(_vm.$t("select_child")))]
                ),
                _vm._v(" "),
                _vm._l(_vm.childs, function(child) {
                  return _c(
                    "option",
                    { key: child.id, domProps: { value: child.id } },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(child.name) +
                          "\n            "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-4 col-md-3 col-6" },
            [
              _c("date-picker", {
                attrs: {
                  value: _vm.searchForm.date,
                  "maximum-view": "year",
                  format: "dd MMMM, yyyy",
                  "input-class": "form-control text-center",
                  placeholder: _vm.$t("select_date")
                },
                on: {
                  input: function($event) {
                    return _vm.setDate($event)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3 col-4" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-outline",
                attrs: { disabled: _vm.searchButtonDisabled },
                on: { click: _vm.getHomeworks }
              },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("get_homework")) +
                    "\n          "
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6 col-xl-12 mt-3" }, [
        _vm.homeworks && _vm.homeworks.length
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.$t("homework")))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v(_vm._s(_vm.$t("teacher")))]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(_vm.$t("subject")))]),
                      _vm._v(" "),
                      _c("th", [_vm._v(_vm._s(_vm.$t("date")))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.homeworks, function(homework) {
                      return _c("tr", { key: homework.id }, [
                        homework.teacher
                          ? _c("td", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(homework.teacher.user.name) +
                                  "\n                "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(homework.subject.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.formateDate(homework.start_date)) +
                              " -\n                  " +
                              _vm._s(_vm.formateDate(homework.end_date)) +
                              "\n                "
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          : _c(
              "div",
              { staticClass: "d-flex justify-content-center py-3" },
              [_c("NotFound", { attrs: { word: "homework" } })],
              1
            )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);