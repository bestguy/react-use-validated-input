(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{274:function(module){module.exports=JSON.parse('{"name":"react-use-validated-input","version":"0.1.1-2","description":"React hook for using state with validation","main":"dist/index.js","files":["dist"],"scripts":{"docs":"build-storybook -o docs","dist":"rm -rf dist && babel src --out-dir dist --ignore **/*.test.js --extensions \'.js,.ts\'","dist:watch":"babel src --out-dir dist --watch --ignore **/*.test.js --extensions \'.js,.ts\'","postpublish":"git push --no-verify && git push --tags","prepublishOnly":"npm run dist","start":"start-storybook -p 6006","test":"jest","version":"npm run docs && git add -A docs && git add -A dist"},"keywords":["react","hook","validation"],"author":"bestguy","license":"MIT","repository":"https://github.com/bestguy/react-use-validated-input","dependencies":{"react":"^16.8.0","react-dom":"^16.8.0","validate.js":"^0.13.1"},"devDependencies":{"@babel/cli":"^7.7.4","@babel/core":"^7.7.4","@babel/plugin-proposal-class-properties":"^7.7.4","@babel/plugin-proposal-export-namespace-from":"^7.7.4","@babel/plugin-proposal-function-sent":"^7.7.4","@babel/plugin-proposal-json-strings":"^7.7.4","@babel/plugin-proposal-numeric-separator":"^7.7.4","@babel/plugin-proposal-throw-expressions":"^7.7.4","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/plugin-syntax-import-meta":"^7.7.4","@babel/plugin-transform-react-jsx":"^7.7.4","@babel/preset-env":"^7.7.4","@babel/preset-react":"^7.7.4","@babel/preset-typescript":"^7.7.4","@babel/register":"^7.7.4","@storybook/addon-actions":"^5.2.6","@storybook/addon-links":"^5.2.6","@storybook/addons":"^5.2.6","@storybook/react":"^5.2.6","@testing-library/react":"^9.3.2","babel-eslint":"^10.0.3","babel-jest":"^24.9.0","babel-loader":"^8.0.6","eslint":"^5.16.0","eslint-config-airbnb":"^17.1.1","eslint-config-import":"^0.13.0","jest":"^24.9.0","prism-react-renderer":"^1.0.2","raw-loader":"^4.0.0","reactstrap":"^8.1.1","regenerator-runtime":"^0.13.3"}}')},277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(390),module.exports=__webpack_require__(391)},299:function(module,exports){},391:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(116),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(274);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{name:"react-use-validated-input ".concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version),url:"https://github.com/bestguy/react-use-validated-input",showPanel:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(637),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container mt-5"},story())}))}.call(this,__webpack_require__(392)(module))},637:function(module,exports,__webpack_require__){var map={"./index.stories.js":641};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=637},641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(15),__webpack_require__(16);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=(__webpack_require__(79),__webpack_require__(35),__webpack_require__(169));function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var Example=function(_ref){var code=_ref.code;return react_default.a.createElement(dist.a,_extends({},dist.b,{code:code,language:"javascript"}),(function(_ref2){var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return react_default.a.createElement("pre",{className:"".concat(className," p-3 rounded"),style:style},tokens.map((function(line,i){return react_default.a.createElement("div",getLineProps({line:line,key:i}),line.map((function(token,key){return react_default.a.createElement("span",getTokenProps({token:token,key:key}))})))})))}))};Example.displayName="Example",Example.__docgenInfo={description:"",methods:[],displayName:"Example"};var stories_Example=Example;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Example.js"]={name:"Example",docgenInfo:Example.__docgenInfo,path:"stories/Example.js"});__webpack_require__(20),__webpack_require__(29),__webpack_require__(17),__webpack_require__(34),__webpack_require__(14),__webpack_require__(36),__webpack_require__(21),__webpack_require__(22);var slicedToArray=__webpack_require__(168),isFalsy=function isFalsy(value){return!1===value||0===value||""===value||null==value};var src=function useValidatedInput(defaultValue,validator){var validateImmediately=arguments.length>2&&void 0!==arguments[2]&&arguments[2],validateOnChange=arguments.length>3&&void 0!==arguments[3]&&arguments[3],_useState=Object(react.useState)(defaultValue),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react.useState)(validateImmediately),_useState4=Object(slicedToArray.a)(_useState3,2),touched=_useState4[0],setTouched=_useState4[1],feedback=touched&&validator(value);return[value,{value:value,onBlur:function onBlur(){return setTouched(!0)},onChange:function onChange(event){return function onChange(newValue){validateOnChange&&setTouched(!0),setValue(newValue)}(event.target.value)}},feedback,touched&&!isFalsy(feedback)]};function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Basic_ref=react_default.a.createElement("hr",null),BasicExample=function(){var _useValidatedInput2=_slicedToArray(src("",(function isRequired(value){return 0===value.length&&"This field is required"})),3),value=_useValidatedInput2[0],inputProps=_useValidatedInput2[1],feedback=_useValidatedInput2[2];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("input",inputProps),react_default.a.createElement("div",null,feedback),Basic_ref,"Current value: ",value)};BasicExample.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};var Basic=BasicExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Basic.js"]={name:"BasicExample",docgenInfo:BasicExample.__docgenInfo,path:"stories/Basic.js"});__webpack_require__(46),__webpack_require__(56);function Bootstrap_extends(){return(Bootstrap_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Bootstrap_slicedToArray(arr,i){return function Bootstrap_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Bootstrap_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Bootstrap_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var BootstrapExample=function(){var regex=/[^@]+@[^\.]+\..+/,_useValidatedInput2=Bootstrap_slicedToArray(src("",(function isEmail(value){return!value.match(regex)&&"Please type a valid email address"})),4),inputProps=(_useValidatedInput2[0],_useValidatedInput2[1]),feedback=_useValidatedInput2[2],invalid=_useValidatedInput2[3];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("input",Bootstrap_extends({autoFocus:!0,type:"text",className:"form-control ".concat(invalid?"is-invalid":"")},inputProps)),invalid&&react_default.a.createElement("div",{className:"invalid-feedback"},feedback))};BootstrapExample.__docgenInfo={description:"",methods:[],displayName:"BootstrapExample"};var Bootstrap=BootstrapExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Bootstrap.js"]={name:"BootstrapExample",docgenInfo:BootstrapExample.__docgenInfo,path:"stories/Bootstrap.js"});__webpack_require__(28);function Form_extends(){return(Form_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Form_slicedToArray(arr,i){return function Form_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Form_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Form_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Form_ref=react_default.a.createElement("label",{htmlFor:"email"},"Email"),Form_ref2=react_default.a.createElement("label",{htmlFor:"password"},"Password"),_ref3=react_default.a.createElement("label",{htmlFor:"password"},"Repeat Password"),FormExample=function(){var regex=/[^@]+@[^\.]+\..+/,_useValidatedInput2=Form_slicedToArray(src("",(function isEmail(value){return!value.match(regex)&&"Please type a valid email address"})),4),email=_useValidatedInput2[0],emailProps=_useValidatedInput2[1],emailFeedback=_useValidatedInput2[2],emailInvalid=_useValidatedInput2[3],_useValidatedInput4=Form_slicedToArray(src("",(function isRequired(value){return 0===value.length&&"This field is required"})),4),pwd=_useValidatedInput4[0],pwdProps=_useValidatedInput4[1],pwdFeedback=_useValidatedInput4[2],pwdInvalid=_useValidatedInput4[3],_useValidatedInput6=Form_slicedToArray(src("",(function(value){return value!==pwd&&"Passwords do not match"})),4),pwd2Props=(_useValidatedInput6[0],_useValidatedInput6[1]),pwd2Feedback=_useValidatedInput6[2],pwd2Invalid=_useValidatedInput6[3];return react_default.a.createElement("form",{onSubmit:function handleSubmit(e){alert("Form sent with: ".concat(email,", ").concat(pwd)),e.preventDefault()},method:"get"},react_default.a.createElement("div",null,Form_ref,react_default.a.createElement("input",Form_extends({autoFocus:!0,id:"email",type:"text",className:"form-control ".concat(emailInvalid?"is-invalid":"")},emailProps)),emailInvalid&&react_default.a.createElement("div",{className:"invalid-feedback"},emailFeedback)),react_default.a.createElement("div",null,Form_ref2,react_default.a.createElement("input",Form_extends({id:"password",type:"password",className:"form-control ".concat(pwdInvalid?"is-invalid":"")},pwdProps)),pwdInvalid&&react_default.a.createElement("div",{className:"invalid-feedback"},pwdFeedback)),react_default.a.createElement("div",null,_ref3,react_default.a.createElement("input",Form_extends({id:"password2",type:"password",className:"form-control ".concat(pwd2Invalid?"is-invalid":"")},pwd2Props)),pwd2Invalid&&react_default.a.createElement("div",{className:"invalid-feedback"},pwd2Feedback)),react_default.a.createElement("div",{className:"pt-3"},react_default.a.createElement("input",{className:"btn btn-primary",type:"submit",disabled:emailInvalid||pwdInvalid||pwd2Invalid,value:"Sign Up"})))};FormExample.displayName="FormExample",FormExample.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var Form=FormExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Form.js"]={name:"FormExample",docgenInfo:FormExample.__docgenInfo,path:"stories/Form.js"});function OnLoad_slicedToArray(arr,i){return function OnLoad_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function OnLoad_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function OnLoad_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var OnLoad_BasicExample=function(){var _useValidatedInput2=OnLoad_slicedToArray(src("",(function isRequired(value){return 0===value.length&&"This field is required"}),!0),3),inputProps=(_useValidatedInput2[0],_useValidatedInput2[1]),feedback=_useValidatedInput2[2];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("input",inputProps),react_default.a.createElement("div",null,feedback))};OnLoad_BasicExample.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};var OnLoad=OnLoad_BasicExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/OnLoad.js"]={name:"BasicExample",docgenInfo:OnLoad_BasicExample.__docgenInfo,path:"stories/OnLoad.js"});var Label=__webpack_require__(643),es_Form=__webpack_require__(644),FormGroup=__webpack_require__(645),Col=__webpack_require__(646),Input=__webpack_require__(647),FormFeedback=__webpack_require__(648);function Reactstrap_extends(){return(Reactstrap_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Reactstrap_slicedToArray(arr,i){return function Reactstrap_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Reactstrap_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Reactstrap_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Reactstrap_ref=react_default.a.createElement(Label.a,{for:"email",sm:3},"Email"),ReactstrapExample=function(){var regex=/[^@]+@[^\.]+\..+/,_useValidatedInput2=Reactstrap_slicedToArray(src("",(function isEmail(value){return!value.match(regex)&&"Please type a valid email address"})),4),inputProps=(_useValidatedInput2[0],_useValidatedInput2[1]),feedback=_useValidatedInput2[2],invalid=_useValidatedInput2[3];return react_default.a.createElement(es_Form.a,null,react_default.a.createElement(FormGroup.a,{row:!0},Reactstrap_ref,react_default.a.createElement(Col.a,{sm:9},react_default.a.createElement(Input.a,Reactstrap_extends({autoFocus:!0,id:"email"},inputProps,{invalid:invalid})),react_default.a.createElement(FormFeedback.a,null,feedback))))};ReactstrapExample.displayName="ReactstrapExample",ReactstrapExample.__docgenInfo={description:"",methods:[],displayName:"ReactstrapExample"};var Reactstrap=ReactstrapExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Reactstrap.js"]={name:"ReactstrapExample",docgenInfo:ReactstrapExample.__docgenInfo,path:"stories/Reactstrap.js"});var Button=__webpack_require__(649),validate=__webpack_require__(275),validate_default=__webpack_require__.n(validate),validatejs=function(defaultValue){var constraints=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},validateImmediately=arguments.length>2&&void 0!==arguments[2]&&arguments[2],touchOnChange=arguments.length>3&&void 0!==arguments[3]&&arguments[3],isInvalid=function isInvalid(value){return validate_default.a.single(value,constraints)};return src(defaultValue,isInvalid,validateImmediately,touchOnChange)};function ValidateJS_extends(){return(ValidateJS_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ValidateJS_slicedToArray(arr,i){return function ValidateJS_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ValidateJS_iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function ValidateJS_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ValidateJS_ref=react_default.a.createElement(Label.a,{for:"email",sm:3},"Email"),ValidateJS_ref2=react_default.a.createElement(Label.a,{for:"age",sm:3},"Age"),ValidateJSExample=function(){var _useValidatedInput2=ValidateJS_slicedToArray(validatejs("",{presence:!0,email:!0}),4),email=_useValidatedInput2[0],inputProps=_useValidatedInput2[1],feedback=_useValidatedInput2[2],invalid=_useValidatedInput2[3],_useValidatedInput4=ValidateJS_slicedToArray(validatejs("",{presence:!0,numericality:{onlyInteger:!0,greaterThan:12,message:"You need to be at least 13 years old"}}),4),age=_useValidatedInput4[0],ageProps=_useValidatedInput4[1],ageFeedback=_useValidatedInput4[2],ageInvalid=_useValidatedInput4[3];return react_default.a.createElement(es_Form.a,{onSubmit:function handleSubmit(e){alert("Form sent with: ".concat(email,", ").concat(age)),e.preventDefault()}},react_default.a.createElement(FormGroup.a,{row:!0},ValidateJS_ref,react_default.a.createElement(Col.a,{sm:9},react_default.a.createElement(Input.a,ValidateJS_extends({autoFocus:!0,id:"email"},inputProps,{invalid:invalid})),invalid&&react_default.a.createElement(FormFeedback.a,null,"Email ",feedback))),react_default.a.createElement(FormGroup.a,{row:!0},ValidateJS_ref2,react_default.a.createElement(Col.a,{sm:9},react_default.a.createElement(Input.a,ValidateJS_extends({id:"age"},ageProps,{invalid:ageInvalid})),ageInvalid&&react_default.a.createElement(FormFeedback.a,null,ageFeedback))),react_default.a.createElement(Button.a,{color:"primary",type:"submit",disabled:invalid||ageInvalid},"Sign Up"))};ValidateJSExample.displayName="ValidateJSExample",ValidateJSExample.__docgenInfo={description:"",methods:[],displayName:"ValidateJSExample"};var ValidateJS=ValidateJSExample;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/ValidateJS.js"]={name:"ValidateJSExample",docgenInfo:ValidateJSExample.__docgenInfo,path:"stories/ValidateJS.js"});__webpack_require__.d(__webpack_exports__,"Introduction",(function(){return Introduction})),__webpack_require__.d(__webpack_exports__,"BasicExample",(function(){return index_stories_BasicExample})),__webpack_require__.d(__webpack_exports__,"OnLoadExample",(function(){return OnLoadExample})),__webpack_require__.d(__webpack_exports__,"FormExample",(function(){return index_stories_FormExample})),__webpack_require__.d(__webpack_exports__,"BootstrapExample",(function(){return index_stories_BootstrapExample})),__webpack_require__.d(__webpack_exports__,"ReactstrapExample",(function(){return index_stories_ReactstrapExample})),__webpack_require__.d(__webpack_exports__,"ValidateJSExample",(function(){return index_stories_ValidateJSExample}));__webpack_exports__.default={title:"useValidatedInput"};var Story=function(_ref){var children=_ref.children,description=_ref.description,source=_ref.source,title=_ref.title;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{className:"mb-4 border-bottom"},react_default.a.createElement("h1",null,title),description&&react_default.a.createElement("p",null,description)),react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col"},children),source&&react_default.a.createElement("div",{className:"col"},react_default.a.createElement(stories_Example,{code:source}))))},index_stories_ref2=react_default.a.createElement("p",null,react_default.a.createElement("code",null,"useValidatedInput")," is a hook for simplifying state and validation usage with input fields, and is meant to be used in place of React's ",react_default.a.createElement("code",null,"useState")," hook.",react_default.a.createElement("br",null)),index_stories_ref3=react_default.a.createElement("p",null,"You call the hook with the initial value, a validation callback, and optionally whether to immediately validate the input value.",react_default.a.createElement("br",null),"The object properties are named so that you can spread the object directly onto an input.",react_default.a.createElement("br",null),"It returns an array with the current value, an object which you can bind to an input's value, onChange, and onBlur props to automatically manage the validation status. It also returns any validation feedback message returned by the validation callback, and whether the field is invalid.",react_default.a.createElement("br",null)),_ref4=react_default.a.createElement("h2",null,"Usage"),_ref5=react_default.a.createElement(stories_Example,{title:"Usage",code:"\n        import useValidatedInput from 'react-use-validated-input';\n\n        const [\n          value,    // T\n          inputProps: {\n            onBlur,   // () => void;\n            onChange, // (e: ChangeEvent) => void\n            value,    // T\n          }\n          invalid,  // boolean;\n          feedback, // ReactNode;\n        ] = useValidatedInput(\n          initialValue, // T\n          validator, // (value: T) => string | undefined,\n          validateImmediately = false, // boolean\n          validateOnChange = false, // boolean\n        );\n\n        return (\n          <div>\n            <input {...inputProps} /> {feedback}\n          </div>\n        );\n      "}),_ref6=react_default.a.createElement("h3",null,"Parameters"),_ref7=react_default.a.createElement("b",null,"defaultValue"),_ref8=react_default.a.createElement("br",null),_ref9=react_default.a.createElement("b",null,"validator"),_ref10=react_default.a.createElement("br",null),_ref11=react_default.a.createElement("b",null,"validateImmediately"),_ref12=react_default.a.createElement("b",null,"validateOnChange"),_ref13=react_default.a.createElement("em",null,"before you've blurred at least once."),_ref14=react_default.a.createElement("h3",{className:"mt-3"},"Returns"),_ref15=react_default.a.createElement("br",null),_ref16=react_default.a.createElement("b",null,"value"),_ref17=react_default.a.createElement("br",null),_ref18=react_default.a.createElement("b",null,"inputProps"),_ref19=react_default.a.createElement("br",null),_ref20=react_default.a.createElement("ul",null,react_default.a.createElement("li",null,react_default.a.createElement("b",null,"onBlur")," is used to determine when the input loses focus to trigger validation."),react_default.a.createElement("li",null,react_default.a.createElement("b",null,"onChange")," is used to set the current value and trigger validation."),react_default.a.createElement("li",null,react_default.a.createElement("b",null,"value")," is the current value of the input.")),_ref21=react_default.a.createElement("b",null,"invalid"),_ref22=react_default.a.createElement("br",null),_ref23=react_default.a.createElement("b",null,"feedback"),_ref24=react_default.a.createElement("br",null),Introduction=function(){return react_default.a.createElement(react_default.a.Fragment,null,index_stories_ref2,index_stories_ref3,_ref4,_ref5,_ref6,_ref7," is the initial value of the input.",_ref8,_ref9," is a callback function that is passed the value of the input on change, and returns a feedback string or JSX if the value is invalid, otherwise returns undefined.",_ref10,_ref11," is an optional boolean value whether to validate the initial value of the input (useful for validating after a page load or server-side call.)",_ref12," is an optional boolean value whether to validate the value of the input as you type ",_ref13,_ref14,"The hook returns an array with the following values:",_ref15,_ref16," is the current value of the input.",_ref17,_ref18," is an object that can be spread onto an input, with the following properties:",_ref19,_ref20,_ref21," returns true if the value does not pass validation.",_ref22,_ref23," returns a feedback string or JSX if the value is invalid.",_ref24)},_ref25=react_default.a.createElement(Story,{title:"Basic usage",description:"This shows validation on blur.",source:"import React from 'react';\nimport useValidatedInput from 'react-use-validated-input';\n\nconst BasicExample = () => {\n  const isRequired = value => value.length === 0 && 'This field is required';\n  const [value, inputProps, feedback] = useValidatedInput('', isRequired);\n\n  return (\n    <>\n      <input {...inputProps} />\n      <div>{feedback}</div>\n      <hr />\n      Current value: {value}\n    </>\n  );\n};\n\nexport default BasicExample;\n"},react_default.a.createElement(Basic,null)),index_stories_BasicExample=function(){return _ref25};index_stories_BasicExample.displayName="BasicExample";var _ref26=react_default.a.createElement(Story,{title:"Validate on load",description:"This shows validation on load, before any user interaction.",source:"import React from 'react';\nimport useValidatedInput from 'react-use-validated-input';\n\nconst BasicExample = () => {\n  const isRequired = value => value.length === 0 && 'This field is required';\n  const [value, inputProps, feedback] = useValidatedInput('', isRequired, true);\n\n  return (\n    <>\n      <input {...inputProps} />\n      <div>{feedback}</div>\n    </>\n  );\n};\n\nexport default BasicExample;\n"},react_default.a.createElement(OnLoad,null)),OnLoadExample=function(){return _ref26};OnLoadExample.displayName="OnLoadExample";var _ref27=react_default.a.createElement(Story,{title:"Form Example",description:"This shows a form example, with interdependent validations between fields.",source:'import React from \'react\';\nimport useValidatedInput from \'react-use-validated-input\';\n\nconst FormExample = () => {\n  const regex = /[^@]+@[^\\.]+\\..+/;\n  const isEmail = value => !value.match(regex) && \'Please type a valid email address\';\n  const isRequired = value => value.length === 0 && \'This field is required\';\n\n  const [email, emailProps, emailFeedback, emailInvalid] = useValidatedInput(\'\', isEmail);\n  const [pwd, pwdProps, pwdFeedback, pwdInvalid] = useValidatedInput(\'\', isRequired);\n  const [pwd2, pwd2Props, pwd2Feedback, pwd2Invalid] =\n      useValidatedInput(\'\', value => value !== pwd && \'Passwords do not match\');\n\n  const formInvalid = emailInvalid || pwdInvalid || pwd2Invalid;\n\n  const handleSubmit = (e) => {\n    alert(`Form sent with: ${email}, ${pwd}`);\n    e.preventDefault();\n  };\n\n  return (\n    <form onSubmit={handleSubmit} method="get">\n      <div>\n        <label htmlFor="email">Email</label>\n        <input\n          autoFocus\n          id="email"\n          type="text"\n          className={`form-control ${emailInvalid ? \'is-invalid\' : \'\'}`}\n          {...emailProps}\n        />\n        {emailInvalid && <div className="invalid-feedback">{emailFeedback}</div>}\n      </div>\n      <div>\n        <label htmlFor="password">Password</label>\n        <input\n          id="password"\n          type="password"\n          className={`form-control ${pwdInvalid ? \'is-invalid\' : \'\'}`}\n          {...pwdProps}\n        />\n        {pwdInvalid && <div className="invalid-feedback">{pwdFeedback}</div>}\n      </div>\n      <div>\n        <label htmlFor="password">Repeat Password</label>\n        <input\n          id="password2"\n          type="password"\n          className={`form-control ${pwd2Invalid ? \'is-invalid\' : \'\'}`}\n          {...pwd2Props}\n        />\n        {pwd2Invalid && <div className="invalid-feedback">{pwd2Feedback}</div>}\n      </div>\n      <div className="pt-3">\n        <input\n          className="btn btn-primary"\n          type="submit"\n          disabled={formInvalid}\n          value="Sign Up"\n        />\n      </div>\n    </form>\n  );\n};\n\nexport default FormExample;\n'},react_default.a.createElement(Form,null)),index_stories_FormExample=function(){return _ref27};index_stories_FormExample.displayName="FormExample";var _ref28=react_default.a.createElement(Story,{title:"Bootstrap 4",description:react_default.a.createElement(react_default.a.Fragment,null,"This example demos usage with ",react_default.a.createElement("a",{href:"https://getbootstrap.com/docs/4.4/components/forms/#server-side",target:"_blank"},"Bootstrap 4's validation classes"),"."),source:"import React from 'react';\nimport useValidatedInput from 'react-use-validated-input';\n\nconst BootstrapExample = () => {\n  const regex = /[^@]+@[^\\.]+\\..+/;\n  const isEmail = value => !value.match(regex) && 'Please type a valid email address';\n  const [email, inputProps, feedback, invalid] = useValidatedInput('', isEmail);\n\n  return (\n    <>\n      <input\n        autoFocus\n        type=\"text\"\n        className={`form-control ${invalid ? 'is-invalid' : ''}`}\n        {...inputProps}\n      />\n      {invalid && <div className=\"invalid-feedback\">{feedback}</div>}\n    </>\n  );\n};\n\nexport default BootstrapExample;\n"},react_default.a.createElement(Bootstrap,null)),index_stories_BootstrapExample=function(){return _ref28};index_stories_BootstrapExample.displayName="BootstrapExample";var _ref29=react_default.a.createElement(Story,{title:"Reactstrap",description:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("a",{href:"https://reactstrap.github.io",target:"_blank"},"Reactstrap")," is a Bootstrap 4 component library for React."),source:"import React from 'react';\nimport useValidatedInput from 'react-use-validated-input';\nimport { Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';\n\nconst ReactstrapExample = () => {\n  const regex = /[^@]+@[^\\.]+\\..+/;\n  const isEmail = value => !value.match(regex) && 'Please type a valid email address';\n  const [value, inputProps, feedback, invalid] = useValidatedInput('', isEmail);\n\n  return (\n    <Form>\n      <FormGroup row>\n        <Label for=\"email\" sm={3}>\n          Email\n        </Label>\n        <Col sm={9}>\n          <Input autoFocus id=\"email\" {...inputProps} invalid={invalid} />\n          <FormFeedback>{feedback}</FormFeedback>\n        </Col>\n      </FormGroup>\n    </Form>\n  );\n};\n\nexport default ReactstrapExample;\n"},react_default.a.createElement(Reactstrap,null)),index_stories_ReactstrapExample=function(){return _ref29};index_stories_ReactstrapExample.displayName="ReactstrapExample";var _ref30=react_default.a.createElement(Story,{title:"ValidateJS",source:"import React from 'react';\nimport { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';\nimport useValidatedInput from 'react-use-validated-input/validatejs';\n\nconst ValidateJSExample = () => {\n  const [email, inputProps, feedback, invalid] =\n      useValidatedInput('', { presence: true, email: true });\n  const [age, ageProps, ageFeedback, ageInvalid] = useValidatedInput('',\n    { presence: true,\n      numericality: {\n        onlyInteger: true,\n        greaterThan: 12,\n        message: 'You need to be at least 13 years old'\n      }\n    });\n  const formInvalid = invalid || ageInvalid;\n  const handleSubmit = (e) => {\n    alert(`Form sent with: ${email}, ${age}`);\n    e.preventDefault();\n  };\n  \n  return (\n    <Form onSubmit={handleSubmit}>\n      <FormGroup row>\n        <Label for=\"email\" sm={3}>\n          Email\n        </Label>\n        <Col sm={9}>\n          <Input autoFocus id=\"email\" {...inputProps} invalid={invalid} />\n          {invalid && <FormFeedback>Email {feedback}</FormFeedback>}\n        </Col>\n      </FormGroup>\n      <FormGroup row>\n        <Label for=\"age\" sm={3}>\n          Age\n        </Label>\n        <Col sm={9}>\n          <Input id=\"age\" {...ageProps} invalid={ageInvalid} />\n          {ageInvalid && <FormFeedback>{ageFeedback}</FormFeedback>}\n        </Col>\n      </FormGroup>\n      <Button\n        color=\"primary\"\n        type=\"submit\"\n        disabled={formInvalid}\n      >\n        Sign Up\n      </Button>\n    </Form>\n  );\n};\n\nexport default ValidateJSExample;\n"},react_default.a.createElement(ValidateJS,null)),index_stories_ValidateJSExample=function(){return _ref30};index_stories_ValidateJSExample.displayName="ValidateJSExample",Introduction.__docgenInfo={description:"",methods:[],displayName:"Introduction"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"Introduction",docgenInfo:Introduction.__docgenInfo,path:"stories/index.stories.js"}),index_stories_BasicExample.__docgenInfo={description:"",methods:[],displayName:"BasicExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"BasicExample",docgenInfo:index_stories_BasicExample.__docgenInfo,path:"stories/index.stories.js"}),OnLoadExample.__docgenInfo={description:"",methods:[],displayName:"OnLoadExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"OnLoadExample",docgenInfo:OnLoadExample.__docgenInfo,path:"stories/index.stories.js"}),index_stories_FormExample.__docgenInfo={description:"",methods:[],displayName:"FormExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"FormExample",docgenInfo:index_stories_FormExample.__docgenInfo,path:"stories/index.stories.js"}),index_stories_BootstrapExample.__docgenInfo={description:"",methods:[],displayName:"BootstrapExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"BootstrapExample",docgenInfo:index_stories_BootstrapExample.__docgenInfo,path:"stories/index.stories.js"}),index_stories_ReactstrapExample.__docgenInfo={description:"",methods:[],displayName:"ReactstrapExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"ReactstrapExample",docgenInfo:index_stories_ReactstrapExample.__docgenInfo,path:"stories/index.stories.js"}),index_stories_ValidateJSExample.__docgenInfo={description:"",methods:[],displayName:"ValidateJSExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"ValidateJSExample",docgenInfo:index_stories_ValidateJSExample.__docgenInfo,path:"stories/index.stories.js"})}},[[277,1,2]]]);
//# sourceMappingURL=main.f4c0d6e3c8a09ba9a7fc.bundle.js.map