import { component$ } from "@builder.io/qwik";



export const Footer = component$(() => {




    return <div>
        <div class="bg-[#F2F2F2] py-8">
            <div class="grid grid-cols-1 section-margin-x  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 [align-content:start] ">
                <div class="w-[80%]  mb-4 md:mb-0 [justify-self:center]">
                    <p class="text-[20px] text-center mb-4">Contact Us</p>
                    <p class="text-[16px] text-center">We are here to help you</p>
                    <p class="text-[16px] text-center ">Please contact us via the following methods:</p>
                    <div class="grid mt-4">
                        <div class="relative mb-1 pb-1 group">
                            <a href="mailto:projects@handsoutbuild.com.au" class="block text-[14px] text-center md:text-left lg:text-left">
                                Associates: projects@handsoutbuild.com.au
                            </a>
                            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div class="relative mb-1 pb-1 group">
                            <a href="mailto:service@handsoutbuild.com.au" class="block text-[14px] text-center md:text-left lg:text-left">
                                Service Mailbox: service@handsoutbuild.com.au
                            </a>
                            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <div class="relative mb-1 pb-1 group">
                            <a href="mailto:finance@handsoutbuild.com" class="block text-[14px] text-center md:text-left lg:text-left">
                                Finance Mailbox: finance@handsoutbuild.com
                            </a>
                            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <form class="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <p class="text-[20px] text-center mb-5">Message Us</p>
                        <div class="mb-4">
                            <input class="text-[14px] shadow appearance-none border border-gray-100 bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter your designation" />
                        </div>
                        <div class="mb-4">
                            <input class="text-[14px] shadow appearance-none border border-gray-100 bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Please enter your phone number" />
                        </div>
                        <div class="mb-4">
                            <input class="text-[14px] shadow appearance-none border border-gray-100 bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your message" />
                        </div>
                        <button class="bg-white hover:bg-white-700 text-black text-[12px] py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-white" type="button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
        <div class="bg-[#1F1F1F] py-5">
            <p class="text-center text-white text-xs">
                &copy;2020 Hands Out Build. All rights reserved.
            </p>
        </div>
    </div>
})