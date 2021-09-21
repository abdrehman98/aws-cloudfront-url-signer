const AWS = require('aws-sdk');

// Try to use process.env.PRIVATE_KEY instead of exposing your key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAxvEeIjjJTOuCTrhp5MfPOER2e3hFtynIeiqk31UCKosoY3Xx
UB74kPPWR4I2ZErS0zUxvEgA8pamc6c2KMMHfxBfNNFb6lepbWBsDl6enAfRVocb
W58n/JehKbiQ0Z40rG58kIqY/GnDgJvIwumvciQPw/5H1LScJZGTwb78eBY7TN0M
+cyIwI3cwDN0C29OSZEXTLs+T+inxMZQ6sbyeMOOk6AnNWkF6tLL8lsEIvqbwo9W
T/zH8mjJJ90yr92tXONjjY2DER+miAec3OGgZwShL2uwABbjkiHfDYEwrIP4FS1A
qr5WLQgKr0cxLkdKV55TB0REKSFwv6CQYZ1V2wIDAQABAoIBAQCHZTSn/9Po2OP/
pXzUarR6TAYDNDDmXraFhp5dLOLjh3/+aRfJ+robFQjB9DoGefIQMsTdqneSors4
PRYcGdfxP3g8XzxaOj0iJpyEDxuNf7iWVi9lZOV3AM97sJRHRY/9xthaGynRqD2Z
Ou0g0qBIY4ijUF0cw6r92p0gIFZ9dxcic99F2dUL39c+1RzPNcGzjyUxUwKuUatH
x21EwHbrxLGjIuPcaM3bAwj9MryExfzaIcAHXvuJtyNVMM5No/HOQm872WEsabOF
7j2vySrY846i37c57DekGestH32pO7N9u5q56d9ojcmN9jbi66Lc3nMnFitJNAki
o4mqXIy5AoGBAPpIIa0PB7CekheFfxCtnTSUOMqPKq3kyz8sbhYCbEvoQHa3n7Bz
BfqnZ9uYsa/t4ml4eQFh/gHVe45xIlx46UGy7CvaeL022w5AOZ+jPPxtiOi3ROWn
gGCtuXDHI6dmxo5I2kcqL7rdT0bdaJWTRB4Ol3UcV0Gt9fUNuiBL3CK9AoGBAMt8
tIX0WPti946S3g8kkkn1cGbFs8JFIPJIoUy6UxxcdPFk4XWBorAkytFPPut2wewM
ZTcAysY5SZtRz5xru+gZ9DOVKcj+SjhOaA06EB1/LuTIH8DQlOUve8KH5Ts18slk
pooZzIXX2EwYQqpz8MGPyCmVoP/AslTUJ88sGPB3AoGAY7pOQOkWRVhKGjlFcl3b
oFHXd08o0HW0Tw3jJ737bRu0ZBmy9do/bas7BROI6fM+Hoy0mspzLkPkodOOv44m
U9l5pde9+JddHgaVb3jaGjODNEeimmfuDZfrpnaTTGb1g0igQW8b6be5mSEsRT2T
DO7/htiuJCuvL+AyZCAWLXkCgYBPS+qBZQYj+J4mFj+owQStA5NoyVRSuWOsZvdM
kjN/EtyTkU923izK3ZuX03zef2n0laP/ujRK6NoxR8FS4HzaZvrN+yvMYqQDqzJL
LTxIcl6Q0xfkqKPNaCKfXRvMZiqVpr5rhMA5zDJC/RVFnWbN1z0WT3PtFmeoPQDC
cBnL4wKBgBQBUnZ0oNXNiWbjrKZZ6MgMniLok6hE9DWewKqhHQSUOY6rpAnVbsbi
J7Z8tXRW7IBzI2NrsKOW3Q6YTGzSQlRnBuAyfxApEiVEv+vUdokFluP4Yr/mgnI2
5CHT7cgMu4Yd9gKD+xuIgicuDLn1sswa13HiTl+FGuiUH23kaeKq
-----END RSA PRIVATE KEY-----`

const cloudFront = new AWS.CloudFront.Signer('K33I9MUKWWANNB', privateKey);

cloudFront.getSignedUrl({
  url: 'https://d1y3ljz7b41w27.cloudfront.net/LCH.png',
  expires: Math.floor((new Date()).getTime() / 1000) + (60 * 60 * 1) // Current Time in UTC + time in seconds, (60 * 60 * 1 = 1 hour)
}, (err, url) => {
  if (err) throw err;
  console.log(url);
})