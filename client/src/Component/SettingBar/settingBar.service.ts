import toolsState from "../../Store/ToolsState/tools.state"

export const BrushSizeChanger = (value: number) => {
   toolsState.setBrushSize(value)
}

export const ShadowSizeChanger = (value: number) => {
   toolsState.setShadowSize(value)
}