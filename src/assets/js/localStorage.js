const localItem = 'localTodoList'
export default {
	fetch () {
		return JSON.parse(window.localStorage.getItem(localItem))
	},
	save (item) {
		window.localStorage.setItem(localItem, JSON.stringify(item))
	}
}