import { AppNavigation } from './sections/app-navigation';
import { AppHeader } from './sections/app-header';
import { About } from './sections/about';
import { Service } from './sections/service';
import { AppFooter } from './sections/app-footer';
import { Navigation } from './temp/navigation';
import { Contact } from './sections/contact';
import { Testimony } from './sections/testimony';
import { News } from './sections/news';
import { GoTop } from './sections/gotop';

export class AppComponent {
    constructor(){
        let htmlBody = document.querySelector('body');
        let scriptTag = document.querySelector('#script');

        // App Root Section
        let appRoot = document.createElement('div');
        appRoot.setAttribute('id', 'app')
        appRoot.setAttribute('class', 'app');

        // App Content section
        let appContent = document.createElement('section');
        appContent.setAttribute('class', 'app-content');


        // Section Rendering
        appContent.appendChild(AppHeader.render());
        appContent.appendChild(About.render());
        appContent.appendChild(Service.render());
        appContent.appendChild(Contact.render());
        appContent.appendChild(Testimony.render());
        appContent.appendChild(News.render());

        appContent.appendChild(AppFooter.render());
        appContent.appendChild(GoTop.render());


        appRoot.appendChild(AppNavigation.render());
        appRoot.appendChild(appContent);
        htmlBody.appendChild(appRoot);
        // htmlBody.insertBefore(scriptTag, appRoot);
    }
}