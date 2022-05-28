import knex from "knex";
import { ConnectionConfig } from "./dbConnection.types";

export class DBConnector {
   private connector = knex 
   private connection: ConnectionConfig 

   private constructor(connection: ConnectionConfig){
      this.connection = connection
   }
   public connectToDB() {
      return this.connector(this.connection)
   }

}