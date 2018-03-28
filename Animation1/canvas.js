
(function() {


	function qs(element) {
		return document.querySelector(element);
	}

	window.onload = function() {


		let canvas = qs("canvas");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;


		let c = canvas.getContext("2d");


		function Circle(x,y,dx,dy,radius) {

			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
			this.radius = radius;


			this.draw = function() {

				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
				c.strokeStyle = 'rgb(0,0,0)';
				c.fill();
				c.stroke();

			};


			this.update = function() {

				this.x += this.dx;
				this.y += this.dy;

				if (this.x+this.radius > innerWidth || this.x-this.radius < 0) {

					this.dx = -this.dx;
		
				}

				if (this.y+this.radius > innerHeight || this.y-this.radius < 0) {

					this.dy = -this.dy;

				}


				this.draw();

			}


		}

		let circleArray = [];

		for (let i = 0; i < 80; i++) {

			let radius = Math.random()*60;
			circleArray[i] = new Circle(Math.random()*(innerWidth-2*radius)+radius,Math.random()*(innerHeight-2*radius)+radius,(Math.random()-0.5)*10,(Math.random()-0.5)*10,radius);
			circleArray[i].draw();

		}

		function animate() {

			c.clearRect(0,0,innerWidth,innerHeight);
			requestAnimationFrame(animate);
			
			for(let m = 0; m < 80; m++) {
				circleArray[m].update();
			}


		}

		animate();

	};

}())