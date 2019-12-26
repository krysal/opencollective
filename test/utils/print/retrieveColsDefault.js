import childProcess from 'child_process'
import test from 'ava'
import { stub } from 'sinon'
import { retrieveCols } from '../../../src/utils/print'

test('retrieveCols returns default value when execSync is NaN', t => {
  const execStub = stub(childProcess, 'execSync').returns('ABC')
  t.is(retrieveCols(), 80)
  execStub.restore()
})
