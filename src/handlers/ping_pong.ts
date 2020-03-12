import * as grpc from 'grpc';

import { PingRequest, PongResponse } from '../proto/ping_pong_pb';
import { PingPongServiceService, IPingPongServiceServer} from '../proto/ping_pong_grpc_pb';

class PingPongHandler implements IPingPongServiceServer {
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    pingPong = (call: grpc.ServerUnaryCall<PingRequest>, callback: grpc.sendUnaryData<PongResponse>): void => {
        const reply: PongResponse = new PongResponse();

        reply.setPong(`Hello, ${ call.request.getPing() }`);

        callback(null, reply);
    };
}

export default {
    service: PingPongServiceService,                // Service interface
    handler: new PingPongHandler(),          // Service interface definitions
};