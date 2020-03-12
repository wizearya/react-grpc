// package: pingpong
// file: ping_pong.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ping_pong_pb from "./ping_pong_pb";

interface IPingPongServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    pingPong: IPingPongServiceService_IpingPong;
}

interface IPingPongServiceService_IpingPong extends grpc.MethodDefinition<ping_pong_pb.PingRequest, ping_pong_pb.PongResponse> {
    path: string; // "/pingpong.PingPongService/pingPong"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<ping_pong_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<ping_pong_pb.PingRequest>;
    responseSerialize: grpc.serialize<ping_pong_pb.PongResponse>;
    responseDeserialize: grpc.deserialize<ping_pong_pb.PongResponse>;
}

export const PingPongServiceService: IPingPongServiceService;

export interface IPingPongServiceServer {
    pingPong: grpc.handleUnaryCall<ping_pong_pb.PingRequest, ping_pong_pb.PongResponse>;
}

export interface IPingPongServiceClient {
    pingPong(request: ping_pong_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
    pingPong(request: ping_pong_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
    pingPong(request: ping_pong_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
}

export class PingPongServiceClient extends grpc.Client implements IPingPongServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public pingPong(request: ping_pong_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
    public pingPong(request: ping_pong_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
    public pingPong(request: ping_pong_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ping_pong_pb.PongResponse) => void): grpc.ClientUnaryCall;
}
