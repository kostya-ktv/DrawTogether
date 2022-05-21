export interface IDraw {
   mouseUpHandler: (e: any) => void
   mouseDownHandler: (e: any) => void
   mouseMoveHandler: (e: any) => void
   draw: (x: number, y: number) => void
}