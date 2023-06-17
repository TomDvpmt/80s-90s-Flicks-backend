const multer = require("multer");

const imgMimeTypes = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/bmp": "bmp",
    "image/webp": "webp",
};

try {
    const fileFilter = (req, file, callback) => {
        const extension = imgMimeTypes[file.mimetype];
        if (Object.values(imgMimeTypes).includes(extension)) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    };
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "images/avatars");
        },
        filename: (req, file, callback) => {
            const formatedName = file.originalname
                .split(" ")
                .join("_")
                .split(".")
                .join("_");
            const extension = imgMimeTypes[file.mimetype];
            callback(null, formatedName + Date.now() + "." + extension);
        },
    });

    module.exports = multer({ storage, fileFilter }).single("avatarInput");
} catch (error) {
    console.log(error.message);
}
