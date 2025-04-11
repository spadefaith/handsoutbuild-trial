import { component$ } from "@builder.io/qwik";
import { Accordion } from "~/components/accordion";
import { FaqsData } from "~/data/faqs";



export const FaqsSection = component$(() => {


    return <div class="section-margin-x">
        <div class="py-[10vh]">
            <p class="text-[30px] text-center mb-5">Frequently Asked Questions</p>
            <div>
                {
                    FaqsData.map((item, i) => {
                        return <div key={item.id} class="mb-4">
                            <Accordion key={item.id} name={item.question} isOpen={i === 0}>
                                <div class="text-[14px] text-gray-900">
                                    {
                                        item.type === 'html' ? <div dangerouslySetInnerHTML={item.answer} /> : item.answer
                                    }
                                </div>

                            </Accordion>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
})