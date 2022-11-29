(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_academic_syllabus_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/src/index.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__);


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    classes: "classs/classes",
    exams: "exam/examList"
  })), {}, {
    submitButtonDisabled: function submitButtonDisabled() {
      return this.form.class_id == "" || this.form.exam_id == "" || this.form.subject_id == "" || this.form.attachment == "";
    }
  }),
  data: function data() {
    return {
      // Search Form
      searchForm: new Form({
        class_id: ""
      }),
      subjects: [],
      routines: [],
      classes_exam_terms: [],
      // Form Data
      form: new Form({
        exam_id: "",
        class_id: "",
        subject_id: "",
        attachment: ""
      })
    };
  },
  methods: {
    getTerms: function getTerms() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/syllabuses/".concat(_this.searchForm.class_id, "/get-class-exams"));

              case 3:
                response = _context.sent;
                _this.classes_exam_terms = response.data.terms;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _this.toastError(_context.t0.response.data.message);

                console.log(_context.t0.response.data.errors);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    onAttachmentChange: function onAttachmentChange(e) {
      var file = e.target.files[0];
      this.form.attachment = file;
    },
    loadSubjects: function loadSubjects() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/api/classes/".concat(_this2.form.class_id, "/subjects"));

              case 3:
                response = _context2.sent;
                _this2.subjects = response.data.subjects;
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

                _this2.toastError(_context2.t0.response.data.message);

                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.isEditMode) {
                  _context3.next = 15;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return _this3.form.post("/api/syllabuses", {
                  transformRequest: [function (data, headers) {
                    return (0,object_to_formdata__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);
                  }]
                });

              case 4:
                response = _context3.sent;

                _this3.reset();

                _this3.toastSuccess(response.data.message);

                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

                _this3.toastError();

                console.log(_context3.t0);

              case 13:
                _context3.next = 27;
                break;

              case 15:
                _context3.prev = 15;
                _context3.next = 18;
                return _this3.form.put("/api/update-class-routines/".concat(_this3.selectedId));

              case 18:
                _response = _context3.sent;

                _this3.reset();

                _this3.toastSuccess(_response.data.message);

                _context3.next = 27;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t1 = _context3["catch"](15);
                console.log(_context3.t1);

                _this3.toastError();

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9], [15, 23]]);
      }))();
    },
    reset: function reset() {
      this.form.reset();
      this.form.clear();
    },
    dataExistsChecking: function dataExistsChecking() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.classes.length) {
                  _this4.toastWarning("Please create class first");

                  _this4.redirect("academic-class");
                }

                if (!_this4.exams.length) {
                  _this4.toastWarning("Please create exam first");

                  _this4.redirect("exam");
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.$store.dispatch("classs/fetchClasses");

            case 2:
              _context5.next = 4;
              return _this5.$store.dispatch("exam/fetchExamsList");

            case 4:
              _context5.next = 6;
              return _this5.dataExistsChecking();

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/object-to-formdata/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/object-to-formdata/src/index.js ***!
  \******************************************************/
/***/ ((module) => {

function isUndefined(value) {
  return value === undefined;
}

function isNull(value) {
  return value === null;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isObject(value) {
  return value === Object(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function isDate(value) {
  return value instanceof Date;
}

function isBlob(value, isReactNative) {
  return isReactNative
    ? isObject(value) && !isUndefined(value.uri)
    : isObject(value) &&
        typeof value.size === 'number' &&
        typeof value.type === 'string' &&
        typeof value.slice === 'function';
}

function isFile(value, isReactNative) {
  return (
    isBlob(value, isReactNative) &&
    typeof value.name === 'string' &&
    (isObject(value.lastModifiedDate) || typeof value.lastModified === 'number')
  );
}

function initCfg(value) {
  return isUndefined(value) ? false : value;
}

function serialize(obj, cfg, fd, pre) {
  cfg = cfg || {};
  fd = fd || new FormData();

  cfg.indices = initCfg(cfg.indices);
  cfg.nullsAsUndefineds = initCfg(cfg.nullsAsUndefineds);
  cfg.booleansAsIntegers = initCfg(cfg.booleansAsIntegers);
  cfg.allowEmptyArrays = initCfg(cfg.allowEmptyArrays);
  cfg.noFilesWithArrayNotation = initCfg(cfg.noFilesWithArrayNotation);
  cfg.dotsForObjectNotation = initCfg(cfg.dotsForObjectNotation);

  const isReactNative = typeof fd.getParts === 'function';

  if (isUndefined(obj)) {
    return fd;
  } else if (isNull(obj)) {
    if (!cfg.nullsAsUndefineds) {
      fd.append(pre, '');
    }
  } else if (isBoolean(obj)) {
    if (cfg.booleansAsIntegers) {
      fd.append(pre, obj ? 1 : 0);
    } else {
      fd.append(pre, obj);
    }
  } else if (isArray(obj)) {
    if (obj.length) {
      obj.forEach((value, index) => {
        let key = pre + '[' + (cfg.indices ? index : '') + ']';

        if (cfg.noFilesWithArrayNotation && isFile(value, isReactNative)) {
          key = pre;
        }

        serialize(value, cfg, fd, key);
      });
    } else if (cfg.allowEmptyArrays) {
      fd.append(pre + '[]', '');
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString());
  } else if (isObject(obj) && !isBlob(obj, isReactNative)) {
    Object.keys(obj).forEach((prop) => {
      const value = obj[prop];

      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }

      const key = pre
        ? cfg.dotsForObjectNotation
          ? pre + '.' + prop
          : pre + '[' + prop + ']'
        : prop;

      serialize(value, cfg, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }

  return fd;
}

module.exports = {
  serialize,
};


/***/ }),

/***/ "./resources/js/pages/admin/academic/syllabus/create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/admin/academic/syllabus/create.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=507dfec7& */ "./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/academic/syllabus/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_507dfec7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=507dfec7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/academic/syllabus/create.vue?vue&type=template&id=507dfec7& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "row row-deck row-cards justify-content-center" },
      [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-header d-flex justify-content-between align-items-center"
              },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.$t("syllabus_create")))
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: { name: "academic-syllabus-index" } }
                  },
                  [_vm._v(_vm._s(_vm.$t("back")) + "\n                    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-md-6" }, [
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
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "term_id" }
                          },
                          [_vm._v(_vm._s(_vm.$t("exam_term")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.exam_id,
                                    expression: "form.exam_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("class_id")
                                },
                                attrs: { id: "term_id" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "exam_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "", disabled: "" } },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(_vm.$t("select_exam_term")) +
                                        "\n                                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.exams, function(exam) {
                                  return _c(
                                    "option",
                                    {
                                      key: exam.id,
                                      domProps: { value: exam.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(exam.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "exam_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "term_id" }
                          },
                          [_vm._v(_vm._s(_vm.$t("class")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.class_id,
                                    expression: "form.class_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("class_id")
                                },
                                attrs: { id: "class_id" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "class_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    _vm.loadSubjects
                                  ]
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "", disabled: "" } },
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
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "class_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "term_id" }
                          },
                          [_vm._v(_vm._s(_vm.$t("subject")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.subject_id,
                                    expression: "form.subject_id"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "subject_id"
                                  )
                                },
                                attrs: { id: "subject_id" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "subject_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "", disabled: "" } },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(_vm.$t("select_subject")) +
                                        "\n                                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.subjects, function(subject) {
                                  return _c(
                                    "option",
                                    {
                                      key: subject.id,
                                      domProps: { value: subject.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(subject.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "subject_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "term_id" }
                          },
                          [_vm._v(_vm._s(_vm.$t("attachment_file")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("input", {
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("attachment")
                              },
                              attrs: { id: "attachment_id", type: "file" },
                              on: { change: _vm.onAttachmentChange }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "subject_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              disabled:
                                _vm.submitButtonDisabled || _vm.form.busy,
                              type: "submit"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.$t("save")) +
                                "\n                                    "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);