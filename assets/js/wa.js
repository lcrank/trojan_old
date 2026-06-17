document.addEventListener("DOMContentLoaded", function() {
    // Create the WhatsApp anchor element
    let whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/9385403922";
    whatsappButton.className = "whatsapp_float";
    whatsappButton.target = "_blank";

    // Add the WhatsApp icon image inside the anchor
    let whatsappIcon = document.createElement("img");
    whatsappIcon.src = "assets/images/wa.png";
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.className = "whatsapp_icon";
    
    // Append the image to the anchor
    whatsappButton.appendChild(whatsappIcon);
    
    // Append the WhatsApp button to the body
    document.body.appendChild(whatsappButton);

    // Add the styles
    let styles = `
        .whatsapp_float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 90px;
            right: 10px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 1000;
        }
        
        .whatsapp_icon {
            width: 100%;
            height: 100%;
            padding: 10px;
        }
        
        .whatsapp_float:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    `;
    
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
});




