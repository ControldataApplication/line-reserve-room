import { displayDate } from "./general";

export function deleteReserve(liff, event, ref) {
    if (event.key == undefined) return;
    ref.child(event.key).remove();
    if (liff.isInClient()) {
        let msg = `ยกเลิกการจองห้องประชุมเรียบร้อยแล้ว\nห้องประชุม: ${event.name
            }\nวันที่: ${displayDate(
                event.start,
                true,
                false
            )}\nเวลา: ${displayDate(
                event.start,
                false,
                true
            )} - ${displayDate(event.end, false, true)}`;
        sendMsg(msg);
    }
}

export async function sendMsg(liff, text) {
    if (liff.getContext().type !== "none") {
        await liff.sendMessages([
            {
                type: "text",
                text: text
            }
        ]);
    }
},
