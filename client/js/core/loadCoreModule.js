//import your module here
import * as PIXI from 'pixi.js'
import {EZG_pixi_loadSprite} from './module/_pixi/loadSprite'



//pack your modules here
((ctx)=>{
	let EZG_core_module = {
       PIXI : PIXI,
       EZG_pixi_loadSprite : EZG_pixi_loadSprite,
	}
	
	ctx.EZG_core_module = EZG_core_module
})(window)