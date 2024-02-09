import {projects,projectSection} from "@/data/projects"
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
                                    <ProjectCard key={index} project={project}/>
                                ))
                                :
                                <p>NO PROJECTS</p>
                        }

                        {/* 1st item */}


                        {/*/!* 2nd item *!/*/}
                        {/*<div className="md:grid md:grid-cols-12 md:gap-6 items-center">*/}
                        {/*  /!* Image *!/*/}
                        {/*  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">*/}
                        {/*    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />*/}
                        {/*  </div>*/}
                        {/*  /!* Content *!/*/}
                        {/*  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">*/}
                        {/*    <div className="md:pl-4 lg:pl-12 xl:pl-16">*/}
                        {/*      <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>*/}
                        {/*      <h3 className="h3 mb-3">Keep projects on schedule</h3>*/}
                        {/*      <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>*/}
                        {/*      <ul className="text-lg text-gray-400 -mb-2">*/}
                        {/*        <li className="flex items-center mb-2">*/}
                        {/*          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                        {/*          </svg>*/}
                        {/*          <span>Duis aute irure dolor in reprehenderit</span>*/}
                        {/*        </li>*/}
                        {/*        <li className="flex items-center mb-2">*/}
                        {/*          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                        {/*          </svg>*/}
                        {/*          <span>Excepteur sint occaecat</span>*/}
                        {/*        </li>*/}
                        {/*        <li className="flex items-center">*/}
                        {/*          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />*/}
                        {/*          </svg>*/}
                        {/*          <span>Amet consectetur adipiscing elit</span>*/}
                        {/*        </li>*/}
                        {/*      </ul>*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</div>*/}

                        {/* 3rd item */}


                    </div>

                </div>
            </div>
        </section>
    )
}
