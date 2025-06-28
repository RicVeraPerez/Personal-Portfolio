import React from "react";
import ConsoleLayout from "../components/ConsoleLayout";
import "../styles/ConsoleLayout.css";
import "../styles/FAQ.css";

const FAQ = () => {
    return (
        <ConsoleLayout title={"FAQ"}>
            <div className="faq-container">
                <h1 id="FAQ-header">Frequently Asked Questions</h1>
                <details>
                    <summary>
                        <strong>What's this Portfolio about?</strong>
                        <span className="arrow">▶</span>
                    </summary>
                    <p className="collapse-text">
                        This is my personal portfolio/website, here I'll showcase my projects and skills in different technologies.
                    </p>
                </details>
                <details>
                    <summary>
                        <strong>Are your commissions open?</strong>
                        <span className="arrow">▶</span>
                    </summary>
                    <p className="collapse-text">
                        Sadly, no, I won't do commissions yet, until I completely finish some personal projects and deposit them here. I'll do an announcement on my socials, so stay tuned!
                    </p>
                </details>
                <details>
                    <summary>
                        <strong>What type of work can you do?</strong>
                        <span className="arrow">▶</span>
                    </summary>
                    <p className="collapse-text">
                        As is said on my About me page, i specialize in the front-end area, but i do have a lot of experience in database management
                    </p>
                </details>
                <details>
                    <summary>
                        <strong>
                            Experience?
                         </strong>
                        <span className="arrow">▶</span>
                    </summary>
                    <p className="collapse-text">
                        I dont really have professional experience on this topic, altough i did work internationally on Fiverr not so long ago, my job there was just transcribe and translate documents on differents languagues
                    </p>
                </details>
                <details>
                    <summary>
                        <strong>
                            What's 9 + 10
                         </strong>
                        <span className="arrow">▶</span>
                    </summary>
                    <p className="collapse-text">
                        21
                    </p>
                </details>
            </div>
        </ConsoleLayout>
    );
}

export default FAQ;