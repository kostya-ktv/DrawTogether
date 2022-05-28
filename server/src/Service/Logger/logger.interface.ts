export interface ILoggerService {
   success: (msg: string) => void
   info: (msg: string) => void
   error: (msg: string) => void
}