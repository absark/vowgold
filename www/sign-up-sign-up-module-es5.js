function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js ***!
    \*************************************************************************************************/

  /*! exports provided: ErrorMessageBindingStrategy, FormBuilderConfiguration, IAbstractControl, IpVersion, NumericValueType, ReactiveFormConfig, ResetFormType, RxFormArray, RxFormBuilder, RxFormControl, RxFormGroup, RxReactiveFormsModule, RxwebValidators, ValidationAlphabetLocale, allOf, alpha, alphaNumeric, and, ascii, async, blacklist, choice, compare, compose, contains, creditCard, cusip, custom, dataUri, date, different, digit, disable, elementClass, email, endsWith, error, escape, even, extension, factor, file, fileSize, greaterThan, greaterThanEqualTo, grid, hexColor, image, json, latLong, latitude, leapYear, lessThan, lessThanEqualTo, longitude, lowerCase, ltrim, mac, mask, maxDate, maxLength, maxNumber, maxTime, minDate, minLength, minNumber, minTime, model, noneOf, not, notEmpty, numeric, odd, oneOf, or, password, pattern, port, prefix, primeNumber, prop, propArray, propObject, range, required, requiredTrue, rtrim, rule, sanitize, startsWith, stripLow, suffix, time, toBoolean, toDate, toDouble, toFloat, toInt, toString, trim, unique, upperCase, url, whitelist, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl */

  /***/
  function node_modulesRxwebReactiveFormValidatorsFesm2015RxwebReactiveFormValidatorsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _CONFIG_REQUIRED_FIEL, _operatorOpposite;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageBindingStrategy", function () {
      return ErrorMessageBindingStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilderConfiguration", function () {
      return FormBuilderConfiguration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IAbstractControl", function () {
      return IAbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpVersion", function () {
      return IpVersion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumericValueType", function () {
      return NumericValueType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormConfig", function () {
      return ReactiveFormConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetFormType", function () {
      return ResetFormType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxFormArray", function () {
      return RxFormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxFormBuilder", function () {
      return RxFormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxFormControl", function () {
      return RxFormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxFormGroup", function () {
      return RxFormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxReactiveFormsModule", function () {
      return RxReactiveFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RxwebValidators", function () {
      return RxwebValidators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationAlphabetLocale", function () {
      return ValidationAlphabetLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allOf", function () {
      return allOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "alpha", function () {
      return alpha;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "alphaNumeric", function () {
      return alphaNumeric;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "and", function () {
      return and;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ascii", function () {
      return ascii;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "async", function () {
      return async;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blacklist", function () {
      return blacklist$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "choice", function () {
      return choice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "compare", function () {
      return compare;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "compose", function () {
      return compose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contains", function () {
      return contains;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "creditCard", function () {
      return creditCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cusip", function () {
      return cusip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "custom", function () {
      return custom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataUri", function () {
      return dataUri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "date", function () {
      return date;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "different", function () {
      return different;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "digit", function () {
      return digit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "disable", function () {
      return disable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "elementClass", function () {
      return elementClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "email", function () {
      return email;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "endsWith", function () {
      return endsWith;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "error", function () {
      return error;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "escape", function () {
      return escape$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "even", function () {
      return even;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extension", function () {
      return extension;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "factor", function () {
      return factor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "file", function () {
      return file;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fileSize", function () {
      return fileSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "greaterThan", function () {
      return greaterThan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "greaterThanEqualTo", function () {
      return greaterThanEqualTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "grid", function () {
      return grid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hexColor", function () {
      return hexColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "image", function () {
      return image;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "json", function () {
      return json;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "latLong", function () {
      return latLong;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "latitude", function () {
      return latitude;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "leapYear", function () {
      return leapYear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lessThan", function () {
      return lessThan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lessThanEqualTo", function () {
      return lessThanEqualTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "longitude", function () {
      return longitude;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lowerCase", function () {
      return lowerCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ltrim", function () {
      return ltrim$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mac", function () {
      return mac;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mask", function () {
      return mask;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maxDate", function () {
      return maxDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maxLength", function () {
      return maxLength;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maxNumber", function () {
      return maxNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maxTime", function () {
      return maxTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minDate", function () {
      return minDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minLength", function () {
      return minLength;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minNumber", function () {
      return minNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minTime", function () {
      return minTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "model", function () {
      return model;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noneOf", function () {
      return noneOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "not", function () {
      return not;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notEmpty", function () {
      return notEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numeric", function () {
      return numeric;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "odd", function () {
      return odd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "oneOf", function () {
      return oneOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "or", function () {
      return or;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "password", function () {
      return password;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pattern", function () {
      return pattern;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "port", function () {
      return port;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prefix", function () {
      return prefix$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "primeNumber", function () {
      return primeNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prop", function () {
      return prop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "propArray", function () {
      return propArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "propObject", function () {
      return propObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "range", function () {
      return range;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "required", function () {
      return required;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "requiredTrue", function () {
      return requiredTrue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rtrim", function () {
      return rtrim$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rule", function () {
      return rule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sanitize", function () {
      return sanitize$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startsWith", function () {
      return startsWith;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stripLow", function () {
      return stripLow$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "suffix", function () {
      return suffix$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "time", function () {
      return time;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toBoolean", function () {
      return toBoolean$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toDate", function () {
      return toDate$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toDouble", function () {
      return toDouble$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toFloat", function () {
      return toFloat$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toInt", function () {
      return toInt$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toString", function () {
      return toString$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trim", function () {
      return trim$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unique", function () {
      return unique;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upperCase", function () {
      return upperCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "url", function () {
      return url;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "whitelist", function () {
      return whitelist$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return RxwebFormDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return BaseDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return HtmlControlTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return ControlHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return RxFormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return BaseValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return ControlExpressionProcess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return DecimalProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return FileControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return ImageFileControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return AsyncValidationDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return BaseFormBuilder;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CONTROLS_ERROR = "controlsError";
    var VALUE_CHANGED_SYNC = "valueChangedSync";
    var FUNCTION_STRING = "function";
    var OBJECT_STRING = "object";
    var RX_WEB_VALIDATOR = "rxwebValidator";
    var NUMBER = "number";
    var BOOLEAN = "boolean";
    var TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
    var CONDITIONAL_VALIDATOR = "conditionalValidator";
    var VALIDATOR_CONFIG = "validatorConfig";
    var THIS = "this";
    var RXCODE = "-rxw-";
    var MODEL = "model";
    var MODEL_INSTANCE = "modelInstance";
    var PATCH = "patch";

    var Linq = /*#__PURE__*/function () {
      function Linq() {
        _classCallCheck(this, Linq);
      }

      _createClass(Linq, null, [{
        key: "functionCreator",
        value: function functionCreator(expression) {
          var functionSetter = [];
          var match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
          var splitSelect = match[2].split(",");

          for (var i = 0; i < splitSelect.length; i++) {
            var equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);

            if (equalToOperator !== null) {
              functionSetter = new Function(match[1], "return " + equalToOperator.input);
            } else {
              equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);

              if (equalToOperator === null) {
                functionSetter = new Function(match[1], "return " + splitSelect.input);
              } else {
                functionSetter = new Function(match[1], "return " + equalToOperator.input);
              }
            }
          }

          if (splitSelect.length == 0) functionSetter = {
            accessFunction: new Function(match[1], "return " + match[2])
          };
          return functionSetter;
        }
      }, {
        key: "execute",
        value: function execute(jObject, config, parentObject, modelInstance, isDynamicConfig) {
          var expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
          var lastParam = isDynamicConfig ? config : modelInstance;
          if (parentObject && typeof expressionFunction == "string") expressionFunction = Linq.functionCreator(expressionFunction);
          if (parentObject && expressionFunction) return modelInstance && modelInstance.constructor !== Object ? expressionFunction.call(modelInstance, parentObject, jObject, lastParam) : expressionFunction(parentObject, jObject, lastParam);
          return true;
        }
      }, {
        key: "getConditionPath",
        value: function getConditionPath(texts) {
          var path = "";

          for (var i = 1; i < texts.length; i++) {
            path += texts.length - 1 == i ? texts[i].trim() : "".concat(texts[i].trim(), ".");
          }

          return path;
        }
      }, {
        key: "expressionParser",
        value: function expressionParser(expression, isNonValidationExpression) {
          var _this = this;

          var columns = [];
          var expressionString = expression.toString();
          var expressionArguments = Linq.extractArguments(expressionString);

          if (expressionArguments.length > 0) {
            var splitTexts = [];
            expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(function (t) {
              var texts = t.replace(/\(|\)/g, "").split("||");

              var _iterator = _createForOfIteratorHelper(texts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var text = _step.value;
                  splitTexts.push(text);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
            splitTexts.forEach(function (t) {
              expressionArguments.forEach(function (x, i) {
                t = t.trim();

                if (t.startsWith(x + '.')) {
                  var splitText = t.split('.');
                  if (splitText.length == 2 || splitText.length >= 2 && isNonValidationExpression) {
                    if (!isNonValidationExpression) columns.push({
                      propName: splitText[1].trim(),
                      argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
                    });else columns.push({
                      propName: _this.getConditionPath(splitText),
                      argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
                    });
                  } else {
                    var arrayProp = splitText[1].split('[');
                    var jObject = {
                      propName: splitText[splitText.length - 1].trim(),
                      objectPropName: arrayProp[0],
                      arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                      argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
                    };
                    columns.push(jObject);
                  }
                }
              });
            });
          }

          return columns;
        }
      }, {
        key: "extractArguments",
        value: function extractArguments(splitText) {
          var expressionArguments = [THIS];

          if (splitText[0].trim() !== "(" && !splitText.trim().startsWith("function")) {
            var text = splitText[0].split("=>")[0];
            expressionArguments.push(text.trim().replace("(", "").replace(")", ""));
          } else {
            var splitTexts = splitText.match(/\(([^)]+)\)/g);
            if (splitTexts && splitTexts[0]) splitTexts[0].split(",").forEach(function (t) {
              return expressionArguments.push(t.trim().replace("(", "").replace(")", ""));
            });
          }

          return expressionArguments;
        }
      }, {
        key: "expressionColumns",
        value: function expressionColumns(expression) {
          var isNonValidationExpression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var columns = [];
          var splitExpressions = [];

          if (typeof expression == "string") {
            expression.split("=>")[1].split(" && ").forEach(function (t) {
              t.split(" || ").forEach(function (x) {
                splitExpressions.push(x.trim().split(' ')[0]);
              });
            });
            splitExpressions.forEach(function (t) {
              var splitText = t.split('.');
              if (splitText.length == 2) columns.push({
                propName: splitText[1].trim()
              });else {
                var arrayProp = splitText[1].split('[');
                var jObject = {
                  propName: splitText[splitText.length - 1].trim(),
                  objectPropName: arrayProp[0],
                  arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                };
                columns.push(jObject);
              }
            });
          } else {
            columns = Linq.expressionParser(expression, isNonValidationExpression);
          }

          return columns;
        }
      }, {
        key: "dynamicConfigParser",
        value: function dynamicConfigParser(expression, propName) {
          var controlNames = [];
          var expressionString = expression.toString();
          var expressionArguments = Linq.extractArguments(expressionString);
          var splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\?�`'#<>|,;:+-]+/g, " ").split(/ /g);
          if (expressionArguments.length > 3) expressionArguments.splice(expressionArguments.length - 1, 1);
          expressionArguments.forEach(function (t) {
            splitString.filter(function (x) {
              return x != "".concat(t, ".").concat(propName) && x.startsWith("".concat(t, "."));
            }).forEach(function (x) {
              var split = x.split('.');
              if (split.length == 2) controlNames.push({
                propName: x.replace("".concat(t, "."), '')
              });else {
                var arrayProp = split[1].split('[');
                var jObject = {
                  propName: split[split.length - 1].trim(),
                  objectPropName: arrayProp[0],
                  arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                };
                controlNames.push(jObject);
              }
            });
          });
          return controlNames;
        }
      }]);

      return Linq;
    }();

    var AnnotationTypes = {
      numeric: 'numeric',
      required: 'required',
      minLength: 'minLength',
      maxLength: 'maxLength',
      minNumber: 'minNumber',
      maxNumber: 'maxNumber',
      pattern: 'pattern',
      password: 'password',
      compare: 'compare',
      minDate: 'minDate',
      maxDate: 'maxDate',
      alpha: 'alpha',
      alphaNumeric: 'alphaNumeric',
      email: 'email',
      hexColor: 'hexColor',
      lowerCase: 'lowerCase',
      url: 'url',
      upperCase: 'upperCase',
      nested: 'nested',
      propArray: 'propArray',
      propObject: 'propObject',
      contains: 'contains',
      range: 'range',
      custom: 'custom',
      digit: "digit",
      creditCard: "creditCard",
      time: "time",
      json: "json",
      greaterThan: "greaterThan",
      greaterThanEqualTo: "greaterThanEqualTo",
      lessThan: "lessThan",
      lessThanEqualTo: "lessThanEqualTo",
      choice: "choice",
      different: "different",
      even: "even",
      odd: "odd",
      factor: "factor",
      leapYear: "leapYear",
      allOf: "allOf",
      oneOf: "oneOf",
      noneOf: "noneOf",
      mac: "mac",
      ascii: "ascii",
      dataUri: "dataUri",
      port: "port",
      latLong: "latLong",
      extension: "extension",
      fileSize: "fileSize",
      endsWith: "endsWith",
      startsWith: "startsWith",
      primeNumber: "primeNumber",
      latitude: "latitude",
      longitude: "longitude",
      compose: "compose",
      rule: "rule",
      file: "file",
      image: "image",
      unique: "unique",
      notEmpty: "notEmpty",
      ip: "ip",
      cusip: "cusip",
      grid: "grid",
      date: 'date',
      and: 'and',
      or: 'or',
      not: 'not',
      minTime: 'minTime',
      maxTime: 'maxTime',
      requiredTrue: 'requiredTrue',
      mask: 'mask'
    };
    var PROPERTY = "property";
    var OBJECT_PROPERTY = "objectProperty";
    var ARRAY_PROPERTY = "arrayProperty";
    var STRING = "string";
    var MESSAGE = "message";
    var BLANK = "";
    var ELEMENT_VALUE = "value";
    var BLUR = "blur";
    var FOCUS = "focus";
    var CHANGE = "change";
    var KEY_DOWN = "keydown";
    var KEY_PRESS = "keypress";
    var PASTE = "paste";
    var INPUT = "INPUT";
    var SELECT = "SELECT";
    var CHECKBOX = "checkbox";
    var RADIO = "radio";
    var FILE = "file";
    var TEXTAREA = "textarea";
    var ValidationAlphabetLocale = {
      'danish': 'danish',
      'french': 'french',
      'german': 'german',
      'greek': 'greek',
      'spanish': 'spanish',
      'russian': 'russian'
    };
    var DECORATORS = {
      disabled: 'disabled',
      error: 'error',
      trim: 'trim',
      ltrim: 'ltrim',
      rtrim: 'rtrim',
      blacklist: 'blacklist',
      stripLow: 'stripLow',
      toBoolean: 'toBoolean',
      toDate: 'toDate',
      toDouble: 'toDouble',
      toFloat: 'toFloat',
      toInt: 'toInt',
      string: 'toString',
      whitelist: 'whitelist',
      escape: 'escape',
      prefix: 'prefix',
      suffix: 'suffix',
      sanitize: 'sanitize',
      elementClass: 'elementClass'
    };
    var defaultContainer = new ( /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);

        this.instances = [];
        this.modelIncrementCount = 0;
      }

      _createClass(_class, [{
        key: "get",
        value: function get(instanceFunc) {
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];
          return instance;
        }
      }, {
        key: "getInstance",
        value: function getInstance(target, parameterIndex, propertyKey, decoratorType) {
          var isPropertyKey = propertyKey != undefined;
          var instanceFunc = !isPropertyKey ? target : target.constructor;
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];
          if (!instance) instance = this.addInstanceContainer(instanceFunc);
          return instance;
        }
      }, {
        key: "addPropsConfig",
        value: function addPropsConfig(target, configs) {
          var _this2 = this;

          var instanceContainer = this.instances.filter(function (instance) {
            return instance.instance == target;
          })[0];

          if (instanceContainer) {
            var _iterator2 = _createForOfIteratorHelper(configs),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var config = _step2.value;

                var _iterator3 = _createForOfIteratorHelper(config.propNames),
                    _step3;

                try {
                  var _loop = function _loop() {
                    var prop = _step3.value;
                    var propertyInfo = instanceContainer.properties.filter(function (t) {
                      return t.name == prop && t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY;
                    })[0];

                    if (propertyInfo) {
                      _this2.addPropConfig(target, [propertyInfo], config);
                    } else if (prop === ":all:") _this2.addPropConfig(target, instanceContainer.properties.filter(function (t) {
                      return t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY;
                    }), config);
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else if (configs === undefined) this.addInstanceContainer(target);
        }
      }, {
        key: "addPropConfig",
        value: function addPropConfig(target, properties, config) {
          var _iterator4 = _createForOfIteratorHelper(properties),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var propertyInfo = _step4.value;
              var excludeProp = false;
              if (config.excludePropNames) excludeProp = config.excludePropNames.filter(function (t) {
                return t == propertyInfo.name;
              })[0] !== undefined;

              if (!excludeProp) {
                if (config.validationConfig) for (var typeName in config.validationConfig) {
                  this.init({
                    constructor: target
                  }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
                }
                if (config.error) this.addDecoratorConfig({
                  constructor: target
                }, 0, propertyInfo.name, config.error, DECORATORS.error);
                if (config.disable) this.addDecoratorConfig({
                  constructor: target
                }, 0, propertyInfo.name, config.disable, DECORATORS.disabled);
                if (config.elementClass) this.addDecoratorConfig({
                  constructor: target
                }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
                if (config.ignore) propertyInfo.ignore = config.ignore;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "addSanitizer",
        value: function addSanitizer(target, parameterIndex, propertyKey, decoratorType, value) {
          var instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);

          if (instance) {
            if (!instance.sanitizers[propertyKey]) instance.sanitizers[propertyKey] = [];
            instance.sanitizers[propertyKey].push({
              name: decoratorType,
              config: value
            });
          }
        }
      }, {
        key: "addDecoratorConfig",
        value: function addDecoratorConfig(target, parameterIndex, propertyKey, config, decoratorType) {
          var isPropertyKey = propertyKey != undefined;
          var instanceFunc = !isPropertyKey ? target : target.constructor;
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];
          if (!instance) instance = this.addInstanceContainer(instanceFunc);
          instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
          var columns = Linq.expressionColumns(config.conditionalExpression, true);
          columns.forEach(function (column) {
            if (column.argumentIndex !== -1) {
              var columnName = !column.objectPropName ? "".concat(column.propName).concat(RXCODE).concat(column.argumentIndex) : "".concat(column.objectPropName, ".").concat(column.propName).concat(RXCODE).concat(column.argumentIndex);
              if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName]) instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
              var disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
              if (disabledColumns.indexOf(columnName) === -1) disabledColumns.push(propertyKey);
            } else {
              if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey]) instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
              instance.nonValidationDecorators[decoratorType].controlProp[propertyKey][column.propName.replace(";", "")] = true;
            }
          });
        }
      }, {
        key: "init",
        value: function init(target, parameterIndex, propertyKey, annotationType, config, isAsync) {
          var decoratorConfiguration = {
            propertyIndex: parameterIndex,
            propertyName: propertyKey,
            annotationType: annotationType,
            config: config,
            isAsync: isAsync
          };
          var isPropertyKey = propertyKey != undefined;
          this.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
        }
      }, {
        key: "initPropertyObject",
        value: function initPropertyObject(name, propertyType, entity, target, config) {
          var propertyInfo = {
            name: name,
            propertyType: propertyType,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined
          };
          defaultContainer.addProperty(target.constructor, propertyInfo);
        }
      }, {
        key: "addInstanceContainer",
        value: function addInstanceContainer(instanceFunc) {
          var instanceContainer = {
            instance: instanceFunc,
            propertyAnnotations: [],
            properties: [],
            nonValidationDecorators: {
              disabled: {
                conditionalExpressions: {},
                changeDetection: {},
                controlProp: {}
              },
              error: {
                conditionalExpressions: {},
                changeDetection: {},
                controlProp: {}
              },
              elementClass: {
                conditionalExpressions: {},
                changeDetection: {},
                controlProp: {}
              }
            },
            sanitizers: {}
          };
          this.instances.push(instanceContainer);
          return instanceContainer;
        }
      }, {
        key: "addProperty",
        value: function addProperty(instanceFunc, propertyInfo) {
          var isFromAnnotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];

          if (instance) {
            this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
          } else {
            instance = this.addInstanceContainer(instanceFunc);
            this.addPropertyInfo(instance, propertyInfo);
          }
        }
      }, {
        key: "addPropertyInfo",
        value: function addPropertyInfo(instance, propertyInfo) {
          var isAddProperty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var property = this.getProperty(instance, propertyInfo);
          if (!property) instance.properties.push(propertyInfo);else if (isAddProperty) this.updateProperty(property, propertyInfo);
        }
      }, {
        key: "addAnnotation",
        value: function addAnnotation(instanceFunc, decoratorConfiguration) {
          this.addProperty(instanceFunc, {
            propertyType: PROPERTY,
            name: decoratorConfiguration.propertyName
          }, true);
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];
          if (instance) instance.propertyAnnotations.push(decoratorConfiguration);else {
            instance = this.addInstanceContainer(instanceFunc);
            instance.propertyAnnotations.push(decoratorConfiguration);
          }

          if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
            var columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
          }

          if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
            var _columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);

            this.addChangeValidation(instance, decoratorConfiguration.propertyName, _columns);
          }

          this.setConditionalColumns(instance, decoratorConfiguration);
        }
      }, {
        key: "setConditionalColumns",
        value: function setConditionalColumns(instance, decoratorConfiguration) {
          var _this3 = this;

          if (instance && decoratorConfiguration.config) {
            if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
              Object.keys(decoratorConfiguration.config.validation).forEach(function (t) {
                if (typeof decoratorConfiguration.config.validation[t] !== "boolean") _this3.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
              });
            } else this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
          }
        }
      }, {
        key: "setLogicalConditional",
        value: function setLogicalConditional(instance, annotationType, fieldName, propertyName) {
          if (instance && (annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime || annotationType == AnnotationTypes.creditCard && fieldName || (annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName)) {
            this.setConditionalValueProp(instance, fieldName, propertyName);
          }
        }
      }, {
        key: "setConditionalValueProp",
        value: function setConditionalValueProp(instance, propName, refPropName) {
          if (propName) {
            var splitProps = propName.split ? propName.split('.') : '';

            if (splitProps.length < 2) {
              if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
              if (!instance.conditionalValidationProps[propName]) instance.conditionalValidationProps[propName] = [];
              if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1) instance.conditionalValidationProps[propName].push(refPropName);
            } else this.addChangeValidation(instance, refPropName, [{
              argumentIndex: 1,
              objectPropName: splitProps[0],
              propName: splitProps[1],
              referencePropName: refPropName
            }]);
          }
        }
      }, {
        key: "addChangeValidation",
        value: function addChangeValidation(instance, propertyName, columns) {
          if (instance) {
            if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
            columns.forEach(function (t) {
              if (t.propName && !t.objectPropName) {
                if (!instance.conditionalValidationProps[t.propName]) instance.conditionalValidationProps[t.propName] = [];
                if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1) instance.conditionalValidationProps[t.propName].push(propertyName);
              } else {
                if (t.propName && t.objectPropName) {
                  if (!instance.conditionalObjectProps) instance.conditionalObjectProps = [];
                  t.referencePropName = propertyName;
                  instance.conditionalObjectProps.push(t);
                }
              }
            });
          }
        }
      }, {
        key: "clearInstance",
        value: function clearInstance(instanceFunc) {
          var instance = this.instances.filter(function (instance) {
            return instance.instance === instanceFunc;
          })[0];

          if (instance) {
            var indexOf = this.instances.indexOf(instance);
            this.instances.splice(indexOf, 1);
          }
        }
      }, {
        key: "getProperty",
        value: function getProperty(instance, propertyInfo) {
          return instance.properties.filter(function (t) {
            return t.name == propertyInfo.name;
          })[0];
        }
      }, {
        key: "updateProperty",
        value: function updateProperty(property, currentProperty) {
          property.dataPropertyName = currentProperty.dataPropertyName;
          property.defaultValue = currentProperty.defaultValue;
        }
      }]);

      return _class;
    }())();
    var RegExRule = {
      alpha: /^[a-zA-Z]+$/,
      alphaExits: /[a-zA-Z]/,
      alphaWithSpace: /^[a-zA-Z\s]+$/,
      macId: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
      onlyDigit: /^[0-9]+$/,
      isDigitExits: /[0-9]/,
      lowerCase: /[a-z]/,
      upperCase: /[A-Z]/,
      specialCharacter: /[!@#$%^&*(),.?":{}|<>]/,
      advancedEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      basicEmail: /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      alphaNumeric: /^[0-9a-zA-Z]+$/,
      alphaNumericWithSpace: /^[0-9a-zA-Z\s]+$/,
      hexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
      strictHexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
      "float": /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
      decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
      hexaDecimal: /^[0-9A-F]+$/i,
      date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      url: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
      localhostUrl: /^(https?:\/\/localhost\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|https?:\/\/localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))$/,
      interanetUrl: /^(https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])$/,
      ascii: /^[\x00-\x7F]+$/,
      dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
      lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
      "long": /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
      ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
      ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
      cidrV4: /^(3[0-2]|[12]?[0-9])$/,
      cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
      cusip: /^[0-9A-Z]{9}$/,
      grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
    };
    var ALPHABET = "alphabet";
    var DIGIT = "digit";
    var CONTAINS = "contains";
    var LOWERCASE = "lowerCase";
    var UPPERCASE = "upperCase";
    var SPECIAL_CHARACTER = "specialCharacter";
    var MIN_LENGTH = "minLength";
    var MAX_LENGTH = "maxLength";

    var RegexValidator = /*#__PURE__*/function () {
      function RegexValidator() {
        _classCallCheck(this, RegexValidator);
      }

      _createClass(RegexValidator, null, [{
        key: "isExits",
        value: function isExits(value, regex) {
          return value.match(regex) != null;
        }
      }, {
        key: "isValid",
        value: function isValid(value, regex) {
          return regex.test(value);
        }
      }, {
        key: "isNotBlank",
        value: function isNotBlank(value) {
          var isRemoveSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return !isRemoveSpace ? value === 0 || value !== undefined && value !== null && value !== "" : value === 0 || value !== undefined && value !== null && String(value).trim() !== "";
        }
      }, {
        key: "isValidPassword",
        value: function isValidPassword(passwordValidation, value) {
          var isValid = false;
          var keyName = "status";
          var objectProperties = Object.getOwnPropertyNames(passwordValidation);

          var _iterator5 = _createForOfIteratorHelper(objectProperties),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var propertyName = _step5.value;

              switch (propertyName) {
                case ALPHABET:
                  isValid = RegexValidator.isExits(value, RegExRule.alphaExits);
                  keyName = ALPHABET;
                  break;

                case DIGIT:
                  isValid = RegexValidator.isValid(value, RegExRule.isDigitExits);
                  keyName = DIGIT;
                  break;

                case CONTAINS:
                  isValid = value.indexOf(passwordValidation[CONTAINS]) != -1;
                  keyName = CONTAINS;
                  break;

                case LOWERCASE:
                  isValid = RegexValidator.isValid(value, RegExRule.lowerCase);
                  keyName = LOWERCASE;
                  break;

                case UPPERCASE:
                  isValid = RegexValidator.isValid(value, RegExRule.upperCase);
                  keyName = UPPERCASE;
                  break;

                case SPECIAL_CHARACTER:
                  isValid = RegexValidator.isExits(value, RegExRule.specialCharacter);
                  keyName = SPECIAL_CHARACTER;
                  break;

                case MIN_LENGTH:
                  isValid = value.length >= passwordValidation[propertyName];
                  keyName = MIN_LENGTH;
                  break;

                case MAX_LENGTH:
                  isValid = value.length <= passwordValidation[propertyName];
                  keyName = MAX_LENGTH;
                  break;
              }

              if (!isValid) break;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return {
            isValid: isValid,
            keyName: keyName
          };
        }
      }, {
        key: "isZero",
        value: function isZero(value) {
          return value == 0;
        }
      }, {
        key: "commaRegex",
        value: function commaRegex() {
          return new RegExp(",", "g");
        }
      }]);

      return RegexValidator;
    }();

    var ReactiveFormConfig = /*#__PURE__*/function () {
      function ReactiveFormConfig() {
        _classCallCheck(this, ReactiveFormConfig);
      }

      _createClass(ReactiveFormConfig, null, [{
        key: "set",
        value: function set(jObject) {
          if (jObject) ReactiveFormConfig.json = jObject;
        }
      }, {
        key: "get",
        value: function get(path) {
          var jObject;

          if (ReactiveFormConfig.json) {
            var splitPath = path.split('.');

            var _iterator6 = _createForOfIteratorHelper(splitPath),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var columnName = _step6.value;
                jObject = !jObject ? ReactiveFormConfig.json[columnName] : jObject[columnName];
                if (!jObject) break;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          return jObject;
        }
      }]);

      return ReactiveFormConfig;
    }();

    ReactiveFormConfig.number = {};
    ReactiveFormConfig.json = {};
    ReactiveFormConfig.autoInstancePush = false;

    function isObjectType(value) {
      return !(typeof value == "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date);
    }

    function isObject(value) {
      return Object.prototype.toString.call(value) === '[object Object]';
    }

    function clone(jsonObject) {
      var jObject = {};

      if (isObjectType(jsonObject)) {
        for (var columnName in jsonObject) {
          if (Array.isArray(jsonObject[columnName])) {
            jObject[columnName] = [];

            var _iterator7 = _createForOfIteratorHelper(jsonObject[columnName]),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var row = _step7.value;
                if (isObject(row)) jObject[columnName].push(clone(row));else jObject[columnName].push(row);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp)) jObject[columnName] = clone(jsonObject[columnName]);else jObject[columnName] = jsonObject[columnName];
        }

        return jObject;
      } else return jsonObject;
    }

    function merge(firstObject, secondObject) {
      for (var columnName in secondObject) {
        if (Array.isArray(secondObject[columnName])) {
          if (!firstObject[columnName]) firstObject[columnName] = [];

          var _iterator8 = _createForOfIteratorHelper(secondObject[columnName]),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var row = _step8.value;
              firstObject[columnName].push(clone(row));
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else if (typeof firstObject[columnName] == "object" && !(firstObject[columnName] instanceof RegExp)) firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);else firstObject[columnName] = secondObject[columnName];
      }

      return firstObject;
    }

    function isMatched(jsonObject, compareObject) {
      var isModified = false;

      for (var columnName in compareObject) {
        if (Array.isArray(jsonObject[columnName])) {
          for (var i = 0; i < jsonObject[columnName].length; i++) {
            isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
          }
        } else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp)) isModified = isMatched(jsonObject[columnName], compareObject[columnName]);else isModified = !(jsonObject[columnName] == compareObject[columnName]);

        if (isModified) break;
      }

      return isModified;
    }

    var ObjectMaker = /*#__PURE__*/function () {
      function ObjectMaker() {
        _classCallCheck(this, ObjectMaker);
      }

      _createClass(ObjectMaker, null, [{
        key: "toJson",
        value: function toJson(key, config, values) {
          var message = config ? config.message : null;
          var messageKey = undefined;
          if (!message && config && config.messageKey) messageKey = config.messageKey;
          var messageText = message ? message : ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key] ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
          values.forEach(function (t, index) {
            messageText = messageText.replace("{{".concat(index, "}}"), t);
          });
          var jObject = {};
          jObject[key] = {
            message: messageText,
            refValues: values
          };
          if (config && config.isAddMessageKey) jObject["messageKey"] = messageKey;
          return jObject;
        }
      }, {
        key: "null",
        value: function _null() {
          return null;
        }
      }, {
        key: "getPasswordMessage",
        value: function getPasswordMessage() {
          var messageKey = "password";
          return ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey] ? ReactiveFormConfig.json.validationMessage[messageKey] : '';
        }
      }]);

      return ObjectMaker;
    }();

    var PROP_ARRAY = "propArray";

    var RxFormArray = /*#__PURE__*/function (_angular_forms__WEBPA) {
      _inherits(RxFormArray, _angular_forms__WEBPA);

      var _super = _createSuper(RxFormArray);

      function RxFormArray(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
        var _this4;

        _classCallCheck(this, RxFormArray);

        _this4 = _super.call(this, controls, validatorOrOpts, asyncValidator);
        _this4.arrayObject = arrayObject;
        _this4.arrayConfig = arrayConfig;
        _this4._isModified = false;
        _this4._modified = [];

        _this4.cloneObject(arrayObject);

        return _this4;
      }

      _createClass(RxFormArray, [{
        key: "push",
        value: function push(control) {
          var isAddedInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var formGroup = this.root;
          if (this.arrayObject) if (control.modelInstance) {
            if (!isAddedInstance) this.arrayObject.push(control.modelInstance);else this.arrayObject[this.arrayObject.length] = control.modelInstance;
          }

          _get(_getPrototypeOf(RxFormArray.prototype), "push", this).call(this, control);

          if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
          this.patch();
          this.checkValidation();
        }
      }, {
        key: "patch",
        value: function patch() {
          this.checkModification();
          if (this.parent) this.parent[PATCH]();
        }
      }, {
        key: "resetForm",
        value: function resetForm(options) {
          if (options && options.index >= 0 && options.groupOption) {
            this.controls[options.index].resetForm(options.groupOption);
          } else {
            for (var i = 0; i < this._baseValue.length; i++) {
              if (this.controls[i] !== undefined) this.controls[i].resetForm({
                value: this._baseValue[i]
              });else if (options && options.pushFunction) {
                var formGroup = options.pushFunction(this._baseValue[i]);
                this.push(formGroup);
              }
            }
          }
        }
      }, {
        key: "commit",
        value: function commit() {
          this._baseValue = [];

          var _iterator9 = _createForOfIteratorHelper(this.controls),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var formGroup = _step9.value;
              formGroup.commit();

              this._baseValue.push(clone(formGroup.value));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          this.patch();
        }
      }, {
        key: "removeAt",
        value: function removeAt(index) {
          var isRemovedInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var formGroup = this.root;
          if (!isRemovedInstance) this.arrayObject.splice(index, 1);else {
            for (var i = index; i < this.arrayObject.length - 1; i++) {
              this.arrayObject[i] = this.arrayObject[i + 1];
            }

            this.arrayObject.pop();
          }

          _get(_getPrototypeOf(RxFormArray.prototype), "removeAt", this).call(this, index);

          if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
          this.patch();
          this.checkValidation();
        }
      }, {
        key: "checkValidation",
        value: function checkValidation() {
          var _this5 = this;

          setTimeout(function () {
            if (_this5.arrayConfig != undefined && _this5.arrayConfig.allowMaxIndex && _this5.length > _this5.arrayConfig.allowMaxIndex) _this5.setErrors(ObjectMaker.toJson(PROP_ARRAY, _this5.arrayConfig, [_this5.length, _this5.arrayConfig.allowMaxIndex]));else if (_this5.errors && _this5.errors[PROP_ARRAY]) delete _this5.errors[PROP_ARRAY];
          });
        }
      }, {
        key: "checkModification",
        value: function checkModification() {
          this._isModified = !(this._baseValue.length == this.controls.length);
          if (!this._isModified) for (var i = 0; i < this.controls.length; i++) {
            this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
            if (this._isModified) break;
          }
        }
      }, {
        key: "cloneObject",
        value: function cloneObject(value) {
          this._baseValue = [];

          var _iterator10 = _createForOfIteratorHelper(value),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var row = _step10.value;

              this._baseValue.push(clone(row));
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }, {
        key: "isModified",
        get: function get() {
          return this._isModified;
        }
      }]);

      return RxFormArray;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]);

    var NumericValueType;

    (function (NumericValueType) {
      NumericValueType[NumericValueType["PositiveNumber"] = 1] = "PositiveNumber";
      NumericValueType[NumericValueType["NegativeNumber"] = 2] = "NegativeNumber";
      NumericValueType[NumericValueType["Both"] = 3] = "Both";
    })(NumericValueType || (NumericValueType = {}));

    var IpVersion;

    (function (IpVersion) {
      IpVersion[IpVersion["V4"] = 1] = "V4";
      IpVersion[IpVersion["V6"] = 2] = "V6";
      IpVersion[IpVersion["AnyOne"] = 3] = "AnyOne";
    })(IpVersion || (IpVersion = {}));

    var ErrorMessageBindingStrategy;

    (function (ErrorMessageBindingStrategy) {
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["None"] = 0] = "None";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnSubmit"] = 1] = "OnSubmit";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirty"] = 2] = "OnDirty";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouched"] = 3] = "OnTouched";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrTouched"] = 4] = "OnDirtyOrTouched";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrSubmit"] = 5] = "OnDirtyOrSubmit";
      ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouchedOrSubmit"] = 6] = "OnTouchedOrSubmit";
    })(ErrorMessageBindingStrategy || (ErrorMessageBindingStrategy = {}));

    var ResetFormType;

    (function (ResetFormType) {
      ResetFormType[ResetFormType["ControlsOnly"] = 1] = "ControlsOnly";
      ResetFormType[ResetFormType["FormGroupsOnly"] = 2] = "FormGroupsOnly";
      ResetFormType[ResetFormType["FormArraysOnly"] = 3] = "FormArraysOnly";
      ResetFormType[ResetFormType["ControlsAndFormGroupsOnly"] = 4] = "ControlsAndFormGroupsOnly";
      ResetFormType[ResetFormType["DefinedPropsOnly"] = 5] = "DefinedPropsOnly";
      ResetFormType[ResetFormType["All"] = 6] = "All";
    })(ResetFormType || (ResetFormType = {}));

    var MODEL_INSTANCE_VALUE = "modelInstanceValue";

    var ApplicationUtil = /*#__PURE__*/function () {
      function ApplicationUtil() {
        _classCallCheck(this, ApplicationUtil);
      }

      _createClass(ApplicationUtil, null, [{
        key: "getParentObjectValue",
        value: function getParentObjectValue(control) {
          if (control.parent) {
            var parent = this.parentObjectValue(control.parent);
            return parent.value;
          }

          return {};
        }
      }, {
        key: "getParentModelInstanceValue",
        value: function getParentModelInstanceValue(control) {
          if (control.parent) {
            var parent = this.parentObjectValue(control.parent);
            return parent[MODEL_INSTANCE_VALUE];
          }

          return {};
        }
      }, {
        key: "getRootFormGroup",
        value: function getRootFormGroup(control) {
          if (control.parent) {
            return this.getRootFormGroup(control.parent);
          }

          return control;
        }
      }, {
        key: "getParentControl",
        value: function getParentControl(control) {
          if (control.parent) {
            var parent = this.parentObjectValue(control.parent);
            return parent;
          }

          return control;
        }
      }, {
        key: "getFormControlName",
        value: function getFormControlName(control) {
          var controlName = '';

          if (control.parent) {
            for (var formControlName in control.parent.controls) {
              if (control.parent.controls[formControlName] == control) {
                controlName = formControlName;
                break;
              }
            }
          }

          return controlName;
        }
      }, {
        key: "getParentFormArray",
        value: function getParentFormArray(control) {
          if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || control.parent instanceof RxFormArray)) {
            var parent = this.getParentFormArray(control.parent);
            return parent;
          }

          return control.parent;
        }
      }, {
        key: "toLower",
        value: function toLower(value) {
          if (value) return String(value).toLowerCase();
          return value;
        }
      }, {
        key: "getControl",
        value: function getControl(fieldName, formGroup) {
          var splitText = fieldName.split('.');

          if (splitText.length > 1) {
            var formControl = formGroup;
            splitText.forEach(function (name, index) {
              formControl = formControl.controls[name];
            });
            return formControl;
          } else return formGroup.controls[fieldName];
        }
      }, {
        key: "getFormControl",
        value: function getFormControl(fieldName, control) {
          var splitText = fieldName.split('.');

          if (splitText.length > 1 && control.parent) {
            var formControl = this.getParentControl(control);
            splitText.forEach(function (name, index) {
              formControl = formControl.controls[name];
            });
            return formControl;
          }

          return control.parent ? control.parent.get([fieldName]) : undefined;
        }
      }, {
        key: "parentObjectValue",
        value: function parentObjectValue(control) {
          if (!control.parent) return control;else control = this.parentObjectValue(control.parent);
          return control;
        }
      }, {
        key: "isNumeric",
        value: function isNumeric(value) {
          return value - parseFloat(value) + 1 >= 0;
        }
      }, {
        key: "notEqualTo",
        value: function notEqualTo(primaryValue, secondaryValue) {
          var firstValue = primaryValue === undefined || primaryValue === null ? "" : primaryValue;
          var secondValue = secondaryValue === undefined || secondaryValue === null ? "" : secondaryValue;
          if (firstValue instanceof Date && secondValue instanceof Date) return +firstValue != +secondValue;
          return firstValue != secondValue;
        }
      }, {
        key: "numericValidation",
        value: function numericValidation(allowDecimal, acceptValue) {
          var decimalSymbol;

          if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
          } else {
            decimalSymbol = ".";
          }

          acceptValue = acceptValue == undefined ? NumericValueType.PositiveNumber : acceptValue;
          var regex = /^[0-9]+$/;

          switch (acceptValue) {
            case NumericValueType.PositiveNumber:
              regex = !allowDecimal ? /^[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
              break;

            case NumericValueType.NegativeNumber:
              regex = !allowDecimal ? /^[-][0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
              break;

            case NumericValueType.Both:
              regex = !allowDecimal ? /^[-|+]?[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
              break;
          }

          return regex;
        }
      }, {
        key: "configureControl",
        value: function configureControl(control, config, type) {
          if (!control.validatorConfig) {
            var jObject = {};
            jObject[type] = config;
            Object.assign(control, {
              validatorConfig: jObject
            });
          } else control.validatorConfig[type] = config;
        }
      }, {
        key: "lowerCaseWithTrim",
        value: function lowerCaseWithTrim(value) {
          return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
        }
        /** Check if a value is an object */

      }, {
        key: "isObject",
        value: function isObject(value) {
          return Object.prototype.toString.call(value) === '[object Object]';
        }
        /** Check if a value is an object */

      }, {
        key: "isArray",
        value: function isArray(value) {
          return Array.isArray(value);
        }
      }, {
        key: "cloneValue",
        value: function cloneValue(value) {
          return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? _toConsumableArray(value) : Object.assign({}, value) : value;
        }
      }]);

      return ApplicationUtil;
    }();

    var ISO_DATE_REGEX = /^(\d{4}-\d{1,2}-\d{1,2})$/;

    var DateProvider = /*#__PURE__*/function () {
      function DateProvider() {
        _classCallCheck(this, DateProvider);
      }

      _createClass(DateProvider, [{
        key: "isDate",
        value: function isDate(value) {
          return value instanceof Date && !isNaN(value.valueOf());
        }
      }, {
        key: "getRegex",
        value: function getRegex(dateFormat) {
          var regExp;

          switch (dateFormat) {
            case 'ymd':
              regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
              break;

            case 'dmy':
              regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
              break;

            case 'mdy':
              regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
              break;
          }

          return new RegExp(regExp);
        }
      }, {
        key: "regex",
        value: function regex() {
          var regExp;
          if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) regExp = this.getRegex(ReactiveFormConfig.json.internationalization.dateFormat);else regExp = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? this.getRegex(ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex("mdy");
          return regExp;
        }
      }, {
        key: "getDate",
        value: function getDate(value) {
          var isBaseFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var year, month, day;

          if (!this.isDate(value)) {
            var seperator;
            var dateFormat;

            if (ISO_DATE_REGEX.test(value)) {
              seperator = "-";
              dateFormat = "ymd";
            } else {
              seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
              dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
            }

            if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
              seperator = ReactiveFormConfig.json.internationalization.seperator;
              dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
            }

            switch (dateFormat) {
              case 'ymd':
                var _value$split$map = value.split(seperator).map(function (val) {
                  return +val;
                });

                var _value$split$map2 = _slicedToArray(_value$split$map, 3);

                year = _value$split$map2[0];
                month = _value$split$map2[1];
                day = _value$split$map2[2];
                break;

              case 'dmy':
                var _value$split$map3 = value.split(seperator).map(function (val) {
                  return +val;
                });

                var _value$split$map4 = _slicedToArray(_value$split$map3, 3);

                day = _value$split$map4[0];
                month = _value$split$map4[1];
                year = _value$split$map4[2];
                break;

              case 'mdy':
                var _value$split$map5 = value.split(seperator).map(function (val) {
                  return +val;
                });

                var _value$split$map6 = _slicedToArray(_value$split$map5, 3);

                month = _value$split$map6[0];
                day = _value$split$map6[1];
                year = _value$split$map6[2];
                break;
            }

            return new Date(year, month - 1, day);
          } else return value;
        }
      }, {
        key: "isValid",
        value: function isValid(value, config) {
          if (typeof value == "string") {
            // Fixed issue : https://github.com/rxweb/rxweb/issues/280 & feature request : https://github.com/rxweb/rxweb/issues/295
            if (config && config.allowISODate && ISO_DATE_REGEX.test(value)) return true;
            var seperator = '/';
            if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator) seperator = ReactiveFormConfig.json.internationalization.seperator;
            value = value.replace(seperator, '-').replace(seperator, '-');
            return this.regex().test(value);
          } else return this.isDate(value);
        }
      }, {
        key: "getConfigDateValue",
        value: function getConfigDateValue(config) {
          var date = config.value;

          if (config.value && typeof config.value == "string") {
            date = this.getDate(config.value, true);
          }

          return date;
        }
      }, {
        key: "getCompareDate",
        value: function getCompareDate(config, control) {
          var date = this.getConfigDateValue(config);

          if (config.fieldName) {
            var checkControl = ApplicationUtil.getFormControl(config.fieldName, control);

            if (checkControl && checkControl.value) {
              date = this.getDate(checkControl.value);
            }
          }

          return date;
        }
      }]);

      return DateProvider;
    }();

    function isNotBlank(value) {
      return value !== undefined && value !== null && value !== "";
    }

    function trim(value) {
      if (isNotBlank(value)) if (typeof value === "string") return value.trim();
      return value;
    }

    function ltrim(value) {
      if (isNotBlank(value)) if (typeof value === "string") return value.replace(/^\s+/g, '');
      return value;
    }

    function rtrim(value) {
      if (isNotBlank(value)) if (typeof value === "string") return value.replace(/\s+$/g, '');
      return value;
    }

    function blacklist(value, chars) {
      if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
      return value;
    }

    function stripLow(value, keepNewLines) {
      var chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
      return blacklist(value, chars);
    }

    function toBoolean(value, strict) {
      if (isNotBlank(value)) {
        if (strict) {
          return value === '1' || value === 'true';
        }

        return value !== '0' && value !== 'false' && value !== '';
      }

      return value;
    }

    function toFloat(value) {
      if (isNotBlank(value)) {
        var decimalSymbol = '.';

        if (ReactiveFormConfig && ReactiveFormConfig.number) {
          decimalSymbol = ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }

        if (decimalSymbol == ',' && typeof value == "string") value = value.replace(',', '.');
        if (ApplicationUtil.isNumeric(value)) return parseFloat(value);
      }

      return null;
    }

    function toDouble(value) {
      return toFloat(value);
    }

    function toInt(value, radix) {
      if (isNotBlank(value)) if (ApplicationUtil.isNumeric(value)) return parseInt(value, radix || 10);
      return null;
    }

    function toString(value, radix) {
      if (isNotBlank(value)) return String(value);
      return value;
    }

    function whitelist(value, chars) {
      if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
      return value;
    }

    function toDate(value) {
      var dateProvider = new DateProvider();
      if (isNotBlank(value)) if (typeof value === "string" && dateProvider.isValid(value, {})) {
        value = dateProvider.getDate(value);
        return value;
      }
      return null;
    }

    function escape(value) {
      if (isNotBlank(value)) return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
      return value;
    }

    function prefix(value, text) {
      if (isNotBlank(value)) return "".concat(text).concat(value);
      return value;
    }

    function suffix(value, text) {
      if (isNotBlank(value)) return "".concat(value).concat(text);
      return value;
    }

    function sanitize(value, config) {
      return config.custom(value);
    }

    var SANITIZERS = {
      trim: trim,
      ltrim: ltrim,
      rtrim: rtrim,
      blacklist: blacklist,
      stripLow: stripLow,
      toBoolean: toBoolean,
      toDouble: toDouble,
      toFloat: toFloat,
      toInt: toInt,
      'toString': toString,
      whitelist: whitelist,
      toDate: toDate,
      escape: escape,
      prefix: prefix,
      suffix: suffix,
      sanitize: sanitize
    };

    function instanceProvider(instanceFunc, entityObject) {
      var instance = defaultContainer.get(instanceFunc);
      var prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;

      if (prototype.__proto__) {
        var isLoop = false;

        do {
          isLoop = prototype.__proto__.constructor != Object;

          if (isLoop) {
            var extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
            instance = merge(clone(instance), clone(extendClassInstance));
            prototype = prototype.__proto__;
          }
        } while (isLoop);
      }

      return instance;
    }

    function getInstance(model, objectArguments) {
      var classInstance = Object.create(model.prototype);

      try {
        model.apply(classInstance, objectArguments);
      } catch (ex) {
        ///resolution of issue https://github.com/rxweb/rxweb/issues/188
        classInstance = Reflect.construct(model, objectArguments);
      }

      return classInstance;
    }

    var BaseFormBuilder = /*#__PURE__*/function () {
      function BaseFormBuilder() {
        _classCallCheck(this, BaseFormBuilder);
      }

      _createClass(BaseFormBuilder, [{
        key: "createInstance",
        value: function createInstance() {
          var instance = {};
          defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
          var modelName = "RxWebModel".concat(defaultContainer.modelIncrementCount);
          instance.constructor = Function("\"use strict\";return(function ".concat(modelName, "(){ })"))();
          return instance;
        }
      }, {
        key: "createClassObject",
        value: function createClassObject(model, formBuilderConfiguration, classInstance) {
          var _this6 = this;

          var instanceContainer = defaultContainer.get(model);
          var autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;

          if (!autoInstanceConfig) {
            return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
          } else {
            classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);

            if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
              autoInstanceConfig.objectPropInstanceConfig.forEach(function (t) {
                var objectProperty = instanceContainer.properties.filter(function (property) {
                  return property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY;
                })[0];

                if (objectProperty) {
                  var data = classInstance[t.propertyName];
                  classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
                  if (data) _this6.setObjectValue(data, classInstance[t.propertyName]);
                }
              });
            }

            if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
              autoInstanceConfig.arrayPropInstanceConfig.forEach(function (t) {
                var property = instanceContainer.properties.filter(function (property) {
                  return property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY;
                })[0];

                if (property) {
                  var data = classInstance[t.propertyName];
                  classInstance[t.propertyName] = [];

                  for (var i = 0; i < t.rowItems; i++) {
                    var instance = getInstance(property.entity, t.arguments || []);
                    if (data && data[i]) _this6.setObjectValue(data[i], instance);
                    classInstance[t.propertyName].push(instance);
                  }
                }
              });
            }

            return classInstance;
          }
        }
      }, {
        key: "updateObject",
        value: function updateObject(model, entityObject, formBuilderConfiguration) {
          var _this7 = this;

          var instanceContainer = instanceProvider(model);
          var classInstance = getInstance(model, []);

          if (instanceContainer) {
            instanceContainer.properties.forEach(function (t) {
              var entity = (t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity ? t.entity : formBuilderConfiguration && formBuilderConfiguration.genericEntities ? formBuilderConfiguration.genericEntities[t.name] : undefined;
              if (!entity && t.entityProvider) entity = t.entityProvider.call(entityObject);

              switch (t.propertyType) {
                case PROPERTY:
                  classInstance[t.name] = _this7.getValue(entityObject, t, formBuilderConfiguration);
                  break;

                case OBJECT_PROPERTY:
                  var objectValue = _this7.getValue(entityObject, t, formBuilderConfiguration);

                  if (objectValue) classInstance[t.name] = _this7.updateObject(entity, objectValue, formBuilderConfiguration);
                  break;

                case ARRAY_PROPERTY:
                  var arrayObjectValue = _this7.getValue(entityObject, t, formBuilderConfiguration);

                  if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
                    classInstance[t.name] = [];

                    var _iterator11 = _createForOfIteratorHelper(arrayObjectValue),
                        _step11;

                    try {
                      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                        var row = _step11.value;

                        var instanceObject = _this7.updateObject(entity, row, formBuilderConfiguration);

                        classInstance[t.name].push(instanceObject);
                      }
                    } catch (err) {
                      _iterator11.e(err);
                    } finally {
                      _iterator11.f();
                    }
                  }

                  break;
              }
            });
          }

          return classInstance;
        }
      }, {
        key: "instaceProvider",
        value: function instaceProvider(instanceFunc, entityObject) {
          return instanceProvider(instanceFunc, entityObject);
        }
      }, {
        key: "getDefaultValue",
        value: function getDefaultValue(propertyInfo, value, formBuilderConfiguration) {
          var defaultValue = formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value) ? propertyInfo.defaultValue : value;
          return defaultValue;
        }
      }, {
        key: "sanitizeValue",
        value: function sanitizeValue(instanceContainer, propertyName, value, entityObject, baseObject) {
          if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
            var _iterator12 = _createForOfIteratorHelper(instanceContainer.sanitizers[propertyName]),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var sanitizer = _step12.value;
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value) entityObject[propertyName] = value;
          if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value) baseObject[propertyName] = value;
          return value;
        }
      }, {
        key: "getValue",
        value: function getValue(entityObject, propertyInfo, formBuilderConfiguration) {
          var propValue = propertyInfo.dataPropertyName ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
          return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
        }
      }, {
        key: "setObjectValue",
        value: function setObjectValue(entityObject, classInstance) {
          for (var column in entityObject) {
            classInstance[column] = entityObject[column];
          }
        }
      }]);

      return BaseFormBuilder;
    }();

    var FormBuilderConfiguration = function FormBuilderConfiguration(formBuilderConfiguration) {
      _classCallCheck(this, FormBuilderConfiguration);

      if (formBuilderConfiguration) for (var column in formBuilderConfiguration) {
        this[column] = formBuilderConfiguration[column];
      }
    };

    var DisableProvider = /*#__PURE__*/function () {
      function DisableProvider(decoratorType, entityObject) {
        _classCallCheck(this, DisableProvider);

        this.decoratorType = decoratorType;
        this.entityObject = entityObject;
      }

      _createClass(DisableProvider, [{
        key: "getFormGroupName",
        value: function getFormGroupName(currentFormGroup) {
          var keyName = '';
          if (currentFormGroup.parent) for (var _i2 = 0, _Object$keys = Object.keys(currentFormGroup.parent.controls); _i2 < _Object$keys.length; _i2++) {
            var controlName = _Object$keys[_i2];

            if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
              keyName = controlName;
              break;
            }
          }
          return keyName;
        }
      }, {
        key: "zeroArgumentProcess",
        value: function zeroArgumentProcess(control, columnName) {
          var disabledColumns = [];
          this.getDisabledColumns(control.parent, "".concat(columnName).concat(RXCODE, "0"), false).forEach(function (t) {
            return disabledColumns.push(t);
          });
          var path = this.topControlPath(control, columnName);
          var splitPath = path.split(".");

          if (splitPath.length > 1) {
            var rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            this.getDisabledColumns(rootFormGroup, "".concat(path).concat(RXCODE, "0"), true).forEach(function (t) {
              return disabledColumns.push(t);
            });
            var controlPath = '';

            for (var i = 0; i < splitPath.length - 2; i++) {
              var controlName = splitPath[i];
              controlPath = "".concat(path.replace("".concat(controlName, "."), '')).concat(RXCODE, "-0");

              if (rootFormGroup.controls[controlName]) {
                this.getDisabledColumns(rootFormGroup.controls[controlName], controlPath, true, controlName).forEach(function (t) {
                  return disabledColumns.push(t);
                });
                rootFormGroup = rootFormGroup.controls[controlName];
              }
            }
          }

          return disabledColumns;
        }
      }, {
        key: "getDisabledColumns",
        value: function getDisabledColumns(formGroup, columnName, isRoot) {
          var pathName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

          if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
            return this.getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName);
          }

          return [];
        }
      }, {
        key: "getChangeDetectionColumns",
        value: function getChangeDetectionColumns(instanceContainer, columnName, isRoot) {
          var _this8 = this;

          var pathName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
          var conditionalDisableControls = [];
          var columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];

          if (columns) {
            columns.forEach(function (t) {
              conditionalDisableControls.push({
                controlPath: pathName ? "".concat(pathName, ".").concat(t) : t,
                conditionalExpression: instanceContainer.nonValidationDecorators[_this8.decoratorType].conditionalExpressions[t],
                isRoot: isRoot
              });
            });
          }

          return conditionalDisableControls;
        }
      }, {
        key: "topControlPath",
        value: function topControlPath(control, columnName) {
          if (control.parent) {
            var name = this.getFormGroupName(control.parent);

            if (name) {
              columnName = "".concat(name, ".").concat(columnName);
              return this.topControlPath(control.parent, columnName);
            }
          }

          return columnName;
        }
      }, {
        key: "childControlDisabledExpression",
        value: function childControlDisabledExpression(formGroup, columnName) {
          var _this9 = this;

          var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          var disabledColumns = [];

          if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);

            if (instanceContainer) {
              this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(function (t) {
                return disabledColumns.push(t);
              });
              var props = instanceContainer.properties.filter(function (t) {
                return t.propertyType == OBJECT_PROPERTY;
              });
              props.forEach(function (t) {
                if (formGroup.controls[t.name]) {
                  var columns = _this9.getDisabledColumns(formGroup.controls[t.name], columnName, true, path ? "".concat(path, ".").concat(t.name) : "".concat(t.name));

                  columns.forEach(function (x) {
                    return disabledColumns.push(x);
                  });

                  _this9.childControlDisabledExpression(formGroup.controls[t.name], columnName, path ? "".concat(path, ".").concat(t.name) : "".concat(t.name)).forEach(function (y) {
                    return disabledColumns.push(y);
                  });
                }
              });
            }
          }

          return disabledColumns;
        }
      }, {
        key: "oneArgumentProcess",
        value: function oneArgumentProcess(control, columnName) {
          var path = this.topControlPath(control, columnName);
          var rootFormGroup = ApplicationUtil.getRootFormGroup(control);
          var childColumns = this.childControlDisabledExpression(rootFormGroup, path);
          return childColumns;
        }
      }]);

      return DisableProvider;
    }();

    var DIRTY = "dirty";
    var TOUCHED = "touched";
    var UNTOUCHED = "untouched";
    var PRISTINE = "pristine";
    var PENDING = "pending";

    var RxFormControl = /*#__PURE__*/function (_angular_forms__WEBPA2) {
      _inherits(RxFormControl, _angular_forms__WEBPA2);

      var _super2 = _createSuper(RxFormControl);

      function RxFormControl(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
        var _thisSuper, _this10;

        _classCallCheck(this, RxFormControl);

        _this10 = _super2.call(this, formState, validator, asyncValidator);
        _this10.entityObject = entityObject;
        _this10.baseObject = baseObject;
        _this10._sanitizers = _sanitizers;
        _this10._errorMessages = [];
        _this10._childColumns = [];
        _this10._refDisableControls = [];
        _this10._refMessageControls = [];
        _this10._refClassNameControls = [];
        _this10._isPassedExpression = false;
        _this10._dirty = false;
        _this10._baseValue = formState === undefined ? null : _this10.getFormState(formState);
        _this10._isModified = false;
        _this10.keyName = controlName;
        _this10._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");

        if (_this10._sanitizers) {
          var floatSanitizer = _this10._sanitizers.filter(function (t) {
            return t.name == "toFloat";
          })[0];

          if (floatSanitizer && _this10._baseValue && ReactiveFormConfig.number && ReactiveFormConfig.number.decimalSymbol == ",") {
            var baseValue = String(_this10._baseValue);

            if (baseValue.indexOf('.') != -1) {
              _this10._baseValue = baseValue.replace(".", ReactiveFormConfig.number.decimalSymbol);

              _get((_thisSuper = _assertThisInitialized(_this10), _getPrototypeOf(RxFormControl.prototype)), "setValue", _thisSuper).call(_thisSuper, _this10._baseValue);
            }
          }
        }

        return _this10;
      }

      _createClass(RxFormControl, [{
        key: "getFormState",
        value: function getFormState(value) {
          var baseValue = value;

          if (Array.isArray(value)) {
            baseValue = [];
            value.forEach(function (t) {
              return baseValue.push(t);
            });
          }

          return baseValue;
        }
      }, {
        key: "setValue",
        value: function setValue(value, options) {
          var parsedValue = this.getSanitizedValue(value);
          if (options && options.dirty) this.baseObject[this.keyName] = value;
          this.entityObject[this.keyName] = parsedValue;

          _get(_getPrototypeOf(RxFormControl.prototype), "setValue", this).call(this, value, options);

          this.bindError();
          this.bindClassName();
          this.executeExpressions();
          this.callPatch();

          if (options && !options.updateChanged && this.root[VALUE_CHANGED_SYNC]) {
            this.root[VALUE_CHANGED_SYNC]();
          }
        }
      }, {
        key: "getControlValue",
        value: function getControlValue() {
          return this.getSanitizedValue(this.value);
        }
      }, {
        key: "bindError",
        value: function bindError() {
          if (this._messageExpression) this._isPassedExpression = this.executeExpression(this._messageExpression, this);
          this.setControlErrorMessages();
          this.errors = this.errors;
        }
      }, {
        key: "bindClassName",
        value: function bindClassName() {
          if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
            var className = this.executeExpression(this._classNameExpression, this);
            var updateElement = this.updateOnElementClass;
            updateElement(className);
          }
        }
      }, {
        key: "markAsTouched",
        value: function markAsTouched(opts) {
          var currentState = this.touched;

          _get(_getPrototypeOf(RxFormControl.prototype), "markAsTouched", this).call(this, opts);

          if (currentState != this.touched) this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
        }
      }, {
        key: "markAsUntouched",
        value: function markAsUntouched(opts) {
          var currentState = this.untouched;

          _get(_getPrototypeOf(RxFormControl.prototype), "markAsUntouched", this).call(this, opts);

          if (currentState != this.untouched) this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
        }
      }, {
        key: "markAsDirty",
        value: function markAsDirty(opts) {
          var currentState = this.dirty;

          _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

          this.dirty = true;
          if (currentState != this.dirty) this.runControlPropChangeExpression([DIRTY]);
        }
      }, {
        key: "markAsPristine",
        value: function markAsPristine(opts) {
          var currentState = this.pristine;

          _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

          if (currentState != this.pristine) this.runControlPropChangeExpression([PRISTINE]);
        }
      }, {
        key: "markAsPending",
        value: function markAsPending(opts) {
          var currentState = this.pending;

          _get(_getPrototypeOf(RxFormControl.prototype), "markAsDirty", this).call(this, opts);

          if (currentState != this.pending) this.runControlPropChangeExpression([PENDING]);
        }
      }, {
        key: "runControlPropChangeExpression",
        value: function runControlPropChangeExpression(propNames) {
          var _this11 = this;

          propNames.forEach(function (name) {
            if (_this11._controlProp && _this11._messageExpression && _this11._controlProp[name] || !_this11._messageExpression && _this11.checkErrorMessageStrategy()) _this11.bindError();
            if (_this11._classNameControlProp && _this11._classNameControlProp[name]) _this11.bindClassName();
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.getMessageExpression(this.parent, this.keyName);
          this.bindConditionalControls(DECORATORS.disabled, "_refDisableControls");
          this.bindConditionalControls(DECORATORS.error, "_refMessageControls");
          this.bindConditionalControls(DECORATORS.elementClass, "_refClassNameControls");
          this.executeExpressions();
          this.bindError();
        }
      }, {
        key: "reset",
        value: function reset(value) {
          if (value !== undefined) this.setValue(value);else this.setValue(this.getFormState(this._baseValue));
          this.dirty = false;
        }
      }, {
        key: "commit",
        value: function commit() {
          this._baseValue = this.value;
          this.callPatch();
        }
      }, {
        key: "callPatch",
        value: function callPatch() {
          this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
          if (this.parent && this.parent[PATCH]) this.parent[PATCH](this.keyName);
        }
      }, {
        key: "checkErrorMessageStrategy",
        value: function checkErrorMessageStrategy() {
          var isBind = true;

          switch (this._errorMessageBindingStrategy) {
            case ErrorMessageBindingStrategy.OnSubmit:
              isBind = this.parent.submitted;
              break;

            case ErrorMessageBindingStrategy.OnDirty:
              isBind = this.dirty;
              break;

            case ErrorMessageBindingStrategy.OnTouched:
              isBind = this.touched;
              break;

            case ErrorMessageBindingStrategy.OnDirtyOrTouched:
              isBind = this.dirty || this.touched;
              break;

            case ErrorMessageBindingStrategy.OnDirtyOrSubmit:
              isBind = this.dirty || this.parent.submitted;
              break;

            case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
              isBind = this.touched || this.parent.submitted;
              break;

            default:
              isBind = true;
          }

          return isBind;
        }
      }, {
        key: "executeExpressions",
        value: function executeExpressions() {
          this.processExpression("_refDisableControls", "disabled");
          this.processExpression("_refMessageControls", "bindError");
          this.processExpression("_refClassNameControls", "bindClassName");
        }
      }, {
        key: "getMessageExpression",
        value: function getMessageExpression(formGroup, keyName) {
          if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);

            if (instanceContainer) {
              this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
              this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
              this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
              this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
              if (this._classNameExpression) this.updateOnElementClass = true;
            }
          }
        }
      }, {
        key: "getSanitizedValue",
        value: function getSanitizedValue(value) {
          if (this._sanitizers) {
            var _iterator13 = _createForOfIteratorHelper(this._sanitizers),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var sanitizer = _step13.value;
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          return value;
        }
      }, {
        key: "bindConditionalControls",
        value: function bindConditionalControls(decoratorType, refName) {
          var _this12 = this;

          this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
          this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);

          this._disableProvider.oneArgumentProcess(this, "".concat(this.keyName).concat(RXCODE, "1")).forEach(function (t) {
            return _this12[refName].push(t);
          });
        }
      }, {
        key: "setControlErrorMessages",
        value: function setControlErrorMessages() {
          var _this13 = this;

          if (!this._messageExpression && this.checkErrorMessageStrategy() || this._isPassedExpression) {
            this._errorMessages = [];

            if (this.errors) {
              Object.keys(this.errors).forEach(function (t) {
                if (_this13.parent) {
                  _this13.parent[CONTROLS_ERROR][_this13.keyName] = _this13._errorMessage = _this13.getErrorMessage(_this13.errors, t);

                  if (!_this13._errorMessage) {
                    var errorObject = ObjectMaker.toJson(t, undefined, [_this13.errors[t][t]]);
                    _this13.parent[CONTROLS_ERROR][_this13.keyName] = _this13._errorMessage = _this13.getErrorMessage(errorObject, t);
                  }
                } else _this13._errorMessage = _this13.getErrorMessage(_this13.errors, t);

                _this13._errorMessages.push(_this13._errorMessage);
              });
            } else {
              this._errorMessage = undefined;

              if (this.parent) {
                this.parent[CONTROLS_ERROR][this.keyName] = undefined;
                delete this.parent[CONTROLS_ERROR][this.keyName];
              }
            }
          } else {
            this._errorMessages = [];
            this._errorMessage = undefined;
          }
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(errorObject, keyName) {
          if (errorObject[keyName][MESSAGE]) return errorObject[keyName][MESSAGE];
          return;
        }
      }, {
        key: "processExpression",
        value: function processExpression(propName, operationType) {
          if (this[propName]) {
            var _iterator14 = _createForOfIteratorHelper(this[propName]),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var controlInfo = _step14.value;
                var control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);

                if (control) {
                  if (operationType == "disabled") {
                    var result = this.executeExpression(controlInfo.conditionalExpression, control);
                    if (result) control.disable();else control.enable();
                  } else if (operationType == "bindError") control.bindError();else if (operationType == "bindClassName") control.bindClassName();
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }
      }, {
        key: "executeExpression",
        value: function executeExpression(expression, control) {
          return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
        }
      }, {
        key: "getValue",
        value: function getValue(value) {
          return value !== undefined && value !== null && value !== "" ? value : "";
        }
      }, {
        key: "errors",
        get: function get() {
          return this._errors;
        },
        set: function set(value) {
          this._errors = value;
        }
      }, {
        key: "errorMessages",
        get: function get() {
          if (!this._messageExpression) {
            if (this._errorMessages.length == 0 && this.errors) this.setControlErrorMessages();
          } else if (this._messageExpression && !this._isPassedExpression) return [];

          if (!this.errors && this._errorMessages.length > 0) this.setControlErrorMessages();
          return this._errorMessages;
        }
      }, {
        key: "errorMessage",
        get: function get() {
          if (!this._messageExpression) {
            if (this._errorMessage == undefined && this.errors) this.setControlErrorMessages();
          } else if (this._messageExpression && !this._isPassedExpression) return undefined;

          if (!this.errors && this._errorMessage) this.setControlErrorMessages();
          return this._errorMessage;
        }
      }, {
        key: "isModified",
        get: function get() {
          return this._isModified;
        }
      }, {
        key: "dirty",
        get: function get() {
          return this._dirty;
        },
        set: function set(value) {
          this._dirty = value;
        }
      }]);

      return RxFormControl;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]);

    var OBJECT = "object";
    var BOOLEAN$1 = "boolean";

    var FormDataProvider = /*#__PURE__*/function () {
      function FormDataProvider() {
        _classCallCheck(this, FormDataProvider);
      }

      _createClass(FormDataProvider, [{
        key: "convertToFormData",
        value: function convertToFormData(jObject) {
          return this.convertFormData(jObject);
        }
      }, {
        key: "convertFormData",
        value: function convertFormData(jObject, currentFormData, parentKey) {
          var _this14 = this;

          var formData = currentFormData || new FormData();
          var propName = '';

          for (var columnName in jObject) {
            propName = !parentKey ? columnName : "".concat(parentKey, "[").concat(columnName, "]");

            if (Array.isArray(jObject[columnName])) {
              jObject[columnName].forEach(function (row, index) {
                propName = "".concat(columnName, "[").concat(index, "]");
                if (typeof row === OBJECT) _this14.convertFormData(row, formData, propName);else _this14.nonObjectValueBind(row, formData, propName);
              });
            } else if (jObject[columnName] !== null && !(jObject[columnName] instanceof Date) && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
              this.convertFormData(jObject[columnName], formData, propName);
            } else {
              this.nonObjectValueBind(jObject[columnName], formData, propName);
            }
          }

          return formData;
        }
      }, {
        key: "nonObjectValueBind",
        value: function nonObjectValueBind(value, formData, propName) {
          if (typeof value === BOOLEAN$1) {
            var formValue = value ? true : false;
            formData.append(propName, formValue);
          } else if (value instanceof FileList) {
            for (var i = 0; i < value.length; i++) {
              formData.append("".concat(propName, "[").concat(i, "]"), value.item(i));
            }
          } else {
            if (RegexValidator.isNotBlank(value)) formData.append(propName, value);
          }
        }
      }]);

      return FormDataProvider;
    }();

    function isResetControl(controlName, control, options) {
      var isReset = true;

      if (options) {
        isReset = false;
        if (options.resetType) switch (options.resetType) {
          case ResetFormType.ControlsOnly:
            isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"];
            break;

          case ResetFormType.ControlsAndFormGroupsOnly:
            isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
            break;

          case ResetFormType.FormGroupsOnly:
            isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
            break;

          case ResetFormType.FormArraysOnly:
            isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"];
            break;

          case ResetFormType.DefinedPropsOnly:
            isReset = options.value ? Object.keys(options.value).indexOf(controlName) != -1 : false;
            break;

          default:
            isReset = true;
            break;
        }
        if (!isReset && options["with"]) isReset = options["with"].filter(function (x) {
          return x.split('.')[0] == controlName.split('.')[0];
        })[0] !== undefined;
        if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly)) isReset = true;
      }

      return isReset;
    }

    function getNestedOptions(controlName, options) {
      if (options) {
        var jObjectOptions = {};
        if (options.resetType) jObjectOptions.resetType = options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly ? ResetFormType.ControlsOnly : options.resetType;

        if (options["with"]) {
          var nestedControls = options["with"].filter(function (t) {
            return t.split('.')[0] == controlName;
          });
          var controlNames = nestedControls.map(function (x) {
            var splitControls = x.split('.');
            splitControls.splice(0, 1);
            return splitControls.join('.');
          });
          jObjectOptions["with"] = controlNames;
        }

        if (options.value && options.value[controlName]) jObjectOptions.value = options.value[controlName];
        jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
        return jObjectOptions;
      }

      return undefined;
    }

    var RxFormGroup = /*#__PURE__*/function (_angular_forms__WEBPA3) {
      _inherits(RxFormGroup, _angular_forms__WEBPA3);

      var _super3 = _createSuper(RxFormGroup);

      function RxFormGroup(model, entityObject, controls, validatorOrOpts, asyncValidator) {
        var _this15;

        _classCallCheck(this, RxFormGroup);

        _this15 = _super3.call(this, controls, validatorOrOpts, asyncValidator);
        _this15.model = model;
        _this15.entityObject = entityObject;
        _this15._modified = {};
        _this15._isModified = false;
        _this15.baseObject = {};

        for (var column in _this15.entityObject) {
          _this15.baseObject[column] = _this15.entityObject[column];
        }

        _this15.formDataProvider = new FormDataProvider();
        return _this15;
      }

      _createClass(RxFormGroup, [{
        key: "bindPrimaryKey",
        value: function bindPrimaryKey(modelInstance, jObject) {
          var instanceContainer = defaultContainer.get(modelInstance.constructor);

          if (instanceContainer) {
            var primaryKeyProp = instanceContainer.properties.filter(function (x) {
              return x.isPrimaryKey;
            })[0];
            if (primaryKeyProp && this.modelInstance[primaryKeyProp.name]) jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
          }
        }
      }, {
        key: "patch",
        value: function patch(controlName) {
          if (controlName) {
            var control = this.controls[controlName];
            this.processModified(controlName, control);
          } else {
            this.nestedFormsModification();
          }

          this._isModified = Object.keys(this._modified).length > 0;
          if (!this._isModified) this.nestedArrayIsModified();
          if (this.parent && this.parent.patch) this.parent.patch();
        }
      }, {
        key: "isDirty",
        value: function isDirty() {
          var isDirty = false;

          for (var name in this.value) {
            var currentValue = this.modelInstance[name];

            if (!(this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
              isDirty = ApplicationUtil.notEqualTo(this.baseObject[name], currentValue);
            } else if (this.controls[name] instanceof RxFormGroup) isDirty = this.controls[name].isDirty();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              var _iterator15 = _createForOfIteratorHelper(this.controls[name].controls),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var formGroup = _step15.value;
                  isDirty = formGroup.isDirty();
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            if (isDirty) break;
          }

          return isDirty;
        }
      }, {
        key: "resetForm",
        value: function resetForm(options) {
          for (var name in this.controls) {
            if (isResetControl(name, this.controls[name], options)) {
              if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) this.controls[name].resetForm(getNestedOptions(name, options));else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                this.controls[name].resetForm(options && options.value ? options.value[name] : undefined);
              } else {
                if (options && options.value && RegexValidator.isNotBlank(options.value[name])) this.controls[name].reset(options.value[name]);else this.controls[name].reset();
              }
            }
          }
        }
      }, {
        key: "commit",
        value: function commit() {
          for (var name in this.controls) {
            if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) this.controls[name].commit();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              this.controls[name].commit();
            } else {
              this.controls[name].commit();
            }
          }
        }
      }, {
        key: "patchModelValue",
        value: function patchModelValue(value, options) {
          if (value) {
            for (var name in this.controls) {
              if (this.controls[name] instanceof RxFormGroup && value[name]) this.controls[name].patchModelValue(value[name], options);else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] && Array.isArray(value[name])) {
                var index = 0;

                var _iterator16 = _createForOfIteratorHelper(this.controls[name].controls),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var formGroup = _step16.value;
                    if (value[name][index]) formGroup.patchModelValue(value[name][index], options);
                    index = index + 1;
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              } else if (value[name] !== undefined) this.controls[name].patchValue(value[name], options);
            }
          }
        }
      }, {
        key: "getErrorSummary",
        value: function getErrorSummary(onlyMessage) {
          var _this16 = this;

          var jObject = {};
          Object.keys(this.controls).forEach(function (columnName) {
            if (_this16.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
              var _error = _this16.controls[columnName].getErrorSummary(false);

              if (Object.keys(_error).length > 0) jObject[columnName] = _error;
            } else if (_this16.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              var index = 0;

              var _iterator17 = _createForOfIteratorHelper(_this16.controls[columnName].controls),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var formGroup = _step17.value;

                  var _error2 = formGroup.getErrorSummary(false);

                  if (Object.keys(_error2).length > 0) {
                    _error2.index = index;
                    if (!jObject[columnName]) jObject[columnName] = [];
                    jObject[columnName].push(_error2);
                  }

                  index++;
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            } else {
              if (_this16.controls[columnName].errors) {
                var _error3 = _this16.controls[columnName].errors;
                if (onlyMessage) for (var validationName in _error3) {
                  jObject[columnName] = _error3[validationName].message;
                } else jObject[columnName] = _error3;
              }
            }
          });
          return jObject;
        }
      }, {
        key: "valueChangedSync",
        value: function valueChangedSync() {
          var _this17 = this;

          Object.keys(this.controls).forEach(function (columnName) {
            if (!(_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this17.controls[columnName] instanceof RxFormArray) && !(_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this17.controls[columnName] instanceof RxFormGroup) && !(_this17.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || _this17.entityObject[columnName] instanceof RxFormControl) && ApplicationUtil.notEqualTo(_this17.controls[columnName].getControlValue(), _this17.entityObject[columnName])) {
              _this17.controls[columnName].setValue(_this17.entityObject[columnName], {
                updateChanged: true
              });
            } else if (_this17.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this17.controls[columnName] instanceof RxFormArray) {
              var _iterator18 = _createForOfIteratorHelper(_this17.controls[columnName].controls),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var formGroup = _step18.value;
                  formGroup.valueChangedSync();
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            } else if (_this17.controls[columnName] instanceof RxFormGroup) {
              _this17.controls[columnName].valueChangedSync();
            }
          });
        }
      }, {
        key: "refreshDisable",
        value: function refreshDisable() {
          var _this18 = this;

          Object.keys(this.controls).forEach(function (columnName) {
            if (!(_this18.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this18.controls[columnName] instanceof RxFormArray) && !(_this18.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this18.controls[columnName] instanceof RxFormGroup)) {
              _this18.controls[columnName].refresh();
            } else if (_this18.controls[columnName] instanceof RxFormGroup) {
              _this18.controls[columnName].refreshDisable();
            }
          });
        }
      }, {
        key: "bindErrorMessages",
        value: function bindErrorMessages() {
          var _this19 = this;

          Object.keys(this.controls).forEach(function (columnName) {
            if (!(_this19.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this19.controls[columnName] instanceof RxFormArray) && !(_this19.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this19.controls[columnName] instanceof RxFormGroup)) {
              _this19.controls[columnName].bindError();
            } else if (_this19.controls[columnName] instanceof RxFormGroup) {
              _this19.controls[columnName].bindErrorMessages();
            }
          });
        }
      }, {
        key: "toFormData",
        value: function toFormData() {
          return this.formDataProvider.convertToFormData(this.value);
        }
      }, {
        key: "processModified",
        value: function processModified(controlName, control) {
          if (control.isModified) this._modified[controlName] = control.value;else delete this._modified[controlName];
          this._isModified = Object.keys(this._modified).length > 0;
        }
      }, {
        key: "nestedArrayIsModified",
        value: function nestedArrayIsModified() {
          for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormArray) this._isModified = this.controls[controlName].isModified;
            if (this._isModified) break;
          }
        }
      }, {
        key: "nestedFormsModification",
        value: function nestedFormsModification() {
          for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormGroup) this.processModified(controlName, this.controls[controlName]);else if (this.controls[controlName] instanceof RxFormArray) {
              if (this.controls[controlName].isModified) {
                var formGroups = this.controls[controlName].controls;
                this._modified[controlName] = [];

                var _iterator19 = _createForOfIteratorHelper(formGroups),
                    _step19;

                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var formGroup = _step19.value;

                    if (formGroup.isModified) {
                      if (!this._modified[controlName]) this._modified[controlName] = [];

                      this._modified[controlName].push(formGroup.modifiedValue);
                    }
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }

                if (this._modified[controlName].length == 0) delete this._modified[controlName];
              } else if (this._modified[controlName]) delete this._modified[controlName];
            }
          }
        }
      }, {
        key: "modifiedValue",
        get: function get() {
          var jObject = {};

          if (Object.keys(this._modified).length > 0) {
            this.bindPrimaryKey(this.modelInstance, jObject);

            for (var columnName in this._modified) {
              if (this.controls[columnName] instanceof RxFormGroup) jObject[columnName] = this.controls[columnName].modifiedValue;else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                var formArray = this.controls[columnName];
                jObject[columnName] = [];

                for (var i = 0; i < this._modified[columnName].length; i++) {
                  var modifiedValue = formArray.controls[i].modifiedValue;
                  if (Object.keys(modifiedValue).length > 0) jObject[columnName].push(modifiedValue);
                }

                if (jObject[columnName].length == 0) delete jObject[columnName];
              } else jObject[columnName] = this._modified[columnName];
            }

            return jObject;
          }

          return this._modified;
        }
      }, {
        key: "isModified",
        get: function get() {
          return this._isModified;
        }
      }, {
        key: "submitted",
        get: function get() {
          return this._submitted;
        },
        set: function set(value) {
          var _this20 = this;

          this._submitted = value;
          Object.keys(this.controls).forEach(function (columnName) {
            if (_this20.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              var formArray = _this20.controls[columnName];

              var _iterator20 = _createForOfIteratorHelper(formArray.controls),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var formGroup = _step20.value;
                  formGroup.submitted = value;
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            } else if (_this20.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
              _this20.controls[columnName].submitted = value;
            } else _this20.controls[columnName].bindError();
          });
        }
      }, {
        key: "modelInstanceValue",
        get: function get() {
          return clone(this.entityObject);
        }
      }, {
        key: "modelInstance",
        get: function get() {
          return this.entityObject;
        }
      }, {
        key: "controlsError",
        get: function get() {
          return this.getErrorSummary(true);
        }
      }]);

      return RxFormGroup;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]);

    var FormProvider = /*#__PURE__*/function () {
      function FormProvider() {
        _classCallCheck(this, FormProvider);
      }

      _createClass(FormProvider, null, [{
        key: "ProcessRule",
        value: function ProcessRule(control, config) {
          var isDynamicConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var formGroupValue = ApplicationUtil.getParentObjectValue(control);
          var parentObject = control.parent ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
          var modelInstance = undefined;
          if (control.parent && control.parent instanceof RxFormGroup) modelInstance = control.parent.modelInstance;

          if (parentObject) {
            this.updateFormControlValue(parentObject, control.parent.controls, control, config);
            this.forDisableUpdate(parentObject, config);
          } else if (config.conditionalExpression) return false;

          return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
        }
      }, {
        key: "updateFormControlValue",
        value: function updateFormControlValue(parentObject, controls, control, config) {
          for (var controlName in parentObject) {
            if (!(parentObject[controlName] instanceof Object)) if (controls[controlName] === control) {
              parentObject[controlName] = control.value;
              break;
            }
          }
        }
      }, {
        key: "forDisableUpdate",
        value: function forDisableUpdate(parentObject, config) {
          if (config.disableConfig) Object.keys(config.disableConfig).forEach(function (column) {
            parentObject[column] = config.disableConfig[column];
          });
        }
      }]);

      return FormProvider;
    }();

    var DISABLED_EXPRESSION = "disableExpression";

    function conditionalChangeValidator(conditionalValidationProps) {
      var oldValue = undefined;

      var setTimeOut = function setTimeOut(control, config) {
        if (control[DISABLED_EXPRESSION]) runDisabledExpression(control, config);
        var timeOut = setTimeout(function (t) {
          clearTimeout(timeOut);
          control.updateValueAndValidity();
        }, 100);
      };

      return function (control) {
        var value = control.value;

        if (control.parent && oldValue != value) {
          var rootFormGroup = ApplicationUtil.getRootFormGroup(control);
          var parentFormGroup = control.parent;
          oldValue = value;
          var controlName = ApplicationUtil.getFormControlName(control);

          var disabledConfig = _defineProperty({}, controlName, value);

          conditionalValidationProps.forEach(function (t) {
            if (t.indexOf("[]") != -1) {
              var splitText = t.split("[]");
              var formArray = rootFormGroup.get([splitText[0]]);
              if (formArray) formArray.controls.forEach(function (formGroup) {
                var abstractControl = formGroup.get(splitText[1]);

                if (abstractControl) {
                  setTimeOut(abstractControl, disabledConfig);
                }
              });
            } else {
              var _splitText = t.split('.');

              if (_splitText.length > 1) {
                var control = null;
                t.split('.').forEach(function (name, index) {
                  control = index == 0 ? rootFormGroup.controls[name] : control.controls[name];
                });
              } else {
                control = parentFormGroup.controls[t];
              }

              if (control) {
                setTimeOut(control, disabledConfig);
              }
            }
          });
        }

        return ObjectMaker["null"]();
      };
    }

    function runDisabledExpression(control, config) {
      var isDisabled = FormProvider.ProcessRule(control, {
        conditionalExpression: control[DISABLED_EXPRESSION],
        disableConfig: config
      });
      if (isDisabled && !control.disabled) control.disable();else if (control.disabled) control.enable();
    }

    var ValidatorValueChecker = /*#__PURE__*/function () {
      function ValidatorValueChecker() {
        _classCallCheck(this, ValidatorValueChecker);
      }

      _createClass(ValidatorValueChecker, null, [{
        key: "pass",
        value: function pass(control, config) {
          if (FormProvider.ProcessRule(control, config)) return RegexValidator.isNotBlank(control.value);else return false;
        }
      }, {
        key: "passArrayValue",
        value: function passArrayValue(control, config) {
          if (FormProvider.ProcessRule(control, config)) return control.value instanceof Array;else return false;
        }
      }]);

      return ValidatorValueChecker;
    }();

    var ARRAY_CONFIG = "ArrayConfig";
    var FIELD_CONFIG = "FieldConfig";
    var IP_CONFIG = "IpConfig";
    var NUMBER_CONFIG = "NumberConfig";
    var PASSWORD_CONFIG = "PasswordConfig";
    var PATTERN_CONFIG = "PatternConfig";
    var RANGE_CONFIG = "RangeConfig";
    var CONFIG_REQUIRED_FIELDS = (_CONFIG_REQUIRED_FIEL = {}, _defineProperty(_CONFIG_REQUIRED_FIEL, ARRAY_CONFIG, ["matchValues"]), _defineProperty(_CONFIG_REQUIRED_FIEL, FIELD_CONFIG, ["fieldName"]), _defineProperty(_CONFIG_REQUIRED_FIEL, IP_CONFIG, ["version"]), _defineProperty(_CONFIG_REQUIRED_FIEL, PASSWORD_CONFIG, ["validation"]), _defineProperty(_CONFIG_REQUIRED_FIEL, NUMBER_CONFIG, ["value"]), _defineProperty(_CONFIG_REQUIRED_FIEL, PATTERN_CONFIG, ["expression"]), _defineProperty(_CONFIG_REQUIRED_FIEL, RANGE_CONFIG, ["minimumNumber", "maximumNumber"]), _CONFIG_REQUIRED_FIEL);

    function getConfigObject(config, control) {
      var configName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return config != undefined && config != true ? configProvider(control, config, configName) : {};
    }

    function configProvider(control, config, configName) {
      if (config.dynamicConfig) {
        var currentConfig = FormProvider.ProcessRule(control, clone(config), true);

        if (typeof currentConfig != "boolean") {
          currentConfig.conditionalExpression = config.conditionalExpression;
          currentConfig.dynamicConfig = config.dynamicConfig;
          Object.keys(config).forEach(function (t) {
            if (t != "conditionalExpression" && t != "dynamicConfig" || currentConfig[t] === undefined) {
              currentConfig[t] = config[t];
            }
          });
          return currentConfig;
        } else return config;
      }

      return checkRequiredProps(config, configName);
    }

    function checkRequiredProps(config, configName) {
      var props = CONFIG_REQUIRED_FIELDS[configName];

      if (configName) {
        props.forEach(function (prop) {
          if (config[prop] === undefined) throw new Error("Pass the property of '".concat(prop, "' with value in the ").concat(configName, ", otherwise it won't work."));
        });
      }

      return config;
    }

    var alphabet = {
      'danish': /^[A-ZÆØÅ]+$/,
      'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
      'german': /^[A-ZÄÖÜß]+$/,
      'greek': /^[Α-ω]+$/,
      'spanish': /^[a-zñáéíóúü]+$/i,
      'russian': /^[А-ЯЁ]+$/
    };
    var alphaWithWhitespace = {
      'danish': /^[A-ZÆØÅ\s]+$/,
      'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]+$/,
      'german': /^[A-ZÄÖÜß\s]+$/,
      'greek': /^[Α-ω\s]+$/,
      'spanish': /^[a-zñáéíóúü\s]+$/i,
      'russian': /^[А-ЯЁ\s]+$/
    };
    var alphanumeric = {
      'danish': /^[0-9A-ZÆØÅ]+$/,
      'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
      'german': /^[0-9A-ZÄÖÜß]+$/,
      'spanish': /^[0-9a-zñáéíóúü]+$/i,
      'russian': /^[0-9А-ЯЁ]+$/
    };
    var alphanumericWithWitespace = {
      'danish': /^[0-9A-ZÆØÅ]+$/,
      'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
      'german': /^[0-9A-ZÄÖÜß]+$/,
      'spanish': /^[0-9a-zñáéíóúü\s]+$/i,
      'russian': /^[0-9А-ЯЁ]+$/
    };

    function alphaValidation(configModel, control, regExps, key) {
      var config = getConfigObject(configModel, control);

      if (ValidatorValueChecker.pass(control, config)) {
        regExps = getRegex(key, regExps, config);
        var isValid = !config || !config.allowWhiteSpace ? RegexValidator.isValid(control.value, regExps[0]) : RegexValidator.isValid(control.value, regExps[1]);
        if (!isValid) return ObjectMaker.toJson(key, config, [control.value]);
      }

      return ObjectMaker["null"]();
    }

    function getRegex(key, regExps, config) {
      switch (key) {
        case "alpha":
          var alphaLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alpha ? ReactiveFormConfig.json.defaultValidationLocale.alpha : "";
          return [alphaLocale && alphaLocale in alphabet ? alphabet[alphaLocale] : regExps[0], alphaLocale && alphaLocale in alphaWithWhitespace ? alphaWithWhitespace[alphaLocale] : regExps[1]];
          break;

        case "alphaNumeric":
          var alphaNumericLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric ? ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric : "";
          return [alphaNumericLocale && alphaNumericLocale in alphanumeric ? alphanumeric[alphaNumericLocale] : regExps[0], alphaNumericLocale && alphaNumericLocale in alphanumericWithWitespace ? alphanumericWithWitespace[alphaNumericLocale] : regExps[1]];
          break;
      }
    }

    function alphaValidator(configModel) {
      return function (control) {
        return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
      };
    }

    function alphaNumericValidator(configModel) {
      return function (control) {
        return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
      };
    }

    function compareValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, FIELD_CONFIG);
        var compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
        var controlValue = control.value;
        var compareControlValue = compareControl ? compareControl.value : '';

        if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
          if (!(compareControl && compareControl.value === controlValue)) return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
        }

        return ObjectMaker["null"]();
      };
    }

    function containsValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (control.value.indexOf(config.value) == -1) return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function checkLength(length, checks) {
      var isPassed = false;

      var _iterator21 = _createForOfIteratorHelper(checks),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var check = _step21.value;
          isPassed = check == length;
          if (isPassed) break;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      return isPassed;
    }

    function calculate(numbers) {
      var numberSum = 0;

      for (var i = 0; i < numbers.length; i++) {
        numberSum += parseInt(numbers.substring(i, i + 1));
      }

      var deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);

      for (var i = numbers.length - 1; i >= 0; i -= 2) {
        numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
      }

      var mod = numberSum % 10;
      mod = 10 - mod;
      if (mod == 10) mod = 0;
      return mod;
    }

    function creditCardValidator(configModel) {
      var cardDigits = {
        AmericanExpress: [15],
        DinersClub: [14, 16, 19],
        Discover: [16, 19],
        JCB: [16, 19],
        Maestro: [12, 16, 19],
        MasterCard: [16],
        Visa: [13, 16, 19]
      };

      function validate(creditCardNumber) {
        var digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
        return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
      }

      function getCardProviderName(cardNumber) {
        var cardProviderName = "";
        return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
      }

      return function (control) {
        var controlValue = control.value;
        var config = getConfigObject(configModel, control);
        var parentObject = control.parent ? control.parent.value : undefined;

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(controlValue)) {
            var _isValid = false;
            var cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
            var cardType = '';

            var _iterator22 = _createForOfIteratorHelper(cardTypes),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var creditCardType = _step22.value;
                _isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                cardType = creditCardType;
                if (_isValid) break;
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }

            if (!_isValid) return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function regexValidation(configModel, control, regExp, key) {
      var config = getConfigObject(configModel, control);
      return validate(config, control, regExp, key);
    }

    function validate(config, control, regExp, key) {
      if (ValidatorValueChecker.pass(control, config)) {
        if (!RegexValidator.isValid(control.value, regExp)) return ObjectMaker.toJson(key, config, [control.value]);
      }

      return ObjectMaker["null"]();
    }

    function digitValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
      };
    }

    function emailValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
      };
    }

    function hexColorValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
      };
    }

    function lowercaseValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(control.value === control.value.toLowerCase())) return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    var OPERATORS = {
      lessThan: "<",
      greaterThan: ">",
      lessThanEqualTo: "<=",
      greaterThanEqualTo: ">="
    };

    function runCondition(leftValue, rightValue, operator) {
      var result = false;

      switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
          result = leftValue > rightValue;
          break;

        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
          result = leftValue >= rightValue;
          break;
      }

      return result;
    }

    function dateChecker(control, config, operationType) {
      config = getConfigObject(config, control);
      var dateProvider = new DateProvider();

      if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
          if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value, config)) {
            var checkDate = dateProvider.getCompareDate(config, control);
            var currentControlValue = dateProvider.getDate(control.value);

            var _isValid2 = operationType == AnnotationTypes.minDate ? runCondition(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);

            if (!_isValid2) return ObjectMaker.toJson(operationType, config, [control.value]);
          } else return ObjectMaker.toJson(operationType, config, [control.value]);
        }
      }

      return ObjectMaker["null"]();
    }

    function validateDate(control, config, operationType) {
      config = getConfigObject(config, control);
      var dateProvider = new DateProvider();

      if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
          if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value, config)) {
            return ObjectMaker.toJson(operationType, config, [control.value]);
          }
        }
      }

      return ObjectMaker["null"]();
    }

    function maxDateValidator(configModel) {
      return function (control) {
        return dateChecker(control, configModel, AnnotationTypes.maxDate);
      };
    }

    function maxLengthValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(control.value.length <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function maxNumberValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(parseFloat(control.value) <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function minDateValidator(configModel) {
      return function (control) {
        return dateChecker(control, configModel, AnnotationTypes.minDate);
      };
    }

    function minLengthValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(String(control.value).length >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function minNumberValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(parseFloat(control.value) >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function passwordValidator(configModel) {
      function getMessageObject(jObject, keyName) {
        if (!jObject.message && !jObject.messageKey) {
          var message = ObjectMaker.getPasswordMessage();
          jObject.message = message && typeof message == "string" ? message : ApplicationUtil.isObject(message) ? message[keyName] : "";
          if (!jObject.message) jObject.message = message["password"];
          jObject.messageKey = "";
        }

        return jObject;
      }

      return function (control) {
        var config = getConfigObject(configModel, control, PASSWORD_CONFIG);
        var controlValue = control.value;

        if (RegexValidator.isNotBlank(controlValue)) {
          var validation = RegexValidator.isValidPassword(config.validation, controlValue);
          var jObject = {};
          jObject.message = config.message && config.message[validation.keyName] ? config.message[validation.keyName] : typeof config.message == "string" ? config.message : '';
          jObject.messageKey = config.messageKey && config.messageKey[validation.keyName] ? config.messageKey[validation.keyName] : typeof config.messageKey == "string" ? config.messageKey : "";
          jObject = getMessageObject(jObject, validation.keyName);
          if (!validation.isValid) return ObjectMaker.toJson(AnnotationTypes.password, jObject, [controlValue]);
        }

        return ObjectMaker["null"]();
      };
    }

    function rangeValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, RANGE_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(control.value && parseFloat(control.value) >= config.minimumNumber && parseFloat(control.value) <= config.maximumNumber)) return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
        }

        return ObjectMaker["null"]();
      };
    }

    function uppercaseValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(control.value === control.value.toUpperCase())) return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function requiredValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (!RegexValidator.isNotBlank(control.value)) {
            return ObjectMaker.toJson(AnnotationTypes.required, config, []);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function patternValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, PATTERN_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          for (var pattern in config.expression) {
            if (!RegexValidator.isValid(control.value, config.expression[pattern])) return ObjectMaker.toJson(pattern, config, [control.value]);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function timeValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var _isValid3 = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);

          if (!_isValid3) return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function urlValidation(configModel, control) {
      var regex = RegExRule.url;
      var config = getConfigObject(configModel, control);

      if (config && config.urlValidationType) {
        switch (config.urlValidationType) {
          case 1:
            regex = RegExRule.url;
            break;

          case 2:
            regex = RegExRule.localhostUrl;
            break;

          case 3:
            regex = RegExRule.interanetUrl;
            break;
        }
      }

      return validate(config, control, regex, AnnotationTypes.url);
    }

    function urlValidator(configModel) {
      return function (control) {
        return urlValidation(configModel, control);
      };
    }

    function jsonValidator(configModel) {
      function process(value) {
        var result = false;

        try {
          var json = JSON.parse(value);
          result = !!json && typeof json === 'object';
        } catch (ex) {
          result = false;
        }

        return result;
      }

      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!process(control.value)) return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    var operatorOpposite = (_operatorOpposite = {}, _defineProperty(_operatorOpposite, AnnotationTypes.greaterThan, AnnotationTypes.lessThan), _defineProperty(_operatorOpposite, AnnotationTypes.lessThan, AnnotationTypes.greaterThan), _defineProperty(_operatorOpposite, AnnotationTypes.greaterThanEqualTo, AnnotationTypes.lessThanEqualTo), _defineProperty(_operatorOpposite, AnnotationTypes.lessThanEqualTo, AnnotationTypes.greaterThanEqualTo), _operatorOpposite);

    function relationalCheck(control, config, relationalOperatorName) {
      config = getConfigObject(config, control);
      var matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
      var matchControlValue = matchControl ? matchControl.value : config.value !== undefined ? config.value : '';

      if (FormProvider.ProcessRule(control, config)) {
        if (config.isArrayControl) return arrayControlValidation(control, config, relationalOperatorName);
        if (isValid(control, matchControlValue, relationalOperatorName) === false) return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
      }

      return ObjectMaker["null"]();
    }

    function isValid(control, matchControlValue, relationalOperatorName) {
      if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
        var _isValid4 = false;

        switch (relationalOperatorName) {
          case AnnotationTypes.greaterThan:
            _isValid4 = parseFloat(control.value) > parseFloat(matchControlValue);
            break;

          case AnnotationTypes.lessThan:
            _isValid4 = parseFloat(control.value) < parseFloat(matchControlValue);
            break;

          case AnnotationTypes.greaterThanEqualTo:
            _isValid4 = parseFloat(control.value) >= parseFloat(matchControlValue);
            break;

          case AnnotationTypes.lessThanEqualTo:
            _isValid4 = parseFloat(control.value) <= parseFloat(matchControlValue);
            break;
        }

        return _isValid4;
      }

      return null;
    }

    function setTimeFunc(invalidateControls) {
      var timeOut = setTimeout(function () {
        invalidateControls.forEach(function (t) {
          t.updateValueAndValidity();
        });
        clearTimeout(timeOut);
      }, 200);
    }

    function arrayControlValidation(control, config, relationalOperatorName) {
      var formArray = ApplicationUtil.getParentFormArray(control);
      var parentFormGroup = control.parent ? control.parent : undefined;
      var oppositeOperator = operatorOpposite[relationalOperatorName];
      var updateValidityControls = [];

      if (formArray && parentFormGroup && formArray.controls.length > 1) {
        var indexOf = formArray.controls.indexOf(parentFormGroup);
        var fieldName = ApplicationUtil.getFormControlName(control);
        var valid = true;
        if (indexOf > 0) valid = validateControl(formArray, control, indexOf - 1, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls);
        if (valid && formArray.controls.length > indexOf + 1) valid = validateControl(formArray, control, indexOf + 1, fieldName, relationalOperatorName, relationalOperatorName, updateValidityControls);
        if (updateValidityControls.length > 0) setTimeFunc(updateValidityControls);
        if (valid === false) return ObjectMaker.toJson(relationalOperatorName, config, [control.value]);
      }

      return ObjectMaker["null"]();
    }

    function validateControl(formArray, control, indexOf, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls) {
      var valid = false;
      var formGroup = formArray.controls[indexOf];

      if (formGroup && formGroup.controls) {
        var formControl = formGroup.controls[fieldName];
        valid = isValid(control, formControl.value, oppositeOperator);
        if (valid && formControl.errors && formControl.errors[relationalOperatorName]) updateValidityControls.push(formControl);
      }

      return valid;
    }

    function greaterThanValidator(configModel) {
      return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
      };
    }

    function greaterThanEqualToValidator(configModel) {
      return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
      };
    }

    function lessThanEqualToValidator(configModel) {
      return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
      };
    }

    function lessThanValidator(configModel) {
      return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.lessThan);
      };
    }

    function choiceValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (control.value instanceof Array) {
            config.minLength = config.minLength == undefined ? 0 : config.minLength;
            config.maxLength = config.maxLength == undefined ? 0 : config.maxLength;
            if (control.value.length < config.minLength || config.maxLength !== 0 && control.value.length > config.maxLength) return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function differentValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, FIELD_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          var differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
          var differentControlValue = differentControl ? differentControl.value : '';
          if (!(differentControl && differentControl.value != control.value)) return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
        }

        return ObjectMaker["null"]();
      };
    }

    function numericValidator(configModel) {
      return function (control) {
        if (configModel && (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.numeric])) ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue))) return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function evenValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!(control.value % 2 == 0)) return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function oddValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!!(control.value % 2 == 0) || !ApplicationUtil.isNumeric(control.value)) return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function factorValidator(configModel) {
      function positiveFactors(dividend, value) {
        var isPositive = false;

        for (var index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
          if (dividend % index === 0) {
            if (index == value) isPositive = true;
            if (dividend / index !== index) if (dividend / index == value) isPositive = true;
            if (isPositive) break;
          }
        }

        return isPositive;
      }

      return function (control) {
        var config = getConfigObject(configModel, control);
        var dividendField = control.parent && config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        var dividend = config.fieldName && dividendField ? dividendField.value : config.dividend;

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
            if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value))) return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function leapYearValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var isValid = control.value % 100 === 0 ? control.value % 400 === 0 : control.value % 4 === 0;
          if (!isValid) return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function allOfValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);

        if (ValidatorValueChecker.passArrayValue(control, config)) {
          var testResult = false;

          var _iterator23 = _createForOfIteratorHelper(config.matchValues),
              _step23;

          try {
            var _loop2 = function _loop2() {
              var value = _step23.value;
              testResult = control.value.some(function (y) {
                return y == value;
              });
              if (!testResult) return "break";
            };

            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var _ret = _loop2();

              if (_ret === "break") break;
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          if (!testResult) return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function oneOfValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);

        if (ValidatorValueChecker.passArrayValue(control, config)) {
          var testResult = false;

          var _iterator24 = _createForOfIteratorHelper(config.matchValues),
              _step24;

          try {
            var _loop3 = function _loop3() {
              var value = _step24.value;
              testResult = control.value.some(function (y) {
                return y == value;
              });
              if (testResult) return "break";
            };

            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _ret2 = _loop3();

              if (_ret2 === "break") break;
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }

          if (!testResult) return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function noneOfValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);

        if (FormProvider.ProcessRule(control, config)) {
          var testResult = false;

          var _iterator25 = _createForOfIteratorHelper(config.matchValues),
              _step25;

          try {
            var _loop4 = function _loop4() {
              var value = _step25.value;
              var matchValue = ApplicationUtil.lowerCaseWithTrim(value);
              testResult = Array.isArray(control.value) ? control.value.some(function (y) {
                return ApplicationUtil.lowerCaseWithTrim(y) === matchValue;
              }) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
              if (testResult) return "break";
            };

            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _ret3 = _loop4();

              if (_ret3 === "break") break;
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          if (testResult) return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function macValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
      };
    }

    function asciiValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
      };
    }

    function dataUriValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
      };
    }

    function portValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var _isValid5 = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && control.value >= 0 && control.value <= 65535;

          if (!_isValid5) return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function latLongValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var splitText = control.value.split(',');
          if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule["long"]))) return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function extensionValidator(configModel) {
      return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.extension]) ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);

        if (files && FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            var i;

            var _ret4 = function () {
              var testResult = true;
              var extension = '';

              for (i = 0; i < files.length; i++) {
                var _file = files.item(i);

                var splitText = _file.name.split(".");

                extension = splitText[splitText.length - 1];
                var result = config.extensions.filter(function (t) {
                  return extension.toLowerCase() == t.toLowerCase();
                })[0];

                if (!result) {
                  testResult = false;
                  break;
                }
              }

              if (!testResult) return {
                v: ObjectMaker.toJson(AnnotationTypes.extension, config, [extension, config.extensions.join(",")])
              };
            }();

            if (typeof _ret4 === "object") return _ret4.v;
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function fileSizeValidator(configModel) {
      return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.fileSize]) ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);

        if (files && FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            var minFileSize = config.minSize ? config.minSize : 0;
            var testResult = false;
            var _fileSize = 0;

            for (var i = 0; i < files.length; i++) {
              var _file2 = files.item(i);

              _fileSize = _file2.size;
              testResult = !(_fileSize >= minFileSize && _fileSize <= config.maxSize);
              if (testResult) break;
            }

            if (testResult) return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [_fileSize, config.maxSize]);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function endsWithValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
          if (endString != config.value) return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function startsWithValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var startString = String(control.value).substr(0, config.value.length);
          if (config.isRestrict && String(startString).toLowerCase() == String(config.value).toLowerCase() || !config.isRestrict && startString != config.value) return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function primeNumberValidator(configModel) {
      function isPrime(value) {
        var isPrimeNumber = value != 1;

        for (var i = 2; i < value; i++) {
          if (value % i == 0) {
            isPrimeNumber = false;
            break;
          }
        }

        return isPrimeNumber;
      }

      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value)) return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function latitudeValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
      };
    }

    function longitudeValidator(configModel) {
      return function (control) {
        return regexValidation(configModel, control, RegExRule["long"], AnnotationTypes.longitude);
      };
    }

    function composeValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (config.validators) {
            var result = undefined;

            var _iterator26 = _createForOfIteratorHelper(config.validators),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var validator = _step26.value;
                result = validator(control);
                if (result) break;
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            if (result) return config.messageKey || config.message ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function ruleValidator(configModel, entity) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          var result = null;

          var _iterator27 = _createForOfIteratorHelper(config.customRules),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _rule = _step27.value;
              result = _rule(entity);
              if (result) break;
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          if (result) return result;
        }

        return ObjectMaker["null"]();
      };
    }

    function fileValidator(configModel) {
      return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.file]) ApplicationUtil.configureControl(control, config, AnnotationTypes.file);

        if (files) {
          if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
              var minFiles = config.minFiles ? config.minFiles : 0;
              var maxFiles = config.maxFiles ? config.maxFiles : files.length;
              if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles)) return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
            }
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function customValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          var formGroupValue = ApplicationUtil.getParentObjectValue(control);
          var parentObject = control.parent ? control.parent.value : undefined;
          var result = null;

          var _iterator28 = _createForOfIteratorHelper(config.customRules),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var _rule2 = _step28.value;
              result = _rule2(formGroupValue, parentObject, config.additionalValue);
              if (result) break;
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }

          if (result) return result;
        }

        return ObjectMaker["null"]();
      };
    }

    function uniqueValidator(configModel) {
      var setTimeoutFunc = function setTimeoutFunc(invalidateControls, controlValues) {
        var timeOut = setTimeout(function () {
          invalidateControls.forEach(function (t) {
            var isMatched = controlValues.filter(function (x) {
              return x == t.value;
            })[0];
            if (!isMatched) t.updateValueAndValidity();
          });
          clearTimeout(timeOut);
        }, 200);
      };

      var additionalValidation = function additionalValidation(config, fieldName, formGroup, formArray, currentValue) {
        var indexOf = formArray.controls.indexOf(formGroup);
        var formArrayValue = [];

        if (indexOf != -1) {
          formArray.value.forEach(function (t, i) {
            if (indexOf != i) formArrayValue.push(t);
          });
          return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
        }

        return false;
      };

      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (RegexValidator.isNotBlank(control.value)) {
            var formArray = ApplicationUtil.getParentFormArray(control);
            var parentFormGroup = control.parent ? control.parent : undefined;
            var invalidateControls = [];
            var controlValues = [];

            if (formArray && parentFormGroup) {
              var matchedControl;

              var _ret5 = function () {
                var currentValue = control.value;
                var fieldName = ApplicationUtil.getFormControlName(control);
                var isMatched = false;

                var _iterator29 = _createForOfIteratorHelper(formArray.controls),
                    _step29;

                try {
                  var _loop5 = function _loop5() {
                    var formGroup = _step29.value;

                    if (formGroup != parentFormGroup) {
                      isMatched = ApplicationUtil.toLower(formGroup.controls[fieldName].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]);

                      if (formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]) {
                        matchedControl = formArray.controls.filter(function (t) {
                          return t.controls[fieldName] != formGroup.controls[fieldName] && ApplicationUtil.toLower(t.controls[fieldName].value) == ApplicationUtil.toLower(formGroup.controls[fieldName].value);
                        })[0];
                        if (!matchedControl) invalidateControls.push(formGroup.controls[fieldName]);
                      } else controlValues.push(formGroup.controls[fieldName].value);
                    }

                    if (isMatched) return "break";
                  };

                  for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                    var _ret6 = _loop5();

                    if (_ret6 === "break") break;
                  }
                } catch (err) {
                  _iterator29.e(err);
                } finally {
                  _iterator29.f();
                }

                if (invalidateControls.length > 0) setTimeoutFunc(invalidateControls, controlValues);
                var validation = false;

                if (config.additionalValidation) {
                  validation = additionalValidation(config, fieldName, parentFormGroup, formArray, currentValue);
                }

                if (isMatched && !validation) return {
                  v: ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value])
                };
              }();

              if (typeof _ret5 === "object") return _ret5.v;
            }
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function imageValidator(configModel) {
      return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.image]) ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
        if (!files) return ObjectMaker["null"]();
        return new Promise(function (resolve, reject) {
          if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
              var i;

              (function () {
                var testResult = false;

                var _loop6 = function _loop6() {
                  var file = files.item(i);
                  var type = file.type ? file.type.split('/') : [];
                  testResult = type.length > 1 && type[0] == "image";
                  if (!testResult) return "break";
                  var image = new Image();
                  config.minWidth = config.minWidth ? config.minWidth : 0;
                  config.minHeight = config.minHeight ? config.minHeight : 0;

                  image.onload = function () {
                    testResult = image.width >= config.minWidth && image.height >= config.minHeight && image.width <= config.maxWidth && image.height <= config.maxHeight;
                    if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));else resolve(ObjectMaker["null"]());
                  };

                  image.onerror = function () {
                    resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                  };

                  image.src = URL.createObjectURL(file);
                };

                for (i = 0; i < files.length; i++) {
                  var _ret7 = _loop6();

                  if (_ret7 === "break") break;
                }

                if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
              })();
            }
          }

          return ObjectMaker["null"]();
        });
      };
    }

    function notEmptyValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (!RegexValidator.isNotBlank(control.value, true)) {
            return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function checkIpV4(value) {
      var isValid = RegexValidator.isValid(value, RegExRule.ipV4);

      if (isValid) {
        var splitDots = value.split('.');

        var _iterator30 = _createForOfIteratorHelper(splitDots),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var ipNum = _step30.value;
            isValid = ipNum <= 255;
            if (!isValid) break;
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }

      return isValid;
    }

    function checkIpV6(value) {
      return RegexValidator.isValid(value, RegExRule.ipV6);
    }

    function ipValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control, IP_CONFIG);

        if (ValidatorValueChecker.pass(control, config)) {
          var values = config.isCidr ? control.value.split('/') : [control.value];
          var isValid = config.version == IpVersion.V4 ? checkIpV4(values[0]) : config.version == IpVersion.V6 ? checkIpV6(values[0]) : checkIpV4(values[0]) || checkIpV6(values[0]);

          if (config.isCidr && isValid) {
            isValid = values.length > 1 ? config.version == IpVersion.V4 ? RegexValidator.isValid(values[1], RegExRule.cidrV4) : config.version == IpVersion.V6 ? RegexValidator.isValid(values[1], RegExRule.cidrV6) : RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6) : false;
          }

          if (!isValid) return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function cusipValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var controlValue = control.value.toUpperCase();

          var _isValid6 = RegexValidator.isValid(controlValue, RegExRule.cusip);

          if (_isValid6) {
            var numericValues = controlValue.split("").map(function (value) {
              var charCode = value.charCodeAt(0);
              return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
            });
            var totalCount = 0;

            for (var i = 0; i < numericValues.length - 1; i++) {
              var numericValue = parseInt(numericValues[i], 10);

              if (i % 2 !== 0) {
                numericValue *= 2;
              }

              if (numericValue > 9) {
                numericValue -= 9;
              }

              totalCount += numericValue;
            }

            totalCount = (10 - totalCount % 10) % 10;
            _isValid6 = totalCount == numericValues[numericValues.length - 1];
          }

          if (!_isValid6) return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function gridValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var controlValue = control.value.toUpperCase();
          var isValid = RegexValidator.isValid(controlValue, RegExRule.grid);

          if (isValid) {
            controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');

            if ('GRID:' === controlValue.substr(0, 5)) {
              controlValue = controlValue.substr(5);
            }

            var alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var alphaNumLength = alphaNums.length,
                length = controlValue.length,
                check = Math.floor(alphaNumLength / 2);

            for (var i = 0; i < length; i++) {
              check = ((check || alphaNumLength) * 2 % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
            }

            isValid = check === 1;
          }

          if (!isValid) return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function dateValidator(configModel) {
      return function (control) {
        return validateDate(control, configModel, AnnotationTypes.date);
      };
    }

    function runCondition$1(leftValue, rightValue, operator) {
      var result = false;

      switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
          result = leftValue > rightValue;
          break;

        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
          result = leftValue >= rightValue;
          break;
      }

      return result;
    }

    function isValid$1(control, config) {
      return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
    }

    function getTime(value) {
      var splitTime = value ? value.split(':') : [];
      return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
    }

    function timeChecker(control, config, operationType) {
      config = getConfigObject(config, control);

      if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
          if (isValid$1(control, config)) {
            var crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
            var crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
            var currentControlValue = getTime(control.value);

            var _isValid7 = operationType == AnnotationTypes.minTime ? runCondition$1(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);

            if (!_isValid7) return ObjectMaker.toJson(operationType, config, [control.value]);
          } else return ObjectMaker.toJson(operationType, config, [control.value]);
        }
      }

      return ObjectMaker["null"]();
    }

    function minTimeValidator(configModel) {
      return function (control) {
        return timeChecker(control, configModel, AnnotationTypes.minTime);
      };
    }

    function maxTimeValidator(configModel) {
      return function (control) {
        return timeChecker(control, configModel, AnnotationTypes.maxTime);
      };
    }

    function requiredTrueValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (FormProvider.ProcessRule(control, config)) {
          if (control.value !== true) {
            return ObjectMaker.toJson(AnnotationTypes.requiredTrue, config, []);
          }
        }

        return ObjectMaker["null"]();
      };
    }

    function maskValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.mask]) ApplicationUtil.configureControl(control, config, AnnotationTypes.mask);
        return null;
      };
    }

    var APP_VALIDATORS = {
      "alphaNumeric": alphaNumericValidator,
      "alpha": alphaValidator,
      "compare": compareValidator,
      "email": emailValidator,
      "hexColor": hexColorValidator,
      "lowerCase": lowercaseValidator,
      "maxDate": maxDateValidator,
      "maxNumber": maxNumberValidator,
      "minDate": minDateValidator,
      "minNumber": minNumberValidator,
      "contains": containsValidator,
      "upperCase": uppercaseValidator,
      "maxLength": maxLengthValidator,
      "minLength": minLengthValidator,
      "password": passwordValidator,
      "range": rangeValidator,
      "required": requiredValidator,
      "creditCard": creditCardValidator,
      "digit": digitValidator,
      "pattern": patternValidator,
      "time": timeValidator,
      "url": urlValidator,
      "json": jsonValidator,
      "greaterThan": greaterThanValidator,
      "greaterThanEqualTo": greaterThanEqualToValidator,
      "lessThan": lessThanValidator,
      "lessThanEqualTo": lessThanEqualToValidator,
      "choice": choiceValidator,
      "different": differentValidator,
      "numeric": numericValidator,
      "even": evenValidator,
      "odd": oddValidator,
      "factor": factorValidator,
      "leapYear": leapYearValidator,
      "allOf": allOfValidator,
      "oneOf": oneOfValidator,
      "noneOf": noneOfValidator,
      "mac": macValidator,
      "ascii": asciiValidator,
      "dataUri": dataUriValidator,
      "port": portValidator,
      "latLong": latLongValidator,
      "extension": extensionValidator,
      "fileSize": fileSizeValidator,
      "endsWith": endsWithValidator,
      "startsWith": startsWithValidator,
      "primeNumber": primeNumberValidator,
      "latitude": latitudeValidator,
      "longitude": longitudeValidator,
      "compose": composeValidator,
      "rule": ruleValidator,
      "file": fileValidator,
      "unique": uniqueValidator,
      "image": imageValidator,
      "notEmpty": notEmptyValidator,
      "ip": ipValidator,
      "cusip": cusipValidator,
      "grid": gridValidator,
      "date": dateValidator,
      "minTime": minTimeValidator,
      "maxTime": maxTimeValidator,
      "requiredTrue": requiredTrueValidator,
      "mask": maskValidator
    };

    function andValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var validatorNames = Object.keys(config.validation);
          var failed = false;

          for (var _i3 = 0, _validatorNames = validatorNames; _i3 < _validatorNames.length; _i3++) {
            var validatorName = _validatorNames[_i3];
            failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
            if (failed) break;
          }

          if (failed) return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function orValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var validatorNames = Object.keys(config.validation);
          var failed = false;

          for (var _i4 = 0, _validatorNames2 = validatorNames; _i4 < _validatorNames2.length; _i4++) {
            var validatorName = _validatorNames2[_i4];
            failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
            if (!failed) break;
          }

          if (failed) return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    function notValidator(configModel) {
      return function (control) {
        var config = getConfigObject(configModel, control);

        if (ValidatorValueChecker.pass(control, config)) {
          var validatorNames = Object.keys(config.validation);
          var failed = false;

          for (var _i5 = 0, _validatorNames3 = validatorNames; _i5 < _validatorNames3.length; _i5++) {
            var validatorName = _validatorNames3[_i5];
            failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
            if (!failed) break;
          }

          if (!failed) return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
        }

        return ObjectMaker["null"]();
      };
    }

    var LOGICAL_VALIDATORS = {
      and: andValidator,
      or: orValidator,
      not: notValidator
    };
    var ASYNC = "async";
    var ENTITY_OBJECT = "entityObject";

    var RxFormBuilder = /*#__PURE__*/function (_BaseFormBuilder) {
      _inherits(RxFormBuilder, _BaseFormBuilder);

      var _super4 = _createSuper(RxFormBuilder);

      function RxFormBuilder() {
        var _this21;

        _classCallCheck(this, RxFormBuilder);

        _this21 = _super4.call(this);
        _this21.conditionalObjectProps = [];
        _this21.conditionalValidationInstance = {};
        _this21.builderConfigurationConditionalObjectProps = [];
        _this21.formGroupPropOtherValidator = {};
        _this21.currentFormGroupPropOtherValidator = {};
        _this21.isNested = false;
        _this21.isGroupCalled = false;
        _this21.isNestedBinding = false;
        return _this21;
      }

      _createClass(RxFormBuilder, [{
        key: "getInstanceContainer",
        value: function getInstanceContainer(instanceFunc, entityObject) {
          return this.instaceProvider(instanceFunc, entityObject);
        }
      }, {
        key: "setValue",
        value: function setValue(formGroup, object) {
          for (var col in object) {
            var control = formGroup.get([col]);
            control.setValue(object[col]);
            control.updateValueAndValidity();
          }
        }
      }, {
        key: "extractExpressions",
        value: function extractExpressions(fomrBuilderConfiguration) {
          if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
            for (var property in fomrBuilderConfiguration.dynamicValidation) {
              for (var decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
                if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
                  var columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
                  defaultContainer.addChangeValidation(this.conditionalValidationInstance, property, columns);
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "addAsyncValidation",
        value: function addAsyncValidation(property, propertyValidators, propValidationConfig) {
          var asyncValidators = [];

          if (propertyValidators) {
            var _iterator31 = _createForOfIteratorHelper(propertyValidators),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var propertyValidator = _step31.value;
                if (propertyValidator.isAsync) propertyValidator.config.forEach(function (t) {
                  asyncValidators.push(t);
                });
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
          }

          if (propValidationConfig && propValidationConfig[ASYNC]) {
            propValidationConfig[ASYNC].forEach(function (t) {
              asyncValidators.push(t);
            });
          }

          return asyncValidators;
        }
      }, {
        key: "addFormControl",
        value: function addFormControl(property, propertyValidators, propValidationConfig, instance, entity) {
          var validators = [];
          var columns = [];

          if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name] || this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) {
            var props = [];
            if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) instance.conditionalValidationProps[property.name].forEach(function (t) {
              return props.push(t);
            });
            if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(function (t) {
              return props.push(t);
            });
            validators.push(conditionalChangeValidator(props));
          }

          if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
            var propConditions = [];
            if (this.conditionalObjectProps) propConditions = this.conditionalObjectProps.filter(function (t) {
              return t.propName == property.name;
            });
            if (this.builderConfigurationConditionalObjectProps) this.builderConfigurationConditionalObjectProps.filter(function (t) {
              return t.propName == property.name;
            }).forEach(function (t) {
              return propConditions.push(t);
            });
            propConditions.forEach(function (t) {
              if (t.referencePropName && columns.indexOf(t.referencePropName) == -1) columns.push(t.referencePropName);
            });
            if (columns.length > 0) validators.push(conditionalChangeValidator(columns));
          }

          var _iterator32 = _createForOfIteratorHelper(propertyValidators),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var propertyValidator = _step32.value;
              if (!propertyValidator.isAsync) switch (propertyValidator.annotationType) {
                case AnnotationTypes.rule:
                  validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config, entity));
                  break;

                case AnnotationTypes.and:
                case AnnotationTypes.or:
                case AnnotationTypes.not:
                  validators.push(LOGICAL_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                  break;

                default:
                  validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                  break;
              }
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          if (propValidationConfig) this.additionalValidation(validators, propValidationConfig);
          if (this.currentFormGroupPropOtherValidator[property.name]) this.currentFormGroupPropOtherValidator[property.name].forEach(function (t) {
            validators.push(t);
          });
          return validators;
        }
      }, {
        key: "additionalValidation",
        value: function additionalValidation(validations, propValidationConfig) {
          for (var col in AnnotationTypes) {
            if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
              validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
            } else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]]) validations.push(propValidationConfig[col]);
          }
        }
      }, {
        key: "getEntity",
        value: function getEntity(object, formBuilderConfiguration, propertyName) {
          var isSameObjectConstructor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName]) return formBuilderConfiguration.genericEntities[propertyName];
          return isSameObjectConstructor ? object.constructor : undefined;
        }
      }, {
        key: "getObjectPropertyInstance",
        value: function getObjectPropertyInstance(object, propertyInfo, formBuilderConfiguration) {
          if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name]) return object[propertyInfo.name].constructor;else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0) return object[propertyInfo.name][0].constructor;
          return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
        }
      }, {
        key: "checkObjectPropAdditionalValidation",
        value: function checkObjectPropAdditionalValidation(instanceContainer, object, formBuilderConfiguration) {
          var _this22 = this;

          var props = instanceContainer.properties.filter(function (t) {
            return t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY;
          });
          props.forEach(function (t) {
            var entity = t.entity;
            if (!t.entity) entity = _this22.getObjectPropertyInstance(object, t, formBuilderConfiguration);

            if (entity) {
              var instance = _this22.getInstanceContainer(entity, null);

              if (instance && instance.conditionalValidationProps) {
                for (var key in instance.conditionalValidationProps) {
                  var prop = instanceContainer.properties.filter(function (t) {
                    return t.name == key;
                  })[0];

                  if (prop) {
                    if (!instanceContainer.conditionalValidationProps) instanceContainer.conditionalValidationProps = {};
                    if (!instanceContainer.conditionalValidationProps[key]) instanceContainer.conditionalValidationProps[key] = [];
                    instance.conditionalValidationProps[key].forEach(function (x) {
                      if (t.propertyType != ARRAY_PROPERTY) instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));else instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
                    });
                  }
                }
              }
            }
          });
        }
      }, {
        key: "getObject",
        value: function getObject(model, entityObject, formBuilderConfiguration) {
          var json = {};
          if (typeof model == FUNCTION_STRING) json.model = model;

          if (typeof model == FUNCTION_STRING && entityObject instanceof FormBuilderConfiguration) {
            json.entityObject = this.createClassObject(json.model, entityObject);
          }

          if (entityObject && !(entityObject instanceof FormBuilderConfiguration)) json.entityObject = entityObject;
          if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration) json.formBuilderConfiguration = entityObject;else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
            json.formBuilderConfiguration = formBuilderConfiguration;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
          }

          if (!entityObject) {
            if (typeof model == OBJECT_STRING) json.model = model.constructor;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
          } else if (model && entityObject instanceof FormBuilderConfiguration && typeof model == OBJECT_STRING) {
            json[MODEL] = model.constructor;
            json[ENTITY_OBJECT] = this.createClassObject(json.model, json.formBuilderConfiguration, model);
          }

          return json;
        }
      }, {
        key: "control",
        value: function control(value, validators, asyncValidators) {
          return new RxFormControl(value, validators, asyncValidators, {}, {}, '', []);
        }
      }, {
        key: "array",
        value: function array(values, validatorConfig) {
          var formArray = this.group({
            temp: values
          }, validatorConfig).get("temp");
          var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
          return formBuilder.array(formArray.controls);
        }
      }, {
        key: "group",
        value: function group(groupObject, validatorConfig) {
          var modelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

          var entityObject = {};
          this.formGroupPropOtherValidator = {};
          this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
          this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
          this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
          this.isGroupCalled = true;
          var formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
          this.isGroupCalled = false;
          this.formGroupPropOtherValidator = {};
          this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
          this.formGroupPropOtherValidator = {};
          return formGroup;
        }
      }, {
        key: "applyAllPropValidator",
        value: function applyAllPropValidator(propName, validatorConfig, modelInstance) {
          var _this23 = this;

          if (validatorConfig && validatorConfig.applyAllProps) {
            if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
              validatorConfig.applyAllProps.forEach(function (t) {
                if (t.name == RX_WEB_VALIDATOR) {
                  t(propName, modelInstance);
                } else {
                  if (!_this23.currentFormGroupPropOtherValidator[propName]) _this23.currentFormGroupPropOtherValidator[propName] = [];

                  _this23.currentFormGroupPropOtherValidator[propName].push(t);
                }
              });
            }
          }
        }
      }, {
        key: "dynamicValidationPropCheck",
        value: function dynamicValidationPropCheck(propName, validatorConfig) {
          return validatorConfig == undefined ? true : !validatorConfig.dynamicValidationConfigurationPropertyName ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
        }
      }, {
        key: "isNotObject",
        value: function isNotObject(value) {
          return value instanceof Date || value === null || typeof value != OBJECT_STRING;
        }
      }, {
        key: "createValidatorFormGroup",
        value: function createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig) {
          for (var propName in groupObject) {
            var prop = groupObject[propName];

            if (prop instanceof Array && prop.length > 0 && this.isNotObject(prop[0])) {
              var propValidators = prop.length > 1 && prop[1] instanceof Array ? prop[1] : prop.length == 2 ? [prop[1]] : [];
              var propertyAdded = false;

              for (var i = 0; i < propValidators.length; i++) {
                if (propValidators[i].name == RX_WEB_VALIDATOR) {
                  propValidators[i](propName, modelInstance);
                  propertyAdded = true;
                } else {
                  if (!this.currentFormGroupPropOtherValidator[propName]) this.currentFormGroupPropOtherValidator[propName] = [];
                  this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
                }
              }

              if (!propertyAdded) defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
                constructor: modelInstance
              });
              this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            } else if (prop === null || prop === undefined || typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
              defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
                constructor: modelInstance
              });
              this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            } else if (prop instanceof Array) {
              if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                entityObject[propName] = prop;
              } else {
                var propModelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

                if (typeof modelInstance == "function") modelInstance.constructor = modelInstance;
                defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
                entityObject[propName] = [];

                var _iterator33 = _createForOfIteratorHelper(prop),
                    _step33;

                try {
                  for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var row = _step33.value;
                    var jObject = {};
                    entityObject[propName].push(jObject);
                    this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
                  }
                } catch (err) {
                  _iterator33.e(err);
                } finally {
                  _iterator33.f();
                }
              }
            } else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl)) {
              var formGroup = prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] ? prop.controls[0] : prop;

              if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup)) {
                formGroup = this.group(formGroup.controls);
              }

              if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
              } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
              } else {
                if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
                  this.formGroupPropOtherValidator[propName] = {};
                  this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];

                  var _propModelInstance = _get(_getPrototypeOf(RxFormBuilder.prototype), "createInstance", this).call(this);

                  entityObject[propName] = {};
                  entityObject[propName].constructor = _propModelInstance.constructor;
                  defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance.constructor == Function ? {
                    constructor: modelInstance
                  } : modelInstance);
                  var objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
                  this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
                } else entityObject[propName] = groupObject[propName];
              }
            }

            if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
              entityObject[propName] = prop;
            } else if (prop && prop.length > 0 && this.isNotObject(prop[0]) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
              entityObject[propName] = prop[0];
            } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              entityObject[propName] = prop;
            } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) {
              entityObject[propName] = prop;
              defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : {
                constructor: modelInstance
              });
            }
          }
        }
      }, {
        key: "getValidatorConfig",
        value: function getValidatorConfig(validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
          var validationProps = {};
          var excludeProps = [];
          var includeProps = [];
          var ignoreUndefinedProps = [];

          if (validatorConfig) {
            for (var propName in validatorConfig.dynamicValidation) {
              if (propName.indexOf(rootPropertyName) != -1 || arrayPropertyName && propName.indexOf(arrayPropertyName) != -1) {
                var splitProp = propName.split(".")[1];
                if (splitProp) validationProps[splitProp] = validatorConfig.dynamicValidation[propName];
              }
            }

            if (validatorConfig.excludeProps) excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
            if (validatorConfig.includeProps) includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
            if (validatorConfig.ignoreUndefinedProps) ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
            return {
              ignoreUndefinedProps: ignoreUndefinedProps,
              includeProps: includeProps,
              dynamicValidation: validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps,
              excludeProps: excludeProps
            };
          }

          return {};
        }
      }, {
        key: "getProps",
        value: function getProps(properties, rootPropertyName) {
          var isIgnoreProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var props = [];

          var _iterator34 = _createForOfIteratorHelper(properties),
              _step34;

          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _prop = _step34.value;

              if (_prop.indexOf(rootPropertyName) != -1) {
                var splitProps = _prop.split(".");

                if (splitProps.length == 2) {
                  props.push(splitProps[1]);
                } else if (splitProps.length > 2) {
                  splitProps.splice(0, 1);
                  props.push(splitProps.join("."));
                }
              }
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }

          if (isIgnoreProp && properties.filter(function (x) {
            return x == rootPropertyName.replace('.', '');
          }).length == 1) props.push(':self:');
          return props;
        }
      }, {
        key: "formGroup",
        value: function formGroup(model, entityObject, formBuilderConfiguration) {
          var _this24 = this;

          var json = this.getObject(model, entityObject, formBuilderConfiguration);
          model = json.model;
          entityObject = json.entityObject;

          if (entityObject.constructor != model && !this.isGroupCalled) {
            entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
          }

          formBuilderConfiguration = json.formBuilderConfiguration;
          if (formBuilderConfiguration) this.extractExpressions(formBuilderConfiguration);
          var instanceContainer = this.getInstanceContainer(model, entityObject);
          this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
          var formGroupObject = {};
          var additionalValidations = {};
          instanceContainer.properties.forEach(function (property) {
            var isIncludeProp = true;

            if (formBuilderConfiguration) {
              if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0) isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
              if (formBuilderConfiguration.dynamicValidation) additionalValidations = formBuilderConfiguration.dynamicValidation;
              if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0) isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;

              if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
                isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
              }
            }

            if (property.ignore) isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);

            if (isIncludeProp) {
              switch (property.propertyType) {
                case PROPERTY:
                  if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || entityObject[property.name] instanceof RxFormControl)) {
                    var propertyValidators = instanceContainer.propertyAnnotations.filter(function (t) {
                      return t.propertyName == property.name;
                    });

                    var sanitizeValue = _get(_getPrototypeOf(RxFormBuilder.prototype), "sanitizeValue", _this24).call(_this24, instanceContainer, property.name, _get(_getPrototypeOf(RxFormBuilder.prototype), "getDefaultValue", _this24).call(_this24, property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject));

                    if (entityObject[property.name] === undefined && sanitizeValue) entityObject[property.name] = sanitizeValue;

                    var validators = _this24.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject);

                    var abstractControlOptions = {
                      validators: validators,
                      asyncValidators: _this24.addAsyncValidation(property, propertyValidators, additionalValidations[property.name])
                    };
                    if (formBuilderConfiguration && formBuilderConfiguration.abstractControlOptions && formBuilderConfiguration.abstractControlOptions[property.name]) abstractControlOptions.updateOn = formBuilderConfiguration.abstractControlOptions[property.name];
                    formGroupObject[property.name] = new RxFormControl(sanitizeValue, abstractControlOptions, [], json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
                    _this24.isNested = false;
                  } else formGroupObject[property.name] = _get(_getPrototypeOf(RxFormBuilder.prototype), "getDefaultValue", _this24).call(_this24, property, entityObject[property.name], formBuilderConfiguration);

                  break;

                case OBJECT_PROPERTY:
                  var objectValue = entityObject[property.name];

                  if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup)) {
                    _this24.isNestedBinding = _this24.isNested = true;
                    if (instanceContainer && instanceContainer.conditionalObjectProps) _this24.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) {
                      return t.objectPropName == property.name;
                    });
                    if (_this24.conditionalValidationInstance && _this24.conditionalValidationInstance.conditionalObjectProps) _this24.builderConfigurationConditionalObjectProps = _this24.conditionalValidationInstance.conditionalObjectProps.filter(function (t) {
                      return t.objectPropName == property.name;
                    });
                    if (_this24.formGroupPropOtherValidator[property.name]) _this24.currentFormGroupPropOtherValidator = _this24.formGroupPropOtherValidator[property.name];

                    var objectValidationConfig = _this24.getValidatorConfig(formBuilderConfiguration, objectValue, "".concat(property.name, "."));

                    var entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                    formGroupObject[property.name] = _this24.formGroup(entity || property.entity || _this24.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
                    _this24.conditionalObjectProps = [];
                    _this24.builderConfigurationConditionalObjectProps = [];
                    _this24.isNestedBinding = _this24.isNested = false;
                  } else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup) formGroupObject[property.name] = objectValue;

                  break;

                case ARRAY_PROPERTY:
                  var arrayObjectValue = entityObject[property.name];

                  if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
                    var formArrayGroup;

                    (function () {
                      _this24.isNestedBinding = _this24.isNested = true;
                      formArrayGroup = [];
                      var index = 0;
                      var entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                      var objectValidationConfig = null;

                      var _iterator35 = _createForOfIteratorHelper(arrayObjectValue),
                          _step35;

                      try {
                        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                          var subObject = _step35.value;
                          if (instanceContainer && instanceContainer.conditionalObjectProps) _this24.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) {
                            return t.objectPropName == property.name && t.arrayIndex == index;
                          });
                          if (_this24.conditionalValidationInstance && _this24.conditionalValidationInstance.conditionalObjectProps) _this24.builderConfigurationConditionalObjectProps = _this24.conditionalValidationInstance.conditionalObjectProps.filter(function (t) {
                            return t.objectPropName == property.name && t.arrayIndex == index;
                          });
                          if (_this24.formGroupPropOtherValidator[property.name]) _this24.currentFormGroupPropOtherValidator = _this24.formGroupPropOtherValidator[property.name];
                          objectValidationConfig = _this24.getValidatorConfig(formBuilderConfiguration, subObject, "".concat(property.name, "."), "".concat(property.name, "[").concat(index, "]."));
                          formArrayGroup.push(_this24.formGroup(entity || property.entity || _this24.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, objectValidationConfig));
                          index++;
                          _this24.conditionalObjectProps = [];
                          _this24.builderConfigurationConditionalObjectProps = [];
                        }
                      } catch (err) {
                        _iterator35.e(err);
                      } finally {
                        _iterator35.f();
                      }

                      formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, null, null, property.arrayConfig);

                      if (ReactiveFormConfig.autoInstancePush) {
                        arrayObjectValue.push = function (instance) {
                          var formGroup = _this24.formGroup(instance.constructor, instance, objectValidationConfig);

                          formGroupObject[property.name].push(formGroup, true);
                          return 0;
                        };

                        arrayObjectValue.splice = function (start, deleteCount) {
                          var end = start + deleteCount;

                          for (var i = start; i <= end; i++) {
                            formGroupObject[property.name].removeAt(i, true);
                          }

                          return [];
                        };
                      }

                      _this24.isNestedBinding = _this24.isNested = false;
                    })();
                  } else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) formGroupObject[property.name] = arrayObjectValue;else if (property.arrayConfig && property.arrayConfig.createBlank) formGroupObject[property.name] = new RxFormArray([], [], null, null, property.arrayConfig);

                  break;
              }
            }
          });

          if (!this.isNested) {
            this.conditionalValidationInstance = {};
            this.builderConfigurationConditionalObjectProps = [];
          }

          var formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, undefined);
          if (!this.isNestedBinding && !this.isGroupCalled) formGroup.refreshDisable();
          return formGroup;
        }
      }]);

      return RxFormBuilder;
    }(BaseFormBuilder);

    RxFormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RxFormBuilder);

    var BaseDirective = /*#__PURE__*/function () {
      function BaseDirective() {
        _classCallCheck(this, BaseDirective);
      }

      _createClass(BaseDirective, [{
        key: "applyValidations",
        value: function applyValidations(controls) {
          var _this25 = this;

          var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (this.model) {
            var modelConfig = defaultContainer.get(model || this.model.constructor);

            if (modelConfig) {
              modelConfig.properties.forEach(function (property) {
                if (controls[property.name]) {
                  switch (property.propertyType) {
                    case PROPERTY:
                      _this25.setValidatorConfig(controls[property.name], modelConfig, property);

                      break;

                    case OBJECT_PROPERTY:
                      _this25.applyValidations(controls[property.name].controls, property.entity);

                      break;
                  }
                }
              });
            }
          }
        }
      }, {
        key: "setValidatorConfig",
        value: function setValidatorConfig(control, modelConfig, property) {
          var annotations = modelConfig.propertyAnnotations.filter(function (t) {
            return t.propertyName == property.name;
          });
          annotations.forEach(function (annotation) {
            if (!control[TEMPLATE_VALIDATION_CONFIG]) control[TEMPLATE_VALIDATION_CONFIG] = {};
            ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
          });
        }
      }]);

      return BaseDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BaseDirective.prototype, "model", void 0);

    var RxwebFormDirective = /*#__PURE__*/function (_BaseDirective) {
      _inherits(RxwebFormDirective, _BaseDirective);

      var _super5 = _createSuper(RxwebFormDirective);

      function RxwebFormDirective() {
        var _this26;

        _classCallCheck(this, RxwebFormDirective);

        _this26 = _super5.apply(this, arguments);
        _this26.clearTimeoutNumber = 0;
        _this26.validationRule = {};
        return _this26;
      }

      _createClass(RxwebFormDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
          } else if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
          } else if (this.ngForm) {
            this.configureModelValidations();
          }
        }
      }, {
        key: "configureModelValidations",
        value: function configureModelValidations() {
          var _this27 = this;

          this.clearTimeoutNumber = setTimeout(function () {
            clearTimeout(_this27.clearTimeoutNumber);

            _this27.applyValidations(_this27.ngForm.form.controls);

            _this27.expressionProcessor(_this27.ngForm.form.controls);

            _this27.setConditionalValidator(_this27.ngForm.form.controls);

            _this27.updateValueAndValidity(_this27.ngForm.form.controls);
          }, 500);
        }
      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity(controls) {
          var _this28 = this;

          Object.keys(controls).forEach(function (key) {
            if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) _this28.updateValueAndValidity(controls[key].controls);else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) _this28.updateValueAndValidity(controls[key].controls);else controls[key].updateValueAndValidity();
          });
        }
      }, {
        key: "expressionProcessor",
        value: function expressionProcessor(controls) {
          var _this29 = this;

          var rootFieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          Object.keys(controls).forEach(function (fieldName) {
            var formControl = controls[fieldName];

            if (formControl.validatorConfig) {
              Object.keys(AnnotationTypes).forEach(function (validatorName) {
                if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].disableExpression) {
                  formControl["disableExpression"] = formControl.validatorConfig[validatorName].disableExpression;
                  var columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].disableExpression);
                  defaultContainer.addChangeValidation(_this29.validationRule, rootFieldName + fieldName, columns);
                }

                if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
                  var _columns2 = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);

                  defaultContainer.addChangeValidation(_this29.validationRule, rootFieldName + fieldName, _columns2);
                }

                if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
                  var _columns3 = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);

                  defaultContainer.addChangeValidation(_this29.validationRule, rootFieldName + fieldName, _columns3);
                }

                if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
                  Object.keys(formControl.validatorConfig[validatorName].validation).forEach(function (t) {
                    if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean") defaultContainer.setLogicalConditional(_this29.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
                  });
                } else if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime || validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName || (validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName)) {
                  defaultContainer.setConditionalValueProp(_this29.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
                }
              });
            } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
              _this29.expressionProcessor(formControl.controls, "".concat(fieldName, "."));
            } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              if (formControl.controls) formControl.controls.forEach(function (t, i) {
                if (t.controls) _this29.expressionProcessor(t.controls, "".concat(fieldName, "[]"));
              });
            }
          });
        }
      }, {
        key: "setConditionalValidator",
        value: function setConditionalValidator(controls) {
          var _this30 = this;

          Object.keys(controls).forEach(function (fieldName) {
            if (_this30.validationRule.conditionalValidationProps && _this30.validationRule.conditionalValidationProps[fieldName]) {
              controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(_this30.validationRule.conditionalValidationProps[fieldName]);
            } else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] && _this30.validationRule.conditionalObjectProps) {
              var fields = _this30.validationRule.conditionalObjectProps.filter(function (t) {
                return t.objectPropName == fieldName;
              });

              var nestedFormGroup = controls[fieldName];
              var propWiseConditionalControls = {};
              fields.forEach(function (x) {
                if (!propWiseConditionalControls[x.propName]) propWiseConditionalControls[x.propName] = [];
                propWiseConditionalControls[x.propName].push(x.referencePropName);
              });
              Object.keys(propWiseConditionalControls).forEach(function (key) {
                nestedFormGroup.controls[key][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(propWiseConditionalControls[key]);
              });
            } else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
              //fix https://github.com/rxweb/rxweb/issues/274
              controls[fieldName].controls.forEach(function (t, i) {
                if (t.controls == undefined) _this30.setConditionalValidator(_defineProperty({}, i, t));else _this30.setConditionalValidator(t.controls);
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return RxwebFormDirective;
    }(BaseDirective);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])], RxwebFormDirective.prototype, "formGroup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rxwebForm'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxwebFormDirective.prototype, "ngForm", void 0);
    RxwebFormDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[formGroup],[rxwebForm]'
    })], RxwebFormDirective);

    var DecimalProvider = /*#__PURE__*/function () {
      function DecimalProvider(decimalPipe, localeId) {
        _classCallCheck(this, DecimalProvider);

        this.decimalPipe = decimalPipe;
        this.localeId = localeId;
        this.decimalSeperator = ".";
        this.groupSeperator = ",";
        this.isSetConfig = false;
        this.decimalSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Decimal);
        this.groupSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Group);
        this.setSymbolInConfig();
      }

      _createClass(DecimalProvider, [{
        key: "replacer",
        value: function replacer(value) {
          value = String(value);
          if (!this.isSetConfig) this.bindConfig();
          value = value.split(this.groupSeperator).join(BLANK);
          if (this.allowDecimalSymbol) value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
          var splitValue = value.split(this.decimalSeperator);
          value = splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1]) ? splitValue[0] : value;
          return value;
        }
      }, {
        key: "transFormDecimal",
        value: function transFormDecimal(value, digitsInfo) {
          value = String(value);

          if (!value) {
            return value;
          }

          return this.decimalPipe.transform(value.replace(ReactiveFormConfig.number.groupSymbol, "").replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
        }
      }, {
        key: "setSymbolInConfig",
        value: function setSymbolInConfig() {
          ReactiveFormConfig.number = {
            decimalSymbol: this.decimalSeperator,
            groupSymbol: this.groupSeperator
          };
        }
      }, {
        key: "bindConfig",
        value: function bindConfig() {
          if (ReactiveFormConfig.json) {
            if (ReactiveFormConfig.json.localeId) this.localeId = ReactiveFormConfig.json.localeId;
            if (ReactiveFormConfig.json.allowDecimalSymbol) this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
          }

          this.isSetConfig = true;
        }
      }]);

      return DecimalProvider;
    }();

    DecimalProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], String])], DecimalProvider);

    var HtmlControlTemplateDirective = function HtmlControlTemplateDirective(templateRef) {
      _classCallCheck(this, HtmlControlTemplateDirective);

      this.templateRef = templateRef;
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('htmlControlTemplate'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], HtmlControlTemplateDirective.prototype, "type", void 0);
    HtmlControlTemplateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[htmlControlTemplate]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])], HtmlControlTemplateDirective);

    var ControlHostDirective = /*#__PURE__*/function () {
      function ControlHostDirective(viewContainerRef) {
        _classCallCheck(this, ControlHostDirective);

        this.viewContainerRef = viewContainerRef;
      }

      _createClass(ControlHostDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.view) this.view.destroy();
          if (this.viewContainerRef) this.viewContainerRef.clear();
        }
      }, {
        key: "portal",
        set: function set(context) {
          if (context.templateRef) {
            if (this.view) {
              this.view.destroy();
              this.view = undefined;
            }

            this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
          }
        }
      }]);

      return ControlHostDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlHost'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ControlHostDirective.prototype, "portal", null);
    ControlHostDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[controlHost]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])], ControlHostDirective);

    var ControlExpressionProcess = /*#__PURE__*/function () {
      function ControlExpressionProcess() {
        _classCallCheck(this, ControlExpressionProcess);

        this.controlConfig = {};
        this.isProcessed = false;
      }

      _createClass(ControlExpressionProcess, [{
        key: "setModelConfig",
        value: function setModelConfig(control) {
          this.isProcessed = true;

          if (this.controlConfig && this.controlConfig.validatorConfig) {
            control[VALIDATOR_CONFIG] = this.controlConfig.validatorConfig;
            this.controlConfig = undefined;
          }
        }
      }]);

      return ControlExpressionProcess;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ControlExpressionProcess.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ControlExpressionProcess.prototype, "formControlName", void 0);

    var BaseValidator = /*#__PURE__*/function (_ControlExpressionPro) {
      _inherits(BaseValidator, _ControlExpressionPro);

      var _super6 = _createSuper(BaseValidator);

      function BaseValidator() {
        var _this31;

        _classCallCheck(this, BaseValidator);

        _this31 = _super6.apply(this, arguments);
        _this31.validators = [];
        return _this31;
      }

      _createClass(BaseValidator, [{
        key: "validation",
        value: function validation(control) {
          var result = null;

          var _iterator36 = _createForOfIteratorHelper(this.validators),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var validator = _step36.value;
              result = validator(control);
              if (result) break;
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          if (!result && this.maskProvider) result = this.maskProvider.validate();
          return result;
        }
      }, {
        key: "setEventName",
        value: function setEventName() {
          var eventName = '';

          switch (this.element.tagName) {
            case INPUT:
            case TEXTAREA:
              eventName = this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE ? CHANGE : INPUT;
              break;

            case SELECT:
              eventName = CHANGE;
              break;
          }

          this.eventName = eventName.toLowerCase();
        }
      }]);

      return BaseValidator;
    }(ControlExpressionProcess);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BaseValidator.prototype, "formControl", void 0);

    var MaskProvider = /*#__PURE__*/function () {
      function MaskProvider(input, mask, renderer, formControl, config) {
        _classCallCheck(this, MaskProvider);

        this.input = input;
        this.mask = mask;
        this.renderer = renderer;
        this.formControl = formControl;
        this.config = config;
        this.eventListeners = [];
        this.type = 'text';
        this.slotChar = '_';
        this.autoClear = false;
        this.isInvalid = false;
        this.internalProcess = false;
        this.bind();
      }

      _createClass(MaskProvider, [{
        key: "bind",
        value: function bind() {
          if (RegexValidator.isNotBlank(this.formControl.value)) this.input.value = this.formControl.value;
          this.tests = [];
          this.partialPosition = this.mask.length;
          this.len = this.mask.length;
          this.firstNonMaskPos = null;
          this.defs = {
            '9': '[0-9]',
            'a': '[A-Za-z]',
            '*': '[A-Za-z0-9]'
          };
          this.androidChrome = false;
          var maskTokens = this.mask.split('');

          for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];

            if (c == '?') {
              this.len--;
              this.partialPosition = i;
            } else if (this.defs[c]) {
              this.tests.push(new RegExp(this.defs[c]));

              if (this.firstNonMaskPos === null) {
                this.firstNonMaskPos = this.tests.length - 1;
              }

              if (i < this.partialPosition) {
                this.lastRequiredNonMaskPos = this.tests.length - 1;
              }
            } else {
              this.tests.push(null);
            }
          }

          this.buffer = [];

          for (var _i6 = 0; _i6 < maskTokens.length; _i6++) {
            var _c = maskTokens[_i6];

            if (_c != '?') {
              if (this.defs[_c]) this.buffer.push(this.getPlaceholder(_i6));else this.buffer.push(_c);
            }
          }

          this.defaultBuffer = this.buffer.join('');
          this.focusText = this.input.value;
          this.bindEvents();
          this.checkVal();
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          this.eventListeners.push(this.renderer.listen(this.input, FOCUS, this.onFocus.bind(this)));
          this.eventListeners.push(this.renderer.listen(this.input, BLUR, this.onBlur.bind(this)));
          this.eventListeners.push(this.renderer.listen(this.input, KEY_DOWN, this.onKeyDown.bind(this)));
          this.eventListeners.push(this.renderer.listen(this.input, KEY_PRESS, this.onKeyPress.bind(this)));
          this.eventListeners.push(this.renderer.listen(this.input, "input", this.onInput.bind(this)));
          this.eventListeners.push(this.renderer.listen(this.input, PASTE, this.handleInputChange.bind(this)));
        }
      }, {
        key: "validate",
        value: function validate() {
          var config = getConfigObject(this.config, this.formControl);

          if (RegexValidator.isNotBlank(this.getUnmaskedValue()) && FormProvider.ProcessRule(this.formControl, config)) {
            if (this.isInvalid) {
              return ObjectMaker.toJson(AnnotationTypes.mask, config, [this.formControl.value]);
            }
          }

          return ObjectMaker["null"]();
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          if (this.input) {
            if (this.value == undefined || this.value == null) {
              this.input.value = '';
            }

            this.checkVal();
          }

          this.updateFilledState();
        }
      }, {
        key: "caret",
        value: function caret(first, last) {
          var range, begin, end;

          if (!this.input.offsetParent || this.input !== document.activeElement) {
            return;
          }

          if (typeof first == 'number') {
            begin = first;
            end = typeof last === 'number' ? last : begin;

            if (this.input.setSelectionRange) {
              this.input.setSelectionRange(begin, end);
            } else if (this.input['createTextRange']) {
              range = this.input['createTextRange']();
              range.collapse(true);
              range.moveEnd('character', end);
              range.moveStart('character', begin);
              range.select();
            }
          } else {
            if (this.input.setSelectionRange) {
              begin = this.input.selectionStart;
              end = this.input.selectionEnd;
            } else if (document['selection'] && document['selection'].createRange) {
              range = document['selection'].createRange();
              begin = 0 - range.duplicate().moveStart('character', -100000);
              end = begin + range.text.length;
            }

            return {
              begin: begin,
              end: end
            };
          }
        }
      }, {
        key: "isCompleted",
        value: function isCompleted() {
          for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
              return false;
            }
          }

          this.isInvalid = false;
          this.formControl.updateValueAndValidity();
          return true;
        }
      }, {
        key: "getPlaceholder",
        value: function getPlaceholder(i) {
          if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
          }

          return this.slotChar.charAt(0);
        }
      }, {
        key: "seekNext",
        value: function seekNext(pos) {
          while (++pos < this.len && !this.tests[pos]) {
            ;
          }

          return pos;
        }
      }, {
        key: "seekPrev",
        value: function seekPrev(pos) {
          while (--pos >= 0 && !this.tests[pos]) {
            ;
          }

          return pos;
        }
      }, {
        key: "shiftL",
        value: function shiftL(begin, end) {
          var i, j;

          if (begin < 0) {
            return;
          }

          for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
              if (j < this.len && this.tests[i].test(this.buffer[j])) {
                this.buffer[i] = this.buffer[j];
                this.buffer[j] = this.getPlaceholder(j);
              } else {
                break;
              }

              j = this.seekNext(j);
            }
          }

          this.writeBuffer();
          this.caret(Math.max(this.firstNonMaskPos, begin));
        }
      }, {
        key: "shiftR",
        value: function shiftR(pos) {
          var i, c, j, t;

          for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
              j = this.seekNext(i);
              t = this.buffer[i];
              this.buffer[i] = c;

              if (j < this.len && this.tests[j].test(t)) {
                c = t;
              } else {
                break;
              }
            }
          }
        }
      }, {
        key: "handleAndroidInput",
        value: function handleAndroidInput(e) {
          var curVal = this.input.value;
          var pos = this.caret();

          if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            this.checkVal(true);

            while (pos.begin > 0 && !this.tests[pos.begin - 1]) {
              pos.begin--;
            }

            if (pos.begin === 0) {
              while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) {
                pos.begin++;
              }
            }

            this.caret(pos.begin, pos.begin);
          } else {
            var pos2 = this.checkVal(true);

            while (pos.begin < this.len && !this.tests[pos.begin]) {
              pos.begin++;
            }

            this.caret(pos.begin, pos.begin);
          }

          if (this.isCompleted()) {
            this.isInvalid = false;
          } else {
            this.isInvalid = true;
            this.formControl.updateValueAndValidity();
          }
        }
      }, {
        key: "onBlur",
        value: function onBlur(e) {
          this.focus = false;
          this.checkVal();
          this.updateModel(e);
          this.updateFilledState();

          if (this.input.value != this.focusText) {
            var event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            this.input.dispatchEvent(event);
            var maskedValue = this.input.value;
            this.formControl.setValue(this.getUnmaskedValue());
            this.input.value = maskedValue;
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          var k = e.which || e.keyCode,
              pos,
              begin,
              end;
          var iPhone = false;
          this.oldVal = this.input.value;

          if (k === 8 || k === 46 || iPhone) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;

            if (end - begin === 0) {
              begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
              end = k === 46 ? this.seekNext(end) : end;
            }

            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.setControlValue(e, false);
            this.updateModel(e);
            e.preventDefault();
          } else if (k === 13) {
            this.onBlur(e);
            this.setControlValue(e, false);
            this.updateModel(e);
          } else if (k === 27) {
            this.input.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            this.setControlValue(e, false);
            e.preventDefault();
          }
        }
      }, {
        key: "onKeyPress",
        value: function onKeyPress(e) {
          var k = e.which || e.keyCode,
              pos = this.caret(),
              p,
              c,
              next,
              completed;

          if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            return;
          } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
              this.clearBuffer(pos.begin, pos.end);
              this.shiftL(pos.begin, pos.end - 1);
            }

            p = this.seekNext(pos.begin - 1);

            if (p < this.len) {
              c = String.fromCharCode(k);

              if (this.tests[p].test(c)) {
                this.shiftR(p);
                this.buffer[p] = c;
                this.writeBuffer();
                next = this.seekNext(p);
                this.caret(next);

                if (pos.begin <= this.lastRequiredNonMaskPos) {
                  completed = this.isCompleted();
                }
              }
            }

            e.preventDefault();
          }

          this.updateModel(e);
          if (completed === undefined) completed = this.isCompleted();
          this.setControlValue(e, completed);
        }
      }, {
        key: "clearBuffer",
        value: function clearBuffer(start, end) {
          var i;

          for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
              this.buffer[i] = this.getPlaceholder(i);
            }
          }
        }
      }, {
        key: "writeBuffer",
        value: function writeBuffer() {
          this.input.value = this.buffer.join('');
        }
      }, {
        key: "checkVal",
        value: function checkVal(allow) {
          var test = this.input.value,
              lastMatch = -1,
              i,
              c,
              pos;

          for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
              this.buffer[i] = this.getPlaceholder(i);

              while (pos++ < test.length) {
                c = test.charAt(pos - 1);

                if (this.tests[i].test(c)) {
                  this.buffer[i] = c;
                  lastMatch = i;
                  break;
                }
              }

              if (pos > test.length) {
                this.clearBuffer(i + 1, this.len);
                break;
              }
            } else {
              if (this.buffer[i] === test.charAt(pos)) {
                pos++;
              }

              if (i < this.partialPosition) {
                lastMatch = i;
              }
            }
          }

          if (allow) {
            this.writeBuffer();
          } else if (lastMatch + 1 < this.partialPosition) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
              this.isInvalid = true;
            } else {
              this.isInvalid = true;
              this.writeBuffer();
            }
          } else {
            this.writeBuffer();
            this.input.value = this.input.value.substring(0, lastMatch + 1);
          }

          return this.partialPosition ? i : this.firstNonMaskPos;
        }
      }, {
        key: "onFocus",
        value: function onFocus(event) {
          var _this32 = this;

          this.focus = true;
          clearTimeout(this.caretTimeoutId);
          var pos;
          this.focusText = this.input.value;
          pos = this.checkVal();
          this.caretTimeoutId = setTimeout(function () {
            if (_this32.input !== document.activeElement) {
              return;
            }

            _this32.writeBuffer();

            if (pos == _this32.mask.replace("?", "").length) {
              _this32.caret(0, pos);
            } else {
              _this32.caret(pos);
            }

            _this32.updateFilledState();
          }, 10);
        }
      }, {
        key: "onInput",
        value: function onInput(event) {
          if (this.androidChrome) this.handleAndroidInput(event);else this.handleInputChange(event);
        }
      }, {
        key: "setControlValue",
        value: function setControlValue(e, isValid) {
          this.isInvalid = !isValid;
          var value = this.input.value;
          var controlValue = '';
          if (!this.isInvalid) controlValue = this.getUnmaskedValue();
          this.formControl.setValue(controlValue);
          this.input.value = value;
          if (!isValid) this.onFocus(e);
        }
      }, {
        key: "handleInputChange",
        value: function handleInputChange(event) {
          var _this33 = this;

          setTimeout(function () {
            var pos = _this33.checkVal(true);

            _this33.caret(pos);

            _this33.updateModel(event);

            _this33.setControlValue(event, _this33.isCompleted());
          }, 0);
        }
      }, {
        key: "getUnmaskedValue",
        value: function getUnmaskedValue() {
          var unmaskedBuffer = [];

          for (var i = 0; i < this.buffer.length; i++) {
            var c = this.buffer[i];

            if (this.tests[i] && c != this.getPlaceholder(i)) {
              unmaskedBuffer.push(c);
            }
          }

          return unmaskedBuffer.join('');
        }
      }, {
        key: "updateModel",
        value: function updateModel(e) {}
      }, {
        key: "updateFilledState",
        value: function updateFilledState() {
          this.filled = this.input && this.input.value != '';
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          var eventCount = this.eventListeners.length;

          for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
          }

          this.eventListeners = [];
        }
      }]);

      return MaskProvider;
    }();

    var NGMODEL_BINDING = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
        return RxFormControlDirective;
      }),
      multi: true
    };
    var ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
    var NUMERIC = "numeric";
    var IS_FORMAT = "isFormat";
    var DIGITS_INFO = "digitsInfo";

    var RxFormControlDirective = /*#__PURE__*/function (_BaseValidator) {
      _inherits(RxFormControlDirective, _BaseValidator);

      var _super7 = _createSuper(RxFormControlDirective);

      function RxFormControlDirective(elementRef, renderer, decimalProvider) {
        var _this34;

        _classCallCheck(this, RxFormControlDirective);

        _this34 = _super7.call(this);
        _this34.elementRef = elementRef;
        _this34.renderer = renderer;
        _this34.decimalProvider = decimalProvider;
        _this34.eventListeners = [];
        _this34.isNumericSubscribed = false;
        _this34.isFocusCalled = false;
        _this34.isMasked = false;
        _this34.element = elementRef.nativeElement;

        _this34.setEventName();

        return _this34;
      }

      _createClass(RxFormControlDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          var validators = [];
          Object.keys(APP_VALIDATORS).forEach(function (validatorName) {
            if (_this35["rx".concat(validatorName)] || ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && _this35["rx".concat(validatorName)] == BLANK) {
              validators.push(APP_VALIDATORS[validatorName](_this35["rx".concat(validatorName)]));

              if (_this35.name && !(_this35.formControlName && _this35.formControl)) {
                ApplicationUtil.configureControl(_this35.controlConfig, _this35["rx".concat(validatorName)], validatorName);
              }
            }
          });
          if (validators.length > 0) this.validators = validators;

          if (this.rxnumeric && (this.rxnumeric.isFormat || this.rxnumeric.digitsInfo)) {
            this.bindNumericElementEvent();
          }
        }
      }, {
        key: "blurEvent",
        value: function blurEvent() {
          if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
            if (this.formControl.value !== null && this.formControl.value !== undefined) {
              var value = this.decimalProvider.transFormDecimal(this.formControl.value, this.rxnumeric.digitsInfo);
              value = !this.rxnumeric.isFormat ? this.decimalProvider.replacer(value) : value;
              this.setValueOnElement(value);
            }

            this.isFocusCalled = false;
          }
        }
      }, {
        key: "bindNumericElementEvent",
        value: function bindNumericElementEvent(config) {
          var _this36 = this;

          if (config) this.rxnumeric = config;
          var listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
          this.eventListeners.push(listener);
          listener = this.renderer.listen(this.element, FOCUS, function (event) {
            _this36.isFocusCalled = true;

            if (!(_this36.formControl && _this36.formControl.errors && _this36.formControl.errors.numeric) && _this36.formControl.value != null) {
              var value = _this36.decimalProvider.replacer(_this36.element.value);

              _this36.setValueOnElement(value);
            }
          });
          this.eventListeners.push(listener);
        }
      }, {
        key: "bindValueChangeEvent",
        value: function bindValueChangeEvent() {
          var _this37 = this;

          if (this.eventName != BLANK) {
            var listener = this.renderer.listen(this.element, this.eventName, function () {
              Object.keys(_this37.validationControls).forEach(function (fieldName) {
                _this37.validationControls[fieldName].updateValueAndValidity();
              });
            });
            this.eventListeners.push(listener);
          }
        }
      }, {
        key: "subscribeNumericFormatter",
        value: function subscribeNumericFormatter() {
          if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG][NUMERIC] && (this.formControl[VALIDATOR_CONFIG][NUMERIC][IS_FORMAT] || this.formControl[VALIDATOR_CONFIG][NUMERIC][DIGITS_INFO])) {
            if (!this.isNumericSubscribed) {
              this.bindNumericElementEvent(this.formControl[VALIDATOR_CONFIG][NUMERIC]);
              this.isNumericSubscribed = true;
            }

            if (!this.isFocusCalled && RegexValidator.isNotBlank(this.formControl.value)) {
              this.blurEvent();
            }
          }
        }
      }, {
        key: "subscribeMaskValidator",
        value: function subscribeMaskValidator() {
          if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG]["mask"] && !this.isMasked) {
            var config = this.formControl[VALIDATOR_CONFIG]["mask"];
            this.maskProvider = new MaskProvider(this.element, config.mask, this.renderer, this.formControl, config);
            this.isMasked = true;
          }
        }
      }, {
        key: "setValueOnElement",
        value: function setValueOnElement(value) {
          this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
        }
      }, {
        key: "setTemplateValidators",
        value: function setTemplateValidators(control) {
          for (var validatorName in control[VALIDATOR_CONFIG]) {
            this[validatorName] = control[VALIDATOR_CONFIG][validatorName];
          }

          delete control[TEMPLATE_VALIDATION_CONFIG];
          delete control[VALIDATOR_CONFIG];
          this.ngOnInit();
        }
      }, {
        key: "updateOnElementClass",
        value: function updateOnElementClass(element) {
          var previousClassName = '';
          return function (className) {
            if (previousClassName) element.classList.remove(previousClassName);
            if (className) element.classList.add(className);
            previousClassName = className;
          };
        }
      }, {
        key: "setValidatorConfig",
        value: function setValidatorConfig(control) {
          if (!this.formControl) {
            this.formControl = control;
            var rxFormControl = this.formControl;
            if (rxFormControl.updateOnElementClass) rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
          }

          this.subscribeMaskValidator();
          this.subscribeNumericFormatter();
          if (control[TEMPLATE_VALIDATION_CONFIG]) this.setTemplateValidators(control);

          if (control[CONDITIONAL_VALIDATOR]) {
            this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
            delete control[CONDITIONAL_VALIDATOR];
          }
        }
      }, {
        key: "validate",
        value: function validate(control) {
          this.setValidatorConfig(control);
          if (this.conditionalValidator) this.conditionalValidator(control);
          if (!this.isProcessed) this.setModelConfig(control);
          return this.validators && this.validators.length > 0 || this.maskProvider ? this.validation(control) : null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.controls = undefined;
          var eventCount = this.eventListeners.length;

          for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
          }

          this.eventListeners = [];
          if (this.maskProvider) this.maskProvider.onDestroy();
        }
      }, {
        key: "validationControls",
        set: function set(value) {
          this.controls = value;
        },
        get: function get() {
          return this.controls;
        }
      }]);

      return RxFormControlDirective;
    }(BaseValidator);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxalpha", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxalphaNumeric", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxascii", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxcompare", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxcompose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxcontains", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxcreditCard", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxdataUri", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxdifferent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxdigit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxemail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxendsWith", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxeven", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxextension", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxfactor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxfileSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxgreaterThanEqualTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxgreaterThan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxhexColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxjson", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlatitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlatLong", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxleapYear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlessThan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlessThanEqualTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlongitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxlowerCase", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxmac", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxmaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxmaxLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxmaxNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxminDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxminLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxminNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxnumeric", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxodd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxpassword", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxprimeNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxrequired", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxrange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxrule", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxstartsWith", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxtime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxupperCase", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxurl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxunique", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxnotEmpty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxcusip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxgrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RxFormControlDirective.prototype, "rxdate", void 0);
    RxFormControlDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ngModel],[formControlName],[formControl]',
      providers: [NGMODEL_BINDING]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DecimalProvider])], RxFormControlDirective);
    var FileControlDirective_1;
    var VALIDATOR_CONFIG$1 = "validatorConfig";
    var FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];

    var FileControlDirective = FileControlDirective_1 = /*#__PURE__*/function () {
      function FileControlDirective(elementRef) {
        _classCallCheck(this, FileControlDirective);

        this.elementRef = elementRef;
        this.isProcessed = false;
        this.validators = [];

        this.onChange = function (_) {};

        this.onTouched = function () {};

        this.element = elementRef.nativeElement;
      }

      _createClass(FileControlDirective, [{
        key: "onChangeCall",
        value: function onChangeCall(element) {
          var files = element.files;
          if (this.writeFile) this.onChange(files);else {
            if (files.length > 0) this.onChange(element.value);else this.onChange(undefined);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {}
      }, {
        key: "registerOnChange",
        value: function registerOnChange(invocation) {
          this.onChange = invocation;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(invocation) {
          this.onTouched = invocation;
        }
      }, {
        key: "setConfig",
        value: function setConfig(control) {
          var _this38 = this;

          FILE_VALIDATOR_NAMES.forEach(function (t) {
            if (!_this38[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t]) _this38[t] = control[VALIDATOR_CONFIG$1][t];
          });
          this.isProcessed = true;
        }
      }, {
        key: "pushValidator",
        value: function pushValidator(validatorName, config) {
          if (config) this.validators.push(APP_VALIDATORS[validatorName](config));
        }
      }, {
        key: "validate",
        value: function validate(control) {
          if (!this.isProcessed) this.setConfig(control);
          var result = null;

          var _iterator37 = _createForOfIteratorHelper(this.validators),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var validator = _step37.value;
              result = validator(control, this.element.files);
              if (result) break;
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }

          return result;
        }
      }, {
        key: "extension",
        set: function set(config) {
          this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
        }
      }, {
        key: "fileSize",
        set: function set(config) {
          this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
        }
      }, {
        key: "file",
        set: function set(config) {
          this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
        }
      }]);

      return FileControlDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], FileControlDirective.prototype, "writeFile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], FileControlDirective.prototype, "extension", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], FileControlDirective.prototype, "fileSize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], FileControlDirective.prototype, "file", null);
    FileControlDirective = FileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "input[type=file]",
      host: {
        "(change)": "onChangeCall($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: FileControlDirective_1,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return FileControlDirective_1;
        }),
        multi: true
      }]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], FileControlDirective);
    var ImageFileControlDirective_1;
    var VALIDATOR_CONFIG$2 = "validatorConfig";

    var ImageFileControlDirective = ImageFileControlDirective_1 = /*#__PURE__*/function () {
      function ImageFileControlDirective(elementRef) {
        _classCallCheck(this, ImageFileControlDirective);

        this.elementRef = elementRef;
        this.isProcessed = false;
        this.element = elementRef.nativeElement;
      }

      _createClass(ImageFileControlDirective, [{
        key: "setConfig",
        value: function setConfig(control) {
          var image = "image";
          if (!this[image] && control[VALIDATOR_CONFIG$2] && control[VALIDATOR_CONFIG$2][image]) this[image] = control[VALIDATOR_CONFIG$2][image];
          this.isProcessed = true;
        }
      }, {
        key: "validate",
        value: function validate(control) {
          if (!this.isProcessed) this.setConfig(control);

          if (this.imageValidation) {
            return this.imageValidation(control, this.element.files);
          }

          return new Promise(function (resolve, reject) {
            resolve(null);
          });
        }
      }, {
        key: "image",
        set: function set(config) {
          this.imageValidation = APP_VALIDATORS.image(config);
        }
      }]);

      return ImageFileControlDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ImageFileControlDirective.prototype, "image", null);
    ImageFileControlDirective = ImageFileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "input[type=file]",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ImageFileControlDirective_1;
        }),
        multi: true
      }]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ImageFileControlDirective);
    var AsyncValidationDirective_1;

    var AsyncValidationDirective = AsyncValidationDirective_1 = /*#__PURE__*/function () {
      function AsyncValidationDirective() {
        _classCallCheck(this, AsyncValidationDirective);
      }

      _createClass(AsyncValidationDirective, [{
        key: "validate",
        value: function validate(control) {
          if (this.async) return this.async(control);
          return new Promise(function (resolve, reject) {
            resolve(null);
          });
        }
      }]);

      return AsyncValidationDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AsyncValidationDirective.prototype, "async", void 0);
    AsyncValidationDirective = AsyncValidationDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ngModel],[formControlName],[formControl]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return AsyncValidationDirective_1;
        }),
        multi: true
      }]
    })], AsyncValidationDirective);
    var RxReactiveFormsModule_1;

    var RxReactiveFormsModule = RxReactiveFormsModule_1 = /*#__PURE__*/function () {
      function RxReactiveFormsModule() {
        _classCallCheck(this, RxReactiveFormsModule);
      }

      _createClass(RxReactiveFormsModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: RxReactiveFormsModule_1,
            providers: []
          };
        }
      }]);

      return RxReactiveFormsModule;
    }();

    RxReactiveFormsModule = RxReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective, AsyncValidationDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      exports: [AsyncValidationDirective, RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
    })], RxReactiveFormsModule);

    function baseDecoratorFunction(annotationType, config) {
      var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.init(target, parameterIndex, propertyKey, annotationType, config, isAsync);
      };
    }

    function alpha(config) {
      return baseDecoratorFunction(AnnotationTypes.alpha, config);
    }

    function alphaNumeric(config) {
      return baseDecoratorFunction(AnnotationTypes.alphaNumeric, config);
    }

    function compare(config) {
      return baseDecoratorFunction(AnnotationTypes.compare, config);
    }

    function contains(config) {
      return baseDecoratorFunction(AnnotationTypes.contains, config);
    }

    function creditCard(config) {
      return baseDecoratorFunction(AnnotationTypes.creditCard, config);
    }

    function digit(config) {
      return baseDecoratorFunction(AnnotationTypes.digit, config);
    }

    function email(config) {
      return baseDecoratorFunction(AnnotationTypes.email, config);
    }

    function hexColor(config) {
      return baseDecoratorFunction(AnnotationTypes.hexColor, config);
    }

    function lowerCase(config) {
      return baseDecoratorFunction(AnnotationTypes.lowerCase, config);
    }

    function maxDate(config) {
      return baseDecoratorFunction(AnnotationTypes.maxDate, config);
    }

    function maxLength(config) {
      return baseDecoratorFunction(AnnotationTypes.maxLength, config);
    }

    function minDate(config) {
      return baseDecoratorFunction(AnnotationTypes.minDate, config);
    }

    function maxNumber(config) {
      return baseDecoratorFunction(AnnotationTypes.maxNumber, config);
    }

    function minLength(config) {
      return baseDecoratorFunction(AnnotationTypes.minLength, config);
    }

    function minNumber(config) {
      return baseDecoratorFunction(AnnotationTypes.minNumber, config);
    }

    function password(config) {
      return baseDecoratorFunction(AnnotationTypes.password, config);
    }

    function pattern(config) {
      return baseDecoratorFunction(AnnotationTypes.pattern, config);
    }

    function propArray(entity, config) {
      return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
          name: propertyKey,
          propertyType: ARRAY_PROPERTY,
          entity: entity,
          dataPropertyName: config ? config.name : undefined,
          entityProvider: config ? config.entityProvider : undefined,
          arrayConfig: config ? {
            allowMaxIndex: config.allowMaxIndex,
            messageKey: config.messageKey,
            createBlank: config.createBlank
          } : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
      };
    }

    function propObject(entity, config) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.initPropertyObject(propertyKey, OBJECT_PROPERTY, entity, target, config);
      };
    }

    function prop(config) {
      return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
          name: propertyKey,
          propertyType: PROPERTY,
          dataPropertyName: config ? config.name : undefined,
          defaultValue: config ? config.defaultValue : undefined,
          ignore: config ? config.ignore : undefined,
          isPrimaryKey: config ? config.isPrimaryKey : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
      };
    }

    function range(config) {
      return baseDecoratorFunction(AnnotationTypes.range, config);
    }

    function required(config) {
      return baseDecoratorFunction(AnnotationTypes.required, config);
    }

    function upperCase(config) {
      return baseDecoratorFunction(AnnotationTypes.upperCase, config);
    }

    function time(config) {
      return baseDecoratorFunction(AnnotationTypes.time, config);
    }

    function url(config) {
      return baseDecoratorFunction(AnnotationTypes.url, config);
    }

    function json(config) {
      return baseDecoratorFunction(AnnotationTypes.json, config);
    }

    function greaterThan(config) {
      return baseDecoratorFunction(AnnotationTypes.greaterThan, config);
    }

    function greaterThanEqualTo(config) {
      return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, config);
    }

    function lessThanEqualTo(config) {
      return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, config);
    }

    function lessThan(config) {
      return baseDecoratorFunction(AnnotationTypes.lessThan, config);
    }

    function choice(config) {
      return baseDecoratorFunction(AnnotationTypes.choice, config);
    }

    function different(config) {
      return baseDecoratorFunction(AnnotationTypes.different, config);
    }

    function numeric(config) {
      return baseDecoratorFunction(AnnotationTypes.numeric, config);
    }

    function even(config) {
      return baseDecoratorFunction(AnnotationTypes.even, config);
    }

    function odd(config) {
      return baseDecoratorFunction(AnnotationTypes.odd, config);
    }

    function factor(config) {
      return baseDecoratorFunction(AnnotationTypes.factor, config);
    }

    function leapYear(config) {
      return baseDecoratorFunction(AnnotationTypes.leapYear, config);
    }

    function allOf(config) {
      return baseDecoratorFunction(AnnotationTypes.allOf, config);
    }

    function oneOf(config) {
      return baseDecoratorFunction(AnnotationTypes.oneOf, config);
    }

    function noneOf(config) {
      return baseDecoratorFunction(AnnotationTypes.noneOf, config);
    }

    function mac(config) {
      return baseDecoratorFunction(AnnotationTypes.mac, config);
    }

    function ascii(config) {
      return baseDecoratorFunction(AnnotationTypes.ascii, config);
    }

    function dataUri(config) {
      return baseDecoratorFunction(AnnotationTypes.dataUri, config);
    }

    function port(config) {
      return baseDecoratorFunction(AnnotationTypes.port, config);
    }

    function latLong(config) {
      return baseDecoratorFunction(AnnotationTypes.latLong, config);
    }

    function extension(config) {
      return baseDecoratorFunction(AnnotationTypes.extension, config);
    }

    function fileSize(config) {
      return baseDecoratorFunction(AnnotationTypes.fileSize, config);
    }

    function endsWith(config) {
      return baseDecoratorFunction(AnnotationTypes.endsWith, config);
    }

    function startsWith(config) {
      return baseDecoratorFunction(AnnotationTypes.startsWith, config);
    }

    function primeNumber(config) {
      return baseDecoratorFunction(AnnotationTypes.primeNumber, config);
    }

    function latitude(config) {
      return baseDecoratorFunction(AnnotationTypes.latitude, config);
    }

    function longitude(config) {
      return baseDecoratorFunction(AnnotationTypes.longitude, config);
    }

    function rule(config) {
      return baseDecoratorFunction(AnnotationTypes.rule, config);
    }

    function file(config) {
      return baseDecoratorFunction(AnnotationTypes.file, config);
    }

    function custom(config) {
      return baseDecoratorFunction(AnnotationTypes.custom, config);
    }

    function unique(config) {
      return baseDecoratorFunction(AnnotationTypes.unique, config);
    }

    function image(config) {
      return baseDecoratorFunction(AnnotationTypes.image, config);
    }

    function notEmpty(config) {
      return baseDecoratorFunction(AnnotationTypes.notEmpty, config);
    }

    function async(validators) {
      return baseDecoratorFunction(AnnotationTypes.async, validators, true);
    }

    function cusip(config) {
      return baseDecoratorFunction(AnnotationTypes.cusip, config);
    }

    function grid(config) {
      return baseDecoratorFunction(AnnotationTypes.grid, config);
    }

    function date(config) {
      return baseDecoratorFunction(AnnotationTypes.date, config);
    }

    function disable(config) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.disabled);
      };
    }

    function error(config) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.error);
      };
    }

    function and(config) {
      return baseDecoratorFunction(AnnotationTypes.and, config);
    }

    function or(config) {
      return baseDecoratorFunction(AnnotationTypes.or, config);
    }

    function not(config) {
      return baseDecoratorFunction(AnnotationTypes.not, config);
    }

    function trim$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.trim);
      };
    }

    function ltrim$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.ltrim);
      };
    }

    function rtrim$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.rtrim);
      };
    }

    function blacklist$1(chars) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.blacklist, chars);
      };
    }

    function stripLow$1(keepNewLines) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.stripLow, keepNewLines);
      };
    }

    function toBoolean$1(strict) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toBoolean, strict);
      };
    }

    function toDouble$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDouble);
      };
    }

    function toFloat$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toFloat);
      };
    }

    function toInt$1(radix) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toInt, radix);
      };
    }

    function toString$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.string);
      };
    }

    function whitelist$1(chars) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.whitelist, chars);
      };
    }

    function toDate$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDate);
      };
    }

    function escape$1() {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.escape);
      };
    }

    function prefix$1(text) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.prefix, text);
      };
    }

    function suffix$1(text) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.suffix, text);
      };
    }

    function model(config) {
      return function (target) {
        defaultContainer.addPropsConfig(target, config);
      };
    }

    function sanitize$1(config) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.sanitize, config);
      };
    }

    function elementClass(config) {
      return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.elementClass);
      };
    }

    function minTime(config) {
      return baseDecoratorFunction(AnnotationTypes.minTime, config);
    }

    function maxTime(config) {
      return baseDecoratorFunction(AnnotationTypes.maxTime, config);
    }

    function compose(config) {
      return baseDecoratorFunction(AnnotationTypes.compose, config);
    }

    function requiredTrue(config) {
      return baseDecoratorFunction(AnnotationTypes.requiredTrue, config);
    }

    function mask(config) {
      return baseDecoratorFunction(AnnotationTypes.mask, config);
    }

    function baseValidator(config, type, validator) {
      var rxwebValidator = function rxwebValidator(control, target) {
        if (typeof control == STRING) defaultContainer.init(target, 0, control, type, config, false);else {
          if (config && (!control.validatorConfig || !control.validatorConfig[type])) ApplicationUtil.configureControl(control, config, type);
          return validator(control);
        }
        return null;
      };

      Object.defineProperty(rxwebValidator, "name", {
        value: RX_WEB_VALIDATOR
      });
      return rxwebValidator;
    }

    function alphaValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.alpha, alphaValidator(config));
    }

    function allOfValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.allOf, allOfValidator(config));
    }

    function alphaNumericValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.alphaNumeric, alphaNumericValidator(config));
    }

    function choiceValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.choice, choiceValidator(config));
    }

    function compareValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.compare, compareValidator(config));
    }

    function containsValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.contains, containsValidator(config));
    }

    function creditCardValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.creditCard, creditCardValidator(config));
    }

    function differentValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.different, differentValidator(config));
    }

    function digitValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.digit, digitValidator(config));
    }

    function emailValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.email, emailValidator(config));
    }

    function evenValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.even, evenValidator(config));
    }

    function factorValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.factor, factorValidator(config));
    }

    function greaterThanEqualToValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.greaterThanEqualTo, greaterThanEqualToValidator(config));
    }

    function greaterThanValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.greaterThan, greaterThanValidator(config));
    }

    function hexColorValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.hexColor, hexColorValidator(config));
    }

    function jsonValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.json, jsonValidator(config));
    }

    function leapYearValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.leapYear, leapYearValidator(config));
    }

    function lessThanEqualToValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.lessThanEqualTo, lessThanEqualToValidator(config));
    }

    function lessThanValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.lessThan, lessThanValidator(config));
    }

    function lowerCaseValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.lowerCase, lowercaseValidator(config));
    }

    function macValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.mac, macValidator(config));
    }

    function maxDateValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.maxDate, maxDateValidator(config));
    }

    function maxLengthValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.maxLength, maxLengthValidator(config));
    }

    function maxNumberValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.maxNumber, maxNumberValidator(config));
    }

    function minDateValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.minDate, minDateValidator(config));
    }

    function minLengthValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.minLength, minLengthValidator(config));
    }

    function minNumberValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.minNumber, minNumberValidator(config));
    }

    function noneOfValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.noneOf, noneOfValidator(config));
    }

    function numericValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.numeric, numericValidator(config));
    }

    function oddValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.odd, oddValidator(config));
    }

    function oneOfValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.oneOf, oneOfValidator(config));
    }

    function passwordcValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.password, passwordValidator(config));
    }

    function patternValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.pattern, patternValidator(config));
    }

    function rangeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.range, rangeValidator(config));
    }

    function requiredValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.required, requiredValidator(config));
    }

    function timeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.time, timeValidator(config));
    }

    function upperCaseValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.upperCase, uppercaseValidator(config));
    }

    function urlValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.url, urlValidator(config));
    }

    function asciiValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.ascii, asciiValidator(config));
    }

    function dataUriValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.dataUri, dataUriValidator(config));
    }

    function portValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.port, portValidator(config));
    }

    function latLongValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.latLong, latLongValidator(config));
    }

    function extensionValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.extension, function (control) {
        return null;
      });
    }

    function fileSizeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.fileSize, function (control) {
        return null;
      });
    }

    function endsWithValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.endsWith, endsWithValidator(config));
    }

    function startsWithValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config));
    }

    function primeNumberValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.primeNumber, primeNumberValidator(config));
    }

    function latitudeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.latitude, latitudeValidator(config));
    }

    function longitudeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.longitude, longitudeValidator(config));
    }

    function composeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.compose, composeValidator(config));
    }

    function fileValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.file, function (control) {
        return null;
      });
    }

    function customValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.custom, customValidator(config));
    }

    function uniqueValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.unique, uniqueValidator(config));
    }

    function imageValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.image, function (control) {
        return null;
      });
    }

    function notEmptyValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.notEmpty, notEmptyValidator(config));
    }

    function ipValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.ip, ipValidator(config));
    }

    function cusipValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.cusip, cusipValidator(config));
    }

    function gridValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.grid, gridValidator(config));
    }

    function dateValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.date, dateValidator(config));
    }

    function andValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.and, andValidator(config));
    }

    function orValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.or, orValidator(config));
    }

    function notValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.not, notValidator(config));
    }

    function minTimeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.minTime, minTimeValidator(config));
    }

    function maxTimeValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.maxTime, maxTimeValidator(config));
    }

    function requiredTrueValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.requiredTrue, requiredTrueValidator(config));
    }

    function maskValidatorExtension(config) {
      return baseValidator(config, AnnotationTypes.mask, maskValidator(config));
    }

    var RxwebValidators = function RxwebValidators() {
      _classCallCheck(this, RxwebValidators);
    };

    RxwebValidators.alpha = alphaValidatorExtension;
    RxwebValidators.allOf = allOfValidatorExtension;
    RxwebValidators.alphaNumeric = alphaNumericValidatorExtension;
    RxwebValidators.choice = choiceValidatorExtension;
    RxwebValidators.compare = compareValidatorExtension;
    RxwebValidators.contains = containsValidatorExtension;
    RxwebValidators.creditCard = creditCardValidatorExtension;
    RxwebValidators.different = differentValidatorExtension;
    RxwebValidators.digit = digitValidatorExtension;
    RxwebValidators.email = emailValidatorExtension;
    RxwebValidators.even = evenValidatorExtension;
    RxwebValidators.factor = factorValidatorExtension;
    RxwebValidators.greaterThanEqualTo = greaterThanEqualToValidatorExtension;
    RxwebValidators.greaterThan = greaterThanValidatorExtension;
    RxwebValidators.hexColor = hexColorValidatorExtension;
    RxwebValidators.json = jsonValidatorExtension;
    RxwebValidators.leapYear = leapYearValidatorExtension;
    RxwebValidators.lessThanEqualTo = lessThanEqualToValidatorExtension;
    RxwebValidators.lessThan = lessThanValidatorExtension;
    RxwebValidators.lowerCase = lowerCaseValidatorExtension;
    RxwebValidators.mac = macValidatorExtension;
    RxwebValidators.maxDate = maxDateValidatorExtension;
    RxwebValidators.maxLength = maxLengthValidatorExtension;
    RxwebValidators.maxNumber = maxNumberValidatorExtension;
    RxwebValidators.minDate = minDateValidatorExtension;
    RxwebValidators.minLength = minLengthValidatorExtension;
    RxwebValidators.minNumber = minNumberValidatorExtension;
    RxwebValidators.noneOf = noneOfValidatorExtension;
    RxwebValidators.numeric = numericValidatorExtension;
    RxwebValidators.odd = oddValidatorExtension;
    RxwebValidators.oneOf = oneOfValidatorExtension;
    RxwebValidators.password = passwordcValidatorExtension;
    RxwebValidators.pattern = patternValidatorExtension;
    RxwebValidators.range = rangeValidatorExtension;
    RxwebValidators.required = requiredValidatorExtension;
    RxwebValidators.time = timeValidatorExtension;
    RxwebValidators.upperCase = upperCaseValidatorExtension;
    RxwebValidators.url = urlValidatorExtension;
    RxwebValidators.ascii = asciiValidatorExtension;
    RxwebValidators.dataUri = dataUriValidatorExtension;
    RxwebValidators.port = portValidatorExtension;
    RxwebValidators.latLong = latLongValidatorExtension;
    RxwebValidators.extension = extensionValidatorExtension;
    RxwebValidators.fileSize = fileSizeValidatorExtension;
    RxwebValidators.endsWith = endsWithValidatorExtension;
    RxwebValidators.startsWith = startsWithValidatorExtension;
    RxwebValidators.primeNumber = primeNumberValidatorExtension;
    RxwebValidators.latitude = latitudeValidatorExtension;
    RxwebValidators.longitude = longitudeValidatorExtension;
    RxwebValidators.compose = composeValidatorExtension;
    RxwebValidators.file = fileValidatorExtension;
    RxwebValidators.custom = customValidatorExtension;
    RxwebValidators.unique = uniqueValidatorExtension;
    RxwebValidators.image = imageValidatorExtension;
    RxwebValidators.notEmpty = notEmptyValidatorExtension;
    RxwebValidators.ip = ipValidatorExtension;
    RxwebValidators.cusip = cusipValidatorExtension;
    RxwebValidators.grid = gridValidatorExtension;
    RxwebValidators.date = dateValidatorExtension;
    RxwebValidators.and = andValidatorExtension;
    RxwebValidators.or = orValidatorExtension;
    RxwebValidators.not = notValidatorExtension;
    RxwebValidators.minTime = minTimeValidatorExtension;
    RxwebValidators.maxTime = maxTimeValidatorExtension;
    RxwebValidators.requiredTrue = requiredTrueValidatorExtension;
    RxwebValidators.mask = maskValidatorExtension;

    var IAbstractControl = /*#__PURE__*/function (_angular_forms__WEBPA4) {
      _inherits(IAbstractControl, _angular_forms__WEBPA4);

      var _super8 = _createSuper(IAbstractControl);

      function IAbstractControl() {
        _classCallCheck(this, IAbstractControl);

        return _super8.apply(this, arguments);
      }

      return IAbstractControl;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["AbstractControl"]); //# sourceMappingURL=rxweb-reactive-form-validators.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"content\">\n  <ion-grid class=\"gradient\" >\n    <ion-row >\n      <ion-col size-sm=\"10\" offset-sm=\"1\">\n        \n     <!-- LOGO -->\n  <div class=\"mb-2\">\n    <ion-img src=\"../assets/img/logo1.png\" class=\"logo-img\"></ion-img>\n  </div>\n\n  <!-- FORM START -->\n  <form  class=\"ion-padding-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n    <div class=\"d-flex column\">\n\n      <div class=\"mb-2\">\n        <input type=\"text\" \n        placeholder=\"User Name\" \n        class=\"form-control\" \n        formControlName=\"name\"\n        [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" \n         >\n         <div *ngIf=\"submitted && registerForm.get('name').hasError('required')\"\n         class=\"invalid-feedback\">\n          User name required !</div>\n      </div>\n      \n        \n    \n     \n      <div class=\"mb-2\">\n        <input type=\"text\"\n         placeholder=\"Email Address \" \n         class=\"form-control\"  \n         formControlName=\"email\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\" \n         >\n         <div\n          *ngIf=\"submitted && registerForm.get('email').errors\"\n          class=\"invalid-feedback\">\n         <div \n         *ngIf=\"registerForm.get('email').hasError('required')\">\n          Email address is required !\n         </div>\n         <div \n         *ngIf=\" registerForm.get('email').hasError('email')\">\n          Please enter valid email address !\n         </div>\n        </div>\n      \n      \n      </div>\n\n      <div class=\"mb-2\">\n        <input type=\"number\"\n         placeholder=\"Mobile\"\n         class=\"form-control\" \n         formControlName=\"mobile\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('mobile').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('mobile').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('mobile').hasError('required')\">\n        Mobile no. is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('mobile').hasError('pattern')\">\n        Mobile no. must be 10 digits !\n        </div>\n       </div>\n      </div>\n\n\n      <div class=\"mb-2\">\n        <input type=\"password\"\n         placeholder=\"Password\"\n         class=\"form-control\" \n         formControlName=\"password\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('password').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('password').hasError('required')\">\n         Password is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('password').hasError('minlength')\">\n        Password must be at least 6 characters !\n        </div>\n       </div>\n      </div>\n\n\n      <div class=\"mb-2\">\n        <input type=\"password\"\n         placeholder=\"Confirm Password\"\n         class=\"form-control\" \n         formControlName=\"passwordConfirm\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('passwordConfirm').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('passwordConfirm').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('passwordConfirm').hasError('required')\">\n         Confirm password is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('passwordConfirm').hasError('mustMatch')\">\n        Confirm password must match !\n        </div>\n       </div>\n      </div>\n\n      <div class=\"mb-2\">\n        <textarea\n        type=\"text\"\n        formControlName=\"address\"\n        [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" \n         placeholder=\"Address\"\n         class=\"form-control\">\n        </textarea>\n        <div\n        *ngIf=\"submitted && registerForm.get('address').errors\"\n        class=\"invalid-feedback\">\n       <div \n       *ngIf=\"registerForm.get('address').hasError('required')\">\n        Address is required !\n       </div>\n      \n      </div>\n      </div>\n\n\n      <ion-item lines=\"none\" class=\"mb-2 file\">\n        <ion-label slot=\"start\" class=\"ion-text-wrap text\">Select PAN Card</ion-label >\n          <input\n          style=\"display: none\"[writeFile]=\"true\"\n          type=\"file\" (change)=\"onFileChanged($event)\"\n          #fileInput>\n          <div slot=\"end\">\n            <ion-icon name=\"image-outline\" (click)=\"fileInput.click()\"[ngClass]=\"{'icon-color':pancard!==null}\"></ion-icon>\n          </div>\n  \n        </ion-item>\n\n\n      <ion-item lines=\"none\" class=\"mb-3 file\">\n        <ion-label slot=\"start\" class=\"text\">Select Adhaar Card</ion-label >\n        <input\n        style=\"display: none\"[writeFile]=\"true\"\n        type=\"file\" (change)=\"onAdhaar($event)\"\n        #file1Input>\n        <div slot=\"end\">\n          <ion-icon name=\"image-outline\" (click)=\"file1Input.click()\" [ngClass]=\"{'icon-color':adhaarcard !==null}\"></ion-icon>\n        </div>\n\n        </ion-item>\n  \n\n      <!-- SIGNUP BUTTON -->\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Create New Account</button>\n  \n    </div>\n\n  </form>\n   <!-- FORM END-->\n \n\n  \n   <!-- SIGNIN BUTTON -->\n   <div class=\"d-flex text-white mb-4 mt-5\"\n    style=\"justify-content: center; outline: none;\"\n    [routerLink]=\"['/','auth','signin']\">\n    <span expand=\"block\"  class=\"ion-padding-horizontal\">Sign In</span>\n    <ion-icon name=\"arrow-forward-outline\" class=\"pt-1 icon-only\"></ion-icon>\n  </div>\n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppAuthSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/auth/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.module.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.module.ts ***!
    \************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppAuthSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/auth/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @rxweb/reactive-form-validators */
    "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/auth/sign-up/sign-up.page.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_8__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.page.scss":
  /*!************************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  height: 150px;\n  margin-top: 20px;\n}\n\n.terms {\n  font-size: small;\n}\n\n.content {\n  overflow-y: scroll !important;\n}\n\nion-icon {\n  font-size: 18px;\n}\n\n.icon-color {\n  color: var(--ion-color-primary);\n}\n\n.text {\n  font-size: 12px;\n}\n\n.file {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL0Q6XFx2b3dHb2xkQXBwL3NyY1xcYXBwXFxhdXRoXFxzaWduLXVwXFxzaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsNkJBQUE7QUNHSjs7QURERTtFQUVFLGVBQUE7QUNHSjs7QURERTtFQUNFLCtCQUFBO0FDSUo7O0FERkU7RUFDRSxlQUFBO0FDS0o7O0FESEU7RUFDRSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXJtc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5pY29uLWNvbG9ye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6MTJweFxyXG4gIH1cclxuICAuZmlsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9IiwiLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRlcm1zIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pY29uLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/sign-up/sign-up.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/sign-up/sign-up.page.ts ***!
    \**********************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppAuthSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/helper */
    "./src/app/services/helper.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var TOKEN_KEY = 'access_token';
    var USER_ROLE = 'access_role';

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(formBuilder, auth, http, storage, helper, loading) {
        _classCallCheck(this, SignUpPage);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.http = http;
        this.storage = storage;
        this.helper = helper;
        this.loading = loading;
        this.submitted = false;
        this.pancard = null;
        this.adhaarcard = null;
      }

      _createClass(SignUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{10}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            panCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            adhaar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }, {
            validator: Object(_services_helper__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this39 = this;

          this.submitted = true;
          this.loading.create({
            message: 'SignUp...'
          }).then(function (el) {
            el.present();
          });
          var userData = new FormData();
          userData.append("name", this.registerForm.value.name);
          userData.append("email", this.registerForm.value.email);
          userData.append("password", this.registerForm.value.password);
          userData.append("passwordConfirm", this.registerForm.value.passwordConfirm);
          userData.append("mobile", this.registerForm.value.mobile);
          userData.append("address", this.registerForm.value.address);
          userData.append("panCard", this.registerForm.value.panCard);
          userData.append("adhaar", this.registerForm.value.adhaar); // stop here if form is invalid

          if (this.registerForm.invalid) {
            this.loading.dismiss();
            return;
          }

          this.http.post("".concat(this.auth.url, "/api/v1/users/signup"), userData).subscribe(function (res) {
            _this39.loading.dismiss();

            _this39.auth.token = res.token;
            _this39.auth.userRole = res.user.role;

            _this39.storage.set(TOKEN_KEY, res.token);

            _this39.storage.set(USER_ROLE, res.user);

            _this39.auth.user = _this39.helper.decodeToken(res['token']);

            _this39.auth.authenticationState.next(true);

            _this39.adhaarcard = null;
            _this39.pancard = null;

            _this39.registerForm.reset();
          }, function (err) {
            _this39.loading.dismiss();

            _this39.auth.showAlert(err);

            throw new Error(JSON.stringify(err));
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var file = event.target.files[0];
          this.pancard = file;
          this.registerForm.patchValue({
            panCard: file
          });
          this.registerForm.get('panCard').updateValueAndValidity();
        }
      }, {
        key: "onAdhaar",
        value: function onAdhaar(event) {
          var file = event.target.files[0];
          this.adhaarcard = file;
          this.registerForm.patchValue({
            adhaar: file
          });
          this.registerForm.get('adhaar').updateValueAndValidity();
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/auth/sign-up/sign-up.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map