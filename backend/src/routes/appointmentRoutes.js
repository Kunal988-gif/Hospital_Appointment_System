const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
} = require('../controllers/appointmentController');

router.post('/', authMiddleware, createAppointment);
router.post('/book', authMiddleware, createAppointment);
router.get('/', authMiddleware, getAppointments);
router.get('/:id', authMiddleware, getAppointmentById);
router.put('/:id', authMiddleware, updateAppointment);
router.patch('/:id/cancel', authMiddleware, cancelAppointment);
router.patch('/:id', authMiddleware, updateAppointment);

module.exports = router;