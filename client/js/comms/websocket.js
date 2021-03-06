import io from 'socket.io-client';
import {newMessage} from '../actions/WebSocketActions';

export default function init(namespace, appId, dispatch) {
  
  const socket = io('/'+namespace, {path: '/app/socket.io'});
 
  socket.on("connect", function(){
      socket.emit("join", appId);
  });

  socket.on("message", function(data){
    dispatch(newMessage(data));
  });

};
   
