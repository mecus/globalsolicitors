export class About {

    static render() {
        let aboutSection = document.createElement('section');
        aboutSection.setAttribute('class', 'about-container');
        aboutSection.setAttribute('id', 'about');
        aboutSection.innerHTML = `
        <div class="about">
            <div class="about-image">
                <h2>Tony Dike</h2>
                <p>Principal Associate</p>
            </div>
            <div class="about-text">
                <h1>Welcome to Global Solicitors</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sit quaerat cum consequuntur sint fugiat reprehenderit voluptatum ea dicta non esse quisquam sunt, molestias ipsam dolorum quidem, aliquid rem doloremque.</p>
            </div>
        </div>
    `;
        return aboutSection;
    }
}