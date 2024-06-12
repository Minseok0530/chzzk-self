'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const socketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(socketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  console.log('Active1');

  useEffect(() => {
    if (!socket) {
      return;
    }
    console.log('Active2');
    socket.on('disconnect', async () => {
      setIsConnected(false);
    });
  }, [socket]);

  useEffect(() => {
    console.log('Active3');
    const socketInstance = new (ClientIO as any)(
      process.env.NEXT_PUBLIC_SITE_URL,
      {
        path: '../api/chat/socketio',
        addTrailingSlash: false,
      },
    );

    socketInstance.on('connect', async () => {
      setIsConnected(true);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <socketContext.Provider value={{ socket, isConnected }}>
      {children}
    </socketContext.Provider>
  );
};
