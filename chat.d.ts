import { Server as Netserver, Socket } from 'net';
import { NextApiResponse } from 'next';
import { Server as SocketIOServer } from 'socket.io';

export type NextApiResponseServerID = NextApiResponse & {
  socket: Socket & {
    server: Netserver & {
      io: SocketIOServer;
    };
  };
};
