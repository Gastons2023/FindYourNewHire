// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    name?: string | null; // Name can be null
    username: string;
    location?: string | null; // Location can be null
    avatar_url: string;
    email?: string | null; // Email can be null
    url: string;
    html_url: string;
    site_admin: boolean;
    company?: string | null; // Company can be null
    bio?: string | null; // Bio can be null
    hireable?: boolean | null; // Hireable can be null
}
export interface CandidateSearchResult {
    total_count: number;
    incomplete_results: boolean;
    items: Candidate[];
}
