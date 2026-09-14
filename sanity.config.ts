import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "Her Fitness Content Studio",

  projectId: projectId || "herfitness-demo",
  dataset: dataset || "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],

  schema: {
    types: schemaTypes,
  },
});
