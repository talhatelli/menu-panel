export function useDateOptions(date: string | number | Date) {

    const options = {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    };
    return new Date(date).toLocaleDateString(undefined, options);
}
