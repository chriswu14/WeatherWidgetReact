export default function transformData(data) {    
    const {
        location: { city, country },
        item: { forecast, condition },
        atmosphere: { humidity },
        wind: { speed }
    } = data.query.results.channel;

    const { date, day, high, low } = forecast[0];
    const { code, temp, text } = condition;

    return {
        city: city,
        country: country,
        date: date,
        humidity: humidity,
        windSpeed: speed,
        day: day,
        high: high,
        low: low,
        type: text,
        code: code,
        degree: temp,
        forecast: forecast
    };
}