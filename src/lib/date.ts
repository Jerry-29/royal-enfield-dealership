import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export const formatDate = (dateInput: string | Date | undefined) => {

  if (!dateInput) {
    return {
      full: 'N/A',
      display: 'N/A',
      relative: 'N/A'
    };
  }

  try {
    const date = dayjs(dateInput);

    // Check if date is valid
    if (!date.isValid()) {
      throw new Error('Invalid date');
    }

    return {
      full: date.format('YYYY-MM-DD'),
      display: date.format('MMM D, YYYY'),
      relative: date.fromNow()
    };
  } catch (error) {
    console.error('Date formatting error:', error);
    return {
      full: 'Invalid date',
      display: 'Invalid date',
      relative: 'Invalid date'
    };
  }
};