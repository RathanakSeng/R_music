// const nodemailer = require('nodemailer')
// const xoauth2 = require('xoauth2')
const image = require('qr-image')
const fs = require('fs')
// const path = require('path')
export default {
  index () {
    image
      .image('http://wwww.youtube.com', { type: 'png', size: 20 })
      .pipe(fs.createWriteStream('static/myQr.png'))

    // var transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     type: 'OAuth2',
    //     user: 'rseng143@gmail.com',
    //     clientId: '467837647007-u9npueh07gmp32d7t3eobcq99ohj33em.apps.googleusercontent.com',
    //     clientSecret: 'NTboP23knKlSy37iZsG0tpeT',
    //     refreshToken: '1/KhRnmJPj2Q01kOdw4BJ23I8zNZnFRInVIo4fjSHFQv8',
    //     accessToken: 'ya29.GluPBiQFuWDAQcK8qAd_lSm_nRtvg0m1q8YRQnzqrAv-u2aU_tsJXz0DnLzs3Oyfunrw6pIuW2I4xqlANgUiZ2-NGFtaEc9vSGKbVC-h1_AvO4F0EPzfnE-UmpP0'
    //   }
    // })

    // var mailOptions = {
    //   from: 'Rathanak <rseng143@gmail.com>',
    //   to: 'sengrathanak17@kit.edu.kh',
    //   subject: 'Nodemailer test',
    //   text: 'Hello World!!',
    //   html: 'Embedded image: <img src=\'cid:unique@kreata.ee\'/>',
    //   attachments: [{
    //     filename: 'myQr.png',
    //     path: path.join(__dirname.join('/public/myQr.png')),
    //     cid: 'unique@kreata.ee' // same cid value as in the html img src
    //   }]
    // }

    // transporter.sendMail(mailOptions, function (err, info) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(image)
    //   }
    // })
  }
}
