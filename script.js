const notifications = document.querySelectorAll(".notification");
const markAllAsReadBtn = document.querySelector(".mark_all_as_read");
const numberOfUnReadNotifications = document.querySelector(".number_of_notifications");
const textWithDot = document.querySelectorAll(".text")

markAllAsReadBtn.onclick = function() {
    numberOfUnReadNotifications.innerHTML = "0";
    notifications.forEach((notification) => {
        notification.classList.remove("unread_notification");
        textWithDot.forEach((text) => {
            text.classList.add("no_after")
        } )
        
    })
}
