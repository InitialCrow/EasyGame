//import your module here
import * as PIXI from 'pixi.js'

import {EZG_pixi_loadAnimatedSprite} from './module/_pixi/loadAnimatedSprite'
import {EZG_pixi_loadTillingSprite} from './module/_pixi/loadTillingSprite'

import EZGC_core_class from './class/EZGC_core_class'
import conf from '../../config/main.json'
//pack your modules here
((ctx)=>{
	let EZG_core_module = {
       conf : conf,
       PIXI : PIXI,

       EZG_pixi_loadAnimatedSprite : EZG_pixi_loadAnimatedSprite,
       EZG_pixi_loadTillingSprite :  EZG_pixi_loadTillingSprite,
       EZGC_core_class : EZGC_core_class
	}

	ctx.EZG_core_module = EZG_core_module
})(window)