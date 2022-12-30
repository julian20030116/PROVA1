(function () {
  const selfEnv = 'pro'
  let initSrc = ''
  switch (selfEnv) {
    case 'local':
      window.willdeskEnv = 'local'
      initSrc = ''
      break
    case 'dev':
      window.willdeskEnv = 'development'
      initSrc = 'https://hctest.sealapps.com'
      break
    case 'pro':
      window.willdeskEnv = 'production'
      initSrc = 'https://cdn.willdesk.com/wdc'
      break
    case 'allplat':
      window.willdeskEnv = 'development_allplatform'
      initSrc = 'https://utest.sealapps.com'
      break
    default:
      window.willdeskEnv = 'production'
      initSrc = 'https://cdn.willdesk.com/wdc'
      break
  }
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = `${initSrc}/willdesk-entrance.min.js?v=1671438161`
  document.body.appendChild(s)
})()
