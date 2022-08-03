import './PostCard.css'

export const PostCard = props => {
	const { post, setSelectedPostId } = props

	return (
		<div className='post-wrapper'>
			<div
				className='post-image-wrapper'
				onClick={() => setSelectedPostId(post.id)}>
				<span className='post-learn-more fw-700'>Learn More</span>
				<img
					src={post.thumbnail.large}
					alt={post.title}
					className='post-picture'
				/>
			</div>

			<section className='post-info-wrapper'>
				<h2 className='post-title fw-900'>{post.title}</h2>
				<article className='post-content text-gray'>
					{post.content}
				</article>
				<p className='post-author-info text-dark-gray'>
					<span>
						{post.author.name}-{post.author.role}
					</span>
					<span>Nov 25, 2020</span>
				</p>
			</section>
		</div>
	)
}
