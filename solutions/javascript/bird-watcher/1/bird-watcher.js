// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    totalBirds += birdsPerDay[index];
  }
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let start = (week - 1) * 7;
  let days = Object.values(birdsPerDay).slice(start, start + 7);
  let totalBirdsInWeek = 0;
  for (let index = 0; index < days.length; index++) {
    totalBirdsInWeek += days[index];
  }
  return totalBirdsInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  const days = Array.from(birdsPerDay);
  for (let i = 0; i < days.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
