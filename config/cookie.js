const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "none",
};

module.exports = COOKIE_OPTIONS;
