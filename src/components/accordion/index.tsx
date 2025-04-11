import { $, component$, Slot, useSignal } from "@builder.io/qwik";


export const Accordion = component$(
    (props: {
        name: string;
        isOpen?: boolean;
    }) => {
        const isOpen = useSignal(props.isOpen ?? false);


        const detailsRef = useSignal<HTMLElement>();
        const clickHandler = $((e: any) => {
            const tag = e.target.closest('details');

            if (tag?.open === undefined) return;
            isOpen.value = !isOpen.value;
            tag.open = isOpen.value;
        });
        return (
            <details
                class="py-2 px-6 border-r border-b border-l border-slate-200 shadow-md bg-white rounded-[4px] mb-2 "
                ref={detailsRef}
                {...(props.isOpen ? { open: true } : {})}
            >
                <summary class="flex items-center py-2" onClick$={clickHandler} preventdefault:click>
                    <p class="text-[16px] text-gray-900">
                        {props.name}
                    </p>
                    <button class="ml-auto" type="button">
                        <img src="/images/icons/chevron.png" class={
                            (isOpen.value ? "rotate-90" : "rotate-[270deg]")
                        } loading="lazy" />
                    </button>
                </summary>

                <div class="accord-body-container">
                    <hr class="border-gray-400" />

                    <div class="accord-body py-4">
                        <Slot />
                    </div>
                </div>
            </details>
        );
    },
);