saveVid
========
> Sample project to learn React, Node, Mongo, cors.

A Youtube Clone where you can Search and bookmark the videos in your machine. It needs Mongo, Node and React to work.

1. Before running in local install : Mongo and Node. update brew `brew update`,
1.1 install mongodb `brew install mongodb` and run `brew services start mongodb` (for OsX)
1.2 install nodejs  `brew install node`
2. Then go into Root folder and type `npm install`
3. And run `npm start` and node `server.js` in different terminals (will handle this soon)
4. Goto localhost:3000 and register.
5. Login with the registered credentials 
6. Search for the Video and **click on the save icon to save** it and **play icon to play it**.

7. You can access the Saved video in **dashboard** section. You can also delet the video. 

All the login now share a common DB as individual storage is being handled currently
