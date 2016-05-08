/**
 * @providesModule SendWeChatAndroid
 */

'use strict';

var React = require('react-native');
var {Platform, NativeModules} = React;
var RNSendWeChatAndroid = NativeModules.SendWeChatAndroid;

var SendWeChatAndroid = {
    TEXT_PLAIN: (Platform.OS === 'android') ? RNSendWeChatAndroid.TEXT_PLAIN : 'text/plain',
    TEXT_HTML: (Platform.OS === 'android') ? RNSendWeChatAndroid.TEXT_HTML : 'text/html',
    sendText(config) {
        if("title" in config && config.title != null && config.title.length > 0)
        {
            RNSendWeChatAndroid.sendTextWithTitle(config.title, config.text, (config.type||"text/plain"));
        }
        else
        {
            RNSendWeChatAndroid.sendText(config.text, (config.type||"text/plain"));
        }
    },
    sendPhoneCall(phoneNumber) {
        RNSendWeChatAndroid.sendPhoneCall(phoneNumber);
    },
    sendPhoneDial(phoneNumber) {
        RNSendWeChatAndroid.sendPhoneDial(phoneNumber);
    },
    sendSms(phoneNumber, body) {
        RNSendWeChatAndroid.sendSms(phoneNumber, (body||null));
    },
    addCalendarEvent(config) {
        RNSendWeChatAndroid.addCalendarEvent(config.title, config.description, config.startDate, config.endDate, config.recurrence, config.location);
    },
    openCalendar() {
        RNSendWeChatAndroid.openCalendar();
    }
};

module.exports = SendWeChatAndroid;
