export class AppHeader {

    static render() {
        let header = document.createElement('section');
        header.setAttribute('class', 'header');
        header.innerHTML = `
        <div class="text-wrapper">
            <div class="text-slide">
                <h1>Professional Lawyers with your interest at heart</h1>
            </div>
        </div>
        `  
        return header;
    }
}