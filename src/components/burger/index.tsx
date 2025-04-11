import { component$, type QRL } from "@builder.io/qwik";


export const Burger = component$((props: { onClick: QRL<() => void> }) => {

    return <div class="inline-block">
        <input class="check-icon hidden" onClick$={props.onClick} id="check-icon" name="check-icon" type="checkbox" />
        <label class="icon-menu" for="check-icon">
            <div class="bar bar--1"></div>
            <div class="bar bar--2"></div>
            <div class="bar bar--3"></div>
        </label>
    </div>
})