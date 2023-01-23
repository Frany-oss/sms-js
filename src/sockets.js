
const connection = server => {
    const io = require("socket.io")(server);

    io.on('connection', (newSocket) => {
        console.log(newSocket.id);
    });
};

module.exports = {
    connection
};