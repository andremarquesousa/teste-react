import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { APP_ROUTES } from '../../constants/app-routes';
import { checkAuth } from "@/utils/check-auth";

type PrivateRouteProps = {
    children: ReactNode
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
    const { push } = useRouter();
    const auth = checkAuth();

    useEffect(() => {
        if (!auth) {
            push(APP_ROUTES.public.login)
        }
    }, [auth, push]);

    return children
}

export default PrivateRoute;