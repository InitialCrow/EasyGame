//import your module here
import * as PIXI from 'pixi.js'
import {EZG_player} from './module/EZG_player'


//pack your modules here
((ctx)=>{
	let EZG_module = {
       PIXI : PIXI,
       EZG_player : EZG_player,
	}
	ctx.EZG_module = EZG_module
})(window)