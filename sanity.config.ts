import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import {structureTool} from "sanity/structure";

export default defineConfig({
  name: "parthmarfatia",
  title: "parthmarfatia",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  plugins: [structureTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
