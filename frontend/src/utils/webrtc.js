let peerConfiguration = {
  iceServers: [
    {
      urls: [
        "stun:stun.relay.metered.ca:80",
      ],
    },

    {
      urls: [
        "turn:global.relay.metered.ca:80",
        "turn:global.relay.metered.ca:80?transport=tcp",
        "turn:global.relay.metered.ca:443",
        "turns:global.relay.metered.ca:443?transport=tcp",
      ],
      username:
        "f8dbf68380ac57b8a2814bfc",
      credential:
        "syFrqAE3NFOle23r",
    },
  ],

  iceCandidatePoolSize: 10,
};
export const fetchUserMedia = async() => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

     return stream;
  } catch (err) {
    console.log("Error in getting media:" , err);
    throw err;
  }
}


export const createPeerConnection = () =>{
  const peerConnection = new RTCPeerConnection(peerConfiguration);
  return peerConnection;
}

export const createOffer = async (peerConnection) => {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    return offer;
};

export const handleOffer = async (peerConnection,offer) => {
  await peerConnection.setRemoteDescription(offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription( answer);
  return answer;
};

export const handleAnswer = async (peerConnection , answer) => {
   await peerConnection.setRemoteDescription(answer);
}

// ice candidate start
export const handleIceCandidate = (peerConnection , socket) => {
   peerConnection.onicecandidate = (event) => {
    if(event.candidate){
      socket.emit("ice-candidate", event.candidate);
      
      console.log("ice candidate sent");
    }
   }
} 

export const addIceCandidate = async (peerConnection , candidate) => {
     if (!peerConnection) {
       console.log( "Peer connection missing" );
      return;
    }
    await peerConnection.addIceCandidate(candidate);

}
// ice candidate ends

export const handleTrackEvent = (peerConnection,strangerVideoRef) => {
  peerConnection.ontrack = async (event) => {
      console.log("stream received from other side" );

      if ( strangerVideoRef.current) {
       strangerVideoRef.current.srcObject = event.streams[0];
        
      }
    };
};
