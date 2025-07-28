import { useState, useEffect, useRef } from "react";

import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

import type { ImageCarouselBlock } from "@/types/strapi";

import "./ImageCarousel.scss";

interface ImageCarouselProps {
	block: ImageCarouselBlock;
}

const ImageCarousel = ({ block }: ImageCarouselProps) => {
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

	const goToPrevious = () => {
		setCurrentIndex(currentIndex === 0 ? block.images.length - 1 : currentIndex - 1);
	};

	const goToNext = () => {
		setCurrentIndex(currentIndex === block.images.length - 1 ? 0 : currentIndex + 1);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	if (!block.images || block.images.length === 0) {
		return null;
	}

	const controls = (
		<div className="image-carousel__controls">
			<button
				type="button"
				className="image-carousel__control image-carousel__control--previous"
				onClick={goToPrevious}
			>
				<CaretLeftIcon className="image-carousel__icon" />
			</button>
			<button
				type="button"
				className="image-carousel__control image-carousel__control--next"
				onClick={goToNext}
			>
				<CaretRightIcon className="image-carousel__icon" />
			</button>
			<div className="image-carousel__indicators">
				{block.images.map((image, index) => (
					<button
						type="button"
						key={image.id}
						className={clsx("image-carousel__indicator", {
							"image-carousel__indicator--active": index === currentIndex,
						})}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);

	return (
		<section
			className={clsx("block image-carousel", {
				"image-carousel--full-bleed": block.isFullBleed,
			})}
		>
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
			{block.showControls && controls}
		</section>
	);
};

export default ImageCarousel;
