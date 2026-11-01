import type { MetadataRoute } from "next";
import { env } from "../lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      lastModified: new Date(),
      url: new URL("/", env.siteUrl).toString()
    }
  ];
}
