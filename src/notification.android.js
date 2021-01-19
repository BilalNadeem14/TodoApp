import PushNotification from 'react-native-push-notification'
import moment from 'moment'


const showNotification = (title, message) => {
    console.log('inside notification function************************************************', title, message)

    PushNotification.getChannels(function (channel_ids) {
        console.log('channel name', channel_ids); // ['channel_id_1']
    });
    PushNotification.localNotification({
        channelId: 'zxc123',//'fcm_fallback_notification_channel',
        channelName: 'Hello',
        id: '123',
        title,
        message
    })
}

const cancelNotification = (id) => {
    console.log('cancel notification => id: ', id)
    PushNotification.getChannels(function (channel_ids) {
        console.log('channel name', channel_ids); // ['channel_id_1']
    });
    PushNotification.cancelLocalNotifications({ id: id }); //id: '123'
}

const handleScheduleNotification = (id, titleOfTodo, date, category) => { //(ID, title, date, category)
    const title = category
    const message = titleOfTodo


    var d = new Date(2021, 0, 12, 19, 10, 55);
    var d2 = new Date(Date.now() + 0.5 * 1000)
    //d.getDate()
    //d.getFullYear()
    //d.getMonth()
    //d.getHours()

    var alarm = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())//19, 12, 40) //hours,mins,secs
    // alarm.getDate() //Date.now()
    console.log('d.getDate()', alarm.getDate()) // Date.now(), moment().format('h :  mm :  ss a')
    console.log('d.getMonth()', alarm.getMonth())
    console.log('d.getFullYear()', alarm.getFullYear())
    console.log('getHours', alarm.getHours())
    console.log('getMinutes()', alarm.getMinutes())
    console.log('getSeconds', alarm.getSeconds())


    PushNotification.localNotificationSchedule({
        channelId: 'zxc123',//'fcm_fallback_notification_channel',
        channelName: 'scheduled',
        title,
        message,
        id: id,
        // date: new Date(Date.now() + 0.5 * 1000)
        date: alarm //+ 0.5 * 1000 //gives error
        // new Date(Date.now() + date * 1000)
    })
}

const handleCancel = () => {
    PushNotification.cancelAllNotifications()
}

export { showNotification, handleScheduleNotification, handleCancel, cancelNotification }