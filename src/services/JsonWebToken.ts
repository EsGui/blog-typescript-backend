import jwt, { JwtPayload } from 'jsonwebtoken'

class JsonWebToken {
    public useJwt(email: String, nickname: String) {
        try {
            const token = jwt.sign({email, nickname}, 'Miojo :p');
            return token;
        } catch (error) {
            console.error(`O erro identificado foi: ${error}`)
        }
    }

    public verifyJwt(token: string, secret: string): any {
        try {
            const verify = jwt.verify(token, secret);
            console.log(verify)
            return verify;
        } catch (error) {
            console.error(`O erro identificado foi: ${error}`);
        }
    }
}

export default JsonWebToken;