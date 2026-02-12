export interface CTAData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
}

export const submitCTA = async (data: CTAData): Promise<{ success: boolean; message: string }> => {
    // Use environment variable for production, fallback to localhost for development
    // Switch between Laravel (Local Dev) and PHP Script (Production Export)
    // If NEXT_PUBLIC_API_URL is set, we use the Laravel backend (usually port 8000).
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

    // Construct the API URL. 
    // If NEXT_PUBLIC_API_URL is provided, we use it (with /api/cta appended if missing).
    // If not provided, we fallback to the local PHP script path.
    const API_URL = BASE_URL
        ? (BASE_URL.endsWith("/api") ? `${BASE_URL}/cta` : `${BASE_URL}/api/cta`)
        : "/api/cta.php";

    try {
        console.log(`Submitting CTA to: ${API_URL}`);
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || errorData.error || "Something went wrong sending your message.");
        }

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("CTA Submission Error:", error);
        return { success: false, message: error instanceof Error ? error.message : "Failed to send message." };
    }
};
