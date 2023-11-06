import { classNames } from './classNames'

describe('classNames', function () {
  it('with only params', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass')
  })
  it('with additional params', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2')
  })
  it('with mods', () => {
    expect(classNames('someClass', { hover: true, scroll: true }, ['class1', 'class2']))
      .toBe('someClass hover scroll class1 class2')
  })
  it('with mods', () => {
    expect(classNames('someClass', { hover: true, scroll: false }, ['class1', 'class2']))
      .toBe('someClass hover class1 class2')
  })
})
