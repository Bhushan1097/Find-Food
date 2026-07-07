import logo from "../../assets/logo.png";
import footerBg from "../../assets/bg_image.png";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#F9EEE8]">

            {/* Background Image with Low Opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{
                    backgroundImage: `url(${footerBg})`,
                }}
            ></div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Logo */}
                    <div>

                        <img
                            src={logo}
                            alt="Find Food"
                            className="w-36 mb-6"
                        />

                        <p className="text-gray-700 text-lg leading-9 max-w-xs">
                            Connecting you with authentic home-cooked meals from verified
                            local chefs.
                        </p>

                    </div>

                    {/* Customers */}
                    <div>

                        <h2 className="text-4xl font-bold text-[#222] mb-8">
                            For Customers
                        </h2>

                        <ul className="space-y-5 text-2xl text-gray-700">

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Browse Mess
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Subscription Plan
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                How it Works
                            </li>

                        </ul>

                    </div>

                    {/* Owner */}
                    <div>

                        <h2 className="text-4xl font-bold text-[#222] mb-8">
                            For Mess Owner
                        </h2>

                        <ul className="space-y-5 text-2xl text-gray-700">

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Register your Shop
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Verification Process
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Partner Dashboard
                            </li>

                        </ul>

                    </div>

                    {/* Support */}
                    <div>

                        <h2 className="text-4xl font-bold text-[#222] mb-8">
                            Support
                        </h2>

                        <ul className="space-y-5 text-2xl text-gray-700">

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Help Center
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Contact Us
                            </li>

                            <li className="cursor-pointer hover:text-[#D85C39] duration-300">
                                Terms & Privacy
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;