'use strict';

const FORMULA_VERSION = '1.0.0';

function fail(code, message, field) {
  return { ok: false, error: { code, message, field: field || null, formula_version: FORMULA_VERSION } };
}

function money(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function finiteNumber(value, field, minimum) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  return value;
}

function ratio(value, field) {
  finiteNumber(value, field, 0);
  if (value > 1) throw new Error(`INPUT_INVALID:${field}`);
  return value;
}

function run(fn, input) {
  try {
    return { ok: true, formula_version: FORMULA_VERSION, result: fn(input) };
  } catch (error) {
    const [code, field] = String(error.message).split(':');
    return fail(code || 'CALCULATION_FAILED', code === 'INPUT_INVALID' ? '输入缺失或非法' : String(error.message), field);
  }
}

function calculateImpl(input) {
  const classes = input.classes;
  if (!Array.isArray(classes) || classes.length === 0) throw new Error('INPUT_INVALID:classes');
  let capacitySeatSessions = 0;
  let enrolledSeatSessions = 0;
  let bookedHours = 0;
  classes.forEach((item, index) => {
    const capacity = finiteNumber(item.capacity, `classes[${index}].capacity`, 1);
    const students = finiteNumber(item.students, `classes[${index}].students`, 0);
    if (students > capacity) throw new Error(`INPUT_CONFLICT:classes[${index}].students`);
    const sessions = finiteNumber(item.sessions, `classes[${index}].sessions`, 1);
    const hours = finiteNumber(item.hours_per_session, `classes[${index}].hours_per_session`, 0.01);
    capacitySeatSessions += capacity * sessions;
    enrolledSeatSessions += students * sessions;
    bookedHours += sessions * hours;
  });
  const available = finiteNumber(input.available_room_hours_total, 'available_room_hours_total', 0.01);
  return {
    capacity_seat_sessions: capacitySeatSessions,
    enrolled_seat_sessions: enrolledSeatSessions,
    fill_rate: enrolledSeatSessions / capacitySeatSessions,
    booked_room_hours: money(bookedHours),
    available_room_hours: money(available),
    utilization: bookedHours / available,
    unused_room_hours: money(Math.max(available - bookedHours, 0)),
    unit: '座位课次与小时',
  };
}

function calculate(input) {
  return run(calculateImpl, input || {});
}

module.exports = { calculate, FORMULA_VERSION };
