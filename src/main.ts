import * as core from '@actions/core'
import {execute} from 'auto'
import parseArgs from 'auto/dist/parse-args'

async function run(): Promise<void> {
  try {
    const argsInput = core.getInput('args')
    const [command, args] = parseArgs(argsInput.split(' '))
    await execute(command, args)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
