const redirections = () => {
  return [{ from: '/temporadas/(.*)$', to: '/seasons/$1', statusCode: 301 }]
}

export { redirections }
