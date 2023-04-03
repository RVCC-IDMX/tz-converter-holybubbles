const yargs = require('yargs');
const moment = require('moment-timezone');

const args = yargs(process.argv.slice(2))
  .scriptName('tz')
  .usage('$0 <timezone> [--format]', 'convert to requested timezone')
  .option('timezone', {
    default: 'America/Los_Angeles',
    description: 'The timezone to convert to from the default timezone',
    type: 'string',
  })
  .option('format', {
    default: false,
    description: 'If this flag is set to true, output will be formatted for easy reading',
    type: 'boolean',
  })
  .help()
  .argv;

const targetTimezone = args._[0];

console.log(args);

moment.tz.setDefault('America/New_York');

if (args.format) {
  console.log(`The time here is: ${moment.tz().format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
  console.log(`The time in ${targetTimezone} is: ${moment.tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`The time here is: ${moment.tz().format()}`);
  console.log(`The time in ${targetTimezone} is: ${moment.tz(targetTimezone).format()}`);
}
