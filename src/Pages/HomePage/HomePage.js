import './HomePage.css'
import { useState, useEffect, Fragment } from 'react'
import { usePosts } from '../../Providers/PostsProvider'
import { PostCard } from '../../Components/PostCard'
import { SelectedPostCard } from '../../Components/SelectedPostCard'
import postServices from '../../Services/postServices'

const HomePage = () => {
	const { posts } = usePosts()
	const [selectedPostId, setSelectedPostId] = useState(undefined)
	const [selectedPost, setSelectedPost] = useState(undefined)

	useEffect(() => {
		if (selectedPostId) {
			postServices
				.getSelectedPost(selectedPostId)
				.then(data => setSelectedPost(data))
		}
	}, [selectedPostId])

	return (
		<Fragment>
			{selectedPost && (
				<div className='selected-post-wrapper'>
					<SelectedPostCard
						selectedPost={selectedPost}
						setSelectedPostId={setSelectedPostId}
						setSelectedPost={setSelectedPost}
					/>
				</div>
			)}
			<div className='users-posts'>
				{posts?.map(post => (
					<PostCard
						post={post}
						key={post.id}
						setSelectedPostId={setSelectedPostId}
					/>
				))}
			</div>
		</Fragment>
	)
}

export default HomePage
