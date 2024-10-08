import { useQuery } from "@tanstack/react-query";


import useAuth from './../auth/Auth';
import useAxiosSecure from "../AxiosSecure/AxiosSecure";

const useRoleNew = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: role, isPending: isRoleLoading } = useQuery({
        
        queryKey: [user?.email, "userRole"],
        // enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/users/role/${user?.email}`);
               
                return res.data?.role;
            }
        },
    });

    const isAdmin = role === "admin";
    const isTrainer = role === "trainer";

    return [isAdmin, isTrainer, isRoleLoading, role];
};

export default useRoleNew;