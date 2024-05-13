import multer from 'multer';
import path from 'path';

class Storage {
    public send() {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "./src/uploads/image-product");
            },

            filename: (req, file, cb) => {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        });
        return storage;
    }
}

const upload = multer({ storage: new Storage().send() });

export default upload;