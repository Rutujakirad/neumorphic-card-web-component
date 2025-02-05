class NeumorphicCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Get attributes
        const width = this.getAttribute('width') || '300px';
        const height = this.getAttribute('height') || '200px';
        const background = this.getAttribute('background') || '#f0f0f0';
        const shadowStrength = this.getAttribute('shadow-strength') || '20px';
        const borderRadius = this.getAttribute('border-radius') || '20px';
        const fontSize = this.getAttribute('font-size') || '16px';
        const buttonText = this.getAttribute('button-text') || 'Click Me';
        const buttonColorStart = this.getAttribute('button-color-start') || '#FF8A00';
        const buttonColorEnd = this.getAttribute('button-color-end') || '#D500F9';
        const buttonBorderColor = this.getAttribute('button-border') || '#9E1B32';
        const badgeCount = this.getAttribute('badge-count') || '0';
        const expanded = this.getAttribute('expanded') === 'true' ? true : false;
        const badgeColorStart = this.getAttribute('badge-color-start') || '#FF5722';
        const badgeColorEnd = this.getAttribute('badge-color-end') || '#FF9800';

        this.shadowRoot.innerHTML = `
            <style>
                /* Neumorphism Card */
                .card {
                    width: ${width};
                    height: ${expanded ? '400px' : height};
                    background: ${background};
                    border-radius: ${borderRadius};
                    box-shadow: ${shadowStrength} ${shadowStrength} 30px rgba(0, 0, 0, 0.1), 
                                -${shadowStrength} -${shadowStrength} 30px rgba(255, 255, 255, 0.7);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: center;
                }

                /* Hover Effect */
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15), 
                                0px -20px 40px rgba(255, 255, 255, 0.8);
                }

                /* Badge */
                .badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: linear-gradient(45deg, ${badgeColorStart}, ${badgeColorEnd});
                    color: white;
                    border-radius: 50%;
                    padding: 5px 12px;
                    font-size: 14px;
                    font-weight: bold;
                    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
                }

                /* Image Style */
                .card img {
                    max-width: 100%;
                    border-radius: ${borderRadius};
                    margin-bottom: 15px;
                    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15),
                                -6px -6px 15px rgba(255, 255, 255, 0.8);
                }

                /* Button */
                .card button {
                    padding: 12px 25px;
                    background: linear-gradient(45deg, ${buttonColorStart}, ${buttonColorEnd});
                    color: white;
                    border: 2px solid ${buttonBorderColor};
                    border-radius: 50px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                    transition: background 0.3s ease, transform 0.3s ease;
                    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1), 
                                -5px -5px 15px rgba(255, 255, 255, 0.7);
                }

                .card button:hover {
                    background: linear-gradient(45deg, ${buttonColorEnd}, ${buttonColorStart});
                    transform: scale(1.05);
                }

                .card button:active {
                    transform: scale(0.95);
                }

                /* Expand/Collapse Button */
                #toggleButton {
                    background-color: #3f51b5;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 30px;
                    cursor: pointer;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1),
                                -3px -3px 6px rgba(255, 255, 255, 0.8);
                    margin-top: 15px;
                    font-weight: bold;
                }

                #toggleButton:hover {
                    background-color: #303f9f;
                }

                #toggleButton:active {
                    background-color: #1c2e7c;
                }

            </style>
            <div class="card" id="card">
                <span class="badge">${badgeCount}</span>
                <img src="${this.getAttribute('image') || ''}" alt="Image" />
                <slot name="title">Card Title</slot>
                <slot name="description">Card description text</slot>
                <button id="cardButton">${buttonText}</button>
                <button id="toggleButton">${expanded ? 'Collapse' : 'Expand'}</button>
            </div>
        `;
    }

    connectedCallback() {
        // Event listener for button click
        const button = this.shadowRoot.querySelector("#cardButton");
        if (button) {
            button.addEventListener('click', () => {
                alert('Button Clicked!');
            });
        }

        // Toggle card expansion
        const toggleButton = this.shadowRoot.querySelector("#toggleButton");
        const card = this.shadowRoot.querySelector("#card");

        toggleButton.addEventListener('click', () => {
            card.style.height = card.style.height === '200px' ? '400px' : '200px';
            toggleButton.textContent = card.style.height === '200px' ? 'Expand' : 'Collapse';
        });
    }
}

customElements.define('neumorphic-card', NeumorphicCard);
