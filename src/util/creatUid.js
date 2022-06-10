export default function () {
    var time = new Date();
    var num = Math.floor(Math.random() * 10)
    return time.getTime() + num;
}