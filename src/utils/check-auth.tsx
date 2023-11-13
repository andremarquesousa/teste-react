export const checkAuth = () => {
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem("react-token");
        return !!token;
    }
}