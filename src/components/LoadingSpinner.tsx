import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
	message?: string;
}

const LoadingSpinner = ({ message = "Loading" }: LoadingSpinnerProps) => {
	return <p className="loading-spinner">{message}</p>;
};

export default LoadingSpinner;
