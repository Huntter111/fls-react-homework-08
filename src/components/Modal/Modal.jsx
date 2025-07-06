import styles from './Modal.module.css'
const Modal = ({ children, visible, setVisible }) => {
	const rootClasses = [styles.modal]
	if (visible) {
		rootClasses.push(styles.active)
	}
	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				{children}

				<button className={styles.close} onClick={() => setVisible(false)}>
					❌
				</button>
			</div>
		</div>
	)
}

export default Modal
