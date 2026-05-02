export interface FeaturedMatch {
    title: string;
    subtitle: string;
    href: string;
    tag: string;
    duration: string;
    price: string;
    thumb: string;
    /**
     * Optional set of thumbnails to rotate through on client load.
     * If provided, UI can pick a random entry per page load.
     */
    thumbs?: string[];
}

export const featuredMatch: FeaturedMatch = {
    title: "Roughhousing Part I: Memfight's Suffocating Challenge",
    subtitle: "Submission Grappling • Rough Competitive Match • 4K",
    href: "https://tap.robpins.me/new",
    tag: "FEATURED",
    duration: "8:59",
    price: "$8.99",
    thumb: "/images/featured/memfight-part1-thumbnail.jpg",
    thumbs: [],
};

/**
 * Pick a random thumbnail from `match.thumbs` (if present), otherwise fall back to `match.thumb`.
 * Note: To avoid SSR/client hydration mismatches, call this from a client component (e.g., inside useEffect).
 */
export function pickRandomFeaturedThumb(match: FeaturedMatch): string {
    const candidates = (match.thumbs && match.thumbs.length > 0) ? match.thumbs : [match.thumb];
    // Defensive: ensure we always return a string
    const idx = Math.floor(Math.random() * candidates.length);
    return candidates[idx] ?? match.thumb;
}
