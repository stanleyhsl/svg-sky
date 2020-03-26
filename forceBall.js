   // 定义了一个类Vector，可以实现向量计算
        class Vector{
            constructor(x, y) {
                this.x = x || 0;
                this.y = y || 0;
            }
            get _x(){
                return this.x.toFixed(1);
            }
            get _y(){
                return this.y.toFixed(1);
            }
            // 向量绝对值
            absValue() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }

            // 与我的中心点坐标差值
            vectDistFrom(v) {
                const {x,y}=this;
                return new Vector(v.x - x, v.y - y);
            }
            // 向量加
            plus(q) {
                return new Vector(this.x + q.x, this.y + q.y);
            }
            // 向量减
            minus(q) {
                return new Vector(this.x - q.x, this.y - q.y);
            }
            // 向量乘
            multipy(scale) {
                return new Vector(this.x * scale, this.y * scale);
            }
            // 向量加速度，alpha=f*m;这里的m
            accelerate(absValue) {
                return this.multipy(absValue / this.absValue());
            }
        }

        class Point{
            constructor(index,total){
                this.name=name;
                this.color = 'hsl(' + (360 * index/total) + ', 100%, 60%)'
                var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                this.circle = circle; // svg对象
              
                circle.setAttribute('r', 20);
                circle.setAttribute('fill', this.color);
                circle.setAttribute('stroke', '#999');
                circle.setAttribute('stroke-width', '1');
                this.initPos();
            }

            initPos(){
                var x = this.random(-200, 200);
                var y = this.random(-200, 200);
                this.circle.setAttribute('cx', x);
                this.circle.setAttribute('cy', y);
                this.s = new Vector(x, y); // 中心点
                this.v = new Vector(); // 矢量速度0
                this.a = new Vector(); // 矢量加速度0
            }

            mounte(svgDom){
                this.svgDom = svgDom;
                svgDom.appendChild(this.circle);
                return this;
            }

            release(){
                 this.svgDom.removeChild(this.circle);
            }

            // 取min到max之间的随机数
            random(min, max) {
                return Math.round(min + (max - min) * Math.random());
            }
        }