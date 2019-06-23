export default class EZGC_core_class{
	/**
	 * @return {[log]} [return data class in log]
	 */
	log(){
		let props = Object.getOwnPropertyNames(this)
		for(let i in props){
			console.log(props[i] + ' -> ', this[props[i]])
		}
	}
}