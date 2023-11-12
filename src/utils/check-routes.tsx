import { APP_ROUTES } from "@/constants/app-routes";


export const checkRoutes = (path: string) => {
    const appPublic = Object.values(APP_ROUTES.public);
    return appPublic.includes(path)
}