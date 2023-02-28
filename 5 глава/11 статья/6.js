function getSecondsToday() {
    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0);
    return Math.round((Date.now() - dayStart) / 1000);
}
