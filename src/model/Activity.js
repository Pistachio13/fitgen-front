import uuid from "react-uuid"

class Activity {
    constructor({
        id = uuid(),
        activityName = '',
        hour = 0,
        minute = 0,
        startDate = new Date(),
        endDate = new Date(),
        description, }) {
        this.id = id
        this.activityName = activityName
        this.hour = Number(hour)
        this.minute = Number(minute)
        this.startDate = startDate
        this.endDate = endDate
        this.description = description
    }

    get duration() {
        return (
            this.endDate.getTime() - this.startDate.getTime()
        )
    }

    get durationInSeconds() {
        return Math.floor(
            this.duration / 1000
        )
    }
}

export default Activity;