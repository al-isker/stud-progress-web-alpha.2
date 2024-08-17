import { useEffect, useState } from 'react';

import { useNotification } from './useNotification';

interface IReturn {
	localImage: string | undefined;
	setLocalImage: (image: File) => void;
	error: {
		message: string;
		isOpen: boolean;
		close: () => void;
		open: () => void;
	};
}

export const useLocaleImage = (path: string): IReturn => {
	const [image, setImage] = useState<string>();

	const notification = useNotification();
	const message = 'Изображение слишком большого размера';

	useEffect(() => {
		const localImage = localStorage.getItem(path);

		if (localImage) {
			setImage(localImage);
		}
	}, []);

	useEffect(() => {
		const localImage = localStorage.getItem(path);

		if (image) {
			if (image !== localImage) {
				localStorage.setItem(path, image);
			}
		}
	}, [image]);

	const setLocalImage = (image: File) => {
		const fr = new FileReader();

		fr.readAsDataURL(image);

		fr.onload = () => {
			const convertImage = fr.result as string;

			if (convertImage.length < 4900000) {
				setImage(convertImage);
			} else {
				notification.open();
			}
		};
	};

	return {
		localImage: image,
		setLocalImage,
		error: {
			message,
			isOpen: notification.isOpen,
			open: notification.open,
			close: notification.close
		}
	};
};
