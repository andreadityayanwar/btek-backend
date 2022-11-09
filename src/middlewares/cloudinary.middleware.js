const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { randomString } = require("../../utils");

const extGenerator = (mimetype) => {
  const mime = ["image/jpeg", "image/png", "image/webp"];
  const exts = ["jpg", "png", "webp"];
  return exts[mime.indexOf(mimetype)];
};

cloudinary.config({
  cloud_name: "du8jywdrm",
  api_key: "474313874537391",
  api_secret: "-e2OSmmztybIoue95_fstJNOOtI"
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const ext = extGenerator(file.mimetype);
    const randString = await randomString(5);
    return {
      folder: "public",
      format: ext,
      public_id: randString,
    };
  },
});

module.exports = storage;
