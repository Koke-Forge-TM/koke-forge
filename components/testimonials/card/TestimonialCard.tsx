import type {Testimonial,ClientWeb} from "@/schemas/testimonials";
import type {Img} from "@/schemas/general";
import Image from 'next/image'


interface TestimonialProps {
    "testimonial": Testimonial
}

export default function Testimonials(props: TestimonialProps) {
    const testimonial: Testimonial = props.testimonial
    const clientWeb: ClientWeb = props.testimonial.web
    const img: Img = props.testimonial.clientImg

    return (
        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <div>
                <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={img.src} width={48} height={48}
                           alt={img.altEn}/>
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                         viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>
                    </svg>
                </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">{testimonial.commentEn}
            </blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">{testimonial.clientName}</cite> - <a
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href={clientWeb.url}>{clientWeb.name}</a>
            </div>
        </div>
    )
}
