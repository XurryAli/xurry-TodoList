var storage = {
	set (key,value) {
		window.localStorage.setItem(key, JSON.stringify(value))
	},
	get (key) {
		return JSON.parse(window.localStorage.getItem(key))
	},
	remover (key) {
		window.localStorage.remove(key)
	}
}

export default storage