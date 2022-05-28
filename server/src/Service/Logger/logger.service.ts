import { ILoggerService } from "./logger.interface";
import chalk from 'chalk'

export class Logger implements ILoggerService{
   private static _instance: Logger
   
   public static _logger = chalk
   private constructor(){}

   public static getInstance(): Logger {
      if (!Logger._instance) Logger._instance = new Logger();
      return Logger._instance;
  }
   public static LoggingOn() {
      return (target: Function) => {
         for (const propertyName of Object.getOwnPropertyNames(target.prototype)) {

            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyName);

            if (!descriptor) {
                  continue;
            }

            const originalMethod = descriptor.value;

            const isMethod = originalMethod instanceof Function;

            if (!isMethod) {
                  continue;
            }

            descriptor.value = function(...args: any[]) {
                  // console.log(`[${target.name}][${propertyName}] Entering`);
                  console.log(Logger._logger.bgBlue(propertyName))
                  const now = Date.now();
                  const result = originalMethod.apply(this, args);

                  const exitLog = () => {
                     // console.log(`[${target.name}][${propertyName}] Exiting ${Date.now() - now}ms`);
                  };

                  // work around to support async functions.
                  if (typeof result === "object" && typeof result.then === "function") {
                     const promise = result.then(exitLog);

                     // we defer responsibility to the caller of the method to handle the error.
                     // but we need to catch the error otherwise we will get an unhandled error.
                     // notice we return the original result not the promise with the logging call.
                     if (typeof promise.catch === "function") {
                        promise.catch((e: any) => e);
                     }
                  } else {
                     exitLog();
                  }

                  return result;
            };

            Object.defineProperty(target.prototype, propertyName, descriptor);
         }
      };
   }

   success(msg: string){
      console.log(Logger._logger.bgGreen(msg))
   }
   info(msg: string){
      console.log(Logger._logger.bgBlue(msg))
   }
   error(msg: string){
      console.log(Logger._logger.bgRed(msg))
   }
}
