
const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
} = require("../controllers/appointmentController");

router.post("/", createAppointment);
router.get("/", getAppointments);
router.get("/:id", getAppointmentById);
router.put("/:id", updateAppointment);
router.patch("/:id/cancel", cancelAppointment);

module.exports = router;
