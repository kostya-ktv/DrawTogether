import ToolBarService from "../Component/ToolBar/toolbar.service";

const HotKeyCaller = (e: KeyboardEvent) => {

   switch (e.key) {
      case "e": 
         ToolBarService.pickInstrument("eraser")
         break
      ; 
      case "d": 
         ToolBarService.pickInstrument("brush")
         break
      ; 
      default: break;
   }
}

export default HotKeyCaller
