export const trackEvent = (event: string) => {
    if (typeof window !== "undefined") {
        console.log("Analytics event:", event)
    }
}