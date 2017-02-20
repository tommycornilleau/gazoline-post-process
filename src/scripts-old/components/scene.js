import config 		from '../utils/config';
import raf 			from '../utils/raf';
import mapper 		from '../utils/mapper';
import GlslCanvas	from 'glslCanvas'

module.exports = {

	init: function() {
		this.onResize	= this.onResize.bind(this);
		this.onMove		= this.onMove.bind(this);
		this.onClick	= this.onClick.bind(this);
		this.container 	= document.querySelector('#container');
		this.delta 		= 0;
		this.isGreyscale= true;
		
		this.canvas = document.createElement("canvas");
		this.container.appendChild(this.canvas);
		this.onResize();
		this.ctx = new GlslCanvas(this.canvas);

		this.fragShader = require('../shaders/init.glsl') + require('../shaders/noises/noise3D.glsl') + require('../shaders/water.fragment.glsl');

		this.ctx.setUniform('u_tex', './assets/medias/test_2.jpg');
		this.ctx.load( this.fragShader );


		//// REGIST RENDERER
		raf.register( this.render );
		raf.start();

		window.addEventListener( 'resize', this.onResize );
		window.addEventListener( 'mousemove', this.onMove );
		window.addEventListener( 'click', this.onClick );
	},

	onClick: function( event ) {
	},

	onMove: function( event ) {
	},

	onResize: function() {
		this.canvas.width = this.container.offsetWidth;
		this.canvas.height = this.container.offsetHeight;

		this.halfWidth = window.innerWidth * .5;
		this.halfHeight = window.innerHeight * .5;
	},

	render: function() {
		this.delta += 1;
	}

};