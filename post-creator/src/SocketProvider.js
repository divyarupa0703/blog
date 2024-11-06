import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create Socket context
const SocketContext = createContext();

// Socket.io connection URL
const SOCKET_URL = 'http://localhost:8000'; // Replace with your server URL

// Socket provider to wrap your app
export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketConnection = io(SOCKET_URL);
        setSocket(socketConnection);

        return () => {
            socketConnection.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

// Custom hook to use the socket context
export const useSocket = () => {
    return useContext(SocketContext);
};
