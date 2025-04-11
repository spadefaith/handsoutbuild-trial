import { component$ } from "@builder.io/qwik";
import { BlogsData } from "~/data/blogs";


export const BlogSection = component$(() => {



    return <div class=" section-margin-x bg-[url('/images/cover/blogs-cover.jpg')] bg-cover bg-no-repeat bg-center">
        <div class="py-[10vh] grid  lg:grid-cols-[20vw_1fr] gap-4 grid-cols-1 md:grid-cols-1">
            <div class="blogs-header relative mb-4">
                <p class="text-[16px] text-left mb-2" data-aos="zoom-out-right" data-aos-duration="500">Keep up to date.</p>
                <p class="text-[30px] text-left w-[80%] mb-5">Latest news and updated</p>
                <div>
                    <a class="bg-white hover:bg-white-700 text-black py-2 px-4 rounded transition duration-200" href="/blogs">View all</a>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
                {
                    BlogsData.map((item, i) => {
                        return <div class="w-full rounded-[4px] group mb-2" key={item.id} data-aos="fade-left" data-aos-duration="1000" data-aos-delay={300 + (i * 100)} data-aos-offset="100">
                            <div class="border-r border-b border-l border-slate-200  bg-white rounded-[4px] flex flex-col justify-between leading-normal shadow-md">
                                <div class="relative">
                                    <div class="overflow-hidden h-100 md:h-48 ">
                                        <img class="w-full h-full object-center rounded-t-[4px] group-hover:scale-[1.05] transition-all duration-500 object-cover" src={item.image} alt={item.display} />
                                    </div>
                                    <div class="h-[100px] relative mb-5">
                                        <p class="text-gray-700 text-base text-center p-2 absolute top-1/2 -translate-y-1/2">{item.display}</p>
                                    </div>
                                    <div class="absolute bottom-[-18px] w-full ">
                                        <div class="grid justify-center">
                                            <a class="block text-center bg-gray-700 hover:bg-gray-700 text-[12px] text-white py-2 px-4 rounded transition duration-200" href={item.href}>Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    </div>
})


