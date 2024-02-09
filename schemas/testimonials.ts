import {Img} from "@/schemas/general";

export interface ClientWeb {
    name: string,
    url: string
}

export interface Testimonial {
    commentEs: string,
    commentEn: string,
    clientImg: Img,
    clientName: string,
    web: ClientWeb,
}