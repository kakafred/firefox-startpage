/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"baHUyvEbCTiB2u27","label":"aws/sites","bookmarks":[{"id":"xKUCp8KQYSfxJXiE","label":"site/Global","url":"https://aws.amazon.com/console/"},{"id":"iKoTx7ppJMY56qCZ","label":"site/China","url":"https://signin.amazonaws.cn/"},{"id":"1W4vXq6lT8zjQ3nu","label":"calculator/Global","url":"https://calculator.aws/#/addService"},{"id":"yfQoWFMo5LSDyS8X","label":"calculator/China","url":"https://calculator.amazonaws.cn/"}]},{"id":"Z4MHJkncoCVYIx7h","label":"develop/tools","bookmarks":[{"id":"TF3nr86RwqxQN3px","label":"codeRecover","url":"https://tool.oschina.net/codeformat/html/"},{"id":"Emnq4FopDNtKZjFR","label":"ipSearch","url":"https://whatismyipaddress.com/"},{"id":"uqOWQmucqHkyJQGi","label":"iamGenerator","url":"https://awspolicygen.s3.amazonaws.com/policygen.html"}]},{"id":"nX0UJ1spZWseSJD5","label":"develop/sites","bookmarks":[{"id":"KrMWYJXjcpHzenBj","label":"github","url":"https://github.com/"},{"id":"qaBODmKxAv9095NQ","label":"stackOverflow","url":"https://stackoverflow.com/"},{"id":"zSaxCWT3HefkpsRg","label":"sshGo","url":"https://monitor.advichcloud.com/"}]},{"id":"o3cfFA7zg2qnEtTn","label":"work/stuff","bookmarks":[{"id":"pwevdiR7piG4lxzn","label":"companyCrm","url":"https://crm.advich.com/"},{"id":"uH4GpJmg5Cp0JpOV","label":"larkDocument","url":"https://dyrjr2jygo.feishu.cn/drive/home/"},{"id":"sD8IjCdCqzqXt3TU","label":"email","url":"https://partner.outlook.cn/mail/inbox"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
