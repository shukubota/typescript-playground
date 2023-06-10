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

class BaseError extends Error {
  constructor(...args: any) {
    super(...args);
    // Object.setPrototypeOf(this, new.target.prototype);
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

class CustomError extends BaseError {}

const custom = new CustomError();
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
