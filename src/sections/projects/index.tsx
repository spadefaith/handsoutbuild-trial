import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { ProjectsData } from "~/data/projects";


export const ProjectSection = component$(() => {
    const rawItems = useSignal<any>(JSON.parse(JSON.stringify(ProjectsData)));


    return <div class={
        "relative min-h-[80vh] h-max project-container pb-[10vh] pt-[5vh] bg-[url(/images/cover/projects-cover.jpg)]" +
        " bg-cover bg-no-repeat bg-center"
    }>
        <div class="py-5">
            <h1 class="text-center text-white text-[30px]" data-aos="fade-down" data-aos-duration="500">Our Projects</h1>
            <p class="text-center text-white text-[16px]" data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">Cost-effective products for the transformer industry</p>
        </div>
        <div class="section-margin-x">
            <div class="grid w-full gap-4 project-items grid-cols-1 lg:grid-cols-[55%_45%]" >
                <div>
                    <MainSlides item={rawItems.value[0]} />
                </div>
                <div class="grid gap-4">
                    <ThumbnailSlides items={rawItems.value.slice(1, 3)} />
                    <ThumbnailSlides items={rawItems.value.slice(3, 5)} />
                </div>
            </div>
            <a data-aos="fade-up-right" href="/projects" class="text-white grid grid-cols-[max-content_max-content] gap-2 align-center items-center pt-[1rem]">
                <p>Show more projects</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        </div>
    </div>
})


const MainSlides = component$((props: { item: { image: string, id: number, display: string } }) => {

    useTask$(({ track }) => {
        track(() => props.item)
    })

    return <div class="overflow-hidden h-full relative group" data-aos="fade-right" data-aos-duration="1000">
        <img src={props.item.image} class="h-full w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-1000" />

        <Cover display={props.item.display} />
    </div>
})

const ThumbnailSlides = component$((props: { items: ({ image: string, id: number, display: string })[] }) => {

    useTask$(({ track }) => {
        track(() => props.items)
    })


    return <div >
        <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]" >
            {
                props.items.map((item, i) => {
                    return <div key={item.id} class="overflow-hidden h-full relative group " data-aos-duration="1000" data-aos="fade-left" data-aos-delay={300 + (i * 100)}>
                        <img src={item.image} key={item.id} class="h-[30vh] w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-1000" />
                        <Cover display={item.display} key={item.id} size="sm" />
                    </div>
                })
            }
        </div>
    </div>
})

const Cover = component$((props: { display: string, size?: string }) => {
    return <div class={
        "bg-black/40 absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 transition duration-1000" +
        "grid items-center justify-center text-center content-center"
    }>
        <div class="text-center grid items-center justify-center text-center content-center">
            <img src="/images/icons/link.png" class="m-auto" />
            <p class={`text-white ${props.size == "sm" ? "font-[14px]" : "font-[16px]"} px-2`}>{props.display}</p>
        </div>
    </div>
})