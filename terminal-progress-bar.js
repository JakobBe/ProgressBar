// def progress_bar
//   x = 0
//   z = 50

//   while x < z do
//     print '[' + ('#'*x) + (" "*(z-x)) + ']' + "#{x*100/z}%" + "\r"
//     x = x + 1
//     sleep 0.01
//   end

//   puts '[' + ('#'*x)  + (" "*(z-x)) + ']' + "#{x/z*100}%"

//   x = 0
//   z = 50

//   z.times do
//     print '[' + ('#'*x) + (" "*(z-x)) + ']' + "#{x*100/z}%" + "\r"
//     x = x + 1
//     sleep 0.1
//   end
// end

// progress_bar

const progressBar = async(current, max) => {
  let relativeValue = Math.ceil(current * 100 / max)
  let progress = Math.ceil(relativeValue / 2)

  let logString = `[${'#'.repeat(progress)}${' '.repeat(50 - progress)}]  ${relativeValue }% \r`
  process.stdout.write(logString);

  if(current === max) {
    logString = '[' + '#'.repeat(progress) + " ".repeat(50 - progress) + ']' + `100%`
    console.log(logString)
  }
}


var times = 200;
const iAmAAsyncFunction = async() => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  for (var i = 1; i <= times; i++) {
    await delay(50)
    progressBar(i, times)
  }
}

// iAmAAsyncFunction();

process.stdout.write('Connecting to Database...');
console.log(' Database connected')

process.stdout.write('Connecting to Database...');
console.log(' Database connected')
// console.log('Hello')
// process.stdout.write(' world');

