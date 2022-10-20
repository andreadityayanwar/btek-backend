const profileModel = require("../models/profile.model");

exports.readProfileById = async (req, res) => {
  try {
    const profile = await profileModel.selectProfileByUserId(req.params.id || req.userData.id);
    if(profile.rowCount){
      return res.json({
        success: true,
        message: "Profile user with ID "+ req.params.id,
        results: profile.rows[0]
      });
    }

    return res.status(400).json({
      success: false,
      message: "User with ID "+ req.params.id + " not found"
    });
  } catch(err){
    return res.status(500).json({
      success: false,
      message: "ERROR: "+err.message
    });
  }
};

exports.updateProfile = async(req, res) => {
  try {
    const profile = await profileModel.updateProfileById(req.userData.id, req.body);
    if(profile.rowCount){
      return res.json({
        success: true,
        message: "Update profile success",
        results: profile.rows[0]
      });
    }
  }catch(err) {
    return res.status(500).json({
      success: false,
      message: "ERROR: "+err.message
    });
  }
};
