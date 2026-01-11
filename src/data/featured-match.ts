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
    title: "4K Submission Showdown: Alpha vs. Rookie",
    subtitle: "No Escape • Heavy Pressure • Top Control",
    href: "https://view.wf/v/formywdf",
    tag: "FEATURED",
    duration: "48:25",
    price: "$14.99 USD",
    thumb: "/images/featured/alphavsrooki4.avif",
    thumbs: [
        "/images/featured/alphavsrooki1.avif",
        "/images/featured/alphavsrooki2.avif",
        "/images/featured/alphavsrooki3.avif",
        "/images/featured/alphavsrooki4.avif",
    ],
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
