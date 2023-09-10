document.addEventListener("DOMContentLoaded", function() {
    const currentUTCTimeA1 = document.getElementById('currentUTCTime');
    const currentDayOfTheWeekA1 = document.getElementById('currentDayOfTheWeek');
    
    function updateCurrent() {
        const date = new Date();
        const utcTime = date.getTime();

        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const currentDay = daysOfWeek[date.getUTCDay()];

        currentUTCTimeA1.textContent = utcTime;
        currentDayOfTheWeekA1.textContent = currentDay;    
    }

    setInterval(updateCurrent, 1000);
    updateCurrent();
});