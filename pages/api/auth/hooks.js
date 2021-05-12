module.exports = async (req, res) => {
  const { email } = JSON.parse(req.body)
  // create user in prisma
  console.log('user created')
  res.send({ received: true })
}
