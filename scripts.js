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

const bookmarks = [{"id":"lzRv1WbizqtJ5ffT","label":"aws sites","bookmarks":[{"id":"ifrPZ0sHo6vNjXMH","label":"Global","url":"https://aws.amazon.com/console/"},{"id":"p6oLGcCfKp3bJ0lx","label":"China","url":"https://signin.amazonaws.cn/"},{"id":"w6pJjOX5vZWWQrG7","label":"Calculator/Global","url":"https://calculator.aws/#/addService"},{"id":"jE8SVsQUA6BAf96B","label":"Calculator/China","url":"https://calculator.amazonaws.cn/#/"}]},{"id":"fFIAr56PD58dnrtO","label":"develop tools","bookmarks":[{"id":"OSImOd7eBFluajZp","label":"Code Recover","url":"https://tool.oschina.net/codeformat/html/"},{"id":"QbGeFqXet9n4t4Nv","label":"IP Search","url":"https://whatismyipaddress.com/"},{"id":"vi2JKwOgFmvWhO3S","label":"IAM Generator","url":"https://awspolicygen.s3.amazonaws.com/policygen.html"}]},{"id":"nisDQy6rT578Mf4d","label":"develop sites","bookmarks":[{"id":"bEKOYFVFtIL38VG1","label":"Github","url":"https://github.com/"},{"id":"nRSCdpKzUFTcGkZ0","label":"Stack Overflow","url":"https://stackoverflow.com/"},{"id":"QHecucutgZwBFTzv","label":"SSH Go","url":"https://monitor.advichcloud.com/"},{"id":"J5SlNHsv5zcrXfmb","label":"VM System","url":"https://172.16.1.199/ui/#/host/vms/104"}]},{"id":"M62AyICUTShm97Xy","label":"work stuff","bookmarks":[{"id":"Z9NJvG5LOtpFbQXA","label":"Company CRM","url":"https://crm.advich.com/"},{"id":"bJb2g9tCbkSf5GHJ","label":"Lark Home","url":"https://dyrjr2jygo.feishu.cn/drive/home/"},{"id":"TDPZpygd57JYralJ","label":"Email","url":"https://partner.outlook.cn/mail/inbox"},{"id":"IQ0wyThpe4utLY8Y","label":"Payment","url":"https://dyrjr2jygo.feishu.cn/sheets/shtcng2FgDjSGs7chnAudLAv03f"}]},{"id":"QS04fHfQQQVCna6V","label":"idea sites","bookmarks":[{"id":"fjGkcEmuuJ5BP1d4","label":"Icon Discover","url":"https://icons8.com/"},{"id":"Fo209io1NeGWRtg9","label":"All Test","url":"https://www.dotcom-tools.com/website-speed-test"}]}]

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
