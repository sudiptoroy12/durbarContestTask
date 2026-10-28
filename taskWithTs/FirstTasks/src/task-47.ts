// Find Free Time Intervals

// Given a list of booked time intervals and a working-day time range, return all available time intervals when no booking exists. All time values are numbers representing points in time (e.g., minutes from midnight).

// Booked intervals may overlap with each other or extend beyond the working hours. The output should be a list of non-overlapping intervals, sorted by their start times.

// Examples
// findFreeTime([[10, 12], [14, 16]], [9, 17]);
// // Expected output: [[9, 10], [12, 14], [16, 17]]

// findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]);
// // Expected output: [[9, 10], [16, 17]]
// // Explanation: [10, 12], [11, 15], and [14, 16] merge into one booked block [10, 16].
// Example 1
// Input: bookedIntervals = [[10,12],[14,16]], workingHours = [9,17]

// Output: [[9,10],[12,14],[16,17]]

// Example 2
// Input: bookedIntervals = [[10,12],[14,16],[11,15]], workingHours = [9,17]

// Output: [[9,10],[16,17]]

// Constraints
// Time values are non-negative numbers.
// Intervals `[start, end]` always have `start < end`.
// The `workingHours` array will always be a valid interval `[start, end]`.
// The output intervals must be sorted by start time and be non-overlapping.

// Topics
// arrays
// intervals
// comparison

// Hints
// Hint 1. First, filter and clip all booked intervals to be strictly within the `workingHours` range.
// Hint 2. Then, sort the clipped booked intervals by their start times.
// Hint 3. Merge any overlapping booked intervals to get a consolidated list of occupied time.
// Hint 4. Finally, find the gaps between the consolidated booked intervals and the `workingHours` boundaries to determine the free time.



function findFreeTime(
  bookedIntervals: number[][],
  workingHours: [number, number]
): number[][] {
  const [workStart, workEnd] = workingHours;

  const bookings: [number, number][] = [];

  for (const interval of bookedIntervals) {
    const start = interval[0];
    const end = interval[1];

    if (start === undefined || end === undefined) continue;

    const clippedStart = Math.max(start, workStart);
    const clippedEnd = Math.min(end, workEnd);

    if (clippedStart < clippedEnd) {
      bookings.push([clippedStart, clippedEnd]);
    }
  }

  bookings.sort((a, b) => a[0] - b[0]);

  const merged: [number, number][] = [];

  for (const [start, end] of bookings) {
    const last = merged[merged.length - 1];

    if (last !== undefined && start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  const free: [number, number][] = [];
  let currentTime = workStart;

  for (const [start, end] of merged) {
    if (currentTime < start) {
      free.push([currentTime, start]);
    }

    currentTime = Math.max(currentTime, end);
  }

  if (currentTime < workEnd) {
    free.push([currentTime, workEnd]);
  }

  return free;
}

console.log(findFreeTime([[10, 12], [14, 16]], [9, 17]));
// [[9, 10], [12, 14], [16, 17]]

console.log(findFreeTime([[10, 12], [14, 16], [11, 15]], [9, 17]));
// [[9, 10], [16, 17]]
