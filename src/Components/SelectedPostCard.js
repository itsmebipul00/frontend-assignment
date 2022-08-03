import { useRef } from 'react'
import './SelectedPostCard.css'
import { useClickOutside } from '../Hooks/useClickOutSide'

export const SelectedPostCard = props => {
	const { selectedPost, setSelectedPostId, setSelectedPost } = props

	const handleClosePost = () => {
		setSelectedPost(undefined)
		setSelectedPostId(undefined)
	}

	const modalRef = useRef()

	useClickOutside(modalRef, () => {
		handleClosePost()
	})

	return (
		<div className='selectedPost' ref={modalRef}>
			<button className='close-icon' onClick={handleClosePost}>
				X
			</button>
			<img
				src={selectedPost.thumbnail.large}
				alt={selectedPost.title}
				className='selectedPost-picture'
			/>
			<article className='selected-post-info'>
				<h2 className='selected-post-title fw-900'>
					{selectedPost.title}
				</h2>
				<p className='selected-post-content text-gray'>
					{selectedPost.content}
				</p>
				<section className='selected-post-authorinfo text-dark-gray'>
					<img
						src={selectedPost.author.avatar}
						alt={selectedPost.name}
						className='selected-author-image'
					/>
					<span className='author-details'>
						{selectedPost.author.name}- {selectedPost.author.role}
					</span>
				</section>
			</article>
		</div>
	)
}
