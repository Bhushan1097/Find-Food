import CustomerNavbar from "../../../components/CustomerNavbar/CustomerNavbar";
import Hero from "./Hero";
import Features from "./Features";
import FeaturedMess from "./FeaturedMess";
import Footer from "../../../components/Footer/Footer";

const CustomerDashboard = () => {
    return (
        <>
            <CustomerNavbar />

            <Hero />

            <Features />

            <FeaturedMess/>

            <Footer/>

        </>
    );
};

export default CustomerDashboard;