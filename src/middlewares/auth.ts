import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import dotenv from 'dotenv';
import JWT from "jsonwebtoken";

dotenv.config();

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        // Fazer verificação de auth
        let success = false;

        if (process.env.AUTH_MODE == 'basic') {
            if (req.headers.authorization) {
                const [authType, token] = req.headers.authorization.split(' ');
                if (authType === 'Basic') {
                    let decoded: string = Buffer.from(token, 'base64').toString();
                    let [email, password]: string[] = decoded.split(':');

                    if (token.length >= 2) {
                        let hasUser = await User.findOne({
                            where: {
                                email: email,
                                password: password
                            }
                        });

                        if (hasUser) {
                            success = true;
                        }
                    }
                }
            }
        }

        if (process.env.AUTH_MODE == 'jwt') {
            if (req.headers.authorization) {
                const [authType, token] = req.headers.authorization.split(' ');
                if (authType === 'Bearer') {
                    try {
                        JWT.verify(
                            token, 
                            process.env.JWT_SECRET_KEY as string
                        ); 
                        
                        success = true;
                    } catch (error) {}
                }
            }
        }

        if (success) {
            next();
        } else {
            res.status(403);
            res.json({ error: 'Não autorizado' });
        }
    }
}