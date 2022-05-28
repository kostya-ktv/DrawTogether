import { config } from "dotenv";
import { App } from "./app";

class Main{
   private static _instance: Main
   private constructor(){}
   
   private _server = App.getInstance() 
   
   public static getInstance(): Main {
      if (!Main._instance) Main._instance = new Main();
      return Main._instance;
  }
   public start(){
      this._server.run()
   }
}
config({path: './config.env'})
Main.getInstance().start()
