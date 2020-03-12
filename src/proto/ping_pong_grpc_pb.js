// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
'use strict';
var grpc = require('grpc');
var ping_pong_pb = require('./ping_pong_pb.js');

function serialize_pingpong_PingRequest(arg) {
  if (!(arg instanceof ping_pong_pb.PingRequest)) {
    throw new Error('Expected argument of type pingpong.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pingpong_PingRequest(buffer_arg) {
  return ping_pong_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pingpong_PongResponse(arg) {
  if (!(arg instanceof ping_pong_pb.PongResponse)) {
    throw new Error('Expected argument of type pingpong.PongResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pingpong_PongResponse(buffer_arg) {
  return ping_pong_pb.PongResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingPongServiceService = exports.PingPongServiceService = {
  pingPong: {
    path: '/pingpong.PingPongService/pingPong',
    requestStream: false,
    responseStream: false,
    requestType: ping_pong_pb.PingRequest,
    responseType: ping_pong_pb.PongResponse,
    requestSerialize: serialize_pingpong_PingRequest,
    requestDeserialize: deserialize_pingpong_PingRequest,
    responseSerialize: serialize_pingpong_PongResponse,
    responseDeserialize: deserialize_pingpong_PongResponse,
  },
};

exports.PingPongServiceClient = grpc.makeGenericClientConstructor(PingPongServiceService);
