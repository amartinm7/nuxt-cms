let path = 'soap_talk_reality_news'
  .split('_')
  .filter((it) => it !== 'talk')
  .join('_')
path = path === '' ? 'all' : path
console.log(path)

path = path
  .split('_')
  .filter((it) => it !== 'soap')
  .join('_')
path = path === '' ? 'all' : path
console.log(path)

path = path
  .split('_')
  .filter((it) => it !== 'reality')
  .join('_')
path = path === '' ? 'all' : path
console.log(path)

path = path
  .split('_')
  .filter((it) => it !== 'news')
  .join('_')
path = path === '' ? 'all' : path
console.log(path)
