import ProjectFeat from "@/components/projects/feature/ProjectFeat"
import type {Project, ProjectFeature} from "@/schemas/projects"
import type {Img} from "@/schemas/general"

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    "project": Project,
    "index": number
}


export default function ProjectCard(props: ProjectCardProps) {
    const project: Project = props.project
    const features: ProjectFeature[] = project.features
    const img: Img = project.img

    return (
        <>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {
                    props.index % 2 == 0 ?
                        <>
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto"
                                       style={{
                                           width: 540,
                                           height: 405
                                       }}
                                       src={img.src}
                                       width={540}
                                       height={405}
                                       alt={img.altEn}/>
                            </div>
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <Link href={project.blueTitle.url}
                                          className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        {project.blueTitle.titleEn}
                                    </Link>
                                    <h3 className="h3 mb-3">{project.titleEn}</h3>
                                    <p className="text-xl text-gray-400 mb-4">{project.subtitleEn}</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        {
                                            features && features.length > 0 ?
                                                features.map((feature: ProjectFeature, index: number) => (
                                                    <li key={index} className="flex items-center mb-2">
                                                        <ProjectFeat key={index} feature={feature}/>
                                                    </li>
                                                ))
                                                :
                                                <div></div>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto"
                                       style={{
                                           width: 540,
                                           height: 405
                                       }}
                                       src={img.src}
                                       width={540}
                                       height={405}
                                       alt={img.altEn}/>
                            </div>
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <Link href={project.blueTitle.url}
                                          className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        {project.blueTitle.titleEn}
                                    </Link>
                                    <h3 className="h3 mb-3">{project.titleEn}</h3>
                                    <p className="text-xl text-gray-400 mb-4">{project.subtitleEn}</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        {
                                            features && features.length > 0 ?
                                                features.map((feature: ProjectFeature, index: number) => (
                                                    <li key={index} className="flex items-center mb-2">
                                                        <ProjectFeat key={index} feature={feature}/>
                                                    </li>
                                                ))
                                                :
                                                <div></div>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    )
}