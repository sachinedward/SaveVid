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
![screen shot 2017-07-24 at 7 50 22 pm](https://user-images.githubusercontent.com/10527102/28527811-5dda2d88-70a9-11e7-91ec-6720fc1038cf.png)

5. Login with the registered credentials 
6. Search for the Video and **click on the save icon to save** it and **play icon to play it**.

![screen shot 2017-07-24 at 7 51 21 pm](https://user-images.githubusercontent.com/10527102/28527850-7e085e7c-70a9-11e7-8f50-29cb6cde3247.png)
![screen shot 2017-07-24 at 7 51 38 pm](https://user-images.githubusercontent.com/10527102/28527858-86a3cbf2-70a9-11e7-91ad-3b03000c6868.png)


7. You can access the Saved video in **dashboard** section. You can also delet the video. 

![screen shot 2017-07-24 at 7 52 17 pm](https://user-images.githubusercontent.com/10527102/28527885-9eb2f894-70a9-11e7-89a0-80d04ddd1adc.png)

All the login now share a common DB as individual storage is being handled currently
