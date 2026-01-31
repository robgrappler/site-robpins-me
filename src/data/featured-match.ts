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
    title: "Unfinished: He Didn't Tap",
    subtitle: "Continuous Pressure • Positional Control • No Tap",
    href: "https://www.watchfighters.com/posts/unfinished_he_didnt_tap-nvibltjr",
    tag: "FEATURED",
    duration: "7:18",
    price: "Premium",
    thumb: "/images/featured/unfinished-thumbnail.png",
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
