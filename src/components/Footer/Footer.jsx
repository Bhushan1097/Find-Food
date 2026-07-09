import logo from "../../assets/logo.png";
import footerBg from "../../assets/bg_image.png";

const Footer = () => {
    return (
        <footer className="relative h-[376px] overflow-hidden bg-[#F9EEE8]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{
                    backgroundImage: `url(${footerBg})`,
                }}
            ></div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

                    {/* Logo */}
                    <div>
                        <img
                            src={logo}
                            alt="Find Food"
                            className="w-36 "
                        />

                        <p className="font-poppins font-normal text-[14px] leading-[180%] text-gray-700 max-w-xs">
                            Connecting you with authentic home-cooked meals from verified
                            local chefs.
                        </p>
                    </div>
                    <div className="w-[50px]"></div>

                    {/* Customers */}
                    <div>
                        <h2 className="font-poppins font-medium text-[20px] leading-[100%] text-[#222] mb-5">
                            For Customers
                        </h2>

                        <ul className="font-poppins font-normal text-[18px] leading-[250%] text-gray-700">
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

                    {/* Mess Owner */}
                    <div>
                        <h2 className="font-poppins font-medium text-[20px] leading-[100%] text-[#222] mb-5">
                            For Mess Owner
                        </h2>

                        <ul className="font-poppins font-normal text-[18px] leading-[250%] text-gray-700">
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
                        <h2 className="font-poppins font-medium text-[20px] leading-[100%] text-[#222] mb-5">
                            Support
                        </h2>

                        <ul className="font-poppins font-normal text-[18px] leading-[250%] text-gray-700">
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