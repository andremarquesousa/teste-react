export const checkAuth = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem("react-token");
        return !!token;
    }
}