export class GoTop {

    static render() {
        let gotop = document.createElement('div');
        gotop.setAttribute('class', 'gotop');
        gotop.innerHTML = `
            <div class="top">
                <a href="#">
                <i class="fa fa-angle-up"></i>
                </a>
            </div>
        `
        return gotop;
    }
}