import { useEventListener } from './useEventListner'

export const useClickOutside = (ref, cb) => {
	useEventListener(
		'click',
		e => {
			if (ref.current === null || ref.current.contains(e.target))
				return
			cb(e)
		},
		window
	)
}
