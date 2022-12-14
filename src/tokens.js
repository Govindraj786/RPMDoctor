const twilio = require('twilio')
const AccessToken = twilio.jwt.AccessToken
const { VideoGrant } = AccessToken

const generateToken = config => {
  // console.log("Token",config)
  return new AccessToken(
    accountSid=process.env.TWILIO_ACCOUNT_SID,
    apiKey=process.env.TWILIO_API_KEY,
    apiSecret =process.env.TWILIO_API_SECRET
   
  )
}

const videoToken = (identity, room, config) => {
  debugger
  console.log("test", identity, room, config);
  let videoGrant
  if (typeof room !== 'undefined') {
    videoGrant = new VideoGrant({ room })
  } else {
    videoGrant = new VideoGrant()
  }
  const token = generateToken(config)
  token.addGrant(videoGrant)
  token.identity = identity
  return token
}

module.exports = { videoToken }
