import { useState, useEffect, useRef } from "react";

import clsx from "clsx";

import type { ImageCarouselBlock } from "@/types/strapi";

interface ImageCarouselProps {
	block: ImageCarouselBlock;
}

const HeroCarousel = ({ block }: ImageCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (block.autoPlay && block.images.length > 1) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex(prevIndex => (prevIndex === block.images.length - 1 ? 0 : prevIndex + 1));
			}, block.intervalTime || 8000);

			return () => {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
				}
			};
		}
	}, [block.autoPlay, block.intervalTime, block.images.length]);

	if (!block.images || block.images.length === 0) {
		return null;
	}
	return (
		<div className="image-carousel">
			<div className="image-carousel__image-container">
				{block.images.map((image, i) => (
					<img
						key={image.id}
						className={clsx("image-carousel__image", {
							"image-carousel__image--active": i === currentIndex,
						})}
						src={image.url}
						alt={image.alternativeText || ""}
						width={image.width}
						height={image.height}
						aria-hidden={i !== currentIndex}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroCarousel;
