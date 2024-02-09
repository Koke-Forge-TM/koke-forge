import {featureSection, features} from "@/data/featuresList"
import type {Feature} from "@/schemas/features";

import FeaturesCard from "@/components/features/card/FeaturesCard";


export default function Features() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">{featureSection.titleEn}</h2>
                        <p className="text-xl text-gray-400">{featureSection.subtitleEn}</p>
                    </div>

                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none data-aos-id-blocks">
                        {
                            features && features.length > 0 ?
                                features.map((feature: Feature, index: number) => (
                                    <FeaturesCard key={index} feature={feature}/>
                                ))
                                :
                                <p>NO PROJECTS</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
