export default function convertHourToMinutes(time: string) {
    // We're receiving time in "hh:mm" format so we are spliting data into "hour" and "minute"
    const [hour, minutes] = time.split(":").map(Number);
    const timeInMinutes = hour * 60 + minutes;
    return timeInMinutes;
}
