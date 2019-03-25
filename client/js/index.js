//import your module here
import * as PIXI from 'pixi.js'
import {EZG_player} from './module/EZG_player'


//engine
((ctx)=>{
	let EZG_engine = {
		conf : {
			physicEngine : 'pixi',
			screenWidth : 500,
			screenHeight : 500,


		},
		type : null,
		engine : null,
		app : {

		},
		init : ()=>{
			if(EZG_engine.conf.physicEngine === "pixi"){
				EZG_engine.engine = PIXI
				EZG_engine.app = new EZG_engine.engine.Application({width: EZG_engine.conf.screenWidth, height: EZG_engine.conf.screenHeight});
			}
			EZG_engine.type="webgl"
			EZG_player.log()
			document.body.appendChild(EZG_engine.app.view);
			//EZG_engine.engine.utils.sayHello(EZG_engine.type)


		},
		render : ()=>{

		}
	}
	ctx.EZG_engine = EZG_engine
})(window)