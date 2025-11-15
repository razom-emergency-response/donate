document.addEventListener("DOMContentLoaded", () => {
    // select scroll button
    const scrollTopBtn = document.querySelector(".et_pb_scroll_top");
    // Select all btn-trigger-donate buttons
    const donationLinks = document.querySelectorAll(".btn-trigger-donate");

    if (scrollTopBtn) {
    
        // Show/hide button on scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                scrollTopBtn.classList.remove("et-hidden");
                scrollTopBtn.classList.add("et-visible");
            } else {
                scrollTopBtn.classList.remove("et-visible");
                scrollTopBtn.classList.add("et-hidden");
            }
        });
    }

    // Prevent The Giving Block’s script from initializing
    window.__tgbWidgetScriptLoaded = true; // Flag to block The Giving Block’s script
    window.widgetOptions = null; // Clear widgetOptions to avoid conflicts

    const donationDiv = document.querySelector("#tgb-widget-overlay");

    donationLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior (href="#")
            
            if (donationDiv) {

            // Initiate Iframe and Button
            const donationContent = `
                <iframe
                    id="tgb-widget-frame"
                    frameborder="0"
                    scrolling="no"
                    src="widget/widget.html"
                    data-gtm-yt-inspected-43191054_99="true"
                    data-gtm-yt-inspected-11="true"
                    style="width: 430px; height: 601px; border-radius: 5px"
                ></iframe>
            
                <button 
                    style="display: none; background-color: transparent; border-width: 0px; width: 20px; height: 20px; padding: 2px; margin: 0px; position: absolute; top: 20px; right: 20px;">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.12132 14.0208L14.0208 4.12133C14.4113 3.73081 14.4113 3.09764 14.0208 2.70712C13.6303 2.3166 12.9971 2.3166 12.6066 2.70712L2.70711 12.6066C2.31658 12.9971 2.31658 13.6303 2.70711 14.0208C3.09763 14.4113 3.7308 14.4113 4.12132 14.0208Z" fill="white"></path>
                        <path d="M14.0209 12.6204L4.12141 2.7209C3.73089 2.33038 3.09772 2.33038 2.7072 2.7209C2.31668 3.11142 2.31668 3.74459 2.7072 4.13511L12.6067 14.0346C12.9972 14.4251 13.6304 14.4251 14.0209 14.0346C14.4114 13.6441 14.4114 13.0109 14.0209 12.6204Z" fill="white"></path>
                    </svg>
                </button>
            `;

            donationDiv.innerHTML = donationContent;                                                 
            donationDiv.style.display = "flex"; // Show overlay

            console.log("Custom widget loaded in #tgb-widget-overlay");
            } else {
            console.error("Missing #tgb-widget-overlay");
            }
        });

        donationDiv.addEventListener("click", () => {
            donationDiv.style.display = "none";
            console.log(`Clicking ${donationDiv} caused the overlay to disappear`);
        })
    });

    const closeAdButton = document.querySelector("#interactive-close-button");

    closeAdButton.addEventListener("click", () => {
        // Add close button functinality code here
    })
});
