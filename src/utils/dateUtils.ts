export function useDateOptions() {
    const options = {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    };

    return {
        options
    };
}
