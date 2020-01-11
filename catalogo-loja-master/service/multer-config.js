const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const multerS3 = require('multer-s3')

const AWS = require('aws-sdk')

const storageS3 = new AWS.S3()

const storageTypes = {
    local: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'))
        },
        filename: function (req, file, cb) {
            crypto.randomBytes(16, function (err, hash) {
                if (err) cb(err)

                file.key = `${hash.toString('hex')}-${file.originalname}`

                cb(null, file.key)
            })
        }
    }),
    s3: multerS3({
        s3: storageS3,
        bucket: `${process.env.AWS_BUCKET}`,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, cb) {
            crypto.randomBytes(16, function (err, hash) {
                if (err) cb(err)

                const filename = `${hash.toString('hex')}-${file.originalname}`

                cb(null, filename)
            })
        }
    })
}

const opcoesMulter = {
    storage: storageTypes['s3'],
    limits: {
        fileSize: 2 * 1024 * 1024

    },
    fileFilter: function (req, file, cb) {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)

        } else {
            cb(new Error('invalid file type'))
        }
    }
}
module.exports = multer(opcoesMulter)