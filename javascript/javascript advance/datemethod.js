

var now = new Date();

// ..............get dates and times................
console.log(now)
console.log(now.toDateString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getTime());

// ...............set dates and Times...............

now.setDate(4);
console.log(now)
console.log(now.getDate())
console.log(now.getDay())

now.setFullYear(2025)
console.log(now);
