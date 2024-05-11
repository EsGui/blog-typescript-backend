import jwt from 'jsonwebtoken'

class JsonWebToken {
    public useJwt(email: String, nickname: String) {
        try {
            const token = jwt.sign({email, nickname}, 'Miojo :p');
            return token;
        } catch (error) {
            console.error(`O erro identificado foi: ${error}`)
        }
    }
}

export default JsonWebToken;