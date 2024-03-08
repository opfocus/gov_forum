
import fs from "fs";


export async function getUserSummary() {
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
}

