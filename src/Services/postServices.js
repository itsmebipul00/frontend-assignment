const postServices = {
	getUsersPost: async () => {
		try {
			const response = await fetch(
				'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'
			)
			const data = await response.json()
			return data
		} catch (error) {
			throw new Error(error.message ?? error)
		}
	},
	getSelectedPost: async postId => {
		try {
			const response = await fetch(
				`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts/${postId}`
			)
			const data = await response.json()
			return data
		} catch (error) {
			throw new Error(error.message ?? error)
		}
	},
}

export default postServices
