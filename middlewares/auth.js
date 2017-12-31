module.exports = (req, res, next) => {
  console.log(req.query)
  if (req.query.username === 'a') {
    next()
  } else {
    next('please go away')
  }
}
