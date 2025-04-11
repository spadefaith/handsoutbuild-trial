import { component$, isServer, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { SidebarContext } from "~/root";


export const Sidebar = component$(() => {
    const isShow = useSignal(false);
    const isShowBg = useSignal(false);
    const isShowNav = useSignal(false);
    const sidebarState = useContext(SidebarContext);
    const ref = useSignal<any>(null);
    const ref1 = useSignal<any>(null);
    const ref3 = useSignal<any>(null);


    useVisibleTask$(({ track }) => {
        if (isServer) return;
        track(() => sidebarState.isShow);



        clearTimeout(ref3.value);
        ref3.value = setTimeout(() => {
            isShow.value = sidebarState.isShow;
        }, sidebarState.isShow ? 0 : 300);


        clearTimeout(ref.value);
        ref.value = setTimeout(() => {
            isShowBg.value = sidebarState.isShow;
        }, sidebarState.isShow ? 50 : 100)


        if (!sidebarState.isShow) {
            isShowBg.value = false;

            clearTimeout(ref1.value);
            ref1.value = setTimeout(() => {
                isShowNav.value = sidebarState.isShow;
            }, 200)
        } else {
            clearTimeout(ref1.value);
            ref1.value = setTimeout(() => {
                isShowNav.value = sidebarState.isShow;
            }, 100)

        }
    })



    return isShow.value ? <div class={
        " md:hidden fixed top-0 left-0  bottom-0 z-10 w-full h-full " +
        " shadow-lg "
    }>

        <div class={
            " grid overflow-auto min-w-[250px] max-w-[350px] opacity-0 -translate-x-[400px] bg-white h-full z-12 fixed " +
            " transition-transform duration-500 ease-in-out " +
            (isShowNav.value ? " translate-x-0 opacity-100 " : " -translate-x-[400px] ")
        }>
            <SideItem
                display="Home"
                href="/"
            />
            <SideItem
                display="Who we are"
                href="/"
                items={[
                    { display: "Company culture", href: "/about" },
                    { display: "Our partnership", href: "/about" },
                ]}
            />
            <SideItem
                display="What we do"
                href="/"
                items={[
                    { display: "Government Construction & Restoration", href: "/about" },
                    { display: "Repair Maintenance (Australia-Wide)", href: "/about" },
                    { display: "Commercial & Industrial Construction", href: "/about" },
                    { display: "Civil Construction (Urban & Rural)", href: "/about" },
                    { display: "Renewable Energy Solutions (Solar Focused)", href: "/about" },
                    { display: "General Maintenancew Services", href: "/about" },
                ]}
            />
            <SideItem
                display="Our Projects"
                href="/"
            />
            <SideItem
                display="Our Insight"
                href="/"
                items={[
                    { display: "Company News", href: "/about" },
                    { display: "Industry articles", href: "/about" },
                    { display: "Newsletter", href: "/about" },
                ]}
            />
            <SideItem
                display="Emergency Job"
                href="/"
            />
        </div>
        <div class={
            "bg-[#1F1F1F]/70 fixed top-0 left-0  bottom-0 right-0 opacity-0" +
            (isShowBg.value ? " opacity-100 " : " opacity-0 ") +
            " transition-all duration-500 ease-in-out " +
            " z-0 "
        }></div>
    </div> : null
})

const SideItem = component$((props: { display: string, href: string, items?: ({ display: string, href: string })[] }) => {


    return <div class="relative inline-block text-left group "

    >
        <div>
            <a href={props.href} class={
                "py-2 block text-left px-2 text-[#1F1F1F] text-[16px] transition-all duration-300 " +
                "hover:text-white hover:bg-[#1F1F1F] transition-all"
            }>{props.display}</a>
        </div>

        {
            props.items?.length ? <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div class="py-1" role="none">
                    {
                        props.items.map((item, i) => {
                            return <a key={i} href={item.href} class="text-[14px] block px-4 py-2 text-sm text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] transition-all" role="menuitem" tabIndex={-1} >{item.display}</a>
                        })
                    }
                </div>
            </div> : null
        }

        {
            <div>
                <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gray scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
        }

    </div>
})