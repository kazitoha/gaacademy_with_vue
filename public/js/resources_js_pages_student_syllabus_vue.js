(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_student_syllabus_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
  created: function created() {
    if (this.authenticateUser.original_role != "Student") {
      this.redirect("401");
    }

    this.getSyllabus();
  },
  data: function data() {
    return {
      classes_exam_terms: [],
      class_id: "",
      showSyllabusDetails: false,
      syllabuses: [],
      term_name: ""
    };
  },
  methods: {
    getSyllabus: function getSyllabus() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/student/syllabuses-terms");

              case 3:
                response = _context.sent;
                _this.classes_exam_terms = response.data.terms;
                _this.class_id = response.data.class_id;
                _this.showSyllabusDetails = false;
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                _this.toastError(_context.t0.response.data.message);

                console.log(_context.t0.response.data.errors);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    downloadAttachment: function downloadAttachment(syllabus_id) {
      axios({
        url: "/api/syllabuses/download",
        method: "POST",
        responseType: "blob",
        data: {
          syllabus_id: syllabus_id
        }
      }).then(function (response) {
        var fileExt = response.data.type.split("/")[1];
        var fileName = Math.floor(Math.random() * 9999999999);
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "".concat(fileName, ".").concat(fileExt));
        document.body.appendChild(link);
        link.click();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showDetails: function showDetails(term_id, term_name) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.showSyllabusDetails = true;
                _this2.term_name = term_name;
                _context2.prev = 2;
                _context2.next = 5;
                return axios.get("/api/syllabuses/classes/".concat(_this2.class_id, "/terms/").concat(term_id, "/get-syllabus-details"));

              case 5:
                response = _context2.sent;
                _this2.syllabuses = response.data.syllabus_details;

                _this2.$refs.syllabusDetails.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });

                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);

                _this2.toastError(_context2.t0.response.data.message);

                console.log(_context2.t0.response);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/student/syllabus.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/student/syllabus.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syllabus.vue?vue&type=template&id=bbc55fbc& */ "./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc&");
/* harmony import */ var _syllabus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syllabus.vue?vue&type=script&lang=js& */ "./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _syllabus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__.render,
  _syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/student/syllabus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_syllabus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./syllabus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_syllabus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_syllabus_vue_vue_type_template_id_bbc55fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./syllabus.vue?vue&type=template&id=bbc55fbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/student/syllabus.vue?vue&type=template&id=bbc55fbc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            _vm._v(_vm._s(_vm.$t("class_syllabus")))
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _vm.classes_exam_terms.length
        ? _c("div", { staticClass: "col-12 mt-3" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h2", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.$t("exam_terms")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card-body  card-body-scrollable card-body-scrollable-shadow"
                },
                [
                  _c("table", { staticClass: "table table-bordered" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("exam_term")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("note")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("action")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.classes_exam_terms, function(term, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(term.exam.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(term.exam.note))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-outline",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.showDetails(
                                      term.exam_id,
                                      term.exam.name
                                    )
                                  }
                                }
                              },
                              [
                                _c("icon-eye"),
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.$t("show_details")) +
                                    "\n                                    "
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm.showSyllabusDetails
              ? _c(
                  "div",
                  { ref: "syllabusDetails", staticClass: "card mt-3" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "card-header d-flex justify-content-between align-items-center"
                      },
                      [
                        _c("h3", { staticClass: "card-title" }, [
                          _vm._v(
                            _vm._s(_vm.term_name) +
                              " " +
                              _vm._s(_vm.$t("syllabus"))
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                _vm.showSyllabusDetails = false
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("close")))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _vm.syllabuses && _vm.syllabuses.length
                        ? _c(
                            "table",
                            { staticClass: "table table-responsive" },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v(_vm._s(_vm.$t("subject")))]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("attachment")))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.syllabuses, function(syllabus) {
                                  return _c("tr", { key: syllabus.id }, [
                                    _c("td", { attrs: { width: "20%" } }, [
                                      _vm._v(_vm._s(syllabus.subject_name))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { attrs: { width: "20%" } }, [
                                      syllabus.attachment
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.downloadAttachment(
                                                    syllabus.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("icon-download"),
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(_vm.$t("download")) +
                                                  "\n                                    "
                                              )
                                            ],
                                            1
                                          )
                                        : _c(
                                            "a",
                                            {
                                              staticClass: "btn btn-secondary",
                                              attrs: { href: "#", disabled: "" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    _vm.$t("file_not_found")
                                                  ) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _c(
                            "div",
                            {
                              staticClass: "d-flex justify-content-center py-3"
                            },
                            [_c("NotFound", { attrs: { word: "syllabus" } })],
                            1
                          )
                    ])
                  ]
                )
              : _vm._e()
          ])
        : _c(
            "div",
            { staticClass: "d-flex justify-content-center py-3" },
            [_c("NotFound", { attrs: { word: "class routine" } })],
            1
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);