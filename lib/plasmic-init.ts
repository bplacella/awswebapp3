import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "kpHSnGmdjmu3zhcfFMd1Z7",  // ID of a project you are using
      token: "RHw6OkOjdVmwci5ATffn3GAiXM7FjGrovBb0u5DayG2Da0GDXfv68QqMSaXh8bLFGHXUoNjyw62HSXAwEfw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})