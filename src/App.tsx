import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';


    const { PingPongServiceClient } = require('./proto/ping_pong_grpc_web_pb');
    const { PingRequest } = require('./proto/ping_pong_pb');


    var client = new PingPongServiceClient('http://localhost:9090', null, null);


    class App extends Component {

      callGrpcService = () => {
        const request = new PingRequest();
        request.setPing('Ping');


        client.pingPong(request, {}, (err: any, response: { getPong: () => void; } | null) => {
          if (response == null) {
            console.log(err)
          }else {
            console.log(response.getPong())
          }
        });
      }


      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
            </header>
          </div>
        );
      }
    } export default App;