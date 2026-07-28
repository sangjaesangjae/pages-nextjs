import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/terms`, priority: 0.5 },
    { url: `${site.url}/privacy`, priority: 0.5 },
    { url: `${site.url}/support`, priority: 0.5 },
  ];
}
