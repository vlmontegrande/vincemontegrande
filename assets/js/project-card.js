class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: var(--primary-color, brown);
                }

                a {
                    box-sizing: border-box;
                    aspect-ratio: 1 / 1;
                    width: 50%;
                }

                img {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: bottom;
                    border-radius: 2rem;
                }

                a {
                    transition: transform 0.3s;
                }

                a:hover {
                    transform: scale(1.1);
                }

                h2 {
                    font-family: "Volkhov", Arial, Sans-serif;
                    color: var(--primary-color, brown);
                    margin: 0;
                }
            </style>

            <hgroup>
                <h2></h2>
                <p></p>
            </hgroup>
            <a target="_blank">
                <picture>
                    <img>
                </picture>
            </a>
        `;
    }
}

customElements.define('project-card', ProjectCard);