import { connect } from 'net';

function mcSLP(address: string, port = 25565): Promise<object> {
  return new Promise((resolve, rejects) => {
    let responseString = '';

    const socket = connect({ host: address, port }, () => {
      // Create the buffers
      const addressBuffer = Buffer.from(address, 'utf8');
      const portBuffer = Buffer.of(port);
      const start = Buffer.from('\x13\x00\x00\x0d');
      const end = Buffer.from('\x01');
      const mid = Buffer.from('\x63');
      const buff = Buffer.concat([start, addressBuffer, mid, portBuffer, end]);

      socket.write(buff);
      socket.write(Buffer.from('\x01\x00', 'utf8'));
    });

    // End the socket after 1s
    socket.setTimeout(1000);

    // If request is timeout
    socket.on('timeout', () => {
      socket.end();
    });

    // If socket encounter an error
    socket.on('error', (error) => {
      rejects(error);
      socket.end();
    });

    // Socket success return
    socket.on('data', (data: Buffer) => {
      responseString += data.toString();
    });

    // Socket ending after timeout
    socket.on('end', () => {
      resolve(JSON.parse(responseString.substring(5, responseString.length)));
    });
  });
}

export default mcSLP;
