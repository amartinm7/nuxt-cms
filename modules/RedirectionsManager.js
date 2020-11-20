const redirections = () => {
  return [{ from: '/temporadas/(.*)$', to: '/seasons/$1' }]
}

export { redirections }
