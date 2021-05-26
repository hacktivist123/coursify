module.exports = async (req, res) => {
  const { courseId } = req.query
  res.send(`charging card for course ${courseId}`)
}
