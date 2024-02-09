export interface CommentsObject {
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
}

interface ClientWeb {
    name: string,
    url: string
}

export interface Comment {
    commentEs: string,
    commentEn: string,
    clientImg: string,
    clientName: string,
    web: ClientWeb,
}