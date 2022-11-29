(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_fees_allocation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  data: function data() {
    return {
      sections: [],
      students: [],
      form: new Form({
        invoice_type: "bulk",
        type_id: "",
        class_id: "",
        section_id: "",
        student_id: "",
        amount: "",
        due_date: "",
        description: "",
        status: 0,
        send_notification: false,
        title: "",
        message: ""
      })
    };
  },
  watch: {
    "form.invoice_type": function formInvoice_type(val) {
      if (val == "individual" && this.form.class_id != "" && this.form.section_id != "") {
        this.loadStudents();
      } else {
        this.form.student_id = "";
      }
    },
    "form.class_id": function formClass_id(val) {
      if (this.form.invoice_type == "individual" && val != "" && this.form.section_id != "") {
        this.loadStudents();
      } else {
        this.form.student_id = "";
      }
    },
    "form.section_id": function formSection_id(val) {
      if (this.form.invoice_type == "individual" && this.form.class_id != "" && val != "") {
        this.loadStudents();
      } else {
        this.form.student_id = "";
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    classes: "classs/classes",
    feesTypes: "fee/feesType"
  })), {}, {
    searchButtonDisabled: function searchButtonDisabled() {
      return this.form.class_id == "" || this.form.section_id == "";
    }
  }),
  methods: {
    check: function check(e) {
      var _this = this;

      this.$nextTick(function () {
        console.log(_this.form.send_notification, e);
      });
    },
    setDueDate: function setDueDate(event) {
      var date = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(event).format("YYYY-MM-DD");
      this.form.due_date = date;
    },
    loadSerachFormSections: function loadSerachFormSections() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/classes/".concat(_this2.searchForm.class_id, "/sections"));

              case 3:
                response = _context.sent;
                _this2.sections = response.data.sections;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this2.toastError(_context.t0.response.data.message);

                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    loadSections: function loadSections() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/api/classes/".concat(_this3.form.class_id, "/sections"));

              case 3:
                response = _context2.sent;
                _this3.sections = response.data.sections;
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _this3.toastError(_context2.t0.response.data.message);

                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    loadStudents: function loadStudents() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios.get("/api/classes/".concat(_this4.form.class_id, "/section/").concat(_this4.form.section_id, "/students"));

              case 3:
                response = _context3.sent;
                _this4.students = response.data.data;
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                _this4.toastError(_context3.t0.response.data.message);

                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    save: function save() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this5.form.post("/api/fees");

              case 3:
                response = _context4.sent;

                _this5.toastSuccess(response.data.message);

                _this5.redirect("fees-list");

                _context4.next = 12;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);

                _this5.toastError();

                console.log(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    dataExistsChecking: function dataExistsChecking() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this6.feesTypes.length) {
                  _this6.toastWarning("Please create fee type first");

                  _this6.redirect("fees-type");
                }

                if (!_this6.classes.length) {
                  _this6.toastWarning("Please create class first");

                  _this6.redirect("academic-class");
                }

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  created: function created() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this7.hasPermisssion("fee-create");

            case 2:
              _context6.next = 4;
              return _this7.$store.dispatch("classs/fetchClasses");

            case 4:
              _context6.next = 6;
              return _this7.$store.dispatch("fee/fetchFeesType");

            case 6:
              _context6.next = 8;
              return _this7.dataExistsChecking();

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/pages/admin/fees/allocation.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/admin/fees/allocation.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocation.vue?vue&type=template&id=21af9929& */ "./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929&");
/* harmony import */ var _allocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _allocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__.render,
  _allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/fees/allocation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allocation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allocation_vue_vue_type_template_id_21af9929___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./allocation.vue?vue&type=template&id=21af9929& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/fees/allocation.vue?vue&type=template&id=21af9929& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            _vm._v(_vm._s(_vm.$t("fees")))
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-12 mt-3" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body d-flex justify-content-between" },
            [
              _c("h2", { staticClass: "card-title" }, [
                _vm._v(_vm._s(_vm.$t("fee_allocation")))
              ]),
              _vm._v(" "),
              _c("Back", { attrs: { routeName: "fees-list" } })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-md-10 col-xl-6" }, [
                _c(
                  "form",
                  {
                    attrs: { autocomplete: "off" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.save($event)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("base-label", {
                          attrs: {
                            title: _vm.$t("invoice_type"),
                            required: true
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "base-select",
                          {
                            attrs: { form: _vm.form, field: "invoice_type" },
                            model: {
                              value: _vm.form.invoice_type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "invoice_type", $$v)
                              },
                              expression: "form.invoice_type"
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "bulk", selected: "" } },
                              [_vm._v(_vm._s(_vm.$t("bulk")))]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "individual" } }, [
                              _vm._v(_vm._s(_vm.$t("individual")))
                            ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("base-label", {
                          attrs: { title: _vm.$t("fee_type"), required: true }
                        }),
                        _vm._v(" "),
                        _c(
                          "base-select",
                          {
                            attrs: { form: _vm.form, field: "type_id" },
                            model: {
                              value: _vm.form.type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "type_id", $$v)
                              },
                              expression: "form.type_id"
                            }
                          },
                          [
                            _c(
                              "option",
                              { staticClass: "d-none", attrs: { value: "" } },
                              [
                                _vm._v(
                                  "\n                                            " +
                                    _vm._s(_vm.$t("select_type")) +
                                    "\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.feesTypes, function(type) {
                              return _c(
                                "option",
                                {
                                  key: type.id,
                                  domProps: {
                                    value: type.id,
                                    selected: type.id == _vm.form.type_id
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(type.name) +
                                      "\n                                        "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("base-label", {
                            attrs: { title: _vm.$t("class"), required: true }
                          }),
                          _vm._v(" "),
                          _c(
                            "base-select",
                            {
                              attrs: { form: _vm.form, field: "class_id" },
                              on: { change: _vm.loadSections },
                              model: {
                                value: _vm.form.class_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "class_id", $$v)
                                },
                                expression: "form.class_id"
                              }
                            },
                            [
                              _c(
                                "option",
                                { staticClass: "d-none", attrs: { value: "" } },
                                [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(_vm.$t("select_class")) +
                                      "\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.classes, function(singleClass) {
                                return _c(
                                  "option",
                                  {
                                    key: singleClass.id,
                                    domProps: { value: singleClass.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(singleClass.name) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("base-label", {
                            attrs: { title: _vm.$t("section"), required: true }
                          }),
                          _vm._v(" "),
                          _c(
                            "base-select",
                            {
                              attrs: { form: _vm.form, field: "section_id" },
                              model: {
                                value: _vm.form.section_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "section_id", $$v)
                                },
                                expression: "form.section_id"
                              }
                            },
                            [
                              _c(
                                "option",
                                { staticClass: "d-none", attrs: { value: "" } },
                                [
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(_vm.$t("select_section")) +
                                      "\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.sections, function(section) {
                                return _c(
                                  "option",
                                  {
                                    key: section.id,
                                    domProps: { value: section.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(section.name) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm.form.invoice_type != "bulk"
                      ? _c(
                          "div",
                          { staticClass: "form-group mb-3" },
                          [
                            _c("base-label", {
                              attrs: {
                                title: _vm.$t("student"),
                                required: true
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "base-select",
                              {
                                attrs: { form: _vm.form, field: "student_id" },
                                model: {
                                  value: _vm.form.student_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "student_id", $$v)
                                  },
                                  expression: "form.student_id"
                                }
                              },
                              [
                                _c(
                                  "option",
                                  {
                                    staticClass: "d-none",
                                    attrs: { value: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("select_student")) +
                                        "\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.students, function(student) {
                                  return _c(
                                    "option",
                                    {
                                      key: student.id,
                                      domProps: { value: student.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(student.name) +
                                          "\n                                        "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("base-label", {
                            attrs: { title: _vm.$t("amount"), required: true }
                          }),
                          _vm._v(" "),
                          _c("base-input", {
                            attrs: { form: _vm.form, field: "amount" },
                            model: {
                              value: _vm.form.amount,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "amount", $$v)
                              },
                              expression: "form.amount"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 mb-3" },
                        [
                          _c("base-label", {
                            attrs: { title: _vm.$t("due_date"), required: true }
                          }),
                          _vm._v(" "),
                          _c("date-picker", {
                            attrs: {
                              format: "dd MMMM, yyyy",
                              "input-class": "form-control",
                              placeholder: _vm.$t("select_date")
                            },
                            on: {
                              input: function($event) {
                                return _vm.setDueDate($event)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            staticClass: "d-block",
                            attrs: { form: _vm.form, field: "due_date" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("base-label", {
                          attrs: { title: _vm.$t("status"), required: true }
                        }),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "label",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.status,
                                    expression: "form.status"
                                  }
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "1" },
                                domProps: {
                                  checked: _vm._q(_vm.form.status, "1")
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(_vm.form, "status", "1")
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "form-check-label" }, [
                                _vm._v(_vm._s(_vm.$t("paid")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.status,
                                    expression: "form.status"
                                  }
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "0" },
                                domProps: {
                                  checked: _vm._q(_vm.form.status, "0")
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(_vm.form, "status", "0")
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "form-check-label" }, [
                                _vm._v(_vm._s(_vm.$t("unpaid")))
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("has-error", {
                          staticClass: "d-block",
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("base-label", {
                          attrs: { title: _vm.$t("description") }
                        }),
                        _vm._v(" "),
                        _c("base-textarea", {
                          attrs: {
                            form: _vm.form,
                            field: "description",
                            rows: 6
                          },
                          model: {
                            value: _vm.form.description,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "description", $$v)
                            },
                            expression: "form.description"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-3" },
                      [
                        _c("div", [
                          _c(
                            "label",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.send_notification,
                                    expression: "form.send_notification"
                                  }
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "checkbox" },
                                domProps: {
                                  value: false,
                                  checked: Array.isArray(
                                    _vm.form.send_notification
                                  )
                                    ? _vm._i(
                                        _vm.form.send_notification,
                                        false
                                      ) > -1
                                    : _vm.form.send_notification
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$a = _vm.form.send_notification,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = false,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.form,
                                              "send_notification",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.form,
                                              "send_notification",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.form,
                                          "send_notification",
                                          $$c
                                        )
                                      }
                                    },
                                    _vm.check
                                  ]
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "form-check-label" }, [
                                _vm._v(
                                  _vm._s(_vm.$t("send_email_notification"))
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("has-error", {
                          staticClass: "d-block",
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.form.send_notification
                      ? _c("div", [
                          _c(
                            "div",
                            { staticClass: "form-group mb-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "title" }
                                },
                                [_vm._v(_vm._s(_vm.$t("title")))]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.title,
                                    expression: "form.title"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("title")
                                },
                                attrs: { id: "title" },
                                domProps: { value: _vm.form.title },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "title",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "title" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group mb-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "form-label",
                                  attrs: { for: "message" }
                                },
                                [_vm._v(_vm._s(_vm.$t("message")))]
                              ),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.message,
                                    expression: "form.message"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("message")
                                },
                                attrs: { id: "message", rows: 8 },
                                domProps: { value: _vm.form.message },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "message",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "message" }
                              })
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-footer" },
                      [
                        _c(
                          "base-button",
                          { attrs: { loading: _vm.form.busy } },
                          [_vm._v(_vm._s(_vm.$t("save")))]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);