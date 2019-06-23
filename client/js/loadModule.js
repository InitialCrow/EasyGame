//import your module here
import {EZG_player} from './module/EZG_player'
import {EZG_world} from './module/EZG_world'

//pack your modules here
((ctx)=>{
	let EZG_module = {
       EZG_player : EZG_player,
       EZG_world : EZG_world,
	}

	ctx.EZG_module = EZG_module
})(window)