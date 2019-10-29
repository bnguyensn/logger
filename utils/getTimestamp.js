const defaultLocaleOptions = {
  hour12: false,
  weekday: 'long',
  era: 'short',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short',
};

const defaultTimestampOptions = {
  locale: undefined,
  localeOptions: defaultLocaleOptions,
};

function padZeroes(number, maxDigit = 2) {
  let zeroesCount = 0;

  let i = maxDigit - 1;
  while (i > 0) {
    const max = Number(`1${'0'.repeat(i)}`);

    if (number < max) {
      zeroesCount += 1;
    } else {
      break;
    }

    i--;
  }

  const zeroes = '0'.repeat(zeroesCount);

  return `${zeroes}${number}`;
}

function constructDateString(date) {
  const d = padZeroes(date.getDate());

  const m = padZeroes(date.getMonth() + 1);

  const y = date.getFullYear();

  const hr = padZeroes(date.getHours());

  const min = padZeroes(date.getMinutes());

  const sec = padZeroes(date.getSeconds());

  const ms = padZeroes(date.getMilliseconds(), 3);

  return `${d}/${m}/${y} ${hr}:${min}:${sec}:${ms}`;
}

function getTimestamp(timestampOptions = defaultTimestampOptions) {
  const now = new Date(Date.now());

  if (now.toLocaleDateString && !timestampOptions.custom) {
    const { locale, localeOptions } = timestampOptions;
    return now.toLocaleDateString(locale, localeOptions);
  }

  return constructDateString(now);
}

module.exports = getTimestamp;
