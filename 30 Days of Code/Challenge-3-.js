function main() {
    const N = parseInt(readLine().trim(), 10); // readLine() means it'll take users input // parseInt() means it'll convert the String into Integer
    if(N%2 != 0) {
        console.log("Weird");
}else if (N%2 == 0 && (N >= 2 && N <= 5 )) {
    console.log("Not Weird");
}else if (N%2 == 0 && (N >= 6 && N <= 20)) {
    console.log("Weird");
}else if (N%2 == 0 && (N > 20)) {
    console.log("Not Weird")
}
}