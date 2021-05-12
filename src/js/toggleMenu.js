export default class ToggleMenu {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            body: 'data-body',
            nav: 'data-nav',
            menu: 'data-menu',
            overlay: 'data-overlay',
            menuOpenClass: 'menu-open',
            navOpenClass: 'nav-open',
            navCloseClass: 'nav-close',
            activeClass: 'active',
            overflowClass: 'overflow'
        }

        this.body = document.querySelector(`[${this.selectors.body}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);
        this.menu = document.querySelector(`[${this.selectors.menu}]`);
        this.overlay = document.querySelector(`[${this.selectors.overlay}]`);

        if (!this.body || !this.nav || !this.menu || !this.overlay) return false;

        this.expanded = this.menu.getAttribute('aria-expanded') === false ? false : true;
        this.open = false;
        this.duration = 1000;
        this.timer;

        return true;
    }

    // Hamburger menu event listener
    setupEvents() {
        this.menu.addEventListener('click', () => this.toggle());
        this.overlay.addEventListener('click', () => this.hide());
        window.addEventListener('resize', () => this.disableOnDesktop());
    }

    // Toggle menu
    toggle() {
        !this.open ? this.show() : this.hide();
    }
    
    // Show animation when menu is open
    show() {
        this.menu.style.pointerEvents = 'none';
        
        this.nav.classList.add(`${this.selectors.menuOpenClass}`);
        this.nav.classList.add(`${this.selectors.navOpenClass}`);
        this.overlay.classList.add(`${this.selectors.activeClass}`);
        this.body.classList.add(`${this.selectors.overflowClass}`);
        
        this.expanded = true;
        this.menu.setAttribute('aria-expanded', this.expanded);
        this.open = true;
        
        this.timer = window.setTimeout(() => {
            this.menu.style.pointerEvents = 'all';
            this.timer = false;
        }, this.duration);
    }
    
    // Show animation when menu is close
    hide() {
        this.menu.style.pointerEvents = 'none';
        
        this.nav.classList.add(`${this.selectors.navCloseClass}`);
        this.nav.classList.remove(`${this.selectors.menuOpenClass}`);
        this.overlay.classList.remove(`${this.selectors.activeClass}`);
        
        this.expanded = false;
        this.menu.setAttribute('aria-expanded', this.expanded);
        
        this.timer = window.setTimeout(() => {
            this.nav.classList.remove(`${this.selectors.navOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navCloseClass}`);
            this.body.classList.remove(`${this.selectors.overflowClass}`);
            this.timer = false
            this.menu.style.pointerEvents = 'all';
        }, this.duration)
        this.open = false;
    }
    
    // Disable mobile menu on desktop
    disableOnDesktop() {
        this.windowWidth = window.innerWidth;
        this.tabletBreakpoint = 769;

        if (this.windowWidth >= this.tabletBreakpoint) {
            this.nav.classList.remove(`${this.selectors.menuOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navOpenClass}`);
            this.nav.classList.remove(`${this.selectors.navCloseClass}`);
            this.overlay.classList.remove(`${this.selectors.activeClass}`);
            this.body.classList.remove(`${this.selectors.overflowClass}`);
            this.expanded = false;
            this.menu.setAttribute('aria-expanded', this.expanded);
            this.open = false;
        }
    }
}