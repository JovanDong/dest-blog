const fs = require('fs')
const path = require('path')

function readDir(url) {
  let namearr = []
  const dirInfo = fs.readdirSync(url)
  dirInfo.map((item) => {
    const location = path.join(url, item)
    const info = fs.statSync(location)

    if (info.isDirectory()) {
      readDir(location)
    } else {
      namearr.push(item)
    }
  })
  return namearr
}

module.exports = {readDir: readDir};
