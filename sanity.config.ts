import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/schemas";
import { myTheme } from "./themeSanity";
import StudioNavBar from "./app/components/sanity/StudioNavBar";
import Logo from "./app/components/sanity/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: "/studio",
    name: "default",
    title: "site-mullheim",

    projectId,
    dataset,

    plugins: [
        deskTool({
            defaultDocumentNode: getDefaultDocumentNode,
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
    studio: {
        components: {
            logo: Logo,
            navbar: StudioNavBar,
        },
    },
    theme: myTheme,
});
