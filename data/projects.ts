import {Project, ProjectsObject} from "@/schemas/projects";

export const projectSection: ProjectsObject = {
    titleEs: "No serás el primero en depositar tu confianza en nosostros",
    subtitleEs: "Algunas de nuestras soluciones",
    titleEn: "You will not be the first one to place your trust in us",
    subtitleEn: "Some of our solutions",
    tagEs: "alcanza tus metas con KokeForge",
    tagEn: "reach your goals with KokeForge",
}

export const projects: Project[] = [
    {
        blueTitle: {
            titleEs: "Aion Market",
            titleEn: "Aion Market",
            url: "https://www.aionmarket.com/",
        },
        titleEs: "Solución de comercio eletrónico",
        subtitleEs: "Sabemos como funciona y como se implementan las tiendas virtuales, te ayudaremos a acercar tus " +
            "productos a tus clientes",
        titleEn: "E-comerce Solution",
        subtitleEn: "We know how virtual stores work and how they are implemented, we will help you bring your products " +
            "closer to your customers",
        features: [
            {
                titleEs: "Carrito de Compras",
                titleEn: "Shopping Cart",
            },
            {
                titleEs: "Filtros para encontrar lo que buscas",
                titleEn: "Filters to find what you are looking for",
            },
            {
                titleEs: "Promociona de manera sencilla tus ofertas",
                titleEn: "Easily promote your offers",
            },
            {
                titleEs: "Integración con pasarelas de pago",
                titleEn: "Integration with online payment solutions",
            }
        ],
        img: {
            src: "/images/shop.png",
            altEs: "feature 1",
            altEn: "feature 1",
        },
    },
    {
        blueTitle: {
            titleEs: "Bar de Pedro",
            titleEn: "Pedro's Bar",
            url: "https://pedrosbar.aionmarket.com/",
        },
        titleEs: "Pagina Promocional",
        subtitleEs: "Es el siglo XXI todo negocio serio tiene una página web, lleva tu marca al ciberespacio",
        titleEn: "Landing Page",
        subtitleEn: "It's the 21st century, every serious business has a website, take your brand to cyberspace",
        features: [
            {
                titleEs: "Dile al mundo quien eres",
                titleEn: "Tell the world who you are",
            },
            {
                titleEs: "Tus clientes siempre sabrán donde encontrarte",
                titleEn: "Your clients will always know where to find you",
            },
            {
                titleEs: "Será más fácil contactarte",
                titleEn: "It will be easier to contact you",
            },
            {
                titleEs: "Todos sabrán lo que estas ofertando con solo un click",
                titleEn: "Everyone will know what you are offering with just one click",
            }
        ],
        img: {
            src: "/images/bar.jpg",
            altEs: "feature 2",
            altEn: "feature 2",
        },
    },
    {
        blueTitle: {
            titleEs: "Panel de administración de contenedores",
            titleEn: "Containers Managment Sistem",
            url: "https://www.multiservices3d.com/",
        },
        titleEs: "Software a la medida del Negocio",
        subtitleEs: "Cada negocio funciona de manera diferente a veces las soluciones existentes no son suficiente",
        titleEn: "Business Oriented Software",
        subtitleEn: "Every business works differently sometimes existing solutions are not enough",
        features: [
            {
                titleEs: "Procesos automatizados",
                titleEn: "Automated processes",
            },
            {
                titleEs: "Datos organizados de manera consistente",
                titleEn: "Data Organized Consistently",
            },
            {
                titleEs: "No mas errores de contabilidad",
                titleEn: "No more accounting errors",
            },
            {
                titleEs: "Reportes automatizados en todos los formatos",
                titleEn: "Automated reports in all formats",
            },
            {
                titleEs: "Encuentra cualquier información de manera rápida y sencilla",
                titleEn: "Find any information quickly and easily",
            }
        ],
        img: {
            src: "/images/contenedores.png",
            altEs: "feature 3",
            altEn: "feature 3",
        },
    },
]
