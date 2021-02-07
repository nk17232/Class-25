class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,height,angle);
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      
      this.image = loadImage('sprites/wood1.png');

    }
  }
  
  