import { defineCollection, z } from 'astro:content';

const linksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        label: z.string(),
        url: z.string(), // Allows both absolute URLs and relative paths
        icon: z.string().optional(),
        image: z.string().optional(),
        style: z.enum(["default", "accent", "hero", "glass", "terminal", "solid", "mesh", "minimal"]).optional().default("default"),
        bentoSize: z.enum(["small", "medium-wide", "medium-tall", "large", "full-width", "tower"]).optional().default("small"),
        order: z.number().default(99),
        description: z.string().optional(), // For larger cards
    }),
});

export const collections = {
    'links': linksCollection,
};
