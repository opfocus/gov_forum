import { rejects } from "assert";
import fs from "fs";
import { resolve } from "path";
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