import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { mongo } from 'meteor/mongo';


export const User = {
  get: function() {
    return Meteor.user() || {};
  },

  id: function() {
    return Meteor.userId();
  },

  isLoggedIn: function() {
    return !! Meteor.userId();
  },

  isLoggedOut: function() {
    return ! User.isLoggedIn();
  },

  profile: function() {
    return User.get().profile;
  },

  create: function(opts, callback) {
    Accounts.createUser(opts, callback);
  }
};
export const Station = new Mongo.Collection('station');
export const Schedules = new Mongo.Collection('schedules');
export const Stationline = new Mongo.Collection('stationline');
export const Myticket = new Mongo.Collection('myticket');

