//code your solution here
function superbowlWin(Array) {
    for (const record of Array) {
        if (record.result === "W") {
            return record.year
        }
    }
}
record.find(superbowlWin)