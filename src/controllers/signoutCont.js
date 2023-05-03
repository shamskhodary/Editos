const signout = (req, res) => {
    res.clearCookie("tokie").status(200).json({
        message: "user signed out"
    });
}

export default signout;