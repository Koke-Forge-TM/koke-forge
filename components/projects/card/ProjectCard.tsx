import ProjectFeat from "@/components/projects/feature/ProjectFeat"
import type {Project, ProjectFeature} from "@/schemas/projects"
import type {Img} from "@/schemas/general"

import Image from "next/image";

interface ProjectCardProps {
    "project": Project
}


export default function ProjectCard(props: ProjectCardProps) {
    const project: Project = props.project
    const features: ProjectFeature[] = project.features
    const img: Img = project.img

    return (
        <>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={img.src} width={540} height={405}
                           alt={img.altEn}/>
                </div>

                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                        <div
                            className="font-architects-daughter text-xl text-purple-600 mb-2">
                            {project.blueTitle.titleEn}
                        </div>
                        <h3 className="h3 mb-3">{project.titleEn}</h3>
                        <p className="text-xl text-gray-400 mb-4">{project.subtitleEn}</p>
                        <ul className="text-lg text-gray-400 -mb-2">
                            {
                                features && features.length > 0 ?
                                    features.map((feature: ProjectFeature, index: number) => (
                                        <li className="flex items-center mb-2">
                                            <ProjectFeat key={index} feature={feature}/>
                                        </li>
                                    ))
                                    :
                                    <div></div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}