/**
 * @providesModule SendWeChatAndroid
 */

'use strict';

var React = require('react-native');
var {Platform, NativeModules} = React;
var RNSendWeChatAndroid = NativeModules.SendWeChatAndroid;

var SendWeChatAndroid = {
    sendPictureToTimeLine(picturePath, description) {
        RNSendWeChatAndroid.sendPictureToTimeLine(picturePath, description);
    },
    sendPicturesToTimeLine(picturePathArray, description) {
        RNSendWeChatAndroid.sendPicturesToTimeLine(picturePathArray, description);
    },
    sendPictureToFriend(picturePath) {
        RNSendWeChatAndroid.sendPictureToFriend(picturePath);
    },
    sendPicturesToFriend(picturePathArray) {
        RNSendWeChatAndroid.sendPicturesToFriend(picturePathArray);
    }
};

module.exports = SendWeChatAndroid;
