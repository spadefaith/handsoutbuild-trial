import { component$ } from "@builder.io/qwik";
import { ServicesDatas } from "~/data/services";

export const ServiceSection = component$(() => {

    return <div>
        <div class="pt-[5vh] pb-[10vh]">
            <div class=" section-margin-x">
                <div class="grid gap-2 p-4 bg-[#1F1F1F] my-2" style="grid-template-columns: max-content 1fr max-content;">
                    <div class="grid gap-2" style="grid-template-columns: max-content max-content;">
                        <div>
                            <img src="/images/icons/flower.png" />
                        </div>
                        <p class="text-white">Recommended Products</p>
                    </div>
                    <div></div>
                    <a class="grid gap-2 items-center cursor-pointer" style="grid-template-columns: max-content max-content;">
                        <p class="text-white">More</p>
                        <img src="/images/icons/chevron.png" class="invert-100" />
                    </a>
                </div>
                <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                    {
                        ServicesDatas.map((item, i) => {
                            return <div class="w-full" key={item.id} data-aos="fade-up" data-aos-delay={300 + (i * 100)} data-aos-duration="1000" data-aos-offset="100">
                                <div class="border-r border-b border-l border-slate-200  bg-white rounded-[4px] flex flex-col justify-between leading-normal shadow-md">
                                    <div >
                                        <div class="overflow-hidden h-48 ">
                                            <img class="w-full h-full object-center rounded-t-[4px] hover:scale-[1.05] transition-all duration-500 object-cover" src={item.thumbnail} alt={item.display} />
                                        </div>
                                        <p class="text-gray-700 text-base text-center p-2">{item.display}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
})


