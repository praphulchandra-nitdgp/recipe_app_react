import React from "react";
import "./about.css";

function About() {
    return (
        <section className="about-us" id="about-us">
            <h2 className="about-heading">About Us</h2>
                <div className="about-card">
                    <div className="card-content">
                        <div className="card-item">
                            <h3>Introduction</h3>
                            <p>Welcome to My Recipe App, your ultimate destination for discovering and sharing delicious recipes from around the world. Whether you're a seasoned chef or a home cook, we provide a platform to inspire your culinary journey.</p>
                        </div>
                        <div className="card-item">
                            <h3>Our Mission</h3>
                            <p>Our mission is to bring people together through the joy of cooking. We strive to make cooking accessible and enjoyable for everyone by providing a diverse collection of recipes, tips, and resources to enhance your kitchen experience.</p>
                            <h3>What We Provide</h3>
                            <p>Here, we offer a wide variety of recipes ranging from quick weeknight dinners to gourmet meals. We provide detailed instructions, ingredient lists, and nutritional information to help you create delicious and healthy dishes. Join our community to share your recipes and discover new favorites.</p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default About;