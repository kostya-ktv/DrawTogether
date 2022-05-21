import { InstrumentOptions } from "../../Instruments/instrument.interface";

export interface IToolBar{ 
   pickTool: (tool: InstrumentOptions) => void
}

