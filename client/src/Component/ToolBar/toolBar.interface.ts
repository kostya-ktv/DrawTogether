import { InstrumentOptions } from "../../Instruments/instrument.type";

export interface IToolBar{ 
   pickTool: (tool: InstrumentOptions) => void
}

