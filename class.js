// class ApplicationError extends Error {
//   // public name = 'ApplicationError';
//   // public name: string;
//
//   constructor(...args: any) {
//     super(...args);
//     // this.name = new.target.name;
//     Object.setPrototypeOf(this, new.target.prototype);
//   }
// }
//
// class IAMPermissionError extends ApplicationError {
//   // public name = 'IAMPermissionError';
//   constructor() {
//     super();
//     // this.name = new.target.name;
//     // Object.setPrototypeOf(this, IAMPermissionError.prototype);
//   }
// }
//
// const someError = new IAMPermissionError();
//
// console.log(someError instanceof IAMPermissionError);
// console.log(someError instanceof ApplicationError);
// console.log(someError instanceof Error);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _newTarget = this.constructor;
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return BaseError;
}(Error));
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomError;
}(BaseError));
var custom = new CustomError();
console.log(custom instanceof CustomError);
console.log(custom instanceof BaseError);
console.log(custom instanceof Error);
// @ts-ignore
console.log(custom.__proto__.name);
// @ts-ignore
console.log(Object.__proto__ === CustomError.prototype);
// @ts-ignore
console.log(custom.__proto__.__proto__ === BaseError.prototype);
// @ts-ignore
console.log(custom.__proto__.__proto__.__proto__ === Error.prototype);
