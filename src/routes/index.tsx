import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components/banner";
import { Nav } from "~/components/nav";
import { Sidebar } from "~/components/sidebar";
import { BlogSection } from "~/sections/blogs";
import { FaqsSection } from "~/sections/faqs";
import { Footer } from "~/sections/footer";
import { ProjectSection } from "~/sections/projects";
import { ServiceSection } from "~/sections/services";




export default component$(() => {
  return (
    <>

      <Nav />
      <Banner />
      <ServiceSection />
      <ProjectSection />
      <BlogSection />
      <FaqsSection />
      <Footer />

      <Sidebar />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
