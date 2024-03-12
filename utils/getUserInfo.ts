import fs from "fs";
import { cache } from "react";

export const getUserSummary = cache(async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/summary_for_test.json", function (err, data) {
      if (err) 
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserActivity = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/activity_for_test.json", function (err, data) {
      if (err) 
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})


export const getUserActivityTopics = cache(async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/topic_list_for_test.json", function(err, data) {
      if (err)
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})


export const getUserActivityReadTopics = cache(async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/activity_read_topics_for_test.json", function(err, data) {
      if (err)
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})


export const getUserActivityLikes= cache( async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/activity_likes_for_test.json", function(err, data) {
      if (err) 
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserActivityBookmarks =cache(async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/activity_bookmarks_for_test.json", function(err, data) {
      if (err)
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserNotifications = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/notifications_for_test.json", function(err, data) {
      if (err)
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserNotificationsResponses = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/notifications_responses_for_test.json", function(err, data) {
      if (err) 
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserNotificationsMentions = cache(async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/notifications_mentions_for_test.json", function(err, data) {
      if (err)
        return reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserMessages = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/messages_for_test.json", function(err, data) {
      if (err) 
        reject(err)
      else {
        const jsonData = JSON.parse(data.toString())
        resolve(jsonData)
      }
    })
  })
})

export const getUserMessagesSent = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/messages_sent_for_test.json", function(err, data) {
      if (err) 
      reject(err)
    else {
      const jsonData = JSON.parse(data.toString())
      resolve(jsonData)
    }
    })
  })
})

export const getUserBadges = cache(async() => {
  return new Promise((resolve, reject) => {
    fs.readFile("lib/user_badges_for_test.json", function(err, data) {
      if (err)
      reject(err)
    else {
      const jsonData = JSON.parse(data.toString())
      resolve(jsonData)
    }
    })
  })
})