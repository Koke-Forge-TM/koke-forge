export interface ProjectsObject {
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
    tagEs: string,
    tagEn: string,
}


interface ProjectImage {
    src: string,
    altEs: string,
    altEn: string,
}

interface BlueTitle {
    titleEs: string,
    titleEn: string,
    url: string,
}

interface Feature {
    titleEs: string,
    titleEn: string,
}

export interface Project {
    blueTitle: BlueTitle,
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
    features: Feature[],
    img: ProjectImage,
}