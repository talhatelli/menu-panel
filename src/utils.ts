export function useDateOptions(date) {

    const options = {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    };
    return new Date(date).toLocaleDateString(undefined, options);
}
