import { useState } from "react";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import bg from "../../../assets/bg_image.png";
import logo from "../../../assets/logo.png";
import google from "../../../assets/google.svg";
import styles from "../Login/Login.module.css";

const Register = () => {
    const [userType, setUserType] = useState("owner");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 ${styles.background}`}
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className={styles.loginCard}>
                {/* Logo */}
                <div className="flex justify-center mb-5">
                    <img
                        src={logo}
                        alt="Find Food"
                        className={styles.logo}
                    />
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>
                    Register now
                </h1>

                <p className={styles.subHeading}>
                    It's quick and easy
                </p>

                {/* User Type Toggle */}
                <div className={styles.toggleContainer}>
                    <button
                        type="button"
                        onClick={() => setUserType("owner")}
                        className={
                            userType === "owner"
                                ? styles.activeBtn
                                : styles.inactiveBtn
                        }
                    >
                        Mess Owner
                    </button>

                    <button
                        type="button"
                        onClick={() => setUserType("customer")}
                        className={
                            userType === "customer"
                                ? styles.activeBtn
                                : styles.inactiveBtn
                        }
                    >
                        Customer
                    </button>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className={styles.label}>
                        Your Email
                    </label>

                    <input
                        type="email"
                        placeholder="jonephilip@gmail.com"
                        className={styles.input}
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className={styles.label}>
                        Password
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className={styles.input}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CF5B3E] transition"
                        >
                            {showPassword ? (
                                <EyeOff size={22} />
                            ) : (
                                <Eye size={22} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className={styles.label}>
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="********"
                            className={styles.input}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CF5B3E] transition"
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={22} />
                            ) : (
                                <Eye size={22} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Register Button */}
                <button className={styles.loginBtn}>
                    Register
                </button>

                {/* Divider */}
                <div className="flex items-center my-7">
                    <div className="flex-1 h-px bg-gray-300"></div>

                    <span className="px-4 text-sm text-gray-500">
                        Or Login With
                    </span>

                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google */}
                <button className={styles.googleBtn}>
                    <img
                        src={google}
                        alt="Google"
                        className="w-6 h-6"
                    />

                    <span>Continue with Google</span>
                </button>

                {/* Bottom Link */}
                <p className={styles.registerText}>
                    Already have an account?

                    <span className={styles.registerLink}>
                        {" "}
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;