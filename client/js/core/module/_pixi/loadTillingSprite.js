export const EZG_pixi_loadTillingSprite = (data={assets:null, w:100 , h:100})=>{

	let props = Object.getOwnPropertyNames(data.assets)
	for(let i in props){
		var textureArr = []
		for(let j in data.assets[props[i]].seq){
			var path = data.assets[props[i]].path + data.assets[props[i]].seq[j] + data.assets[props[i]].ext

			var texture = EZG_engine.engine.Texture.from(path)

			textureArr.push(texture)
		}

	}
	let tillingSprite = new EZG_engine.engine.TilingSprite(textureArr[0],data.w,data.h)
	tillingSprite.position = data.position
	return tillingSprite

}