import { createContext, useContext, useEffect, useState } from 'react'

import postServices from '../Services/postServices'

const PostsContext = createContext()

const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		postServices.getUsersPost().then(data => setPosts(data))
	}, [])

	return (
		<PostsContext.Provider value={{ posts }}>
			{children}
		</PostsContext.Provider>
	)
}

const usePosts = () => useContext(PostsContext)

export { usePosts, PostsProvider }
