import { createContext, useContext, useState, useEffect } from 'react';
import Validation from './Validation';

const AuthContext = createContext();

// AuthContext.jsx
// AuthContext.jsx
export const AuthProvider = ({ children }) => {
    // 1. Inicializamos con lo que haya en memoria (Cero lag)
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    const [isChecking, setIsChecking] = useState(!user);
    const validation = Validation();

    // 2. Esta es la función que me preguntaste. 
    // La usaremos en el Login y siempre que queramos actualizar los datos.
    const refreshUser = async () => {
        try {
            const data = await validation.ValidationTokenPage();
            setUser(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            return data;
        } catch (e) {
            setUser(null);
            sessionStorage.removeItem("user");
            throw e;
        }
    };

    // 3. Validación automática al cargar la web (F5)
    useEffect(() => {
        const init = async () => {
            try {
                await refreshUser();
            } finally {
                setIsChecking(false);
            }
        };
        init();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isChecking, refreshUser, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);