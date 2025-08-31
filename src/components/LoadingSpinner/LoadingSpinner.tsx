import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
	message?: string;
}

const LoadingSpinner = ({ message = "" }: LoadingSpinnerProps) => {
	return <p className="loading-spinner">{message}</p>;
};

export default LoadingSpinner;
