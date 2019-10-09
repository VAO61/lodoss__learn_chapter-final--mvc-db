// 'use strict'
// /** @typedef {import('@adonisjs/framework/src/Request')} Request */
// /** @typedef {import('@adonisjs/framework/src/Response')} Response */
// /** @typedef {import('@adonisjs/framework/src/View')} View */

// class EmailValidator {
//   /**
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Function} next
//    */
//   async handle ({ request }, next) {
//     // call next to advance the request
//     await next()
//   }

// }

// module.exports = EmailValidator

'use strict';

class EmailValidator {
  async handle({ request }, next) {
    if (Object.keys(request.body).length) {
      return true;
    }

    await next();

    //   if (Object.keys(request.body).length) {
    //     request.body = Object.assign(
    //       ...Object.keys(request.body).map(key => ({
    //         [key]: request.body[key] !== '' ? request.body[key] : null
    //       }))
    //     );
    //     // if (Object.keys(request.body).length) {
    //     //   request.body = Object.assign(
    //     //     ...Object.keys(request.body).map(key => ({
    //     //       [key]: request.body[key] !== '' ? request.body[key] : null
    //     //     }))
    //     //   );
    //   } else {
    //     return `no valid e-mail`;
    //   }

    //   await next();
    //   // emailValidation(value) {
    //   //   return /^[a-zA-Z]+([-._]?[a-zA-Z]+){1,}@[a-zA-Z_]+?\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6})?$/.test(
    //   //     value
    //   //   );
    //   // }
  }
}

module.exports = EmailValidator;
