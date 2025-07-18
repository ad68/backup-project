import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/" replace />;
};
/* const ProtectedRoute = ({ children }: any) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return isAuthenticated ? children : children
}; */
export default ProtectedRoute;