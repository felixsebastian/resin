const { Strategy, ExtractJwt } = passportJWT;
import passportJWT from "passport-jwt";
import rootUser from "../config/rootUser";

export default new Strategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    if (payload === "ROOT_USER") return done(rootUser);
    let user;
    if ((user = db.Users.findAll().find(user => user.id === payload)))
      return done(user);
  }
);
