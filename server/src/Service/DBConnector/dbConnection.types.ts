export type ConnectionConfig = {
   client:string,
   connection: {
     host: string,
     port: string,
     user: string,
     password: string,
     database: string,
     ssl?: { rejectUnauthorized: boolean }
   }
 }