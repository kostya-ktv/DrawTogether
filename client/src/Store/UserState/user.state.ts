import { makeAutoObservable } from "mobx";

class UserState {
   public name!: string 
   public socket!: WebSocket;
   public sessionID!: string 

   constructor(){
      makeAutoObservable(this)
   }

   setUserName(name: string ) {
      this.name = name
   }
   setSocket(socket: WebSocket ) {
      this.socket = socket
   }
   setSessionID(sessionID: string ) {
      this.sessionID = sessionID
   }
}

export default new UserState()