interface Feature {
    iconClass: string,
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
}

export interface FeatureObject {
    titleEs: string,
    subtitleEs: string,
    titleEn: string,
    subtitleEn: string,
    features: Feature[],
}
