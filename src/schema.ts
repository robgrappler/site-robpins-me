import { z } from 'astro:content';

export const createMatchSchema = (z: any) => z.object({
    id: z.string().optional(),
    titleEn: z.string(),
    titleEs: z.string().optional(),
    descEn: z.string(),
    descEs: z.string().optional(),
    thumb: z.string(),
    thumbs: z.array(z.string()).optional(),
    href: z.string().optional(),
    uploadDate: z.string().optional(), // ISO date string
    duration: z.string().optional(),
    durationSeconds: z.number().optional(),
    opponent: z.string().optional(),
    source: z.string().optional(),
    featured: z.boolean().optional(),
    badge: z.object({
        variant: z.string().optional(), // relaxed validation to support 'gold' and others
        en: z.string(),
        es: z.string().optional(),
    }).optional(),
    tags: z.array(z.object({
        class: z.string().optional(),
        en: z.string(),
        es: z.string().optional(),
    })).optional(),
    trailerUrl: z.string().optional(),
});
