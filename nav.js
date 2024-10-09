class NavMenu {
    constructor(tituloMenu, linksMenu, links) {
        this.tituloMenu = document.querySelector(tituloMenu);
        this.linksMenu = document.querySelector(linksMenu);
        this.links = document.querySelectorAll(links);
        this.aberto = "aberto";

        this.handleClick = this.handleClick.bind(this);
    }
    
    linksAnimados() {
        this.links.forEach((link, index) => {
         
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `aparecerLinks 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.linksMenu.classList.toggle(this.aberto);
        this.tituloMenu.classList.toggle(this.aberto);
        this.linksAnimados();
    }

    addClickEvent() {
        this.tituloMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.tituloMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const navMenu = new NavMenu(
    ".titulo-menu",
    ".links-menu",
    ".links-menu li",
);
navMenu.init();

