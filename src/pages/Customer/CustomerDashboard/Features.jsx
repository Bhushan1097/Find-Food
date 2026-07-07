import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <section className="bg-[#F9EEE8] py-5">

            <div className="max-w-7xl mx-auto px-5">

                <div
                    className="
        bg-[#F9EEE8]
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
                >

                    <FeatureCard
                        icon="home"
                        title="Home-Tested & Verified"
                        description="Every meal partner is personally verified to ensure genuine homemade taste and quality."
                    />

                    <FeatureCard
                        icon="shield"
                        title="Hygiene Certified"
                        description="Prepared in clean kitchens following hygiene standards for safe and healthy meals."
                    />

                    <FeatureCard
                        icon="food"
                        title="Fresh & Authentic"
                        description="Enjoy fresh, nutritious food prepared daily with authentic homemade recipes."
                    />

                </div>

            </div>

        </section>
    );
};

export default Features;