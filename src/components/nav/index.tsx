import { $, component$, useContext, useSignal, useStore } from "@builder.io/qwik";
import { Burger } from "../burger";
import { SidebarContext } from "~/root";


export const Nav = component$(() => {
    const sidebarState = useContext(SidebarContext);



    const onMenuClick = $(() => {
        sidebarState.isShow = !sidebarState.isShow;
    })


    return <div class="absolute top-0 left-0 right-0  ">
        <div class="grid gap-2 grid-cols-1">
            <div class="grid grid-cols-[1fr_max-content] md:grid-cols-1 [align-items:center] px-2 mt-4 md:mt-0 text-white text-[20px] sm:text-[30px] font-bold min-w-[250px] section-margin-x">
                <p class="z-9">HANDS OUT BUILD GROUP</p>
                <div class=" md:hidden grid [align-items:center] z-12">
                    <Burger onClick={onMenuClick} />
                </div>
            </div>
            <div class="bg-[#1F1F1F]/50 hidden md:block z-10">
                <div class="grid gap-2 grid-cols-6 section-margin-x" >
                    <NavItem
                        display="Home"
                        href="/"
                    />
                    <NavItem
                        display="Who we are"
                        href="/"
                        items={[
                            { display: "Company culture", href: "/about" },
                            { display: "Our partnership", href: "/about" },
                        ]}
                    />
                    <NavItem
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
                    <NavItem
                        display="Our Projects"
                        href="/projects"
                    />
                    <NavItem
                        display="Our Insight"
                        href="/"
                        items={[
                            { display: "Company News", href: "/about" },
                            { display: "Industry articles", href: "/about" },
                            { display: "Newsletter", href: "/about" },
                        ]}
                    />
                    <NavItem
                        display="Emergency Job"
                        href="/"
                    />
                </div>
            </div>


        </div>
    </div>


})

const NavItem = component$((props: { display: string, href: string, items?: ({ display: string, href: string })[] }) => {

    const isShown = useSignal(false);
    const isVisible = useSignal(false);

    const transitions = useStore({
        enter: "transition ease-in duration-75 opacity-100 translate-y-0 scale-100 ",
        exit: "transition ease-out duration-100 opacity-0 translate-y-3 scale-95 "
    }, { deep: false });

    const onMouseOver = $(() => {
        isVisible.value = true
        setTimeout(() => {
            isShown.value = true
        }, 200)
    })

    const onMouseOut = $(() => {
        isVisible.value = false
        setTimeout(() => {
            isShown.value = false
        }, 200)
    })

    return <div class="relative inline-block text-left group "
        onMouseOver$={onMouseOver}
        onMouseLeave$={onMouseOut}
        onFocus$={onMouseOver}
        onBlur$={onMouseOut}
    >
        <div>
            <a href={props.href} class={
                "py-5 block text-center px-2 text-white text-[16px] transition-all duration-300" +
                (props.items?.length ? " hover:font-bold " : "")
            }>{props.display}</a>
        </div>

        {
            props.items?.length ? <div class={
                "opacity-0 scale-95 absolute right-0 z-10 w-56 origin-top-right rounded-[4px] bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden " +
                (isShown.value ? transitions.enter : transitions.exit) +
                (isVisible.value ? "block" : "hidden")
            } role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div class="py-1" role="none">
                    {
                        props.items.map((item, i) => {
                            return <a key={i} href={item.href} class="text-[14px] block px-4 py-2 text-sm text-black hover:text-white hover:bg-[#1F1F1F] transition-all" role="menuitem" tabIndex={-1} id="menu-item-0">{item.display}</a>
                        })
                    }
                </div>
            </div> : null
        }

        {
            props.items?.length ? null :
                <div>
                    <div class="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
        }

    </div>
})

