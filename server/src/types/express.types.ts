import { User } from 'modules/user/user.entity';

declare global {
    namespace Express {
        export interface Request {
            user: User;
        }
    }
}
