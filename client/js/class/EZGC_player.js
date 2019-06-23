export default class EZGC_player extends EZG_core_module.EZGC_core_class{
	constructor(name, hp, assets) {
		super()
		this.name = name || 'EZG_player'
		this.hp = hp || 20
		this.assets = assets || {
			run  : {
				path : "/assets/EZGC_player/Fox/Run/",
				seq : ["1","2","3","4","5","6"],
				ext : ".png"
			}
		}

	}
	/**
	 * @param  {Object} [props to add extern to the class]
	 * @return {[Boolan]} [return true if props added or false if not added]
	 */
	stickProp(props = {}){
		let countProps = Object.getOwnPropertyNames(this).length
		let newProps = Object.getOwnPropertyNames(props)
		for(let i in newProps){

			this[newProps[i]] = props[newProps[i]]
		}
		let newCountProps = Object.getOwnPropertyNames(this).length

		if(countProps < newCountProps){

			return true
		}
		else{
			return false
		}
	}

	/**
	 * [render player class in canvas]
	 * @param  {Boolean} [needed for create hit box]
	 * @return {[object]} [EZG_body]
	 */
	render(bodify = false, callback = false){
		if(callback){
			return callback(this.assets)
		}
		else{
			return this.assets
		}
	}
}