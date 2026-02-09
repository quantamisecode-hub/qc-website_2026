export interface CTAData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
}

export const submitCTA = async (data: CTAData): Promise<{ success: boolean; message: string }> => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

    try {
        const response = await fetch(`${API_URL}/cta`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || "Something went wrong sending your message.");
        }

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("CTA Submission Error:", error);
        return { success: false, message: error instanceof Error ? error.message : "Failed to send message." };
    }
};
