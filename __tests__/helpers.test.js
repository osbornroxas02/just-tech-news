const { format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

module.exports = {
    format_date: date => {
        test('format_date() returns a date string', () => {
            const date = new Date('2020-03-20 16:12:03npm test');

            expect(format_date(date)).toBe('3/20/2020');
        });
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
}

module.exports = {
    format_date: date => {
        test('format_url() returns a simplified url string', () => {
            const url1 = format_url('http://test.com/page/1');
            const url2 = format_url('https://www.coolstuff.com/abcdefg/');
            const url3 = format_url('https://www.google.com?q=hello');

            expect(url1).toBe('test.com');
            expect(url2).toBe('coolstuff.com');
            expect(url3).toBe('google.com');
        });
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
}