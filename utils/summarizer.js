import { v4 as uuidv4 } from 'uuid'


// Generate a UUID
function uuid() {
    return uuidv4();
}
export function summarizer (text) {
    let summarizedText = {
        id: uuid(),
        summary: text,
        saved: false
    }
    return summarizedText
}