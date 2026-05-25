import type { MetadataRoute } from "next";

import { siteUrl } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          "pt-BR": `${siteUrl}/pt-br`,
        },
      },
    },
    {
      url: `${siteUrl}/pt-br`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          "pt-BR": `${siteUrl}/pt-br`,
        },
      },
    },
  ];
}
