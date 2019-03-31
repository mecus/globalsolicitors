export class Router {

    constructor(){
        window.addEventListener('hashchange', (e) => {
            console.log(e);
        });
    }

}