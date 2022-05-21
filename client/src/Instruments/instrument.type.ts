import Brush from "./Brush/Brush"
import Eraser from "./Eraser/Eraser"

export type InstrumentOptions = 'brush' | 'eraser' | 'features'
export type Instrument = Brush | Eraser 