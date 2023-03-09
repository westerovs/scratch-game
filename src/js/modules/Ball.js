export default class Ball {
  constructor(ctx, x, y, radius, color) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
  
  update = () => {
    this.draw()
  }
  
  draw = () => {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.closePath()
  }
}
