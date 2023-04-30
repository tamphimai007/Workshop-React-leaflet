const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            'file_' +
            Date.now() +
            '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1]
        );
    },
});
let upload = multer({
    storage: storage,
});
let uploadFile = upload.single("file");
