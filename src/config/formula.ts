import { round, padStart } from 'lodash-es'

import { thousandSeparator } from '@zebraxid/frontend-kit/src/utils/number'

export const calculateGrowth = (currentValue = 0, previousValue = 0) => {
  if (currentValue === 0 || previousValue === 0) {
    return 0
  }

  return round(
    ((currentValue / previousValue) * 100) - 100,
    1,
  ) || 0
}

export const calculateProductivity = (coal = 0, runningMinutes = 0, decimalPlaces = 1) => round(
  coal / (runningMinutes / 60), // convert to hour
  decimalPlaces,
) || 0

export const calculateProgress = (currentValue = 0, targetValue = 0) => round(
  (currentValue / targetValue) * 100,
  1,
) || 0

export const convertionCalculateKiloTon = (currentValue = 0, decimalPlaces = 1) => round(
  currentValue / 1000,
  decimalPlaces,
) || 0

export const convertionCalculateMillion = (currentValue = 0) => round(
  currentValue / 1000000,
  2,
) || 0

export const convertionCalculateKiloMeter = (currentValue = 0, decimalPlaces = 1) => round(
  currentValue / 1000,
  decimalPlaces,
) || 0

export const calculateStrippingRatio = (overburdenValue = 0, coalValue = 0, decimalPlaces = 1) => {
  if (overburdenValue === 0 || coalValue === 0) {
    return 0
  }

  return round(
    (overburdenValue / coalValue),
    decimalPlaces,
  ) || 0
}

export const calculateStrippingRatioGrowth = (
  currentStrippingRatio = 0,
  previousStrippingRatio = 0,
) => {
  if (currentStrippingRatio === 0 || previousStrippingRatio === 0) {
    return 0
  }

  return round(
    (currentStrippingRatio - previousStrippingRatio),
    1,
  ) || 0
}

export const calculateStrippingRatioProgress = (currentStrippingRatio = 0, maximum = 10) => round(
  (currentStrippingRatio / maximum) * 100,
  1,
) || 0

export const calculateDelta = (currentValue = 0, targetValue = 0, decimalPlaces = 1) => {
  if (currentValue === 0 || targetValue === 0) {
    return 0
  }

  return round(
    (currentValue - targetValue), decimalPlaces,
  ) || 0
}

export const calculateStrippingRatioDelta = (
  currentValue = 0,
  thresholdValue = 0,
  decimalPlaces = 1,
) => {
  if (currentValue === 0 || thresholdValue === 0) {
    return 0
  }
  return round(
    (thresholdValue - currentValue), decimalPlaces,
  ) || 0
}

export const calculateWeightedDistance = (overburden, distance, decimalPlaces = 1) => {
  if (overburden === 0 || distance === 0) {
    return 0
  }
  return round(distance / overburden, decimalPlaces)
}

export const convertionCalculateHour = (seconds, decimalPlaces = 1) => {
  if (seconds === 0) {
    return 0
  }
  return round((seconds / 3600), decimalPlaces) || 0
}

export const calculatePercent = (numerator, denominator = 1, decimalPlaces = 1) => (
  round(((numerator / denominator) * 100), decimalPlaces) || 0
)

export const calculatePercentString = (numerator, denominator, decimalPlaces = 1, defaultText = 'infinity') => {
  const result = calculatePercent(numerator, denominator, decimalPlaces)
  if (!Number.isFinite(result)) {
    return defaultText
  }
  return `${thousandSeparator(result, decimalPlaces)}%`
}

export const calculateAverage = (sum, count, decimalPlaces = 2) => {
  if (sum === 0 || count === 0) {
    return 0
  }
  return round((sum / count), decimalPlaces) || 0
}

export const calculateFinalStock = (initial, stockIn, stockOut) => initial + stockIn - stockOut || 0

export const convertSecondsToHourMinutes = (secondsIn = 0) => {
  const hours = Math.floor(secondsIn / 3600)
  const minutes = Math.floor((secondsIn % 3600) / 60)
  const seconds = Math.floor(secondsIn % 60)

  return `${padStart(hours, 2, '0')}:${padStart(minutes, 2, '0')}:${padStart(seconds, 2, '0')}`
}

export default {
  calculateAverage,
  calculateDelta,
  calculateGrowth,
  calculatePercent,
  calculateProductivity,
  calculateProgress,
  calculateStrippingRatio,
  calculateStrippingRatioDelta,
  calculateStrippingRatioGrowth,
  calculateStrippingRatioProgress,
  calculateWeightedDistance,
  convertSecondsToHourMinutes,
  convertionCalculateHour,
  convertionCalculateKiloMeter,
  convertionCalculateKiloTon,
}
