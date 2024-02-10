import {projects, projectSection} from "@/data/projects"
// import {getAllProjects} from "@/lib/requestProjects"
import type {Project} from "@/schemas/projects"

import ProjectCard from "@/components/projects/card/ProjectCard";


// const res = await getAllProjects()
// const projects: Project[] = res.json()

export default function Projects() {


    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* General header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div
                            className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">{projectSection.tagEn}</div>
                        <h1 className="h2 mb-4">{projectSection.titleEn}</h1>
                        <p className="text-xl text-gray-400">{projectSection.subtitleEn}</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {
                            projects && projects.length > 0 ?
                                projects.map((project: Project, index: number) => (
                                    <ProjectCard key={index} index={index} project={project}/>
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
