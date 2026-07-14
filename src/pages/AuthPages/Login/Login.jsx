import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, RefreshCcw } from "lucide-react";

import bg from "../../../assets/bg_image.png";
import logo from "../../../assets/logo.png";
import google from "../../../assets/google.svg";

import styles from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("customer");

    // Captcha State
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    // Generate Captcha
    const generateCaptcha = () => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let result = "";

        for (let i = 0; i < 6; i++) {
            result += chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }

        setCaptcha(result);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Handle Login
    const handleLogin = () => {
        if (captchaInput.trim() !== captcha) {
            setCaptchaError("Invalid Captcha");
            setCaptchaInput("");
            generateCaptcha();
            return;
        }

        setCaptchaError("");

        if (userType === "owner") {
            navigate("/ownerForm/messDetails");
        } else {
            navigate("/customer/dashboard");
        }
    };

    return (
        <div
            className={`min-w-screen min-h-screen flex items-center justify-center px-4 ${styles.background}`}
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
                    Welcome Back!
                </h1>

                <p className={styles.subHeading}>
                    Sign in to your account
                </p>

                {/* User Type */}
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
                        className={`p-5 ${styles.input}`}
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
                            className={`p-5 ${styles.input}`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#CF5B3E]"
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
                        value={captchaInput}
                        onChange={(e) =>
                            setCaptchaInput(e.target.value)
                        }
                        className="flex-1 px-4 outline-none bg-transparent"
                    />

                    <button
                        type="button"
                        onClick={generateCaptcha}
                        className="w-12 h-12 flex items-center justify-center hover:text-[#CF5B3E]"
                    >
                        <RefreshCcw size={20} />
                    </button>

                    <div
                        className={`${styles.captchaText} select-none`}
                    >
                        {captcha}
                    </div>

                </div>

                {/* Captcha Error */}
                {captchaError && (
                    <p className="text-red-500 text-sm mt-2">
                        {captchaError}
                    </p>
                )}

                {/* Login */}
                <button
                    className={styles.loginBtn}
                    onClick={handleLogin}
                >
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

                    Don't have an account?{" "}

                    <span
                        className={styles.registerLink}
                        onClick={() => navigate("/register")}
                        style={{ cursor: "pointer" }}
                    >
                        Register
                    </span>

                </p>

            </div>
        </div>
    );
};

export default Login;