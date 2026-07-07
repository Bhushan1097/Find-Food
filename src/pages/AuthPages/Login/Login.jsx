import { useState } from "react";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import bg from "../../../assets/bg_image.png";
import logo from "../../../assets/logo.png";
import google from "../../../assets/google.svg";
import styles from "../Login/Login.module.css";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("customer");

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 ${styles.background}`}
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className={styles.loginCard}>

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src={logo}
                        alt="Find Food"
                        className={styles.logo}
                    />
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>
                    Welcome Back !
                </h1>

                <p className={styles.subHeading}>
                    Sign in to your account
                </p>

                {/* Toggle */}
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
                <div className="mb-5">

                    <label className={styles.label}>
                        Your Email
                    </label>

                    <input
                        type="email"
                        placeholder="abc@gmail.com"
                        className={` p-5 ${styles.input}`}
                    />

                </div>

                {/* Password */}
                <div>
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

                {/* Forgot Password */}
                <div className="flex justify-end">

                    <button className={styles.forgotBtn}>
                        Forgot Password?
                    </button>

                </div>

                {/* Captcha */}
                <div className={styles.captchaBox}>

                    <input
                        type="text"
                        placeholder="Enter Captcha"
                    />

                    <button className="w-12 h-12 flex items-center justify-center">

                        <RefreshCcw size={20} />

                    </button>

                    <div className={styles.captchaText}>
                        kpoh89
                    </div>

                </div>

                {/* Login */}
                <button className={styles.loginBtn}>
                    Login
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

                {/* Register */}
                <p className={styles.registerText}>

                    Don't have an account?

                    <span className={styles.registerLink}>
                        Register
                    </span>

                </p>

            </div>
        </div>
    );
};

export default Login;