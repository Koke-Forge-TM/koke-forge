import {Section,Img} from "@/schemas/general";


export interface ProjectsObject extends Section{
    tagEs: string,
    tagEn: string,
}

interface BlueTitle extends ProjectFeature{
    url: string,
}

export interface ProjectFeature {
    titleEs: string,
    titleEn: string,
}

export interface Project {
    blueTitle: BlueTitle,
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
    features: ProjectFeature[],
    img: Img,
}