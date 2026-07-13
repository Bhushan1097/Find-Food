import { Link } from "react-router-dom";
import errorImage from "../../assets/404.png";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
            <div className="text-center">

                {/* Image */}
                <img
                    src={errorImage}
                    alt="404"
                    className="w-[420px] max-w-full mx-auto"
                />

                {/* Error */}
                <h1 className="text-[64px] font-bold text-[#F05A22] leading-none mt-4">
                    Error 404
                </h1>

                {/* Subtitle */}
                <p className="text-[28px] tracking-[4px] text-[#F05A22] font-medium mt-2">
                    Page not found
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-8 bg-[#F05A22] hover:bg-[#d94b1d] text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;